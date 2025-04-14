import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { KeyStore$ProtectionParameter as java_security_KeyStore$ProtectionParameter } from "./KeyStore$ProtectionParameter";
/**
 * This class just defines types, you should import {@link KeyStore$LoadStoreParameter} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class KeyStore$LoadStoreParameterClass extends JavaClass {
    /**
     * @return original return type: 'java.security.KeyStore$ProtectionParameter'
     */
    getProtectionParameter(): Promise<java_security_KeyStore$ProtectionParameter | null>;
    /**
     * @return original return type: 'java.security.KeyStore$ProtectionParameter'
     */
    getProtectionParameterSync(): java_security_KeyStore$ProtectionParameter | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createKeyStore$LoadStoreParameterProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface KeyStore$LoadStoreParameterInterface {
    /**
     * @return original return type: 'java.security.KeyStore$ProtectionParameter'
     */
    getProtectionParameter(): java_security_KeyStore$ProtectionParameter | null;
}
/**
 * Create a proxy for the {@link KeyStore$LoadStoreParameter} interface.
 * All required methods in {@link KeyStore$LoadStoreParameterInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createKeyStore$LoadStoreParameterProxy(methods: KeyStore$LoadStoreParameterInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<KeyStore$LoadStoreParameterInterface>;
declare const KeyStore$LoadStoreParameter_base: typeof KeyStore$LoadStoreParameterClass;
/**
 * Class java.security.KeyStore$LoadStoreParameter.
 *
 * This actually imports the java class for further use.
 * The class {@link KeyStore$LoadStoreParameterClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class KeyStore$LoadStoreParameter extends KeyStore$LoadStoreParameter_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default KeyStore$LoadStoreParameter;
