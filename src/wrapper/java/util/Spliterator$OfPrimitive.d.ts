import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Spliterator as java_util_Spliterator } from "./Spliterator";
import { Consumer as java_util_function_Consumer, ConsumerInterface as java_util_function_ConsumerInterface } from "./function/Consumer";
import { Comparator as java_util_Comparator } from "./Comparator";
import { Integer as java_lang_Integer } from "./../lang/Integer";
/**
 * This class just defines types, you should import {@link Spliterator$OfPrimitive} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Spliterator$OfPrimitiveClass extends JavaClass {
    /**
     * @return original return type: 'java.util.Spliterator'
     */
    trySplit(): Promise<java_util_Spliterator | null>;
    /**
     * @return original return type: 'java.util.Spliterator'
     */
    trySplitSync(): java_util_Spliterator | null;
    /**
     * @return original return type: 'java.util.Spliterator$OfPrimitive'
     */
    trySplit(): Promise<Spliterator$OfPrimitive | null>;
    /**
     * @return original return type: 'java.util.Spliterator$OfPrimitive'
     */
    trySplitSync(): Spliterator$OfPrimitive | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    tryAdvance(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    tryAdvanceSync(var0: BasicOrJavaType | null): boolean;
    /**
     * @param var0 original type: 'java.util.function.Consumer'
     * @return original return type: 'boolean'
     */
    tryAdvance(var0: java_util_function_Consumer | JavaInterfaceProxy<java_util_function_ConsumerInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.function.Consumer'
     * @return original return type: 'boolean'
     */
    tryAdvanceSync(var0: java_util_function_Consumer | JavaInterfaceProxy<java_util_function_ConsumerInterface> | null): boolean;
    /**
     * @return original return type: 'int'
     */
    characteristics(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    characteristicsSync(): number;
    /**
     * @return original return type: 'java.util.Comparator'
     */
    getComparator(): Promise<java_util_Comparator | null>;
    /**
     * @return original return type: 'java.util.Comparator'
     */
    getComparatorSync(): java_util_Comparator | null;
    /**
     * @return original return type: 'long'
     */
    estimateSize(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    estimateSizeSync(): number;
    /**
     * @return original return type: 'long'
     */
    getExactSizeIfKnown(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    getExactSizeIfKnownSync(): number;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    forEachRemaining(var0: BasicOrJavaType | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    forEachRemainingSync(var0: BasicOrJavaType | null): void;
    /**
     * @param var0 original type: 'java.util.function.Consumer'
     * @return original return type: 'void'
     */
    forEachRemaining(var0: java_util_function_Consumer | JavaInterfaceProxy<java_util_function_ConsumerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.function.Consumer'
     * @return original return type: 'void'
     */
    forEachRemainingSync(var0: java_util_function_Consumer | JavaInterfaceProxy<java_util_function_ConsumerInterface> | null): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'boolean'
     */
    hasCharacteristics(var0: java_lang_Integer | number): Promise<boolean>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'boolean'
     */
    hasCharacteristicsSync(var0: java_lang_Integer | number): boolean;
    /**
     * Original type: 'int'
     */
    static readonly NONNULL: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SUBSIZED: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly ORDERED: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly DISTINCT: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SIZED: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly IMMUTABLE: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly CONCURRENT: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SORTED: java_lang_Integer | number;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createSpliterator$OfPrimitiveProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface Spliterator$OfPrimitiveInterface {
    /**
     * @return original return type: 'java.util.Spliterator'
     */
    trySplit?(): java_util_Spliterator | null;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @return original return type: 'java.util.Spliterator$OfPrimitive'
     */
    trySplit?(): Spliterator$OfPrimitive | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    tryAdvance(var0: BasicOrJavaType | null): boolean;
    /**
     * @param var0 original type: 'java.util.function.Consumer'
     * @return original return type: 'boolean'
     */
    tryAdvance(var0: java_util_function_Consumer | JavaInterfaceProxy<java_util_function_ConsumerInterface> | null): boolean;
    /**
     * @return original return type: 'int'
     */
    characteristics(): number;
    /**
     * @return original return type: 'java.util.Comparator'
     */
    getComparator?(): java_util_Comparator | null;
    /**
     * @return original return type: 'long'
     */
    estimateSize(): number;
    /**
     * @return original return type: 'long'
     */
    getExactSizeIfKnown?(): number;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    forEachRemaining?(var0: BasicOrJavaType | null): void;
    /**
     * @param var0 original type: 'java.util.function.Consumer'
     * @return original return type: 'void'
     */
    forEachRemaining?(var0: java_util_function_Consumer | JavaInterfaceProxy<java_util_function_ConsumerInterface> | null): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'boolean'
     */
    hasCharacteristics?(var0: java_lang_Integer | number): boolean;
}
/**
 * Create a proxy for the {@link Spliterator$OfPrimitive} interface.
 * All required methods in {@link Spliterator$OfPrimitiveInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createSpliterator$OfPrimitiveProxy(methods: Spliterator$OfPrimitiveInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<Spliterator$OfPrimitiveInterface>;
declare const Spliterator$OfPrimitive_base: typeof Spliterator$OfPrimitiveClass;
/**
 * Class java.util.Spliterator$OfPrimitive.
 *
 * This actually imports the java class for further use.
 * The class {@link Spliterator$OfPrimitiveClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Spliterator$OfPrimitive extends Spliterator$OfPrimitive_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default Spliterator$OfPrimitive;
