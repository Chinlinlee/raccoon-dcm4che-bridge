"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyManager = void 0;
exports.createKeyManagerProxy = createKeyManagerProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link KeyManager} interface.
 * All required methods in {@link KeyManagerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createKeyManagerProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('javax.net.ssl.KeyManager', methods, opts);
}
/**
 * Class javax.net.ssl.KeyManager.
 *
 * This actually imports the java class for further use.
 * The class {@link KeyManagerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class KeyManager extends (0, java_bridge_1.importClass)('javax.net.ssl.KeyManager') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.KeyManager = KeyManager;
exports.default = KeyManager;
