import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Association as org_dcm4che3_net_Association } from "./../../../../dcm4che3/net/Association";
import { Attributes as org_dcm4che3_data_Attributes } from "./../../../../dcm4che3/data/Attributes";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { Connection as org_dcm4che3_net_Connection } from "./../../../../dcm4che3/net/Connection";
/**
 * This class just defines types, you should import {@link SendStgCmtResult} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class SendStgCmtResultClass extends JavaClass {
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
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'void'
     */
    run(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    runSync(): void;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @param var0 original type: 'org.dcm4che3.net.Association'
     * @param var1 original type: 'org.dcm4che3.data.Attributes'
     * @param var2 original type: 'boolean'
     * @param var3 original type: 'org.dcm4che3.net.Connection'
     */
    constructor(var0: org_dcm4che3_net_Association | null, var1: org_dcm4che3_data_Attributes | null, var2: java_lang_Boolean | boolean, var3: org_dcm4che3_net_Connection | null);
    /**
     * @param var0 original type: 'org.dcm4che3.net.Association'
     * @param var1 original type: 'org.dcm4che3.data.Attributes'
     * @param var2 original type: 'boolean'
     * @param var3 original type: 'org.dcm4che3.net.Connection'
     * @return original return type: 'org.github.chinlinlee.dcm777.dcmqrscp.SendStgCmtResult'
     */
    static newInstanceAsync(var0: org_dcm4che3_net_Association | null, var1: org_dcm4che3_data_Attributes | null, var2: java_lang_Boolean | boolean, var3: org_dcm4che3_net_Connection | null): Promise<SendStgCmtResult>;
}
declare const SendStgCmtResult_base: typeof SendStgCmtResultClass;
/**
 * Class org.github.chinlinlee.dcm777.dcmqrscp.SendStgCmtResult.
 *
 * This actually imports the java class for further use.
 * The class {@link SendStgCmtResultClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class SendStgCmtResult extends SendStgCmtResult_base {
}
export default SendStgCmtResult;
