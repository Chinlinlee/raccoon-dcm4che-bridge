"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IIOMetadataController = void 0;
exports.createIIOMetadataControllerProxy = createIIOMetadataControllerProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link IIOMetadataController} interface.
 * All required methods in {@link IIOMetadataControllerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createIIOMetadataControllerProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('javax.imageio.metadata.IIOMetadataController', methods, opts);
}
/**
 * Class javax.imageio.metadata.IIOMetadataController.
 *
 * This actually imports the java class for further use.
 * The class {@link IIOMetadataControllerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class IIOMetadataController extends (0, java_bridge_1.importClass)('javax.imageio.metadata.IIOMetadataController') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.IIOMetadataController = IIOMetadataController;
exports.default = IIOMetadataController;
