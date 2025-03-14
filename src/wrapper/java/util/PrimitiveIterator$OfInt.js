"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimitiveIterator$OfInt = void 0;
exports.createPrimitiveIterator$OfIntProxy = createPrimitiveIterator$OfIntProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link PrimitiveIterator$OfInt} interface.
 * All required methods in {@link PrimitiveIterator$OfIntInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createPrimitiveIterator$OfIntProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.PrimitiveIterator$OfInt', methods, opts);
}
/**
 * Class java.util.PrimitiveIterator$OfInt.
 *
 * This actually imports the java class for further use.
 * The class {@link PrimitiveIterator$OfIntClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class PrimitiveIterator$OfInt extends (0, java_bridge_1.importClass)('java.util.PrimitiveIterator$OfInt') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.PrimitiveIterator$OfInt = PrimitiveIterator$OfInt;
exports.default = PrimitiveIterator$OfInt;
