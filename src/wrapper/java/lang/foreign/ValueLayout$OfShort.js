"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueLayout$OfShort = void 0;
exports.createValueLayout$OfShortProxy = createValueLayout$OfShortProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link ValueLayout$OfShort} interface.
 * All required methods in {@link ValueLayout$OfShortInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createValueLayout$OfShortProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.lang.foreign.ValueLayout$OfShort', methods, opts);
}
/**
 * Class java.lang.foreign.ValueLayout$OfShort.
 *
 * This actually imports the java class for further use.
 * The class {@link ValueLayout$OfShortClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class ValueLayout$OfShort extends (0, java_bridge_1.importClass)('java.lang.foreign.ValueLayout$OfShort') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.ValueLayout$OfShort = ValueLayout$OfShort;
exports.default = ValueLayout$OfShort;