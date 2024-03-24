"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicKey = exports.createPublicKeyProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link PublicKey} interface.
 * All required methods in {@link PublicKeyInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createPublicKeyProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.security.PublicKey', methods, opts);
}
exports.createPublicKeyProxy = createPublicKeyProxy;
/**
 * Class java.security.PublicKey.
 *
 * This actually imports the java class for further use.
 * The class {@link PublicKeyClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class PublicKey extends (0, java_bridge_1.importClass)('java.security.PublicKey') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.PublicKey = PublicKey;
exports.default = PublicKey;
