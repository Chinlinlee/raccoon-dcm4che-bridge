"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LongBinaryOperator = void 0;
exports.createLongBinaryOperatorProxy = createLongBinaryOperatorProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link LongBinaryOperator} interface.
 * All required methods in {@link LongBinaryOperatorInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createLongBinaryOperatorProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.function.LongBinaryOperator', methods, opts);
}
/**
 * Class java.util.function.LongBinaryOperator.
 *
 * This actually imports the java class for further use.
 * The class {@link LongBinaryOperatorClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class LongBinaryOperator extends (0, java_bridge_1.importClass)('java.util.function.LongBinaryOperator') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.LongBinaryOperator = LongBinaryOperator;
exports.default = LongBinaryOperator;
