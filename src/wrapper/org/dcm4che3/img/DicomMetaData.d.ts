import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./../../../java/lang/Class";
import { Long as java_lang_Long } from "./../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
import { Node as org_w3c_dom_Node, NodeInterface as org_w3c_dom_NodeInterface } from "./../../w3c/dom/Node";
import { IIOMetadataController as javax_imageio_metadata_IIOMetadataController, IIOMetadataControllerInterface as javax_imageio_metadata_IIOMetadataControllerInterface } from "./../../../javax/imageio/metadata/IIOMetadataController";
import { Attributes as org_dcm4che3_data_Attributes } from "./../data/Attributes";
import { ImageDescriptor as org_dcm4che3_img_stream_ImageDescriptor } from "./stream/ImageDescriptor";
import { IIOMetadataFormat as javax_imageio_metadata_IIOMetadataFormat } from "./../../../javax/imageio/metadata/IIOMetadataFormat";
import { DicomInputStream as org_dcm4che3_io_DicomInputStream } from "./../io/DicomInputStream";
/**
 * This class just defines types, you should import {@link DicomMetaData} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DicomMetaDataClass extends JavaClass {
    /**
     * @return original return type: 'boolean'
     */
    hasController(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasControllerSync(): boolean;
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
     * @param var1 original type: 'org.w3c.dom.Node'
     * @return original return type: 'void'
     */
    setFromTree(var0: string | null, var1: org_w3c_dom_Node | JavaInterfaceProxy<org_w3c_dom_NodeInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.w3c.dom.Node'
     * @return original return type: 'void'
     */
    setFromTreeSync(var0: string | null, var1: org_w3c_dom_Node | JavaInterfaceProxy<org_w3c_dom_NodeInterface> | null): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getMediaStorageSOPClassUID(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getMediaStorageSOPClassUIDSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getNativeMetadataFormatName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getNativeMetadataFormatNameSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.w3c.dom.Node'
     * @return original return type: 'void'
     */
    mergeTree(var0: string | null, var1: org_w3c_dom_Node | JavaInterfaceProxy<org_w3c_dom_NodeInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.w3c.dom.Node'
     * @return original return type: 'void'
     */
    mergeTreeSync(var0: string | null, var1: org_w3c_dom_Node | JavaInterfaceProxy<org_w3c_dom_NodeInterface> | null): void;
    /**
     * @return original return type: 'boolean'
     */
    isMediaStorageDirectory(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isMediaStorageDirectorySync(): boolean;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'boolean'
     */
    isStandardMetadataFormatSupported(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isStandardMetadataFormatSupportedSync(): boolean;
    /**
     * @return original return type: 'javax.imageio.metadata.IIOMetadataController'
     */
    getDefaultController(): Promise<javax_imageio_metadata_IIOMetadataController | null>;
    /**
     * @return original return type: 'javax.imageio.metadata.IIOMetadataController'
     */
    getDefaultControllerSync(): javax_imageio_metadata_IIOMetadataController | null;
    /**
     * @return original return type: 'boolean'
     */
    isReadOnly(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isReadOnlySync(): boolean;
    /**
     * @return original return type: 'org.dcm4che3.data.Attributes'
     */
    getDicomObject(): Promise<org_dcm4che3_data_Attributes | null>;
    /**
     * @return original return type: 'org.dcm4che3.data.Attributes'
     */
    getDicomObjectSync(): org_dcm4che3_data_Attributes | null;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'boolean'
     */
    isVideoTransferSyntaxUID(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isVideoTransferSyntaxUIDSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    activateController(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    activateControllerSync(): boolean;
    /**
     * @return original return type: 'org.dcm4che3.data.Attributes'
     */
    getFileMetaInformation(): Promise<org_dcm4che3_data_Attributes | null>;
    /**
     * @return original return type: 'org.dcm4che3.data.Attributes'
     */
    getFileMetaInformationSync(): org_dcm4che3_data_Attributes | null;
    /**
     * @return original return type: 'java.lang.String[]'
     */
    getExtraMetadataFormatNames(): Promise<(string | null)[] | null>;
    /**
     * @return original return type: 'java.lang.String[]'
     */
    getExtraMetadataFormatNamesSync(): (string | null)[] | null;
    /**
     * @return original return type: 'org.dcm4che3.img.stream.ImageDescriptor'
     */
    getImageDescriptor(): Promise<org_dcm4che3_img_stream_ImageDescriptor | null>;
    /**
     * @return original return type: 'org.dcm4che3.img.stream.ImageDescriptor'
     */
    getImageDescriptorSync(): org_dcm4che3_img_stream_ImageDescriptor | null;
    /**
     * @return original return type: 'javax.imageio.metadata.IIOMetadataController'
     */
    getController(): Promise<javax_imageio_metadata_IIOMetadataController | null>;
    /**
     * @return original return type: 'javax.imageio.metadata.IIOMetadataController'
     */
    getControllerSync(): javax_imageio_metadata_IIOMetadataController | null;
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
    reset(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    resetSync(): void;
    /**
     * @return original return type: 'java.lang.String[]'
     */
    getMetadataFormatNames(): Promise<(string | null)[] | null>;
    /**
     * @return original return type: 'java.lang.String[]'
     */
    getMetadataFormatNamesSync(): (string | null)[] | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'javax.imageio.metadata.IIOMetadataFormat'
     */
    getMetadataFormat(var0: string | null): Promise<javax_imageio_metadata_IIOMetadataFormat | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'javax.imageio.metadata.IIOMetadataFormat'
     */
    getMetadataFormatSync(var0: string | null): javax_imageio_metadata_IIOMetadataFormat | null;
    /**
     * @return original return type: 'boolean'
     */
    isSegmentationStorage(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isSegmentationStorageSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTransferSyntaxUID(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTransferSyntaxUIDSync(): string | null;
    /**
     * @param var0 original type: 'javax.imageio.metadata.IIOMetadataController'
     * @return original return type: 'void'
     */
    setController(var0: javax_imageio_metadata_IIOMetadataController | JavaInterfaceProxy<javax_imageio_metadata_IIOMetadataControllerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'javax.imageio.metadata.IIOMetadataController'
     * @return original return type: 'void'
     */
    setControllerSync(var0: javax_imageio_metadata_IIOMetadataController | JavaInterfaceProxy<javax_imageio_metadata_IIOMetadataControllerInterface> | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.w3c.dom.Node'
     */
    getAsTree(var0: string | null): Promise<org_w3c_dom_Node | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.w3c.dom.Node'
     */
    getAsTreeSync(var0: string | null): org_w3c_dom_Node | null;
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputStream'
     */
    constructor(var0: org_dcm4che3_io_DicomInputStream | null);
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputStream'
     * @return original return type: 'org.dcm4che3.img.DicomMetaData'
     */
    static newInstanceAsync(var0: org_dcm4che3_io_DicomInputStream | null): Promise<DicomMetaData>;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @param var1 original type: 'java.lang.String'
     */
    constructor(var0: org_dcm4che3_data_Attributes | null, var1: string | null);
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.img.DicomMetaData'
     */
    static newInstanceAsync(var0: org_dcm4che3_data_Attributes | null, var1: string | null): Promise<DicomMetaData>;
}
declare const DicomMetaData_base: typeof DicomMetaDataClass;
/**
 * Class org.dcm4che3.img.DicomMetaData.
 *
 * This actually imports the java class for further use.
 * The class {@link DicomMetaDataClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DicomMetaData extends DicomMetaData_base {
}
export default DicomMetaData;
//# sourceMappingURL=DicomMetaData.d.ts.map