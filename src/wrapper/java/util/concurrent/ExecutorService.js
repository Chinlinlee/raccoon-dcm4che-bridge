"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecutorService = void 0;
exports.createExecutorServiceProxy = createExecutorServiceProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link ExecutorService} interface.
 * All required methods in {@link ExecutorServiceInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createExecutorServiceProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.concurrent.ExecutorService', methods, opts);
}
/**
 * Class java.util.concurrent.ExecutorService.
 *
 * This actually imports the java class for further use.
 * The class {@link ExecutorServiceClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class ExecutorService extends (0, java_bridge_1.importClass)('java.util.concurrent.ExecutorService') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.ExecutorService = ExecutorService;
exports.default = ExecutorService;
