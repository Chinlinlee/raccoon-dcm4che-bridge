"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transferable = void 0;
exports.createTransferableProxy = createTransferableProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Transferable} interface.
 * All required methods in {@link TransferableInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createTransferableProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.awt.datatransfer.Transferable', methods, opts);
}
/**
 * Class java.awt.datatransfer.Transferable.
 *
 * This actually imports the java class for further use.
 * The class {@link TransferableClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Transferable extends (0, java_bridge_1.importClass)('java.awt.datatransfer.Transferable') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Transferable = Transferable;
exports.default = Transferable;
