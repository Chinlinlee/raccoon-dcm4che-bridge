import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../../../java/lang/Class";
import { Long as java_lang_Long } from "./../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../java/lang/Integer";
import { Boolean as java_lang_Boolean } from "./../../../../java/lang/Boolean";
/**
 * This class just defines types, you should import {@link UserIdentityRQ} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class UserIdentityRQClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
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
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'char[]'
     * @param var2 original type: 'boolean'
     * @return original return type: 'org.dcm4che3.net.pdu.UserIdentityRQ'
     */
    static usernamePasscode(var0: string | null, var1: (string | null)[] | null, var2: java_lang_Boolean | boolean): Promise<UserIdentityRQ | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'char[]'
     * @param var2 original type: 'boolean'
     * @return original return type: 'org.dcm4che3.net.pdu.UserIdentityRQ'
     */
    static usernamePasscodeSync(var0: string | null, var1: (string | null)[] | null, var2: java_lang_Boolean | boolean): UserIdentityRQ | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @return original return type: 'org.dcm4che3.net.pdu.UserIdentityRQ'
     */
    static jwt(var0: string | null, var1: java_lang_Boolean | boolean): Promise<UserIdentityRQ | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @return original return type: 'org.dcm4che3.net.pdu.UserIdentityRQ'
     */
    static jwtSync(var0: string | null, var1: java_lang_Boolean | boolean): UserIdentityRQ | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'int'
     */
    length(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    lengthSync(): number;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'boolean'
     * @return original return type: 'org.dcm4che3.net.pdu.UserIdentityRQ'
     */
    static kerberos(var0: Buffer | null, var1: java_lang_Boolean | boolean): Promise<UserIdentityRQ | null>;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'boolean'
     * @return original return type: 'org.dcm4che3.net.pdu.UserIdentityRQ'
     */
    static kerberosSync(var0: Buffer | null, var1: java_lang_Boolean | boolean): UserIdentityRQ | null;
    /**
     * @return original return type: 'boolean'
     */
    isPositiveResponseRequested(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isPositiveResponseRequestedSync(): boolean;
    /**
     * @return original return type: 'byte[]'
     */
    getPrimaryField(): Promise<Buffer | null>;
    /**
     * @return original return type: 'byte[]'
     */
    getPrimaryFieldSync(): Buffer | null;
    /**
     * @return original return type: 'char[]'
     */
    getPasscode(): Promise<(string | null)[] | null>;
    /**
     * @return original return type: 'char[]'
     */
    getPasscodeSync(): (string | null)[] | null;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getUsername(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getUsernameSync(): string | null;
    /**
     * @return original return type: 'byte[]'
     */
    getSecondaryField(): Promise<Buffer | null>;
    /**
     * @return original return type: 'byte[]'
     */
    getSecondaryFieldSync(): Buffer | null;
    /**
     * @return original return type: 'int'
     */
    getType(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getTypeSync(): number;
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
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @return original return type: 'org.dcm4che3.net.pdu.UserIdentityRQ'
     */
    static saml(var0: string | null, var1: java_lang_Boolean | boolean): Promise<UserIdentityRQ | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @return original return type: 'org.dcm4che3.net.pdu.UserIdentityRQ'
     */
    static samlSync(var0: string | null, var1: java_lang_Boolean | boolean): UserIdentityRQ | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @return original return type: 'org.dcm4che3.net.pdu.UserIdentityRQ'
     */
    static username(var0: string | null, var1: java_lang_Boolean | boolean): Promise<UserIdentityRQ | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @return original return type: 'org.dcm4che3.net.pdu.UserIdentityRQ'
     */
    static usernameSync(var0: string | null, var1: java_lang_Boolean | boolean): UserIdentityRQ | null;
    /**
     * Original type: 'int'
     */
    static readonly USERNAME_PASSCODE: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly JWT: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly USERNAME: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SAML: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly KERBEROS: java_lang_Integer | number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     */
    constructor(var0: string | null, var1: java_lang_Boolean | boolean);
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @return original return type: 'org.dcm4che3.net.pdu.UserIdentityRQ'
     */
    static newInstanceAsync(var0: string | null, var1: java_lang_Boolean | boolean): Promise<UserIdentityRQ>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'char[]'
     */
    constructor(var0: string | null, var1: (string | null)[] | null);
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'char[]'
     * @return original return type: 'org.dcm4che3.net.pdu.UserIdentityRQ'
     */
    static newInstanceAsync(var0: string | null, var1: (string | null)[] | null): Promise<UserIdentityRQ>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'boolean'
     * @param var2 original type: 'byte[]'
     */
    constructor(var0: java_lang_Integer | number, var1: java_lang_Boolean | boolean, var2: Buffer | null);
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'boolean'
     * @param var2 original type: 'byte[]'
     * @return original return type: 'org.dcm4che3.net.pdu.UserIdentityRQ'
     */
    static newInstanceAsync(var0: java_lang_Integer | number, var1: java_lang_Boolean | boolean, var2: Buffer | null): Promise<UserIdentityRQ>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'boolean'
     * @param var2 original type: 'byte[]'
     * @param var3 original type: 'byte[]'
     */
    constructor(var0: java_lang_Integer | number, var1: java_lang_Boolean | boolean, var2: Buffer | null, var3: Buffer | null);
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'boolean'
     * @param var2 original type: 'byte[]'
     * @param var3 original type: 'byte[]'
     * @return original return type: 'org.dcm4che3.net.pdu.UserIdentityRQ'
     */
    static newInstanceAsync(var0: java_lang_Integer | number, var1: java_lang_Boolean | boolean, var2: Buffer | null, var3: Buffer | null): Promise<UserIdentityRQ>;
}
declare const UserIdentityRQ_base: typeof UserIdentityRQClass;
/**
 * Class org.dcm4che3.net.pdu.UserIdentityRQ.
 *
 * This actually imports the java class for further use.
 * The class {@link UserIdentityRQClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class UserIdentityRQ extends UserIdentityRQ_base {
}
export default UserIdentityRQ;
