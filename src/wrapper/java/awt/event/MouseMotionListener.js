"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MouseMotionListener = void 0;
exports.createMouseMotionListenerProxy = createMouseMotionListenerProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link MouseMotionListener} interface.
 * All required methods in {@link MouseMotionListenerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createMouseMotionListenerProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.awt.event.MouseMotionListener', methods, opts);
}
/**
 * Class java.awt.event.MouseMotionListener.
 *
 * This actually imports the java class for further use.
 * The class {@link MouseMotionListenerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class MouseMotionListener extends (0, java_bridge_1.importClass)('java.awt.event.MouseMotionListener') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.MouseMotionListener = MouseMotionListener;
exports.default = MouseMotionListener;
