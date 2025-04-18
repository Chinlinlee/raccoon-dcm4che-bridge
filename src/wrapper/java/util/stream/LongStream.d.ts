import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { OptionalDouble as java_util_OptionalDouble } from "./../OptionalDouble";
import { BaseStream as java_util_stream_BaseStream } from "./BaseStream";
import { Long as java_lang_Long } from "./../../lang/Long";
import { LongPredicate as java_util_function_LongPredicate, LongPredicateInterface as java_util_function_LongPredicateInterface } from "./../function/LongPredicate";
import { OptionalLong as java_util_OptionalLong } from "./../OptionalLong";
import { Stream as java_util_stream_Stream } from "./Stream";
import { LongFunction as java_util_function_LongFunction, LongFunctionInterface as java_util_function_LongFunctionInterface } from "./../function/LongFunction";
import { Iterator as java_util_Iterator } from "./../Iterator";
import { PrimitiveIterator$OfLong as java_util_PrimitiveIterator$OfLong } from "./../PrimitiveIterator$OfLong";
import { LongStream$LongMapMultiConsumer as java_util_stream_LongStream$LongMapMultiConsumer, LongStream$LongMapMultiConsumerInterface as java_util_stream_LongStream$LongMapMultiConsumerInterface } from "./LongStream$LongMapMultiConsumer";
import { DoubleStream as java_util_stream_DoubleStream } from "./DoubleStream";
import { LongStream$Builder as java_util_stream_LongStream$Builder } from "./LongStream$Builder";
import { LongConsumer as java_util_function_LongConsumer, LongConsumerInterface as java_util_function_LongConsumerInterface } from "./../function/LongConsumer";
import { LongUnaryOperator as java_util_function_LongUnaryOperator, LongUnaryOperatorInterface as java_util_function_LongUnaryOperatorInterface } from "./../function/LongUnaryOperator";
import { LongSupplier as java_util_function_LongSupplier, LongSupplierInterface as java_util_function_LongSupplierInterface } from "./../function/LongSupplier";
import { LongToDoubleFunction as java_util_function_LongToDoubleFunction, LongToDoubleFunctionInterface as java_util_function_LongToDoubleFunctionInterface } from "./../function/LongToDoubleFunction";
import { LongBinaryOperator as java_util_function_LongBinaryOperator, LongBinaryOperatorInterface as java_util_function_LongBinaryOperatorInterface } from "./../function/LongBinaryOperator";
import { Spliterator$OfLong as java_util_Spliterator$OfLong } from "./../Spliterator$OfLong";
import { Spliterator as java_util_Spliterator } from "./../Spliterator";
import { Runnable as java_lang_Runnable, RunnableInterface as java_lang_RunnableInterface } from "./../../lang/Runnable";
import { LongSummaryStatistics as java_util_LongSummaryStatistics } from "./../LongSummaryStatistics";
import { IntStream as java_util_stream_IntStream } from "./IntStream";
import { LongToIntFunction as java_util_function_LongToIntFunction, LongToIntFunctionInterface as java_util_function_LongToIntFunctionInterface } from "./../function/LongToIntFunction";
import { Supplier as java_util_function_Supplier, SupplierInterface as java_util_function_SupplierInterface } from "./../function/Supplier";
import { ObjLongConsumer as java_util_function_ObjLongConsumer, ObjLongConsumerInterface as java_util_function_ObjLongConsumerInterface } from "./../function/ObjLongConsumer";
import { BiConsumer as java_util_function_BiConsumer, BiConsumerInterface as java_util_function_BiConsumerInterface } from "./../function/BiConsumer";
/**
 * This class just defines types, you should import {@link LongStream} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class LongStreamClass extends JavaClass {
    /**
     * @return original return type: 'java.util.OptionalDouble'
     */
    average(): Promise<java_util_OptionalDouble | null>;
    /**
     * @return original return type: 'java.util.OptionalDouble'
     */
    averageSync(): java_util_OptionalDouble | null;
    /**
     * @return original return type: 'java.util.stream.BaseStream'
     */
    sequential(): Promise<java_util_stream_BaseStream | null>;
    /**
     * @return original return type: 'java.util.stream.BaseStream'
     */
    sequentialSync(): java_util_stream_BaseStream | null;
    /**
     * @return original return type: 'java.util.stream.LongStream'
     */
    sequential(): Promise<LongStream | null>;
    /**
     * @return original return type: 'java.util.stream.LongStream'
     */
    sequentialSync(): LongStream | null;
    /**
     * @return original return type: 'java.util.stream.LongStream'
     */
    distinct(): Promise<LongStream | null>;
    /**
     * @return original return type: 'java.util.stream.LongStream'
     */
    distinctSync(): LongStream | null;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @return original return type: 'java.util.stream.LongStream'
     */
    static range(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number): Promise<LongStream | null>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @return original return type: 'java.util.stream.LongStream'
     */
    static rangeSync(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number): LongStream | null;
    /**
     * @param var0 original type: 'java.util.function.LongPredicate'
     * @return original return type: 'java.util.stream.LongStream'
     */
    takeWhile(var0: java_util_function_LongPredicate | JavaInterfaceProxy<java_util_function_LongPredicateInterface> | null): Promise<LongStream | null>;
    /**
     * @param var0 original type: 'java.util.function.LongPredicate'
     * @return original return type: 'java.util.stream.LongStream'
     */
    takeWhileSync(var0: java_util_function_LongPredicate | JavaInterfaceProxy<java_util_function_LongPredicateInterface> | null): LongStream | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.util.stream.LongStream'
     */
    skip(var0: java_lang_Long | bigint | number): Promise<LongStream | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.util.stream.LongStream'
     */
    skipSync(var0: java_lang_Long | bigint | number): LongStream | null;
    /**
     * @return original return type: 'long'
     */
    sum(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    sumSync(): number;
    /**
     * @return original return type: 'java.util.OptionalLong'
     */
    findFirst(): Promise<java_util_OptionalLong | null>;
    /**
     * @return original return type: 'java.util.OptionalLong'
     */
    findFirstSync(): java_util_OptionalLong | null;
    /**
     * @param var0 original type: 'java.util.function.LongPredicate'
     * @return original return type: 'boolean'
     */
    allMatch(var0: java_util_function_LongPredicate | JavaInterfaceProxy<java_util_function_LongPredicateInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.function.LongPredicate'
     * @return original return type: 'boolean'
     */
    allMatchSync(var0: java_util_function_LongPredicate | JavaInterfaceProxy<java_util_function_LongPredicateInterface> | null): boolean;
    /**
     * @param var0 original type: 'java.util.function.LongFunction'
     * @return original return type: 'java.util.stream.Stream'
     */
    mapToObj(var0: java_util_function_LongFunction | JavaInterfaceProxy<java_util_function_LongFunctionInterface> | null): Promise<java_util_stream_Stream | null>;
    /**
     * @param var0 original type: 'java.util.function.LongFunction'
     * @return original return type: 'java.util.stream.Stream'
     */
    mapToObjSync(var0: java_util_function_LongFunction | JavaInterfaceProxy<java_util_function_LongFunctionInterface> | null): java_util_stream_Stream | null;
    /**
     * @return original return type: 'java.util.stream.LongStream'
     */
    static empty(): Promise<LongStream | null>;
    /**
     * @return original return type: 'java.util.stream.LongStream'
     */
    static emptySync(): LongStream | null;
    /**
     * @return original return type: 'java.util.Iterator'
     */
    iterator(): Promise<java_util_Iterator | null>;
    /**
     * @return original return type: 'java.util.Iterator'
     */
    iteratorSync(): java_util_Iterator | null;
    /**
     * @return original return type: 'java.util.PrimitiveIterator$OfLong'
     */
    iterator(): Promise<java_util_PrimitiveIterator$OfLong | null>;
    /**
     * @return original return type: 'java.util.PrimitiveIterator$OfLong'
     */
    iteratorSync(): java_util_PrimitiveIterator$OfLong | null;
    /**
     * @param var0 original type: 'java.util.stream.LongStream$LongMapMultiConsumer'
     * @return original return type: 'java.util.stream.LongStream'
     */
    mapMulti(var0: java_util_stream_LongStream$LongMapMultiConsumer | JavaInterfaceProxy<java_util_stream_LongStream$LongMapMultiConsumerInterface> | null): Promise<LongStream | null>;
    /**
     * @param var0 original type: 'java.util.stream.LongStream$LongMapMultiConsumer'
     * @return original return type: 'java.util.stream.LongStream'
     */
    mapMultiSync(var0: java_util_stream_LongStream$LongMapMultiConsumer | JavaInterfaceProxy<java_util_stream_LongStream$LongMapMultiConsumerInterface> | null): LongStream | null;
    /**
     * @return original return type: 'java.util.OptionalLong'
     */
    min(): Promise<java_util_OptionalLong | null>;
    /**
     * @return original return type: 'java.util.OptionalLong'
     */
    minSync(): java_util_OptionalLong | null;
    /**
     * @return original return type: 'java.util.stream.DoubleStream'
     */
    asDoubleStream(): Promise<java_util_stream_DoubleStream | null>;
    /**
     * @return original return type: 'java.util.stream.DoubleStream'
     */
    asDoubleStreamSync(): java_util_stream_DoubleStream | null;
    /**
     * @return original return type: 'java.util.stream.LongStream'
     */
    parallel(): Promise<LongStream | null>;
    /**
     * @return original return type: 'java.util.stream.LongStream'
     */
    parallelSync(): LongStream | null;
    /**
     * @return original return type: 'java.util.stream.BaseStream'
     */
    parallel(): Promise<java_util_stream_BaseStream | null>;
    /**
     * @return original return type: 'java.util.stream.BaseStream'
     */
    parallelSync(): java_util_stream_BaseStream | null;
    /**
     * @return original return type: 'java.util.OptionalLong'
     */
    findAny(): Promise<java_util_OptionalLong | null>;
    /**
     * @return original return type: 'java.util.OptionalLong'
     */
    findAnySync(): java_util_OptionalLong | null;
    /**
     * @param var0 original type: 'java.util.function.LongPredicate'
     * @return original return type: 'boolean'
     */
    noneMatch(var0: java_util_function_LongPredicate | JavaInterfaceProxy<java_util_function_LongPredicateInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.function.LongPredicate'
     * @return original return type: 'boolean'
     */
    noneMatchSync(var0: java_util_function_LongPredicate | JavaInterfaceProxy<java_util_function_LongPredicateInterface> | null): boolean;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.util.stream.LongStream'
     */
    static of(var0: java_lang_Long | bigint | number): Promise<LongStream | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.util.stream.LongStream'
     */
    static ofSync(var0: java_lang_Long | bigint | number): LongStream | null;
    /**
     * @param var0 original type: 'long[]'
     * @return original return type: 'java.util.stream.LongStream'
     */
    static of(var0: (java_lang_Long | bigint | number)[] | null): Promise<LongStream | null>;
    /**
     * @param var0 original type: 'long[]'
     * @return original return type: 'java.util.stream.LongStream'
     */
    static ofSync(var0: (java_lang_Long | bigint | number)[] | null): LongStream | null;
    /**
     * @return original return type: 'long[]'
     */
    toArray(): Promise<(number)[] | null>;
    /**
     * @return original return type: 'long[]'
     */
    toArraySync(): (number)[] | null;
    /**
     * @return original return type: 'java.util.stream.LongStream$Builder'
     */
    static builder(): Promise<java_util_stream_LongStream$Builder | null>;
    /**
     * @return original return type: 'java.util.stream.LongStream$Builder'
     */
    static builderSync(): java_util_stream_LongStream$Builder | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.util.stream.LongStream'
     */
    limit(var0: java_lang_Long | bigint | number): Promise<LongStream | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.util.stream.LongStream'
     */
    limitSync(var0: java_lang_Long | bigint | number): LongStream | null;
    /**
     * @return original return type: 'boolean'
     */
    isParallel(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isParallelSync(): boolean;
    /**
     * @param var0 original type: 'java.util.function.LongConsumer'
     * @return original return type: 'void'
     */
    forEachOrdered(var0: java_util_function_LongConsumer | JavaInterfaceProxy<java_util_function_LongConsumerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.function.LongConsumer'
     * @return original return type: 'void'
     */
    forEachOrderedSync(var0: java_util_function_LongConsumer | JavaInterfaceProxy<java_util_function_LongConsumerInterface> | null): void;
    /**
     * @param var0 original type: 'java.util.function.LongUnaryOperator'
     * @return original return type: 'java.util.stream.LongStream'
     */
    map(var0: java_util_function_LongUnaryOperator | JavaInterfaceProxy<java_util_function_LongUnaryOperatorInterface> | null): Promise<LongStream | null>;
    /**
     * @param var0 original type: 'java.util.function.LongUnaryOperator'
     * @return original return type: 'java.util.stream.LongStream'
     */
    mapSync(var0: java_util_function_LongUnaryOperator | JavaInterfaceProxy<java_util_function_LongUnaryOperatorInterface> | null): LongStream | null;
    /**
     * @param var0 original type: 'java.util.function.LongPredicate'
     * @return original return type: 'boolean'
     */
    anyMatch(var0: java_util_function_LongPredicate | JavaInterfaceProxy<java_util_function_LongPredicateInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.function.LongPredicate'
     * @return original return type: 'boolean'
     */
    anyMatchSync(var0: java_util_function_LongPredicate | JavaInterfaceProxy<java_util_function_LongPredicateInterface> | null): boolean;
    /**
     * @param var0 original type: 'java.util.function.LongSupplier'
     * @return original return type: 'java.util.stream.LongStream'
     */
    static generate(var0: java_util_function_LongSupplier | JavaInterfaceProxy<java_util_function_LongSupplierInterface> | null): Promise<LongStream | null>;
    /**
     * @param var0 original type: 'java.util.function.LongSupplier'
     * @return original return type: 'java.util.stream.LongStream'
     */
    static generateSync(var0: java_util_function_LongSupplier | JavaInterfaceProxy<java_util_function_LongSupplierInterface> | null): LongStream | null;
    /**
     * @return original return type: 'void'
     */
    close(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    closeSync(): void;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.util.function.LongPredicate'
     * @param var2 original type: 'java.util.function.LongUnaryOperator'
     * @return original return type: 'java.util.stream.LongStream'
     */
    static iterate(var0: java_lang_Long | bigint | number, var1: java_util_function_LongPredicate | JavaInterfaceProxy<java_util_function_LongPredicateInterface> | null, var2: java_util_function_LongUnaryOperator | JavaInterfaceProxy<java_util_function_LongUnaryOperatorInterface> | null): Promise<LongStream | null>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.util.function.LongPredicate'
     * @param var2 original type: 'java.util.function.LongUnaryOperator'
     * @return original return type: 'java.util.stream.LongStream'
     */
    static iterateSync(var0: java_lang_Long | bigint | number, var1: java_util_function_LongPredicate | JavaInterfaceProxy<java_util_function_LongPredicateInterface> | null, var2: java_util_function_LongUnaryOperator | JavaInterfaceProxy<java_util_function_LongUnaryOperatorInterface> | null): LongStream | null;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.util.function.LongUnaryOperator'
     * @return original return type: 'java.util.stream.LongStream'
     */
    static iterate(var0: java_lang_Long | bigint | number, var1: java_util_function_LongUnaryOperator | JavaInterfaceProxy<java_util_function_LongUnaryOperatorInterface> | null): Promise<LongStream | null>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.util.function.LongUnaryOperator'
     * @return original return type: 'java.util.stream.LongStream'
     */
    static iterateSync(var0: java_lang_Long | bigint | number, var1: java_util_function_LongUnaryOperator | JavaInterfaceProxy<java_util_function_LongUnaryOperatorInterface> | null): LongStream | null;
    /**
     * @param var0 original type: 'java.util.function.LongToDoubleFunction'
     * @return original return type: 'java.util.stream.DoubleStream'
     */
    mapToDouble(var0: java_util_function_LongToDoubleFunction | JavaInterfaceProxy<java_util_function_LongToDoubleFunctionInterface> | null): Promise<java_util_stream_DoubleStream | null>;
    /**
     * @param var0 original type: 'java.util.function.LongToDoubleFunction'
     * @return original return type: 'java.util.stream.DoubleStream'
     */
    mapToDoubleSync(var0: java_util_function_LongToDoubleFunction | JavaInterfaceProxy<java_util_function_LongToDoubleFunctionInterface> | null): java_util_stream_DoubleStream | null;
    /**
     * @param var0 original type: 'java.util.function.LongBinaryOperator'
     * @return original return type: 'java.util.OptionalLong'
     */
    reduce(var0: java_util_function_LongBinaryOperator | JavaInterfaceProxy<java_util_function_LongBinaryOperatorInterface> | null): Promise<java_util_OptionalLong | null>;
    /**
     * @param var0 original type: 'java.util.function.LongBinaryOperator'
     * @return original return type: 'java.util.OptionalLong'
     */
    reduceSync(var0: java_util_function_LongBinaryOperator | JavaInterfaceProxy<java_util_function_LongBinaryOperatorInterface> | null): java_util_OptionalLong | null;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.util.function.LongBinaryOperator'
     * @return original return type: 'long'
     */
    reduce(var0: java_lang_Long | bigint | number, var1: java_util_function_LongBinaryOperator | JavaInterfaceProxy<java_util_function_LongBinaryOperatorInterface> | null): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.util.function.LongBinaryOperator'
     * @return original return type: 'long'
     */
    reduceSync(var0: java_lang_Long | bigint | number, var1: java_util_function_LongBinaryOperator | JavaInterfaceProxy<java_util_function_LongBinaryOperatorInterface> | null): number;
    /**
     * @return original return type: 'java.util.stream.BaseStream'
     */
    unordered(): Promise<java_util_stream_BaseStream | null>;
    /**
     * @return original return type: 'java.util.stream.BaseStream'
     */
    unorderedSync(): java_util_stream_BaseStream | null;
    /**
     * @return original return type: 'java.util.OptionalLong'
     */
    max(): Promise<java_util_OptionalLong | null>;
    /**
     * @return original return type: 'java.util.OptionalLong'
     */
    maxSync(): java_util_OptionalLong | null;
    /**
     * @return original return type: 'java.util.Spliterator$OfLong'
     */
    spliterator(): Promise<java_util_Spliterator$OfLong | null>;
    /**
     * @return original return type: 'java.util.Spliterator$OfLong'
     */
    spliteratorSync(): java_util_Spliterator$OfLong | null;
    /**
     * @return original return type: 'java.util.Spliterator'
     */
    spliterator(): Promise<java_util_Spliterator | null>;
    /**
     * @return original return type: 'java.util.Spliterator'
     */
    spliteratorSync(): java_util_Spliterator | null;
    /**
     * @param var0 original type: 'java.util.function.LongConsumer'
     * @return original return type: 'void'
     */
    forEach(var0: java_util_function_LongConsumer | JavaInterfaceProxy<java_util_function_LongConsumerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.function.LongConsumer'
     * @return original return type: 'void'
     */
    forEachSync(var0: java_util_function_LongConsumer | JavaInterfaceProxy<java_util_function_LongConsumerInterface> | null): void;
    /**
     * @return original return type: 'long'
     */
    count(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    countSync(): number;
    /**
     * @param var0 original type: 'java.util.stream.LongStream'
     * @param var1 original type: 'java.util.stream.LongStream'
     * @return original return type: 'java.util.stream.LongStream'
     */
    static concat(var0: LongStreamClass | JavaInterfaceProxy<LongStreamInterface> | null, var1: LongStreamClass | JavaInterfaceProxy<LongStreamInterface> | null): Promise<LongStream | null>;
    /**
     * @param var0 original type: 'java.util.stream.LongStream'
     * @param var1 original type: 'java.util.stream.LongStream'
     * @return original return type: 'java.util.stream.LongStream'
     */
    static concatSync(var0: LongStreamClass | JavaInterfaceProxy<LongStreamInterface> | null, var1: LongStreamClass | JavaInterfaceProxy<LongStreamInterface> | null): LongStream | null;
    /**
     * @param var0 original type: 'java.util.function.LongPredicate'
     * @return original return type: 'java.util.stream.LongStream'
     */
    dropWhile(var0: java_util_function_LongPredicate | JavaInterfaceProxy<java_util_function_LongPredicateInterface> | null): Promise<LongStream | null>;
    /**
     * @param var0 original type: 'java.util.function.LongPredicate'
     * @return original return type: 'java.util.stream.LongStream'
     */
    dropWhileSync(var0: java_util_function_LongPredicate | JavaInterfaceProxy<java_util_function_LongPredicateInterface> | null): LongStream | null;
    /**
     * @param var0 original type: 'java.util.function.LongConsumer'
     * @return original return type: 'java.util.stream.LongStream'
     */
    peek(var0: java_util_function_LongConsumer | JavaInterfaceProxy<java_util_function_LongConsumerInterface> | null): Promise<LongStream | null>;
    /**
     * @param var0 original type: 'java.util.function.LongConsumer'
     * @return original return type: 'java.util.stream.LongStream'
     */
    peekSync(var0: java_util_function_LongConsumer | JavaInterfaceProxy<java_util_function_LongConsumerInterface> | null): LongStream | null;
    /**
     * @param var0 original type: 'java.util.function.LongPredicate'
     * @return original return type: 'java.util.stream.LongStream'
     */
    filter(var0: java_util_function_LongPredicate | JavaInterfaceProxy<java_util_function_LongPredicateInterface> | null): Promise<LongStream | null>;
    /**
     * @param var0 original type: 'java.util.function.LongPredicate'
     * @return original return type: 'java.util.stream.LongStream'
     */
    filterSync(var0: java_util_function_LongPredicate | JavaInterfaceProxy<java_util_function_LongPredicateInterface> | null): LongStream | null;
    /**
     * @param var0 original type: 'java.util.function.LongFunction'
     * @return original return type: 'java.util.stream.LongStream'
     */
    flatMap(var0: java_util_function_LongFunction | JavaInterfaceProxy<java_util_function_LongFunctionInterface> | null): Promise<LongStream | null>;
    /**
     * @param var0 original type: 'java.util.function.LongFunction'
     * @return original return type: 'java.util.stream.LongStream'
     */
    flatMapSync(var0: java_util_function_LongFunction | JavaInterfaceProxy<java_util_function_LongFunctionInterface> | null): LongStream | null;
    /**
     * @return original return type: 'java.util.stream.LongStream'
     */
    sorted(): Promise<LongStream | null>;
    /**
     * @return original return type: 'java.util.stream.LongStream'
     */
    sortedSync(): LongStream | null;
    /**
     * @param var0 original type: 'java.lang.Runnable'
     * @return original return type: 'java.util.stream.BaseStream'
     */
    onClose(var0: java_lang_Runnable | JavaInterfaceProxy<java_lang_RunnableInterface> | null): Promise<java_util_stream_BaseStream | null>;
    /**
     * @param var0 original type: 'java.lang.Runnable'
     * @return original return type: 'java.util.stream.BaseStream'
     */
    onCloseSync(var0: java_lang_Runnable | JavaInterfaceProxy<java_lang_RunnableInterface> | null): java_util_stream_BaseStream | null;
    /**
     * @return original return type: 'java.util.stream.Stream'
     */
    boxed(): Promise<java_util_stream_Stream | null>;
    /**
     * @return original return type: 'java.util.stream.Stream'
     */
    boxedSync(): java_util_stream_Stream | null;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @return original return type: 'java.util.stream.LongStream'
     */
    static rangeClosed(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number): Promise<LongStream | null>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @return original return type: 'java.util.stream.LongStream'
     */
    static rangeClosedSync(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number): LongStream | null;
    /**
     * @return original return type: 'java.util.LongSummaryStatistics'
     */
    summaryStatistics(): Promise<java_util_LongSummaryStatistics | null>;
    /**
     * @return original return type: 'java.util.LongSummaryStatistics'
     */
    summaryStatisticsSync(): java_util_LongSummaryStatistics | null;
    /**
     * @param var0 original type: 'java.util.function.LongToIntFunction'
     * @return original return type: 'java.util.stream.IntStream'
     */
    mapToInt(var0: java_util_function_LongToIntFunction | JavaInterfaceProxy<java_util_function_LongToIntFunctionInterface> | null): Promise<java_util_stream_IntStream | null>;
    /**
     * @param var0 original type: 'java.util.function.LongToIntFunction'
     * @return original return type: 'java.util.stream.IntStream'
     */
    mapToIntSync(var0: java_util_function_LongToIntFunction | JavaInterfaceProxy<java_util_function_LongToIntFunctionInterface> | null): java_util_stream_IntStream | null;
    /**
     * @param var0 original type: 'java.util.function.Supplier'
     * @param var1 original type: 'java.util.function.ObjLongConsumer'
     * @param var2 original type: 'java.util.function.BiConsumer'
     * @return original return type: 'java.lang.Object'
     */
    collect(var0: java_util_function_Supplier | JavaInterfaceProxy<java_util_function_SupplierInterface> | null, var1: java_util_function_ObjLongConsumer | JavaInterfaceProxy<java_util_function_ObjLongConsumerInterface> | null, var2: java_util_function_BiConsumer | JavaInterfaceProxy<java_util_function_BiConsumerInterface> | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.util.function.Supplier'
     * @param var1 original type: 'java.util.function.ObjLongConsumer'
     * @param var2 original type: 'java.util.function.BiConsumer'
     * @return original return type: 'java.lang.Object'
     */
    collectSync(var0: java_util_function_Supplier | JavaInterfaceProxy<java_util_function_SupplierInterface> | null, var1: java_util_function_ObjLongConsumer | JavaInterfaceProxy<java_util_function_ObjLongConsumerInterface> | null, var2: java_util_function_BiConsumer | JavaInterfaceProxy<java_util_function_BiConsumerInterface> | null): BasicOrJavaType | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createLongStreamProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface LongStreamInterface {
    /**
     * @return original return type: 'java.util.OptionalDouble'
     */
    average(): java_util_OptionalDouble | null;
    /**
     * @return original return type: 'java.util.stream.BaseStream'
     */
    sequential?(): java_util_stream_BaseStream | null;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @return original return type: 'java.util.stream.LongStream'
     */
    sequential?(): LongStream | null;
    /**
     * @return original return type: 'java.util.stream.LongStream'
     */
    distinct(): LongStream | null;
    /**
     * @param var0 original type: 'java.util.function.LongPredicate'
     * @return original return type: 'java.util.stream.LongStream'
     */
    takeWhile?(var0: java_util_function_LongPredicate | JavaInterfaceProxy<java_util_function_LongPredicateInterface> | null): LongStream | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.util.stream.LongStream'
     */
    skip(var0: java_lang_Long | bigint | number): LongStream | null;
    /**
     * @return original return type: 'long'
     */
    sum(): number;
    /**
     * @return original return type: 'java.util.OptionalLong'
     */
    findFirst(): java_util_OptionalLong | null;
    /**
     * @param var0 original type: 'java.util.function.LongPredicate'
     * @return original return type: 'boolean'
     */
    allMatch(var0: java_util_function_LongPredicate | JavaInterfaceProxy<java_util_function_LongPredicateInterface> | null): boolean;
    /**
     * @param var0 original type: 'java.util.function.LongFunction'
     * @return original return type: 'java.util.stream.Stream'
     */
    mapToObj(var0: java_util_function_LongFunction | JavaInterfaceProxy<java_util_function_LongFunctionInterface> | null): java_util_stream_Stream | null;
    /**
     * @return original return type: 'java.util.Iterator'
     */
    iterator?(): java_util_Iterator | null;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @return original return type: 'java.util.PrimitiveIterator$OfLong'
     */
    iterator?(): java_util_PrimitiveIterator$OfLong | null;
    /**
     * @param var0 original type: 'java.util.stream.LongStream$LongMapMultiConsumer'
     * @return original return type: 'java.util.stream.LongStream'
     */
    mapMulti?(var0: java_util_stream_LongStream$LongMapMultiConsumer | JavaInterfaceProxy<java_util_stream_LongStream$LongMapMultiConsumerInterface> | null): LongStream | null;
    /**
     * @return original return type: 'java.util.OptionalLong'
     */
    min(): java_util_OptionalLong | null;
    /**
     * @return original return type: 'java.util.stream.DoubleStream'
     */
    asDoubleStream(): java_util_stream_DoubleStream | null;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @return original return type: 'java.util.stream.LongStream'
     */
    parallel?(): LongStream | null;
    /**
     * @return original return type: 'java.util.stream.BaseStream'
     */
    parallel?(): java_util_stream_BaseStream | null;
    /**
     * @return original return type: 'java.util.OptionalLong'
     */
    findAny(): java_util_OptionalLong | null;
    /**
     * @param var0 original type: 'java.util.function.LongPredicate'
     * @return original return type: 'boolean'
     */
    noneMatch(var0: java_util_function_LongPredicate | JavaInterfaceProxy<java_util_function_LongPredicateInterface> | null): boolean;
    /**
     * @return original return type: 'long[]'
     */
    toArray(): (number)[] | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.util.stream.LongStream'
     */
    limit(var0: java_lang_Long | bigint | number): LongStream | null;
    /**
     * @return original return type: 'boolean'
     */
    isParallel(): boolean;
    /**
     * @param var0 original type: 'java.util.function.LongConsumer'
     * @return original return type: 'void'
     */
    forEachOrdered(var0: java_util_function_LongConsumer | JavaInterfaceProxy<java_util_function_LongConsumerInterface> | null): void;
    /**
     * @param var0 original type: 'java.util.function.LongUnaryOperator'
     * @return original return type: 'java.util.stream.LongStream'
     */
    map(var0: java_util_function_LongUnaryOperator | JavaInterfaceProxy<java_util_function_LongUnaryOperatorInterface> | null): LongStream | null;
    /**
     * @param var0 original type: 'java.util.function.LongPredicate'
     * @return original return type: 'boolean'
     */
    anyMatch(var0: java_util_function_LongPredicate | JavaInterfaceProxy<java_util_function_LongPredicateInterface> | null): boolean;
    /**
     * @return original return type: 'void'
     */
    close(): void;
    /**
     * @param var0 original type: 'java.util.function.LongToDoubleFunction'
     * @return original return type: 'java.util.stream.DoubleStream'
     */
    mapToDouble(var0: java_util_function_LongToDoubleFunction | JavaInterfaceProxy<java_util_function_LongToDoubleFunctionInterface> | null): java_util_stream_DoubleStream | null;
    /**
     * @param var0 original type: 'java.util.function.LongBinaryOperator'
     * @return original return type: 'java.util.OptionalLong'
     */
    reduce(var0: java_util_function_LongBinaryOperator | JavaInterfaceProxy<java_util_function_LongBinaryOperatorInterface> | null): java_util_OptionalLong | null;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.util.function.LongBinaryOperator'
     * @return original return type: 'long'
     */
    reduce(var0: java_lang_Long | bigint | number, var1: java_util_function_LongBinaryOperator | JavaInterfaceProxy<java_util_function_LongBinaryOperatorInterface> | null): number;
    /**
     * @return original return type: 'java.util.stream.BaseStream'
     */
    unordered(): java_util_stream_BaseStream | null;
    /**
     * @return original return type: 'java.util.OptionalLong'
     */
    max(): java_util_OptionalLong | null;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @return original return type: 'java.util.Spliterator$OfLong'
     */
    spliterator?(): java_util_Spliterator$OfLong | null;
    /**
     * @return original return type: 'java.util.Spliterator'
     */
    spliterator?(): java_util_Spliterator | null;
    /**
     * @param var0 original type: 'java.util.function.LongConsumer'
     * @return original return type: 'void'
     */
    forEach(var0: java_util_function_LongConsumer | JavaInterfaceProxy<java_util_function_LongConsumerInterface> | null): void;
    /**
     * @return original return type: 'long'
     */
    count(): number;
    /**
     * @param var0 original type: 'java.util.function.LongPredicate'
     * @return original return type: 'java.util.stream.LongStream'
     */
    dropWhile?(var0: java_util_function_LongPredicate | JavaInterfaceProxy<java_util_function_LongPredicateInterface> | null): LongStream | null;
    /**
     * @param var0 original type: 'java.util.function.LongConsumer'
     * @return original return type: 'java.util.stream.LongStream'
     */
    peek(var0: java_util_function_LongConsumer | JavaInterfaceProxy<java_util_function_LongConsumerInterface> | null): LongStream | null;
    /**
     * @param var0 original type: 'java.util.function.LongPredicate'
     * @return original return type: 'java.util.stream.LongStream'
     */
    filter(var0: java_util_function_LongPredicate | JavaInterfaceProxy<java_util_function_LongPredicateInterface> | null): LongStream | null;
    /**
     * @param var0 original type: 'java.util.function.LongFunction'
     * @return original return type: 'java.util.stream.LongStream'
     */
    flatMap(var0: java_util_function_LongFunction | JavaInterfaceProxy<java_util_function_LongFunctionInterface> | null): LongStream | null;
    /**
     * @return original return type: 'java.util.stream.LongStream'
     */
    sorted(): LongStream | null;
    /**
     * @param var0 original type: 'java.lang.Runnable'
     * @return original return type: 'java.util.stream.BaseStream'
     */
    onClose(var0: java_lang_Runnable | JavaInterfaceProxy<java_lang_RunnableInterface> | null): java_util_stream_BaseStream | null;
    /**
     * @return original return type: 'java.util.stream.Stream'
     */
    boxed(): java_util_stream_Stream | null;
    /**
     * @return original return type: 'java.util.LongSummaryStatistics'
     */
    summaryStatistics(): java_util_LongSummaryStatistics | null;
    /**
     * @param var0 original type: 'java.util.function.LongToIntFunction'
     * @return original return type: 'java.util.stream.IntStream'
     */
    mapToInt(var0: java_util_function_LongToIntFunction | JavaInterfaceProxy<java_util_function_LongToIntFunctionInterface> | null): java_util_stream_IntStream | null;
    /**
     * @param var0 original type: 'java.util.function.Supplier'
     * @param var1 original type: 'java.util.function.ObjLongConsumer'
     * @param var2 original type: 'java.util.function.BiConsumer'
     * @return original return type: 'java.lang.Object'
     */
    collect(var0: java_util_function_Supplier | JavaInterfaceProxy<java_util_function_SupplierInterface> | null, var1: java_util_function_ObjLongConsumer | JavaInterfaceProxy<java_util_function_ObjLongConsumerInterface> | null, var2: java_util_function_BiConsumer | JavaInterfaceProxy<java_util_function_BiConsumerInterface> | null): BasicOrJavaType | null;
}
/**
 * Create a proxy for the {@link LongStream} interface.
 * All required methods in {@link LongStreamInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createLongStreamProxy(methods: LongStreamInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<LongStreamInterface>;
declare const LongStream_base: typeof LongStreamClass;
/**
 * Class java.util.stream.LongStream.
 *
 * This actually imports the java class for further use.
 * The class {@link LongStreamClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class LongStream extends LongStream_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default LongStream;
