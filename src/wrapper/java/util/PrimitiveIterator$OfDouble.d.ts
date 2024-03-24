import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { DoubleConsumer as java_util_function_DoubleConsumer, DoubleConsumerInterface as java_util_function_DoubleConsumerInterface } from "./function/DoubleConsumer";
import { Consumer as java_util_function_Consumer, ConsumerInterface as java_util_function_ConsumerInterface } from "./function/Consumer";
/**
 * This class just defines types, you should import {@link PrimitiveIterator$OfDouble} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PrimitiveIterator$OfDoubleClass extends JavaClass {
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
     * @param var0 original type: 'java.util.function.DoubleConsumer'
     * @return original return type: 'void'
     */
    forEachRemaining(var0: java_util_function_DoubleConsumer | JavaInterfaceProxy<java_util_function_DoubleConsumerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.function.DoubleConsumer'
     * @return original return type: 'void'
     */
    forEachRemainingSync(var0: java_util_function_DoubleConsumer | JavaInterfaceProxy<java_util_function_DoubleConsumerInterface> | null): void;
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
     * @return original return type: 'java.lang.Object'
     */
    next(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    nextSync(): BasicOrJavaType | null;
    /**
     * @return original return type: 'java.lang.Double'
     */
    next(): Promise<number | null>;
    /**
     * @return original return type: 'java.lang.Double'
     */
    nextSync(): number | null;
    /**
     * @return original return type: 'double'
     */
    nextDouble(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    nextDoubleSync(): number;
    /**
     * @return original return type: 'void'
     */
    remove(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    removeSync(): void;
    /**
     * @return original return type: 'boolean'
     */
    hasNext(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasNextSync(): boolean;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createPrimitiveIterator$OfDoubleProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface PrimitiveIterator$OfDoubleInterface {
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    forEachRemaining?(var0: BasicOrJavaType | null): void;
    /**
     * @param var0 original type: 'java.util.function.DoubleConsumer'
     * @return original return type: 'void'
     */
    forEachRemaining?(var0: java_util_function_DoubleConsumer | JavaInterfaceProxy<java_util_function_DoubleConsumerInterface> | null): void;
    /**
     * @param var0 original type: 'java.util.function.Consumer'
     * @return original return type: 'void'
     */
    forEachRemaining?(var0: java_util_function_Consumer | JavaInterfaceProxy<java_util_function_ConsumerInterface> | null): void;
    /**
     * @return original return type: 'java.lang.Object'
     */
    next?(): BasicOrJavaType | null;
    /**
     * @return original return type: 'java.lang.Double'
     */
    next?(): number | null;
    /**
     * @return original return type: 'double'
     */
    nextDouble(): number;
    /**
     * @return original return type: 'void'
     */
    remove?(): void;
    /**
     * @return original return type: 'boolean'
     */
    hasNext(): boolean;
}
/**
 * Create a proxy for the {@link PrimitiveIterator$OfDouble} interface.
 * All required methods in {@link PrimitiveIterator$OfDoubleInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createPrimitiveIterator$OfDoubleProxy(methods: PrimitiveIterator$OfDoubleInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<PrimitiveIterator$OfDoubleInterface>;
declare const PrimitiveIterator$OfDouble_base: typeof PrimitiveIterator$OfDoubleClass;
/**
 * Class java.util.PrimitiveIterator$OfDouble.
 *
 * This actually imports the java class for further use.
 * The class {@link PrimitiveIterator$OfDoubleClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PrimitiveIterator$OfDouble extends PrimitiveIterator$OfDouble_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default PrimitiveIterator$OfDouble;
//# sourceMappingURL=PrimitiveIterator$OfDouble.d.ts.map