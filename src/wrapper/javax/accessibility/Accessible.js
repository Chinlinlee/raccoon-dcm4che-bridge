"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accessible = exports.createAccessibleProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Accessible} interface.
 * All required methods in {@link AccessibleInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createAccessibleProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('javax.accessibility.Accessible', methods, opts);
}
exports.createAccessibleProxy = createAccessibleProxy;
/**
 * Class javax.accessibility.Accessible.
 *
 * This actually imports the java class for further use.
 * The class {@link AccessibleClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Accessible extends (0, java_bridge_1.importClass)('javax.accessibility.Accessible') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Accessible = Accessible;
exports.default = Accessible;
