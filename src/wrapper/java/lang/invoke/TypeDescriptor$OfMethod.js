"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeDescriptor$OfMethod = void 0;
exports.createTypeDescriptor$OfMethodProxy = createTypeDescriptor$OfMethodProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link TypeDescriptor$OfMethod} interface.
 * All required methods in {@link TypeDescriptor$OfMethodInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createTypeDescriptor$OfMethodProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.lang.invoke.TypeDescriptor$OfMethod', methods, opts);
}
/**
 * Class java.lang.invoke.TypeDescriptor$OfMethod.
 *
 * This actually imports the java class for further use.
 * The class {@link TypeDescriptor$OfMethodClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class TypeDescriptor$OfMethod extends (0, java_bridge_1.importClass)('java.lang.invoke.TypeDescriptor$OfMethod') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.TypeDescriptor$OfMethod = TypeDescriptor$OfMethod;
exports.default = TypeDescriptor$OfMethod;
