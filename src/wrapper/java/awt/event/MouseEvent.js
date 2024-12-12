"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MouseEvent = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Class java.awt.event.MouseEvent.
 *
 * This actually imports the java class for further use.
 * The class {@link MouseEventClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class MouseEvent extends (0, java_bridge_1.importClass)('java.awt.event.MouseEvent') {
}
exports.MouseEvent = MouseEvent;
exports.default = MouseEvent;