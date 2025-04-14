import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./../../../../java/lang/Class";
import { Long as java_lang_Long } from "./../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../java/lang/Integer";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../../java/util/List";
import { Mat as org_opencv_core_Mat } from "./../../../opencv/core/Mat";
import { Shape as java_awt_Shape, ShapeInterface as java_awt_ShapeInterface } from "./../../../../java/awt/Shape";
import { ImageCV as org_weasis_opencv_data_ImageCV } from "./../data/ImageCV";
import { Rectangle as java_awt_Rectangle } from "./../../../../java/awt/Rectangle";
import { Double as java_lang_Double } from "./../../../../java/lang/Double";
import { File as java_io_File } from "./../../../../java/io/File";
import { Dimension as java_awt_Dimension } from "./../../../../java/awt/Dimension";
import { PlanarImage as org_weasis_opencv_data_PlanarImage, PlanarImageInterface as org_weasis_opencv_data_PlanarImageInterface } from "./../data/PlanarImage";
import { Boolean as java_lang_Boolean } from "./../../../../java/lang/Boolean";
import { Core$MinMaxLocResult as org_opencv_core_Core$MinMaxLocResult } from "./../../../opencv/core/Core$MinMaxLocResult";
import { Size as org_opencv_core_Size } from "./../../../opencv/core/Size";
import { RenderedImage as java_awt_image_RenderedImage, RenderedImageInterface as java_awt_image_RenderedImageInterface } from "./../../../../java/awt/image/RenderedImage";
import { Color as java_awt_Color } from "./../../../../java/awt/Color";
import { MatOfInt as org_opencv_core_MatOfInt } from "./../../../opencv/core/MatOfInt";
import { BufferedImage as java_awt_image_BufferedImage } from "./../../../../java/awt/image/BufferedImage";
/**
 * This class just defines types, you should import {@link ImageProcessor} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ImageProcessorClass extends JavaClass {
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
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.awt.Shape'
     * @param var2 original type: 'java.lang.Integer'
     * @param var3 original type: 'java.lang.Integer'
     * @return original return type: 'java.util.List'
     */
    static getMaskImage(var0: org_opencv_core_Mat | null, var1: java_awt_Shape | JavaInterfaceProxy<java_awt_ShapeInterface> | null, var2: java_lang_Integer | number | null, var3: java_lang_Integer | number | null): Promise<java_util_List | null>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.awt.Shape'
     * @param var2 original type: 'java.lang.Integer'
     * @param var3 original type: 'java.lang.Integer'
     * @return original return type: 'java.util.List'
     */
    static getMaskImageSync(var0: org_opencv_core_Mat | null, var1: java_awt_Shape | JavaInterfaceProxy<java_awt_ShapeInterface> | null, var2: java_lang_Integer | number | null, var3: java_lang_Integer | number | null): java_util_List | null;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.awt.Rectangle'
     * @param var2 original type: 'double'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static applyCropMask(var0: org_opencv_core_Mat | null, var1: java_awt_Rectangle | null, var2: java_lang_Double | number): Promise<org_weasis_opencv_data_ImageCV | null>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.awt.Rectangle'
     * @param var2 original type: 'double'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static applyCropMaskSync(var0: org_opencv_core_Mat | null, var1: java_awt_Rectangle | null, var2: java_lang_Double | number): org_weasis_opencv_data_ImageCV | null;
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'java.util.List'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static readImageWithCvException(var0: java_io_File | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<org_weasis_opencv_data_ImageCV | null>;
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'java.util.List'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static readImageWithCvExceptionSync(var0: java_io_File | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): org_weasis_opencv_data_ImageCV | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.awt.Dimension'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static scale(var0: org_opencv_core_Mat | null, var1: java_awt_Dimension | null): Promise<org_weasis_opencv_data_ImageCV | null>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.awt.Dimension'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static scaleSync(var0: org_opencv_core_Mat | null, var1: java_awt_Dimension | null): org_weasis_opencv_data_ImageCV | null;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.awt.Dimension'
     * @param var2 original type: 'java.lang.Integer'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static scale(var0: org_opencv_core_Mat | null, var1: java_awt_Dimension | null, var2: java_lang_Integer | number | null): Promise<org_weasis_opencv_data_ImageCV | null>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.awt.Dimension'
     * @param var2 original type: 'java.lang.Integer'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static scaleSync(var0: org_opencv_core_Mat | null, var1: java_awt_Dimension | null, var2: java_lang_Integer | number | null): org_weasis_opencv_data_ImageCV | null;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'int'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static bitwiseAnd(var0: org_opencv_core_Mat | null, var1: java_lang_Integer | number): Promise<org_weasis_opencv_data_ImageCV | null>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'int'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static bitwiseAndSync(var0: org_opencv_core_Mat | null, var1: java_lang_Integer | number): org_weasis_opencv_data_ImageCV | null;
    /**
     * @param var0 original type: 'org.weasis.opencv.data.PlanarImage'
     * @param var1 original type: 'java.awt.Dimension'
     * @param var2 original type: 'boolean'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static buildThumbnail(var0: org_weasis_opencv_data_PlanarImage | JavaInterfaceProxy<org_weasis_opencv_data_PlanarImageInterface> | null, var1: java_awt_Dimension | null, var2: java_lang_Boolean | boolean): Promise<org_weasis_opencv_data_ImageCV | null>;
    /**
     * @param var0 original type: 'org.weasis.opencv.data.PlanarImage'
     * @param var1 original type: 'java.awt.Dimension'
     * @param var2 original type: 'boolean'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static buildThumbnailSync(var0: org_weasis_opencv_data_PlanarImage | JavaInterfaceProxy<org_weasis_opencv_data_PlanarImageInterface> | null, var1: java_awt_Dimension | null, var2: java_lang_Boolean | boolean): org_weasis_opencv_data_ImageCV | null;
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'java.util.List'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static readImage(var0: java_io_File | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<org_weasis_opencv_data_ImageCV | null>;
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'java.util.List'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static readImageSync(var0: java_io_File | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): org_weasis_opencv_data_ImageCV | null;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @return original return type: 'org.opencv.core.Core$MinMaxLocResult'
     */
    static findMinMaxValues(var0: org_opencv_core_Mat | null): Promise<org_opencv_core_Core$MinMaxLocResult | null>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @return original return type: 'org.opencv.core.Core$MinMaxLocResult'
     */
    static findMinMaxValuesSync(var0: org_opencv_core_Mat | null): org_opencv_core_Core$MinMaxLocResult | null;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.lang.Integer'
     * @param var2 original type: 'java.lang.Integer'
     * @return original return type: 'org.opencv.core.Core$MinMaxLocResult'
     */
    static findMinMaxValues(var0: org_opencv_core_Mat | null, var1: java_lang_Integer | number | null, var2: java_lang_Integer | number | null): Promise<org_opencv_core_Core$MinMaxLocResult | null>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.lang.Integer'
     * @param var2 original type: 'java.lang.Integer'
     * @return original return type: 'org.opencv.core.Core$MinMaxLocResult'
     */
    static findMinMaxValuesSync(var0: org_opencv_core_Mat | null, var1: java_lang_Integer | number | null, var2: java_lang_Integer | number | null): org_opencv_core_Core$MinMaxLocResult | null;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'org.opencv.core.Mat'
     * @param var2 original type: 'org.opencv.core.Size'
     * @param var3 original type: 'java.lang.Integer'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static warpAffine(var0: org_opencv_core_Mat | null, var1: org_opencv_core_Mat | null, var2: org_opencv_core_Size | null, var3: java_lang_Integer | number | null): Promise<org_weasis_opencv_data_ImageCV | null>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'org.opencv.core.Mat'
     * @param var2 original type: 'org.opencv.core.Size'
     * @param var3 original type: 'java.lang.Integer'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static warpAffineSync(var0: org_opencv_core_Mat | null, var1: org_opencv_core_Mat | null, var2: org_opencv_core_Size | null, var3: java_lang_Integer | number | null): org_weasis_opencv_data_ImageCV | null;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.awt.image.RenderedImage'
     * @param var2 original type: 'java.awt.Color'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static applyShutter(var0: org_opencv_core_Mat | null, var1: java_awt_image_RenderedImage | JavaInterfaceProxy<java_awt_image_RenderedImageInterface> | null, var2: java_awt_Color | null): Promise<org_weasis_opencv_data_ImageCV | null>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.awt.image.RenderedImage'
     * @param var2 original type: 'java.awt.Color'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static applyShutterSync(var0: org_opencv_core_Mat | null, var1: java_awt_image_RenderedImage | JavaInterfaceProxy<java_awt_image_RenderedImageInterface> | null, var2: java_awt_Color | null): org_weasis_opencv_data_ImageCV | null;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.awt.Shape'
     * @param var2 original type: 'java.awt.Color'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static applyShutter(var0: org_opencv_core_Mat | null, var1: java_awt_Shape | JavaInterfaceProxy<java_awt_ShapeInterface> | null, var2: java_awt_Color | null): Promise<org_weasis_opencv_data_ImageCV | null>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.awt.Shape'
     * @param var2 original type: 'java.awt.Color'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static applyShutterSync(var0: org_opencv_core_Mat | null, var1: java_awt_Shape | JavaInterfaceProxy<java_awt_ShapeInterface> | null, var2: java_awt_Color | null): org_weasis_opencv_data_ImageCV | null;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'int'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static getRotatedImage(var0: org_opencv_core_Mat | null, var1: java_lang_Integer | number): Promise<org_weasis_opencv_data_ImageCV | null>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'int'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static getRotatedImageSync(var0: org_opencv_core_Mat | null, var1: java_lang_Integer | number): org_weasis_opencv_data_ImageCV | null;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'org.opencv.core.Mat'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static mergeImages(var0: org_opencv_core_Mat | null, var1: org_opencv_core_Mat | null, var2: java_lang_Double | number, var3: java_lang_Double | number): Promise<org_weasis_opencv_data_ImageCV | null>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'org.opencv.core.Mat'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static mergeImagesSync(var0: org_opencv_core_Mat | null, var1: org_opencv_core_Mat | null, var2: java_lang_Double | number, var3: java_lang_Double | number): org_weasis_opencv_data_ImageCV | null;
    /**
     * @param var0 original type: 'org.weasis.opencv.data.PlanarImage'
     * @param var1 original type: 'boolean'
     * @return original return type: 'org.opencv.core.Core$MinMaxLocResult'
     */
    static findRawMinMaxValues(var0: org_weasis_opencv_data_PlanarImage | JavaInterfaceProxy<org_weasis_opencv_data_PlanarImageInterface> | null, var1: java_lang_Boolean | boolean): Promise<org_opencv_core_Core$MinMaxLocResult | null>;
    /**
     * @param var0 original type: 'org.weasis.opencv.data.PlanarImage'
     * @param var1 original type: 'boolean'
     * @return original return type: 'org.opencv.core.Core$MinMaxLocResult'
     */
    static findRawMinMaxValuesSync(var0: org_weasis_opencv_data_PlanarImage | JavaInterfaceProxy<org_weasis_opencv_data_PlanarImageInterface> | null, var1: java_lang_Boolean | boolean): org_opencv_core_Core$MinMaxLocResult | null;
    /**
     * @param var0 original type: 'org.weasis.opencv.data.ImageCV'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static invertLUT(var0: org_weasis_opencv_data_ImageCV | null): Promise<org_weasis_opencv_data_ImageCV | null>;
    /**
     * @param var0 original type: 'org.weasis.opencv.data.ImageCV'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static invertLUTSync(var0: org_weasis_opencv_data_ImageCV | null): org_weasis_opencv_data_ImageCV | null;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'int'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static flip(var0: org_opencv_core_Mat | null, var1: java_lang_Integer | number): Promise<org_weasis_opencv_data_ImageCV | null>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'int'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static flipSync(var0: org_opencv_core_Mat | null, var1: java_lang_Integer | number): org_weasis_opencv_data_ImageCV | null;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static rescaleToByte(var0: org_opencv_core_Mat | null, var1: java_lang_Double | number, var2: java_lang_Double | number): Promise<org_weasis_opencv_data_ImageCV | null>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static rescaleToByteSync(var0: org_opencv_core_Mat | null, var1: java_lang_Double | number, var2: java_lang_Double | number): org_weasis_opencv_data_ImageCV | null;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.awt.Shape'
     * @return original return type: 'double[][]'
     */
    static meanStdDev(var0: org_opencv_core_Mat | null, var1: java_awt_Shape | JavaInterfaceProxy<java_awt_ShapeInterface> | null): Promise<((number)[] | null)[] | null>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.awt.Shape'
     * @return original return type: 'double[][]'
     */
    static meanStdDevSync(var0: org_opencv_core_Mat | null, var1: java_awt_Shape | JavaInterfaceProxy<java_awt_ShapeInterface> | null): ((number)[] | null)[] | null;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.awt.Shape'
     * @param var2 original type: 'java.lang.Integer'
     * @param var3 original type: 'java.lang.Integer'
     * @return original return type: 'double[][]'
     */
    static meanStdDev(var0: org_opencv_core_Mat | null, var1: java_awt_Shape | JavaInterfaceProxy<java_awt_ShapeInterface> | null, var2: java_lang_Integer | number | null, var3: java_lang_Integer | number | null): Promise<((number)[] | null)[] | null>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.awt.Shape'
     * @param var2 original type: 'java.lang.Integer'
     * @param var3 original type: 'java.lang.Integer'
     * @return original return type: 'double[][]'
     */
    static meanStdDevSync(var0: org_opencv_core_Mat | null, var1: java_awt_Shape | JavaInterfaceProxy<java_awt_ShapeInterface> | null, var2: java_lang_Integer | number | null, var3: java_lang_Integer | number | null): ((number)[] | null)[] | null;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'org.opencv.core.Mat'
     * @param var2 original type: 'java.lang.Integer'
     * @param var3 original type: 'java.lang.Integer'
     * @return original return type: 'double[][]'
     */
    static meanStdDev(var0: org_opencv_core_Mat | null, var1: org_opencv_core_Mat | null, var2: java_lang_Integer | number | null, var3: java_lang_Integer | number | null): Promise<((number)[] | null)[] | null>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'org.opencv.core.Mat'
     * @param var2 original type: 'java.lang.Integer'
     * @param var3 original type: 'java.lang.Integer'
     * @return original return type: 'double[][]'
     */
    static meanStdDevSync(var0: org_opencv_core_Mat | null, var1: org_opencv_core_Mat | null, var2: java_lang_Integer | number | null, var3: java_lang_Integer | number | null): ((number)[] | null)[] | null;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @return original return type: 'double[][]'
     */
    static meanStdDev(var0: org_opencv_core_Mat | null): Promise<((number)[] | null)[] | null>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @return original return type: 'double[][]'
     */
    static meanStdDevSync(var0: org_opencv_core_Mat | null): ((number)[] | null)[] | null;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.io.File'
     * @return original return type: 'boolean'
     */
    static writeImage(var0: org_opencv_core_Mat | null, var1: java_io_File | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.io.File'
     * @return original return type: 'boolean'
     */
    static writeImageSync(var0: org_opencv_core_Mat | null, var1: java_io_File | null): boolean;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.io.File'
     * @param var2 original type: 'org.opencv.core.MatOfInt'
     * @return original return type: 'boolean'
     */
    static writeImage(var0: org_opencv_core_Mat | null, var1: java_io_File | null, var2: org_opencv_core_MatOfInt | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.io.File'
     * @param var2 original type: 'org.opencv.core.MatOfInt'
     * @return original return type: 'boolean'
     */
    static writeImageSync(var0: org_opencv_core_Mat | null, var1: java_io_File | null, var2: org_opencv_core_MatOfInt | null): boolean;
    /**
     * @param var0 original type: 'java.awt.image.RenderedImage'
     * @param var1 original type: 'java.io.File'
     * @return original return type: 'boolean'
     */
    static writeImage(var0: java_awt_image_RenderedImage | JavaInterfaceProxy<java_awt_image_RenderedImageInterface> | null, var1: java_io_File | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.awt.image.RenderedImage'
     * @param var1 original type: 'java.io.File'
     * @return original return type: 'boolean'
     */
    static writeImageSync(var0: java_awt_image_RenderedImage | JavaInterfaceProxy<java_awt_image_RenderedImageInterface> | null, var1: java_io_File | null): boolean;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.awt.image.RenderedImage'
     * @param var2 original type: 'java.awt.Color'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static overlay(var0: org_opencv_core_Mat | null, var1: java_awt_image_RenderedImage | JavaInterfaceProxy<java_awt_image_RenderedImageInterface> | null, var2: java_awt_Color | null): Promise<org_weasis_opencv_data_ImageCV | null>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.awt.image.RenderedImage'
     * @param var2 original type: 'java.awt.Color'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static overlaySync(var0: org_opencv_core_Mat | null, var1: java_awt_image_RenderedImage | JavaInterfaceProxy<java_awt_image_RenderedImageInterface> | null, var2: java_awt_Color | null): org_weasis_opencv_data_ImageCV | null;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'org.opencv.core.Mat'
     * @param var2 original type: 'java.awt.Color'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static overlay(var0: org_opencv_core_Mat | null, var1: org_opencv_core_Mat | null, var2: java_awt_Color | null): Promise<org_weasis_opencv_data_ImageCV | null>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'org.opencv.core.Mat'
     * @param var2 original type: 'java.awt.Color'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static overlaySync(var0: org_opencv_core_Mat | null, var1: org_opencv_core_Mat | null, var2: java_awt_Color | null): org_weasis_opencv_data_ImageCV | null;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.io.File'
     * @param var2 original type: 'int'
     * @return original return type: 'boolean'
     */
    static writeThumbnail(var0: org_opencv_core_Mat | null, var1: java_io_File | null, var2: java_lang_Integer | number): Promise<boolean>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.io.File'
     * @param var2 original type: 'int'
     * @return original return type: 'boolean'
     */
    static writeThumbnailSync(var0: org_opencv_core_Mat | null, var1: java_io_File | null, var2: java_lang_Integer | number): boolean;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'byte[][]'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static applyLUT(var0: org_opencv_core_Mat | null, var1: (Buffer | null)[] | null): Promise<org_weasis_opencv_data_ImageCV | null>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'byte[][]'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static applyLUTSync(var0: org_opencv_core_Mat | null, var1: (Buffer | null)[] | null): org_weasis_opencv_data_ImageCV | null;
    /**
     * @param var0 original type: 'java.awt.image.RenderedImage'
     * @param var1 original type: 'java.awt.Shape'
     * @param var2 original type: 'java.awt.Color'
     * @return original return type: 'java.awt.image.BufferedImage'
     */
    static drawShape(var0: java_awt_image_RenderedImage | JavaInterfaceProxy<java_awt_image_RenderedImageInterface> | null, var1: java_awt_Shape | JavaInterfaceProxy<java_awt_ShapeInterface> | null, var2: java_awt_Color | null): Promise<java_awt_image_BufferedImage | null>;
    /**
     * @param var0 original type: 'java.awt.image.RenderedImage'
     * @param var1 original type: 'java.awt.Shape'
     * @param var2 original type: 'java.awt.Color'
     * @return original return type: 'java.awt.image.BufferedImage'
     */
    static drawShapeSync(var0: java_awt_image_RenderedImage | JavaInterfaceProxy<java_awt_image_RenderedImageInterface> | null, var1: java_awt_Shape | JavaInterfaceProxy<java_awt_ShapeInterface> | null, var2: java_awt_Color | null): java_awt_image_BufferedImage | null;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'org.opencv.core.Mat'
     * @return original return type: 'org.opencv.core.Core$MinMaxLocResult'
     */
    static minMaxLoc(var0: org_opencv_core_Mat | null, var1: org_opencv_core_Mat | null): Promise<org_opencv_core_Core$MinMaxLocResult | null>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'org.opencv.core.Mat'
     * @return original return type: 'org.opencv.core.Core$MinMaxLocResult'
     */
    static minMaxLocSync(var0: org_opencv_core_Mat | null, var1: org_opencv_core_Mat | null): org_opencv_core_Core$MinMaxLocResult | null;
    /**
     * @param var0 original type: 'java.awt.image.RenderedImage'
     * @param var1 original type: 'java.awt.Rectangle'
     * @return original return type: 'org.opencv.core.Core$MinMaxLocResult'
     */
    static minMaxLoc(var0: java_awt_image_RenderedImage | JavaInterfaceProxy<java_awt_image_RenderedImageInterface> | null, var1: java_awt_Rectangle | null): Promise<org_opencv_core_Core$MinMaxLocResult | null>;
    /**
     * @param var0 original type: 'java.awt.image.RenderedImage'
     * @param var1 original type: 'java.awt.Rectangle'
     * @return original return type: 'org.opencv.core.Core$MinMaxLocResult'
     */
    static minMaxLocSync(var0: java_awt_image_RenderedImage | JavaInterfaceProxy<java_awt_image_RenderedImageInterface> | null, var1: java_awt_Rectangle | null): org_opencv_core_Core$MinMaxLocResult | null;
    /**
     * @param var0 original type: 'java.awt.Shape'
     * @param var1 original type: 'boolean'
     * @return original return type: 'java.util.List'
     */
    static transformShapeToContour(var0: java_awt_Shape | JavaInterfaceProxy<java_awt_ShapeInterface> | null, var1: java_lang_Boolean | boolean): Promise<java_util_List | null>;
    /**
     * @param var0 original type: 'java.awt.Shape'
     * @param var1 original type: 'boolean'
     * @return original return type: 'java.util.List'
     */
    static transformShapeToContourSync(var0: java_awt_Shape | JavaInterfaceProxy<java_awt_ShapeInterface> | null, var1: java_lang_Boolean | boolean): java_util_List | null;
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
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.io.File'
     * @return original return type: 'boolean'
     */
    static writePNG(var0: org_opencv_core_Mat | null, var1: java_io_File | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.io.File'
     * @return original return type: 'boolean'
     */
    static writePNGSync(var0: org_opencv_core_Mat | null, var1: java_io_File | null): boolean;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.awt.Rectangle'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static crop(var0: org_opencv_core_Mat | null, var1: java_awt_Rectangle | null): Promise<org_weasis_opencv_data_ImageCV | null>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @param var1 original type: 'java.awt.Rectangle'
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    static cropSync(var0: org_opencv_core_Mat | null, var1: java_awt_Rectangle | null): org_weasis_opencv_data_ImageCV | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly UNSUPPORTED_SIZE: string | null;
}
declare const ImageProcessor_base: typeof ImageProcessorClass;
/**
 * Class org.weasis.opencv.op.ImageProcessor.
 *
 * This actually imports the java class for further use.
 * The class {@link ImageProcessorClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ImageProcessor extends ImageProcessor_base {
}
export default ImageProcessor;
