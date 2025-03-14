"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChronoLocalDate = void 0;
exports.createChronoLocalDateProxy = createChronoLocalDateProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link ChronoLocalDate} interface.
 * All required methods in {@link ChronoLocalDateInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createChronoLocalDateProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.time.chrono.ChronoLocalDate', methods, opts);
}
/**
 * Class java.time.chrono.ChronoLocalDate.
 *
 * This actually imports the java class for further use.
 * The class {@link ChronoLocalDateClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class ChronoLocalDate extends (0, java_bridge_1.importClass)('java.time.chrono.ChronoLocalDate') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.ChronoLocalDate = ChronoLocalDate;
exports.default = ChronoLocalDate;
