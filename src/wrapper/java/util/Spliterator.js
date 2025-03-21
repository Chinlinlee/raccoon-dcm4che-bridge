"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spliterator = void 0;
exports.createSpliteratorProxy = createSpliteratorProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Spliterator} interface.
 * All required methods in {@link SpliteratorInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createSpliteratorProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.Spliterator', methods, opts);
}
/**
 * Class java.util.Spliterator.
 *
 * This actually imports the java class for further use.
 * The class {@link SpliteratorClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Spliterator extends (0, java_bridge_1.importClass)('java.util.Spliterator') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Spliterator = Spliterator;
exports.default = Spliterator;
