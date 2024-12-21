"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueLayout$OfByte = void 0;
exports.createValueLayout$OfByteProxy = createValueLayout$OfByteProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link ValueLayout$OfByte} interface.
 * All required methods in {@link ValueLayout$OfByteInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createValueLayout$OfByteProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.lang.foreign.ValueLayout$OfByte', methods, opts);
}
/**
 * Class java.lang.foreign.ValueLayout$OfByte.
 *
 * This actually imports the java class for further use.
 * The class {@link ValueLayout$OfByteClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class ValueLayout$OfByte extends (0, java_bridge_1.importClass)('java.lang.foreign.ValueLayout$OfByte') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.ValueLayout$OfByte = ValueLayout$OfByte;
exports.default = ValueLayout$OfByte;