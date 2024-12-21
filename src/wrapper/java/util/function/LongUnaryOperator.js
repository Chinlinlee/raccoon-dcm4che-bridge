"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LongUnaryOperator = void 0;
exports.createLongUnaryOperatorProxy = createLongUnaryOperatorProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link LongUnaryOperator} interface.
 * All required methods in {@link LongUnaryOperatorInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createLongUnaryOperatorProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.function.LongUnaryOperator', methods, opts);
}
/**
 * Class java.util.function.LongUnaryOperator.
 *
 * This actually imports the java class for further use.
 * The class {@link LongUnaryOperatorClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class LongUnaryOperator extends (0, java_bridge_1.importClass)('java.util.function.LongUnaryOperator') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.LongUnaryOperator = LongUnaryOperator;
exports.default = LongUnaryOperator;
