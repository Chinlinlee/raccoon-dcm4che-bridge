import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../lang/Class";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { PaintContext as java_awt_PaintContext } from "./PaintContext";
import { ColorModel as java_awt_image_ColorModel } from "./image/ColorModel";
import { Rectangle as java_awt_Rectangle } from "./Rectangle";
import { Rectangle2D as java_awt_geom_Rectangle2D } from "./geom/Rectangle2D";
import { AffineTransform as java_awt_geom_AffineTransform } from "./geom/AffineTransform";
import { RenderingHints as java_awt_RenderingHints } from "./RenderingHints";
import { ColorSpace as java_awt_color_ColorSpace } from "./color/ColorSpace";
import { Float as java_lang_Float } from "./../lang/Float";
import { Boolean as java_lang_Boolean } from "./../lang/Boolean";
/**
 * This class just defines types, you should import {@link Color} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ColorClass extends JavaClass {
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
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.awt.Color'
     */
    static decode(var0: string | null): Promise<Color | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.awt.Color'
     */
    static decodeSync(var0: string | null): Color | null;
    /**
     * @param var0 original type: 'java.awt.image.ColorModel'
     * @param var1 original type: 'java.awt.Rectangle'
     * @param var2 original type: 'java.awt.geom.Rectangle2D'
     * @param var3 original type: 'java.awt.geom.AffineTransform'
     * @param var4 original type: 'java.awt.RenderingHints'
     * @return original return type: 'java.awt.PaintContext'
     */
    createContext(var0: java_awt_image_ColorModel | null, var1: java_awt_Rectangle | null, var2: java_awt_geom_Rectangle2D | null, var3: java_awt_geom_AffineTransform | null, var4: java_awt_RenderingHints | null): Promise<java_awt_PaintContext | null>;
    /**
     * @param var0 original type: 'java.awt.image.ColorModel'
     * @param var1 original type: 'java.awt.Rectangle'
     * @param var2 original type: 'java.awt.geom.Rectangle2D'
     * @param var3 original type: 'java.awt.geom.AffineTransform'
     * @param var4 original type: 'java.awt.RenderingHints'
     * @return original return type: 'java.awt.PaintContext'
     */
    createContextSync(var0: java_awt_image_ColorModel | null, var1: java_awt_Rectangle | null, var2: java_awt_geom_Rectangle2D | null, var3: java_awt_geom_AffineTransform | null, var4: java_awt_RenderingHints | null): java_awt_PaintContext | null;
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
    getAlpha(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getAlphaSync(): number;
    /**
     * @param var0 original type: 'java.awt.color.ColorSpace'
     * @param var1 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    getColorComponents(var0: java_awt_color_ColorSpace | null, var1: (java_lang_Float | number)[] | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'java.awt.color.ColorSpace'
     * @param var1 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    getColorComponentsSync(var0: java_awt_color_ColorSpace | null, var1: (java_lang_Float | number)[] | null): (number)[] | null;
    /**
     * @param var0 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    getColorComponents(var0: (java_lang_Float | number)[] | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    getColorComponentsSync(var0: (java_lang_Float | number)[] | null): (number)[] | null;
    /**
     * @return original return type: 'java.awt.Color'
     */
    darker(): Promise<Color | null>;
    /**
     * @return original return type: 'java.awt.Color'
     */
    darkerSync(): Color | null;
    /**
     * @return original return type: 'int'
     */
    getRed(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getRedSync(): number;
    /**
     * @param var0 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    getRGBComponents(var0: (java_lang_Float | number)[] | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    getRGBComponentsSync(var0: (java_lang_Float | number)[] | null): (number)[] | null;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @param var0 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    getComponents(var0: (java_lang_Float | number)[] | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    getComponentsSync(var0: (java_lang_Float | number)[] | null): (number)[] | null;
    /**
     * @param var0 original type: 'java.awt.color.ColorSpace'
     * @param var1 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    getComponents(var0: java_awt_color_ColorSpace | null, var1: (java_lang_Float | number)[] | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'java.awt.color.ColorSpace'
     * @param var1 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    getComponentsSync(var0: java_awt_color_ColorSpace | null, var1: (java_lang_Float | number)[] | null): (number)[] | null;
    /**
     * @return original return type: 'int'
     */
    getRGB(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getRGBSync(): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    static RGBtoHSB(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: (java_lang_Float | number)[] | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    static RGBtoHSBSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: (java_lang_Float | number)[] | null): (number)[] | null;
    /**
     * @param var0 original type: 'float'
     * @param var1 original type: 'float'
     * @param var2 original type: 'float'
     * @return original return type: 'java.awt.Color'
     */
    static getHSBColor(var0: java_lang_Float | number, var1: java_lang_Float | number, var2: java_lang_Float | number): Promise<Color | null>;
    /**
     * @param var0 original type: 'float'
     * @param var1 original type: 'float'
     * @param var2 original type: 'float'
     * @return original return type: 'java.awt.Color'
     */
    static getHSBColorSync(var0: java_lang_Float | number, var1: java_lang_Float | number, var2: java_lang_Float | number): Color | null;
    /**
     * @return original return type: 'java.awt.Color'
     */
    brighter(): Promise<Color | null>;
    /**
     * @return original return type: 'java.awt.Color'
     */
    brighterSync(): Color | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'java.awt.Color'
     */
    static getColor(var0: string | null, var1: java_lang_Integer | number): Promise<Color | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'java.awt.Color'
     */
    static getColorSync(var0: string | null, var1: java_lang_Integer | number): Color | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.awt.Color'
     * @return original return type: 'java.awt.Color'
     */
    static getColor(var0: string | null, var1: ColorClass | null): Promise<Color | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.awt.Color'
     * @return original return type: 'java.awt.Color'
     */
    static getColorSync(var0: string | null, var1: ColorClass | null): Color | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.awt.Color'
     */
    static getColor(var0: string | null): Promise<Color | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.awt.Color'
     */
    static getColorSync(var0: string | null): Color | null;
    /**
     * @param var0 original type: 'float'
     * @param var1 original type: 'float'
     * @param var2 original type: 'float'
     * @return original return type: 'int'
     */
    static HSBtoRGB(var0: java_lang_Float | number, var1: java_lang_Float | number, var2: java_lang_Float | number): Promise<number>;
    /**
     * @param var0 original type: 'float'
     * @param var1 original type: 'float'
     * @param var2 original type: 'float'
     * @return original return type: 'int'
     */
    static HSBtoRGBSync(var0: java_lang_Float | number, var1: java_lang_Float | number, var2: java_lang_Float | number): number;
    /**
     * @return original return type: 'java.awt.color.ColorSpace'
     */
    getColorSpace(): Promise<java_awt_color_ColorSpace | null>;
    /**
     * @return original return type: 'java.awt.color.ColorSpace'
     */
    getColorSpaceSync(): java_awt_color_ColorSpace | null;
    /**
     * @return original return type: 'int'
     */
    getBlue(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getBlueSync(): number;
    /**
     * @param var0 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    getRGBColorComponents(var0: (java_lang_Float | number)[] | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    getRGBColorComponentsSync(var0: (java_lang_Float | number)[] | null): (number)[] | null;
    /**
     * @return original return type: 'int'
     */
    getTransparency(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getTransparencySync(): number;
    /**
     * @return original return type: 'int'
     */
    getGreen(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getGreenSync(): number;
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
     * Original type: 'java.awt.Color'
     */
    static readonly lightGray: ColorClass | null;
    /**
     * Original type: 'java.awt.Color'
     */
    static readonly magenta: ColorClass | null;
    /**
     * Original type: 'java.awt.Color'
     */
    static readonly GRAY: ColorClass | null;
    /**
     * Original type: 'java.awt.Color'
     */
    static readonly pink: ColorClass | null;
    /**
     * Original type: 'java.awt.Color'
     */
    static readonly BLUE: ColorClass | null;
    /**
     * Original type: 'java.awt.Color'
     */
    static readonly yellow: ColorClass | null;
    /**
     * Original type: 'java.awt.Color'
     */
    static readonly cyan: ColorClass | null;
    /**
     * Original type: 'java.awt.Color'
     */
    static readonly red: ColorClass | null;
    /**
     * Original type: 'java.awt.Color'
     */
    static readonly gray: ColorClass | null;
    /**
     * Original type: 'java.awt.Color'
     */
    static readonly PINK: ColorClass | null;
    /**
     * Original type: 'java.awt.Color'
     */
    static readonly white: ColorClass | null;
    /**
     * Original type: 'int'
     */
    static readonly TRANSLUCENT: java_lang_Integer | number;
    /**
     * Original type: 'java.awt.Color'
     */
    static readonly BLACK: ColorClass | null;
    /**
     * Original type: 'java.awt.Color'
     */
    static readonly ORANGE: ColorClass | null;
    /**
     * Original type: 'java.awt.Color'
     */
    static readonly WHITE: ColorClass | null;
    /**
     * Original type: 'java.awt.Color'
     */
    static readonly green: ColorClass | null;
    /**
     * Original type: 'java.awt.Color'
     */
    static readonly black: ColorClass | null;
    /**
     * Original type: 'int'
     */
    static readonly BITMASK: java_lang_Integer | number;
    /**
     * Original type: 'java.awt.Color'
     */
    static readonly GREEN: ColorClass | null;
    /**
     * Original type: 'java.awt.Color'
     */
    static readonly RED: ColorClass | null;
    /**
     * Original type: 'java.awt.Color'
     */
    static readonly orange: ColorClass | null;
    /**
     * Original type: 'java.awt.Color'
     */
    static readonly LIGHT_GRAY: ColorClass | null;
    /**
     * Original type: 'java.awt.Color'
     */
    static readonly blue: ColorClass | null;
    /**
     * Original type: 'int'
     */
    static readonly OPAQUE: java_lang_Integer | number;
    /**
     * Original type: 'java.awt.Color'
     */
    static readonly darkGray: ColorClass | null;
    /**
     * Original type: 'java.awt.Color'
     */
    static readonly MAGENTA: ColorClass | null;
    /**
     * Original type: 'java.awt.Color'
     */
    static readonly YELLOW: ColorClass | null;
    /**
     * Original type: 'java.awt.Color'
     */
    static readonly DARK_GRAY: ColorClass | null;
    /**
     * Original type: 'java.awt.Color'
     */
    static readonly CYAN: ColorClass | null;
    /**
     * @param var0 original type: 'int'
     */
    constructor(var0: java_lang_Integer | number);
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.awt.Color'
     */
    static newInstanceAsync(var0: java_lang_Integer | number): Promise<Color>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     */
    constructor(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number);
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'java.awt.Color'
     */
    static newInstanceAsync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number): Promise<Color>;
    /**
     * @param var0 original type: 'java.awt.color.ColorSpace'
     * @param var1 original type: 'float[]'
     * @param var2 original type: 'float'
     */
    constructor(var0: java_awt_color_ColorSpace | null, var1: (java_lang_Float | number)[] | null, var2: java_lang_Float | number);
    /**
     * @param var0 original type: 'java.awt.color.ColorSpace'
     * @param var1 original type: 'float[]'
     * @param var2 original type: 'float'
     * @return original return type: 'java.awt.Color'
     */
    static newInstanceAsync(var0: java_awt_color_ColorSpace | null, var1: (java_lang_Float | number)[] | null, var2: java_lang_Float | number): Promise<Color>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     */
    constructor(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number);
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.awt.Color'
     */
    static newInstanceAsync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<Color>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'boolean'
     */
    constructor(var0: java_lang_Integer | number, var1: java_lang_Boolean | boolean);
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'boolean'
     * @return original return type: 'java.awt.Color'
     */
    static newInstanceAsync(var0: java_lang_Integer | number, var1: java_lang_Boolean | boolean): Promise<Color>;
    /**
     * @param var0 original type: 'float'
     * @param var1 original type: 'float'
     * @param var2 original type: 'float'
     */
    constructor(var0: java_lang_Float | number, var1: java_lang_Float | number, var2: java_lang_Float | number);
    /**
     * @param var0 original type: 'float'
     * @param var1 original type: 'float'
     * @param var2 original type: 'float'
     * @return original return type: 'java.awt.Color'
     */
    static newInstanceAsync(var0: java_lang_Float | number, var1: java_lang_Float | number, var2: java_lang_Float | number): Promise<Color>;
    /**
     * @param var0 original type: 'float'
     * @param var1 original type: 'float'
     * @param var2 original type: 'float'
     * @param var3 original type: 'float'
     */
    constructor(var0: java_lang_Float | number, var1: java_lang_Float | number, var2: java_lang_Float | number, var3: java_lang_Float | number);
    /**
     * @param var0 original type: 'float'
     * @param var1 original type: 'float'
     * @param var2 original type: 'float'
     * @param var3 original type: 'float'
     * @return original return type: 'java.awt.Color'
     */
    static newInstanceAsync(var0: java_lang_Float | number, var1: java_lang_Float | number, var2: java_lang_Float | number, var3: java_lang_Float | number): Promise<Color>;
}
declare const Color_base: typeof ColorClass;
/**
 * Class java.awt.Color.
 *
 * This actually imports the java class for further use.
 * The class {@link ColorClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Color extends Color_base {
}
export default Color;
