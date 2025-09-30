const path = require("node:path");

const mockJava = {
    ensureJvm: jest.fn(),
    appendClasspath: jest.fn(),
    importClass: jest.fn(),
    importClassAsync: jest.fn()
};

const mockGlob = {
    sync: jest.fn(() => [
        "mock/path/to/jar1.jar",
        "mock/path/to/jar2.jar",
        "mock/path/to/jar3.jar"
    ])
};

jest.mock("java-bridge", () => mockJava);
jest.mock("glob", () => mockGlob);

describe("raccoonDcm4cheJavaLoader singleton test", () => {
    let raccoonDcm4cheJavaLoader, isJvmInitialized, resetJvmState;

    beforeEach(() => {
        jest.clearAllMocks();

        jest.resetModules();

        const indexModule = require("../src/index.js");
        raccoonDcm4cheJavaLoader = indexModule.raccoonDcm4cheJavaLoader;
        isJvmInitialized = indexModule.isJvmInitialized;
        resetJvmState = indexModule.resetJvmState;

        if (resetJvmState) {
            resetJvmState();
        }
    });

    afterEach(() => {
        if (resetJvmState) {
            resetJvmState();
        }
    });

    test("should initialize JVM when first time calling", () => {
        const result = raccoonDcm4cheJavaLoader();

        expect(mockJava.ensureJvm).toHaveBeenCalledTimes(1);

        expect(mockJava.appendClasspath).toHaveBeenCalledTimes(1);

        expect(mockGlob.sync).toHaveBeenCalledTimes(1);

        expect(result).toBe(mockJava);
    });

    test("should return the same instance when calling twice", () => {
        const result1 = raccoonDcm4cheJavaLoader();

        const result2 = raccoonDcm4cheJavaLoader();

        expect(result1).toBe(result2);

        expect(mockJava.ensureJvm).toHaveBeenCalledTimes(1);

        expect(mockJava.appendClasspath).toHaveBeenCalledTimes(1);
    });

    test("should return same instance when calling multiple times", () => {
        const results = [];

        for (let i = 0; i < 10; i++) {
            results.push(raccoonDcm4cheJavaLoader());
        }

        results.forEach((result) => {
            expect(result).toBe(results[0]);
        });

        expect(mockJava.ensureJvm).toHaveBeenCalledTimes(1);

        expect(mockJava.appendClasspath).toHaveBeenCalledTimes(1);
    });

    test("should pass jvmOptions properly", () => {
        const customOptions = {
            opts: ["-Xmx2g", "-Xms1g"],
            classpath: ["/custom/path"]
        };

        raccoonDcm4cheJavaLoader(customOptions);

        expect(mockJava.ensureJvm).toHaveBeenCalledWith(
            expect.objectContaining({
                opts: expect.arrayContaining([
                    "-Xmx2g",
                    "-Xms1g",
                    "--add-opens=java.desktop/javax.imageio.stream=ALL-UNNAMED",
                    "--add-opens=java.base/java.io=ALL-UNNAMED"
                ]),
                classpath: customOptions.classpath
            })
        );
    });

    test("should handle jvmOptions correctly when not an array", () => {
        const customOptions = {
            opts: "-Xmx2g",
            other: "value"
        };

        raccoonDcm4cheJavaLoader(customOptions);

        expect(mockJava.ensureJvm).toHaveBeenCalledWith(
            expect.objectContaining({
                opts: [
                    '--add-opens=java.desktop/javax.imageio.stream=ALL-UNNAMED',
                    '--add-opens=java.base/java.io=ALL-UNNAMED'
                ],
                other: "value"
            })
        );
    });

    test("should load jar files correctly", () => {
        raccoonDcm4cheJavaLoader();

        expect(mockGlob.sync).toHaveBeenCalledWith(
            "**/*.jar",
            expect.objectContaining({
                absolute: true,
                cwd: expect.stringContaining(path.join("src", "javaNode"))
            })
        );

        expect(mockJava.appendClasspath).toHaveBeenCalledWith(
            expect.arrayContaining([
                "mock/path/to/jar1.jar",
                "mock/path/to/jar2.jar",
                "mock/path/to/jar3.jar"
            ])
        );
    });
});

describe("JVM initialization state test", () => {
    let isJvmInitialized, resetJvmState, raccoonDcm4cheJavaLoader;

    beforeEach(() => {
        jest.resetModules();
        jest.clearAllMocks();

        const indexModule = require("../src/index.js");

        raccoonDcm4cheJavaLoader = indexModule.raccoonDcm4cheJavaLoader;
        isJvmInitialized = indexModule.isJvmInitialized;
        resetJvmState = indexModule.resetJvmState;

        if (resetJvmState) {
            resetJvmState();
        }
    });

    test("the jvm initialized state should be false when first time calling", () => {
        expect(isJvmInitialized()).toBe(false);
    });

    test('the jvm initialized state should be true after calling raccoonDcm4cheJavaLoader', () => {
        raccoonDcm4cheJavaLoader();

        expect(isJvmInitialized()).toBe(true);
    });

    test('should work properly after calling resetJvmState', () => {
        raccoonDcm4cheJavaLoader();
        expect(isJvmInitialized()).toBe(true);

        resetJvmState();
        expect(isJvmInitialized()).toBe(false);
    });
});
