"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
exports.createLoggerProxy = createLoggerProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Logger} interface.
 * All required methods in {@link LoggerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createLoggerProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('org.slf4j.Logger', methods, opts);
}
/**
 * Class org.slf4j.Logger.
 *
 * This actually imports the java class for further use.
 * The class {@link LoggerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Logger extends (0, java_bridge_1.importClass)('org.slf4j.Logger') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Logger = Logger;
exports.default = Logger;
