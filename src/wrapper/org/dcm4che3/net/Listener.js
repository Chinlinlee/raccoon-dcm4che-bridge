"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listener = void 0;
exports.createListenerProxy = createListenerProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Listener} interface.
 * All required methods in {@link ListenerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createListenerProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('org.dcm4che3.net.Listener', methods, opts);
}
/**
 * Class org.dcm4che3.net.Listener.
 *
 * This actually imports the java class for further use.
 * The class {@link ListenerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Listener extends (0, java_bridge_1.importClass)('org.dcm4che3.net.Listener') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Listener = Listener;
exports.default = Listener;
