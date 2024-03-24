"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MouseWheelListener = exports.createMouseWheelListenerProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link MouseWheelListener} interface.
 * All required methods in {@link MouseWheelListenerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createMouseWheelListenerProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.awt.event.MouseWheelListener', methods, opts);
}
exports.createMouseWheelListenerProxy = createMouseWheelListenerProxy;
/**
 * Class java.awt.event.MouseWheelListener.
 *
 * This actually imports the java class for further use.
 * The class {@link MouseWheelListenerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class MouseWheelListener extends (0, java_bridge_1.importClass)('java.awt.event.MouseWheelListener') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.MouseWheelListener = MouseWheelListener;
exports.default = MouseWheelListener;
//# sourceMappingURL=MouseWheelListener.js.map