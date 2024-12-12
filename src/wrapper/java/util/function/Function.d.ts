import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
/**
 * This class just defines types, you should import {@link Function} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FunctionClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    apply(var0: BasicOrJavaType | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    applySync(var0: BasicOrJavaType | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.function.Function'
     */
    compose(var0: FunctionClass | JavaInterfaceProxy<FunctionInterface> | null): Promise<Function | null>;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.function.Function'
     */
    composeSync(var0: FunctionClass | JavaInterfaceProxy<FunctionInterface> | null): Function | null;
    /**
     * @return original return type: 'java.util.function.Function'
     */
    static identity(): Promise<Function | null>;
    /**
     * @return original return type: 'java.util.function.Function'
     */
    static identitySync(): Function | null;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.function.Function'
     */
    andThen(var0: FunctionClass | JavaInterfaceProxy<FunctionInterface> | null): Promise<Function | null>;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.function.Function'
     */
    andThenSync(var0: FunctionClass | JavaInterfaceProxy<FunctionInterface> | null): Function | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createFunctionProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface FunctionInterface {
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    apply(var0: BasicOrJavaType | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.function.Function'
     */
    compose?(var0: FunctionClass | JavaInterfaceProxy<FunctionInterface> | null): Function | null;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.function.Function'
     */
    andThen?(var0: FunctionClass | JavaInterfaceProxy<FunctionInterface> | null): Function | null;
}
/**
 * Create a proxy for the {@link Function} interface.
 * All required methods in {@link FunctionInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createFunctionProxy(methods: FunctionInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<FunctionInterface>;
declare const Function_base: typeof FunctionClass;
/**
 * Class java.util.function.Function.
 *
 * This actually imports the java class for further use.
 * The class {@link FunctionClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Function extends Function_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default Function;
//# sourceMappingURL=Function.d.ts.map