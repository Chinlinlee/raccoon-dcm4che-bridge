/// <reference types="node" />
/// <reference types="node" />
import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./../lang/Class";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { Rectangle2D as java_awt_geom_Rectangle2D } from "./geom/Rectangle2D";
import { Graphics as java_awt_Graphics } from "./Graphics";
import { FontRenderContext as java_awt_font_FontRenderContext } from "./font/FontRenderContext";
import { LineMetrics as java_awt_font_LineMetrics } from "./font/LineMetrics";
import { CharacterIterator as java_text_CharacterIterator, CharacterIteratorInterface as java_text_CharacterIteratorInterface } from "./../text/CharacterIterator";
import { Font as java_awt_Font } from "./Font";
/**
 * This class just defines types, you should import {@link FontMetrics} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FontMetricsClass extends JavaClass {
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
     * @param var0 original type: 'java.awt.Graphics'
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    getMaxCharBounds(var0: java_awt_Graphics | null): Promise<java_awt_geom_Rectangle2D | null>;
    /**
     * @param var0 original type: 'java.awt.Graphics'
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    getMaxCharBoundsSync(var0: java_awt_Graphics | null): java_awt_geom_Rectangle2D | null;
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
    getMaxAscent(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getMaxAscentSync(): number;
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
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'int'
     */
    bytesWidth(var0: Buffer | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'int'
     */
    bytesWidthSync(var0: Buffer | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'java.text.CharacterIterator'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.awt.Graphics'
     * @return original return type: 'java.awt.font.LineMetrics'
     */
    getLineMetrics(var0: java_text_CharacterIterator | JavaInterfaceProxy<java_text_CharacterIteratorInterface> | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_awt_Graphics | null): Promise<java_awt_font_LineMetrics | null>;
    /**
     * @param var0 original type: 'java.text.CharacterIterator'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.awt.Graphics'
     * @return original return type: 'java.awt.font.LineMetrics'
     */
    getLineMetricsSync(var0: java_text_CharacterIterator | JavaInterfaceProxy<java_text_CharacterIteratorInterface> | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_awt_Graphics | null): java_awt_font_LineMetrics | null;
    /**
     * @param var0 original type: 'char[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.awt.Graphics'
     * @return original return type: 'java.awt.font.LineMetrics'
     */
    getLineMetrics(var0: (string | null)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_awt_Graphics | null): Promise<java_awt_font_LineMetrics | null>;
    /**
     * @param var0 original type: 'char[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.awt.Graphics'
     * @return original return type: 'java.awt.font.LineMetrics'
     */
    getLineMetricsSync(var0: (string | null)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_awt_Graphics | null): java_awt_font_LineMetrics | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.awt.Graphics'
     * @return original return type: 'java.awt.font.LineMetrics'
     */
    getLineMetrics(var0: string | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_awt_Graphics | null): Promise<java_awt_font_LineMetrics | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.awt.Graphics'
     * @return original return type: 'java.awt.font.LineMetrics'
     */
    getLineMetricsSync(var0: string | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_awt_Graphics | null): java_awt_font_LineMetrics | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.awt.Graphics'
     * @return original return type: 'java.awt.font.LineMetrics'
     */
    getLineMetrics(var0: string | null, var1: java_awt_Graphics | null): Promise<java_awt_font_LineMetrics | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.awt.Graphics'
     * @return original return type: 'java.awt.font.LineMetrics'
     */
    getLineMetricsSync(var0: string | null, var1: java_awt_Graphics | null): java_awt_font_LineMetrics | null;
    /**
     * @return original return type: 'int'
     */
    getDescent(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getDescentSync(): number;
    /**
     * @return original return type: 'int'
     */
    getLeading(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getLeadingSync(): number;
    /**
     * @return original return type: 'boolean'
     */
    hasUniformLineMetrics(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasUniformLineMetricsSync(): boolean;
    /**
     * @param var0 original type: 'char[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.awt.Graphics'
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    getStringBounds(var0: (string | null)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_awt_Graphics | null): Promise<java_awt_geom_Rectangle2D | null>;
    /**
     * @param var0 original type: 'char[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.awt.Graphics'
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    getStringBoundsSync(var0: (string | null)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_awt_Graphics | null): java_awt_geom_Rectangle2D | null;
    /**
     * @param var0 original type: 'java.text.CharacterIterator'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.awt.Graphics'
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    getStringBounds(var0: java_text_CharacterIterator | JavaInterfaceProxy<java_text_CharacterIteratorInterface> | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_awt_Graphics | null): Promise<java_awt_geom_Rectangle2D | null>;
    /**
     * @param var0 original type: 'java.text.CharacterIterator'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.awt.Graphics'
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    getStringBoundsSync(var0: java_text_CharacterIterator | JavaInterfaceProxy<java_text_CharacterIteratorInterface> | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_awt_Graphics | null): java_awt_geom_Rectangle2D | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.awt.Graphics'
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    getStringBounds(var0: string | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_awt_Graphics | null): Promise<java_awt_geom_Rectangle2D | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.awt.Graphics'
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    getStringBoundsSync(var0: string | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_awt_Graphics | null): java_awt_geom_Rectangle2D | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.awt.Graphics'
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    getStringBounds(var0: string | null, var1: java_awt_Graphics | null): Promise<java_awt_geom_Rectangle2D | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.awt.Graphics'
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    getStringBoundsSync(var0: string | null, var1: java_awt_Graphics | null): java_awt_geom_Rectangle2D | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    charWidth(var0: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    charWidthSync(var0: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'int'
     */
    charWidth(var0: string | null): Promise<number>;
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'int'
     */
    charWidthSync(var0: string | null): number;
    /**
     * @return original return type: 'int'
     */
    getMaxDecent(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getMaxDecentSync(): number;
    /**
     * @return original return type: 'int'
     */
    getMaxDescent(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getMaxDescentSync(): number;
    /**
     * @param var0 original type: 'char[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'int'
     */
    charsWidth(var0: (string | null)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'char[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'int'
     */
    charsWidthSync(var0: (string | null)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): number;
    /**
     * @return original return type: 'int'
     */
    getAscent(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getAscentSync(): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'int'
     */
    stringWidth(var0: string | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'int'
     */
    stringWidthSync(var0: string | null): number;
    /**
     * @return original return type: 'int'
     */
    getMaxAdvance(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getMaxAdvanceSync(): number;
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
     * @return original return type: 'int[]'
     */
    getWidths(): Promise<(number)[] | null>;
    /**
     * @return original return type: 'int[]'
     */
    getWidthsSync(): (number)[] | null;
}
declare const FontMetrics_base: typeof FontMetricsClass;
/**
 * Class java.awt.FontMetrics.
 *
 * This actually imports the java class for further use.
 * The class {@link FontMetricsClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FontMetrics extends FontMetrics_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default FontMetrics;
//# sourceMappingURL=FontMetrics.d.ts.map