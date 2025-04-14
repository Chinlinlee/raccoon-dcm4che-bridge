import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
/**
 * This class just defines types, you should import {@link IntUnaryOperator} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IntUnaryOperatorClass extends JavaClass {
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    applyAsInt(var0: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    applyAsIntSync(var0: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'java.util.function.IntUnaryOperator'
     * @return original return type: 'java.util.function.IntUnaryOperator'
     */
    compose(var0: IntUnaryOperatorClass | JavaInterfaceProxy<IntUnaryOperatorInterface> | null): Promise<IntUnaryOperator | null>;
    /**
     * @param var0 original type: 'java.util.function.IntUnaryOperator'
     * @return original return type: 'java.util.function.IntUnaryOperator'
     */
    composeSync(var0: IntUnaryOperatorClass | JavaInterfaceProxy<IntUnaryOperatorInterface> | null): IntUnaryOperator | null;
    /**
     * @return original return type: 'java.util.function.IntUnaryOperator'
     */
    static identity(): Promise<IntUnaryOperator | null>;
    /**
     * @return original return type: 'java.util.function.IntUnaryOperator'
     */
    static identitySync(): IntUnaryOperator | null;
    /**
     * @param var0 original type: 'java.util.function.IntUnaryOperator'
     * @return original return type: 'java.util.function.IntUnaryOperator'
     */
    andThen(var0: IntUnaryOperatorClass | JavaInterfaceProxy<IntUnaryOperatorInterface> | null): Promise<IntUnaryOperator | null>;
    /**
     * @param var0 original type: 'java.util.function.IntUnaryOperator'
     * @return original return type: 'java.util.function.IntUnaryOperator'
     */
    andThenSync(var0: IntUnaryOperatorClass | JavaInterfaceProxy<IntUnaryOperatorInterface> | null): IntUnaryOperator | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createIntUnaryOperatorProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface IntUnaryOperatorInterface {
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    applyAsInt(var0: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'java.util.function.IntUnaryOperator'
     * @return original return type: 'java.util.function.IntUnaryOperator'
     */
    compose?(var0: IntUnaryOperatorClass | JavaInterfaceProxy<IntUnaryOperatorInterface> | null): IntUnaryOperator | null;
    /**
     * @param var0 original type: 'java.util.function.IntUnaryOperator'
     * @return original return type: 'java.util.function.IntUnaryOperator'
     */
    andThen?(var0: IntUnaryOperatorClass | JavaInterfaceProxy<IntUnaryOperatorInterface> | null): IntUnaryOperator | null;
}
/**
 * Create a proxy for the {@link IntUnaryOperator} interface.
 * All required methods in {@link IntUnaryOperatorInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createIntUnaryOperatorProxy(methods: IntUnaryOperatorInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<IntUnaryOperatorInterface>;
declare const IntUnaryOperator_base: typeof IntUnaryOperatorClass;
/**
 * Class java.util.function.IntUnaryOperator.
 *
 * This actually imports the java class for further use.
 * The class {@link IntUnaryOperatorClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IntUnaryOperator extends IntUnaryOperator_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default IntUnaryOperator;
