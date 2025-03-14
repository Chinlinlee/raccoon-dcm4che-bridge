import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { ToDoubleFunction as java_util_function_ToDoubleFunction, ToDoubleFunctionInterface as java_util_function_ToDoubleFunctionInterface } from "./function/ToDoubleFunction";
import { ToIntFunction as java_util_function_ToIntFunction, ToIntFunctionInterface as java_util_function_ToIntFunctionInterface } from "./function/ToIntFunction";
import { ToLongFunction as java_util_function_ToLongFunction, ToLongFunctionInterface as java_util_function_ToLongFunctionInterface } from "./function/ToLongFunction";
import { Function as java_util_function_Function, FunctionInterface as java_util_function_FunctionInterface } from "./function/Function";
/**
 * This class just defines types, you should import {@link Comparator} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ComparatorClass extends JavaClass {
    /**
     * @param var0 original type: 'java.util.function.ToDoubleFunction'
     * @return original return type: 'java.util.Comparator'
     */
    static comparingDouble(var0: java_util_function_ToDoubleFunction | JavaInterfaceProxy<java_util_function_ToDoubleFunctionInterface> | null): Promise<Comparator | null>;
    /**
     * @param var0 original type: 'java.util.function.ToDoubleFunction'
     * @return original return type: 'java.util.Comparator'
     */
    static comparingDoubleSync(var0: java_util_function_ToDoubleFunction | JavaInterfaceProxy<java_util_function_ToDoubleFunctionInterface> | null): Comparator | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    compare(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    compareSync(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): number;
    /**
     * @return original return type: 'java.util.Comparator'
     */
    static naturalOrder(): Promise<Comparator | null>;
    /**
     * @return original return type: 'java.util.Comparator'
     */
    static naturalOrderSync(): Comparator | null;
    /**
     * @param var0 original type: 'java.util.function.ToIntFunction'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparingInt(var0: java_util_function_ToIntFunction | JavaInterfaceProxy<java_util_function_ToIntFunctionInterface> | null): Promise<Comparator | null>;
    /**
     * @param var0 original type: 'java.util.function.ToIntFunction'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparingIntSync(var0: java_util_function_ToIntFunction | JavaInterfaceProxy<java_util_function_ToIntFunctionInterface> | null): Comparator | null;
    /**
     * @param var0 original type: 'java.util.function.ToLongFunction'
     * @return original return type: 'java.util.Comparator'
     */
    static comparingLong(var0: java_util_function_ToLongFunction | JavaInterfaceProxy<java_util_function_ToLongFunctionInterface> | null): Promise<Comparator | null>;
    /**
     * @param var0 original type: 'java.util.function.ToLongFunction'
     * @return original return type: 'java.util.Comparator'
     */
    static comparingLongSync(var0: java_util_function_ToLongFunction | JavaInterfaceProxy<java_util_function_ToLongFunctionInterface> | null): Comparator | null;
    /**
     * @return original return type: 'java.util.Comparator'
     */
    static reverseOrder(): Promise<Comparator | null>;
    /**
     * @return original return type: 'java.util.Comparator'
     */
    static reverseOrderSync(): Comparator | null;
    /**
     * @param var0 original type: 'java.util.function.ToDoubleFunction'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparingDouble(var0: java_util_function_ToDoubleFunction | JavaInterfaceProxy<java_util_function_ToDoubleFunctionInterface> | null): Promise<Comparator | null>;
    /**
     * @param var0 original type: 'java.util.function.ToDoubleFunction'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparingDoubleSync(var0: java_util_function_ToDoubleFunction | JavaInterfaceProxy<java_util_function_ToDoubleFunctionInterface> | null): Comparator | null;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.Comparator'
     */
    static comparing(var0: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null): Promise<Comparator | null>;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.Comparator'
     */
    static comparingSync(var0: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null): Comparator | null;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @param var1 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.Comparator'
     */
    static comparing(var0: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null, var1: ComparatorClass | JavaInterfaceProxy<ComparatorInterface> | null): Promise<Comparator | null>;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @param var1 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.Comparator'
     */
    static comparingSync(var0: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null, var1: ComparatorClass | JavaInterfaceProxy<ComparatorInterface> | null): Comparator | null;
    /**
     * @param var0 original type: 'java.util.function.ToLongFunction'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparingLong(var0: java_util_function_ToLongFunction | JavaInterfaceProxy<java_util_function_ToLongFunctionInterface> | null): Promise<Comparator | null>;
    /**
     * @param var0 original type: 'java.util.function.ToLongFunction'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparingLongSync(var0: java_util_function_ToLongFunction | JavaInterfaceProxy<java_util_function_ToLongFunctionInterface> | null): Comparator | null;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @param var1 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparing(var0: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null, var1: ComparatorClass | JavaInterfaceProxy<ComparatorInterface> | null): Promise<Comparator | null>;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @param var1 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparingSync(var0: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null, var1: ComparatorClass | JavaInterfaceProxy<ComparatorInterface> | null): Comparator | null;
    /**
     * @param var0 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparing(var0: ComparatorClass | JavaInterfaceProxy<ComparatorInterface> | null): Promise<Comparator | null>;
    /**
     * @param var0 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparingSync(var0: ComparatorClass | JavaInterfaceProxy<ComparatorInterface> | null): Comparator | null;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparing(var0: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null): Promise<Comparator | null>;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparingSync(var0: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null): Comparator | null;
    /**
     * @param var0 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.Comparator'
     */
    static nullsLast(var0: ComparatorClass | JavaInterfaceProxy<ComparatorInterface> | null): Promise<Comparator | null>;
    /**
     * @param var0 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.Comparator'
     */
    static nullsLastSync(var0: ComparatorClass | JavaInterfaceProxy<ComparatorInterface> | null): Comparator | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equals(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equalsSync(var0: BasicOrJavaType | null): boolean;
    /**
     * @param var0 original type: 'java.util.function.ToIntFunction'
     * @return original return type: 'java.util.Comparator'
     */
    static comparingInt(var0: java_util_function_ToIntFunction | JavaInterfaceProxy<java_util_function_ToIntFunctionInterface> | null): Promise<Comparator | null>;
    /**
     * @param var0 original type: 'java.util.function.ToIntFunction'
     * @return original return type: 'java.util.Comparator'
     */
    static comparingIntSync(var0: java_util_function_ToIntFunction | JavaInterfaceProxy<java_util_function_ToIntFunctionInterface> | null): Comparator | null;
    /**
     * @param var0 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.Comparator'
     */
    static nullsFirst(var0: ComparatorClass | JavaInterfaceProxy<ComparatorInterface> | null): Promise<Comparator | null>;
    /**
     * @param var0 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.Comparator'
     */
    static nullsFirstSync(var0: ComparatorClass | JavaInterfaceProxy<ComparatorInterface> | null): Comparator | null;
    /**
     * @return original return type: 'java.util.Comparator'
     */
    reversed(): Promise<Comparator | null>;
    /**
     * @return original return type: 'java.util.Comparator'
     */
    reversedSync(): Comparator | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createComparatorProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface ComparatorInterface {
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    compare(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): number;
    /**
     * @param var0 original type: 'java.util.function.ToIntFunction'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparingInt?(var0: java_util_function_ToIntFunction | JavaInterfaceProxy<java_util_function_ToIntFunctionInterface> | null): Comparator | null;
    /**
     * @param var0 original type: 'java.util.function.ToDoubleFunction'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparingDouble?(var0: java_util_function_ToDoubleFunction | JavaInterfaceProxy<java_util_function_ToDoubleFunctionInterface> | null): Comparator | null;
    /**
     * @param var0 original type: 'java.util.function.ToLongFunction'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparingLong?(var0: java_util_function_ToLongFunction | JavaInterfaceProxy<java_util_function_ToLongFunctionInterface> | null): Comparator | null;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @param var1 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparing?(var0: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null, var1: ComparatorClass | JavaInterfaceProxy<ComparatorInterface> | null): Comparator | null;
    /**
     * @param var0 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparing?(var0: ComparatorClass | JavaInterfaceProxy<ComparatorInterface> | null): Comparator | null;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparing?(var0: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null): Comparator | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equals(var0: BasicOrJavaType | null): boolean;
    /**
     * @return original return type: 'java.util.Comparator'
     */
    reversed?(): Comparator | null;
}
/**
 * Create a proxy for the {@link Comparator} interface.
 * All required methods in {@link ComparatorInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createComparatorProxy(methods: ComparatorInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<ComparatorInterface>;
declare const Comparator_base: typeof ComparatorClass;
/**
 * Class java.util.Comparator.
 *
 * This actually imports the java class for further use.
 * The class {@link ComparatorClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Comparator extends Comparator_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default Comparator;
//# sourceMappingURL=Comparator.d.ts.map