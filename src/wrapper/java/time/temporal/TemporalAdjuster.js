"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemporalAdjuster = void 0;
exports.createTemporalAdjusterProxy = createTemporalAdjusterProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link TemporalAdjuster} interface.
 * All required methods in {@link TemporalAdjusterInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createTemporalAdjusterProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.time.temporal.TemporalAdjuster', methods, opts);
}
/**
 * Class java.time.temporal.TemporalAdjuster.
 *
 * This actually imports the java class for further use.
 * The class {@link TemporalAdjusterClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class TemporalAdjuster extends (0, java_bridge_1.importClass)('java.time.temporal.TemporalAdjuster') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.TemporalAdjuster = TemporalAdjuster;
exports.default = TemporalAdjuster;
