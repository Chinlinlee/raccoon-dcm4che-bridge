import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./../lang/Class";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { Supplier as java_util_function_Supplier, SupplierInterface as java_util_function_SupplierInterface } from "./function/Supplier";
import { LongStream as java_util_stream_LongStream } from "./stream/LongStream";
import { LongSupplier as java_util_function_LongSupplier, LongSupplierInterface as java_util_function_LongSupplierInterface } from "./function/LongSupplier";
import { LongConsumer as java_util_function_LongConsumer, LongConsumerInterface as java_util_function_LongConsumerInterface } from "./function/LongConsumer";
import { Runnable as java_lang_Runnable, RunnableInterface as java_lang_RunnableInterface } from "./../lang/Runnable";
/**
 * This class just defines types, you should import {@link OptionalLong} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class OptionalLongClass extends JavaClass {
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
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'boolean'
     */
    isEmpty(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isEmptySync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isPresent(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isPresentSync(): boolean;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    orElse(var0: java_lang_Long | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    orElseSync(var0: java_lang_Long | bigint | number): number;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'java.util.OptionalLong'
     */
    static empty(): Promise<OptionalLong | null>;
    /**
     * @return original return type: 'java.util.OptionalLong'
     */
    static emptySync(): OptionalLong | null;
    /**
     * @param var0 original type: 'java.util.function.Supplier'
     * @return original return type: 'long'
     */
    orElseThrow(var0: java_util_function_Supplier | JavaInterfaceProxy<java_util_function_SupplierInterface> | null): Promise<number>;
    /**
     * @param var0 original type: 'java.util.function.Supplier'
     * @return original return type: 'long'
     */
    orElseThrowSync(var0: java_util_function_Supplier | JavaInterfaceProxy<java_util_function_SupplierInterface> | null): number;
    /**
     * @return original return type: 'long'
     */
    orElseThrow(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    orElseThrowSync(): number;
    /**
     * @return original return type: 'long'
     */
    getAsLong(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    getAsLongSync(): number;
    /**
     * @return original return type: 'java.util.stream.LongStream'
     */
    stream(): Promise<java_util_stream_LongStream | null>;
    /**
     * @return original return type: 'java.util.stream.LongStream'
     */
    streamSync(): java_util_stream_LongStream | null;
    /**
     * @param var0 original type: 'java.util.function.LongSupplier'
     * @return original return type: 'long'
     */
    orElseGet(var0: java_util_function_LongSupplier | JavaInterfaceProxy<java_util_function_LongSupplierInterface> | null): Promise<number>;
    /**
     * @param var0 original type: 'java.util.function.LongSupplier'
     * @return original return type: 'long'
     */
    orElseGetSync(var0: java_util_function_LongSupplier | JavaInterfaceProxy<java_util_function_LongSupplierInterface> | null): number;
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
     * @param var0 original type: 'long'
     * @return original return type: 'java.util.OptionalLong'
     */
    static of(var0: java_lang_Long | bigint | number): Promise<OptionalLong | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.util.OptionalLong'
     */
    static ofSync(var0: java_lang_Long | bigint | number): OptionalLong | null;
    /**
     * @param var0 original type: 'java.util.function.LongConsumer'
     * @return original return type: 'void'
     */
    ifPresent(var0: java_util_function_LongConsumer | JavaInterfaceProxy<java_util_function_LongConsumerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.function.LongConsumer'
     * @return original return type: 'void'
     */
    ifPresentSync(var0: java_util_function_LongConsumer | JavaInterfaceProxy<java_util_function_LongConsumerInterface> | null): void;
    /**
     * @param var0 original type: 'java.util.function.LongConsumer'
     * @param var1 original type: 'java.lang.Runnable'
     * @return original return type: 'void'
     */
    ifPresentOrElse(var0: java_util_function_LongConsumer | JavaInterfaceProxy<java_util_function_LongConsumerInterface> | null, var1: java_lang_Runnable | JavaInterfaceProxy<java_lang_RunnableInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.function.LongConsumer'
     * @param var1 original type: 'java.lang.Runnable'
     * @return original return type: 'void'
     */
    ifPresentOrElseSync(var0: java_util_function_LongConsumer | JavaInterfaceProxy<java_util_function_LongConsumerInterface> | null, var1: java_lang_Runnable | JavaInterfaceProxy<java_lang_RunnableInterface> | null): void;
}
declare const OptionalLong_base: typeof OptionalLongClass;
/**
 * Class java.util.OptionalLong.
 *
 * This actually imports the java class for further use.
 * The class {@link OptionalLongClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class OptionalLong extends OptionalLong_base {
}
export default OptionalLong;
