"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueLayout = void 0;
exports.createValueLayoutProxy = createValueLayoutProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link ValueLayout} interface.
 * All required methods in {@link ValueLayoutInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createValueLayoutProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.lang.foreign.ValueLayout', methods, opts);
}
/**
 * Class java.lang.foreign.ValueLayout.
 *
 * This actually imports the java class for further use.
 * The class {@link ValueLayoutClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class ValueLayout extends (0, java_bridge_1.importClass)('java.lang.foreign.ValueLayout') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.ValueLayout = ValueLayout;
exports.default = ValueLayout;
