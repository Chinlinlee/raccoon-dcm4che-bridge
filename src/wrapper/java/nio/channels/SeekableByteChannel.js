"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeekableByteChannel = void 0;
exports.createSeekableByteChannelProxy = createSeekableByteChannelProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link SeekableByteChannel} interface.
 * All required methods in {@link SeekableByteChannelInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createSeekableByteChannelProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.nio.channels.SeekableByteChannel', methods, opts);
}
/**
 * Class java.nio.channels.SeekableByteChannel.
 *
 * This actually imports the java class for further use.
 * The class {@link SeekableByteChannelClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class SeekableByteChannel extends (0, java_bridge_1.importClass)('java.nio.channels.SeekableByteChannel') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.SeekableByteChannel = SeekableByteChannel;
exports.default = SeekableByteChannel;
