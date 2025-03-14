"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoubleUnaryOperator = void 0;
exports.createDoubleUnaryOperatorProxy = createDoubleUnaryOperatorProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link DoubleUnaryOperator} interface.
 * All required methods in {@link DoubleUnaryOperatorInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createDoubleUnaryOperatorProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.function.DoubleUnaryOperator', methods, opts);
}
/**
 * Class java.util.function.DoubleUnaryOperator.
 *
 * This actually imports the java class for further use.
 * The class {@link DoubleUnaryOperatorClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class DoubleUnaryOperator extends (0, java_bridge_1.importClass)('java.util.function.DoubleUnaryOperator') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.DoubleUnaryOperator = DoubleUnaryOperator;
exports.default = DoubleUnaryOperator;
