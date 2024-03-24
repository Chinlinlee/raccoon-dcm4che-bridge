"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileStoreAttributeView = exports.createFileStoreAttributeViewProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link FileStoreAttributeView} interface.
 * All required methods in {@link FileStoreAttributeViewInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createFileStoreAttributeViewProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.nio.file.attribute.FileStoreAttributeView', methods, opts);
}
exports.createFileStoreAttributeViewProxy = createFileStoreAttributeViewProxy;
/**
 * Class java.nio.file.attribute.FileStoreAttributeView.
 *
 * This actually imports the java class for further use.
 * The class {@link FileStoreAttributeViewClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class FileStoreAttributeView extends (0, java_bridge_1.importClass)('java.nio.file.attribute.FileStoreAttributeView') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.FileStoreAttributeView = FileStoreAttributeView;
exports.default = FileStoreAttributeView;
