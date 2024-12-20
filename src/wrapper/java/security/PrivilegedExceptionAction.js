"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivilegedExceptionAction = void 0;
exports.createPrivilegedExceptionActionProxy = createPrivilegedExceptionActionProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link PrivilegedExceptionAction} interface.
 * All required methods in {@link PrivilegedExceptionActionInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createPrivilegedExceptionActionProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.security.PrivilegedExceptionAction', methods, opts);
}
/**
 * Class java.security.PrivilegedExceptionAction.
 *
 * This actually imports the java class for further use.
 * The class {@link PrivilegedExceptionActionClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class PrivilegedExceptionAction extends (0, java_bridge_1.importClass)('java.security.PrivilegedExceptionAction') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.PrivilegedExceptionAction = PrivilegedExceptionAction;
exports.default = PrivilegedExceptionAction;
