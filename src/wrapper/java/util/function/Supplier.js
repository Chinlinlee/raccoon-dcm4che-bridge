"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Supplier = void 0;
exports.createSupplierProxy = createSupplierProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Supplier} interface.
 * All required methods in {@link SupplierInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createSupplierProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.function.Supplier', methods, opts);
}
/**
 * Class java.util.function.Supplier.
 *
 * This actually imports the java class for further use.
 * The class {@link SupplierClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Supplier extends (0, java_bridge_1.importClass)('java.util.function.Supplier') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Supplier = Supplier;
exports.default = Supplier;
