import { JavaClass, BasicOrJavaType } from "java-bridge";
import { List as java_util_List } from "./../../util/List";
import { Long as java_lang_Long } from "./../Long";
import { Integer as java_lang_Integer } from "./../Integer";
import { Class as java_lang_Class } from "./../Class";
/**
 * This class just defines types, you should import {@link ModuleDescriptor$Provides} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ModuleDescriptor$ProvidesClass extends JavaClass {
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
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    compareTo(var0: BasicOrJavaType | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    compareToSync(var0: BasicOrJavaType | null): number;
    /**
     * @param var0 original type: 'java.lang.module.ModuleDescriptor$Provides'
     * @return original return type: 'int'
     */
    compareTo(var0: ModuleDescriptor$ProvidesClass | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.module.ModuleDescriptor$Provides'
     * @return original return type: 'int'
     */
    compareToSync(var0: ModuleDescriptor$ProvidesClass | null): number;
    /**
     * @return original return type: 'java.lang.String'
     */
    service(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    serviceSync(): string | null;
    /**
     * @return original return type: 'java.util.List'
     */
    providers(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    providersSync(): java_util_List | null;
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
}
declare const ModuleDescriptor$Provides_base: typeof ModuleDescriptor$ProvidesClass;
/**
 * Class java.lang.module.ModuleDescriptor$Provides.
 *
 * This actually imports the java class for further use.
 * The class {@link ModuleDescriptor$ProvidesClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ModuleDescriptor$Provides extends ModuleDescriptor$Provides_base {
}
export default ModuleDescriptor$Provides;
//# sourceMappingURL=ModuleDescriptor$Provides.d.ts.map