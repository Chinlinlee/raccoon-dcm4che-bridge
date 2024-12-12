"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresentationStateLut = exports.createPresentationStateLutProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link PresentationStateLut} interface.
 * All required methods in {@link PresentationStateLutInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createPresentationStateLutProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('org.weasis.opencv.op.lut.PresentationStateLut', methods, opts);
}
exports.createPresentationStateLutProxy = createPresentationStateLutProxy;
/**
 * Class org.weasis.opencv.op.lut.PresentationStateLut.
 *
 * This actually imports the java class for further use.
 * The class {@link PresentationStateLutClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class PresentationStateLut extends (0, java_bridge_1.importClass)('org.weasis.opencv.op.lut.PresentationStateLut') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.PresentationStateLut = PresentationStateLut;
exports.default = PresentationStateLut;