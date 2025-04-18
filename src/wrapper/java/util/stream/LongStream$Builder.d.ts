import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Long as java_lang_Long } from "./../../lang/Long";
import { LongStream as java_util_stream_LongStream } from "./LongStream";
import { LongConsumer as java_util_function_LongConsumer, LongConsumerInterface as java_util_function_LongConsumerInterface } from "./../function/LongConsumer";
/**
 * This class just defines types, you should import {@link LongStream$Builder} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class LongStream$BuilderClass extends JavaClass {
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.util.stream.LongStream$Builder'
     */
    add(var0: java_lang_Long | bigint | number): Promise<LongStream$Builder | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.util.stream.LongStream$Builder'
     */
    addSync(var0: java_lang_Long | bigint | number): LongStream$Builder | null;
    /**
     * @return original return type: 'java.util.stream.LongStream'
     */
    build(): Promise<java_util_stream_LongStream | null>;
    /**
     * @return original return type: 'java.util.stream.LongStream'
     */
    buildSync(): java_util_stream_LongStream | null;
    /**
     * @param var0 original type: 'java.util.function.LongConsumer'
     * @return original return type: 'java.util.function.LongConsumer'
     */
    andThen(var0: java_util_function_LongConsumer | JavaInterfaceProxy<java_util_function_LongConsumerInterface> | null): Promise<java_util_function_LongConsumer | null>;
    /**
     * @param var0 original type: 'java.util.function.LongConsumer'
     * @return original return type: 'java.util.function.LongConsumer'
     */
    andThenSync(var0: java_util_function_LongConsumer | JavaInterfaceProxy<java_util_function_LongConsumerInterface> | null): java_util_function_LongConsumer | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    accept(var0: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    acceptSync(var0: java_lang_Long | bigint | number): void;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createLongStream$BuilderProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface LongStream$BuilderInterface {
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.util.stream.LongStream$Builder'
     */
    add?(var0: java_lang_Long | bigint | number): LongStream$Builder | null;
    /**
     * @return original return type: 'java.util.stream.LongStream'
     */
    build(): java_util_stream_LongStream | null;
    /**
     * @param var0 original type: 'java.util.function.LongConsumer'
     * @return original return type: 'java.util.function.LongConsumer'
     */
    andThen?(var0: java_util_function_LongConsumer | JavaInterfaceProxy<java_util_function_LongConsumerInterface> | null): java_util_function_LongConsumer | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    accept(var0: java_lang_Long | bigint | number): void;
}
/**
 * Create a proxy for the {@link LongStream$Builder} interface.
 * All required methods in {@link LongStream$BuilderInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createLongStream$BuilderProxy(methods: LongStream$BuilderInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<LongStream$BuilderInterface>;
declare const LongStream$Builder_base: typeof LongStream$BuilderClass;
/**
 * Class java.util.stream.LongStream$Builder.
 *
 * This actually imports the java class for further use.
 * The class {@link LongStream$BuilderClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class LongStream$Builder extends LongStream$Builder_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default LongStream$Builder;
