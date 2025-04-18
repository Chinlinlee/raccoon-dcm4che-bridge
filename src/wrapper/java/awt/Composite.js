"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Composite = void 0;
exports.createCompositeProxy = createCompositeProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Composite} interface.
 * All required methods in {@link CompositeInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createCompositeProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.awt.Composite', methods, opts);
}
/**
 * Class java.awt.Composite.
 *
 * This actually imports the java class for further use.
 * The class {@link CompositeClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Composite extends (0, java_bridge_1.importClass)('java.awt.Composite') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Composite = Composite;
exports.default = Composite;
