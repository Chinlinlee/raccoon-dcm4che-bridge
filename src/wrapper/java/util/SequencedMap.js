"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequencedMap = void 0;
exports.createSequencedMapProxy = createSequencedMapProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link SequencedMap} interface.
 * All required methods in {@link SequencedMapInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createSequencedMapProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.SequencedMap', methods, opts);
}
/**
 * Class java.util.SequencedMap.
 *
 * This actually imports the java class for further use.
 * The class {@link SequencedMapClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class SequencedMap extends (0, java_bridge_1.importClass)('java.util.SequencedMap') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.SequencedMap = SequencedMap;
exports.default = SequencedMap;
