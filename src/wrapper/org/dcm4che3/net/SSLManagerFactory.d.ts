import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../../java/lang/Class";
import { KeyStore as java_security_KeyStore } from "./../../../java/security/KeyStore";
import { Long as java_lang_Long } from "./../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
import { TrustManager as javax_net_ssl_TrustManager } from "./../../../javax/net/ssl/TrustManager";
import { X509Certificate as java_security_cert_X509Certificate } from "./../../../java/security/cert/X509Certificate";
import { KeyManager as javax_net_ssl_KeyManager } from "./../../../javax/net/ssl/KeyManager";
/**
 * This class just defines types, you should import {@link SSLManagerFactory} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class SSLManagerFactoryClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'char[]'
     * @return original return type: 'java.security.KeyStore'
     */
    static loadKeyStore(var0: string | null, var1: string | null, var2: (string | null)[] | null): Promise<java_security_KeyStore | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'char[]'
     * @return original return type: 'java.security.KeyStore'
     */
    static loadKeyStoreSync(var0: string | null, var1: string | null, var2: (string | null)[] | null): java_security_KeyStore | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'java.security.KeyStore'
     */
    static loadKeyStore(var0: string | null, var1: string | null, var2: string | null): Promise<java_security_KeyStore | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'java.security.KeyStore'
     */
    static loadKeyStoreSync(var0: string | null, var1: string | null, var2: string | null): java_security_KeyStore | null;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    wait(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    waitSync(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): void;
    /**
     * @return original return type: 'void'
     */
    wait(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    waitSync(): void;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    wait(var0: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    waitSync(var0: java_lang_Long | bigint | number): void;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equals(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equalsSync(var0: BasicOrJavaType | null): boolean;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'javax.net.ssl.TrustManager'
     */
    static createTrustManager(var0: string | null, var1: string | null, var2: string | null): Promise<javax_net_ssl_TrustManager | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'javax.net.ssl.TrustManager'
     */
    static createTrustManagerSync(var0: string | null, var1: string | null, var2: string | null): javax_net_ssl_TrustManager | null;
    /**
     * @param var0 original type: 'java.security.KeyStore'
     * @return original return type: 'javax.net.ssl.TrustManager'
     */
    static createTrustManager(var0: java_security_KeyStore | null): Promise<javax_net_ssl_TrustManager | null>;
    /**
     * @param var0 original type: 'java.security.KeyStore'
     * @return original return type: 'javax.net.ssl.TrustManager'
     */
    static createTrustManagerSync(var0: java_security_KeyStore | null): javax_net_ssl_TrustManager | null;
    /**
     * @param var0 original type: 'java.security.cert.X509Certificate[]'
     * @return original return type: 'javax.net.ssl.TrustManager'
     */
    static createTrustManager(var0: (java_security_cert_X509Certificate | null)[] | null): Promise<javax_net_ssl_TrustManager | null>;
    /**
     * @param var0 original type: 'java.security.cert.X509Certificate[]'
     * @return original return type: 'javax.net.ssl.TrustManager'
     */
    static createTrustManagerSync(var0: (java_security_cert_X509Certificate | null)[] | null): javax_net_ssl_TrustManager | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'char[]'
     * @return original return type: 'javax.net.ssl.TrustManager'
     */
    static createTrustManager(var0: string | null, var1: string | null, var2: (string | null)[] | null): Promise<javax_net_ssl_TrustManager | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'char[]'
     * @return original return type: 'javax.net.ssl.TrustManager'
     */
    static createTrustManagerSync(var0: string | null, var1: string | null, var2: (string | null)[] | null): javax_net_ssl_TrustManager | null;
    /**
     * @param var0 original type: 'java.security.KeyStore'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'javax.net.ssl.KeyManager'
     */
    static createKeyManager(var0: java_security_KeyStore | null, var1: string | null): Promise<javax_net_ssl_KeyManager | null>;
    /**
     * @param var0 original type: 'java.security.KeyStore'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'javax.net.ssl.KeyManager'
     */
    static createKeyManagerSync(var0: java_security_KeyStore | null, var1: string | null): javax_net_ssl_KeyManager | null;
    /**
     * @param var0 original type: 'java.security.KeyStore'
     * @param var1 original type: 'char[]'
     * @return original return type: 'javax.net.ssl.KeyManager'
     */
    static createKeyManager(var0: java_security_KeyStore | null, var1: (string | null)[] | null): Promise<javax_net_ssl_KeyManager | null>;
    /**
     * @param var0 original type: 'java.security.KeyStore'
     * @param var1 original type: 'char[]'
     * @return original return type: 'javax.net.ssl.KeyManager'
     */
    static createKeyManagerSync(var0: java_security_KeyStore | null, var1: (string | null)[] | null): javax_net_ssl_KeyManager | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'char[]'
     * @param var3 original type: 'char[]'
     * @return original return type: 'javax.net.ssl.KeyManager'
     */
    static createKeyManager(var0: string | null, var1: string | null, var2: (string | null)[] | null, var3: (string | null)[] | null): Promise<javax_net_ssl_KeyManager | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'char[]'
     * @param var3 original type: 'char[]'
     * @return original return type: 'javax.net.ssl.KeyManager'
     */
    static createKeyManagerSync(var0: string | null, var1: string | null, var2: (string | null)[] | null, var3: (string | null)[] | null): javax_net_ssl_KeyManager | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @return original return type: 'javax.net.ssl.KeyManager'
     */
    static createKeyManager(var0: string | null, var1: string | null, var2: string | null, var3: string | null): Promise<javax_net_ssl_KeyManager | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @return original return type: 'javax.net.ssl.KeyManager'
     */
    static createKeyManagerSync(var0: string | null, var1: string | null, var2: string | null, var3: string | null): javax_net_ssl_KeyManager | null;
    /**
     * @param var0 original type: 'java.security.cert.X509Certificate[]'
     * @return original return type: 'java.security.KeyStore'
     */
    static createKeyStore(var0: (java_security_cert_X509Certificate | null)[] | null): Promise<java_security_KeyStore | null>;
    /**
     * @param var0 original type: 'java.security.cert.X509Certificate[]'
     * @return original return type: 'java.security.KeyStore'
     */
    static createKeyStoreSync(var0: (java_security_cert_X509Certificate | null)[] | null): java_security_KeyStore | null;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
}
declare const SSLManagerFactory_base: typeof SSLManagerFactoryClass;
/**
 * Class org.dcm4che3.net.SSLManagerFactory.
 *
 * This actually imports the java class for further use.
 * The class {@link SSLManagerFactoryClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class SSLManagerFactory extends SSLManagerFactory_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default SSLManagerFactory;
