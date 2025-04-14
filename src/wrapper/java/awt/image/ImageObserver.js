"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageObserver = void 0;
exports.createImageObserverProxy = createImageObserverProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link ImageObserver} interface.
 * All required methods in {@link ImageObserverInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createImageObserverProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.awt.image.ImageObserver', methods, opts);
}
/**
 * Class java.awt.image.ImageObserver.
 *
 * This actually imports the java class for further use.
 * The class {@link ImageObserverClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class ImageObserver extends (0, java_bridge_1.importClass)('java.awt.image.ImageObserver') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.ImageObserver = ImageObserver;
exports.default = ImageObserver;
