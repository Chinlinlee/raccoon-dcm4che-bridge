"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericDeclaration = void 0;
exports.createGenericDeclarationProxy = createGenericDeclarationProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link GenericDeclaration} interface.
 * All required methods in {@link GenericDeclarationInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createGenericDeclarationProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.lang.reflect.GenericDeclaration', methods, opts);
}
/**
 * Class java.lang.reflect.GenericDeclaration.
 *
 * This actually imports the java class for further use.
 * The class {@link GenericDeclarationClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class GenericDeclaration extends (0, java_bridge_1.importClass)('java.lang.reflect.GenericDeclaration') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.GenericDeclaration = GenericDeclaration;
exports.default = GenericDeclaration;
