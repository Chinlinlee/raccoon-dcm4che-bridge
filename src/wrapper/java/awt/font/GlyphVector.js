"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlyphVector = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Class java.awt.font.GlyphVector.
 *
 * This actually imports the java class for further use.
 * The class {@link GlyphVectorClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class GlyphVector extends (0, java_bridge_1.importClass)('java.awt.font.GlyphVector') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.GlyphVector = GlyphVector;
exports.default = GlyphVector;
