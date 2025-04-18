import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../../java/lang/Class";
import { Long as java_lang_Long } from "./../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
import { IOD$Condition as org_dcm4che3_data_IOD$Condition } from "./IOD$Condition";
import { Code as org_dcm4che3_data_Code } from "./Code";
import { IOD as org_dcm4che3_data_IOD } from "./IOD";
import { VR as org_dcm4che3_data_VR } from "./VR";
import { IOD$DataElementType as org_dcm4che3_data_IOD$DataElementType } from "./IOD$DataElementType";
/**
 * This class just defines types, you should import {@link IOD$DataElement} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IOD$DataElementClass extends JavaClass {
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
     * @return original return type: 'java.lang.Object'
     */
    getValues(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    getValuesSync(): BasicOrJavaType | null;
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
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'int'
     */
    getLineNumber(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getLineNumberSync(): number;
    /**
     * @return original return type: 'org.dcm4che3.data.IOD$Condition'
     */
    getCondition(): Promise<org_dcm4che3_data_IOD$Condition | null>;
    /**
     * @return original return type: 'org.dcm4che3.data.IOD$Condition'
     */
    getConditionSync(): org_dcm4che3_data_IOD$Condition | null;
    /**
     * @param var0 original type: 'org.dcm4che3.data.IOD$Condition'
     * @return original return type: 'org.dcm4che3.data.IOD$DataElement'
     */
    setCondition(var0: org_dcm4che3_data_IOD$Condition | null): Promise<IOD$DataElement | null>;
    /**
     * @param var0 original type: 'org.dcm4che3.data.IOD$Condition'
     * @return original return type: 'org.dcm4che3.data.IOD$DataElement'
     */
    setConditionSync(var0: org_dcm4che3_data_IOD$Condition | null): IOD$DataElement | null;
    /**
     * @return original return type: 'int'
     */
    getValueNumber(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getValueNumberSync(): number;
    /**
     * @param var0 original type: 'int[]'
     * @return original return type: 'org.dcm4che3.data.IOD$DataElement'
     */
    setValues(var0: (java_lang_Integer | number)[] | null): Promise<IOD$DataElement | null>;
    /**
     * @param var0 original type: 'int[]'
     * @return original return type: 'org.dcm4che3.data.IOD$DataElement'
     */
    setValuesSync(var0: (java_lang_Integer | number)[] | null): IOD$DataElement | null;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'org.dcm4che3.data.IOD$DataElement'
     */
    setValues(var0: (string | null)[] | null): Promise<IOD$DataElement | null>;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'org.dcm4che3.data.IOD$DataElement'
     */
    setValuesSync(var0: (string | null)[] | null): IOD$DataElement | null;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Code[]'
     * @return original return type: 'org.dcm4che3.data.IOD$DataElement'
     */
    setValues(var0: (org_dcm4che3_data_Code | null)[] | null): Promise<IOD$DataElement | null>;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Code[]'
     * @return original return type: 'org.dcm4che3.data.IOD$DataElement'
     */
    setValuesSync(var0: (org_dcm4che3_data_Code | null)[] | null): IOD$DataElement | null;
    /**
     * @param var0 original type: 'org.dcm4che3.data.IOD'
     * @return original return type: 'org.dcm4che3.data.IOD$DataElement'
     */
    addItemIOD(var0: org_dcm4che3_data_IOD | null): Promise<IOD$DataElement | null>;
    /**
     * @param var0 original type: 'org.dcm4che3.data.IOD'
     * @return original return type: 'org.dcm4che3.data.IOD$DataElement'
     */
    addItemIODSync(var0: org_dcm4che3_data_IOD | null): IOD$DataElement | null;
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
     * @param var0 original type: 'int'
     * @return original return type: 'org.dcm4che3.data.IOD$DataElement'
     */
    setLineNumber(var0: java_lang_Integer | number): Promise<IOD$DataElement | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.dcm4che3.data.IOD$DataElement'
     */
    setLineNumberSync(var0: java_lang_Integer | number): IOD$DataElement | null;
    /**
     * Original type: 'int'
     */
    readonly valueNumber: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    readonly maxVM: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    readonly minVM: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    readonly tag: java_lang_Integer | number;
    /**
     * Original type: 'org.dcm4che3.data.VR'
     */
    readonly vr: org_dcm4che3_data_VR | null;
    /**
     * Original type: 'org.dcm4che3.data.IOD$DataElementType'
     */
    readonly type: org_dcm4che3_data_IOD$DataElementType | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'org.dcm4che3.data.VR'
     * @param var2 original type: 'org.dcm4che3.data.IOD$DataElementType'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'int'
     */
    constructor(var0: java_lang_Integer | number, var1: org_dcm4che3_data_VR | null, var2: org_dcm4che3_data_IOD$DataElementType | null, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: java_lang_Integer | number);
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'org.dcm4che3.data.VR'
     * @param var2 original type: 'org.dcm4che3.data.IOD$DataElementType'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'int'
     * @return original return type: 'org.dcm4che3.data.IOD$DataElement'
     */
    static newInstanceAsync(var0: java_lang_Integer | number, var1: org_dcm4che3_data_VR | null, var2: org_dcm4che3_data_IOD$DataElementType | null, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: java_lang_Integer | number): Promise<IOD$DataElement>;
}
declare const IOD$DataElement_base: typeof IOD$DataElementClass;
/**
 * Class org.dcm4che3.data.IOD$DataElement.
 *
 * This actually imports the java class for further use.
 * The class {@link IOD$DataElementClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IOD$DataElement extends IOD$DataElement_base {
}
export default IOD$DataElement;
