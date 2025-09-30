const { Worker } = require("worker_threads");
const path = require("node:path");

describe("Worker integration test", () => {

    const createWorkerScript = (workerId, jvmOptions = {}) => {
        return `
            const { parentPort, workerData } = require('worker_threads');
            
            // 模擬 java-bridge 和 glob 模組
            const mockJava = {
                ensureJvm: () => {
                    // 模擬 JVM 初始化
                    return true;
                },
                appendClasspath: () => {
                    // 模擬添加 classpath
                    return true;
                }
            };
            
            const mockGlob = {
                sync: () => [
                    '/worker/mock/path/test1.jar',
                    '/worker/mock/path/test2.jar'
                ]
            };
            
            // 設置模組模擬
            require.cache[require.resolve('java-bridge')] = {
                exports: mockJava
            };
            
            require.cache[require.resolve('glob')] = {
                exports: mockGlob
            };
            
            async function runTest() {
                try {
                    const { raccoonDcm4cheJavaLoader, isJvmInitialized } = require('${path.resolve(__dirname, '../src/index.js').replace(/\\/g, '/')}');
                    
                    // 記錄開始時間
                    const startTime = Date.now();
                    
                    // 嘗試初始化 JVM
                    const java = raccoonDcm4cheJavaLoader(workerData.jvmOptions || {});
                    
                    // 記錄結束時間
                    const endTime = Date.now();
                    
                    // 檢查初始化狀態
                    const initialized = isJvmInitialized();
                    
                    // 發送成功結果
                    parentPort.postMessage({
                        success: true,
                        workerId: workerData.workerId,
                        hasJava: !!java,
                        isInitialized: initialized,
                        executionTime: endTime - startTime,
                        timestamp: Date.now()
                    });
                } catch (error) {
                    console.error(error);
                    // 發送錯誤結果
                    parentPort.postMessage({
                        success: false,
                        workerId: workerData.workerId,
                        error: error.message,
                        stack: error.stack,
                        timestamp: Date.now()
                    });
                }
            }
            
            runTest();
        `;
    };

    test("should initialize JVM correctly in one worker", async  () => {
        const workerScript = createWorkerScript(1);

        const worker = new Worker(workerScript, {
            eval: true,
            workerData: {
                workerId: 1,
            }
        });

        const result = await new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                reject(new Error("Test timed out"));
            }, 5000);
            
            worker.on("message", (data) => {
                clearTimeout(timeout);
                resolve(data);
            });
    
            worker.on("error", (error) => {
                clearTimeout(timeout);
                reject(error);
            });
        });


        await worker.terminate();

        expect(result.success).toBe(true);
        expect(result.hasJava).toBe(true);
        expect(result.isInitialized).toBe(true);
        expect(result.workerId).toBe(1);
    });

    test("should work properly when multiple workers are initialized", async () => {
        const workerCount = 3;
        const workers = [];
        const promises = [];

        for (let i = 0; i < workerCount; i++) {
            const workerScript = createWorkerScript(i + 1);
            const worker = new Worker(workerScript, {
                eval: true,
                workerData: {
                    workerId: i + 1,
                    jvmOptions: {
                        opts: ["-DworkerId=" + (i + 1)],
                    }
                }
            });
            workers.push(worker);

            const promise = new Promise((resolve, reject) => {
                const timeout = setTimeout(() => {
                    reject(new Error("Test timed out"));
                }, 5000);
                worker.on("message", (data) => {
                    clearTimeout(timeout);
                    resolve(data);
                });
                worker.on("error", (error) => {
                    clearTimeout(timeout);
                    reject(error);
                });
            });

            promises.push(promise);
        }
        const results = await Promise.all(promises);

        expect(results).toHaveLength(workerCount);
        results.forEach((result, index) => {
            expect(result.success).toBe(true);
            expect(result.hasJava).toBe(true);
            expect(result.isInitialized).toBe(true);
            expect(result.workerId).toBe(index + 1);
            expect(typeof result.executionTime).toBe('number');
            expect(result.executionTime).toBeGreaterThanOrEqual(0);
        });

        const maxExecutionTime = Math.max(...results.map(result => result.executionTime));
        expect(maxExecutionTime).toBeLessThan(10000);
    });
});