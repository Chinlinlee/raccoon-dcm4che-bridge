"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequencedSet = void 0;
exports.createSequencedSetProxy = createSequencedSetProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link SequencedSet} interface.
 * All required methods in {@link SequencedSetInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createSequencedSetProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.SequencedSet', methods, opts);
}
/**
 * Class java.util.SequencedSet.
 *
 * This actually imports the java class for further use.
 * The class {@link SequencedSetClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class SequencedSet extends (0, java_bridge_1.importClass)('java.util.SequencedSet') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.SequencedSet = SequencedSet;
exports.default = SequencedSet;
