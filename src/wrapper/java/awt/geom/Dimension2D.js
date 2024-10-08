"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dimension2D = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Class java.awt.geom.Dimension2D.
 *
 * This actually imports the java class for further use.
 * The class {@link Dimension2DClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Dimension2D extends (0, java_bridge_1.importClass)('java.awt.geom.Dimension2D') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Dimension2D = Dimension2D;
exports.default = Dimension2D;
