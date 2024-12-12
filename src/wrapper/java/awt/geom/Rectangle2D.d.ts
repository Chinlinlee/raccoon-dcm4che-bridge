import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../lang/Class";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { Double as java_lang_Double } from "./../../lang/Double";
import { Rectangle as java_awt_Rectangle } from "./../Rectangle";
import { Point2D as java_awt_geom_Point2D } from "./Point2D";
import { PathIterator as java_awt_geom_PathIterator } from "./PathIterator";
import { AffineTransform as java_awt_geom_AffineTransform } from "./AffineTransform";
import { Dimension2D as java_awt_geom_Dimension2D } from "./Dimension2D";
import { Line2D as java_awt_geom_Line2D } from "./Line2D";
/**
 * This class just defines types, you should import {@link Rectangle2D} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Rectangle2DClass extends JavaClass {
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
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'boolean'
     */
    intersects(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): Promise<boolean>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'boolean'
     */
    intersectsSync(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): boolean;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'boolean'
     */
    intersects(var0: Rectangle2DClass | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'boolean'
     */
    intersectsSync(var0: Rectangle2DClass | null): boolean;
    /**
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    getFrame(): Promise<Rectangle2D | null>;
    /**
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    getFrameSync(): Rectangle2D | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'double'
     */
    getWidth(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    getWidthSync(): number;
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
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @param var1 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'void'
     */
    setFrameFromCenter(var0: java_awt_geom_Point2D | null, var1: java_awt_geom_Point2D | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @param var1 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'void'
     */
    setFrameFromCenterSync(var0: java_awt_geom_Point2D | null, var1: java_awt_geom_Point2D | null): void;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'void'
     */
    setFrameFromCenter(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): Promise<void>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'void'
     */
    setFrameFromCenterSync(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): void;
    /**
     * @return original return type: 'double'
     */
    getHeight(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    getHeightSync(): number;
    /**
     * @param var0 original type: 'java.awt.geom.AffineTransform'
     * @return original return type: 'java.awt.geom.PathIterator'
     */
    getPathIterator(var0: java_awt_geom_AffineTransform | null): Promise<java_awt_geom_PathIterator | null>;
    /**
     * @param var0 original type: 'java.awt.geom.AffineTransform'
     * @return original return type: 'java.awt.geom.PathIterator'
     */
    getPathIteratorSync(var0: java_awt_geom_AffineTransform | null): java_awt_geom_PathIterator | null;
    /**
     * @param var0 original type: 'java.awt.geom.AffineTransform'
     * @param var1 original type: 'double'
     * @return original return type: 'java.awt.geom.PathIterator'
     */
    getPathIterator(var0: java_awt_geom_AffineTransform | null, var1: java_lang_Double | number): Promise<java_awt_geom_PathIterator | null>;
    /**
     * @param var0 original type: 'java.awt.geom.AffineTransform'
     * @param var1 original type: 'double'
     * @return original return type: 'java.awt.geom.PathIterator'
     */
    getPathIteratorSync(var0: java_awt_geom_AffineTransform | null, var1: java_lang_Double | number): java_awt_geom_PathIterator | null;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'void'
     */
    setFrame(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): Promise<void>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'void'
     */
    setFrameSync(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): void;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'void'
     */
    setFrame(var0: Rectangle2DClass | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'void'
     */
    setFrameSync(var0: Rectangle2DClass | null): void;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @param var1 original type: 'java.awt.geom.Dimension2D'
     * @return original return type: 'void'
     */
    setFrame(var0: java_awt_geom_Point2D | null, var1: java_awt_geom_Dimension2D | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @param var1 original type: 'java.awt.geom.Dimension2D'
     * @return original return type: 'void'
     */
    setFrameSync(var0: java_awt_geom_Point2D | null, var1: java_awt_geom_Dimension2D | null): void;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'double'
     */
    getCenterY(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    getCenterYSync(): number;
    /**
     * @return original return type: 'double'
     */
    getCenterX(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    getCenterXSync(): number;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'void'
     */
    add(var0: java_lang_Double | number, var1: java_lang_Double | number): Promise<void>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'void'
     */
    addSync(var0: java_lang_Double | number, var1: java_lang_Double | number): void;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'void'
     */
    add(var0: java_awt_geom_Point2D | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'void'
     */
    addSync(var0: java_awt_geom_Point2D | null): void;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'void'
     */
    add(var0: Rectangle2DClass | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'void'
     */
    addSync(var0: Rectangle2DClass | null): void;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @param var1 original type: 'java.awt.geom.Rectangle2D'
     * @param var2 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'void'
     */
    static intersect(var0: Rectangle2DClass | null, var1: Rectangle2DClass | null, var2: Rectangle2DClass | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @param var1 original type: 'java.awt.geom.Rectangle2D'
     * @param var2 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'void'
     */
    static intersectSync(var0: Rectangle2DClass | null, var1: Rectangle2DClass | null, var2: Rectangle2DClass | null): void;
    /**
     * @return original return type: 'boolean'
     */
    isEmpty(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isEmptySync(): boolean;
    /**
     * @return original return type: 'double'
     */
    getMaxX(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    getMaxXSync(): number;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'void'
     */
    setRect(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): Promise<void>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'void'
     */
    setRectSync(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): void;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'void'
     */
    setRect(var0: Rectangle2DClass | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'void'
     */
    setRectSync(var0: Rectangle2DClass | null): void;
    /**
     * @return original return type: 'double'
     */
    getMaxY(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    getMaxYSync(): number;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @param var1 original type: 'java.awt.geom.Rectangle2D'
     * @param var2 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'void'
     */
    static union(var0: Rectangle2DClass | null, var1: Rectangle2DClass | null, var2: Rectangle2DClass | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @param var1 original type: 'java.awt.geom.Rectangle2D'
     * @param var2 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'void'
     */
    static unionSync(var0: Rectangle2DClass | null, var1: Rectangle2DClass | null, var2: Rectangle2DClass | null): void;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'void'
     */
    setFrameFromDiagonal(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): Promise<void>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'void'
     */
    setFrameFromDiagonalSync(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): void;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @param var1 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'void'
     */
    setFrameFromDiagonal(var0: java_awt_geom_Point2D | null, var1: java_awt_geom_Point2D | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @param var1 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'void'
     */
    setFrameFromDiagonalSync(var0: java_awt_geom_Point2D | null, var1: java_awt_geom_Point2D | null): void;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'boolean'
     */
    contains(var0: java_lang_Double | number, var1: java_lang_Double | number): Promise<boolean>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'boolean'
     */
    containsSync(var0: java_lang_Double | number, var1: java_lang_Double | number): boolean;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'boolean'
     */
    contains(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): Promise<boolean>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'boolean'
     */
    containsSync(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): boolean;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'boolean'
     */
    contains(var0: java_awt_geom_Point2D | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'boolean'
     */
    containsSync(var0: java_awt_geom_Point2D | null): boolean;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'boolean'
     */
    contains(var0: Rectangle2DClass | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'boolean'
     */
    containsSync(var0: Rectangle2DClass | null): boolean;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'boolean'
     */
    intersectsLine(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): Promise<boolean>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'boolean'
     */
    intersectsLineSync(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): boolean;
    /**
     * @param var0 original type: 'java.awt.geom.Line2D'
     * @return original return type: 'boolean'
     */
    intersectsLine(var0: java_awt_geom_Line2D | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.awt.geom.Line2D'
     * @return original return type: 'boolean'
     */
    intersectsLineSync(var0: java_awt_geom_Line2D | null): boolean;
    /**
     * @return original return type: 'double'
     */
    getX(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    getXSync(): number;
    /**
     * @return original return type: 'double'
     */
    getY(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    getYSync(): number;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    createUnion(var0: Rectangle2DClass | null): Promise<Rectangle2D | null>;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    createUnionSync(var0: Rectangle2DClass | null): Rectangle2D | null;
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
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'int'
     */
    outcode(var0: java_lang_Double | number, var1: java_lang_Double | number): Promise<number>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'int'
     */
    outcodeSync(var0: java_lang_Double | number, var1: java_lang_Double | number): number;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'int'
     */
    outcode(var0: java_awt_geom_Point2D | null): Promise<number>;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'int'
     */
    outcodeSync(var0: java_awt_geom_Point2D | null): number;
    /**
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    getBounds2D(): Promise<Rectangle2D | null>;
    /**
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    getBounds2DSync(): Rectangle2D | null;
    /**
     * @return original return type: 'java.lang.Object'
     */
    clone(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    cloneSync(): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    createIntersection(var0: Rectangle2DClass | null): Promise<Rectangle2D | null>;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    createIntersectionSync(var0: Rectangle2DClass | null): Rectangle2D | null;
    /**
     * @return original return type: 'double'
     */
    getMinX(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    getMinXSync(): number;
    /**
     * @return original return type: 'double'
     */
    getMinY(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    getMinYSync(): number;
    /**
     * Original type: 'int'
     */
    static readonly OUT_TOP: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly OUT_RIGHT: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly OUT_BOTTOM: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly OUT_LEFT: java_lang_Integer | number;
}
declare const Rectangle2D_base: typeof Rectangle2DClass;
/**
 * Class java.awt.geom.Rectangle2D.
 *
 * This actually imports the java class for further use.
 * The class {@link Rectangle2DClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Rectangle2D extends Rectangle2D_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default Rectangle2D;
//# sourceMappingURL=Rectangle2D.d.ts.map