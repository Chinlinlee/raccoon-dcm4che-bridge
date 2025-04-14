import { JavaClass, BasicOrJavaType } from "java-bridge";
import { AccessibleRelation as javax_accessibility_AccessibleRelation } from "./AccessibleRelation";
import { Class as java_lang_Class } from "./../../java/lang/Class";
import { Long as java_lang_Long } from "./../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../java/lang/Integer";
/**
 * This class just defines types, you should import {@link AccessibleRelationSet} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AccessibleRelationSetClass extends JavaClass {
    /**
     * @param var0 original type: 'javax.accessibility.AccessibleRelation'
     * @return original return type: 'boolean'
     */
    add(var0: javax_accessibility_AccessibleRelation | null): Promise<boolean>;
    /**
     * @param var0 original type: 'javax.accessibility.AccessibleRelation'
     * @return original return type: 'boolean'
     */
    addSync(var0: javax_accessibility_AccessibleRelation | null): boolean;
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
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'void'
     */
    clear(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    clearSync(): void;
    /**
     * @param var0 original type: 'javax.accessibility.AccessibleRelation'
     * @return original return type: 'boolean'
     */
    remove(var0: javax_accessibility_AccessibleRelation | null): Promise<boolean>;
    /**
     * @param var0 original type: 'javax.accessibility.AccessibleRelation'
     * @return original return type: 'boolean'
     */
    removeSync(var0: javax_accessibility_AccessibleRelation | null): boolean;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    contains(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    containsSync(var0: string | null): boolean;
    /**
     * @return original return type: 'int'
     */
    size(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    sizeSync(): number;
    /**
     * @param var0 original type: 'javax.accessibility.AccessibleRelation[]'
     * @return original return type: 'void'
     */
    addAll(var0: (javax_accessibility_AccessibleRelation | null)[] | null): Promise<void>;
    /**
     * @param var0 original type: 'javax.accessibility.AccessibleRelation[]'
     * @return original return type: 'void'
     */
    addAllSync(var0: (javax_accessibility_AccessibleRelation | null)[] | null): void;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'javax.accessibility.AccessibleRelation'
     */
    get(var0: string | null): Promise<javax_accessibility_AccessibleRelation | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'javax.accessibility.AccessibleRelation'
     */
    getSync(var0: string | null): javax_accessibility_AccessibleRelation | null;
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
     * @return original return type: 'javax.accessibility.AccessibleRelation[]'
     */
    toArray(): Promise<(javax_accessibility_AccessibleRelation | null)[] | null>;
    /**
     * @return original return type: 'javax.accessibility.AccessibleRelation[]'
     */
    toArraySync(): (javax_accessibility_AccessibleRelation | null)[] | null;
    constructor();
    /**
     * @return original return type: 'javax.accessibility.AccessibleRelationSet'
     */
    static newInstanceAsync(): Promise<AccessibleRelationSet>;
    /**
     * @param var0 original type: 'javax.accessibility.AccessibleRelation[]'
     */
    constructor(var0: (javax_accessibility_AccessibleRelation | null)[] | null);
    /**
     * @param var0 original type: 'javax.accessibility.AccessibleRelation[]'
     * @return original return type: 'javax.accessibility.AccessibleRelationSet'
     */
    static newInstanceAsync(var0: (javax_accessibility_AccessibleRelation | null)[] | null): Promise<AccessibleRelationSet>;
}
declare const AccessibleRelationSet_base: typeof AccessibleRelationSetClass;
/**
 * Class javax.accessibility.AccessibleRelationSet.
 *
 * This actually imports the java class for further use.
 * The class {@link AccessibleRelationSetClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AccessibleRelationSet extends AccessibleRelationSet_base {
}
export default AccessibleRelationSet;
