"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessibleComponent = void 0;
exports.createAccessibleComponentProxy = createAccessibleComponentProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link AccessibleComponent} interface.
 * All required methods in {@link AccessibleComponentInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createAccessibleComponentProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('javax.accessibility.AccessibleComponent', methods, opts);
}
/**
 * Class javax.accessibility.AccessibleComponent.
 *
 * This actually imports the java class for further use.
 * The class {@link AccessibleComponentClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class AccessibleComponent extends (0, java_bridge_1.importClass)('javax.accessibility.AccessibleComponent') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.AccessibleComponent = AccessibleComponent;
exports.default = AccessibleComponent;
