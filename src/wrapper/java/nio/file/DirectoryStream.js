"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectoryStream = void 0;
exports.createDirectoryStreamProxy = createDirectoryStreamProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link DirectoryStream} interface.
 * All required methods in {@link DirectoryStreamInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createDirectoryStreamProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.nio.file.DirectoryStream', methods, opts);
}
/**
 * Class java.nio.file.DirectoryStream.
 *
 * This actually imports the java class for further use.
 * The class {@link DirectoryStreamClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class DirectoryStream extends (0, java_bridge_1.importClass)('java.nio.file.DirectoryStream') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.DirectoryStream = DirectoryStream;
exports.default = DirectoryStream;
