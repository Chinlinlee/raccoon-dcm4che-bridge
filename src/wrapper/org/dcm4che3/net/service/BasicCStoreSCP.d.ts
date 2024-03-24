import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Association as org_dcm4che3_net_Association } from "./../Association";
import { PresentationContext as org_dcm4che3_net_pdu_PresentationContext } from "./../pdu/PresentationContext";
import { Dimse as org_dcm4che3_net_Dimse } from "./../Dimse";
import { Attributes as org_dcm4che3_data_Attributes } from "./../../data/Attributes";
import { PDVInputStream as org_dcm4che3_net_PDVInputStream } from "./../PDVInputStream";
import { Long as java_lang_Long } from "./../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../java/lang/Integer";
import { Class as java_lang_Class } from "./../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link BasicCStoreSCP} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class BasicCStoreSCPClass extends JavaClass {
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
     * @return original return type: 'java.lang.String[]'
     */
    getSOPClasses(): Promise<(string | null)[] | null>;
    /**
     * @return original return type: 'java.lang.String[]'
     */
    getSOPClassesSync(): (string | null)[] | null;
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
    toString(): Promise<string>;
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
     * @return original return type: 'org.dcm4che3.net.service.BasicCStoreSCP'
     */
    static newInstanceAsync(): Promise<BasicCStoreSCP>;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'org.dcm4che3.net.service.BasicCStoreSCP'
     */
    static newInstanceAsync(var0: (string | null)[] | null): Promise<BasicCStoreSCP>;
    constructor();
    /**
     * @param var0 original type: 'java.lang.String[]'
     */
    constructor(var0: (string | null)[] | null);
}
declare const BasicCStoreSCP_base: typeof BasicCStoreSCPClass;
/**
 * Class org.dcm4che3.net.service.BasicCStoreSCP.
 *
 * This actually imports the java class for further use.
 * The class {@link BasicCStoreSCPClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class BasicCStoreSCP extends BasicCStoreSCP_base {
}
export default BasicCStoreSCP;
//# sourceMappingURL=BasicCStoreSCP.d.ts.map