"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryTask = void 0;
exports.createQueryTaskProxy = createQueryTaskProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link QueryTask} interface.
 * All required methods in {@link QueryTaskInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createQueryTaskProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('org.dcm4che3.net.service.QueryTask', methods, opts);
}
/**
 * Class org.dcm4che3.net.service.QueryTask.
 *
 * This actually imports the java class for further use.
 * The class {@link QueryTaskClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class QueryTask extends (0, java_bridge_1.importClass)('org.dcm4che3.net.service.QueryTask') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.QueryTask = QueryTask;
exports.default = QueryTask;
