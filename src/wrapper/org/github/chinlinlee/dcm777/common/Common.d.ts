import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Attributes as org_dcm4che3_data_Attributes } from "./../../../../dcm4che3/data/Attributes";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { AuditMessage as org_dcm4che3_audit_AuditMessage } from "./../../../../dcm4che3/audit/AuditMessage";
import { Map as java_util_Map } from "./../../../../../java/util/Map";
import { DicomServiceException as org_dcm4che3_net_service_DicomServiceException } from "./../../../../dcm4che3/net/service/DicomServiceException";
/**
 * This class just defines types, you should import {@link Common} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class CommonClass extends JavaClass {
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
     * @return original return type: 'org.dcm4che3.data.Attributes'
     */
    static getAttributesFromJsonString(var0: string | null): Promise<org_dcm4che3_data_Attributes | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.data.Attributes'
     */
    static getAttributesFromJsonStringSync(var0: string | null): org_dcm4che3_data_Attributes | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    static throwDicomServiceException(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    static throwDicomServiceExceptionSync(var0: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    static throwDicomServiceException(var0: java_lang_Integer | number, var1: string | null): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    static throwDicomServiceExceptionSync(var0: java_lang_Integer | number, var1: string | null): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'boolean'
     * @return original return type: 'void'
     */
    static throwDicomServiceException(var0: java_lang_Integer | number, var1: string | null, var2: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'boolean'
     * @return original return type: 'void'
     */
    static throwDicomServiceExceptionSync(var0: java_lang_Integer | number, var1: string | null, var2: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @param var0 original type: 'org.dcm4che3.audit.AuditMessage'
     * @return original return type: 'java.lang.String'
     */
    static convertAuditMessageToJsonString(var0: org_dcm4che3_audit_AuditMessage | null): Promise<string | null>;
    /**
     * @param var0 original type: 'org.dcm4che3.audit.AuditMessage'
     * @return original return type: 'java.lang.String'
     */
    static convertAuditMessageToJsonStringSync(var0: org_dcm4che3_audit_AuditMessage | null): string | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'java.util.Map'
     */
    static jsonGeneratorFactoryConfig(var0: java_lang_Boolean | boolean): Promise<java_util_Map | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'java.util.Map'
     */
    static jsonGeneratorFactoryConfigSync(var0: java_lang_Boolean | boolean): java_util_Map | null;
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
     * @param var0 original type: 'org.dcm4che3.net.service.DicomServiceException'
     * @return original return type: 'void'
     */
    static throwDicomServiceExceptionInstance(var0: org_dcm4che3_net_service_DicomServiceException | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.net.service.DicomServiceException'
     * @return original return type: 'void'
     */
    static throwDicomServiceExceptionInstanceSync(var0: org_dcm4che3_net_service_DicomServiceException | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    static LoadLogConfig(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    static LoadLogConfigSync(var0: string | null): void;
    constructor();
    /**
     * @return original return type: 'org.github.chinlinlee.dcm777.common.Common'
     */
    static newInstanceAsync(): Promise<Common>;
}
declare const Common_base: typeof CommonClass;
/**
 * Class org.github.chinlinlee.dcm777.common.Common.
 *
 * This actually imports the java class for further use.
 * The class {@link CommonClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Common extends Common_base {
}
export default Common;
