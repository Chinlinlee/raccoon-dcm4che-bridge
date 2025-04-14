import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Long as java_lang_Long } from "./../lang/Long";
/**
 * This class just defines types, you should import {@link PublicKey} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PublicKeyClass extends JavaClass {
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
    /**
     * Original type: 'long'
     */
    static readonly serialVersionUID: java_lang_Long | bigint | number;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createPublicKeyProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface PublicKeyInterface {
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
 * Create a proxy for the {@link PublicKey} interface.
 * All required methods in {@link PublicKeyInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createPublicKeyProxy(methods: PublicKeyInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<PublicKeyInterface>;
declare const PublicKey_base: typeof PublicKeyClass;
/**
 * Class java.security.PublicKey.
 *
 * This actually imports the java class for further use.
 * The class {@link PublicKeyClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PublicKey extends PublicKey_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default PublicKey;
