"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consumer = void 0;
exports.createConsumerProxy = createConsumerProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Consumer} interface.
 * All required methods in {@link ConsumerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createConsumerProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.function.Consumer', methods, opts);
}
/**
 * Class java.util.function.Consumer.
 *
 * This actually imports the java class for further use.
 * The class {@link ConsumerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Consumer extends (0, java_bridge_1.importClass)('java.util.function.Consumer') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Consumer = Consumer;
exports.default = Consumer;
