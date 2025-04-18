"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Path = void 0;
exports.createPathProxy = createPathProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Path} interface.
 * All required methods in {@link PathInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createPathProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.nio.file.Path', methods, opts);
}
/**
 * Class java.nio.file.Path.
 *
 * This actually imports the java class for further use.
 * The class {@link PathClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Path extends (0, java_bridge_1.importClass)('java.nio.file.Path') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Path = Path;
exports.default = Path;
