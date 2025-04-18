import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { IntConsumer as java_util_function_IntConsumer, IntConsumerInterface as java_util_function_IntConsumerInterface } from "./../function/IntConsumer";
/**
 * This class just defines types, you should import {@link IntStream$IntMapMultiConsumer} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IntStream$IntMapMultiConsumerClass extends JavaClass {
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.util.function.IntConsumer'
     * @return original return type: 'void'
     */
    accept(var0: java_lang_Integer | number, var1: java_util_function_IntConsumer | JavaInterfaceProxy<java_util_function_IntConsumerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.util.function.IntConsumer'
     * @return original return type: 'void'
     */
    acceptSync(var0: java_lang_Integer | number, var1: java_util_function_IntConsumer | JavaInterfaceProxy<java_util_function_IntConsumerInterface> | null): void;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createIntStream$IntMapMultiConsumerProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface IntStream$IntMapMultiConsumerInterface {
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.util.function.IntConsumer'
     * @return original return type: 'void'
     */
    accept(var0: java_lang_Integer | number, var1: java_util_function_IntConsumer | JavaInterfaceProxy<java_util_function_IntConsumerInterface> | null): void;
}
/**
 * Create a proxy for the {@link IntStream$IntMapMultiConsumer} interface.
 * All required methods in {@link IntStream$IntMapMultiConsumerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createIntStream$IntMapMultiConsumerProxy(methods: IntStream$IntMapMultiConsumerInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<IntStream$IntMapMultiConsumerInterface>;
declare const IntStream$IntMapMultiConsumer_base: typeof IntStream$IntMapMultiConsumerClass;
/**
 * Class java.util.stream.IntStream$IntMapMultiConsumer.
 *
 * This actually imports the java class for further use.
 * The class {@link IntStream$IntMapMultiConsumerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IntStream$IntMapMultiConsumer extends IntStream$IntMapMultiConsumer_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default IntStream$IntMapMultiConsumer;
