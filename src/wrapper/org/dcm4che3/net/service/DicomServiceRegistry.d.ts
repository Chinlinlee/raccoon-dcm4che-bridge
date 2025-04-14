import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./../../../../java/lang/Class";
import { Long as java_lang_Long } from "./../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../java/lang/Integer";
import { Association as org_dcm4che3_net_Association } from "./../Association";
import { PresentationContext as org_dcm4che3_net_pdu_PresentationContext } from "./../pdu/PresentationContext";
import { Dimse as org_dcm4che3_net_Dimse } from "./../Dimse";
import { Attributes as org_dcm4che3_data_Attributes } from "./../../data/Attributes";
import { PDVInputStream as org_dcm4che3_net_PDVInputStream } from "./../PDVInputStream";
import { DimseRQHandler as org_dcm4che3_net_DimseRQHandler, DimseRQHandlerInterface as org_dcm4che3_net_DimseRQHandlerInterface } from "./../DimseRQHandler";
import { DicomService as org_dcm4che3_net_service_DicomService, DicomServiceInterface as org_dcm4che3_net_service_DicomServiceInterface } from "./DicomService";
/**
 * This class just defines types, you should import {@link DicomServiceRegistry} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DicomServiceRegistryClass extends JavaClass {
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
     * @param var0 original type: 'org.dcm4che3.net.Association'
     * @param var1 original type: 'org.dcm4che3.net.pdu.PresentationContext'
     * @param var2 original type: 'org.dcm4che3.net.Dimse'
     * @param var3 original type: 'org.dcm4che3.data.Attributes'
     * @param var4 original type: 'org.dcm4che3.net.PDVInputStream'
     * @return original return type: 'void'
     */
    onDimseRQ(var0: org_dcm4che3_net_Association | null, var1: org_dcm4che3_net_pdu_PresentationContext | null, var2: org_dcm4che3_net_Dimse | null, var3: org_dcm4che3_data_Attributes | null, var4: org_dcm4che3_net_PDVInputStream | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.net.Association'
     * @param var1 original type: 'org.dcm4che3.net.pdu.PresentationContext'
     * @param var2 original type: 'org.dcm4che3.net.Dimse'
     * @param var3 original type: 'org.dcm4che3.data.Attributes'
     * @param var4 original type: 'org.dcm4che3.net.PDVInputStream'
     * @return original return type: 'void'
     */
    onDimseRQSync(var0: org_dcm4che3_net_Association | null, var1: org_dcm4che3_net_pdu_PresentationContext | null, var2: org_dcm4che3_net_Dimse | null, var3: org_dcm4che3_data_Attributes | null, var4: org_dcm4che3_net_PDVInputStream | null): void;
    /**
     * @param var0 original type: 'org.dcm4che3.net.DimseRQHandler'
     * @param var1 original type: 'java.lang.String[]'
     * @return original return type: 'void'
     */
    addDimseRQHandler(var0: org_dcm4che3_net_DimseRQHandler | JavaInterfaceProxy<org_dcm4che3_net_DimseRQHandlerInterface> | null, var1: (string | null)[] | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.net.DimseRQHandler'
     * @param var1 original type: 'java.lang.String[]'
     * @return original return type: 'void'
     */
    addDimseRQHandlerSync(var0: org_dcm4che3_net_DimseRQHandler | JavaInterfaceProxy<org_dcm4che3_net_DimseRQHandlerInterface> | null, var1: (string | null)[] | null): void;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @param var0 original type: 'org.dcm4che3.net.service.DicomService'
     * @return original return type: 'void'
     */
    removeDicomService(var0: org_dcm4che3_net_service_DicomService | JavaInterfaceProxy<org_dcm4che3_net_service_DicomServiceInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.net.service.DicomService'
     * @return original return type: 'void'
     */
    removeDicomServiceSync(var0: org_dcm4che3_net_service_DicomService | JavaInterfaceProxy<org_dcm4che3_net_service_DicomServiceInterface> | null): void;
    /**
     * @param var0 original type: 'org.dcm4che3.net.Association'
     * @return original return type: 'void'
     */
    onClose(var0: org_dcm4che3_net_Association | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.net.Association'
     * @return original return type: 'void'
     */
    onCloseSync(var0: org_dcm4che3_net_Association | null): void;
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
     * @param var0 original type: 'org.dcm4che3.net.service.DicomService'
     * @return original return type: 'void'
     */
    addDicomService(var0: org_dcm4che3_net_service_DicomService | JavaInterfaceProxy<org_dcm4che3_net_service_DicomServiceInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.net.service.DicomService'
     * @return original return type: 'void'
     */
    addDicomServiceSync(var0: org_dcm4che3_net_service_DicomService | JavaInterfaceProxy<org_dcm4che3_net_service_DicomServiceInterface> | null): void;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'void'
     */
    removeDimseRQHandler(var0: (string | null)[] | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'void'
     */
    removeDimseRQHandlerSync(var0: (string | null)[] | null): void;
    constructor();
    /**
     * @return original return type: 'org.dcm4che3.net.service.DicomServiceRegistry'
     */
    static newInstanceAsync(): Promise<DicomServiceRegistry>;
}
declare const DicomServiceRegistry_base: typeof DicomServiceRegistryClass;
/**
 * Class org.dcm4che3.net.service.DicomServiceRegistry.
 *
 * This actually imports the java class for further use.
 * The class {@link DicomServiceRegistryClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DicomServiceRegistry extends DicomServiceRegistry_base {
}
export default DicomServiceRegistry;
