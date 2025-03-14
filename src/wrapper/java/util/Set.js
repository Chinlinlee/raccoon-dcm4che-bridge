"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Set = void 0;
exports.createSetProxy = createSetProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Set} interface.
 * All required methods in {@link SetInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createSetProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.Set', methods, opts);
}
/**
 * Class java.util.Set.
 *
 * This actually imports the java class for further use.
 * The class {@link SetClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Set extends (0, java_bridge_1.importClass)('java.util.Set') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Set = Set;
exports.default = Set;
