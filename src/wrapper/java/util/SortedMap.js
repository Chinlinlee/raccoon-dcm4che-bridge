"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortedMap = void 0;
exports.createSortedMapProxy = createSortedMapProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link SortedMap} interface.
 * All required methods in {@link SortedMapInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createSortedMapProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.SortedMap', methods, opts);
}
/**
 * Class java.util.SortedMap.
 *
 * This actually imports the java class for further use.
 * The class {@link SortedMapClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class SortedMap extends (0, java_bridge_1.importClass)('java.util.SortedMap') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.SortedMap = SortedMap;
exports.default = SortedMap;
