import { JavaClass, BasicOrJavaType } from "java-bridge";
import { List as java_util_List } from "./../../../java/util/List";
import { Boolean as java_lang_Boolean } from "./../../../java/lang/Boolean";
import { ParticipantObjectContainsStudy as org_dcm4che3_audit_ParticipantObjectContainsStudy } from "./ParticipantObjectContainsStudy";
import { Long as java_lang_Long } from "./../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
import { Class as java_lang_Class } from "./../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link ParticipantObjectDescription} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ParticipantObjectDescriptionClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.Boolean'
     */
    isAnonymized(): Promise<boolean | null>;
    /**
     * @return original return type: 'java.lang.Boolean'
     */
    isAnonymizedSync(): boolean | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getMPPS(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getMPPSSync(): java_util_List | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getAccession(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getAccessionSync(): java_util_List | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getSOPClass(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getSOPClassSync(): java_util_List | null;
    /**
     * @param var0 original type: 'java.lang.Boolean'
     * @return original return type: 'void'
     */
    setAnonymized(var0: java_lang_Boolean | boolean | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Boolean'
     * @return original return type: 'void'
     */
    setAnonymizedSync(var0: java_lang_Boolean | boolean | null): void;
    /**
     * @return original return type: 'java.lang.Boolean'
     */
    isEncrypted(): Promise<boolean | null>;
    /**
     * @return original return type: 'java.lang.Boolean'
     */
    isEncryptedSync(): boolean | null;
    /**
     * @param var0 original type: 'java.lang.Boolean'
     * @return original return type: 'void'
     */
    setEncrypted(var0: java_lang_Boolean | boolean | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Boolean'
     * @return original return type: 'void'
     */
    setEncryptedSync(var0: java_lang_Boolean | boolean | null): void;
    /**
     * @return original return type: 'org.dcm4che3.audit.ParticipantObjectContainsStudy'
     */
    getParticipantObjectContainsStudy(): Promise<org_dcm4che3_audit_ParticipantObjectContainsStudy | null>;
    /**
     * @return original return type: 'org.dcm4che3.audit.ParticipantObjectContainsStudy'
     */
    getParticipantObjectContainsStudySync(): org_dcm4che3_audit_ParticipantObjectContainsStudy | null;
    /**
     * @param var0 original type: 'org.dcm4che3.audit.ParticipantObjectContainsStudy'
     * @return original return type: 'void'
     */
    setParticipantObjectContainsStudy(var0: org_dcm4che3_audit_ParticipantObjectContainsStudy | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.audit.ParticipantObjectContainsStudy'
     * @return original return type: 'void'
     */
    setParticipantObjectContainsStudySync(var0: org_dcm4che3_audit_ParticipantObjectContainsStudy | null): void;
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
     * @return original return type: 'org.dcm4che3.audit.ParticipantObjectDescription'
     */
    static newInstanceAsync(): Promise<ParticipantObjectDescription>;
    constructor();
}
declare const ParticipantObjectDescription_base: typeof ParticipantObjectDescriptionClass;
/**
 * Class org.dcm4che3.audit.ParticipantObjectDescription.
 *
 * This actually imports the java class for further use.
 * The class {@link ParticipantObjectDescriptionClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ParticipantObjectDescription extends ParticipantObjectDescription_base {
}
export default ParticipantObjectDescription;
//# sourceMappingURL=ParticipantObjectDescription.d.ts.map