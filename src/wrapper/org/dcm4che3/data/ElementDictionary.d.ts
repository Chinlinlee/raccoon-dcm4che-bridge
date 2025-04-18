import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../../java/lang/Class";
import { Long as java_lang_Long } from "./../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
import { VR as org_dcm4che3_data_VR } from "./VR";
/**
 * This class just defines types, you should import {@link ElementDictionary} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ElementDictionaryClass extends JavaClass {
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
     * @param var0 original type: 'int'
     * @return original return type: 'org.dcm4che3.data.VR'
     */
    vrOf(var0: java_lang_Integer | number): Promise<org_dcm4che3_data_VR | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.dcm4che3.data.VR'
     */
    vrOfSync(var0: java_lang_Integer | number): org_dcm4che3_data_VR | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.data.VR'
     */
    static vrOf(var0: java_lang_Integer | number, var1: string | null): Promise<org_dcm4che3_data_VR | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.data.VR'
     */
    static vrOfSync(var0: java_lang_Integer | number, var1: string | null): org_dcm4che3_data_VR | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    keywordOf(var0: java_lang_Integer | number): Promise<string | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    keywordOfSync(var0: java_lang_Integer | number): string | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static keywordOf(var0: java_lang_Integer | number, var1: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static keywordOfSync(var0: java_lang_Integer | number, var1: string | null): string | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPrivateCreator(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPrivateCreatorSync(): string | null;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'org.dcm4che3.data.ElementDictionary'
     */
    static getStandardElementDictionary(): Promise<ElementDictionary | null>;
    /**
     * @return original return type: 'org.dcm4che3.data.ElementDictionary'
     */
    static getStandardElementDictionarySync(): ElementDictionary | null;
    /**
     * @return original return type: 'void'
     */
    static reload(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    static reloadSync(): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    daTagOf(var0: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    daTagOfSync(var0: java_lang_Integer | number): number;
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
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    tmTagOf(var0: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    tmTagOfSync(var0: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.data.ElementDictionary'
     */
    static getElementDictionary(var0: string | null): Promise<ElementDictionary | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.data.ElementDictionary'
     */
    static getElementDictionarySync(var0: string | null): ElementDictionary | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'int'
     */
    tagForKeyword(var0: string | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'int'
     */
    tagForKeywordSync(var0: string | null): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'int'
     */
    static tagForKeyword(var0: string | null, var1: string | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'int'
     */
    static tagForKeywordSync(var0: string | null, var1: string | null): number;
}
declare const ElementDictionary_base: typeof ElementDictionaryClass;
/**
 * Class org.dcm4che3.data.ElementDictionary.
 *
 * This actually imports the java class for further use.
 * The class {@link ElementDictionaryClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ElementDictionary extends ElementDictionary_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default ElementDictionary;
