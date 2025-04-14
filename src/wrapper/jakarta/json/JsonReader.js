"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonReader = void 0;
exports.createJsonReaderProxy = createJsonReaderProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link JsonReader} interface.
 * All required methods in {@link JsonReaderInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createJsonReaderProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('jakarta.json.JsonReader', methods, opts);
}
/**
 * Class jakarta.json.JsonReader.
 *
 * This actually imports the java class for further use.
 * The class {@link JsonReaderClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class JsonReader extends (0, java_bridge_1.importClass)('jakarta.json.JsonReader') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.JsonReader = JsonReader;
exports.default = JsonReader;
