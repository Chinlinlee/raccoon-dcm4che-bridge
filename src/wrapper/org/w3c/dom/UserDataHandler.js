"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataHandler = exports.createUserDataHandlerProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link UserDataHandler} interface.
 * All required methods in {@link UserDataHandlerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createUserDataHandlerProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('org.w3c.dom.UserDataHandler', methods, opts);
}
exports.createUserDataHandlerProxy = createUserDataHandlerProxy;
/**
 * Class org.w3c.dom.UserDataHandler.
 *
 * This actually imports the java class for further use.
 * The class {@link UserDataHandlerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class UserDataHandler extends (0, java_bridge_1.importClass)('org.w3c.dom.UserDataHandler') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.UserDataHandler = UserDataHandler;
exports.default = UserDataHandler;
