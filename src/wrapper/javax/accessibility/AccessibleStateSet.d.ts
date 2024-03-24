import { JavaClass, BasicOrJavaType } from "java-bridge";
import { AccessibleState as javax_accessibility_AccessibleState } from "./AccessibleState";
import { Long as java_lang_Long } from "./../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../java/lang/Integer";
import { Class as java_lang_Class } from "./../../java/lang/Class";
/**
 * This class just defines types, you should import {@link AccessibleStateSet} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AccessibleStateSetClass extends JavaClass {
    /**
     * @param var0 original type: 'javax.accessibility.AccessibleState'
     * @return original return type: 'boolean'
     */
    add(var0: javax_accessibility_AccessibleState | null): Promise<boolean>;
    /**
     * @param var0 original type: 'javax.accessibility.AccessibleState'
     * @return original return type: 'boolean'
     */
    addSync(var0: javax_accessibility_AccessibleState | null): boolean;
    /**
     * @param var0 original type: 'javax.accessibility.AccessibleState'
     * @return original return type: 'boolean'
     */
    remove(var0: javax_accessibility_AccessibleState | null): Promise<boolean>;
    /**
     * @param var0 original type: 'javax.accessibility.AccessibleState'
     * @return original return type: 'boolean'
     */
    removeSync(var0: javax_accessibility_AccessibleState | null): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): Promise<string>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @return original return type: 'void'
     */
    clear(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    clearSync(): void;
    /**
     * @return original return type: 'javax.accessibility.AccessibleState[]'
     */
    toArray(): Promise<(javax_accessibility_AccessibleState | null)[] | null>;
    /**
     * @return original return type: 'javax.accessibility.AccessibleState[]'
     */
    toArraySync(): (javax_accessibility_AccessibleState | null)[] | null;
    /**
     * @param var0 original type: 'javax.accessibility.AccessibleState'
     * @return original return type: 'boolean'
     */
    contains(var0: javax_accessibility_AccessibleState | null): Promise<boolean>;
    /**
     * @param var0 original type: 'javax.accessibility.AccessibleState'
     * @return original return type: 'boolean'
     */
    containsSync(var0: javax_accessibility_AccessibleState | null): boolean;
    /**
     * @param var0 original type: 'javax.accessibility.AccessibleState[]'
     * @return original return type: 'void'
     */
    addAll(var0: (javax_accessibility_AccessibleState | null)[] | null): Promise<void>;
    /**
     * @param var0 original type: 'javax.accessibility.AccessibleState[]'
     * @return original return type: 'void'
     */
    addAllSync(var0: (javax_accessibility_AccessibleState | null)[] | null): void;
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
    /**
     * @return original return type: 'javax.accessibility.AccessibleStateSet'
     */
    static newInstanceAsync(): Promise<AccessibleStateSet>;
    /**
     * @param var0 original type: 'javax.accessibility.AccessibleState[]'
     * @return original return type: 'javax.accessibility.AccessibleStateSet'
     */
    static newInstanceAsync(var0: (javax_accessibility_AccessibleState | null)[] | null): Promise<AccessibleStateSet>;
    constructor();
    /**
     * @param var0 original type: 'javax.accessibility.AccessibleState[]'
     */
    constructor(var0: (javax_accessibility_AccessibleState | null)[] | null);
}
declare const AccessibleStateSet_base: typeof AccessibleStateSetClass;
/**
 * Class javax.accessibility.AccessibleStateSet.
 *
 * This actually imports the java class for further use.
 * The class {@link AccessibleStateSetClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AccessibleStateSet extends AccessibleStateSet_base {
}
export default AccessibleStateSet;
//# sourceMappingURL=AccessibleStateSet.d.ts.map