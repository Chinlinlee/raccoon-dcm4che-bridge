import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Module as java_lang_Module } from "./Module";
import { ModuleLayer as java_lang_ModuleLayer } from "./ModuleLayer";
import { Long as java_lang_Long } from "./Long";
import { Integer as java_lang_Integer } from "./Integer";
import { Class as java_lang_Class } from "./Class";
/**
 * This class just defines types, you should import {@link ModuleLayer$Controller} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ModuleLayer$ControllerClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.Module'
     * @param var1 original type: 'java.lang.Module'
     * @return original return type: 'java.lang.ModuleLayer$Controller'
     */
    addReads(var0: java_lang_Module | null, var1: java_lang_Module | null): Promise<ModuleLayer$Controller | null>;
    /**
     * @param var0 original type: 'java.lang.Module'
     * @param var1 original type: 'java.lang.Module'
     * @return original return type: 'java.lang.ModuleLayer$Controller'
     */
    addReadsSync(var0: java_lang_Module | null, var1: java_lang_Module | null): ModuleLayer$Controller | null;
    /**
     * @param var0 original type: 'java.lang.Module'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.Module'
     * @return original return type: 'java.lang.ModuleLayer$Controller'
     */
    addExports(var0: java_lang_Module | null, var1: string | null, var2: java_lang_Module | null): Promise<ModuleLayer$Controller | null>;
    /**
     * @param var0 original type: 'java.lang.Module'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.Module'
     * @return original return type: 'java.lang.ModuleLayer$Controller'
     */
    addExportsSync(var0: java_lang_Module | null, var1: string | null, var2: java_lang_Module | null): ModuleLayer$Controller | null;
    /**
     * @param var0 original type: 'java.lang.Module'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.Module'
     * @return original return type: 'java.lang.ModuleLayer$Controller'
     */
    addOpens(var0: java_lang_Module | null, var1: string | null, var2: java_lang_Module | null): Promise<ModuleLayer$Controller | null>;
    /**
     * @param var0 original type: 'java.lang.Module'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.Module'
     * @return original return type: 'java.lang.ModuleLayer$Controller'
     */
    addOpensSync(var0: java_lang_Module | null, var1: string | null, var2: java_lang_Module | null): ModuleLayer$Controller | null;
    /**
     * @return original return type: 'java.lang.ModuleLayer'
     */
    layer(): Promise<java_lang_ModuleLayer | null>;
    /**
     * @return original return type: 'java.lang.ModuleLayer'
     */
    layerSync(): java_lang_ModuleLayer | null;
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
    toString(): Promise<string>;
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
}
declare const ModuleLayer$Controller_base: typeof ModuleLayer$ControllerClass;
/**
 * Class java.lang.ModuleLayer$Controller.
 *
 * This actually imports the java class for further use.
 * The class {@link ModuleLayer$ControllerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ModuleLayer$Controller extends ModuleLayer$Controller_base {
}
export default ModuleLayer$Controller;
//# sourceMappingURL=ModuleLayer$Controller.d.ts.map