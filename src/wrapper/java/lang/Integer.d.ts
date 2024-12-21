import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./Class";
import { Long as java_lang_Long } from "./Long";
import { MethodHandles$Lookup as java_lang_invoke_MethodHandles$Lookup } from "./invoke/MethodHandles$Lookup";
import { Optional as java_util_Optional } from "./../util/Optional";
import { CharSequence as java_lang_CharSequence, CharSequenceInterface as java_lang_CharSequenceInterface } from "./CharSequence";
/**
 * This class just defines types, you should import {@link Integer} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IntegerClass extends JavaClass {
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
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    static compare(var0: IntegerClass | number, var1: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    static compareSync(var0: IntegerClass | number, var1: IntegerClass | number): number;
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
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    wait(var0: java_lang_Long | bigint | number, var1: IntegerClass | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    waitSync(var0: java_lang_Long | bigint | number, var1: IntegerClass | number): void;
    /**
     * @return original return type: 'void'
     */
    wait(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    waitSync(): void;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'long'
     */
    static toUnsignedLong(var0: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'long'
     */
    static toUnsignedLongSync(var0: IntegerClass | number): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    static rotateLeft(var0: IntegerClass | number, var1: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    static rotateLeftSync(var0: IntegerClass | number, var1: IntegerClass | number): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    static sum(var0: IntegerClass | number, var1: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    static sumSync(var0: IntegerClass | number, var1: IntegerClass | number): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Integer'
     * @return original return type: 'java.lang.Integer'
     */
    static getInteger(var0: string | null, var1: IntegerClass | number | null): Promise<number | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Integer'
     * @return original return type: 'java.lang.Integer'
     */
    static getIntegerSync(var0: string | null, var1: IntegerClass | number | null): number | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Integer'
     */
    static getInteger(var0: string | null): Promise<number | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Integer'
     */
    static getIntegerSync(var0: string | null): number | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.Integer'
     */
    static getInteger(var0: string | null, var1: IntegerClass | number): Promise<number | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.Integer'
     */
    static getIntegerSync(var0: string | null, var1: IntegerClass | number): number | null;
    /**
     * @param var0 original type: 'java.lang.Integer'
     * @return original return type: 'int'
     */
    compareTo(var0: IntegerClass | number | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Integer'
     * @return original return type: 'int'
     */
    compareToSync(var0: IntegerClass | number | null): number;
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
     * @return original return type: 'java.lang.Integer'
     */
    resolveConstantDesc(var0: java_lang_invoke_MethodHandles$Lookup | null): Promise<number | null>;
    /**
     * @param var0 original type: 'java.lang.invoke.MethodHandles$Lookup'
     * @return original return type: 'java.lang.Integer'
     */
    resolveConstantDescSync(var0: java_lang_invoke_MethodHandles$Lookup | null): number | null;
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
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Integer'
     */
    static decode(var0: string | null): Promise<number | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Integer'
     */
    static decodeSync(var0: string | null): number | null;
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
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    static toOctalString(var0: IntegerClass | number): Promise<string | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    static toOctalStringSync(var0: IntegerClass | number): string | null;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    static parseUnsignedInt(var0: string | null, var1: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    static parseUnsignedIntSync(var0: string | null, var1: IntegerClass | number): number;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'int'
     */
    static parseUnsignedInt(var0: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null, var1: IntegerClass | number, var2: IntegerClass | number, var3: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'int'
     */
    static parseUnsignedIntSync(var0: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null, var1: IntegerClass | number, var2: IntegerClass | number, var3: IntegerClass | number): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'int'
     */
    static parseUnsignedInt(var0: string | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'int'
     */
    static parseUnsignedIntSync(var0: string | null): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    static min(var0: IntegerClass | number, var1: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    static minSync(var0: IntegerClass | number, var1: IntegerClass | number): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    static remainderUnsigned(var0: IntegerClass | number, var1: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    static remainderUnsignedSync(var0: IntegerClass | number, var1: IntegerClass | number): number;
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
     * @return original return type: 'int'
     */
    static hashCode(var0: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    static hashCodeSync(var0: IntegerClass | number): number;
    /**
     * @return original return type: 'short'
     */
    shortValue(): Promise<number>;
    /**
     * @return original return type: 'short'
     */
    shortValueSync(): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    static lowestOneBit(var0: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    static lowestOneBitSync(var0: IntegerClass | number): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    static signum(var0: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    static signumSync(var0: IntegerClass | number): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    static toHexString(var0: IntegerClass | number): Promise<string | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    static toHexStringSync(var0: IntegerClass | number): string | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    static rotateRight(var0: IntegerClass | number, var1: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    static rotateRightSync(var0: IntegerClass | number, var1: IntegerClass | number): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    static max(var0: IntegerClass | number, var1: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    static maxSync(var0: IntegerClass | number, var1: IntegerClass | number): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    static compress(var0: IntegerClass | number, var1: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    static compressSync(var0: IntegerClass | number, var1: IntegerClass | number): number;
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
     * @return original return type: 'java.lang.Integer'
     */
    static valueOf(var0: string | null): Promise<number | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Integer'
     */
    static valueOfSync(var0: string | null): number | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.Integer'
     */
    static valueOf(var0: IntegerClass | number): Promise<number | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.Integer'
     */
    static valueOfSync(var0: IntegerClass | number): number | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.Integer'
     */
    static valueOf(var0: string | null, var1: IntegerClass | number): Promise<number | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.Integer'
     */
    static valueOfSync(var0: string | null, var1: IntegerClass | number): number | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    static divideUnsigned(var0: IntegerClass | number, var1: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    static divideUnsignedSync(var0: IntegerClass | number, var1: IntegerClass | number): number;
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
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    static reverse(var0: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    static reverseSync(var0: IntegerClass | number): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    static numberOfLeadingZeros(var0: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    static numberOfLeadingZerosSync(var0: IntegerClass | number): number;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'int'
     */
    static parseInt(var0: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null, var1: IntegerClass | number, var2: IntegerClass | number, var3: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'int'
     */
    static parseIntSync(var0: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null, var1: IntegerClass | number, var2: IntegerClass | number, var3: IntegerClass | number): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'int'
     */
    static parseInt(var0: string | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'int'
     */
    static parseIntSync(var0: string | null): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    static parseInt(var0: string | null, var1: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    static parseIntSync(var0: string | null, var1: IntegerClass | number): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    static expand(var0: IntegerClass | number, var1: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    static expandSync(var0: IntegerClass | number, var1: IntegerClass | number): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    static compareUnsigned(var0: IntegerClass | number, var1: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    static compareUnsignedSync(var0: IntegerClass | number, var1: IntegerClass | number): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    static toBinaryString(var0: IntegerClass | number): Promise<string | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    static toBinaryStringSync(var0: IntegerClass | number): string | null;
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
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    static bitCount(var0: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    static bitCountSync(var0: IntegerClass | number): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    static toUnsignedString(var0: IntegerClass | number, var1: IntegerClass | number): Promise<string | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    static toUnsignedStringSync(var0: IntegerClass | number, var1: IntegerClass | number): string | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    static toUnsignedString(var0: IntegerClass | number): Promise<string | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    static toUnsignedStringSync(var0: IntegerClass | number): string | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    static highestOneBit(var0: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    static highestOneBitSync(var0: IntegerClass | number): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    static numberOfTrailingZeros(var0: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    static numberOfTrailingZerosSync(var0: IntegerClass | number): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    static reverseBytes(var0: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    static reverseBytesSync(var0: IntegerClass | number): number;
    /**
     * @return original return type: 'byte'
     */
    byteValue(): Promise<number>;
    /**
     * @return original return type: 'byte'
     */
    byteValueSync(): number;
    /**
     * Original type: 'int'
     */
    static readonly BYTES: IntegerClass | number;
    /**
     * Original type: 'int'
     */
    static readonly SIZE: IntegerClass | number;
    /**
     * Original type: 'int'
     */
    static readonly MAX_VALUE: IntegerClass | number;
    /**
     * Original type: 'int'
     */
    static readonly MIN_VALUE: IntegerClass | number;
    /**
     * Original type: 'java.lang.Class'
     */
    static readonly TYPE: java_lang_Class | null;
    /**
     * @param var0 original type: 'java.lang.String'
     */
    constructor(var0: string | null);
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Integer'
     */
    static newInstanceAsync(var0: string | null): Promise<number>;
    /**
     * @param var0 original type: 'int'
     */
    constructor(var0: IntegerClass | number);
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.Integer'
     */
    static newInstanceAsync(var0: IntegerClass | number): Promise<number>;
}
declare const Integer_base: typeof IntegerClass;
/**
 * Class java.lang.Integer.
 *
 * This actually imports the java class for further use.
 * The class {@link IntegerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Integer extends Integer_base {
}
export default Integer;
//# sourceMappingURL=Integer.d.ts.map