import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../lang/Class";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { Long as java_lang_Long } from "./../lang/Long";
import { Double as java_lang_Double } from "./../lang/Double";
import { Point2D as java_awt_geom_Point2D } from "./geom/Point2D";
/**
 * This class just defines types, you should import {@link Point} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PointClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
    /**
     * @return original return type: 'java.awt.Point'
     */
    getLocation(): Promise<Point | null>;
    /**
     * @return original return type: 'java.awt.Point'
     */
    getLocationSync(): Point | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    move(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    moveSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): void;
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
     * @return original return type: 'double'
     */
    distance(var0: java_lang_Double | number, var1: java_lang_Double | number): Promise<number>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'double'
     */
    distanceSync(var0: java_lang_Double | number, var1: java_lang_Double | number): number;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'double'
     */
    distance(var0: java_awt_geom_Point2D | null): Promise<number>;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'double'
     */
    distanceSync(var0: java_awt_geom_Point2D | null): number;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'double'
     */
    static distance(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): Promise<number>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'double'
     */
    static distanceSync(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): number;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'double'
     */
    distanceSq(var0: java_lang_Double | number, var1: java_lang_Double | number): Promise<number>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'double'
     */
    distanceSqSync(var0: java_lang_Double | number, var1: java_lang_Double | number): number;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'double'
     */
    distanceSq(var0: java_awt_geom_Point2D | null): Promise<number>;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'double'
     */
    distanceSqSync(var0: java_awt_geom_Point2D | null): number;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'double'
     */
    static distanceSq(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): Promise<number>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'double'
     */
    static distanceSqSync(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    translate(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    translateSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): void;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
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
     * @param var0 original type: 'java.awt.Point'
     * @return original return type: 'void'
     */
    setLocation(var0: PointClass | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.Point'
     * @return original return type: 'void'
     */
    setLocationSync(var0: PointClass | null): void;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'void'
     */
    setLocation(var0: java_lang_Double | number, var1: java_lang_Double | number): Promise<void>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'void'
     */
    setLocationSync(var0: java_lang_Double | number, var1: java_lang_Double | number): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    setLocation(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    setLocationSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'void'
     */
    setLocation(var0: java_awt_geom_Point2D | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'void'
     */
    setLocationSync(var0: java_awt_geom_Point2D | null): void;
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
     * @return original return type: 'java.lang.Object'
     */
    clone(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    cloneSync(): BasicOrJavaType | null;
    /**
     * Original type: 'int'
     */
    x: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    y: java_lang_Integer | number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     */
    constructor(var0: java_lang_Integer | number, var1: java_lang_Integer | number);
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.awt.Point'
     */
    static newInstanceAsync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<Point>;
    /**
     * @param var0 original type: 'java.awt.Point'
     */
    constructor(var0: PointClass | null);
    /**
     * @param var0 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.Point'
     */
    static newInstanceAsync(var0: PointClass | null): Promise<Point>;
    constructor();
    /**
     * @return original return type: 'java.awt.Point'
     */
    static newInstanceAsync(): Promise<Point>;
}
declare const Point_base: typeof PointClass;
/**
 * Class java.awt.Point.
 *
 * This actually imports the java class for further use.
 * The class {@link PointClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Point extends Point_base {
}
export default Point;
//# sourceMappingURL=Point.d.ts.map