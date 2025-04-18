import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../lang/Class";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { Float as java_lang_Float } from "./../../lang/Float";
import { Double as java_lang_Double } from "./../../lang/Double";
/**
 * This class just defines types, you should import {@link DataBuffer} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DataBufferClass extends JavaClass {
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
     * @return original return type: 'int'
     */
    getNumBanks(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getNumBanksSync(): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    static getDataTypeSize(var0: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    static getDataTypeSizeSync(var0: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'double'
     */
    getElemDouble(var0: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'double'
     */
    getElemDoubleSync(var0: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'double'
     */
    getElemDouble(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'double'
     */
    getElemDoubleSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): number;
    /**
     * @return original return type: 'int'
     */
    getOffset(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getOffsetSync(): number;
    /**
     * @return original return type: 'int'
     */
    getDataType(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getDataTypeSync(): number;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'int[]'
     */
    getOffsets(): Promise<(number)[] | null>;
    /**
     * @return original return type: 'int[]'
     */
    getOffsetsSync(): (number)[] | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'float'
     * @return original return type: 'void'
     */
    setElemFloat(var0: java_lang_Integer | number, var1: java_lang_Float | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'float'
     * @return original return type: 'void'
     */
    setElemFloatSync(var0: java_lang_Integer | number, var1: java_lang_Float | number): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'float'
     * @return original return type: 'void'
     */
    setElemFloat(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Float | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'float'
     * @return original return type: 'void'
     */
    setElemFloatSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Float | number): void;
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
    getSize(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getSizeSync(): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'double'
     * @return original return type: 'void'
     */
    setElemDouble(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Double | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'double'
     * @return original return type: 'void'
     */
    setElemDoubleSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Double | number): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'double'
     * @return original return type: 'void'
     */
    setElemDouble(var0: java_lang_Integer | number, var1: java_lang_Double | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'double'
     * @return original return type: 'void'
     */
    setElemDoubleSync(var0: java_lang_Integer | number, var1: java_lang_Double | number): void;
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
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    setElem(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    setElemSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'void'
     */
    setElem(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'void'
     */
    setElemSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'float'
     */
    getElemFloat(var0: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'float'
     */
    getElemFloatSync(var0: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'float'
     */
    getElemFloat(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'float'
     */
    getElemFloatSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    getElem(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    getElemSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    getElem(var0: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    getElemSync(var0: java_lang_Integer | number): number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_INT: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_DOUBLE: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_SHORT: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_UNDEFINED: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_BYTE: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_USHORT: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_FLOAT: java_lang_Integer | number;
}
declare const DataBuffer_base: typeof DataBufferClass;
/**
 * Class java.awt.image.DataBuffer.
 *
 * This actually imports the java class for further use.
 * The class {@link DataBufferClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DataBuffer extends DataBuffer_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default DataBuffer;
