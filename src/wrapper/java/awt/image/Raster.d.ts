import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../lang/Class";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { WritableRaster as java_awt_image_WritableRaster } from "./WritableRaster";
import { SampleModel as java_awt_image_SampleModel } from "./SampleModel";
import { Point as java_awt_Point } from "./../Point";
import { DataBuffer as java_awt_image_DataBuffer } from "./DataBuffer";
import { Rectangle as java_awt_Rectangle } from "./../Rectangle";
import { Double as java_lang_Double } from "./../../lang/Double";
import { Float as java_lang_Float } from "./../../lang/Float";
/**
 * This class just defines types, you should import {@link Raster} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class RasterClass extends JavaClass {
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
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'int'
     * @param var6 original type: 'int[]'
     * @return original return type: 'java.awt.image.Raster'
     */
    createChild(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: java_lang_Integer | number, var6: (java_lang_Integer | number)[] | null): Promise<Raster | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'int'
     * @param var6 original type: 'int[]'
     * @return original return type: 'java.awt.image.Raster'
     */
    createChildSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: java_lang_Integer | number, var6: (java_lang_Integer | number)[] | null): Raster | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'float'
     */
    getSampleFloat(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'float'
     */
    getSampleFloatSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number): number;
    /**
     * @return original return type: 'int'
     */
    getNumDataElements(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getNumDataElementsSync(): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.awt.image.Raster'
     */
    createTranslatedChild(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<Raster | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.awt.image.Raster'
     */
    createTranslatedChildSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Raster | null;
    /**
     * @return original return type: 'int'
     */
    getNumBands(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getNumBandsSync(): number;
    /**
     * @return original return type: 'int'
     */
    getWidth(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getWidthSync(): number;
    /**
     * @param var0 original type: 'java.awt.image.SampleModel'
     * @param var1 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    static createWritableRaster(var0: java_awt_image_SampleModel | null, var1: java_awt_Point | null): Promise<java_awt_image_WritableRaster | null>;
    /**
     * @param var0 original type: 'java.awt.image.SampleModel'
     * @param var1 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    static createWritableRasterSync(var0: java_awt_image_SampleModel | null, var1: java_awt_Point | null): java_awt_image_WritableRaster | null;
    /**
     * @param var0 original type: 'java.awt.image.SampleModel'
     * @param var1 original type: 'java.awt.image.DataBuffer'
     * @param var2 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    static createWritableRaster(var0: java_awt_image_SampleModel | null, var1: java_awt_image_DataBuffer | null, var2: java_awt_Point | null): Promise<java_awt_image_WritableRaster | null>;
    /**
     * @param var0 original type: 'java.awt.image.SampleModel'
     * @param var1 original type: 'java.awt.image.DataBuffer'
     * @param var2 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    static createWritableRasterSync(var0: java_awt_image_SampleModel | null, var1: java_awt_image_DataBuffer | null, var2: java_awt_Point | null): java_awt_image_WritableRaster | null;
    /**
     * @return original return type: 'java.awt.Rectangle'
     */
    getBounds(): Promise<java_awt_Rectangle | null>;
    /**
     * @return original return type: 'java.awt.Rectangle'
     */
    getBoundsSync(): java_awt_Rectangle | null;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'java.awt.image.SampleModel'
     */
    getSampleModel(): Promise<java_awt_image_SampleModel | null>;
    /**
     * @return original return type: 'java.awt.image.SampleModel'
     */
    getSampleModelSync(): java_awt_image_SampleModel | null;
    /**
     * @return original return type: 'int'
     */
    getHeight(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getHeightSync(): number;
    /**
     * @param var0 original type: 'java.awt.image.SampleModel'
     * @param var1 original type: 'java.awt.image.DataBuffer'
     * @param var2 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.image.Raster'
     */
    static createRaster(var0: java_awt_image_SampleModel | null, var1: java_awt_image_DataBuffer | null, var2: java_awt_Point | null): Promise<Raster | null>;
    /**
     * @param var0 original type: 'java.awt.image.SampleModel'
     * @param var1 original type: 'java.awt.image.DataBuffer'
     * @param var2 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.image.Raster'
     */
    static createRasterSync(var0: java_awt_image_SampleModel | null, var1: java_awt_image_DataBuffer | null, var2: java_awt_Point | null): Raster | null;
    /**
     * @return original return type: 'int'
     */
    getTransferType(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getTransferTypeSync(): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int[]'
     * @return original return type: 'int[]'
     */
    getPixels(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Integer | number)[] | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int[]'
     * @return original return type: 'int[]'
     */
    getPixelsSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Integer | number)[] | null): (number)[] | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'double[]'
     * @return original return type: 'double[]'
     */
    getPixels(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Double | number)[] | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'double[]'
     * @return original return type: 'double[]'
     */
    getPixelsSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Double | number)[] | null): (number)[] | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    getPixels(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Float | number)[] | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    getPixelsSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Float | number)[] | null): (number)[] | null;
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
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'double'
     */
    getSampleDouble(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'double'
     */
    getSampleDoubleSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number): number;
    /**
     * @return original return type: 'java.awt.image.Raster'
     */
    getParent(): Promise<Raster | null>;
    /**
     * @return original return type: 'java.awt.image.Raster'
     */
    getParentSync(): Raster | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    static createBandedRaster(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_awt_Point | null): Promise<java_awt_image_WritableRaster | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    static createBandedRasterSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_awt_Point | null): java_awt_image_WritableRaster | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int[]'
     * @param var5 original type: 'int[]'
     * @param var6 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    static createBandedRaster(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Integer | number)[] | null, var5: (java_lang_Integer | number)[] | null, var6: java_awt_Point | null): Promise<java_awt_image_WritableRaster | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int[]'
     * @param var5 original type: 'int[]'
     * @param var6 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    static createBandedRasterSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Integer | number)[] | null, var5: (java_lang_Integer | number)[] | null, var6: java_awt_Point | null): java_awt_image_WritableRaster | null;
    /**
     * @param var0 original type: 'java.awt.image.DataBuffer'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int[]'
     * @param var5 original type: 'int[]'
     * @param var6 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    static createBandedRaster(var0: java_awt_image_DataBuffer | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Integer | number)[] | null, var5: (java_lang_Integer | number)[] | null, var6: java_awt_Point | null): Promise<java_awt_image_WritableRaster | null>;
    /**
     * @param var0 original type: 'java.awt.image.DataBuffer'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int[]'
     * @param var5 original type: 'int[]'
     * @param var6 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    static createBandedRasterSync(var0: java_awt_image_DataBuffer | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Integer | number)[] | null, var5: (java_lang_Integer | number)[] | null, var6: java_awt_Point | null): java_awt_image_WritableRaster | null;
    /**
     * @return original return type: 'java.awt.image.DataBuffer'
     */
    getDataBuffer(): Promise<java_awt_image_DataBuffer | null>;
    /**
     * @return original return type: 'java.awt.image.DataBuffer'
     */
    getDataBufferSync(): java_awt_image_DataBuffer | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    getSamples(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: (java_lang_Float | number)[] | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    getSamplesSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: (java_lang_Float | number)[] | null): (number)[] | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'double[]'
     * @return original return type: 'double[]'
     */
    getSamples(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: (java_lang_Double | number)[] | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'double[]'
     * @return original return type: 'double[]'
     */
    getSamplesSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: (java_lang_Double | number)[] | null): (number)[] | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'int[]'
     * @return original return type: 'int[]'
     */
    getSamples(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: (java_lang_Integer | number)[] | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'int[]'
     * @return original return type: 'int[]'
     */
    getSamplesSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: (java_lang_Integer | number)[] | null): (number)[] | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int[]'
     * @return original return type: 'int[]'
     */
    getPixel(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Integer | number)[] | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int[]'
     * @return original return type: 'int[]'
     */
    getPixelSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Integer | number)[] | null): (number)[] | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'double[]'
     * @return original return type: 'double[]'
     */
    getPixel(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Double | number)[] | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'double[]'
     * @return original return type: 'double[]'
     */
    getPixelSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Double | number)[] | null): (number)[] | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    getPixel(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Float | number)[] | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    getPixelSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Float | number)[] | null): (number)[] | null;
    /**
     * @param var0 original type: 'java.awt.Rectangle'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    createCompatibleWritableRaster(var0: java_awt_Rectangle | null): Promise<java_awt_image_WritableRaster | null>;
    /**
     * @param var0 original type: 'java.awt.Rectangle'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    createCompatibleWritableRasterSync(var0: java_awt_Rectangle | null): java_awt_image_WritableRaster | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    createCompatibleWritableRaster(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number): Promise<java_awt_image_WritableRaster | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    createCompatibleWritableRasterSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number): java_awt_image_WritableRaster | null;
    /**
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    createCompatibleWritableRaster(): Promise<java_awt_image_WritableRaster | null>;
    /**
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    createCompatibleWritableRasterSync(): java_awt_image_WritableRaster | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    createCompatibleWritableRaster(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<java_awt_image_WritableRaster | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    createCompatibleWritableRasterSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): java_awt_image_WritableRaster | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int[]'
     * @param var4 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    static createPackedRaster(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: (java_lang_Integer | number)[] | null, var4: java_awt_Point | null): Promise<java_awt_image_WritableRaster | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int[]'
     * @param var4 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    static createPackedRasterSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: (java_lang_Integer | number)[] | null, var4: java_awt_Point | null): java_awt_image_WritableRaster | null;
    /**
     * @param var0 original type: 'java.awt.image.DataBuffer'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    static createPackedRaster(var0: java_awt_image_DataBuffer | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_awt_Point | null): Promise<java_awt_image_WritableRaster | null>;
    /**
     * @param var0 original type: 'java.awt.image.DataBuffer'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    static createPackedRasterSync(var0: java_awt_image_DataBuffer | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_awt_Point | null): java_awt_image_WritableRaster | null;
    /**
     * @param var0 original type: 'java.awt.image.DataBuffer'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int[]'
     * @param var5 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    static createPackedRaster(var0: java_awt_image_DataBuffer | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Integer | number)[] | null, var5: java_awt_Point | null): Promise<java_awt_image_WritableRaster | null>;
    /**
     * @param var0 original type: 'java.awt.image.DataBuffer'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int[]'
     * @param var5 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    static createPackedRasterSync(var0: java_awt_image_DataBuffer | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Integer | number)[] | null, var5: java_awt_Point | null): java_awt_image_WritableRaster | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    static createPackedRaster(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: java_awt_Point | null): Promise<java_awt_image_WritableRaster | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    static createPackedRasterSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: java_awt_Point | null): java_awt_image_WritableRaster | null;
    /**
     * @return original return type: 'int'
     */
    getSampleModelTranslateX(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getSampleModelTranslateXSync(): number;
    /**
     * @return original return type: 'int'
     */
    getSampleModelTranslateY(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getSampleModelTranslateYSync(): number;
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
     * @param var2 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    getDataElements(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: BasicOrJavaType | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    getDataElementsSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: BasicOrJavaType | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    getDataElements(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: BasicOrJavaType | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    getDataElementsSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: BasicOrJavaType | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'int[]'
     * @param var6 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    static createInterleavedRaster(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: (java_lang_Integer | number)[] | null, var6: java_awt_Point | null): Promise<java_awt_image_WritableRaster | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'int[]'
     * @param var6 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    static createInterleavedRasterSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: (java_lang_Integer | number)[] | null, var6: java_awt_Point | null): java_awt_image_WritableRaster | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    static createInterleavedRaster(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_awt_Point | null): Promise<java_awt_image_WritableRaster | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    static createInterleavedRasterSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_awt_Point | null): java_awt_image_WritableRaster | null;
    /**
     * @param var0 original type: 'java.awt.image.DataBuffer'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'int[]'
     * @param var6 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    static createInterleavedRaster(var0: java_awt_image_DataBuffer | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: (java_lang_Integer | number)[] | null, var6: java_awt_Point | null): Promise<java_awt_image_WritableRaster | null>;
    /**
     * @param var0 original type: 'java.awt.image.DataBuffer'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'int[]'
     * @param var6 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    static createInterleavedRasterSync(var0: java_awt_image_DataBuffer | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: (java_lang_Integer | number)[] | null, var6: java_awt_Point | null): java_awt_image_WritableRaster | null;
    /**
     * @return original return type: 'int'
     */
    getMinX(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getMinXSync(): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'int'
     */
    getSample(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'int'
     */
    getSampleSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number): number;
    /**
     * @return original return type: 'int'
     */
    getMinY(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getMinYSync(): number;
}
declare const Raster_base: typeof RasterClass;
/**
 * Class java.awt.image.Raster.
 *
 * This actually imports the java class for further use.
 * The class {@link RasterClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Raster extends Raster_base {
}
export default Raster;
//# sourceMappingURL=Raster.d.ts.map