"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Watchable = void 0;
exports.createWatchableProxy = createWatchableProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Watchable} interface.
 * All required methods in {@link WatchableInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createWatchableProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.nio.file.Watchable', methods, opts);
}
/**
 * Class java.nio.file.Watchable.
 *
 * This actually imports the java class for further use.
 * The class {@link WatchableClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Watchable extends (0, java_bridge_1.importClass)('java.nio.file.Watchable') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Watchable = Watchable;
exports.default = Watchable;
