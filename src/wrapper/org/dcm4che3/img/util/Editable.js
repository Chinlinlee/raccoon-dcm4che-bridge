"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Editable = void 0;
exports.createEditableProxy = createEditableProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Editable} interface.
 * All required methods in {@link EditableInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createEditableProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('org.dcm4che3.img.util.Editable', methods, opts);
}
/**
 * Class org.dcm4che3.img.util.Editable.
 *
 * This actually imports the java class for further use.
 * The class {@link EditableClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Editable extends (0, java_bridge_1.importClass)('org.dcm4che3.img.util.Editable') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Editable = Editable;
exports.default = Editable;
