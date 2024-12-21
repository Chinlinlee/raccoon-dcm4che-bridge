"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Thread$Builder$OfVirtual = void 0;
exports.createThread$Builder$OfVirtualProxy = createThread$Builder$OfVirtualProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Thread$Builder$OfVirtual} interface.
 * All required methods in {@link Thread$Builder$OfVirtualInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createThread$Builder$OfVirtualProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.lang.Thread$Builder$OfVirtual', methods, opts);
}
/**
 * Class java.lang.Thread$Builder$OfVirtual.
 *
 * This actually imports the java class for further use.
 * The class {@link Thread$Builder$OfVirtualClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Thread$Builder$OfVirtual extends (0, java_bridge_1.importClass)('java.lang.Thread$Builder$OfVirtual') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Thread$Builder$OfVirtual = Thread$Builder$OfVirtual;
exports.default = Thread$Builder$OfVirtual;
