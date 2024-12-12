import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../../../java/lang/Class";
import { Long as java_lang_Long } from "./../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../java/lang/Integer";
import { Enum as java_lang_Enum } from "./../../../../java/lang/Enum";
import { Optional as java_util_Optional } from "./../../../../java/util/Optional";
/**
 * This class just defines types, you should import {@link CodingScheme} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class CodingSchemeClass extends JavaClass {
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
     * @return original return type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static valueOf(var0: string | null): Promise<CodingScheme | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static valueOfSync(var0: string | null): CodingScheme | null;
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
     * @return original return type: 'org.weasis.dicom.ref.CodingScheme[]'
     */
    static values(): Promise<(CodingScheme | null)[] | null>;
    /**
     * @return original return type: 'org.weasis.dicom.ref.CodingScheme[]'
     */
    static valuesSync(): (CodingScheme | null)[] | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static getSchemeFromDesignator(var0: string | null): Promise<CodingScheme | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static getSchemeFromDesignatorSync(var0: string | null): CodingScheme | null;
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
    getDesignator(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getDesignatorSync(): string | null;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getDeclaringClass(): Promise<java_lang_Class | null>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getDeclaringClassSync(): java_lang_Class | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getUid(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getUidSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCodeName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCodeNameSync(): string | null;
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
     * @return original return type: 'java.lang.String'
     */
    name(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    nameSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static getSchemeFromUid(var0: string | null): Promise<CodingScheme | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static getSchemeFromUidSync(var0: string | null): CodingScheme | null;
    /**
     * @return original return type: 'int'
     */
    ordinal(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    ordinalSync(): number;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly UCUM: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly LN: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly NCIT: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly SCT: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly SNM3: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly I10P: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly RFC5646: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly UPC: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly ICDO3: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly IBSI: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly I9: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly ISO3166_1: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly ITIS_TSN: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly MA: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly ASTM_SIGPURPOSE: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly RFC3066: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly MAYOASRG: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly UBERON: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly SDM: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly DCMUID: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly RADELEMENT: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly PATHLEX: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly I11: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly I10: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly DCM: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly ISO639_2: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly I9C: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly ISO639_1: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly NYUMCCG: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly POS: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly UMLS: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly HPC: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly I10C: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly RO: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly CADSR: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly RADLEX: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly NDC: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly C4: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly CTV3: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly C5: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly SRT: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly FMA: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly UNS: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly PUBCHEM_CID: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly NICIP: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly MSH: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly RXNORM: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly MGI: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly ACR: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly CD2: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly RRID: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly DC: CodingSchemeClass | null;
    /**
     * Original type: 'org.weasis.dicom.ref.CodingScheme'
     */
    static readonly NEU: CodingSchemeClass | null;
}
declare const CodingScheme_base: typeof CodingSchemeClass;
/**
 * Class org.weasis.dicom.ref.CodingScheme.
 *
 * This actually imports the java class for further use.
 * The class {@link CodingSchemeClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class CodingScheme extends CodingScheme_base {
}
export default CodingScheme;
//# sourceMappingURL=CodingScheme.d.ts.map