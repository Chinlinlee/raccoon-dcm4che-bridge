/// <reference types="node" />
import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { PublicKey as java_security_PublicKey, PublicKeyInterface as java_security_PublicKeyInterface } from "./../PublicKey";
import { Provider as java_security_Provider } from "./../Provider";
import { X500Principal as javax_security_auth_x500_X500Principal } from "./../../../javax/security/auth/x500/X500Principal";
import { List as java_util_List } from "./../../util/List";
import { Collection as java_util_Collection } from "./../../util/Collection";
import { Date as java_util_Date } from "./../../util/Date";
import { BigInteger as java_math_BigInteger } from "./../../math/BigInteger";
import { Principal as java_security_Principal } from "./../Principal";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { Class as java_lang_Class } from "./../../lang/Class";
import { Set as java_util_Set } from "./../../util/Set";
/**
 * This class just defines types, you should import {@link X509Certificate} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class X509CertificateClass extends JavaClass {
    /**
     * @return original return type: 'byte[]'
     */
    getSignature(): Promise<Buffer | null>;
    /**
     * @return original return type: 'byte[]'
     */
    getSignatureSync(): Buffer | null;
    /**
     * @return original return type: 'int'
     */
    getBasicConstraints(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getBasicConstraintsSync(): number;
    /**
     * @param var0 original type: 'java.security.PublicKey'
     * @param var1 original type: 'java.security.Provider'
     * @return original return type: 'void'
     */
    verify(var0: java_security_PublicKey | JavaInterfaceProxy<java_security_PublicKeyInterface> | null, var1: java_security_Provider | null): Promise<void>;
    /**
     * @param var0 original type: 'java.security.PublicKey'
     * @param var1 original type: 'java.security.Provider'
     * @return original return type: 'void'
     */
    verifySync(var0: java_security_PublicKey | JavaInterfaceProxy<java_security_PublicKeyInterface> | null, var1: java_security_Provider | null): void;
    /**
     * @param var0 original type: 'java.security.PublicKey'
     * @return original return type: 'void'
     */
    verify(var0: java_security_PublicKey | JavaInterfaceProxy<java_security_PublicKeyInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.security.PublicKey'
     * @return original return type: 'void'
     */
    verifySync(var0: java_security_PublicKey | JavaInterfaceProxy<java_security_PublicKeyInterface> | null): void;
    /**
     * @param var0 original type: 'java.security.PublicKey'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    verify(var0: java_security_PublicKey | JavaInterfaceProxy<java_security_PublicKeyInterface> | null, var1: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.security.PublicKey'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    verifySync(var0: java_security_PublicKey | JavaInterfaceProxy<java_security_PublicKeyInterface> | null, var1: string | null): void;
    /**
     * @return original return type: 'int'
     */
    getVersion(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getVersionSync(): number;
    /**
     * @return original return type: 'javax.security.auth.x500.X500Principal'
     */
    getIssuerX500Principal(): Promise<javax_security_auth_x500_X500Principal | null>;
    /**
     * @return original return type: 'javax.security.auth.x500.X500Principal'
     */
    getIssuerX500PrincipalSync(): javax_security_auth_x500_X500Principal | null;
    /**
     * @return original return type: 'javax.security.auth.x500.X500Principal'
     */
    getSubjectX500Principal(): Promise<javax_security_auth_x500_X500Principal | null>;
    /**
     * @return original return type: 'javax.security.auth.x500.X500Principal'
     */
    getSubjectX500PrincipalSync(): javax_security_auth_x500_X500Principal | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getExtendedKeyUsage(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getExtendedKeyUsageSync(): java_util_List | null;
    /**
     * @return original return type: 'java.util.Collection'
     */
    getSubjectAlternativeNames(): Promise<java_util_Collection | null>;
    /**
     * @return original return type: 'java.util.Collection'
     */
    getSubjectAlternativeNamesSync(): java_util_Collection | null;
    /**
     * @return original return type: 'java.util.Collection'
     */
    getIssuerAlternativeNames(): Promise<java_util_Collection | null>;
    /**
     * @return original return type: 'java.util.Collection'
     */
    getIssuerAlternativeNamesSync(): java_util_Collection | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getSigAlgName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getSigAlgNameSync(): string | null;
    /**
     * @return original return type: 'byte[]'
     */
    getSigAlgParams(): Promise<Buffer | null>;
    /**
     * @return original return type: 'byte[]'
     */
    getSigAlgParamsSync(): Buffer | null;
    /**
     * @return original return type: 'byte[]'
     */
    getTBSCertificate(): Promise<Buffer | null>;
    /**
     * @return original return type: 'byte[]'
     */
    getTBSCertificateSync(): Buffer | null;
    /**
     * @param var0 original type: 'java.util.Date'
     * @return original return type: 'void'
     */
    checkValidity(var0: java_util_Date | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.Date'
     * @return original return type: 'void'
     */
    checkValiditySync(var0: java_util_Date | null): void;
    /**
     * @return original return type: 'void'
     */
    checkValidity(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    checkValiditySync(): void;
    /**
     * @return original return type: 'java.math.BigInteger'
     */
    getSerialNumber(): Promise<java_math_BigInteger | null>;
    /**
     * @return original return type: 'java.math.BigInteger'
     */
    getSerialNumberSync(): java_math_BigInteger | null;
    /**
     * @return original return type: 'java.security.Principal'
     */
    getIssuerDN(): Promise<java_security_Principal | null>;
    /**
     * @return original return type: 'java.security.Principal'
     */
    getIssuerDNSync(): java_security_Principal | null;
    /**
     * @return original return type: 'java.security.Principal'
     */
    getSubjectDN(): Promise<java_security_Principal | null>;
    /**
     * @return original return type: 'java.security.Principal'
     */
    getSubjectDNSync(): java_security_Principal | null;
    /**
     * @return original return type: 'java.util.Date'
     */
    getNotBefore(): Promise<java_util_Date | null>;
    /**
     * @return original return type: 'java.util.Date'
     */
    getNotBeforeSync(): java_util_Date | null;
    /**
     * @return original return type: 'java.util.Date'
     */
    getNotAfter(): Promise<java_util_Date | null>;
    /**
     * @return original return type: 'java.util.Date'
     */
    getNotAfterSync(): java_util_Date | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getSigAlgOID(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getSigAlgOIDSync(): string | null;
    /**
     * @return original return type: 'boolean[]'
     */
    getIssuerUniqueID(): Promise<(boolean)[] | null>;
    /**
     * @return original return type: 'boolean[]'
     */
    getIssuerUniqueIDSync(): (boolean)[] | null;
    /**
     * @return original return type: 'boolean[]'
     */
    getSubjectUniqueID(): Promise<(boolean)[] | null>;
    /**
     * @return original return type: 'boolean[]'
     */
    getSubjectUniqueIDSync(): (boolean)[] | null;
    /**
     * @return original return type: 'boolean[]'
     */
    getKeyUsage(): Promise<(boolean)[] | null>;
    /**
     * @return original return type: 'boolean[]'
     */
    getKeyUsageSync(): (boolean)[] | null;
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
     * @return original return type: 'java.lang.String'
     */
    toString(): string;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'java.lang.String'
     */
    getType(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTypeSync(): string | null;
    /**
     * @return original return type: 'byte[]'
     */
    getEncoded(): Promise<Buffer | null>;
    /**
     * @return original return type: 'byte[]'
     */
    getEncodedSync(): Buffer | null;
    /**
     * @return original return type: 'java.security.PublicKey'
     */
    getPublicKey(): Promise<java_security_PublicKey | null>;
    /**
     * @return original return type: 'java.security.PublicKey'
     */
    getPublicKeySync(): java_security_PublicKey | null;
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
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
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
     * @return original return type: 'byte[]'
     */
    getExtensionValue(var0: string | null): Promise<Buffer | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'byte[]'
     */
    getExtensionValueSync(var0: string | null): Buffer | null;
    /**
     * @return original return type: 'boolean'
     */
    hasUnsupportedCriticalExtension(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasUnsupportedCriticalExtensionSync(): boolean;
    /**
     * @return original return type: 'java.util.Set'
     */
    getCriticalExtensionOIDs(): Promise<java_util_Set | null>;
    /**
     * @return original return type: 'java.util.Set'
     */
    getCriticalExtensionOIDsSync(): java_util_Set | null;
    /**
     * @return original return type: 'java.util.Set'
     */
    getNonCriticalExtensionOIDs(): Promise<java_util_Set | null>;
    /**
     * @return original return type: 'java.util.Set'
     */
    getNonCriticalExtensionOIDsSync(): java_util_Set | null;
}
declare const X509Certificate_base: typeof X509CertificateClass;
/**
 * Class java.security.cert.X509Certificate.
 *
 * This actually imports the java class for further use.
 * The class {@link X509CertificateClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class X509Certificate extends X509Certificate_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default X509Certificate;
//# sourceMappingURL=X509Certificate.d.ts.map