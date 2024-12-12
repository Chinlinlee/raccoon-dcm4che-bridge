"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cleaner$Cleanable = exports.createCleaner$CleanableProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Cleaner$Cleanable} interface.
 * All required methods in {@link Cleaner$CleanableInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createCleaner$CleanableProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.lang.ref.Cleaner$Cleanable', methods, opts);
}
exports.createCleaner$CleanableProxy = createCleaner$CleanableProxy;
/**
 * Class java.lang.ref.Cleaner$Cleanable.
 *
 * This actually imports the java class for further use.
 * The class {@link Cleaner$CleanableClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Cleaner$Cleanable extends (0, java_bridge_1.importClass)('java.lang.ref.Cleaner$Cleanable') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Cleaner$Cleanable = Cleaner$Cleanable;
exports.default = Cleaner$Cleanable;