import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { ModuleLayer$Controller as java_lang_ModuleLayer$Controller } from "./ModuleLayer$Controller";
import { Configuration as java_lang_module_Configuration } from "./module/Configuration";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../util/List";
import { ClassLoader as java_lang_ClassLoader } from "./ClassLoader";
import { Class as java_lang_Class } from "./Class";
import { Long as java_lang_Long } from "./Long";
import { Integer as java_lang_Integer } from "./Integer";
import { Set as java_util_Set } from "./../util/Set";
import { Function as java_util_function_Function, FunctionInterface as java_util_function_FunctionInterface } from "./../util/function/Function";
import { Optional as java_util_Optional } from "./../util/Optional";
/**
 * This class just defines types, you should import {@link ModuleLayer} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ModuleLayerClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.module.Configuration'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.lang.ClassLoader'
     * @return original return type: 'java.lang.ModuleLayer$Controller'
     */
    static defineModulesWithManyLoaders(var0: java_lang_module_Configuration | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_lang_ClassLoader | null): Promise<java_lang_ModuleLayer$Controller | null>;
    /**
     * @param var0 original type: 'java.lang.module.Configuration'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.lang.ClassLoader'
     * @return original return type: 'java.lang.ModuleLayer$Controller'
     */
    static defineModulesWithManyLoadersSync(var0: java_lang_module_Configuration | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_lang_ClassLoader | null): java_lang_ModuleLayer$Controller | null;
    /**
     * @param var0 original type: 'java.lang.module.Configuration'
     * @param var1 original type: 'java.lang.ClassLoader'
     * @return original return type: 'java.lang.ModuleLayer'
     */
    defineModulesWithManyLoaders(var0: java_lang_module_Configuration | null, var1: java_lang_ClassLoader | null): Promise<ModuleLayer | null>;
    /**
     * @param var0 original type: 'java.lang.module.Configuration'
     * @param var1 original type: 'java.lang.ClassLoader'
     * @return original return type: 'java.lang.ModuleLayer'
     */
    defineModulesWithManyLoadersSync(var0: java_lang_module_Configuration | null, var1: java_lang_ClassLoader | null): ModuleLayer | null;
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
     * @return original return type: 'java.lang.module.Configuration'
     */
    configuration(): Promise<java_lang_module_Configuration | null>;
    /**
     * @return original return type: 'java.lang.module.Configuration'
     */
    configurationSync(): java_lang_module_Configuration | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'java.lang.module.Configuration'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.lang.ClassLoader'
     * @return original return type: 'java.lang.ModuleLayer$Controller'
     */
    static defineModulesWithOneLoader(var0: java_lang_module_Configuration | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_lang_ClassLoader | null): Promise<java_lang_ModuleLayer$Controller | null>;
    /**
     * @param var0 original type: 'java.lang.module.Configuration'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.lang.ClassLoader'
     * @return original return type: 'java.lang.ModuleLayer$Controller'
     */
    static defineModulesWithOneLoaderSync(var0: java_lang_module_Configuration | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_lang_ClassLoader | null): java_lang_ModuleLayer$Controller | null;
    /**
     * @param var0 original type: 'java.lang.module.Configuration'
     * @param var1 original type: 'java.lang.ClassLoader'
     * @return original return type: 'java.lang.ModuleLayer'
     */
    defineModulesWithOneLoader(var0: java_lang_module_Configuration | null, var1: java_lang_ClassLoader | null): Promise<ModuleLayer | null>;
    /**
     * @param var0 original type: 'java.lang.module.Configuration'
     * @param var1 original type: 'java.lang.ClassLoader'
     * @return original return type: 'java.lang.ModuleLayer'
     */
    defineModulesWithOneLoaderSync(var0: java_lang_module_Configuration | null, var1: java_lang_ClassLoader | null): ModuleLayer | null;
    /**
     * @return original return type: 'java.util.Set'
     */
    modules(): Promise<java_util_Set | null>;
    /**
     * @return original return type: 'java.util.Set'
     */
    modulesSync(): java_util_Set | null;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'java.lang.ModuleLayer'
     */
    static empty(): Promise<ModuleLayer | null>;
    /**
     * @return original return type: 'java.lang.ModuleLayer'
     */
    static emptySync(): ModuleLayer | null;
    /**
     * @param var0 original type: 'java.lang.module.Configuration'
     * @param var1 original type: 'java.util.function.Function'
     * @return original return type: 'java.lang.ModuleLayer'
     */
    defineModules(var0: java_lang_module_Configuration | null, var1: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null): Promise<ModuleLayer | null>;
    /**
     * @param var0 original type: 'java.lang.module.Configuration'
     * @param var1 original type: 'java.util.function.Function'
     * @return original return type: 'java.lang.ModuleLayer'
     */
    defineModulesSync(var0: java_lang_module_Configuration | null, var1: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null): ModuleLayer | null;
    /**
     * @param var0 original type: 'java.lang.module.Configuration'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.util.function.Function'
     * @return original return type: 'java.lang.ModuleLayer$Controller'
     */
    static defineModules(var0: java_lang_module_Configuration | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null): Promise<java_lang_ModuleLayer$Controller | null>;
    /**
     * @param var0 original type: 'java.lang.module.Configuration'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.util.function.Function'
     * @return original return type: 'java.lang.ModuleLayer$Controller'
     */
    static defineModulesSync(var0: java_lang_module_Configuration | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null): java_lang_ModuleLayer$Controller | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.Optional'
     */
    findModule(var0: string | null): Promise<java_util_Optional | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.Optional'
     */
    findModuleSync(var0: string | null): java_util_Optional | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.ClassLoader'
     */
    findLoader(var0: string | null): Promise<java_lang_ClassLoader | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.ClassLoader'
     */
    findLoaderSync(var0: string | null): java_lang_ClassLoader | null;
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
     * @return original return type: 'java.lang.ModuleLayer'
     */
    static boot(): Promise<ModuleLayer | null>;
    /**
     * @return original return type: 'java.lang.ModuleLayer'
     */
    static bootSync(): ModuleLayer | null;
    /**
     * @return original return type: 'java.util.List'
     */
    parents(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    parentsSync(): java_util_List | null;
}
declare const ModuleLayer_base: typeof ModuleLayerClass;
/**
 * Class java.lang.ModuleLayer.
 *
 * This actually imports the java class for further use.
 * The class {@link ModuleLayerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ModuleLayer extends ModuleLayer_base {
}
export default ModuleLayer;
