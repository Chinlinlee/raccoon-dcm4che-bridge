"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessibleEditableText = exports.createAccessibleEditableTextProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link AccessibleEditableText} interface.
 * All required methods in {@link AccessibleEditableTextInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createAccessibleEditableTextProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('javax.accessibility.AccessibleEditableText', methods, opts);
}
exports.createAccessibleEditableTextProxy = createAccessibleEditableTextProxy;
/**
 * Class javax.accessibility.AccessibleEditableText.
 *
 * This actually imports the java class for further use.
 * The class {@link AccessibleEditableTextClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class AccessibleEditableText extends (0, java_bridge_1.importClass)('javax.accessibility.AccessibleEditableText') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.AccessibleEditableText = AccessibleEditableText;
exports.default = AccessibleEditableText;
//# sourceMappingURL=AccessibleEditableText.js.map