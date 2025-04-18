"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonWriter = void 0;
exports.createJsonWriterProxy = createJsonWriterProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link JsonWriter} interface.
 * All required methods in {@link JsonWriterInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createJsonWriterProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('jakarta.json.JsonWriter', methods, opts);
}
/**
 * Class jakarta.json.JsonWriter.
 *
 * This actually imports the java class for further use.
 * The class {@link JsonWriterClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class JsonWriter extends (0, java_bridge_1.importClass)('jakarta.json.JsonWriter') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.JsonWriter = JsonWriter;
exports.default = JsonWriter;
