import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { ColorModel as java_awt_image_ColorModel } from "./ColorModel";
import { Hashtable as java_util_Hashtable } from "./../../util/Hashtable";
/**
 * This class just defines types, you should import {@link ImageConsumer} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ImageConsumerClass extends JavaClass {
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    imageComplete(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    imageCompleteSync(var0: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'java.awt.image.ColorModel'
     * @param var5 original type: 'byte[]'
     * @param var6 original type: 'int'
     * @param var7 original type: 'int'
     * @return original return type: 'void'
     */
    setPixels(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_awt_image_ColorModel | null, var5: Buffer | null, var6: java_lang_Integer | number, var7: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'java.awt.image.ColorModel'
     * @param var5 original type: 'byte[]'
     * @param var6 original type: 'int'
     * @param var7 original type: 'int'
     * @return original return type: 'void'
     */
    setPixelsSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_awt_image_ColorModel | null, var5: Buffer | null, var6: java_lang_Integer | number, var7: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'java.awt.image.ColorModel'
     * @param var5 original type: 'int[]'
     * @param var6 original type: 'int'
     * @param var7 original type: 'int'
     * @return original return type: 'void'
     */
    setPixels(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_awt_image_ColorModel | null, var5: (java_lang_Integer | number)[] | null, var6: java_lang_Integer | number, var7: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'java.awt.image.ColorModel'
     * @param var5 original type: 'int[]'
     * @param var6 original type: 'int'
     * @param var7 original type: 'int'
     * @return original return type: 'void'
     */
    setPixelsSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_awt_image_ColorModel | null, var5: (java_lang_Integer | number)[] | null, var6: java_lang_Integer | number, var7: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.util.Hashtable'
     * @return original return type: 'void'
     */
    setProperties(var0: java_util_Hashtable | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.Hashtable'
     * @return original return type: 'void'
     */
    setPropertiesSync(var0: java_util_Hashtable | null): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    setDimensions(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    setDimensionsSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.awt.image.ColorModel'
     * @return original return type: 'void'
     */
    setColorModel(var0: java_awt_image_ColorModel | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.image.ColorModel'
     * @return original return type: 'void'
     */
    setColorModelSync(var0: java_awt_image_ColorModel | null): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setHints(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setHintsSync(var0: java_lang_Integer | number): void;
    /**
     * Original type: 'int'
     */
    static readonly STATICIMAGEDONE: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SINGLEPASS: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly RANDOMPIXELORDER: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TOPDOWNLEFTRIGHT: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly IMAGEERROR: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SINGLEFRAMEDONE: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SINGLEFRAME: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly COMPLETESCANLINES: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly IMAGEABORTED: java_lang_Integer | number;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createImageConsumerProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface ImageConsumerInterface {
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    imageComplete(var0: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'java.awt.image.ColorModel'
     * @param var5 original type: 'byte[]'
     * @param var6 original type: 'int'
     * @param var7 original type: 'int'
     * @return original return type: 'void'
     */
    setPixels(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_awt_image_ColorModel | null, var5: Buffer | null, var6: java_lang_Integer | number, var7: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'java.awt.image.ColorModel'
     * @param var5 original type: 'int[]'
     * @param var6 original type: 'int'
     * @param var7 original type: 'int'
     * @return original return type: 'void'
     */
    setPixels(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_awt_image_ColorModel | null, var5: (java_lang_Integer | number)[] | null, var6: java_lang_Integer | number, var7: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.util.Hashtable'
     * @return original return type: 'void'
     */
    setProperties(var0: java_util_Hashtable | null): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    setDimensions(var0: java_lang_Integer | number, var1: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.awt.image.ColorModel'
     * @return original return type: 'void'
     */
    setColorModel(var0: java_awt_image_ColorModel | null): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setHints(var0: java_lang_Integer | number): void;
}
/**
 * Create a proxy for the {@link ImageConsumer} interface.
 * All required methods in {@link ImageConsumerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createImageConsumerProxy(methods: ImageConsumerInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<ImageConsumerInterface>;
declare const ImageConsumer_base: typeof ImageConsumerClass;
/**
 * Class java.awt.image.ImageConsumer.
 *
 * This actually imports the java class for further use.
 * The class {@link ImageConsumerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ImageConsumer extends ImageConsumer_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default ImageConsumer;
