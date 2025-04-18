import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./../../../java/lang/Class";
import { Long as java_lang_Long } from "./../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
import { AttributeSelector as org_dcm4che3_data_AttributeSelector } from "./../data/AttributeSelector";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../java/util/List";
import { VR as org_dcm4che3_data_VR } from "./../data/VR";
import { Boolean as java_lang_Boolean } from "./../../../java/lang/Boolean";
import { BulkDataDescriptor as org_dcm4che3_io_BulkDataDescriptor, BulkDataDescriptorInterface as org_dcm4che3_io_BulkDataDescriptorInterface } from "./BulkDataDescriptor";
/**
 * This class just defines types, you should import {@link BasicBulkDataDescriptor} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class BasicBulkDataDescriptorClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'void'
     */
    setLengthsThresholdsFromStrings(var0: (string | null)[] | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'void'
     */
    setLengthsThresholdsFromStringsSync(var0: (string | null)[] | null): void;
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
     * @return original return type: 'boolean'
     */
    isExcludeDefaults(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isExcludeDefaultsSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setBulkDataDescriptorID(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setBulkDataDescriptorIDSync(var0: string | null): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getBulkDataDescriptorID(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getBulkDataDescriptorIDSync(): string | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'org.dcm4che3.data.AttributeSelector[]'
     * @return original return type: 'org.dcm4che3.io.BasicBulkDataDescriptor'
     */
    addAttributeSelector(var0: (org_dcm4che3_data_AttributeSelector | null)[] | null): Promise<BasicBulkDataDescriptor | null>;
    /**
     * @param var0 original type: 'org.dcm4che3.data.AttributeSelector[]'
     * @return original return type: 'org.dcm4che3.io.BasicBulkDataDescriptor'
     */
    addAttributeSelectorSync(var0: (org_dcm4che3_data_AttributeSelector | null)[] | null): BasicBulkDataDescriptor | null;
    /**
     * @param var0 original type: 'int[]'
     * @return original return type: 'org.dcm4che3.io.BasicBulkDataDescriptor'
     */
    addTag(var0: (java_lang_Integer | number)[] | null): Promise<BasicBulkDataDescriptor | null>;
    /**
     * @param var0 original type: 'int[]'
     * @return original return type: 'org.dcm4che3.io.BasicBulkDataDescriptor'
     */
    addTagSync(var0: (java_lang_Integer | number)[] | null): BasicBulkDataDescriptor | null;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'org.dcm4che3.data.AttributeSelector[]'
     */
    getAttributeSelectors(): Promise<(org_dcm4che3_data_AttributeSelector | null)[] | null>;
    /**
     * @return original return type: 'org.dcm4che3.data.AttributeSelector[]'
     */
    getAttributeSelectorsSync(): (org_dcm4che3_data_AttributeSelector | null)[] | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'int'
     * @param var3 original type: 'org.dcm4che3.data.VR'
     * @param var4 original type: 'int'
     * @return original return type: 'boolean'
     */
    isBulkData(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var1: string | null, var2: java_lang_Integer | number, var3: org_dcm4che3_data_VR | null, var4: java_lang_Integer | number): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.List'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'int'
     * @param var3 original type: 'org.dcm4che3.data.VR'
     * @param var4 original type: 'int'
     * @return original return type: 'boolean'
     */
    isBulkDataSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var1: string | null, var2: java_lang_Integer | number, var3: org_dcm4che3_data_VR | null, var4: java_lang_Integer | number): boolean;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'void'
     */
    setAttributeSelectorsFromStrings(var0: (string | null)[] | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'void'
     */
    setAttributeSelectorsFromStringsSync(var0: (string | null)[] | null): void;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.dcm4che3.io.BasicBulkDataDescriptor'
     */
    excludeDefaults(var0: java_lang_Boolean | boolean): Promise<BasicBulkDataDescriptor | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.dcm4che3.io.BasicBulkDataDescriptor'
     */
    excludeDefaultsSync(var0: java_lang_Boolean | boolean): BasicBulkDataDescriptor | null;
    /**
     * @return original return type: 'org.dcm4che3.io.BasicBulkDataDescriptor'
     */
    excludeDefaults(): Promise<BasicBulkDataDescriptor | null>;
    /**
     * @return original return type: 'org.dcm4che3.io.BasicBulkDataDescriptor'
     */
    excludeDefaultsSync(): BasicBulkDataDescriptor | null;
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
     * @param var0 original type: 'int[]'
     * @return original return type: 'org.dcm4che3.io.BasicBulkDataDescriptor'
     */
    addTagPath(var0: (java_lang_Integer | number)[] | null): Promise<BasicBulkDataDescriptor | null>;
    /**
     * @param var0 original type: 'int[]'
     * @return original return type: 'org.dcm4che3.io.BasicBulkDataDescriptor'
     */
    addTagPathSync(var0: (java_lang_Integer | number)[] | null): BasicBulkDataDescriptor | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'org.dcm4che3.data.VR[]'
     * @return original return type: 'org.dcm4che3.io.BasicBulkDataDescriptor'
     */
    addLengthsThreshold(var0: java_lang_Integer | number, var1: (org_dcm4che3_data_VR | null)[] | null): Promise<BasicBulkDataDescriptor | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'org.dcm4che3.data.VR[]'
     * @return original return type: 'org.dcm4che3.io.BasicBulkDataDescriptor'
     */
    addLengthsThresholdSync(var0: java_lang_Integer | number, var1: (org_dcm4che3_data_VR | null)[] | null): BasicBulkDataDescriptor | null;
    /**
     * @return original return type: 'java.lang.String[]'
     */
    getLengthsThresholdsAsStrings(): Promise<(string | null)[] | null>;
    /**
     * @return original return type: 'java.lang.String[]'
     */
    getLengthsThresholdsAsStringsSync(): (string | null)[] | null;
    /**
     * Original type: 'org.dcm4che3.io.BulkDataDescriptor'
     */
    static readonly PIXELDATA: org_dcm4che3_io_BulkDataDescriptor | JavaInterfaceProxy<org_dcm4che3_io_BulkDataDescriptorInterface> | null;
    /**
     * Original type: 'org.dcm4che3.io.BulkDataDescriptor'
     */
    static readonly DEFAULT: org_dcm4che3_io_BulkDataDescriptor | JavaInterfaceProxy<org_dcm4che3_io_BulkDataDescriptorInterface> | null;
    constructor();
    /**
     * @return original return type: 'org.dcm4che3.io.BasicBulkDataDescriptor'
     */
    static newInstanceAsync(): Promise<BasicBulkDataDescriptor>;
    /**
     * @param var0 original type: 'java.lang.String'
     */
    constructor(var0: string | null);
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.io.BasicBulkDataDescriptor'
     */
    static newInstanceAsync(var0: string | null): Promise<BasicBulkDataDescriptor>;
}
declare const BasicBulkDataDescriptor_base: typeof BasicBulkDataDescriptorClass;
/**
 * Class org.dcm4che3.io.BasicBulkDataDescriptor.
 *
 * This actually imports the java class for further use.
 * The class {@link BasicBulkDataDescriptorClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class BasicBulkDataDescriptor extends BasicBulkDataDescriptor_base {
}
export default BasicBulkDataDescriptor;
