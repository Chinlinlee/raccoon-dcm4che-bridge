"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Annotation = void 0;
exports.createAnnotationProxy = createAnnotationProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Annotation} interface.
 * All required methods in {@link AnnotationInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createAnnotationProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.lang.annotation.Annotation', methods, opts);
}
/**
 * Class java.lang.annotation.Annotation.
 *
 * This actually imports the java class for further use.
 * The class {@link AnnotationClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Annotation extends (0, java_bridge_1.importClass)('java.lang.annotation.Annotation') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Annotation = Annotation;
exports.default = Annotation;
