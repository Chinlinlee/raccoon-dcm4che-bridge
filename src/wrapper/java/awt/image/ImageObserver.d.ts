import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Image as java_awt_Image } from "./../Image";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
/**
 * This class just defines types, you should import {@link ImageObserver} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ImageObserverClass extends JavaClass {
    /**
     * @param var0 original type: 'java.awt.Image'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'int'
     * @return original return type: 'boolean'
     */
    imageUpdate(var0: java_awt_Image | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: java_lang_Integer | number): Promise<boolean>;
    /**
     * @param var0 original type: 'java.awt.Image'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'int'
     * @return original return type: 'boolean'
     */
    imageUpdateSync(var0: java_awt_Image | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: java_lang_Integer | number): boolean;
    /**
     * Original type: 'int'
     */
    static readonly ABORT: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly PROPERTIES: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SOMEBITS: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly ALLBITS: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly WIDTH: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly ERROR: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly HEIGHT: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly FRAMEBITS: java_lang_Integer | number;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createImageObserverProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface ImageObserverInterface {
    /**
     * @param var0 original type: 'java.awt.Image'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'int'
     * @return original return type: 'boolean'
     */
    imageUpdate(var0: java_awt_Image | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: java_lang_Integer | number): boolean;
}
/**
 * Create a proxy for the {@link ImageObserver} interface.
 * All required methods in {@link ImageObserverInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createImageObserverProxy(methods: ImageObserverInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<ImageObserverInterface>;
declare const ImageObserver_base: typeof ImageObserverClass;
/**
 * Class java.awt.image.ImageObserver.
 *
 * This actually imports the java class for further use.
 * The class {@link ImageObserverClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ImageObserver extends ImageObserver_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default ImageObserver;
//# sourceMappingURL=ImageObserver.d.ts.map