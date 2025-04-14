import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./../Class";
import { Long as java_lang_Long } from "./../Long";
import { Integer as java_lang_Integer } from "./../Integer";
import { TypeDescriptor$OfMethod as java_lang_invoke_TypeDescriptor$OfMethod } from "./TypeDescriptor$OfMethod";
import { TypeDescriptor$OfField as java_lang_invoke_TypeDescriptor$OfField, TypeDescriptor$OfFieldInterface as java_lang_invoke_TypeDescriptor$OfFieldInterface } from "./TypeDescriptor$OfField";
import { ClassLoader as java_lang_ClassLoader } from "./../ClassLoader";
import { Optional as java_util_Optional } from "./../../util/Optional";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../util/List";
import { Boolean as java_lang_Boolean } from "./../Boolean";
/**
 * This class just defines types, you should import {@link MethodType} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class MethodTypeClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.String'
     */
    toMethodDescriptorString(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toMethodDescriptorStringSync(): string | null;
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
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.invoke.TypeDescriptor$OfMethod'
     */
    dropParameterTypes(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<java_lang_invoke_TypeDescriptor$OfMethod | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.invoke.TypeDescriptor$OfMethod'
     */
    dropParameterTypesSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): java_lang_invoke_TypeDescriptor$OfMethod | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    dropParameterTypes(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<MethodType | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    dropParameterTypesSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): MethodType | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    changeReturnType(var0: java_lang_Class | null): Promise<MethodType | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    changeReturnTypeSync(var0: java_lang_Class | null): MethodType | null;
    /**
     * @param var0 original type: 'java.lang.invoke.TypeDescriptor$OfField'
     * @return original return type: 'java.lang.invoke.TypeDescriptor$OfMethod'
     */
    changeReturnType(var0: java_lang_invoke_TypeDescriptor$OfField | JavaInterfaceProxy<java_lang_invoke_TypeDescriptor$OfFieldInterface> | null): Promise<java_lang_invoke_TypeDescriptor$OfMethod | null>;
    /**
     * @param var0 original type: 'java.lang.invoke.TypeDescriptor$OfField'
     * @return original return type: 'java.lang.invoke.TypeDescriptor$OfMethod'
     */
    changeReturnTypeSync(var0: java_lang_invoke_TypeDescriptor$OfField | JavaInterfaceProxy<java_lang_invoke_TypeDescriptor$OfFieldInterface> | null): java_lang_invoke_TypeDescriptor$OfMethod | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.ClassLoader'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    static fromMethodDescriptorString(var0: string | null, var1: java_lang_ClassLoader | null): Promise<MethodType | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.ClassLoader'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    static fromMethodDescriptorStringSync(var0: string | null, var1: java_lang_ClassLoader | null): MethodType | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'java.util.Optional'
     */
    describeConstable(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    describeConstableSync(): java_util_Optional | null;
    /**
     * @return original return type: 'java.lang.Class'
     */
    lastParameterType(): Promise<java_lang_Class | null>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    lastParameterTypeSync(): java_lang_Class | null;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    unwrap(): Promise<MethodType | null>;
    /**
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    unwrapSync(): MethodType | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.invoke.TypeDescriptor$OfField'
     * @return original return type: 'java.lang.invoke.TypeDescriptor$OfMethod'
     */
    changeParameterType(var0: java_lang_Integer | number, var1: java_lang_invoke_TypeDescriptor$OfField | JavaInterfaceProxy<java_lang_invoke_TypeDescriptor$OfFieldInterface> | null): Promise<java_lang_invoke_TypeDescriptor$OfMethod | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.invoke.TypeDescriptor$OfField'
     * @return original return type: 'java.lang.invoke.TypeDescriptor$OfMethod'
     */
    changeParameterTypeSync(var0: java_lang_Integer | number, var1: java_lang_invoke_TypeDescriptor$OfField | JavaInterfaceProxy<java_lang_invoke_TypeDescriptor$OfFieldInterface> | null): java_lang_invoke_TypeDescriptor$OfMethod | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    changeParameterType(var0: java_lang_Integer | number, var1: java_lang_Class | null): Promise<MethodType | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    changeParameterTypeSync(var0: java_lang_Integer | number, var1: java_lang_Class | null): MethodType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasWrappers(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasWrappersSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.Class[]'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    static methodType(var0: java_lang_Class | null, var1: (java_lang_Class | null)[] | null): Promise<MethodType | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.Class[]'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    static methodTypeSync(var0: java_lang_Class | null, var1: (java_lang_Class | null)[] | null): MethodType | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.invoke.MethodType'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    static methodType(var0: java_lang_Class | null, var1: MethodTypeClass | null): Promise<MethodType | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.invoke.MethodType'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    static methodTypeSync(var0: java_lang_Class | null, var1: MethodTypeClass | null): MethodType | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.Class'
     * @param var2 original type: 'java.lang.Class[]'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    static methodType(var0: java_lang_Class | null, var1: java_lang_Class | null, var2: (java_lang_Class | null)[] | null): Promise<MethodType | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.Class'
     * @param var2 original type: 'java.lang.Class[]'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    static methodTypeSync(var0: java_lang_Class | null, var1: java_lang_Class | null, var2: (java_lang_Class | null)[] | null): MethodType | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.util.List'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    static methodType(var0: java_lang_Class | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<MethodType | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.util.List'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    static methodTypeSync(var0: java_lang_Class | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): MethodType | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    static methodType(var0: java_lang_Class | null, var1: java_lang_Class | null): Promise<MethodType | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    static methodTypeSync(var0: java_lang_Class | null, var1: java_lang_Class | null): MethodType | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    static methodType(var0: java_lang_Class | null): Promise<MethodType | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    static methodTypeSync(var0: java_lang_Class | null): MethodType | null;
    /**
     * @return original return type: 'java.lang.Class[]'
     */
    parameterArray(): Promise<(java_lang_Class | null)[] | null>;
    /**
     * @return original return type: 'java.lang.Class[]'
     */
    parameterArraySync(): (java_lang_Class | null)[] | null;
    /**
     * @return original return type: 'java.lang.invoke.TypeDescriptor$OfField[]'
     */
    parameterArray(): Promise<(java_lang_invoke_TypeDescriptor$OfField | null)[] | null>;
    /**
     * @return original return type: 'java.lang.invoke.TypeDescriptor$OfField[]'
     */
    parameterArraySync(): (java_lang_invoke_TypeDescriptor$OfField | null)[] | null;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    appendParameterTypes(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<MethodType | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    appendParameterTypesSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): MethodType | null;
    /**
     * @param var0 original type: 'java.lang.Class[]'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    appendParameterTypes(var0: (java_lang_Class | null)[] | null): Promise<MethodType | null>;
    /**
     * @param var0 original type: 'java.lang.Class[]'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    appendParameterTypesSync(var0: (java_lang_Class | null)[] | null): MethodType | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.Class'
     */
    parameterType(var0: java_lang_Integer | number): Promise<java_lang_Class | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.Class'
     */
    parameterTypeSync(var0: java_lang_Integer | number): java_lang_Class | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.invoke.TypeDescriptor$OfField'
     */
    parameterType(var0: java_lang_Integer | number): Promise<java_lang_invoke_TypeDescriptor$OfField | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.invoke.TypeDescriptor$OfField'
     */
    parameterTypeSync(var0: java_lang_Integer | number): java_lang_invoke_TypeDescriptor$OfField | null;
    /**
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    erase(): Promise<MethodType | null>;
    /**
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    eraseSync(): MethodType | null;
    /**
     * @return original return type: 'int'
     */
    parameterCount(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    parameterCountSync(): number;
    /**
     * @return original return type: 'java.lang.String'
     */
    descriptorString(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    descriptorStringSync(): string | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.util.List'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    insertParameterTypes(var0: java_lang_Integer | number, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<MethodType | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.util.List'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    insertParameterTypesSync(var0: java_lang_Integer | number, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): MethodType | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.Class[]'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    insertParameterTypes(var0: java_lang_Integer | number, var1: (java_lang_Class | null)[] | null): Promise<MethodType | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.Class[]'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    insertParameterTypesSync(var0: java_lang_Integer | number, var1: (java_lang_Class | null)[] | null): MethodType | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.invoke.TypeDescriptor$OfField[]'
     * @return original return type: 'java.lang.invoke.TypeDescriptor$OfMethod'
     */
    insertParameterTypes(var0: java_lang_Integer | number, var1: (java_lang_invoke_TypeDescriptor$OfField | JavaInterfaceProxy<java_lang_invoke_TypeDescriptor$OfFieldInterface> | null)[] | null): Promise<java_lang_invoke_TypeDescriptor$OfMethod | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.invoke.TypeDescriptor$OfField[]'
     * @return original return type: 'java.lang.invoke.TypeDescriptor$OfMethod'
     */
    insertParameterTypesSync(var0: java_lang_Integer | number, var1: (java_lang_invoke_TypeDescriptor$OfField | JavaInterfaceProxy<java_lang_invoke_TypeDescriptor$OfFieldInterface> | null)[] | null): java_lang_invoke_TypeDescriptor$OfMethod | null;
    /**
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    generic(): Promise<MethodType | null>;
    /**
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    genericSync(): MethodType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasPrimitives(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasPrimitivesSync(): boolean;
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
     * @return original return type: 'java.util.List'
     */
    parameterList(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    parameterListSync(): java_util_List | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'boolean'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    static genericMethodType(var0: java_lang_Integer | number, var1: java_lang_Boolean | boolean): Promise<MethodType | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'boolean'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    static genericMethodTypeSync(var0: java_lang_Integer | number, var1: java_lang_Boolean | boolean): MethodType | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    static genericMethodType(var0: java_lang_Integer | number): Promise<MethodType | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    static genericMethodTypeSync(var0: java_lang_Integer | number): MethodType | null;
    /**
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    wrap(): Promise<MethodType | null>;
    /**
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    wrapSync(): MethodType | null;
    /**
     * @return original return type: 'java.lang.Class'
     */
    returnType(): Promise<java_lang_Class | null>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    returnTypeSync(): java_lang_Class | null;
    /**
     * @return original return type: 'java.lang.invoke.TypeDescriptor$OfField'
     */
    returnType(): Promise<java_lang_invoke_TypeDescriptor$OfField | null>;
    /**
     * @return original return type: 'java.lang.invoke.TypeDescriptor$OfField'
     */
    returnTypeSync(): java_lang_invoke_TypeDescriptor$OfField | null;
}
declare const MethodType_base: typeof MethodTypeClass;
/**
 * Class java.lang.invoke.MethodType.
 *
 * This actually imports the java class for further use.
 * The class {@link MethodTypeClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class MethodType extends MethodType_base {
}
export default MethodType;
