"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IIOReadUpdateListener = void 0;
exports.createIIOReadUpdateListenerProxy = createIIOReadUpdateListenerProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link IIOReadUpdateListener} interface.
 * All required methods in {@link IIOReadUpdateListenerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createIIOReadUpdateListenerProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('javax.imageio.event.IIOReadUpdateListener', methods, opts);
}
/**
 * Class javax.imageio.event.IIOReadUpdateListener.
 *
 * This actually imports the java class for further use.
 * The class {@link IIOReadUpdateListenerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class IIOReadUpdateListener extends (0, java_bridge_1.importClass)('javax.imageio.event.IIOReadUpdateListener') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.IIOReadUpdateListener = IIOReadUpdateListener;
exports.default = IIOReadUpdateListener;
