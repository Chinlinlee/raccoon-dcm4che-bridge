import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
/**
 * This class just defines types, you should import {@link IntBinaryOperator} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IntBinaryOperatorClass extends JavaClass {
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    applyAsInt(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    applyAsIntSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): number;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createIntBinaryOperatorProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface IntBinaryOperatorInterface {
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    applyAsInt(var0: java_lang_Integer | number, var1: java_lang_Integer | number): number;
}
/**
 * Create a proxy for the {@link IntBinaryOperator} interface.
 * All required methods in {@link IntBinaryOperatorInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createIntBinaryOperatorProxy(methods: IntBinaryOperatorInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<IntBinaryOperatorInterface>;
declare const IntBinaryOperator_base: typeof IntBinaryOperatorClass;
/**
 * Class java.util.function.IntBinaryOperator.
 *
 * This actually imports the java class for further use.
 * The class {@link IntBinaryOperatorClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IntBinaryOperator extends IntBinaryOperator_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default IntBinaryOperator;
