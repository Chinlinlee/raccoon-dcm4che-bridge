import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./../../../java/lang/Class";
import { IIOMetadata as javax_imageio_metadata_IIOMetadata } from "./../../../javax/imageio/metadata/IIOMetadata";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
import { Set as java_util_Set, SetInterface as java_util_SetInterface } from "./../../../java/util/Set";
import { RenderedImage as java_awt_image_RenderedImage } from "./../../../java/awt/image/RenderedImage";
import { ImageReadParam as javax_imageio_ImageReadParam } from "./../../../javax/imageio/ImageReadParam";
import { IIOReadWarningListener as javax_imageio_event_IIOReadWarningListener, IIOReadWarningListenerInterface as javax_imageio_event_IIOReadWarningListenerInterface } from "./../../../javax/imageio/event/IIOReadWarningListener";
import { Raster as java_awt_image_Raster } from "./../../../java/awt/image/Raster";
import { IIOReadProgressListener as javax_imageio_event_IIOReadProgressListener, IIOReadProgressListenerInterface as javax_imageio_event_IIOReadProgressListenerInterface } from "./../../../javax/imageio/event/IIOReadProgressListener";
import { ImageTypeSpecifier as javax_imageio_ImageTypeSpecifier } from "./../../../javax/imageio/ImageTypeSpecifier";
import { DicomImageReadParam as org_dcm4che3_img_DicomImageReadParam } from "./DicomImageReadParam";
import { Locale as java_util_Locale } from "./../../../java/util/Locale";
import { BufferedImage as java_awt_image_BufferedImage } from "./../../../java/awt/image/BufferedImage";
import { PlanarImage as org_weasis_opencv_data_PlanarImage } from "./../../weasis/opencv/data/PlanarImage";
import { DicomMetaData as org_dcm4che3_img_DicomMetaData } from "./DicomMetaData";
import { ImageDescriptor as org_dcm4che3_img_stream_ImageDescriptor } from "./stream/ImageDescriptor";
import { Boolean as java_lang_Boolean } from "./../../../java/lang/Boolean";
import { ImageCV as org_weasis_opencv_data_ImageCV } from "./../../weasis/opencv/data/ImageCV";
import { Long as java_lang_Long } from "./../../../java/lang/Long";
import { IIOReadUpdateListener as javax_imageio_event_IIOReadUpdateListener, IIOReadUpdateListenerInterface as javax_imageio_event_IIOReadUpdateListenerInterface } from "./../../../javax/imageio/event/IIOReadUpdateListener";
import { List as java_util_List } from "./../../../java/util/List";
import { Editable as org_dcm4che3_img_util_Editable, EditableInterface as org_dcm4che3_img_util_EditableInterface } from "./util/Editable";
import { IIOImage as javax_imageio_IIOImage } from "./../../../javax/imageio/IIOImage";
import { Iterator as java_util_Iterator, IteratorInterface as java_util_IteratorInterface } from "./../../../java/util/Iterator";
import { Mat as org_opencv_core_Mat } from "./../../opencv/core/Mat";
import { ImageReaderSpi as javax_imageio_spi_ImageReaderSpi } from "./../../../javax/imageio/spi/ImageReaderSpi";
import { BulkDataDescriptor as org_dcm4che3_io_BulkDataDescriptor, BulkDataDescriptorInterface as org_dcm4che3_io_BulkDataDescriptorInterface } from "./../io/BulkDataDescriptor";
/**
 * This class just defines types, you should import {@link DicomImageReader} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DicomImageReaderClass extends JavaClass {
    /**
     * @return original return type: 'boolean'
     */
    isIgnoringMetadata(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isIgnoringMetadataSync(): boolean;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
    /**
     * @return original return type: 'int'
     */
    getMinIndex(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getMinIndexSync(): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'javax.imageio.metadata.IIOMetadata'
     */
    getImageMetadata(var0: java_lang_Integer | number): Promise<javax_imageio_metadata_IIOMetadata | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'javax.imageio.metadata.IIOMetadata'
     */
    getImageMetadataSync(var0: java_lang_Integer | number): javax_imageio_metadata_IIOMetadata | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.util.Set'
     * @return original return type: 'javax.imageio.metadata.IIOMetadata'
     */
    getImageMetadata(var0: java_lang_Integer | number, var1: string | null, var2: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null): Promise<javax_imageio_metadata_IIOMetadata | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.util.Set'
     * @return original return type: 'javax.imageio.metadata.IIOMetadata'
     */
    getImageMetadataSync(var0: java_lang_Integer | number, var1: string | null, var2: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null): javax_imageio_metadata_IIOMetadata | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'javax.imageio.ImageReadParam'
     * @return original return type: 'java.awt.image.RenderedImage'
     */
    readAsRenderedImage(var0: java_lang_Integer | number, var1: javax_imageio_ImageReadParam | null): Promise<java_awt_image_RenderedImage | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'javax.imageio.ImageReadParam'
     * @return original return type: 'java.awt.image.RenderedImage'
     */
    readAsRenderedImageSync(var0: java_lang_Integer | number, var1: javax_imageio_ImageReadParam | null): java_awt_image_RenderedImage | null;
    /**
     * @return original return type: 'java.lang.Object'
     */
    getInput(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    getInputSync(): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'javax.imageio.event.IIOReadWarningListener'
     * @return original return type: 'void'
     */
    removeIIOReadWarningListener(var0: javax_imageio_event_IIOReadWarningListener | JavaInterfaceProxy<javax_imageio_event_IIOReadWarningListenerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'javax.imageio.event.IIOReadWarningListener'
     * @return original return type: 'void'
     */
    removeIIOReadWarningListenerSync(var0: javax_imageio_event_IIOReadWarningListener | JavaInterfaceProxy<javax_imageio_event_IIOReadWarningListenerInterface> | null): void;
    /**
     * @return original return type: 'void'
     */
    removeAllIIOReadProgressListeners(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    removeAllIIOReadProgressListenersSync(): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getFormatName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getFormatNameSync(): string | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.awt.image.Raster'
     */
    readTileRaster(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<java_awt_image_Raster | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.awt.image.Raster'
     */
    readTileRasterSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number): java_awt_image_Raster | null;
    /**
     * @param var0 original type: 'javax.imageio.event.IIOReadProgressListener'
     * @return original return type: 'void'
     */
    addIIOReadProgressListener(var0: javax_imageio_event_IIOReadProgressListener | JavaInterfaceProxy<javax_imageio_event_IIOReadProgressListenerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'javax.imageio.event.IIOReadProgressListener'
     * @return original return type: 'void'
     */
    addIIOReadProgressListenerSync(var0: javax_imageio_event_IIOReadProgressListener | JavaInterfaceProxy<javax_imageio_event_IIOReadProgressListenerInterface> | null): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'javax.imageio.ImageTypeSpecifier'
     */
    getRawImageType(var0: java_lang_Integer | number): Promise<javax_imageio_ImageTypeSpecifier | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'javax.imageio.ImageTypeSpecifier'
     */
    getRawImageTypeSync(var0: java_lang_Integer | number): javax_imageio_ImageTypeSpecifier | null;
    /**
     * @param var0 original type: 'javax.imageio.event.IIOReadWarningListener'
     * @return original return type: 'void'
     */
    addIIOReadWarningListener(var0: javax_imageio_event_IIOReadWarningListener | JavaInterfaceProxy<javax_imageio_event_IIOReadWarningListenerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'javax.imageio.event.IIOReadWarningListener'
     * @return original return type: 'void'
     */
    addIIOReadWarningListenerSync(var0: javax_imageio_event_IIOReadWarningListener | JavaInterfaceProxy<javax_imageio_event_IIOReadWarningListenerInterface> | null): void;
    /**
     * @return original return type: 'void'
     */
    removeAllIIOReadWarningListeners(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    removeAllIIOReadWarningListenersSync(): void;
    /**
     * @param var0 original type: 'org.dcm4che3.img.DicomImageReadParam'
     * @return original return type: 'boolean'
     */
    static isReleaseImageAfterProcessing(var0: org_dcm4che3_img_DicomImageReadParam | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.dcm4che3.img.DicomImageReadParam'
     * @return original return type: 'boolean'
     */
    static isReleaseImageAfterProcessingSync(var0: org_dcm4che3_img_DicomImageReadParam | null): boolean;
    /**
     * @return original return type: 'java.util.Locale[]'
     */
    getAvailableLocales(): Promise<(java_util_Locale | null)[] | null>;
    /**
     * @return original return type: 'java.util.Locale[]'
     */
    getAvailableLocalesSync(): (java_util_Locale | null)[] | null;
    /**
     * @return original return type: 'boolean'
     */
    canReadRaster(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    canReadRasterSync(): boolean;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'javax.imageio.ImageReadParam'
     * @return original return type: 'java.awt.image.BufferedImage'
     */
    read(var0: java_lang_Integer | number, var1: javax_imageio_ImageReadParam | null): Promise<java_awt_image_BufferedImage | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'javax.imageio.ImageReadParam'
     * @return original return type: 'java.awt.image.BufferedImage'
     */
    readSync(var0: java_lang_Integer | number, var1: javax_imageio_ImageReadParam | null): java_awt_image_BufferedImage | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.awt.image.BufferedImage'
     */
    read(var0: java_lang_Integer | number): Promise<java_awt_image_BufferedImage | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.awt.image.BufferedImage'
     */
    readSync(var0: java_lang_Integer | number): java_awt_image_BufferedImage | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'org.dcm4che3.img.DicomImageReadParam'
     * @return original return type: 'org.weasis.opencv.data.PlanarImage'
     */
    getPlanarImage(var0: java_lang_Integer | number, var1: org_dcm4che3_img_DicomImageReadParam | null): Promise<org_weasis_opencv_data_PlanarImage | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'org.dcm4che3.img.DicomImageReadParam'
     * @return original return type: 'org.weasis.opencv.data.PlanarImage'
     */
    getPlanarImageSync(var0: java_lang_Integer | number, var1: org_dcm4che3_img_DicomImageReadParam | null): org_weasis_opencv_data_PlanarImage | null;
    /**
     * @return original return type: 'org.weasis.opencv.data.PlanarImage'
     */
    getPlanarImage(): Promise<org_weasis_opencv_data_PlanarImage | null>;
    /**
     * @return original return type: 'org.weasis.opencv.data.PlanarImage'
     */
    getPlanarImageSync(): org_weasis_opencv_data_PlanarImage | null;
    /**
     * @return original return type: 'org.dcm4che3.img.DicomMetaData'
     */
    getStreamMetadata(): Promise<org_dcm4che3_img_DicomMetaData | null>;
    /**
     * @return original return type: 'org.dcm4che3.img.DicomMetaData'
     */
    getStreamMetadataSync(): org_dcm4che3_img_DicomMetaData | null;
    /**
     * @return original return type: 'javax.imageio.metadata.IIOMetadata'
     */
    getStreamMetadata(): Promise<javax_imageio_metadata_IIOMetadata | null>;
    /**
     * @return original return type: 'javax.imageio.metadata.IIOMetadata'
     */
    getStreamMetadataSync(): javax_imageio_metadata_IIOMetadata | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.util.Set'
     * @return original return type: 'javax.imageio.metadata.IIOMetadata'
     */
    getStreamMetadata(var0: string | null, var1: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null): Promise<javax_imageio_metadata_IIOMetadata | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.util.Set'
     * @return original return type: 'javax.imageio.metadata.IIOMetadata'
     */
    getStreamMetadataSync(var0: string | null, var1: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null): javax_imageio_metadata_IIOMetadata | null;
    /**
     * @return original return type: 'org.dcm4che3.img.stream.ImageDescriptor'
     */
    getImageDescriptor(): Promise<org_dcm4che3_img_stream_ImageDescriptor | null>;
    /**
     * @return original return type: 'org.dcm4che3.img.stream.ImageDescriptor'
     */
    getImageDescriptorSync(): org_dcm4che3_img_stream_ImageDescriptor | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'org.dcm4che3.img.DicomImageReadParam'
     * @return original return type: 'org.weasis.opencv.data.PlanarImage'
     */
    getRawImage(var0: java_lang_Integer | number, var1: org_dcm4che3_img_DicomImageReadParam | null): Promise<org_weasis_opencv_data_PlanarImage | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'org.dcm4che3.img.DicomImageReadParam'
     * @return original return type: 'org.weasis.opencv.data.PlanarImage'
     */
    getRawImageSync(var0: java_lang_Integer | number, var1: org_dcm4che3_img_DicomImageReadParam | null): org_weasis_opencv_data_PlanarImage | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.awt.image.BufferedImage'
     */
    readTile(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<java_awt_image_BufferedImage | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.awt.image.BufferedImage'
     */
    readTileSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number): java_awt_image_BufferedImage | null;
    /**
     * @param var0 original type: 'javax.imageio.event.IIOReadProgressListener'
     * @return original return type: 'void'
     */
    removeIIOReadProgressListener(var0: javax_imageio_event_IIOReadProgressListener | JavaInterfaceProxy<javax_imageio_event_IIOReadProgressListenerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'javax.imageio.event.IIOReadProgressListener'
     * @return original return type: 'void'
     */
    removeIIOReadProgressListenerSync(var0: javax_imageio_event_IIOReadProgressListener | JavaInterfaceProxy<javax_imageio_event_IIOReadProgressListenerInterface> | null): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'boolean'
     * @param var2 original type: 'boolean'
     * @return original return type: 'void'
     */
    setInput(var0: BasicOrJavaType | null, var1: java_lang_Boolean | boolean, var2: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'boolean'
     * @param var2 original type: 'boolean'
     * @return original return type: 'void'
     */
    setInputSync(var0: BasicOrJavaType | null, var1: java_lang_Boolean | boolean, var2: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    setInput(var0: BasicOrJavaType | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    setInputSync(var0: BasicOrJavaType | null): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'boolean'
     * @return original return type: 'void'
     */
    setInput(var0: BasicOrJavaType | null, var1: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'boolean'
     * @return original return type: 'void'
     */
    setInputSync(var0: BasicOrJavaType | null, var1: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'float'
     */
    getAspectRatio(var0: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'float'
     */
    getAspectRatioSync(var0: java_lang_Integer | number): number;
    /**
     * @return original return type: 'void'
     */
    abort(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    abortSync(): void;
    /**
     * @return original return type: 'void'
     */
    reset(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    resetSync(): void;
    /**
     * @return original return type: 'void'
     */
    dispose(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    disposeSync(): void;
    /**
     * @param var0 original type: 'java.util.Locale'
     * @return original return type: 'void'
     */
    setLocale(var0: java_util_Locale | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.Locale'
     * @return original return type: 'void'
     */
    setLocaleSync(var0: java_util_Locale | null): void;
    /**
     * @param var0 original type: 'org.weasis.opencv.data.ImageCV'
     * @param var1 original type: 'org.dcm4che3.img.DicomImageReadParam'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static applyReleaseImageAfterProcessing(var0: org_weasis_opencv_data_ImageCV | null, var1: org_dcm4che3_img_DicomImageReadParam | null): Promise<org_weasis_opencv_data_ImageCV | null>;
    /**
     * @param var0 original type: 'org.weasis.opencv.data.ImageCV'
     * @param var1 original type: 'org.dcm4che3.img.DicomImageReadParam'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static applyReleaseImageAfterProcessingSync(var0: org_weasis_opencv_data_ImageCV | null, var1: org_dcm4che3_img_DicomImageReadParam | null): org_weasis_opencv_data_ImageCV | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    getTileWidth(var0: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    getTileWidthSync(var0: java_lang_Integer | number): number;
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
     * @return original return type: 'boolean'
     */
    static isSupportedSyntax(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static isSupportedSyntaxSync(var0: string | null): boolean;
    /**
     * @param var0 original type: 'javax.imageio.event.IIOReadUpdateListener'
     * @return original return type: 'void'
     */
    addIIOReadUpdateListener(var0: javax_imageio_event_IIOReadUpdateListener | JavaInterfaceProxy<javax_imageio_event_IIOReadUpdateListenerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'javax.imageio.event.IIOReadUpdateListener'
     * @return original return type: 'void'
     */
    addIIOReadUpdateListenerSync(var0: javax_imageio_event_IIOReadUpdateListener | JavaInterfaceProxy<javax_imageio_event_IIOReadUpdateListenerInterface> | null): void;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'org.dcm4che3.img.DicomImageReadParam'
     * @param var1 original type: 'org.dcm4che3.img.util.Editable'
     * @return original return type: 'java.util.List'
     */
    getLazyPlanarImages(var0: org_dcm4che3_img_DicomImageReadParam | null, var1: org_dcm4che3_img_util_Editable | JavaInterfaceProxy<org_dcm4che3_img_util_EditableInterface> | null): Promise<java_util_List | null>;
    /**
     * @param var0 original type: 'org.dcm4che3.img.DicomImageReadParam'
     * @param var1 original type: 'org.dcm4che3.img.util.Editable'
     * @return original return type: 'java.util.List'
     */
    getLazyPlanarImagesSync(var0: org_dcm4che3_img_DicomImageReadParam | null, var1: org_dcm4che3_img_util_Editable | JavaInterfaceProxy<org_dcm4che3_img_util_EditableInterface> | null): java_util_List | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    getWidth(var0: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    getWidthSync(var0: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    getTileGridXOffset(var0: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    getTileGridXOffsetSync(var0: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'javax.imageio.ImageReadParam'
     * @return original return type: 'javax.imageio.IIOImage'
     */
    readAll(var0: java_lang_Integer | number, var1: javax_imageio_ImageReadParam | null): Promise<javax_imageio_IIOImage | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'javax.imageio.ImageReadParam'
     * @return original return type: 'javax.imageio.IIOImage'
     */
    readAllSync(var0: java_lang_Integer | number, var1: javax_imageio_ImageReadParam | null): javax_imageio_IIOImage | null;
    /**
     * @param var0 original type: 'java.util.Iterator'
     * @return original return type: 'java.util.Iterator'
     */
    readAll(var0: java_util_Iterator | JavaInterfaceProxy<java_util_IteratorInterface> | null): Promise<java_util_Iterator | null>;
    /**
     * @param var0 original type: 'java.util.Iterator'
     * @return original return type: 'java.util.Iterator'
     */
    readAllSync(var0: java_util_Iterator | JavaInterfaceProxy<java_util_IteratorInterface> | null): java_util_Iterator | null;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @param var0 original type: 'org.dcm4che3.img.DicomImageReadParam'
     * @return original return type: 'java.util.List'
     */
    getPlanarImages(var0: org_dcm4che3_img_DicomImageReadParam | null): Promise<java_util_List | null>;
    /**
     * @param var0 original type: 'org.dcm4che3.img.DicomImageReadParam'
     * @return original return type: 'java.util.List'
     */
    getPlanarImagesSync(var0: org_dcm4che3_img_DicomImageReadParam | null): java_util_List | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getPlanarImages(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getPlanarImagesSync(): java_util_List | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    getHeight(var0: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    getHeightSync(var0: java_lang_Integer | number): number;
    /**
     * @return original return type: 'boolean'
     */
    isSeekForwardOnly(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isSeekForwardOnlySync(): boolean;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'boolean'
     */
    hasThumbnails(var0: java_lang_Integer | number): Promise<boolean>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'boolean'
     */
    hasThumbnailsSync(var0: java_lang_Integer | number): boolean;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'void'
     */
    removeAllIIOReadUpdateListeners(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    removeAllIIOReadUpdateListenersSync(): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'javax.imageio.ImageReadParam'
     * @return original return type: 'java.awt.image.Raster'
     */
    readRaster(var0: java_lang_Integer | number, var1: javax_imageio_ImageReadParam | null): Promise<java_awt_image_Raster | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'javax.imageio.ImageReadParam'
     * @return original return type: 'java.awt.image.Raster'
     */
    readRasterSync(var0: java_lang_Integer | number, var1: javax_imageio_ImageReadParam | null): java_awt_image_Raster | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    getThumbnailWidth(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    getThumbnailWidthSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): number;
    /**
     * @return original return type: 'javax.imageio.ImageReadParam'
     */
    getDefaultReadParam(): Promise<javax_imageio_ImageReadParam | null>;
    /**
     * @return original return type: 'javax.imageio.ImageReadParam'
     */
    getDefaultReadParamSync(): javax_imageio_ImageReadParam | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    getTileHeight(var0: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    getTileHeightSync(var0: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'boolean'
     */
    isRandomAccessEasy(var0: java_lang_Integer | number): Promise<boolean>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'boolean'
     */
    isRandomAccessEasySync(var0: java_lang_Integer | number): boolean;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'boolean'
     */
    isImageTiled(var0: java_lang_Integer | number): Promise<boolean>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'boolean'
     */
    isImageTiledSync(var0: java_lang_Integer | number): boolean;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @return original return type: 'void'
     */
    static closeMat(var0: org_opencv_core_Mat | null): Promise<void>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @return original return type: 'void'
     */
    static closeMatSync(var0: org_opencv_core_Mat | null): void;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'int'
     */
    getNumImages(var0: java_lang_Boolean | boolean): Promise<number>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'int'
     */
    getNumImagesSync(var0: java_lang_Boolean | boolean): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    getThumbnailHeight(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    getThumbnailHeightSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    getTileGridYOffset(var0: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    getTileGridYOffsetSync(var0: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.awt.image.BufferedImage'
     */
    readThumbnail(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<java_awt_image_BufferedImage | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.awt.image.BufferedImage'
     */
    readThumbnailSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): java_awt_image_BufferedImage | null;
    /**
     * @return original return type: 'javax.imageio.spi.ImageReaderSpi'
     */
    getOriginatingProvider(): Promise<javax_imageio_spi_ImageReaderSpi | null>;
    /**
     * @return original return type: 'javax.imageio.spi.ImageReaderSpi'
     */
    getOriginatingProviderSync(): javax_imageio_spi_ImageReaderSpi | null;
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
     * @param var0 original type: 'javax.imageio.event.IIOReadUpdateListener'
     * @return original return type: 'void'
     */
    removeIIOReadUpdateListener(var0: javax_imageio_event_IIOReadUpdateListener | JavaInterfaceProxy<javax_imageio_event_IIOReadUpdateListenerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'javax.imageio.event.IIOReadUpdateListener'
     * @return original return type: 'void'
     */
    removeIIOReadUpdateListenerSync(var0: javax_imageio_event_IIOReadUpdateListener | JavaInterfaceProxy<javax_imageio_event_IIOReadUpdateListenerInterface> | null): void;
    /**
     * @return original return type: 'boolean'
     */
    readerSupportsThumbnails(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    readerSupportsThumbnailsSync(): boolean;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.util.Iterator'
     */
    getImageTypes(var0: java_lang_Integer | number): Promise<java_util_Iterator | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.util.Iterator'
     */
    getImageTypesSync(var0: java_lang_Integer | number): java_util_Iterator | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    getNumThumbnails(var0: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    getNumThumbnailsSync(var0: java_lang_Integer | number): number;
    /**
     * @return original return type: 'java.util.Locale'
     */
    getLocale(): Promise<java_util_Locale | null>;
    /**
     * @return original return type: 'java.util.Locale'
     */
    getLocaleSync(): java_util_Locale | null;
    /**
     * Original type: 'org.dcm4che3.io.BulkDataDescriptor'
     */
    static readonly BULKDATA_DESCRIPTOR: org_dcm4che3_io_BulkDataDescriptor | JavaInterfaceProxy<org_dcm4che3_io_BulkDataDescriptorInterface> | null;
    /**
     * Original type: 'java.util.Set'
     */
    static BULK_TAGS: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null;
    /**
     * @param var0 original type: 'javax.imageio.spi.ImageReaderSpi'
     */
    constructor(var0: javax_imageio_spi_ImageReaderSpi | null);
    /**
     * @param var0 original type: 'javax.imageio.spi.ImageReaderSpi'
     * @return original return type: 'org.dcm4che3.img.DicomImageReader'
     */
    static newInstanceAsync(var0: javax_imageio_spi_ImageReaderSpi | null): Promise<DicomImageReader>;
}
declare const DicomImageReader_base: typeof DicomImageReaderClass;
/**
 * Class org.dcm4che3.img.DicomImageReader.
 *
 * This actually imports the java class for further use.
 * The class {@link DicomImageReaderClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DicomImageReader extends DicomImageReader_base {
}
export default DicomImageReader;
