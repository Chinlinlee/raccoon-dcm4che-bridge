"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionListener = void 0;
exports.createActionListenerProxy = createActionListenerProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link ActionListener} interface.
 * All required methods in {@link ActionListenerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createActionListenerProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.awt.event.ActionListener', methods, opts);
}
/**
 * Class java.awt.event.ActionListener.
 *
 * This actually imports the java class for further use.
 * The class {@link ActionListenerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class ActionListener extends (0, java_bridge_1.importClass)('java.awt.event.ActionListener') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.ActionListener = ActionListener;
exports.default = ActionListener;
