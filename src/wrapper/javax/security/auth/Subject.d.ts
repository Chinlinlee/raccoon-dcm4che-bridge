import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { AccessControlContext as java_security_AccessControlContext } from "./../../../java/security/AccessControlContext";
import { Class as java_lang_Class } from "./../../../java/lang/Class";
import { Long as java_lang_Long } from "./../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
import { Set as java_util_Set, SetInterface as java_util_SetInterface } from "./../../../java/util/Set";
import { Callable as java_util_concurrent_Callable, CallableInterface as java_util_concurrent_CallableInterface } from "./../../../java/util/concurrent/Callable";
import { PrivilegedAction as java_security_PrivilegedAction, PrivilegedActionInterface as java_security_PrivilegedActionInterface } from "./../../../java/security/PrivilegedAction";
import { PrivilegedExceptionAction as java_security_PrivilegedExceptionAction, PrivilegedExceptionActionInterface as java_security_PrivilegedExceptionActionInterface } from "./../../../java/security/PrivilegedExceptionAction";
import { Boolean as java_lang_Boolean } from "./../../../java/lang/Boolean";
/**
 * This class just defines types, you should import {@link Subject} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class SubjectClass extends JavaClass {
    /**
     * @param var0 original type: 'java.security.AccessControlContext'
     * @return original return type: 'javax.security.auth.Subject'
     */
    static getSubject(var0: java_security_AccessControlContext | null): Promise<Subject | null>;
    /**
     * @param var0 original type: 'java.security.AccessControlContext'
     * @return original return type: 'javax.security.auth.Subject'
     */
    static getSubjectSync(var0: java_security_AccessControlContext | null): Subject | null;
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
     * @return original return type: 'void'
     */
    wait(var0: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    waitSync(var0: java_lang_Long | bigint | number): void;
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
     * @return original return type: 'java.util.Set'
     */
    getPrivateCredentials(): Promise<java_util_Set | null>;
    /**
     * @return original return type: 'java.util.Set'
     */
    getPrivateCredentialsSync(): java_util_Set | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.util.Set'
     */
    getPrivateCredentials(var0: java_lang_Class | null): Promise<java_util_Set | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.util.Set'
     */
    getPrivateCredentialsSync(var0: java_lang_Class | null): java_util_Set | null;
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
     * @param var1 original type: 'java.util.concurrent.Callable'
     * @return original return type: 'java.lang.Object'
     */
    static callAs(var0: SubjectClass | null, var1: java_util_concurrent_Callable | JavaInterfaceProxy<java_util_concurrent_CallableInterface> | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'javax.security.auth.Subject'
     * @param var1 original type: 'java.util.concurrent.Callable'
     * @return original return type: 'java.lang.Object'
     */
    static callAsSync(var0: SubjectClass | null, var1: java_util_concurrent_Callable | JavaInterfaceProxy<java_util_concurrent_CallableInterface> | null): BasicOrJavaType | null;
    /**
     * @return original return type: 'java.util.Set'
     */
    getPrincipals(): Promise<java_util_Set | null>;
    /**
     * @return original return type: 'java.util.Set'
     */
    getPrincipalsSync(): java_util_Set | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.util.Set'
     */
    getPrincipals(var0: java_lang_Class | null): Promise<java_util_Set | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.util.Set'
     */
    getPrincipalsSync(var0: java_lang_Class | null): java_util_Set | null;
    /**
     * @return original return type: 'java.util.Set'
     */
    getPublicCredentials(): Promise<java_util_Set | null>;
    /**
     * @return original return type: 'java.util.Set'
     */
    getPublicCredentialsSync(): java_util_Set | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.util.Set'
     */
    getPublicCredentials(var0: java_lang_Class | null): Promise<java_util_Set | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.util.Set'
     */
    getPublicCredentialsSync(var0: java_lang_Class | null): java_util_Set | null;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @param var0 original type: 'javax.security.auth.Subject'
     * @param var1 original type: 'java.security.PrivilegedAction'
     * @param var2 original type: 'java.security.AccessControlContext'
     * @return original return type: 'java.lang.Object'
     */
    static doAsPrivileged(var0: SubjectClass | null, var1: java_security_PrivilegedAction | JavaInterfaceProxy<java_security_PrivilegedActionInterface> | null, var2: java_security_AccessControlContext | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'javax.security.auth.Subject'
     * @param var1 original type: 'java.security.PrivilegedAction'
     * @param var2 original type: 'java.security.AccessControlContext'
     * @return original return type: 'java.lang.Object'
     */
    static doAsPrivilegedSync(var0: SubjectClass | null, var1: java_security_PrivilegedAction | JavaInterfaceProxy<java_security_PrivilegedActionInterface> | null, var2: java_security_AccessControlContext | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'javax.security.auth.Subject'
     * @param var1 original type: 'java.security.PrivilegedExceptionAction'
     * @param var2 original type: 'java.security.AccessControlContext'
     * @return original return type: 'java.lang.Object'
     */
    static doAsPrivileged(var0: SubjectClass | null, var1: java_security_PrivilegedExceptionAction | JavaInterfaceProxy<java_security_PrivilegedExceptionActionInterface> | null, var2: java_security_AccessControlContext | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'javax.security.auth.Subject'
     * @param var1 original type: 'java.security.PrivilegedExceptionAction'
     * @param var2 original type: 'java.security.AccessControlContext'
     * @return original return type: 'java.lang.Object'
     */
    static doAsPrivilegedSync(var0: SubjectClass | null, var1: java_security_PrivilegedExceptionAction | JavaInterfaceProxy<java_security_PrivilegedExceptionActionInterface> | null, var2: java_security_AccessControlContext | null): BasicOrJavaType | null;
    /**
     * @return original return type: 'javax.security.auth.Subject'
     */
    static current(): Promise<Subject | null>;
    /**
     * @return original return type: 'javax.security.auth.Subject'
     */
    static currentSync(): Subject | null;
    /**
     * @param var0 original type: 'javax.security.auth.Subject'
     * @param var1 original type: 'java.security.PrivilegedAction'
     * @return original return type: 'java.lang.Object'
     */
    static doAs(var0: SubjectClass | null, var1: java_security_PrivilegedAction | JavaInterfaceProxy<java_security_PrivilegedActionInterface> | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'javax.security.auth.Subject'
     * @param var1 original type: 'java.security.PrivilegedAction'
     * @return original return type: 'java.lang.Object'
     */
    static doAsSync(var0: SubjectClass | null, var1: java_security_PrivilegedAction | JavaInterfaceProxy<java_security_PrivilegedActionInterface> | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'javax.security.auth.Subject'
     * @param var1 original type: 'java.security.PrivilegedExceptionAction'
     * @return original return type: 'java.lang.Object'
     */
    static doAs(var0: SubjectClass | null, var1: java_security_PrivilegedExceptionAction | JavaInterfaceProxy<java_security_PrivilegedExceptionActionInterface> | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'javax.security.auth.Subject'
     * @param var1 original type: 'java.security.PrivilegedExceptionAction'
     * @return original return type: 'java.lang.Object'
     */
    static doAsSync(var0: SubjectClass | null, var1: java_security_PrivilegedExceptionAction | JavaInterfaceProxy<java_security_PrivilegedExceptionActionInterface> | null): BasicOrJavaType | null;
    /**
     * @return original return type: 'boolean'
     */
    isReadOnly(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isReadOnlySync(): boolean;
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
    setReadOnly(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    setReadOnlySync(): void;
    constructor();
    /**
     * @return original return type: 'javax.security.auth.Subject'
     */
    static newInstanceAsync(): Promise<Subject>;
    /**
     * @param var0 original type: 'boolean'
     * @param var1 original type: 'java.util.Set'
     * @param var2 original type: 'java.util.Set'
     * @param var3 original type: 'java.util.Set'
     */
    constructor(var0: java_lang_Boolean | boolean, var1: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null, var2: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null, var3: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null);
    /**
     * @param var0 original type: 'boolean'
     * @param var1 original type: 'java.util.Set'
     * @param var2 original type: 'java.util.Set'
     * @param var3 original type: 'java.util.Set'
     * @return original return type: 'javax.security.auth.Subject'
     */
    static newInstanceAsync(var0: java_lang_Boolean | boolean, var1: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null, var2: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null, var3: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null): Promise<Subject>;
}
declare const Subject_base: typeof SubjectClass;
/**
 * Class javax.security.auth.Subject.
 *
 * This actually imports the java class for further use.
 * The class {@link SubjectClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Subject extends Subject_base {
}
export default Subject;
//# sourceMappingURL=Subject.d.ts.map