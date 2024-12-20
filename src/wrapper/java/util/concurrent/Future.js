"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Future = void 0;
exports.createFutureProxy = createFutureProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Future} interface.
 * All required methods in {@link FutureInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createFutureProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.concurrent.Future', methods, opts);
}
/**
 * Class java.util.concurrent.Future.
 *
 * This actually imports the java class for further use.
 * The class {@link FutureClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Future extends (0, java_bridge_1.importClass)('java.util.concurrent.Future') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Future = Future;
exports.default = Future;
