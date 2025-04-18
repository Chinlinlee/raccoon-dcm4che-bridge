import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./../../lang/Class";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { ImageObserver as java_awt_image_ImageObserver, ImageObserverInterface as java_awt_image_ImageObserverInterface } from "./ImageObserver";
import { ImageCapabilities as java_awt_ImageCapabilities } from "./../ImageCapabilities";
import { GraphicsConfiguration as java_awt_GraphicsConfiguration } from "./../GraphicsConfiguration";
import { BufferedImage as java_awt_image_BufferedImage } from "./BufferedImage";
import { Float as java_lang_Float } from "./../../lang/Float";
import { Image as java_awt_Image } from "./../Image";
import { ImageProducer as java_awt_image_ImageProducer } from "./ImageProducer";
import { Graphics2D as java_awt_Graphics2D } from "./../Graphics2D";
import { Graphics as java_awt_Graphics } from "./../Graphics";
/**
 * This class just defines types, you should import {@link VolatileImage} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class VolatileImageClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
    /**
     * @return original return type: 'boolean'
     */
    contentsLost(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    contentsLostSync(): boolean;
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
     * @param var1 original type: 'java.awt.image.ImageObserver'
     * @return original return type: 'java.lang.Object'
     */
    getProperty(var0: string | null, var1: java_awt_image_ImageObserver | JavaInterfaceProxy<java_awt_image_ImageObserverInterface> | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.awt.image.ImageObserver'
     * @return original return type: 'java.lang.Object'
     */
    getPropertySync(var0: string | null, var1: java_awt_image_ImageObserver | JavaInterfaceProxy<java_awt_image_ImageObserverInterface> | null): BasicOrJavaType | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'java.awt.ImageCapabilities'
     */
    getCapabilities(): Promise<java_awt_ImageCapabilities | null>;
    /**
     * @return original return type: 'java.awt.ImageCapabilities'
     */
    getCapabilitiesSync(): java_awt_ImageCapabilities | null;
    /**
     * @param var0 original type: 'java.awt.GraphicsConfiguration'
     * @return original return type: 'java.awt.ImageCapabilities'
     */
    getCapabilities(var0: java_awt_GraphicsConfiguration | null): Promise<java_awt_ImageCapabilities | null>;
    /**
     * @param var0 original type: 'java.awt.GraphicsConfiguration'
     * @return original return type: 'java.awt.ImageCapabilities'
     */
    getCapabilitiesSync(var0: java_awt_GraphicsConfiguration | null): java_awt_ImageCapabilities | null;
    /**
     * @return original return type: 'int'
     */
    getWidth(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getWidthSync(): number;
    /**
     * @param var0 original type: 'java.awt.image.ImageObserver'
     * @return original return type: 'int'
     */
    getWidth(var0: java_awt_image_ImageObserver | JavaInterfaceProxy<java_awt_image_ImageObserverInterface> | null): Promise<number>;
    /**
     * @param var0 original type: 'java.awt.image.ImageObserver'
     * @return original return type: 'int'
     */
    getWidthSync(var0: java_awt_image_ImageObserver | JavaInterfaceProxy<java_awt_image_ImageObserverInterface> | null): number;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'int'
     */
    getTransparency(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getTransparencySync(): number;
    /**
     * @return original return type: 'java.awt.image.BufferedImage'
     */
    getSnapshot(): Promise<java_awt_image_BufferedImage | null>;
    /**
     * @return original return type: 'java.awt.image.BufferedImage'
     */
    getSnapshotSync(): java_awt_image_BufferedImage | null;
    /**
     * @param var0 original type: 'float'
     * @return original return type: 'void'
     */
    setAccelerationPriority(var0: java_lang_Float | number): Promise<void>;
    /**
     * @param var0 original type: 'float'
     * @return original return type: 'void'
     */
    setAccelerationPrioritySync(var0: java_lang_Float | number): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.awt.Image'
     */
    getScaledInstance(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<java_awt_Image | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.awt.Image'
     */
    getScaledInstanceSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number): java_awt_Image | null;
    /**
     * @return original return type: 'int'
     */
    getHeight(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getHeightSync(): number;
    /**
     * @param var0 original type: 'java.awt.image.ImageObserver'
     * @return original return type: 'int'
     */
    getHeight(var0: java_awt_image_ImageObserver | JavaInterfaceProxy<java_awt_image_ImageObserverInterface> | null): Promise<number>;
    /**
     * @param var0 original type: 'java.awt.image.ImageObserver'
     * @return original return type: 'int'
     */
    getHeightSync(var0: java_awt_image_ImageObserver | JavaInterfaceProxy<java_awt_image_ImageObserverInterface> | null): number;
    /**
     * @return original return type: 'void'
     */
    flush(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    flushSync(): void;
    /**
     * @return original return type: 'java.awt.image.ImageProducer'
     */
    getSource(): Promise<java_awt_image_ImageProducer | null>;
    /**
     * @return original return type: 'java.awt.image.ImageProducer'
     */
    getSourceSync(): java_awt_image_ImageProducer | null;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
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
     * @return original return type: 'float'
     */
    getAccelerationPriority(): Promise<number>;
    /**
     * @return original return type: 'float'
     */
    getAccelerationPrioritySync(): number;
    /**
     * @return original return type: 'java.awt.Graphics2D'
     */
    createGraphics(): Promise<java_awt_Graphics2D | null>;
    /**
     * @return original return type: 'java.awt.Graphics2D'
     */
    createGraphicsSync(): java_awt_Graphics2D | null;
    /**
     * @return original return type: 'java.awt.Graphics'
     */
    getGraphics(): Promise<java_awt_Graphics | null>;
    /**
     * @return original return type: 'java.awt.Graphics'
     */
    getGraphicsSync(): java_awt_Graphics | null;
    /**
     * @param var0 original type: 'java.awt.GraphicsConfiguration'
     * @return original return type: 'int'
     */
    validate(var0: java_awt_GraphicsConfiguration | null): Promise<number>;
    /**
     * @param var0 original type: 'java.awt.GraphicsConfiguration'
     * @return original return type: 'int'
     */
    validateSync(var0: java_awt_GraphicsConfiguration | null): number;
    /**
     * Original type: 'int'
     */
    static readonly OPAQUE: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SCALE_DEFAULT: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TRANSLUCENT: java_lang_Integer | number;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly UndefinedProperty: BasicOrJavaType | null;
    /**
     * Original type: 'int'
     */
    static readonly IMAGE_OK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly BITMASK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SCALE_FAST: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SCALE_AREA_AVERAGING: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly IMAGE_RESTORED: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SCALE_SMOOTH: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SCALE_REPLICATE: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly IMAGE_INCOMPATIBLE: java_lang_Integer | number;
}
declare const VolatileImage_base: typeof VolatileImageClass;
/**
 * Class java.awt.image.VolatileImage.
 *
 * This actually imports the java class for further use.
 * The class {@link VolatileImageClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class VolatileImage extends VolatileImage_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default VolatileImage;
