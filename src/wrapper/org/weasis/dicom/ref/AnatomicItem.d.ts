import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { CodingScheme as org_weasis_dicom_ref_CodingScheme } from "./CodingScheme";
/**
 * This class just defines types, you should import {@link AnatomicItem} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AnatomicItemClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.String'
     */
    getLegacyCode(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getLegacyCodeSync(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    isPaired(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isPairedSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCodeValue(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCodeValueSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCodeMeaning(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCodeMeaningSync(): string | null;
    /**
     * @return original return type: 'org.weasis.dicom.ref.CodingScheme'
     */
    getCodingScheme(): Promise<org_weasis_dicom_ref_CodingScheme | null>;
    /**
     * @return original return type: 'org.weasis.dicom.ref.CodingScheme'
     */
    getCodingSchemeSync(): org_weasis_dicom_ref_CodingScheme | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createAnatomicItemProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface AnatomicItemInterface {
    /**
     * @return original return type: 'java.lang.String'
     */
    getLegacyCode(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    isPaired(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCodeValue(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCodeMeaning(): string | null;
    /**
     * @return original return type: 'org.weasis.dicom.ref.CodingScheme'
     */
    getCodingScheme(): org_weasis_dicom_ref_CodingScheme | null;
}
/**
 * Create a proxy for the {@link AnatomicItem} interface.
 * All required methods in {@link AnatomicItemInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createAnatomicItemProxy(methods: AnatomicItemInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<AnatomicItemInterface>;
declare const AnatomicItem_base: typeof AnatomicItemClass;
/**
 * Class org.weasis.dicom.ref.AnatomicItem.
 *
 * This actually imports the java class for further use.
 * The class {@link AnatomicItemClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AnatomicItem extends AnatomicItem_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default AnatomicItem;
//# sourceMappingURL=AnatomicItem.d.ts.map