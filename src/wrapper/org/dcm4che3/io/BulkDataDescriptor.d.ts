import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../java/util/List";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
import { VR as org_dcm4che3_data_VR } from "./../data/VR";
/**
 * This class just defines types, you should import {@link BulkDataDescriptor} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class BulkDataDescriptorClass extends JavaClass {
    /**
     * @param var0 original type: 'java.util.List'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'int'
     * @param var3 original type: 'org.dcm4che3.data.VR'
     * @param var4 original type: 'int'
     * @return original return type: 'boolean'
     */
    isBulkData(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var1: string | null, var2: java_lang_Integer | number, var3: org_dcm4che3_data_VR | null, var4: java_lang_Integer | number): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.List'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'int'
     * @param var3 original type: 'org.dcm4che3.data.VR'
     * @param var4 original type: 'int'
     * @return original return type: 'boolean'
     */
    isBulkDataSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var1: string | null, var2: java_lang_Integer | number, var3: org_dcm4che3_data_VR | null, var4: java_lang_Integer | number): boolean;
    /**
     * Original type: 'org.dcm4che3.io.BulkDataDescriptor'
     */
    static readonly PIXELDATA: BulkDataDescriptorClass | JavaInterfaceProxy<BulkDataDescriptorInterface> | null;
    /**
     * Original type: 'org.dcm4che3.io.BulkDataDescriptor'
     */
    static readonly DEFAULT: BulkDataDescriptorClass | JavaInterfaceProxy<BulkDataDescriptorInterface> | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createBulkDataDescriptorProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface BulkDataDescriptorInterface {
    /**
     * @param var0 original type: 'java.util.List'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'int'
     * @param var3 original type: 'org.dcm4che3.data.VR'
     * @param var4 original type: 'int'
     * @return original return type: 'boolean'
     */
    isBulkData(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var1: string | null, var2: java_lang_Integer | number, var3: org_dcm4che3_data_VR | null, var4: java_lang_Integer | number): boolean;
}
/**
 * Create a proxy for the {@link BulkDataDescriptor} interface.
 * All required methods in {@link BulkDataDescriptorInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createBulkDataDescriptorProxy(methods: BulkDataDescriptorInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<BulkDataDescriptorInterface>;
declare const BulkDataDescriptor_base: typeof BulkDataDescriptorClass;
/**
 * Class org.dcm4che3.io.BulkDataDescriptor.
 *
 * This actually imports the java class for further use.
 * The class {@link BulkDataDescriptorClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class BulkDataDescriptor extends BulkDataDescriptor_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default BulkDataDescriptor;
