"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicFileAttributes = void 0;
exports.createBasicFileAttributesProxy = createBasicFileAttributesProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link BasicFileAttributes} interface.
 * All required methods in {@link BasicFileAttributesInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createBasicFileAttributesProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.nio.file.attribute.BasicFileAttributes', methods, opts);
}
/**
 * Class java.nio.file.attribute.BasicFileAttributes.
 *
 * This actually imports the java class for further use.
 * The class {@link BasicFileAttributesClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class BasicFileAttributes extends (0, java_bridge_1.importClass)('java.nio.file.attribute.BasicFileAttributes') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.BasicFileAttributes = BasicFileAttributes;
exports.default = BasicFileAttributes;
