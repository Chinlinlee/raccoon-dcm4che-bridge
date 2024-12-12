"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlavorListener = exports.createFlavorListenerProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link FlavorListener} interface.
 * All required methods in {@link FlavorListenerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createFlavorListenerProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.awt.datatransfer.FlavorListener', methods, opts);
}
exports.createFlavorListenerProxy = createFlavorListenerProxy;
/**
 * Class java.awt.datatransfer.FlavorListener.
 *
 * This actually imports the java class for further use.
 * The class {@link FlavorListenerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class FlavorListener extends (0, java_bridge_1.importClass)('java.awt.datatransfer.FlavorListener') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.FlavorListener = FlavorListener;
exports.default = FlavorListener;
