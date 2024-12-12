"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderedImage = exports.createRenderedImageProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link RenderedImage} interface.
 * All required methods in {@link RenderedImageInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createRenderedImageProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.awt.image.RenderedImage', methods, opts);
}
exports.createRenderedImageProxy = createRenderedImageProxy;
/**
 * Class java.awt.image.RenderedImage.
 *
 * This actually imports the java class for further use.
 * The class {@link RenderedImageClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class RenderedImage extends (0, java_bridge_1.importClass)('java.awt.image.RenderedImage') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.RenderedImage = RenderedImage;
exports.default = RenderedImage;
