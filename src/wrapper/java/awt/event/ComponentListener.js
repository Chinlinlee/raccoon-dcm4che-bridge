"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentListener = void 0;
exports.createComponentListenerProxy = createComponentListenerProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link ComponentListener} interface.
 * All required methods in {@link ComponentListenerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createComponentListenerProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.awt.event.ComponentListener', methods, opts);
}
/**
 * Class java.awt.event.ComponentListener.
 *
 * This actually imports the java class for further use.
 * The class {@link ComponentListenerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class ComponentListener extends (0, java_bridge_1.importClass)('java.awt.event.ComponentListener') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.ComponentListener = ComponentListener;
exports.default = ComponentListener;
