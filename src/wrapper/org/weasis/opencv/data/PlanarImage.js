"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanarImage = void 0;
exports.createPlanarImageProxy = createPlanarImageProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link PlanarImage} interface.
 * All required methods in {@link PlanarImageInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createPlanarImageProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('org.weasis.opencv.data.PlanarImage', methods, opts);
}
/**
 * Class org.weasis.opencv.data.PlanarImage.
 *
 * This actually imports the java class for further use.
 * The class {@link PlanarImageClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class PlanarImage extends (0, java_bridge_1.importClass)('org.weasis.opencv.data.PlanarImage') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.PlanarImage = PlanarImage;
exports.default = PlanarImage;
