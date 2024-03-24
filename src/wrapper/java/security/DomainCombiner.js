"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainCombiner = exports.createDomainCombinerProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link DomainCombiner} interface.
 * All required methods in {@link DomainCombinerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createDomainCombinerProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.security.DomainCombiner', methods, opts);
}
exports.createDomainCombinerProxy = createDomainCombinerProxy;
/**
 * Class java.security.DomainCombiner.
 *
 * This actually imports the java class for further use.
 * The class {@link DomainCombinerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class DomainCombiner extends (0, java_bridge_1.importClass)('java.security.DomainCombiner') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.DomainCombiner = DomainCombiner;
exports.default = DomainCombiner;
