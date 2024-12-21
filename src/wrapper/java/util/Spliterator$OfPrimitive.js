"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spliterator$OfPrimitive = void 0;
exports.createSpliterator$OfPrimitiveProxy = createSpliterator$OfPrimitiveProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Spliterator$OfPrimitive} interface.
 * All required methods in {@link Spliterator$OfPrimitiveInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createSpliterator$OfPrimitiveProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.Spliterator$OfPrimitive', methods, opts);
}
/**
 * Class java.util.Spliterator$OfPrimitive.
 *
 * This actually imports the java class for further use.
 * The class {@link Spliterator$OfPrimitiveClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Spliterator$OfPrimitive extends (0, java_bridge_1.importClass)('java.util.Spliterator$OfPrimitive') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Spliterator$OfPrimitive = Spliterator$OfPrimitive;
exports.default = Spliterator$OfPrimitive;
