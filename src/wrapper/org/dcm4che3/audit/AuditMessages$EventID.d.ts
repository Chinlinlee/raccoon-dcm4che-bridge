import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../../java/lang/Class";
import { Long as java_lang_Long } from "./../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
/**
 * This class just defines types, you should import {@link AuditMessages$EventID} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AuditMessages$EventIDClass extends JavaClass {
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
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
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
     * @return original return type: 'java.lang.String'
     */
    getCodeSystem(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCodeSystemSync(): string | null;
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
    getCodeSystemName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCodeSystemNameSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getDisplayName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getDisplayNameSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getOriginalText(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getOriginalTextSync(): string | null;
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
    setCodeSystem(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setCodeSystemSync(var0: string | null): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCsdCode(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCsdCodeSync(): string | null;
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$EventID'
     */
    static readonly BeginTransferringDICOMInstances: AuditMessages$EventIDClass | null;
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$EventID'
     */
    static readonly Import: AuditMessages$EventIDClass | null;
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$EventID'
     */
    static readonly PatientCareProtocol: AuditMessages$EventIDClass | null;
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$EventID'
     */
    static readonly AuditLogUsed: AuditMessages$EventIDClass | null;
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$EventID'
     */
    static readonly Query: AuditMessages$EventIDClass | null;
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$EventID'
     */
    static readonly PatientCareEpisode: AuditMessages$EventIDClass | null;
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$EventID'
     */
    static readonly DICOMInstancesTransferred: AuditMessages$EventIDClass | null;
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$EventID'
     */
    static readonly SecurityAlert: AuditMessages$EventIDClass | null;
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$EventID'
     */
    static readonly DICOMInstancesAccessed: AuditMessages$EventIDClass | null;
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$EventID'
     */
    static readonly ProcedureRecord: AuditMessages$EventIDClass | null;
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$EventID'
     */
    static readonly UserAuthentication: AuditMessages$EventIDClass | null;
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$EventID'
     */
    static readonly MedicationEvent: AuditMessages$EventIDClass | null;
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$EventID'
     */
    static readonly ApplicationActivity: AuditMessages$EventIDClass | null;
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$EventID'
     */
    static readonly OrderRecord: AuditMessages$EventIDClass | null;
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$EventID'
     */
    static readonly PatientCareResourceAssignment: AuditMessages$EventIDClass | null;
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$EventID'
     */
    static readonly NetworkEntry: AuditMessages$EventIDClass | null;
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$EventID'
     */
    static readonly HealthServicesProvisionEvent: AuditMessages$EventIDClass | null;
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$EventID'
     */
    static readonly PatientRecord: AuditMessages$EventIDClass | null;
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$EventID'
     */
    static readonly DICOMStudyDeleted: AuditMessages$EventIDClass | null;
    /**
     * Original type: 'org.dcm4che3.audit.AuditMessages$EventID'
     */
    static readonly Export: AuditMessages$EventIDClass | null;
}
declare const AuditMessages$EventID_base: typeof AuditMessages$EventIDClass;
/**
 * Class org.dcm4che3.audit.AuditMessages$EventID.
 *
 * This actually imports the java class for further use.
 * The class {@link AuditMessages$EventIDClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AuditMessages$EventID extends AuditMessages$EventID_base {
}
export default AuditMessages$EventID;
