import { JavaClass, BasicOrJavaType } from "java-bridge";
import { ModuleDescriptor as java_lang_module_ModuleDescriptor } from "./module/ModuleDescriptor";
import { Class as java_lang_Class } from "./Class";
import { Long as java_lang_Long } from "./Long";
import { Integer as java_lang_Integer } from "./Integer";
import { ClassLoader as java_lang_ClassLoader } from "./ClassLoader";
import { Annotation as java_lang_annotation_Annotation } from "./annotation/Annotation";
import { ModuleLayer as java_lang_ModuleLayer } from "./ModuleLayer";
import { InputStream as java_io_InputStream } from "./../io/InputStream";
import { Set as java_util_Set } from "./../util/Set";
/**
 * This class just defines types, you should import {@link Module} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ModuleClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.module.ModuleDescriptor'
     */
    getDescriptor(): Promise<java_lang_module_ModuleDescriptor | null>;
    /**
     * @return original return type: 'java.lang.module.ModuleDescriptor'
     */
    getDescriptorSync(): java_lang_module_ModuleDescriptor | null;
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
     * @param var0 original type: 'java.lang.Module'
     * @return original return type: 'boolean'
     */
    canRead(var0: ModuleClass | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Module'
     * @return original return type: 'boolean'
     */
    canReadSync(var0: ModuleClass | null): boolean;
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
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.Module'
     */
    addUses(var0: java_lang_Class | null): Promise<Module | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.Module'
     */
    addUsesSync(var0: java_lang_Class | null): Module | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'java.lang.ClassLoader'
     */
    getClassLoader(): Promise<java_lang_ClassLoader | null>;
    /**
     * @return original return type: 'java.lang.ClassLoader'
     */
    getClassLoaderSync(): java_lang_ClassLoader | null;
    /**
     * @return original return type: 'boolean'
     */
    isNamed(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isNamedSync(): boolean;
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
     * @param var0 original type: 'java.lang.Module'
     * @return original return type: 'java.lang.Module'
     */
    addReads(var0: ModuleClass | null): Promise<Module | null>;
    /**
     * @param var0 original type: 'java.lang.Module'
     * @return original return type: 'java.lang.Module'
     */
    addReadsSync(var0: ModuleClass | null): Module | null;
    /**
     * @return original return type: 'java.lang.ModuleLayer'
     */
    getLayer(): Promise<java_lang_ModuleLayer | null>;
    /**
     * @return original return type: 'java.lang.ModuleLayer'
     */
    getLayerSync(): java_lang_ModuleLayer | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.io.InputStream'
     */
    getResourceAsStream(var0: string | null): Promise<java_io_InputStream | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.io.InputStream'
     */
    getResourceAsStreamSync(var0: string | null): java_io_InputStream | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Module'
     * @return original return type: 'java.lang.Module'
     */
    addExports(var0: string | null, var1: ModuleClass | null): Promise<Module | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Module'
     * @return original return type: 'java.lang.Module'
     */
    addExportsSync(var0: string | null, var1: ModuleClass | null): Module | null;
    /**
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getAnnotations(): Promise<(java_lang_annotation_Annotation | null)[] | null>;
    /**
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getAnnotationsSync(): (java_lang_annotation_Annotation | null)[] | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'boolean'
     */
    canUse(var0: java_lang_Class | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'boolean'
     */
    canUseSync(var0: java_lang_Class | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    isOpen(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    isOpenSync(var0: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Module'
     * @return original return type: 'boolean'
     */
    isOpen(var0: string | null, var1: ModuleClass | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Module'
     * @return original return type: 'boolean'
     */
    isOpenSync(var0: string | null, var1: ModuleClass | null): boolean;
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
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Module'
     * @return original return type: 'boolean'
     */
    isExported(var0: string | null, var1: ModuleClass | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Module'
     * @return original return type: 'boolean'
     */
    isExportedSync(var0: string | null, var1: ModuleClass | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    isExported(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    isExportedSync(var0: string | null): boolean;
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
     * @return original return type: 'java.util.Set'
     */
    getPackages(): Promise<java_util_Set | null>;
    /**
     * @return original return type: 'java.util.Set'
     */
    getPackagesSync(): java_util_Set | null;
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
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Module'
     * @return original return type: 'java.lang.Module'
     */
    addOpens(var0: string | null, var1: ModuleClass | null): Promise<Module | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Module'
     * @return original return type: 'java.lang.Module'
     */
    addOpensSync(var0: string | null, var1: ModuleClass | null): Module | null;
}
declare const Module_base: typeof ModuleClass;
/**
 * Class java.lang.Module.
 *
 * This actually imports the java class for further use.
 * The class {@link ModuleClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Module extends Module_base {
}
export default Module;
//# sourceMappingURL=Module.d.ts.map