"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructLayout = void 0;
exports.createStructLayoutProxy = createStructLayoutProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link StructLayout} interface.
 * All required methods in {@link StructLayoutInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createStructLayoutProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.lang.foreign.StructLayout', methods, opts);
}
/**
 * Class java.lang.foreign.StructLayout.
 *
 * This actually imports the java class for further use.
 * The class {@link StructLayoutClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class StructLayout extends (0, java_bridge_1.importClass)('java.lang.foreign.StructLayout') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.StructLayout = StructLayout;
exports.default = StructLayout;
