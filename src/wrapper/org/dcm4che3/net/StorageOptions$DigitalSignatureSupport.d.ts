import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
import { Enum as java_lang_Enum } from "./../../../java/lang/Enum";
import { Class as java_lang_Class } from "./../../../java/lang/Class";
import { Optional as java_util_Optional } from "./../../../java/util/Optional";
import { Long as java_lang_Long } from "./../../../java/lang/Long";
/**
 * This class just defines types, you should import {@link StorageOptions$DigitalSignatureSupport} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class StorageOptions$DigitalSignatureSupportClass extends JavaClass {
    /**
     * Original type: 'org.dcm4che3.net.StorageOptions$DigitalSignatureSupport'
     */
    static readonly UNSPECIFIED: StorageOptions$DigitalSignatureSupportClass | null;
    /**
     * Original type: 'org.dcm4che3.net.StorageOptions$DigitalSignatureSupport'
     */
    static readonly LEVEL_1: StorageOptions$DigitalSignatureSupportClass | null;
    /**
     * Original type: 'org.dcm4che3.net.StorageOptions$DigitalSignatureSupport'
     */
    static readonly LEVEL_2: StorageOptions$DigitalSignatureSupportClass | null;
    /**
     * Original type: 'org.dcm4che3.net.StorageOptions$DigitalSignatureSupport'
     */
    static readonly LEVEL_3: StorageOptions$DigitalSignatureSupportClass | null;
    /**
     * @return original return type: 'org.dcm4che3.net.StorageOptions$DigitalSignatureSupport[]'
     */
    static values(): Promise<(StorageOptions$DigitalSignatureSupport | null)[] | null>;
    /**
     * @return original return type: 'org.dcm4che3.net.StorageOptions$DigitalSignatureSupport[]'
     */
    static valuesSync(): (StorageOptions$DigitalSignatureSupport | null)[] | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.net.StorageOptions$DigitalSignatureSupport'
     */
    static valueOf(var0: string | null): Promise<StorageOptions$DigitalSignatureSupport | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.net.StorageOptions$DigitalSignatureSupport'
     */
    static valueOfSync(var0: string | null): StorageOptions$DigitalSignatureSupport | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.dcm4che3.net.StorageOptions$DigitalSignatureSupport'
     */
    static valueOf(var0: java_lang_Integer | number): Promise<StorageOptions$DigitalSignatureSupport | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.dcm4che3.net.StorageOptions$DigitalSignatureSupport'
     */
    static valueOfSync(var0: java_lang_Integer | number): StorageOptions$DigitalSignatureSupport | null;
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
declare const StorageOptions$DigitalSignatureSupport_base: typeof StorageOptions$DigitalSignatureSupportClass;
/**
 * Class org.dcm4che3.net.StorageOptions$DigitalSignatureSupport.
 *
 * This actually imports the java class for further use.
 * The class {@link StorageOptions$DigitalSignatureSupportClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class StorageOptions$DigitalSignatureSupport extends StorageOptions$DigitalSignatureSupport_base {
}
export default StorageOptions$DigitalSignatureSupport;
//# sourceMappingURL=StorageOptions$DigitalSignatureSupport.d.ts.map