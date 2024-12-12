import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Double as java_lang_Double } from "./../../../../../java/lang/Double";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
/**
 * This class just defines types, you should import {@link LutParameters} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class LutParametersClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
    /**
     * @return original return type: 'int'
     */
    getBitsStored(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getBitsStoredSync(): number;
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
     * @return original return type: 'boolean'
     */
    isSigned(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isSignedSync(): boolean;
    /**
     * @return original return type: 'int'
     */
    getBitsOutput(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getBitsOutputSync(): number;
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
    getIntercept(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    getInterceptSync(): number;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getPaddingMaxValue(): Promise<number | null>;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getPaddingMaxValueSync(): number | null;
    /**
     * @return original return type: 'double'
     */
    getSlope(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    getSlopeSync(): number;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getPaddingMinValue(): Promise<number | null>;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getPaddingMinValueSync(): number | null;
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
     * @return original return type: 'boolean'
     */
    isApplyPadding(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isApplyPaddingSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isInversePaddingMLUT(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isInversePaddingMLUTSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isOutputSigned(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isOutputSignedSync(): boolean;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'boolean'
     * @param var3 original type: 'java.lang.Integer'
     * @param var4 original type: 'java.lang.Integer'
     * @param var5 original type: 'int'
     * @param var6 original type: 'boolean'
     * @param var7 original type: 'boolean'
     * @param var8 original type: 'int'
     * @param var9 original type: 'boolean'
     */
    constructor(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Boolean | boolean, var3: java_lang_Integer | number | null, var4: java_lang_Integer | number | null, var5: java_lang_Integer | number, var6: java_lang_Boolean | boolean, var7: java_lang_Boolean | boolean, var8: java_lang_Integer | number, var9: java_lang_Boolean | boolean);
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'boolean'
     * @param var3 original type: 'java.lang.Integer'
     * @param var4 original type: 'java.lang.Integer'
     * @param var5 original type: 'int'
     * @param var6 original type: 'boolean'
     * @param var7 original type: 'boolean'
     * @param var8 original type: 'int'
     * @param var9 original type: 'boolean'
     * @return original return type: 'org.weasis.opencv.op.lut.LutParameters'
     */
    static newInstanceAsync(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Boolean | boolean, var3: java_lang_Integer | number | null, var4: java_lang_Integer | number | null, var5: java_lang_Integer | number, var6: java_lang_Boolean | boolean, var7: java_lang_Boolean | boolean, var8: java_lang_Integer | number, var9: java_lang_Boolean | boolean): Promise<LutParameters>;
}
declare const LutParameters_base: typeof LutParametersClass;
/**
 * Class org.weasis.opencv.op.lut.LutParameters.
 *
 * This actually imports the java class for further use.
 * The class {@link LutParametersClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class LutParameters extends LutParameters_base {
}
export default LutParameters;
//# sourceMappingURL=LutParameters.d.ts.map