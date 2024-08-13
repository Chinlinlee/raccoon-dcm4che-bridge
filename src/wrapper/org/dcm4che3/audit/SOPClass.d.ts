import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
import { List as java_util_List } from "./../../../java/util/List";
import { Long as java_lang_Long } from "./../../../java/lang/Long";
import { Class as java_lang_Class } from "./../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link SOPClass} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class SOPClassClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.Integer'
     * @return original return type: 'void'
     */
    setNumberOfInstances(var0: java_lang_Integer | number | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Integer'
     * @return original return type: 'void'
     */
    setNumberOfInstancesSync(var0: java_lang_Integer | number | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setUID(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setUIDSync(var0: string | null): void;
    /**
     * @return original return type: 'java.util.List'
     */
    getInstance(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getInstanceSync(): java_util_List | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getUID(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getUIDSync(): string | null;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getNumberOfInstances(): Promise<number | null>;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getNumberOfInstancesSync(): number | null;
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
    toString(): string;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringAsync(): Promise<string>;
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
     * @return original return type: 'org.dcm4che3.audit.SOPClass'
     */
    static newInstanceAsync(): Promise<SOPClass>;
    constructor();
}
declare const SOPClass_base: typeof SOPClassClass;
/**
 * Class org.dcm4che3.audit.SOPClass.
 *
 * This actually imports the java class for further use.
 * The class {@link SOPClassClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class SOPClass extends SOPClass_base {
}
export default SOPClass;
//# sourceMappingURL=SOPClass.d.ts.map