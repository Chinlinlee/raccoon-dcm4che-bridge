import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Long as java_lang_Long } from "./../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
import { Class as java_lang_Class } from "./../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link AuditMessages$UserIDTypeCode} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AuditMessages$UserIDTypeCodeClass extends JavaClass {
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$UserIDTypeCode'
     */
    static readonly StationAETitle: AuditMessages$UserIDTypeCodeClass | null;
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$UserIDTypeCode'
     */
    static readonly NodeID: AuditMessages$UserIDTypeCodeClass | null;
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$UserIDTypeCode'
     */
    static readonly LocalUserID: AuditMessages$UserIDTypeCodeClass | null;
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$UserIDTypeCode'
     */
    static readonly LocalGroupID: AuditMessages$UserIDTypeCodeClass | null;
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$UserIDTypeCode'
     */
    static readonly ApplicationFacility: AuditMessages$UserIDTypeCodeClass | null;
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$UserIDTypeCode'
     */
    static readonly DeviceName: AuditMessages$UserIDTypeCodeClass | null;
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$UserIDTypeCode'
     */
    static readonly URI: AuditMessages$UserIDTypeCodeClass | null;
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$UserIDTypeCode'
     */
    static readonly PersonID: AuditMessages$UserIDTypeCodeClass | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setCodeSystem(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setCodeSystemSync(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setCsdCode(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setCsdCodeSync(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setCodeSystemName(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setCodeSystemNameSync(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setDisplayName(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setDisplayNameSync(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setOriginalText(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setOriginalTextSync(var0: string | null): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCodeSystemName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCodeSystemNameSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCodeSystem(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCodeSystemSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getOriginalText(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getOriginalTextSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCsdCode(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCsdCodeSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getDisplayName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getDisplayNameSync(): string | null;
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
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.audit.AuditMessages$UserIDTypeCode'
     */
    static newInstanceAsync(var0: string | null): Promise<AuditMessages$UserIDTypeCode>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.audit.AuditMessages$UserIDTypeCode'
     */
    static newInstanceAsync(var0: string | null, var1: string | null, var2: string | null): Promise<AuditMessages$UserIDTypeCode>;
    /**
     * @param var0 original type: 'java.lang.String'
     */
    constructor(var0: string | null);
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     */
    constructor(var0: string | null, var1: string | null, var2: string | null);
}
declare const AuditMessages$UserIDTypeCode_base: typeof AuditMessages$UserIDTypeCodeClass;
/**
 * Class org.dcm4che3.audit.AuditMessages$UserIDTypeCode.
 *
 * This actually imports the java class for further use.
 * The class {@link AuditMessages$UserIDTypeCodeClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AuditMessages$UserIDTypeCode extends AuditMessages$UserIDTypeCode_base {
}
export default AuditMessages$UserIDTypeCode;
//# sourceMappingURL=AuditMessages$UserIDTypeCode.d.ts.map