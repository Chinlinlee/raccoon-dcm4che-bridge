"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LongStream$Builder = void 0;
exports.createLongStream$BuilderProxy = createLongStream$BuilderProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link LongStream$Builder} interface.
 * All required methods in {@link LongStream$BuilderInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createLongStream$BuilderProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.stream.LongStream$Builder', methods, opts);
}
/**
 * Class java.util.stream.LongStream$Builder.
 *
 * This actually imports the java class for further use.
 * The class {@link LongStream$BuilderClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class LongStream$Builder extends (0, java_bridge_1.importClass)('java.util.stream.LongStream$Builder') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.LongStream$Builder = LongStream$Builder;
exports.default = LongStream$Builder;
