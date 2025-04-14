"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierEx = void 0;
exports.createSupplierExProxy = createSupplierExProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link SupplierEx} interface.
 * All required methods in {@link SupplierExInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createSupplierExProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('org.dcm4che3.img.util.SupplierEx', methods, opts);
}
/**
 * Class org.dcm4che3.img.util.SupplierEx.
 *
 * This actually imports the java class for further use.
 * The class {@link SupplierExClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class SupplierEx extends (0, java_bridge_1.importClass)('org.dcm4che3.img.util.SupplierEx') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.SupplierEx = SupplierEx;
exports.default = SupplierEx;
