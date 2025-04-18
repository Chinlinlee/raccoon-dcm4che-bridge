import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Integer as java_lang_Integer } from "./../Integer";
import { Class as java_lang_Class } from "./../Class";
import { MethodType as java_lang_invoke_MethodType } from "./MethodType";
import { Member as java_lang_reflect_Member } from "./../reflect/Member";
import { MethodHandles$Lookup as java_lang_invoke_MethodHandles$Lookup } from "./MethodHandles$Lookup";
/**
 * This class just defines types, you should import {@link MethodHandleInfo} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class MethodHandleInfoClass extends JavaClass {
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    static referenceKindToString(var0: java_lang_Integer | number): Promise<string | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    static referenceKindToStringSync(var0: java_lang_Integer | number): string | null;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getDeclaringClass(): Promise<java_lang_Class | null>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getDeclaringClassSync(): java_lang_Class | null;
    /**
     * @return original return type: 'int'
     */
    getReferenceKind(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getReferenceKindSync(): number;
    /**
     * @return original return type: 'java.lang.String'
     */
    getName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getNameSync(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    isVarArgs(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isVarArgsSync(): boolean;
    /**
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    getMethodType(): Promise<java_lang_invoke_MethodType | null>;
    /**
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    getMethodTypeSync(): java_lang_invoke_MethodType | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.invoke.MethodHandles$Lookup'
     * @return original return type: 'java.lang.reflect.Member'
     */
    reflectAs(var0: java_lang_Class | null, var1: java_lang_invoke_MethodHandles$Lookup | null): Promise<java_lang_reflect_Member | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.invoke.MethodHandles$Lookup'
     * @return original return type: 'java.lang.reflect.Member'
     */
    reflectAsSync(var0: java_lang_Class | null, var1: java_lang_invoke_MethodHandles$Lookup | null): java_lang_reflect_Member | null;
    /**
     * @return original return type: 'int'
     */
    getModifiers(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getModifiersSync(): number;
    /**
     * Original type: 'int'
     */
    static readonly REF_getStatic: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly REF_getField: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly REF_putStatic: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly REF_newInvokeSpecial: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly REF_putField: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly REF_invokeVirtual: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly REF_invokeSpecial: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly REF_invokeStatic: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly REF_invokeInterface: java_lang_Integer | number;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createMethodHandleInfoProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface MethodHandleInfoInterface {
    /**
     * @return original return type: 'java.lang.Class'
     */
    getDeclaringClass(): java_lang_Class | null;
    /**
     * @return original return type: 'int'
     */
    getReferenceKind(): number;
    /**
     * @return original return type: 'java.lang.String'
     */
    getName(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    isVarArgs?(): boolean;
    /**
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    getMethodType(): java_lang_invoke_MethodType | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.invoke.MethodHandles$Lookup'
     * @return original return type: 'java.lang.reflect.Member'
     */
    reflectAs(var0: java_lang_Class | null, var1: java_lang_invoke_MethodHandles$Lookup | null): java_lang_reflect_Member | null;
    /**
     * @return original return type: 'int'
     */
    getModifiers(): number;
}
/**
 * Create a proxy for the {@link MethodHandleInfo} interface.
 * All required methods in {@link MethodHandleInfoInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createMethodHandleInfoProxy(methods: MethodHandleInfoInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<MethodHandleInfoInterface>;
declare const MethodHandleInfo_base: typeof MethodHandleInfoClass;
/**
 * Class java.lang.invoke.MethodHandleInfo.
 *
 * This actually imports the java class for further use.
 * The class {@link MethodHandleInfoClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class MethodHandleInfo extends MethodHandleInfo_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default MethodHandleInfo;
