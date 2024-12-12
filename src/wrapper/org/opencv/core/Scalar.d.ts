import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Double as java_lang_Double } from "./../../../java/lang/Double";
import { Class as java_lang_Class } from "./../../../java/lang/Class";
import { Long as java_lang_Long } from "./../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
/**
 * This class just defines types, you should import {@link Scalar} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ScalarClass extends JavaClass {
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'org.opencv.core.Scalar'
     */
    static all(var0: java_lang_Double | number): Promise<Scalar | null>;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'org.opencv.core.Scalar'
     */
    static allSync(var0: java_lang_Double | number): Scalar | null;
    /**
     * @return original return type: 'boolean'
     */
    isReal(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isRealSync(): boolean;
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
     * @param var0 original type: 'org.opencv.core.Scalar'
     * @param var1 original type: 'double'
     * @return original return type: 'org.opencv.core.Scalar'
     */
    mul(var0: ScalarClass | null, var1: java_lang_Double | number): Promise<Scalar | null>;
    /**
     * @param var0 original type: 'org.opencv.core.Scalar'
     * @param var1 original type: 'double'
     * @return original return type: 'org.opencv.core.Scalar'
     */
    mulSync(var0: ScalarClass | null, var1: java_lang_Double | number): Scalar | null;
    /**
     * @param var0 original type: 'org.opencv.core.Scalar'
     * @return original return type: 'org.opencv.core.Scalar'
     */
    mul(var0: ScalarClass | null): Promise<Scalar | null>;
    /**
     * @param var0 original type: 'org.opencv.core.Scalar'
     * @return original return type: 'org.opencv.core.Scalar'
     */
    mulSync(var0: ScalarClass | null): Scalar | null;
    /**
     * @return original return type: 'org.opencv.core.Scalar'
     */
    conj(): Promise<Scalar | null>;
    /**
     * @return original return type: 'org.opencv.core.Scalar'
     */
    conjSync(): Scalar | null;
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
     * @return original return type: 'org.opencv.core.Scalar'
     */
    clone(): Promise<Scalar | null>;
    /**
     * @return original return type: 'org.opencv.core.Scalar'
     */
    cloneSync(): Scalar | null;
    /**
     * Original type: 'double[]'
     */
    val: (java_lang_Double | number)[] | null;
    /**
     * @param var0 original type: 'double[]'
     */
    constructor(var0: (java_lang_Double | number)[] | null);
    /**
     * @param var0 original type: 'double[]'
     * @return original return type: 'org.opencv.core.Scalar'
     */
    static newInstanceAsync(var0: (java_lang_Double | number)[] | null): Promise<Scalar>;
    /**
     * @param var0 original type: 'double'
     */
    constructor(var0: java_lang_Double | number);
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'org.opencv.core.Scalar'
     */
    static newInstanceAsync(var0: java_lang_Double | number): Promise<Scalar>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     */
    constructor(var0: java_lang_Double | number, var1: java_lang_Double | number);
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'org.opencv.core.Scalar'
     */
    static newInstanceAsync(var0: java_lang_Double | number, var1: java_lang_Double | number): Promise<Scalar>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     */
    constructor(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number);
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @return original return type: 'org.opencv.core.Scalar'
     */
    static newInstanceAsync(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number): Promise<Scalar>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     */
    constructor(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number);
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'org.opencv.core.Scalar'
     */
    static newInstanceAsync(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): Promise<Scalar>;
}
declare const Scalar_base: typeof ScalarClass;
/**
 * Class org.opencv.core.Scalar.
 *
 * This actually imports the java class for further use.
 * The class {@link ScalarClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Scalar extends Scalar_base {
}
export default Scalar;
//# sourceMappingURL=Scalar.d.ts.map