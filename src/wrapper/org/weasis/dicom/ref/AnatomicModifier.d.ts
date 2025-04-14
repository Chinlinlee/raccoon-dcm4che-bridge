import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../../../java/lang/Class";
import { Long as java_lang_Long } from "./../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../java/lang/Integer";
import { Enum as java_lang_Enum } from "./../../../../java/lang/Enum";
import { Optional as java_util_Optional } from "./../../../../java/util/Optional";
import { CodingScheme as org_weasis_dicom_ref_CodingScheme } from "./CodingScheme";
/**
 * This class just defines types, you should import {@link AnatomicModifier} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AnatomicModifierClass extends JavaClass {
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
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static valueOf(var0: string | null): Promise<AnatomicModifier | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static valueOfSync(var0: string | null): AnatomicModifier | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Enum'
     */
    static valueOf(var0: java_lang_Class | null, var1: string | null): Promise<java_lang_Enum | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Enum'
     */
    static valueOfSync(var0: java_lang_Class | null, var1: string | null): java_lang_Enum | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static getAnatomicModifierFromCode(var0: string | null): Promise<AnatomicModifier | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static getAnatomicModifierFromCodeSync(var0: string | null): AnatomicModifier | null;
    /**
     * @return original return type: 'org.weasis.dicom.ref.AnatomicModifier[]'
     */
    static values(): Promise<(AnatomicModifier | null)[] | null>;
    /**
     * @return original return type: 'org.weasis.dicom.ref.AnatomicModifier[]'
     */
    static valuesSync(): (AnatomicModifier | null)[] | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
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
     * @param var0 original type: 'java.lang.Enum'
     * @return original return type: 'int'
     */
    compareTo(var0: java_lang_Enum | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Enum'
     * @return original return type: 'int'
     */
    compareToSync(var0: java_lang_Enum | null): number;
    /**
     * @return original return type: 'java.util.Optional'
     */
    describeConstable(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    describeConstableSync(): java_util_Optional | null;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCodeMeaning(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCodeMeaningSync(): string | null;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getDeclaringClass(): Promise<java_lang_Class | null>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getDeclaringClassSync(): java_lang_Class | null;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCodeValue(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCodeValueSync(): string | null;
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
    name(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    nameSync(): string | null;
    /**
     * @return original return type: 'org.weasis.dicom.ref.CodingScheme'
     */
    getCodingScheme(): Promise<org_weasis_dicom_ref_CodingScheme | null>;
    /**
     * @return original return type: 'org.weasis.dicom.ref.CodingScheme'
     */
    getCodingSchemeSync(): org_weasis_dicom_ref_CodingScheme | null;
    /**
     * @return original return type: 'int'
     */
    ordinal(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    ordinalSync(): number;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly APICAL: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly HILAR: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly SUBCAPSULAR: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly CAUDAL: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly CORONAL: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly CAPSULAR: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly CEPHALIC: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly SAGITTAL: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly EFFERENT: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly LATERAL: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly EXTERNAL: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly VERTICAL: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly INTERNAL: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly SUPERIOR: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly TRANSVERSE: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly EXTRA_ARTICULAR: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly SURFACE: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly RIGHT: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly MEDIAL: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly INTERMEDIATE: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly MEDIAN: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly AFFERENT: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly PROXIMAL: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly SUPERFICIAL: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly EDGE: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly BASAL: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly LONGITUDINAL: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly AXIAL: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly PREAXIAL: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly LEFT: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly ANTERIOR: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly DISTAL: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly POSTAXIAL: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly GUTTER: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly CENTRAL: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly BILATERAL: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly POSTEROLATERAL: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly UNILATERAL: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly POSTERIOR: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly DEEP: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly ANTEROLATERAL: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly INTRA_ARTICULAR: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly PERIPHERAL: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly HORIZONTAL: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly MARGINAL: AnatomicModifierClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.AnatomicModifier'
     */
    static readonly INFERIOR: AnatomicModifierClass | null;
}
declare const AnatomicModifier_base: typeof AnatomicModifierClass;
/**
 * Class org.weasis.dicom.ref.AnatomicModifier.
 *
 * This actually imports the java class for further use.
 * The class {@link AnatomicModifierClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AnatomicModifier extends AnatomicModifier_base {
}
export default AnatomicModifier;
