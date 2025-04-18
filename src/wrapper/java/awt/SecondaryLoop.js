"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecondaryLoop = void 0;
exports.createSecondaryLoopProxy = createSecondaryLoopProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link SecondaryLoop} interface.
 * All required methods in {@link SecondaryLoopInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createSecondaryLoopProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.awt.SecondaryLoop', methods, opts);
}
/**
 * Class java.awt.SecondaryLoop.
 *
 * This actually imports the java class for further use.
 * The class {@link SecondaryLoopClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class SecondaryLoop extends (0, java_bridge_1.importClass)('java.awt.SecondaryLoop') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.SecondaryLoop = SecondaryLoop;
exports.default = SecondaryLoop;
