"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonNumber = void 0;
exports.createJsonNumberProxy = createJsonNumberProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link JsonNumber} interface.
 * All required methods in {@link JsonNumberInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createJsonNumberProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('jakarta.json.JsonNumber', methods, opts);
}
/**
 * Class jakarta.json.JsonNumber.
 *
 * This actually imports the java class for further use.
 * The class {@link JsonNumberClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class JsonNumber extends (0, java_bridge_1.importClass)('jakarta.json.JsonNumber') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.JsonNumber = JsonNumber;
exports.default = JsonNumber;
