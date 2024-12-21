"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchEvent$Kind = void 0;
exports.createWatchEvent$KindProxy = createWatchEvent$KindProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link WatchEvent$Kind} interface.
 * All required methods in {@link WatchEvent$KindInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createWatchEvent$KindProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.nio.file.WatchEvent$Kind', methods, opts);
}
/**
 * Class java.nio.file.WatchEvent$Kind.
 *
 * This actually imports the java class for further use.
 * The class {@link WatchEvent$KindClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class WatchEvent$Kind extends (0, java_bridge_1.importClass)('java.nio.file.WatchEvent$Kind') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.WatchEvent$Kind = WatchEvent$Kind;
exports.default = WatchEvent$Kind;
