"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appendable = void 0;
exports.createAppendableProxy = createAppendableProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Appendable} interface.
 * All required methods in {@link AppendableInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createAppendableProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.lang.Appendable', methods, opts);
}
/**
 * Class java.lang.Appendable.
 *
 * This actually imports the java class for further use.
 * The class {@link AppendableClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Appendable extends (0, java_bridge_1.importClass)('java.lang.Appendable') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Appendable = Appendable;
exports.default = Appendable;
