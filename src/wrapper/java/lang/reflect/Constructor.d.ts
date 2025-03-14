import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../Class";
import { Long as java_lang_Long } from "./../Long";
import { Integer as java_lang_Integer } from "./../Integer";
import { AnnotatedType as java_lang_reflect_AnnotatedType } from "./AnnotatedType";
import { Type as java_lang_reflect_Type } from "./Type";
import { Annotation as java_lang_annotation_Annotation } from "./../annotation/Annotation";
import { Set as java_util_Set } from "./../../util/Set";
import { TypeVariable as java_lang_reflect_TypeVariable } from "./TypeVariable";
import { Boolean as java_lang_Boolean } from "./../Boolean";
import { AccessibleObject as java_lang_reflect_AccessibleObject } from "./AccessibleObject";
import { Parameter as java_lang_reflect_Parameter } from "./Parameter";
/**
 * This class just defines types, you should import {@link Constructor} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ConstructorClass extends JavaClass {
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
     * @return original return type: 'java.lang.String'
     */
    getName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getNameSync(): string | null;
    /**
     * @return original return type: 'int'
     */
    getParameterCount(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getParameterCountSync(): number;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'boolean'
     */
    isAnnotationPresent(var0: java_lang_Class | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'boolean'
     */
    isAnnotationPresentSync(var0: java_lang_Class | null): boolean;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'boolean'
     */
    isSynthetic(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isSyntheticSync(): boolean;
    /**
     * @return original return type: 'java.lang.Class[]'
     */
    getParameterTypes(): Promise<(java_lang_Class | null)[] | null>;
    /**
     * @return original return type: 'java.lang.Class[]'
     */
    getParameterTypesSync(): (java_lang_Class | null)[] | null;
    /**
     * @return original return type: 'java.lang.reflect.AnnotatedType[]'
     */
    getAnnotatedParameterTypes(): Promise<(java_lang_reflect_AnnotatedType | null)[] | null>;
    /**
     * @return original return type: 'java.lang.reflect.AnnotatedType[]'
     */
    getAnnotatedParameterTypesSync(): (java_lang_reflect_AnnotatedType | null)[] | null;
    /**
     * @return original return type: 'java.lang.reflect.Type[]'
     */
    getGenericExceptionTypes(): Promise<(java_lang_reflect_Type | null)[] | null>;
    /**
     * @return original return type: 'java.lang.reflect.Type[]'
     */
    getGenericExceptionTypesSync(): (java_lang_reflect_Type | null)[] | null;
    /**
     * @return original return type: 'java.lang.reflect.AnnotatedType'
     */
    getAnnotatedReceiverType(): Promise<java_lang_reflect_AnnotatedType | null>;
    /**
     * @return original return type: 'java.lang.reflect.AnnotatedType'
     */
    getAnnotatedReceiverTypeSync(): java_lang_reflect_AnnotatedType | null;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getDeclaredAnnotations(): Promise<(java_lang_annotation_Annotation | null)[] | null>;
    /**
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getDeclaredAnnotationsSync(): (java_lang_annotation_Annotation | null)[] | null;
    /**
     * @return original return type: 'java.util.Set'
     */
    accessFlags(): Promise<java_util_Set | null>;
    /**
     * @return original return type: 'java.util.Set'
     */
    accessFlagsSync(): java_util_Set | null;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getDeclaringClass(): Promise<java_lang_Class | null>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getDeclaringClassSync(): java_lang_Class | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getAnnotationsByType(var0: java_lang_Class | null): Promise<(java_lang_annotation_Annotation | null)[] | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getAnnotationsByTypeSync(var0: java_lang_Class | null): (java_lang_annotation_Annotation | null)[] | null;
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
    toGenericString(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toGenericStringSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    canAccess(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    canAccessSync(var0: BasicOrJavaType | null): boolean;
    /**
     * @return original return type: 'int'
     */
    getModifiers(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getModifiersSync(): number;
    /**
     * @return original return type: 'java.lang.reflect.TypeVariable[]'
     */
    getTypeParameters(): Promise<(java_lang_reflect_TypeVariable | null)[] | null>;
    /**
     * @return original return type: 'java.lang.reflect.TypeVariable[]'
     */
    getTypeParametersSync(): (java_lang_reflect_TypeVariable | null)[] | null;
    /**
     * @return original return type: 'boolean'
     */
    trySetAccessible(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    trySetAccessibleSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isAccessible(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isAccessibleSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setAccessible(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setAccessibleSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'java.lang.reflect.AccessibleObject[]'
     * @param var1 original type: 'boolean'
     * @return original return type: 'void'
     */
    static setAccessible(var0: (java_lang_reflect_AccessibleObject | null)[] | null, var1: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.reflect.AccessibleObject[]'
     * @param var1 original type: 'boolean'
     * @return original return type: 'void'
     */
    static setAccessibleSync(var0: (java_lang_reflect_AccessibleObject | null)[] | null, var1: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'boolean'
     */
    isVarArgs(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isVarArgsSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    newInstance(var0: (BasicOrJavaType | null)[] | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    newInstanceSync(var0: (BasicOrJavaType | null)[] | null): BasicOrJavaType | null;
    /**
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getAnnotations(): Promise<(java_lang_annotation_Annotation | null)[] | null>;
    /**
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getAnnotationsSync(): (java_lang_annotation_Annotation | null)[] | null;
    /**
     * @return original return type: 'java.lang.reflect.AnnotatedType[]'
     */
    getAnnotatedExceptionTypes(): Promise<(java_lang_reflect_AnnotatedType | null)[] | null>;
    /**
     * @return original return type: 'java.lang.reflect.AnnotatedType[]'
     */
    getAnnotatedExceptionTypesSync(): (java_lang_reflect_AnnotatedType | null)[] | null;
    /**
     * @return original return type: 'java.lang.Class[]'
     */
    getExceptionTypes(): Promise<(java_lang_Class | null)[] | null>;
    /**
     * @return original return type: 'java.lang.Class[]'
     */
    getExceptionTypesSync(): (java_lang_Class | null)[] | null;
    /**
     * @return original return type: 'java.lang.reflect.Type[]'
     */
    getGenericParameterTypes(): Promise<(java_lang_reflect_Type | null)[] | null>;
    /**
     * @return original return type: 'java.lang.reflect.Type[]'
     */
    getGenericParameterTypesSync(): (java_lang_reflect_Type | null)[] | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation'
     */
    getAnnotation(var0: java_lang_Class | null): Promise<java_lang_annotation_Annotation | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation'
     */
    getAnnotationSync(var0: java_lang_Class | null): java_lang_annotation_Annotation | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getDeclaredAnnotationsByType(var0: java_lang_Class | null): Promise<(java_lang_annotation_Annotation | null)[] | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getDeclaredAnnotationsByTypeSync(var0: java_lang_Class | null): (java_lang_annotation_Annotation | null)[] | null;
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
     * @return original return type: 'java.lang.reflect.Parameter[]'
     */
    getParameters(): Promise<(java_lang_reflect_Parameter | null)[] | null>;
    /**
     * @return original return type: 'java.lang.reflect.Parameter[]'
     */
    getParametersSync(): (java_lang_reflect_Parameter | null)[] | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation'
     */
    getDeclaredAnnotation(var0: java_lang_Class | null): Promise<java_lang_annotation_Annotation | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation'
     */
    getDeclaredAnnotationSync(var0: java_lang_Class | null): java_lang_annotation_Annotation | null;
    /**
     * @return original return type: 'java.lang.annotation.Annotation[][]'
     */
    getParameterAnnotations(): Promise<((java_lang_annotation_Annotation | null)[] | null)[] | null>;
    /**
     * @return original return type: 'java.lang.annotation.Annotation[][]'
     */
    getParameterAnnotationsSync(): ((java_lang_annotation_Annotation | null)[] | null)[] | null;
    /**
     * @return original return type: 'java.lang.reflect.AnnotatedType'
     */
    getAnnotatedReturnType(): Promise<java_lang_reflect_AnnotatedType | null>;
    /**
     * @return original return type: 'java.lang.reflect.AnnotatedType'
     */
    getAnnotatedReturnTypeSync(): java_lang_reflect_AnnotatedType | null;
    /**
     * Original type: 'int'
     */
    static readonly PUBLIC: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly DECLARED: java_lang_Integer | number;
}
declare const Constructor_base: typeof ConstructorClass;
/**
 * Class java.lang.reflect.Constructor.
 *
 * This actually imports the java class for further use.
 * The class {@link ConstructorClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Constructor extends Constructor_base {
}
export default Constructor;
//# sourceMappingURL=Constructor.d.ts.map