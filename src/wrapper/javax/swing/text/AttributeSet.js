"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeSet = void 0;
exports.createAttributeSetProxy = createAttributeSetProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link AttributeSet} interface.
 * All required methods in {@link AttributeSetInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createAttributeSetProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('javax.swing.text.AttributeSet', methods, opts);
}
/**
 * Class javax.swing.text.AttributeSet.
 *
 * This actually imports the java class for further use.
 * The class {@link AttributeSetClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class AttributeSet extends (0, java_bridge_1.importClass)('javax.swing.text.AttributeSet') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.AttributeSet = AttributeSet;
exports.default = AttributeSet;
