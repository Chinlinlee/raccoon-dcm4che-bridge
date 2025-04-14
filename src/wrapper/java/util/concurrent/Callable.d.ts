import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
/**
 * This class just defines types, you should import {@link Callable} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class CallableClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.Object'
     */
    call(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    callSync(): BasicOrJavaType | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createCallableProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface CallableInterface {
    /**
     * @return original return type: 'java.lang.Object'
     */
    call(): BasicOrJavaType | null;
}
/**
 * Create a proxy for the {@link Callable} interface.
 * All required methods in {@link CallableInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createCallableProxy(methods: CallableInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<CallableInterface>;
declare const Callable_base: typeof CallableClass;
/**
 * Class java.util.concurrent.Callable.
 *
 * This actually imports the java class for further use.
 * The class {@link CallableClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Callable extends Callable_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default Callable;
