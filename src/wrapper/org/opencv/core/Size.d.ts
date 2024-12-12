import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../../java/lang/Class";
import { Long as java_lang_Long } from "./../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
import { Double as java_lang_Double } from "./../../../java/lang/Double";
import { Point as org_opencv_core_Point } from "./Point";
/**
 * This class just defines types, you should import {@link Size} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class SizeClass extends JavaClass {
    /**
     * @return original return type: 'double'
     */
    area(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    areaSync(): number;
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
     * @param var0 original type: 'double[]'
     * @return original return type: 'void'
     */
    set(var0: (java_lang_Double | number)[] | null): Promise<void>;
    /**
     * @param var0 original type: 'double[]'
     * @return original return type: 'void'
     */
    setSync(var0: (java_lang_Double | number)[] | null): void;
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
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'org.opencv.core.Size'
     */
    clone(): Promise<Size | null>;
    /**
     * @return original return type: 'org.opencv.core.Size'
     */
    cloneSync(): Size | null;
    /**
     * @return original return type: 'java.lang.Object'
     */
    clone(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    cloneSync(): BasicOrJavaType | null;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'boolean'
     */
    empty(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    emptySync(): boolean;
    /**
     * Original type: 'double'
     */
    width: java_lang_Double | number;
    /**
     * Original type: 'double'
     */
    height: java_lang_Double | number;
    /**
     * @param var0 original type: 'double[]'
     */
    constructor(var0: (java_lang_Double | number)[] | null);
    /**
     * @param var0 original type: 'double[]'
     * @return original return type: 'org.opencv.core.Size'
     */
    static newInstanceAsync(var0: (java_lang_Double | number)[] | null): Promise<Size>;
    /**
     * @param var0 original type: 'org.opencv.core.Point'
     */
    constructor(var0: org_opencv_core_Point | null);
    /**
     * @param var0 original type: 'org.opencv.core.Point'
     * @return original return type: 'org.opencv.core.Size'
     */
    static newInstanceAsync(var0: org_opencv_core_Point | null): Promise<Size>;
    constructor();
    /**
     * @return original return type: 'org.opencv.core.Size'
     */
    static newInstanceAsync(): Promise<Size>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     */
    constructor(var0: java_lang_Double | number, var1: java_lang_Double | number);
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'org.opencv.core.Size'
     */
    static newInstanceAsync(var0: java_lang_Double | number, var1: java_lang_Double | number): Promise<Size>;
}
declare const Size_base: typeof SizeClass;
/**
 * Class org.opencv.core.Size.
 *
 * This actually imports the java class for further use.
 * The class {@link SizeClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Size extends Size_base {
}
export default Size;
//# sourceMappingURL=Size.d.ts.map