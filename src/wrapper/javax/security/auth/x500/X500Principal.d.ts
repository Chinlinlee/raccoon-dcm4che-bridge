import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./../../../../java/lang/Class";
import { Long as java_lang_Long } from "./../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../java/lang/Integer";
import { Map as java_util_Map, MapInterface as java_util_MapInterface } from "./../../../../java/util/Map";
import { Subject as javax_security_auth_Subject } from "./../Subject";
import { InputStream as java_io_InputStream } from "./../../../../java/io/InputStream";
/**
 * This class just defines types, you should import {@link X500Principal} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class X500PrincipalClass extends JavaClass {
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
     * @return original return type: 'java.lang.String'
     */
    getName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getNameSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getName(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getNameSync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.util.Map'
     * @return original return type: 'java.lang.String'
     */
    getName(var0: string | null, var1: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.util.Map'
     * @return original return type: 'java.lang.String'
     */
    getNameSync(var0: string | null, var1: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null): string | null;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'byte[]'
     */
    getEncoded(): Promise<Buffer | null>;
    /**
     * @return original return type: 'byte[]'
     */
    getEncodedSync(): Buffer | null;
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
     * @param var0 original type: 'javax.security.auth.Subject'
     * @return original return type: 'boolean'
     */
    implies(var0: javax_security_auth_Subject | null): Promise<boolean>;
    /**
     * @param var0 original type: 'javax.security.auth.Subject'
     * @return original return type: 'boolean'
     */
    impliesSync(var0: javax_security_auth_Subject | null): boolean;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly CANONICAL: string | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly RFC2253: string | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly RFC1779: string | null;
    /**
     * @param var0 original type: 'java.io.InputStream'
     */
    constructor(var0: java_io_InputStream | null);
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @return original return type: 'javax.security.auth.x500.X500Principal'
     */
    static newInstanceAsync(var0: java_io_InputStream | null): Promise<X500Principal>;
    /**
     * @param var0 original type: 'java.lang.String'
     */
    constructor(var0: string | null);
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'javax.security.auth.x500.X500Principal'
     */
    static newInstanceAsync(var0: string | null): Promise<X500Principal>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.util.Map'
     */
    constructor(var0: string | null, var1: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null);
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.util.Map'
     * @return original return type: 'javax.security.auth.x500.X500Principal'
     */
    static newInstanceAsync(var0: string | null, var1: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null): Promise<X500Principal>;
    /**
     * @param var0 original type: 'byte[]'
     */
    constructor(var0: Buffer | null);
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'javax.security.auth.x500.X500Principal'
     */
    static newInstanceAsync(var0: Buffer | null): Promise<X500Principal>;
}
declare const X500Principal_base: typeof X500PrincipalClass;
/**
 * Class javax.security.auth.x500.X500Principal.
 *
 * This actually imports the java class for further use.
 * The class {@link X500PrincipalClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class X500Principal extends X500Principal_base {
}
export default X500Principal;
