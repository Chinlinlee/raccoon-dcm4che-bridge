"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comparable = exports.createComparableProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Comparable} interface.
 * All required methods in {@link ComparableInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createComparableProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.lang.Comparable', methods, opts);
}
exports.createComparableProxy = createComparableProxy;
/**
 * Class java.lang.Comparable.
 *
 * This actually imports the java class for further use.
 * The class {@link ComparableClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Comparable extends (0, java_bridge_1.importClass)('java.lang.Comparable') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Comparable = Comparable;
exports.default = Comparable;
