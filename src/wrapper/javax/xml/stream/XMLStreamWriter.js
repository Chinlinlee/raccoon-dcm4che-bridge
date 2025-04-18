"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XMLStreamWriter = void 0;
exports.createXMLStreamWriterProxy = createXMLStreamWriterProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link XMLStreamWriter} interface.
 * All required methods in {@link XMLStreamWriterInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createXMLStreamWriterProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('javax.xml.stream.XMLStreamWriter', methods, opts);
}
/**
 * Class javax.xml.stream.XMLStreamWriter.
 *
 * This actually imports the java class for further use.
 * The class {@link XMLStreamWriterClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class XMLStreamWriter extends (0, java_bridge_1.importClass)('javax.xml.stream.XMLStreamWriter') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.XMLStreamWriter = XMLStreamWriter;
exports.default = XMLStreamWriter;
