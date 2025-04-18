"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetrieveTask = void 0;
exports.createRetrieveTaskProxy = createRetrieveTaskProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link RetrieveTask} interface.
 * All required methods in {@link RetrieveTaskInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createRetrieveTaskProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('org.dcm4che3.net.service.RetrieveTask', methods, opts);
}
/**
 * Class org.dcm4che3.net.service.RetrieveTask.
 *
 * This actually imports the java class for further use.
 * The class {@link RetrieveTaskClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class RetrieveTask extends (0, java_bridge_1.importClass)('org.dcm4che3.net.service.RetrieveTask') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.RetrieveTask = RetrieveTask;
exports.default = RetrieveTask;
