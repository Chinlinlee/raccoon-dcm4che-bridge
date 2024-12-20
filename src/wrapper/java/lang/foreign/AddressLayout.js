"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressLayout = void 0;
exports.createAddressLayoutProxy = createAddressLayoutProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link AddressLayout} interface.
 * All required methods in {@link AddressLayoutInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createAddressLayoutProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.lang.foreign.AddressLayout', methods, opts);
}
/**
 * Class java.lang.foreign.AddressLayout.
 *
 * This actually imports the java class for further use.
 * The class {@link AddressLayoutClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class AddressLayout extends (0, java_bridge_1.importClass)('java.lang.foreign.AddressLayout') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.AddressLayout = AddressLayout;
exports.default = AddressLayout;
