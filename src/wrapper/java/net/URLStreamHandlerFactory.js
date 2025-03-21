"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLStreamHandlerFactory = void 0;
exports.createURLStreamHandlerFactoryProxy = createURLStreamHandlerFactoryProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link URLStreamHandlerFactory} interface.
 * All required methods in {@link URLStreamHandlerFactoryInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createURLStreamHandlerFactoryProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.net.URLStreamHandlerFactory', methods, opts);
}
/**
 * Class java.net.URLStreamHandlerFactory.
 *
 * This actually imports the java class for further use.
 * The class {@link URLStreamHandlerFactoryClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class URLStreamHandlerFactory extends (0, java_bridge_1.importClass)('java.net.URLStreamHandlerFactory') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.URLStreamHandlerFactory = URLStreamHandlerFactory;
exports.default = URLStreamHandlerFactory;
