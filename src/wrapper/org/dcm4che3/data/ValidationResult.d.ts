import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../../java/lang/Class";
import { Long as java_lang_Long } from "./../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
import { IOD$DataElement as org_dcm4che3_data_IOD$DataElement } from "./IOD$DataElement";
import { Attributes as org_dcm4che3_data_Attributes } from "./Attributes";
import { ValidationResult$Invalid as org_dcm4che3_data_ValidationResult$Invalid } from "./ValidationResult$Invalid";
import { IOD as org_dcm4che3_data_IOD } from "./IOD";
/**
 * This class just defines types, you should import {@link ValidationResult} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ValidationResultClass extends JavaClass {
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
     * @return original return type: 'int[]'
     */
    tagsOfMissingAttributes(): Promise<(number)[] | null>;
    /**
     * @return original return type: 'int[]'
     */
    tagsOfMissingAttributesSync(): (number)[] | null;
    /**
     * @return original return type: 'boolean'
     */
    isValid(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isValidSync(): boolean;
    /**
     * @return original return type: 'int[]'
     */
    tagsOfMissingAttributeValues(): Promise<(number)[] | null>;
    /**
     * @return original return type: 'int[]'
     */
    tagsOfMissingAttributeValuesSync(): (number)[] | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getErrorComment(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getErrorCommentSync(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    hasMissingAttributes(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMissingAttributesSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasNotAllowedAttributes(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasNotAllowedAttributesSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasMissingAttributeValues(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMissingAttributeValuesSync(): boolean;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'int[]'
     */
    getOffendingElements(): Promise<(number)[] | null>;
    /**
     * @return original return type: 'int[]'
     */
    getOffendingElementsSync(): (number)[] | null;
    /**
     * @return original return type: 'int[]'
     */
    tagsOfNotAllowedAttributes(): Promise<(number)[] | null>;
    /**
     * @return original return type: 'int[]'
     */
    tagsOfNotAllowedAttributesSync(): (number)[] | null;
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
     * @return original return type: 'int[]'
     */
    tagsOfInvalidAttributeValues(): Promise<(number)[] | null>;
    /**
     * @return original return type: 'int[]'
     */
    tagsOfInvalidAttributeValuesSync(): (number)[] | null;
    /**
     * @param var0 original type: 'org.dcm4che3.data.IOD$DataElement'
     * @return original return type: 'void'
     */
    addMissingAttributeValue(var0: org_dcm4che3_data_IOD$DataElement | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.data.IOD$DataElement'
     * @return original return type: 'void'
     */
    addMissingAttributeValueSync(var0: org_dcm4che3_data_IOD$DataElement | null): void;
    /**
     * @param var0 original type: 'org.dcm4che3.data.IOD$DataElement'
     * @return original return type: 'void'
     */
    addNotAllowedAttribute(var0: org_dcm4che3_data_IOD$DataElement | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.data.IOD$DataElement'
     * @return original return type: 'void'
     */
    addNotAllowedAttributeSync(var0: org_dcm4che3_data_IOD$DataElement | null): void;
    /**
     * @return original return type: 'boolean'
     */
    hasInvalidAttributeValues(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasInvalidAttributeValuesSync(): boolean;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @return original return type: 'java.lang.String'
     */
    asText(var0: org_dcm4che3_data_Attributes | null): Promise<string | null>;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @return original return type: 'java.lang.String'
     */
    asTextSync(var0: org_dcm4che3_data_Attributes | null): string | null;
    /**
     * @param var0 original type: 'org.dcm4che3.data.IOD$DataElement'
     * @param var1 original type: 'org.dcm4che3.data.ValidationResult$Invalid'
     * @param var2 original type: 'org.dcm4che3.data.ValidationResult[]'
     * @param var3 original type: 'org.dcm4che3.data.IOD[]'
     * @return original return type: 'void'
     */
    addInvalidAttributeValue(var0: org_dcm4che3_data_IOD$DataElement | null, var1: org_dcm4che3_data_ValidationResult$Invalid | null, var2: (ValidationResultClass | null)[] | null, var3: (org_dcm4che3_data_IOD | null)[] | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.data.IOD$DataElement'
     * @param var1 original type: 'org.dcm4che3.data.ValidationResult$Invalid'
     * @param var2 original type: 'org.dcm4che3.data.ValidationResult[]'
     * @param var3 original type: 'org.dcm4che3.data.IOD[]'
     * @return original return type: 'void'
     */
    addInvalidAttributeValueSync(var0: org_dcm4che3_data_IOD$DataElement | null, var1: org_dcm4che3_data_ValidationResult$Invalid | null, var2: (ValidationResultClass | null)[] | null, var3: (org_dcm4che3_data_IOD | null)[] | null): void;
    /**
     * @param var0 original type: 'org.dcm4che3.data.IOD$DataElement'
     * @param var1 original type: 'org.dcm4che3.data.ValidationResult$Invalid'
     * @return original return type: 'void'
     */
    addInvalidAttributeValue(var0: org_dcm4che3_data_IOD$DataElement | null, var1: org_dcm4che3_data_ValidationResult$Invalid | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.data.IOD$DataElement'
     * @param var1 original type: 'org.dcm4che3.data.ValidationResult$Invalid'
     * @return original return type: 'void'
     */
    addInvalidAttributeValueSync(var0: org_dcm4che3_data_IOD$DataElement | null, var1: org_dcm4che3_data_ValidationResult$Invalid | null): void;
    /**
     * @param var0 original type: 'org.dcm4che3.data.IOD$DataElement'
     * @return original return type: 'void'
     */
    addMissingAttribute(var0: org_dcm4che3_data_IOD$DataElement | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.data.IOD$DataElement'
     * @return original return type: 'void'
     */
    addMissingAttributeSync(var0: org_dcm4che3_data_IOD$DataElement | null): void;
    constructor();
    /**
     * @return original return type: 'org.dcm4che3.data.ValidationResult'
     */
    static newInstanceAsync(): Promise<ValidationResult>;
}
declare const ValidationResult_base: typeof ValidationResultClass;
/**
 * Class org.dcm4che3.data.ValidationResult.
 *
 * This actually imports the java class for further use.
 * The class {@link ValidationResultClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ValidationResult extends ValidationResult_base {
}
export default ValidationResult;
//# sourceMappingURL=ValidationResult.d.ts.map