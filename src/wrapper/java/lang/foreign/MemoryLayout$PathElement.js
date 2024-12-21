"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryLayout$PathElement = void 0;
exports.createMemoryLayout$PathElementProxy = createMemoryLayout$PathElementProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link MemoryLayout$PathElement} interface.
 * All required methods in {@link MemoryLayout$PathElementInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createMemoryLayout$PathElementProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.lang.foreign.MemoryLayout$PathElement', methods, opts);
}
/**
 * Class java.lang.foreign.MemoryLayout$PathElement.
 *
 * This actually imports the java class for further use.
 * The class {@link MemoryLayout$PathElementClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class MemoryLayout$PathElement extends (0, java_bridge_1.importClass)('java.lang.foreign.MemoryLayout$PathElement') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.MemoryLayout$PathElement = MemoryLayout$PathElement;
exports.default = MemoryLayout$PathElement;