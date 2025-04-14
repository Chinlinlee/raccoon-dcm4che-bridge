import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { OptionalDouble as java_util_OptionalDouble } from "./../../../java/util/OptionalDouble";
import { Class as java_lang_Class } from "./../../../java/lang/Class";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
import { Dimension as java_awt_Dimension } from "./../../../java/awt/Dimension";
import { ImageTypeSpecifier as javax_imageio_ImageTypeSpecifier } from "./../../../javax/imageio/ImageTypeSpecifier";
import { Optional as java_util_Optional } from "./../../../java/util/Optional";
import { Double as java_lang_Double } from "./../../../java/lang/Double";
import { Boolean as java_lang_Boolean } from "./../../../java/lang/Boolean";
import { Rectangle as java_awt_Rectangle } from "./../../../java/awt/Rectangle";
import { IIOParamController as javax_imageio_IIOParamController, IIOParamControllerInterface as javax_imageio_IIOParamControllerInterface } from "./../../../javax/imageio/IIOParamController";
import { PrDicomObject as org_dcm4che3_img_data_PrDicomObject } from "./data/PrDicomObject";
import { Long as java_lang_Long } from "./../../../java/lang/Long";
import { BufferedImage as java_awt_image_BufferedImage } from "./../../../java/awt/image/BufferedImage";
import { Color as java_awt_Color } from "./../../../java/awt/Color";
import { LutShape as org_weasis_opencv_op_lut_LutShape } from "./../../weasis/opencv/op/lut/LutShape";
import { Point as java_awt_Point } from "./../../../java/awt/Point";
import { ImageReadParam as javax_imageio_ImageReadParam } from "./../../../javax/imageio/ImageReadParam";
/**
 * This class just defines types, you should import {@link DicomImageReadParam} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DicomImageReadParamClass extends JavaClass {
    /**
     * @return original return type: 'java.util.OptionalDouble'
     */
    getWindowWidth(): Promise<java_util_OptionalDouble | null>;
    /**
     * @return original return type: 'java.util.OptionalDouble'
     */
    getWindowWidthSync(): java_util_OptionalDouble | null;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'void'
     */
    setSourceSubsampling(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'void'
     */
    setSourceSubsamplingSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number): void;
    /**
     * @return original return type: 'java.util.OptionalDouble'
     */
    getWindowCenter(): Promise<java_util_OptionalDouble | null>;
    /**
     * @return original return type: 'java.util.OptionalDouble'
     */
    getWindowCenterSync(): java_util_OptionalDouble | null;
    /**
     * @return original return type: 'int'
     */
    getSubsamplingYOffset(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getSubsamplingYOffsetSync(): number;
    /**
     * @return original return type: 'int'
     */
    getSourceNumProgressivePasses(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getSourceNumProgressivePassesSync(): number;
    /**
     * @return original return type: 'java.awt.Dimension'
     */
    getSourceRenderSize(): Promise<java_awt_Dimension | null>;
    /**
     * @return original return type: 'java.awt.Dimension'
     */
    getSourceRenderSizeSync(): java_awt_Dimension | null;
    /**
     * @param var0 original type: 'javax.imageio.ImageTypeSpecifier'
     * @return original return type: 'void'
     */
    setDestinationType(var0: javax_imageio_ImageTypeSpecifier | null): Promise<void>;
    /**
     * @param var0 original type: 'javax.imageio.ImageTypeSpecifier'
     * @return original return type: 'void'
     */
    setDestinationTypeSync(var0: javax_imageio_ImageTypeSpecifier | null): void;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getApplyWindowLevelToColorImage(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getApplyWindowLevelToColorImageSync(): java_util_Optional | null;
    /**
     * @param var0 original type: 'java.lang.Double'
     * @return original return type: 'void'
     */
    setWindowWidth(var0: java_lang_Double | number | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Double'
     * @return original return type: 'void'
     */
    setWindowWidthSync(var0: java_lang_Double | number | null): void;
    /**
     * @return original return type: 'int'
     */
    getSourceMaxProgressivePass(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getSourceMaxProgressivePassSync(): number;
    /**
     * @return original return type: 'boolean'
     */
    activateController(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    activateControllerSync(): boolean;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getOverlayColor(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getOverlayColorSync(): java_util_Optional | null;
    /**
     * @param var0 original type: 'java.lang.Boolean'
     * @return original return type: 'void'
     */
    setApplyWindowLevelToColorImage(var0: java_lang_Boolean | boolean | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Boolean'
     * @return original return type: 'void'
     */
    setApplyWindowLevelToColorImageSync(var0: java_lang_Boolean | boolean | null): void;
    /**
     * @param var0 original type: 'java.lang.Boolean'
     * @return original return type: 'void'
     */
    setFillOutsideLutRange(var0: java_lang_Boolean | boolean | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Boolean'
     * @return original return type: 'void'
     */
    setFillOutsideLutRangeSync(var0: java_lang_Boolean | boolean | null): void;
    /**
     * @return original return type: 'int'
     */
    getSourceMinProgressivePass(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getSourceMinProgressivePassSync(): number;
    /**
     * @param var0 original type: 'java.awt.Rectangle'
     * @return original return type: 'void'
     */
    setSourceRegion(var0: java_awt_Rectangle | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.Rectangle'
     * @return original return type: 'void'
     */
    setSourceRegionSync(var0: java_awt_Rectangle | null): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setWindowIndex(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setWindowIndexSync(var0: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.lang.Boolean'
     * @return original return type: 'void'
     */
    setInverseLut(var0: java_lang_Boolean | boolean | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Boolean'
     * @return original return type: 'void'
     */
    setInverseLutSync(var0: java_lang_Boolean | boolean | null): void;
    /**
     * @param var0 original type: 'java.awt.Dimension'
     * @return original return type: 'void'
     */
    setSourceRenderSize(var0: java_awt_Dimension | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.Dimension'
     * @return original return type: 'void'
     */
    setSourceRenderSizeSync(var0: java_awt_Dimension | null): void;
    /**
     * @param var0 original type: 'java.lang.Boolean'
     * @return original return type: 'void'
     */
    setApplyPixelPadding(var0: java_lang_Boolean | boolean | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Boolean'
     * @return original return type: 'void'
     */
    setApplyPixelPaddingSync(var0: java_lang_Boolean | boolean | null): void;
    /**
     * @return original return type: 'int'
     */
    getSubsamplingXOffset(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getSubsamplingXOffsetSync(): number;
    /**
     * @return original return type: 'javax.imageio.IIOParamController'
     */
    getController(): Promise<javax_imageio_IIOParamController | null>;
    /**
     * @return original return type: 'javax.imageio.IIOParamController'
     */
    getControllerSync(): javax_imageio_IIOParamController | null;
    /**
     * @return original return type: 'int'
     */
    getWindowIndex(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getWindowIndexSync(): number;
    /**
     * @param var0 original type: 'java.lang.Double'
     * @return original return type: 'void'
     */
    setLevelMin(var0: java_lang_Double | number | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Double'
     * @return original return type: 'void'
     */
    setLevelMinSync(var0: java_lang_Double | number | null): void;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getKeepRgbForLossyJpeg(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getKeepRgbForLossyJpegSync(): java_util_Optional | null;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getPresentationState(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getPresentationStateSync(): java_util_Optional | null;
    /**
     * @param var0 original type: 'org.dcm4che3.img.data.PrDicomObject'
     * @return original return type: 'void'
     */
    setPresentationState(var0: org_dcm4che3_img_data_PrDicomObject | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.img.data.PrDicomObject'
     * @return original return type: 'void'
     */
    setPresentationStateSync(var0: org_dcm4che3_img_data_PrDicomObject | null): void;
    /**
     * @return original return type: 'boolean'
     */
    hasController(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasControllerSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.Double'
     * @return original return type: 'void'
     */
    setWindowCenter(var0: java_lang_Double | number | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Double'
     * @return original return type: 'void'
     */
    setWindowCenterSync(var0: java_lang_Double | number | null): void;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getInverseLut(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getInverseLutSync(): java_util_Optional | null;
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
     * @return original return type: 'java.awt.image.BufferedImage'
     */
    getDestination(): Promise<java_awt_image_BufferedImage | null>;
    /**
     * @return original return type: 'java.awt.image.BufferedImage'
     */
    getDestinationSync(): java_awt_image_BufferedImage | null;
    /**
     * @return original return type: 'int'
     */
    getVoiLUTIndex(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getVoiLUTIndexSync(): number;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getApplyPixelPadding(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getApplyPixelPaddingSync(): java_util_Optional | null;
    /**
     * @param var0 original type: 'java.lang.Double'
     * @return original return type: 'void'
     */
    setLevelMax(var0: java_lang_Double | number | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Double'
     * @return original return type: 'void'
     */
    setLevelMaxSync(var0: java_lang_Double | number | null): void;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'java.awt.Color'
     * @return original return type: 'void'
     */
    setOverlayColor(var0: java_awt_Color | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.Color'
     * @return original return type: 'void'
     */
    setOverlayColorSync(var0: java_awt_Color | null): void;
    /**
     * @param var0 original type: 'java.lang.Boolean'
     * @return original return type: 'void'
     */
    setKeepRgbForLossyJpeg(var0: java_lang_Boolean | boolean | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Boolean'
     * @return original return type: 'void'
     */
    setKeepRgbForLossyJpegSync(var0: java_lang_Boolean | boolean | null): void;
    /**
     * @param var0 original type: 'java.awt.image.BufferedImage'
     * @return original return type: 'void'
     */
    setDestination(var0: java_awt_image_BufferedImage | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.image.BufferedImage'
     * @return original return type: 'void'
     */
    setDestinationSync(var0: java_awt_image_BufferedImage | null): void;
    /**
     * @return original return type: 'boolean'
     */
    canSetSourceRenderSize(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    canSetSourceRenderSizeSync(): boolean;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @param var0 original type: 'int[]'
     * @return original return type: 'void'
     */
    setSourceBands(var0: (java_lang_Integer | number)[] | null): Promise<void>;
    /**
     * @param var0 original type: 'int[]'
     * @return original return type: 'void'
     */
    setSourceBandsSync(var0: (java_lang_Integer | number)[] | null): void;
    /**
     * @return original return type: 'int'
     */
    getOverlayActivationMask(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getOverlayActivationMaskSync(): number;
    /**
     * @return original return type: 'javax.imageio.IIOParamController'
     */
    getDefaultController(): Promise<javax_imageio_IIOParamController | null>;
    /**
     * @return original return type: 'javax.imageio.IIOParamController'
     */
    getDefaultControllerSync(): javax_imageio_IIOParamController | null;
    /**
     * @return original return type: 'int'
     */
    getSourceYSubsampling(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getSourceYSubsamplingSync(): number;
    /**
     * @param var0 original type: 'org.weasis.opencv.op.lut.LutShape'
     * @return original return type: 'void'
     */
    setVoiLutShape(var0: org_weasis_opencv_op_lut_LutShape | null): Promise<void>;
    /**
     * @param var0 original type: 'org.weasis.opencv.op.lut.LutShape'
     * @return original return type: 'void'
     */
    setVoiLutShapeSync(var0: org_weasis_opencv_op_lut_LutShape | null): void;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setVoiLUTIndex(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setVoiLUTIndexSync(var0: java_lang_Integer | number): void;
    /**
     * @return original return type: 'int'
     */
    getSourceXSubsampling(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getSourceXSubsamplingSync(): number;
    /**
     * @return original return type: 'java.awt.Point'
     */
    getDestinationOffset(): Promise<java_awt_Point | null>;
    /**
     * @return original return type: 'java.awt.Point'
     */
    getDestinationOffsetSync(): java_awt_Point | null;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getVoiLutShape(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getVoiLutShapeSync(): java_util_Optional | null;
    /**
     * @return original return type: 'javax.imageio.ImageTypeSpecifier'
     */
    getDestinationType(): Promise<javax_imageio_ImageTypeSpecifier | null>;
    /**
     * @return original return type: 'javax.imageio.ImageTypeSpecifier'
     */
    getDestinationTypeSync(): javax_imageio_ImageTypeSpecifier | null;
    /**
     * @return original return type: 'int[]'
     */
    getSourceBands(): Promise<(number)[] | null>;
    /**
     * @return original return type: 'int[]'
     */
    getSourceBandsSync(): (number)[] | null;
    /**
     * @param var0 original type: 'java.lang.Boolean'
     * @return original return type: 'void'
     */
    setReleaseImageAfterProcessing(var0: java_lang_Boolean | boolean | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Boolean'
     * @return original return type: 'void'
     */
    setReleaseImageAfterProcessingSync(var0: java_lang_Boolean | boolean | null): void;
    /**
     * @return original return type: 'java.util.OptionalDouble'
     */
    getLevelMin(): Promise<java_util_OptionalDouble | null>;
    /**
     * @return original return type: 'java.util.OptionalDouble'
     */
    getLevelMinSync(): java_util_OptionalDouble | null;
    /**
     * @return original return type: 'java.awt.Rectangle'
     */
    getSourceRegion(): Promise<java_awt_Rectangle | null>;
    /**
     * @return original return type: 'java.awt.Rectangle'
     */
    getSourceRegionSync(): java_awt_Rectangle | null;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getFillOutsideLutRange(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getFillOutsideLutRangeSync(): java_util_Optional | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setOverlayActivationMask(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setOverlayActivationMaskSync(var0: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setOverlayGrayscaleValue(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setOverlayGrayscaleValueSync(var0: java_lang_Integer | number): void;
    /**
     * @return original return type: 'int[]'
     */
    getDestinationBands(): Promise<(number)[] | null>;
    /**
     * @return original return type: 'int[]'
     */
    getDestinationBandsSync(): (number)[] | null;
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
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    setSourceProgressivePasses(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    setSourceProgressivePassesSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): void;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getReleaseImageAfterProcessing(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getReleaseImageAfterProcessingSync(): java_util_Optional | null;
    /**
     * @param var0 original type: 'javax.imageio.IIOParamController'
     * @return original return type: 'void'
     */
    setController(var0: javax_imageio_IIOParamController | JavaInterfaceProxy<javax_imageio_IIOParamControllerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'javax.imageio.IIOParamController'
     * @return original return type: 'void'
     */
    setControllerSync(var0: javax_imageio_IIOParamController | JavaInterfaceProxy<javax_imageio_IIOParamControllerInterface> | null): void;
    /**
     * @return original return type: 'int'
     */
    getOverlayGrayscaleValue(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getOverlayGrayscaleValueSync(): number;
    /**
     * @return original return type: 'java.util.OptionalDouble'
     */
    getLevelMax(): Promise<java_util_OptionalDouble | null>;
    /**
     * @return original return type: 'java.util.OptionalDouble'
     */
    getLevelMaxSync(): java_util_OptionalDouble | null;
    /**
     * @param var0 original type: 'java.awt.Point'
     * @return original return type: 'void'
     */
    setDestinationOffset(var0: java_awt_Point | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.Point'
     * @return original return type: 'void'
     */
    setDestinationOffsetSync(var0: java_awt_Point | null): void;
    /**
     * @param var0 original type: 'int[]'
     * @return original return type: 'void'
     */
    setDestinationBands(var0: (java_lang_Integer | number)[] | null): Promise<void>;
    /**
     * @param var0 original type: 'int[]'
     * @return original return type: 'void'
     */
    setDestinationBandsSync(var0: (java_lang_Integer | number)[] | null): void;
    constructor();
    /**
     * @return original return type: 'org.dcm4che3.img.DicomImageReadParam'
     */
    static newInstanceAsync(): Promise<DicomImageReadParam>;
    /**
     * @param var0 original type: 'javax.imageio.ImageReadParam'
     */
    constructor(var0: javax_imageio_ImageReadParam | null);
    /**
     * @param var0 original type: 'javax.imageio.ImageReadParam'
     * @return original return type: 'org.dcm4che3.img.DicomImageReadParam'
     */
    static newInstanceAsync(var0: javax_imageio_ImageReadParam | null): Promise<DicomImageReadParam>;
}
declare const DicomImageReadParam_base: typeof DicomImageReadParamClass;
/**
 * Class org.dcm4che3.img.DicomImageReadParam.
 *
 * This actually imports the java class for further use.
 * The class {@link DicomImageReadParamClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DicomImageReadParam extends DicomImageReadParam_base {
}
export default DicomImageReadParam;
