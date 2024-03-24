/// <reference types="node" />
import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Long as java_lang_Long } from "./../lang/Long";
/**
 * This class just defines types, you should import {@link Key} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class KeyClass extends JavaClass {
    /**
     * Original type: 'long'
     */
    static readonly serialVersionUID: java_lang_Long | bigint | number;
    /**
     * @return original return type: 'byte[]'
     */
    getEncoded(): Promise<Buffer | null>;
    /**
     * @return original return type: 'byte[]'
     */
    getEncodedSync(): Buffer | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getAlgorithm(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getAlgorithmSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getFormat(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getFormatSync(): string | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createKeyProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface KeyInterface {
    /**
     * @return original return type: 'byte[]'
     */
    getEncoded(): Buffer | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getAlgorithm(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getFormat(): string | null;
}
/**
 * Create a proxy for the {@link Key} interface.
 * All required methods in {@link KeyInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createKeyProxy(methods: KeyInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<KeyInterface>;
declare const Key_base: typeof KeyClass;
/**
 * Class java.security.Key.
 *
 * This actually imports the java class for further use.
 * The class {@link KeyClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Key extends Key_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default Key;
//# sourceMappingURL=Key.d.ts.map