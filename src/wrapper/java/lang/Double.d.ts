import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./Class";
import { Long as java_lang_Long } from "./Long";
import { Integer as java_lang_Integer } from "./Integer";
import { MethodHandles$Lookup as java_lang_invoke_MethodHandles$Lookup } from "./invoke/MethodHandles$Lookup";
import { Optional as java_util_Optional } from "./../util/Optional";
/**
 * This class just defines types, you should import {@link Double} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DoubleClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'int'
     */
    static compare(var0: DoubleClass | number, var1: DoubleClass | number): Promise<number>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'int'
     */
    static compareSync(var0: DoubleClass | number, var1: DoubleClass | number): number;
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
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'double'
     */
    static sum(var0: DoubleClass | number, var1: DoubleClass | number): Promise<number>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'double'
     */
    static sumSync(var0: DoubleClass | number, var1: DoubleClass | number): number;
    /**
     * @param var0 original type: 'java.lang.Double'
     * @return original return type: 'int'
     */
    compareTo(var0: DoubleClass | number | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Double'
     * @return original return type: 'int'
     */
    compareToSync(var0: DoubleClass | number | null): number;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    compareTo(var0: BasicOrJavaType | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    compareToSync(var0: BasicOrJavaType | null): number;
    /**
     * @param var0 original type: 'java.lang.invoke.MethodHandles$Lookup'
     * @return original return type: 'java.lang.Object'
     */
    resolveConstantDesc(var0: java_lang_invoke_MethodHandles$Lookup | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.invoke.MethodHandles$Lookup'
     * @return original return type: 'java.lang.Object'
     */
    resolveConstantDescSync(var0: java_lang_invoke_MethodHandles$Lookup | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.invoke.MethodHandles$Lookup'
     * @return original return type: 'java.lang.Double'
     */
    resolveConstantDesc(var0: java_lang_invoke_MethodHandles$Lookup | null): Promise<number | null>;
    /**
     * @param var0 original type: 'java.lang.invoke.MethodHandles$Lookup'
     * @return original return type: 'java.lang.Double'
     */
    resolveConstantDescSync(var0: java_lang_invoke_MethodHandles$Lookup | null): number | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'double'
     */
    static longBitsToDouble(var0: java_lang_Long | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'double'
     */
    static longBitsToDoubleSync(var0: java_lang_Long | bigint | number): number;
    /**
     * @return original return type: 'boolean'
     */
    isNaN(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isNaNSync(): boolean;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'boolean'
     */
    static isNaN(var0: DoubleClass | number): Promise<boolean>;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'boolean'
     */
    static isNaNSync(var0: DoubleClass | number): boolean;
    /**
     * @return original return type: 'java.util.Optional'
     */
    describeConstable(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    describeConstableSync(): java_util_Optional | null;
    /**
     * @return original return type: 'long'
     */
    longValue(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    longValueSync(): number;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'boolean'
     */
    static isFinite(var0: DoubleClass | number): Promise<boolean>;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'boolean'
     */
    static isFiniteSync(var0: DoubleClass | number): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'double'
     */
    static parseDouble(var0: string | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'double'
     */
    static parseDoubleSync(var0: string | null): number;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'double'
     */
    static min(var0: DoubleClass | number, var1: DoubleClass | number): Promise<number>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'double'
     */
    static minSync(var0: DoubleClass | number, var1: DoubleClass | number): number;
    /**
     * @return original return type: 'boolean'
     */
    isInfinite(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isInfiniteSync(): boolean;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'boolean'
     */
    static isInfinite(var0: DoubleClass | number): Promise<boolean>;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'boolean'
     */
    static isInfiniteSync(var0: DoubleClass | number): boolean;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'int'
     */
    static hashCode(var0: DoubleClass | number): Promise<number>;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'int'
     */
    static hashCodeSync(var0: DoubleClass | number): number;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'short'
     */
    shortValue(): Promise<number>;
    /**
     * @return original return type: 'short'
     */
    shortValueSync(): number;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'java.lang.String'
     */
    static toHexString(var0: DoubleClass | number): Promise<string | null>;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'java.lang.String'
     */
    static toHexStringSync(var0: DoubleClass | number): string | null;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'double'
     */
    static max(var0: DoubleClass | number, var1: DoubleClass | number): Promise<number>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'double'
     */
    static maxSync(var0: DoubleClass | number, var1: DoubleClass | number): number;
    /**
     * @return original return type: 'int'
     */
    intValue(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    intValueSync(): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Double'
     */
    static valueOf(var0: string | null): Promise<number | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Double'
     */
    static valueOfSync(var0: string | null): number | null;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'java.lang.Double'
     */
    static valueOf(var0: DoubleClass | number): Promise<number | null>;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'java.lang.Double'
     */
    static valueOfSync(var0: DoubleClass | number): number | null;
    /**
     * @return original return type: 'float'
     */
    floatValue(): Promise<number>;
    /**
     * @return original return type: 'float'
     */
    floatValueSync(): number;
    /**
     * @return original return type: 'double'
     */
    doubleValue(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    doubleValueSync(): number;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'long'
     */
    static doubleToLongBits(var0: DoubleClass | number): Promise<number>;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'long'
     */
    static doubleToLongBitsSync(var0: DoubleClass | number): number;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'long'
     */
    static doubleToRawLongBits(var0: DoubleClass | number): Promise<number>;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'long'
     */
    static doubleToRawLongBitsSync(var0: DoubleClass | number): number;
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
     * @return original return type: 'byte'
     */
    byteValue(): Promise<number>;
    /**
     * @return original return type: 'byte'
     */
    byteValueSync(): number;
    /**
     * Original type: 'double'
     */
    static readonly POSITIVE_INFINITY: DoubleClass | number;
    /**
     * Original type: 'int'
     */
    static readonly BYTES: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly MAX_EXPONENT: java_lang_Integer | number;
    /**
     * Original type: 'double'
     */
    static readonly NEGATIVE_INFINITY: DoubleClass | number;
    /**
     * Original type: 'double'
     */
    static readonly MIN_NORMAL: DoubleClass | number;
    /**
     * Original type: 'int'
     */
    static readonly SIZE: java_lang_Integer | number;
    /**
     * Original type: 'double'
     */
    static readonly NaN: DoubleClass | number;
    /**
     * Original type: 'double'
     */
    static readonly MAX_VALUE: DoubleClass | number;
    /**
     * Original type: 'double'
     */
    static readonly MIN_VALUE: DoubleClass | number;
    /**
     * Original type: 'java.lang.Class'
     */
    static readonly TYPE: java_lang_Class | null;
    /**
     * Original type: 'int'
     */
    static readonly MIN_EXPONENT: java_lang_Integer | number;
    /**
     * @param var0 original type: 'double'
     */
    constructor(var0: DoubleClass | number);
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'java.lang.Double'
     */
    static newInstanceAsync(var0: DoubleClass | number): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     */
    constructor(var0: string | null);
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Double'
     */
    static newInstanceAsync(var0: string | null): Promise<number>;
}
declare const Double_base: typeof DoubleClass;
/**
 * Class java.lang.Double.
 *
 * This actually imports the java class for further use.
 * The class {@link DoubleClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Double extends Double_base {
}
export default Double;
