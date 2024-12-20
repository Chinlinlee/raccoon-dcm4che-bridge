"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequenceLayout = void 0;
exports.createSequenceLayoutProxy = createSequenceLayoutProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link SequenceLayout} interface.
 * All required methods in {@link SequenceLayoutInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createSequenceLayoutProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.lang.foreign.SequenceLayout', methods, opts);
}
/**
 * Class java.lang.foreign.SequenceLayout.
 *
 * This actually imports the java class for further use.
 * The class {@link SequenceLayoutClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class SequenceLayout extends (0, java_bridge_1.importClass)('java.lang.foreign.SequenceLayout') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.SequenceLayout = SequenceLayout;
exports.default = SequenceLayout;
