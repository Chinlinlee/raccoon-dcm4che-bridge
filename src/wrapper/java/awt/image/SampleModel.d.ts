import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { Double as java_lang_Double } from "./../../lang/Double";
import { DataBuffer as java_awt_image_DataBuffer } from "./DataBuffer";
import { Float as java_lang_Float } from "./../../lang/Float";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Class as java_lang_Class } from "./../../lang/Class";
/**
 * This class just defines types, you should import {@link SampleModel} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class SampleModelClass extends JavaClass {
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'double[]'
     * @param var6 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'double[]'
     */
    getSamples(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: (java_lang_Double | number)[] | null, var6: java_awt_image_DataBuffer | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'double[]'
     * @param var6 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'double[]'
     */
    getSamplesSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: (java_lang_Double | number)[] | null, var6: java_awt_image_DataBuffer | null): (number)[] | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'int[]'
     * @param var6 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'int[]'
     */
    getSamples(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: (java_lang_Integer | number)[] | null, var6: java_awt_image_DataBuffer | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'int[]'
     * @param var6 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'int[]'
     */
    getSamplesSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: (java_lang_Integer | number)[] | null, var6: java_awt_image_DataBuffer | null): (number)[] | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'float[]'
     * @param var6 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'float[]'
     */
    getSamples(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: (java_lang_Float | number)[] | null, var6: java_awt_image_DataBuffer | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'float[]'
     * @param var6 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'float[]'
     */
    getSamplesSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: (java_lang_Float | number)[] | null, var6: java_awt_image_DataBuffer | null): (number)[] | null;
    /**
     * @return original return type: 'int'
     */
    getDataType(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getDataTypeSync(): number;
    /**
     * @return original return type: 'int[]'
     */
    getSampleSize(): Promise<(number)[] | null>;
    /**
     * @return original return type: 'int[]'
     */
    getSampleSizeSync(): (number)[] | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    getSampleSize(var0: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    getSampleSizeSync(var0: java_lang_Integer | number): number;
    /**
     * @return original return type: 'java.awt.image.DataBuffer'
     */
    createDataBuffer(): Promise<java_awt_image_DataBuffer | null>;
    /**
     * @return original return type: 'java.awt.image.DataBuffer'
     */
    createDataBufferSync(): java_awt_image_DataBuffer | null;
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
     * @return original return type: 'java.awt.image.SampleModel'
     */
    createCompatibleSampleModel(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<SampleModel | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.awt.image.SampleModel'
     */
    createCompatibleSampleModelSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): SampleModel | null;
    /**
     * @param var0 original type: 'int[]'
     * @return original return type: 'java.awt.image.SampleModel'
     */
    createSubsetSampleModel(var0: (java_lang_Integer | number)[] | null): Promise<SampleModel | null>;
    /**
     * @param var0 original type: 'int[]'
     * @return original return type: 'java.awt.image.SampleModel'
     */
    createSubsetSampleModelSync(var0: (java_lang_Integer | number)[] | null): SampleModel | null;
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
     * @param var4 original type: 'java.lang.Object'
     * @param var5 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'java.lang.Object'
     */
    getDataElements(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: BasicOrJavaType | null, var5: java_awt_image_DataBuffer | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'java.lang.Object'
     * @param var5 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'java.lang.Object'
     */
    getDataElementsSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: BasicOrJavaType | null, var5: java_awt_image_DataBuffer | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'java.lang.Object'
     */
    getDataElements(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: BasicOrJavaType | null, var3: java_awt_image_DataBuffer | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'java.lang.Object'
     */
    getDataElementsSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: BasicOrJavaType | null, var3: java_awt_image_DataBuffer | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'float[]'
     * @param var3 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'float[]'
     */
    getPixel(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Float | number)[] | null, var3: java_awt_image_DataBuffer | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'float[]'
     * @param var3 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'float[]'
     */
    getPixelSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Float | number)[] | null, var3: java_awt_image_DataBuffer | null): (number)[] | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'double[]'
     * @param var3 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'double[]'
     */
    getPixel(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Double | number)[] | null, var3: java_awt_image_DataBuffer | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'double[]'
     * @param var3 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'double[]'
     */
    getPixelSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Double | number)[] | null, var3: java_awt_image_DataBuffer | null): (number)[] | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int[]'
     * @param var3 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'int[]'
     */
    getPixel(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Integer | number)[] | null, var3: java_awt_image_DataBuffer | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int[]'
     * @param var3 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'int[]'
     */
    getPixelSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Integer | number)[] | null, var3: java_awt_image_DataBuffer | null): (number)[] | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'float[]'
     * @param var5 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'float[]'
     */
    getPixels(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Float | number)[] | null, var5: java_awt_image_DataBuffer | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'float[]'
     * @param var5 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'float[]'
     */
    getPixelsSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Float | number)[] | null, var5: java_awt_image_DataBuffer | null): (number)[] | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int[]'
     * @param var5 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'int[]'
     */
    getPixels(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Integer | number)[] | null, var5: java_awt_image_DataBuffer | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int[]'
     * @param var5 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'int[]'
     */
    getPixelsSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Integer | number)[] | null, var5: java_awt_image_DataBuffer | null): (number)[] | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'double[]'
     * @param var5 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'double[]'
     */
    getPixels(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Double | number)[] | null, var5: java_awt_image_DataBuffer | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'double[]'
     * @param var5 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'double[]'
     */
    getPixelsSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Double | number)[] | null, var5: java_awt_image_DataBuffer | null): (number)[] | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'int'
     */
    getSample(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_awt_image_DataBuffer | null): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'int'
     */
    getSampleSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_awt_image_DataBuffer | null): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'float'
     */
    getSampleFloat(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_awt_image_DataBuffer | null): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'float'
     */
    getSampleFloatSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_awt_image_DataBuffer | null): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'double'
     */
    getSampleDouble(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_awt_image_DataBuffer | null): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'double'
     */
    getSampleDoubleSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_awt_image_DataBuffer | null): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setDataElements(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: BasicOrJavaType | null, var3: java_awt_image_DataBuffer | null): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setDataElementsSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: BasicOrJavaType | null, var3: java_awt_image_DataBuffer | null): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'java.lang.Object'
     * @param var5 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setDataElements(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: BasicOrJavaType | null, var5: java_awt_image_DataBuffer | null): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'java.lang.Object'
     * @param var5 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setDataElementsSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: BasicOrJavaType | null, var5: java_awt_image_DataBuffer | null): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'float[]'
     * @param var5 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setPixels(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Float | number)[] | null, var5: java_awt_image_DataBuffer | null): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'float[]'
     * @param var5 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setPixelsSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Float | number)[] | null, var5: java_awt_image_DataBuffer | null): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'double[]'
     * @param var5 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setPixels(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Double | number)[] | null, var5: java_awt_image_DataBuffer | null): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'double[]'
     * @param var5 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setPixelsSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Double | number)[] | null, var5: java_awt_image_DataBuffer | null): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int[]'
     * @param var5 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setPixels(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Integer | number)[] | null, var5: java_awt_image_DataBuffer | null): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int[]'
     * @param var5 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setPixelsSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Integer | number)[] | null, var5: java_awt_image_DataBuffer | null): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'float[]'
     * @param var3 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setPixel(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Float | number)[] | null, var3: java_awt_image_DataBuffer | null): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'float[]'
     * @param var3 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setPixelSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Float | number)[] | null, var3: java_awt_image_DataBuffer | null): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int[]'
     * @param var3 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setPixel(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Integer | number)[] | null, var3: java_awt_image_DataBuffer | null): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int[]'
     * @param var3 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setPixelSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Integer | number)[] | null, var3: java_awt_image_DataBuffer | null): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'double[]'
     * @param var3 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setPixel(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Double | number)[] | null, var3: java_awt_image_DataBuffer | null): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'double[]'
     * @param var3 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setPixelSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Double | number)[] | null, var3: java_awt_image_DataBuffer | null): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setSample(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_awt_image_DataBuffer | null): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setSampleSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_awt_image_DataBuffer | null): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'float'
     * @param var4 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setSample(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Float | number, var4: java_awt_image_DataBuffer | null): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'float'
     * @param var4 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setSampleSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Float | number, var4: java_awt_image_DataBuffer | null): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'double'
     * @param var4 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setSample(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Double | number, var4: java_awt_image_DataBuffer | null): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'double'
     * @param var4 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setSampleSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Double | number, var4: java_awt_image_DataBuffer | null): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'float[]'
     * @param var6 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setSamples(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: (java_lang_Float | number)[] | null, var6: java_awt_image_DataBuffer | null): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'float[]'
     * @param var6 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setSamplesSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: (java_lang_Float | number)[] | null, var6: java_awt_image_DataBuffer | null): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'int[]'
     * @param var6 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setSamples(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: (java_lang_Integer | number)[] | null, var6: java_awt_image_DataBuffer | null): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'int[]'
     * @param var6 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setSamplesSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: (java_lang_Integer | number)[] | null, var6: java_awt_image_DataBuffer | null): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'double[]'
     * @param var6 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setSamples(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: (java_lang_Double | number)[] | null, var6: java_awt_image_DataBuffer | null): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'double[]'
     * @param var6 original type: 'java.awt.image.DataBuffer'
     * @return original return type: 'void'
     */
    setSamplesSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: (java_lang_Double | number)[] | null, var6: java_awt_image_DataBuffer | null): void;
    /**
     * @return original return type: 'int'
     */
    getHeight(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getHeightSync(): number;
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
     * @return original return type: 'java.lang.String'
     */
    toString(): string;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
}
declare const SampleModel_base: typeof SampleModelClass;
/**
 * Class java.awt.image.SampleModel.
 *
 * This actually imports the java class for further use.
 * The class {@link SampleModelClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class SampleModel extends SampleModel_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default SampleModel;
//# sourceMappingURL=SampleModel.d.ts.map