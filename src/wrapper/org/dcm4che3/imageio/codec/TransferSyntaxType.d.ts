import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Enum as java_lang_Enum } from "./../../../../java/lang/Enum";
import { Class as java_lang_Class } from "./../../../../java/lang/Class";
import { Attributes as org_dcm4che3_data_Attributes } from "./../../data/Attributes";
import { Optional as java_util_Optional } from "./../../../../java/util/Optional";
import { Long as java_lang_Long } from "./../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../java/lang/Integer";
/**
 * This class just defines types, you should import {@link TransferSyntaxType} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class TransferSyntaxTypeClass extends JavaClass {
    /**
     * Original type: 'org.dcm4che3.imageio.codec.TransferSyntaxType'
     */
    static readonly NATIVE: TransferSyntaxTypeClass | null;
    /**
     * Original type: 'org.dcm4che3.imageio.codec.TransferSyntaxType'
     */
    static readonly JPEG_BASELINE: TransferSyntaxTypeClass | null;
    /**
     * Original type: 'org.dcm4che3.imageio.codec.TransferSyntaxType'
     */
    static readonly JPEG_EXTENDED: TransferSyntaxTypeClass | null;
    /**
     * Original type: 'org.dcm4che3.imageio.codec.TransferSyntaxType'
     */
    static readonly JPEG_SPECTRAL: TransferSyntaxTypeClass | null;
    /**
     * Original type: 'org.dcm4che3.imageio.codec.TransferSyntaxType'
     */
    static readonly JPEG_PROGRESSIVE: TransferSyntaxTypeClass | null;
    /**
     * Original type: 'org.dcm4che3.imageio.codec.TransferSyntaxType'
     */
    static readonly JPEG_LOSSLESS: TransferSyntaxTypeClass | null;
    /**
     * Original type: 'org.dcm4che3.imageio.codec.TransferSyntaxType'
     */
    static readonly JPEG_LS: TransferSyntaxTypeClass | null;
    /**
     * Original type: 'org.dcm4che3.imageio.codec.TransferSyntaxType'
     */
    static readonly JPEG_2000: TransferSyntaxTypeClass | null;
    /**
     * Original type: 'org.dcm4che3.imageio.codec.TransferSyntaxType'
     */
    static readonly RLE: TransferSyntaxTypeClass | null;
    /**
     * Original type: 'org.dcm4che3.imageio.codec.TransferSyntaxType'
     */
    static readonly JPIP: TransferSyntaxTypeClass | null;
    /**
     * Original type: 'org.dcm4che3.imageio.codec.TransferSyntaxType'
     */
    static readonly MPEG: TransferSyntaxTypeClass | null;
    /**
     * Original type: 'org.dcm4che3.imageio.codec.TransferSyntaxType'
     */
    static readonly DEFLATED: TransferSyntaxTypeClass | null;
    /**
     * Original type: 'org.dcm4che3.imageio.codec.TransferSyntaxType'
     */
    static readonly UNKNOWN: TransferSyntaxTypeClass | null;
    /**
     * @return original return type: 'org.dcm4che3.imageio.codec.TransferSyntaxType[]'
     */
    static values(): Promise<(TransferSyntaxType | null)[] | null>;
    /**
     * @return original return type: 'org.dcm4che3.imageio.codec.TransferSyntaxType[]'
     */
    static valuesSync(): (TransferSyntaxType | null)[] | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.imageio.codec.TransferSyntaxType'
     */
    static valueOf(var0: string | null): Promise<TransferSyntaxType | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.imageio.codec.TransferSyntaxType'
     */
    static valueOfSync(var0: string | null): TransferSyntaxType | null;
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
     * @return original return type: 'org.dcm4che3.imageio.codec.TransferSyntaxType'
     */
    static forUID(var0: string | null): Promise<TransferSyntaxType | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.imageio.codec.TransferSyntaxType'
     */
    static forUIDSync(var0: string | null): TransferSyntaxType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static isLossyCompression(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static isLossyCompressionSync(var0: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static isYBRCompression(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static isYBRCompressionSync(var0: string | null): boolean;
    /**
     * @return original return type: 'int'
     */
    getMaxBitsStored(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getMaxBitsStoredSync(): number;
    /**
     * @return original return type: 'boolean'
     */
    canEncodeSigned(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    canEncodeSignedSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isPixeldataEncapsulated(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isPixeldataEncapsulatedSync(): boolean;
    /**
     * @return original return type: 'int'
     */
    getPlanarConfiguration(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getPlanarConfigurationSync(): number;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @return original return type: 'boolean'
     */
    adjustBitsStoredTo12(var0: org_dcm4che3_data_Attributes | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @return original return type: 'boolean'
     */
    adjustBitsStoredTo12Sync(var0: org_dcm4che3_data_Attributes | null): boolean;
    /**
     * @return original return type: 'boolean'
     */
    mayFrameSpanMultipleFragments(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    mayFrameSpanMultipleFragmentsSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    name(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    nameSync(): string | null;
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
    ordinal(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    ordinalSync(): number;
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
declare const TransferSyntaxType_base: typeof TransferSyntaxTypeClass;
/**
 * Class org.dcm4che3.imageio.codec.TransferSyntaxType.
 *
 * This actually imports the java class for further use.
 * The class {@link TransferSyntaxTypeClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class TransferSyntaxType extends TransferSyntaxType_base {
}
export default TransferSyntaxType;
//# sourceMappingURL=TransferSyntaxType.d.ts.map