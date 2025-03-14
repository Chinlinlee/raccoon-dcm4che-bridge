"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenOption = void 0;
exports.createOpenOptionProxy = createOpenOptionProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link OpenOption} interface.
 * All required methods in {@link OpenOptionInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createOpenOptionProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.nio.file.OpenOption', methods, opts);
}
/**
 * Class java.nio.file.OpenOption.
 *
 * This actually imports the java class for further use.
 * The class {@link OpenOptionClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class OpenOption extends (0, java_bridge_1.importClass)('java.nio.file.OpenOption') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.OpenOption = OpenOption;
exports.default = OpenOption;
