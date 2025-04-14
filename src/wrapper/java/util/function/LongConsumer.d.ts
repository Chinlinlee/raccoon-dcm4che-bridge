import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Long as java_lang_Long } from "./../../lang/Long";
/**
 * This class just defines types, you should import {@link LongConsumer} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class LongConsumerClass extends JavaClass {
    /**
     * @param var0 original type: 'java.util.function.LongConsumer'
     * @return original return type: 'java.util.function.LongConsumer'
     */
    andThen(var0: LongConsumerClass | JavaInterfaceProxy<LongConsumerInterface> | null): Promise<LongConsumer | null>;
    /**
     * @param var0 original type: 'java.util.function.LongConsumer'
     * @return original return type: 'java.util.function.LongConsumer'
     */
    andThenSync(var0: LongConsumerClass | JavaInterfaceProxy<LongConsumerInterface> | null): LongConsumer | null;
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
 * you should use {@link createLongConsumerProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface LongConsumerInterface {
    /**
     * @param var0 original type: 'java.util.function.LongConsumer'
     * @return original return type: 'java.util.function.LongConsumer'
     */
    andThen?(var0: LongConsumerClass | JavaInterfaceProxy<LongConsumerInterface> | null): LongConsumer | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    accept(var0: java_lang_Long | bigint | number): void;
}
/**
 * Create a proxy for the {@link LongConsumer} interface.
 * All required methods in {@link LongConsumerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createLongConsumerProxy(methods: LongConsumerInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<LongConsumerInterface>;
declare const LongConsumer_base: typeof LongConsumerClass;
/**
 * Class java.util.function.LongConsumer.
 *
 * This actually imports the java class for further use.
 * The class {@link LongConsumerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class LongConsumer extends LongConsumer_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default LongConsumer;
