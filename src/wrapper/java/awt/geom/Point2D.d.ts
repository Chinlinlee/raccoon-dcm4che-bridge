import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Double as java_lang_Double } from "./../../lang/Double";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { Class as java_lang_Class } from "./../../lang/Class";
/**
 * This class just defines types, you should import {@link Point2D} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Point2DClass extends JavaClass {
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
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'java.lang.Object'
     */
    clone(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    cloneSync(): BasicOrJavaType | null;
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
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'double'
     */
    distance(var0: Point2DClass | null): Promise<number>;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'double'
     */
    distanceSync(var0: Point2DClass | null): number;
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
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'void'
     */
    setLocation(var0: Point2DClass | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'void'
     */
    setLocationSync(var0: Point2DClass | null): void;
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
    distanceSq(var0: Point2DClass | null): Promise<number>;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'double'
     */
    distanceSqSync(var0: Point2DClass | null): number;
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
     * @return original return type: 'java.lang.String'
     */
    toString(): Promise<string>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
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
declare const Point2D_base: typeof Point2DClass;
/**
 * Class java.awt.geom.Point2D.
 *
 * This actually imports the java class for further use.
 * The class {@link Point2DClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Point2D extends Point2D_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default Point2D;
//# sourceMappingURL=Point2D.d.ts.map