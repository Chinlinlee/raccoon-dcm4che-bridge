import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../../../java/lang/Class";
import { Long as java_lang_Long } from "./../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../java/lang/Integer";
import { Enum as java_lang_Enum } from "./../../../../java/lang/Enum";
import { VR as org_dcm4che3_data_VR } from "./../../data/VR";
import { Optional as java_util_Optional } from "./../../../../java/util/Optional";
import { Attributes as org_dcm4che3_data_Attributes } from "./../../data/Attributes";
import { EnumSet as java_util_EnumSet } from "./../../../../java/util/EnumSet";
import { Boolean as java_lang_Boolean } from "./../../../../java/lang/Boolean";
/**
 * This class just defines types, you should import {@link QueryRetrieveLevel2} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class QueryRetrieveLevel2Class extends JavaClass {
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
     * @return original return type: 'org.dcm4che3.net.service.QueryRetrieveLevel2'
     */
    static valueOf(var0: string | null): Promise<QueryRetrieveLevel2 | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.net.service.QueryRetrieveLevel2'
     */
    static valueOfSync(var0: string | null): QueryRetrieveLevel2 | null;
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
     * @return original return type: 'org.dcm4che3.net.service.QueryRetrieveLevel2[]'
     */
    static values(): Promise<(QueryRetrieveLevel2 | null)[] | null>;
    /**
     * @return original return type: 'org.dcm4che3.net.service.QueryRetrieveLevel2[]'
     */
    static valuesSync(): (QueryRetrieveLevel2 | null)[] | null;
    /**
     * @return original return type: 'int'
     */
    uniqueKey(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    uniqueKeySync(): number;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'org.dcm4che3.data.VR'
     */
    vrOfUniqueKey(): Promise<org_dcm4che3_data_VR | null>;
    /**
     * @return original return type: 'org.dcm4che3.data.VR'
     */
    vrOfUniqueKeySync(): org_dcm4che3_data_VR | null;
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
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @param var1 original type: 'java.util.EnumSet'
     * @param var2 original type: 'boolean'
     * @param var3 original type: 'boolean'
     * @return original return type: 'org.dcm4che3.net.service.QueryRetrieveLevel2'
     */
    static validateQueryIdentifier(var0: org_dcm4che3_data_Attributes | null, var1: java_util_EnumSet | null, var2: java_lang_Boolean | boolean, var3: java_lang_Boolean | boolean): Promise<QueryRetrieveLevel2 | null>;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @param var1 original type: 'java.util.EnumSet'
     * @param var2 original type: 'boolean'
     * @param var3 original type: 'boolean'
     * @return original return type: 'org.dcm4che3.net.service.QueryRetrieveLevel2'
     */
    static validateQueryIdentifierSync(var0: org_dcm4che3_data_Attributes | null, var1: java_util_EnumSet | null, var2: java_lang_Boolean | boolean, var3: java_lang_Boolean | boolean): QueryRetrieveLevel2 | null;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @param var1 original type: 'java.util.EnumSet'
     * @param var2 original type: 'boolean'
     * @return original return type: 'org.dcm4che3.net.service.QueryRetrieveLevel2'
     */
    static validateQueryIdentifier(var0: org_dcm4che3_data_Attributes | null, var1: java_util_EnumSet | null, var2: java_lang_Boolean | boolean): Promise<QueryRetrieveLevel2 | null>;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @param var1 original type: 'java.util.EnumSet'
     * @param var2 original type: 'boolean'
     * @return original return type: 'org.dcm4che3.net.service.QueryRetrieveLevel2'
     */
    static validateQueryIdentifierSync(var0: org_dcm4che3_data_Attributes | null, var1: java_util_EnumSet | null, var2: java_lang_Boolean | boolean): QueryRetrieveLevel2 | null;
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
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @param var1 original type: 'java.util.EnumSet'
     * @param var2 original type: 'boolean'
     * @return original return type: 'org.dcm4che3.net.service.QueryRetrieveLevel2'
     */
    static validateRetrieveIdentifier(var0: org_dcm4che3_data_Attributes | null, var1: java_util_EnumSet | null, var2: java_lang_Boolean | boolean): Promise<QueryRetrieveLevel2 | null>;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @param var1 original type: 'java.util.EnumSet'
     * @param var2 original type: 'boolean'
     * @return original return type: 'org.dcm4che3.net.service.QueryRetrieveLevel2'
     */
    static validateRetrieveIdentifierSync(var0: org_dcm4che3_data_Attributes | null, var1: java_util_EnumSet | null, var2: java_lang_Boolean | boolean): QueryRetrieveLevel2 | null;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @param var1 original type: 'java.util.EnumSet'
     * @param var2 original type: 'boolean'
     * @param var3 original type: 'boolean'
     * @return original return type: 'org.dcm4che3.net.service.QueryRetrieveLevel2'
     */
    static validateRetrieveIdentifier(var0: org_dcm4che3_data_Attributes | null, var1: java_util_EnumSet | null, var2: java_lang_Boolean | boolean, var3: java_lang_Boolean | boolean): Promise<QueryRetrieveLevel2 | null>;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @param var1 original type: 'java.util.EnumSet'
     * @param var2 original type: 'boolean'
     * @param var3 original type: 'boolean'
     * @return original return type: 'org.dcm4che3.net.service.QueryRetrieveLevel2'
     */
    static validateRetrieveIdentifierSync(var0: org_dcm4che3_data_Attributes | null, var1: java_util_EnumSet | null, var2: java_lang_Boolean | boolean, var3: java_lang_Boolean | boolean): QueryRetrieveLevel2 | null;
    /**
     * @return original return type: 'int'
     */
    ordinal(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    ordinalSync(): number;
    /**
     * Original type: 'org.dcm4che3.net.service.QueryRetrieveLevel2'
     */
    static readonly STUDY: QueryRetrieveLevel2Class | null;
    /**
     * Original type: 'org.dcm4che3.net.service.QueryRetrieveLevel2'
     */
    static readonly SERIES: QueryRetrieveLevel2Class | null;
    /**
     * Original type: 'org.dcm4che3.net.service.QueryRetrieveLevel2'
     */
    static readonly IMAGE: QueryRetrieveLevel2Class | null;
    /**
     * Original type: 'org.dcm4che3.net.service.QueryRetrieveLevel2'
     */
    static readonly PATIENT: QueryRetrieveLevel2Class | null;
}
declare const QueryRetrieveLevel2_base: typeof QueryRetrieveLevel2Class;
/**
 * Class org.dcm4che3.net.service.QueryRetrieveLevel2.
 *
 * This actually imports the java class for further use.
 * The class {@link QueryRetrieveLevel2Class} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class QueryRetrieveLevel2 extends QueryRetrieveLevel2_base {
}
export default QueryRetrieveLevel2;
