"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point2D = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Class java.awt.geom.Point2D.
 *
 * This actually imports the java class for further use.
 * The class {@link Point2DClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Point2D extends (0, java_bridge_1.importClass)('java.awt.geom.Point2D') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Point2D = Point2D;
exports.default = Point2D;
