import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { ColorModel as java_awt_image_ColorModel } from "./image/ColorModel";
import { Raster as java_awt_image_Raster } from "./image/Raster";
import { Integer as java_lang_Integer } from "./../lang/Integer";
/**
 * This class just defines types, you should import {@link PaintContext} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PaintContextClass extends JavaClass {
    /**
     * @return original return type: 'java.awt.image.ColorModel'
     */
    getColorModel(): Promise<java_awt_image_ColorModel | null>;
    /**
     * @return original return type: 'java.awt.image.ColorModel'
     */
    getColorModelSync(): java_awt_image_ColorModel | null;
    /**
     * @return original return type: 'void'
     */
    dispose(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    disposeSync(): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'java.awt.image.Raster'
     */
    getRaster(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number): Promise<java_awt_image_Raster | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'java.awt.image.Raster'
     */
    getRasterSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number): java_awt_image_Raster | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createPaintContextProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface PaintContextInterface {
    /**
     * @return original return type: 'java.awt.image.ColorModel'
     */
    getColorModel(): java_awt_image_ColorModel | null;
    /**
     * @return original return type: 'void'
     */
    dispose(): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'java.awt.image.Raster'
     */
    getRaster(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number): java_awt_image_Raster | null;
}
/**
 * Create a proxy for the {@link PaintContext} interface.
 * All required methods in {@link PaintContextInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createPaintContextProxy(methods: PaintContextInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<PaintContextInterface>;
declare const PaintContext_base: typeof PaintContextClass;
/**
 * Class java.awt.PaintContext.
 *
 * This actually imports the java class for further use.
 * The class {@link PaintContextClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PaintContext extends PaintContext_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default PaintContext;
