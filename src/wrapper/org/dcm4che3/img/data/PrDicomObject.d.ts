import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../../../java/lang/Class";
import { Long as java_lang_Long } from "./../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../java/lang/Integer";
import { List as java_util_List } from "./../../../../java/util/List";
import { Optional as java_util_Optional } from "./../../../../java/util/Optional";
import { Area as java_awt_geom_Area } from "./../../../../java/awt/geom/Area";
import { Attributes as org_dcm4che3_data_Attributes } from "./../../data/Attributes";
import { LocalDateTime as java_time_LocalDateTime } from "./../../../../java/time/LocalDateTime";
import { Color as java_awt_Color } from "./../../../../java/awt/Color";
import { ModalityLutModule as org_dcm4che3_img_lut_ModalityLutModule } from "./../lut/ModalityLutModule";
import { ImageDescriptor as org_dcm4che3_img_stream_ImageDescriptor } from "./../stream/ImageDescriptor";
/**
 * This class just defines types, you should import {@link PrDicomObject} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PrDicomObjectClass extends JavaClass {
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
     * @return original return type: 'java.util.List'
     */
    getReferencedSeriesSequence(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getReferencedSeriesSequenceSync(): java_util_List | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'java.util.List'
     */
    getShutterOverlays(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getShutterOverlaysSync(): java_util_List | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getGraphicAnnotationSequence(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getGraphicAnnotationSequenceSync(): java_util_List | null;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getPrLutShapeMode(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getPrLutShapeModeSync(): java_util_Optional | null;
    /**
     * @return original return type: 'java.awt.geom.Area'
     */
    getShutterShape(): Promise<java_awt_geom_Area | null>;
    /**
     * @return original return type: 'java.awt.geom.Area'
     */
    getShutterShapeSync(): java_awt_geom_Area | null;
    /**
     * @return original return type: 'boolean'
     */
    hasOverlay(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasOverlaySync(): boolean;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getPrLut(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getPrLutSync(): java_util_Optional | null;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getVoiLUT(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getVoiLUTSync(): java_util_Optional | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getGraphicLayerSequence(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getGraphicLayerSequenceSync(): java_util_List | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'int'
     * @return original return type: 'boolean'
     */
    isSegmentationSegmentApplicable(var0: string | null, var1: string | null, var2: java_lang_Integer | number): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'int'
     * @return original return type: 'boolean'
     */
    isSegmentationSegmentApplicableSync(var0: string | null, var1: string | null, var2: java_lang_Integer | number): boolean;
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
     * @return original return type: 'java.lang.String'
     */
    getPrContentLabel(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPrContentLabelSync(): string | null;
    /**
     * @return original return type: 'java.time.LocalDateTime'
     */
    getPresentationCreationDateTime(): Promise<java_time_LocalDateTime | null>;
    /**
     * @return original return type: 'java.time.LocalDateTime'
     */
    getPresentationCreationDateTimeSync(): java_time_LocalDateTime | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'int'
     * @return original return type: 'boolean'
     */
    isImageFrameApplicable(var0: string | null, var1: string | null, var2: java_lang_Integer | number): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'int'
     * @return original return type: 'boolean'
     */
    isImageFrameApplicableSync(var0: string | null, var1: string | null, var2: java_lang_Integer | number): boolean;
    /**
     * @return original return type: 'java.awt.Color'
     */
    getShutterColor(): Promise<java_awt_Color | null>;
    /**
     * @return original return type: 'java.awt.Color'
     */
    getShutterColorSync(): java_awt_Color | null;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getPrLutExplanation(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getPrLutExplanationSync(): java_util_Optional | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.img.data.PrDicomObject'
     */
    static getPresentationState(var0: string | null): Promise<PrDicomObject | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.img.data.PrDicomObject'
     */
    static getPresentationStateSync(var0: string | null): PrDicomObject | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getOverlays(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getOverlaysSync(): java_util_List | null;
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
     * @return original return type: 'org.dcm4che3.img.lut.ModalityLutModule'
     */
    getModalityLutModule(): Promise<org_dcm4che3_img_lut_ModalityLutModule | null>;
    /**
     * @return original return type: 'org.dcm4che3.img.lut.ModalityLutModule'
     */
    getModalityLutModuleSync(): org_dcm4che3_img_lut_ModalityLutModule | null;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     */
    constructor(var0: org_dcm4che3_data_Attributes | null);
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @return original return type: 'org.dcm4che3.img.data.PrDicomObject'
     */
    static newInstanceAsync(var0: org_dcm4che3_data_Attributes | null): Promise<PrDicomObject>;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @param var1 original type: 'org.dcm4che3.img.stream.ImageDescriptor'
     */
    constructor(var0: org_dcm4che3_data_Attributes | null, var1: org_dcm4che3_img_stream_ImageDescriptor | null);
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @param var1 original type: 'org.dcm4che3.img.stream.ImageDescriptor'
     * @return original return type: 'org.dcm4che3.img.data.PrDicomObject'
     */
    static newInstanceAsync(var0: org_dcm4che3_data_Attributes | null, var1: org_dcm4che3_img_stream_ImageDescriptor | null): Promise<PrDicomObject>;
}
declare const PrDicomObject_base: typeof PrDicomObjectClass;
/**
 * Class org.dcm4che3.img.data.PrDicomObject.
 *
 * This actually imports the java class for further use.
 * The class {@link PrDicomObjectClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PrDicomObject extends PrDicomObject_base {
}
export default PrDicomObject;
