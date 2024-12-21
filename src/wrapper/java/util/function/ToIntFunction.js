"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToIntFunction = void 0;
exports.createToIntFunctionProxy = createToIntFunctionProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link ToIntFunction} interface.
 * All required methods in {@link ToIntFunctionInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createToIntFunctionProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.function.ToIntFunction', methods, opts);
}
/**
 * Class java.util.function.ToIntFunction.
 *
 * This actually imports the java class for further use.
 * The class {@link ToIntFunctionClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class ToIntFunction extends (0, java_bridge_1.importClass)('java.util.function.ToIntFunction') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.ToIntFunction = ToIntFunction;
exports.default = ToIntFunction;
