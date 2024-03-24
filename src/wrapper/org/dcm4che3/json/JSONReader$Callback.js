"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONReader$Callback = exports.createJSONReader$CallbackProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link JSONReader$Callback} interface.
 * All required methods in {@link JSONReader$CallbackInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createJSONReader$CallbackProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('org.dcm4che3.json.JSONReader$Callback', methods, opts);
}
exports.createJSONReader$CallbackProxy = createJSONReader$CallbackProxy;
/**
 * Class org.dcm4che3.json.JSONReader$Callback.
 *
 * This actually imports the java class for further use.
 * The class {@link JSONReader$CallbackClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class JSONReader$Callback extends (0, java_bridge_1.importClass)('org.dcm4che3.json.JSONReader$Callback') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.JSONReader$Callback = JSONReader$Callback;
exports.default = JSONReader$Callback;
//# sourceMappingURL=JSONReader$Callback.js.map