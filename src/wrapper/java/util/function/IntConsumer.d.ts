import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
/**
 * This class just defines types, you should import {@link IntConsumer} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IntConsumerClass extends JavaClass {
    /**
     * @param var0 original type: 'java.util.function.IntConsumer'
     * @return original return type: 'java.util.function.IntConsumer'
     */
    andThen(var0: IntConsumerClass | JavaInterfaceProxy<IntConsumerInterface> | null): Promise<IntConsumer | null>;
    /**
     * @param var0 original type: 'java.util.function.IntConsumer'
     * @return original return type: 'java.util.function.IntConsumer'
     */
    andThenSync(var0: IntConsumerClass | JavaInterfaceProxy<IntConsumerInterface> | null): IntConsumer | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    accept(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    acceptSync(var0: java_lang_Integer | number): void;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createIntConsumerProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface IntConsumerInterface {
    /**
     * @param var0 original type: 'java.util.function.IntConsumer'
     * @return original return type: 'java.util.function.IntConsumer'
     */
    andThen?(var0: IntConsumerClass | JavaInterfaceProxy<IntConsumerInterface> | null): IntConsumer | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    accept(var0: java_lang_Integer | number): void;
}
/**
 * Create a proxy for the {@link IntConsumer} interface.
 * All required methods in {@link IntConsumerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createIntConsumerProxy(methods: IntConsumerInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<IntConsumerInterface>;
declare const IntConsumer_base: typeof IntConsumerClass;
/**
 * Class java.util.function.IntConsumer.
 *
 * This actually imports the java class for further use.
 * The class {@link IntConsumerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IntConsumer extends IntConsumer_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default IntConsumer;
