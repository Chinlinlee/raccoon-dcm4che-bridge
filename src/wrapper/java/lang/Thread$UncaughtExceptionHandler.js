"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Thread$UncaughtExceptionHandler = void 0;
exports.createThread$UncaughtExceptionHandlerProxy = createThread$UncaughtExceptionHandlerProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Thread$UncaughtExceptionHandler} interface.
 * All required methods in {@link Thread$UncaughtExceptionHandlerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createThread$UncaughtExceptionHandlerProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.lang.Thread$UncaughtExceptionHandler', methods, opts);
}
/**
 * Class java.lang.Thread$UncaughtExceptionHandler.
 *
 * This actually imports the java class for further use.
 * The class {@link Thread$UncaughtExceptionHandlerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Thread$UncaughtExceptionHandler extends (0, java_bridge_1.importClass)('java.lang.Thread$UncaughtExceptionHandler') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Thread$UncaughtExceptionHandler = Thread$UncaughtExceptionHandler;
exports.default = Thread$UncaughtExceptionHandler;
