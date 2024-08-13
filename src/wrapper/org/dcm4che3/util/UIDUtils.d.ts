/// <reference types="node" />
import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { StringBuilder as java_lang_StringBuilder } from "./../../../java/lang/StringBuilder";
import { Attributes as org_dcm4che3_data_Attributes } from "./../data/Attributes";
import { Map as java_util_Map, MapInterface as java_util_MapInterface } from "./../../../java/util/Map";
import { Long as java_lang_Long } from "./../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
import { Class as java_lang_Class } from "./../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link UIDUtils} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class UIDUtilsClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.String'
     */
    static getRoot(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    static getRootSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static isValid(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static isValidSync(var0: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static remapUID(var0: string | null, var1: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static remapUIDSync(var0: string | null, var1: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static remapUID(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static remapUIDSync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static createUID(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static createUIDSync(var0: string | null): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    static createUID(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    static createUIDSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.StringBuilder'
     * @return original return type: 'java.lang.StringBuilder'
     */
    static promptTo(var0: string | null, var1: java_lang_StringBuilder | null): Promise<java_lang_StringBuilder | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.StringBuilder'
     * @return original return type: 'java.lang.StringBuilder'
     */
    static promptToSync(var0: string | null, var1: java_lang_StringBuilder | null): java_lang_StringBuilder | null;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @param var1 original type: 'java.util.Map'
     * @param var2 original type: 'org.dcm4che3.data.Attributes'
     * @return original return type: 'int'
     */
    static remapUIDs(var0: org_dcm4che3_data_Attributes | null, var1: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null, var2: org_dcm4che3_data_Attributes | null): Promise<number>;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @param var1 original type: 'java.util.Map'
     * @param var2 original type: 'org.dcm4che3.data.Attributes'
     * @return original return type: 'int'
     */
    static remapUIDsSync(var0: org_dcm4che3_data_Attributes | null, var1: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null, var2: org_dcm4che3_data_Attributes | null): number;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @param var1 original type: 'java.util.Map'
     * @return original return type: 'int'
     */
    static remapUIDs(var0: org_dcm4che3_data_Attributes | null, var1: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null): Promise<number>;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @param var1 original type: 'java.util.Map'
     * @return original return type: 'int'
     */
    static remapUIDsSync(var0: org_dcm4che3_data_Attributes | null, var1: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null): number;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static createNameBasedUID(var0: Buffer | null, var1: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static createNameBasedUIDSync(var0: Buffer | null, var1: string | null): string | null;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'java.lang.String'
     */
    static createNameBasedUID(var0: Buffer | null): Promise<string | null>;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'java.lang.String'
     */
    static createNameBasedUIDSync(var0: Buffer | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    static setRoot(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    static setRootSync(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static createUIDIfNull(var0: string | null, var1: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static createUIDIfNullSync(var0: string | null, var1: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static createUIDIfNull(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static createUIDIfNullSync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String[]'
     */
    static findUIDs(var0: string | null): Promise<(string | null)[] | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String[]'
     */
    static findUIDsSync(var0: string | null): (string | null)[] | null;
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
     * @return original return type: 'org.dcm4che3.util.UIDUtils'
     */
    static newInstanceAsync(): Promise<UIDUtils>;
    constructor();
}
declare const UIDUtils_base: typeof UIDUtilsClass;
/**
 * Class org.dcm4che3.util.UIDUtils.
 *
 * This actually imports the java class for further use.
 * The class {@link UIDUtilsClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class UIDUtils extends UIDUtils_base {
}
export default UIDUtils;
//# sourceMappingURL=UIDUtils.d.ts.map