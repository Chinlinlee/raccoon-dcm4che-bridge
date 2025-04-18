"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaintContext = void 0;
exports.createPaintContextProxy = createPaintContextProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link PaintContext} interface.
 * All required methods in {@link PaintContextInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createPaintContextProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.awt.PaintContext', methods, opts);
}
/**
 * Class java.awt.PaintContext.
 *
 * This actually imports the java class for further use.
 * The class {@link PaintContextClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class PaintContext extends (0, java_bridge_1.importClass)('java.awt.PaintContext') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.PaintContext = PaintContext;
exports.default = PaintContext;
