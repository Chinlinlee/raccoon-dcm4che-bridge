"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterIterator = void 0;
exports.createCharacterIteratorProxy = createCharacterIteratorProxy;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link CharacterIterator} interface.
 * All required methods in {@link CharacterIteratorInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createCharacterIteratorProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.text.CharacterIterator', methods, opts);
}
/**
 * Class java.text.CharacterIterator.
 *
 * This actually imports the java class for further use.
 * The class {@link CharacterIteratorClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class CharacterIterator extends (0, java_bridge_1.importClass)('java.text.CharacterIterator') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.CharacterIterator = CharacterIterator;
exports.default = CharacterIterator;
