import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Long as java_lang_Long } from "./../../lang/Long";
/**
 * This class just defines types, you should import {@link LongFunction} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class LongFunctionClass extends JavaClass {
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.Object'
     */
    apply(var0: java_lang_Long | bigint | number): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.Object'
     */
    applySync(var0: java_lang_Long | bigint | number): BasicOrJavaType | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createLongFunctionProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface LongFunctionInterface {
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.Object'
     */
    apply(var0: java_lang_Long | bigint | number): BasicOrJavaType | null;
}
/**
 * Create a proxy for the {@link LongFunction} interface.
 * All required methods in {@link LongFunctionInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createLongFunctionProxy(methods: LongFunctionInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<LongFunctionInterface>;
declare const LongFunction_base: typeof LongFunctionClass;
/**
 * Class java.util.function.LongFunction.
 *
 * This actually imports the java class for further use.
 * The class {@link LongFunctionClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class LongFunction extends LongFunction_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default LongFunction;
