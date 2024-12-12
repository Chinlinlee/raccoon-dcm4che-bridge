import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./../../java/lang/Class";
import { Long as java_lang_Long } from "./../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../java/lang/Integer";
import { BufferedImage as java_awt_image_BufferedImage } from "./../../java/awt/image/BufferedImage";
import { Dimension as java_awt_Dimension } from "./../../java/awt/Dimension";
import { ImageTypeSpecifier as javax_imageio_ImageTypeSpecifier } from "./ImageTypeSpecifier";
import { IIOParamController as javax_imageio_IIOParamController, IIOParamControllerInterface as javax_imageio_IIOParamControllerInterface } from "./IIOParamController";
import { Point as java_awt_Point } from "./../../java/awt/Point";
import { Rectangle as java_awt_Rectangle } from "./../../java/awt/Rectangle";
/**
 * This class just defines types, you should import {@link ImageReadParam} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ImageReadParamClass extends JavaClass {
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
     * @return original return type: 'java.awt.image.BufferedImage'
     */
    getDestination(): Promise<java_awt_image_BufferedImage | null>;
    /**
     * @return original return type: 'java.awt.image.BufferedImage'
     */
    getDestinationSync(): java_awt_image_BufferedImage | null;
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
     * @return original return type: 'int'
     */
    getSubsamplingYOffset(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getSubsamplingYOffsetSync(): number;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
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
     * @return original return type: 'int'
     */
    getSourceMaxProgressivePass(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getSourceMaxProgressivePassSync(): number;
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
    activateController(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    activateControllerSync(): boolean;
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
     * @return original return type: 'javax.imageio.ImageTypeSpecifier'
     */
    getDestinationType(): Promise<javax_imageio_ImageTypeSpecifier | null>;
    /**
     * @return original return type: 'javax.imageio.ImageTypeSpecifier'
     */
    getDestinationTypeSync(): javax_imageio_ImageTypeSpecifier | null;
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
     * @return original return type: 'int[]'
     */
    getSourceBands(): Promise<(number)[] | null>;
    /**
     * @return original return type: 'int[]'
     */
    getSourceBandsSync(): (number)[] | null;
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
     * @return original return type: 'java.awt.Rectangle'
     */
    getSourceRegion(): Promise<java_awt_Rectangle | null>;
    /**
     * @return original return type: 'java.awt.Rectangle'
     */
    getSourceRegionSync(): java_awt_Rectangle | null;
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
     * @param var0 original type: 'int[]'
     * @return original return type: 'void'
     */
    setDestinationBands(var0: (java_lang_Integer | number)[] | null): Promise<void>;
    /**
     * @param var0 original type: 'int[]'
     * @return original return type: 'void'
     */
    setDestinationBandsSync(var0: (java_lang_Integer | number)[] | null): void;
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
    constructor();
    /**
     * @return original return type: 'javax.imageio.ImageReadParam'
     */
    static newInstanceAsync(): Promise<ImageReadParam>;
}
declare const ImageReadParam_base: typeof ImageReadParamClass;
/**
 * Class javax.imageio.ImageReadParam.
 *
 * This actually imports the java class for further use.
 * The class {@link ImageReadParamClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ImageReadParam extends ImageReadParam_base {
}
export default ImageReadParam;
//# sourceMappingURL=ImageReadParam.d.ts.map