"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attr = exports.createAttrProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Attr} interface.
 * All required methods in {@link AttrInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createAttrProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('org.w3c.dom.Attr', methods, opts);
}
exports.createAttrProxy = createAttrProxy;
/**
 * Class org.w3c.dom.Attr.
 *
 * This actually imports the java class for further use.
 * The class {@link AttrClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Attr extends (0, java_bridge_1.importClass)('org.w3c.dom.Attr') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Attr = Attr;
exports.default = Attr;
