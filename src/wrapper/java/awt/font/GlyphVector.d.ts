import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../lang/Class";
import { Point2D as java_awt_geom_Point2D } from "./../geom/Point2D";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Rectangle as java_awt_Rectangle } from "./../Rectangle";
import { FontRenderContext as java_awt_font_FontRenderContext } from "./FontRenderContext";
import { Float as java_lang_Float } from "./../../lang/Float";
import { Rectangle2D as java_awt_geom_Rectangle2D } from "./../geom/Rectangle2D";
import { Shape as java_awt_Shape } from "./../Shape";
import { GlyphJustificationInfo as java_awt_font_GlyphJustificationInfo } from "./GlyphJustificationInfo";
import { GlyphMetrics as java_awt_font_GlyphMetrics } from "./GlyphMetrics";
import { AffineTransform as java_awt_geom_AffineTransform } from "./../geom/AffineTransform";
import { Font as java_awt_Font } from "./../Font";
/**
 * This class just defines types, you should import {@link GlyphVector} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class GlyphVectorClass extends JavaClass {
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
     * @return original return type: 'java.awt.geom.Point2D'
     */
    getGlyphPosition(var0: java_lang_Integer | number): Promise<java_awt_geom_Point2D | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.awt.geom.Point2D'
     */
    getGlyphPositionSync(var0: java_lang_Integer | number): java_awt_geom_Point2D | null;
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
     * @param var1 original type: 'java.awt.font.FontRenderContext'
     * @param var2 original type: 'float'
     * @param var3 original type: 'float'
     * @return original return type: 'java.awt.Rectangle'
     */
    getGlyphPixelBounds(var0: java_lang_Integer | number, var1: java_awt_font_FontRenderContext | null, var2: java_lang_Float | number, var3: java_lang_Float | number): Promise<java_awt_Rectangle | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.awt.font.FontRenderContext'
     * @param var2 original type: 'float'
     * @param var3 original type: 'float'
     * @return original return type: 'java.awt.Rectangle'
     */
    getGlyphPixelBoundsSync(var0: java_lang_Integer | number, var1: java_awt_font_FontRenderContext | null, var2: java_lang_Float | number, var3: java_lang_Float | number): java_awt_Rectangle | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int[]'
     * @return original return type: 'int[]'
     */
    getGlyphCharIndices(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Integer | number)[] | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int[]'
     * @return original return type: 'int[]'
     */
    getGlyphCharIndicesSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Integer | number)[] | null): (number)[] | null;
    /**
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    getLogicalBounds(): Promise<java_awt_geom_Rectangle2D | null>;
    /**
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    getLogicalBoundsSync(): java_awt_geom_Rectangle2D | null;
    /**
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    getVisualBounds(): Promise<java_awt_geom_Rectangle2D | null>;
    /**
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    getVisualBoundsSync(): java_awt_geom_Rectangle2D | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    getGlyphCharIndex(var0: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    getGlyphCharIndexSync(var0: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'float'
     * @param var1 original type: 'float'
     * @return original return type: 'java.awt.Shape'
     */
    getOutline(var0: java_lang_Float | number, var1: java_lang_Float | number): Promise<java_awt_Shape | null>;
    /**
     * @param var0 original type: 'float'
     * @param var1 original type: 'float'
     * @return original return type: 'java.awt.Shape'
     */
    getOutlineSync(var0: java_lang_Float | number, var1: java_lang_Float | number): java_awt_Shape | null;
    /**
     * @return original return type: 'java.awt.Shape'
     */
    getOutline(): Promise<java_awt_Shape | null>;
    /**
     * @return original return type: 'java.awt.Shape'
     */
    getOutlineSync(): java_awt_Shape | null;
    /**
     * @return original return type: 'void'
     */
    performDefaultLayout(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    performDefaultLayoutSync(): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.awt.font.GlyphJustificationInfo'
     */
    getGlyphJustificationInfo(var0: java_lang_Integer | number): Promise<java_awt_font_GlyphJustificationInfo | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.awt.font.GlyphJustificationInfo'
     */
    getGlyphJustificationInfoSync(var0: java_lang_Integer | number): java_awt_font_GlyphJustificationInfo | null;
    /**
     * @return original return type: 'java.awt.font.FontRenderContext'
     */
    getFontRenderContext(): Promise<java_awt_font_FontRenderContext | null>;
    /**
     * @return original return type: 'java.awt.font.FontRenderContext'
     */
    getFontRenderContextSync(): java_awt_font_FontRenderContext | null;
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
     * @return original return type: 'java.awt.font.GlyphMetrics'
     */
    getGlyphMetrics(var0: java_lang_Integer | number): Promise<java_awt_font_GlyphMetrics | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.awt.font.GlyphMetrics'
     */
    getGlyphMetricsSync(var0: java_lang_Integer | number): java_awt_font_GlyphMetrics | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.awt.Shape'
     */
    getGlyphVisualBounds(var0: java_lang_Integer | number): Promise<java_awt_Shape | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.awt.Shape'
     */
    getGlyphVisualBoundsSync(var0: java_lang_Integer | number): java_awt_Shape | null;
    /**
     * @return original return type: 'int'
     */
    getLayoutFlags(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getLayoutFlagsSync(): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int[]'
     * @return original return type: 'int[]'
     */
    getGlyphCodes(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Integer | number)[] | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int[]'
     * @return original return type: 'int[]'
     */
    getGlyphCodesSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Integer | number)[] | null): (number)[] | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'void'
     */
    setGlyphPosition(var0: java_lang_Integer | number, var1: java_awt_geom_Point2D | null): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'void'
     */
    setGlyphPositionSync(var0: java_lang_Integer | number, var1: java_awt_geom_Point2D | null): void;
    /**
     * @param var0 original type: 'java.awt.font.FontRenderContext'
     * @param var1 original type: 'float'
     * @param var2 original type: 'float'
     * @return original return type: 'java.awt.Rectangle'
     */
    getPixelBounds(var0: java_awt_font_FontRenderContext | null, var1: java_lang_Float | number, var2: java_lang_Float | number): Promise<java_awt_Rectangle | null>;
    /**
     * @param var0 original type: 'java.awt.font.FontRenderContext'
     * @param var1 original type: 'float'
     * @param var2 original type: 'float'
     * @return original return type: 'java.awt.Rectangle'
     */
    getPixelBoundsSync(var0: java_awt_font_FontRenderContext | null, var1: java_lang_Float | number, var2: java_lang_Float | number): java_awt_Rectangle | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.awt.Shape'
     */
    getGlyphLogicalBounds(var0: java_lang_Integer | number): Promise<java_awt_Shape | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.awt.Shape'
     */
    getGlyphLogicalBoundsSync(var0: java_lang_Integer | number): java_awt_Shape | null;
    /**
     * @return original return type: 'int'
     */
    getNumGlyphs(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getNumGlyphsSync(): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.awt.geom.AffineTransform'
     */
    getGlyphTransform(var0: java_lang_Integer | number): Promise<java_awt_geom_AffineTransform | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.awt.geom.AffineTransform'
     */
    getGlyphTransformSync(var0: java_lang_Integer | number): java_awt_geom_AffineTransform | null;
    /**
     * @param var0 original type: 'java.awt.font.GlyphVector'
     * @return original return type: 'boolean'
     */
    equals(var0: GlyphVectorClass | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.awt.font.GlyphVector'
     * @return original return type: 'boolean'
     */
    equalsSync(var0: GlyphVectorClass | null): boolean;
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
     * @return original return type: 'java.awt.Font'
     */
    getFont(): Promise<java_awt_Font | null>;
    /**
     * @return original return type: 'java.awt.Font'
     */
    getFontSync(): java_awt_Font | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    getGlyphCode(var0: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    getGlyphCodeSync(var0: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    getGlyphPositions(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Float | number)[] | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    getGlyphPositionsSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Float | number)[] | null): (number)[] | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.awt.Shape'
     */
    getGlyphOutline(var0: java_lang_Integer | number): Promise<java_awt_Shape | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.awt.Shape'
     */
    getGlyphOutlineSync(var0: java_lang_Integer | number): java_awt_Shape | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'float'
     * @param var2 original type: 'float'
     * @return original return type: 'java.awt.Shape'
     */
    getGlyphOutline(var0: java_lang_Integer | number, var1: java_lang_Float | number, var2: java_lang_Float | number): Promise<java_awt_Shape | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'float'
     * @param var2 original type: 'float'
     * @return original return type: 'java.awt.Shape'
     */
    getGlyphOutlineSync(var0: java_lang_Integer | number, var1: java_lang_Float | number, var2: java_lang_Float | number): java_awt_Shape | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.awt.geom.AffineTransform'
     * @return original return type: 'void'
     */
    setGlyphTransform(var0: java_lang_Integer | number, var1: java_awt_geom_AffineTransform | null): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.awt.geom.AffineTransform'
     * @return original return type: 'void'
     */
    setGlyphTransformSync(var0: java_lang_Integer | number, var1: java_awt_geom_AffineTransform | null): void;
    /**
     * Original type: 'int'
     */
    static readonly FLAG_HAS_TRANSFORMS: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly FLAG_HAS_POSITION_ADJUSTMENTS: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly FLAG_MASK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly FLAG_COMPLEX_GLYPHS: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly FLAG_RUN_RTL: java_lang_Integer | number;
}
declare const GlyphVector_base: typeof GlyphVectorClass;
/**
 * Class java.awt.font.GlyphVector.
 *
 * This actually imports the java class for further use.
 * The class {@link GlyphVectorClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class GlyphVector extends GlyphVector_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default GlyphVector;
//# sourceMappingURL=GlyphVector.d.ts.map