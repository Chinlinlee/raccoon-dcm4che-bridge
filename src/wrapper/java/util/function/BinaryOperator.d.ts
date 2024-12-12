import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Comparator as java_util_Comparator, ComparatorInterface as java_util_ComparatorInterface } from "./../Comparator";
import { BiFunction as java_util_function_BiFunction } from "./BiFunction";
import { Function as java_util_function_Function, FunctionInterface as java_util_function_FunctionInterface } from "./Function";
/**
 * This class just defines types, you should import {@link BinaryOperator} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class BinaryOperatorClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    apply(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    applySync(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.function.BinaryOperator'
     */
    static maxBy(var0: java_util_Comparator | JavaInterfaceProxy<java_util_ComparatorInterface> | null): Promise<BinaryOperator | null>;
    /**
     * @param var0 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.function.BinaryOperator'
     */
    static maxBySync(var0: java_util_Comparator | JavaInterfaceProxy<java_util_ComparatorInterface> | null): BinaryOperator | null;
    /**
     * @param var0 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.function.BinaryOperator'
     */
    static minBy(var0: java_util_Comparator | JavaInterfaceProxy<java_util_ComparatorInterface> | null): Promise<BinaryOperator | null>;
    /**
     * @param var0 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.function.BinaryOperator'
     */
    static minBySync(var0: java_util_Comparator | JavaInterfaceProxy<java_util_ComparatorInterface> | null): BinaryOperator | null;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.function.BiFunction'
     */
    andThen(var0: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null): Promise<java_util_function_BiFunction | null>;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.function.BiFunction'
     */
    andThenSync(var0: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null): java_util_function_BiFunction | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createBinaryOperatorProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface BinaryOperatorInterface {
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    apply(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.function.BiFunction'
     */
    andThen?(var0: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null): java_util_function_BiFunction | null;
}
/**
 * Create a proxy for the {@link BinaryOperator} interface.
 * All required methods in {@link BinaryOperatorInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createBinaryOperatorProxy(methods: BinaryOperatorInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<BinaryOperatorInterface>;
declare const BinaryOperator_base: typeof BinaryOperatorClass;
/**
 * Class java.util.function.BinaryOperator.
 *
 * This actually imports the java class for further use.
 * The class {@link BinaryOperatorClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class BinaryOperator extends BinaryOperator_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default BinaryOperator;
//# sourceMappingURL=BinaryOperator.d.ts.map