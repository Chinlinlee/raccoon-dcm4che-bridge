"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Element = void 0;
exports.createElementProxy = createElementProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Element} interface.
 * All required methods in {@link ElementInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createElementProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('org.w3c.dom.Element', methods, opts);
}
/**
 * Class org.w3c.dom.Element.
 *
 * This actually imports the java class for further use.
 * The class {@link ElementClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Element extends (0, java_bridge_1.importClass)('org.w3c.dom.Element') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Element = Element;
exports.default = Element;
