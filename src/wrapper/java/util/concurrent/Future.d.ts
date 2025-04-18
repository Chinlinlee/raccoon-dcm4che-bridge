import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Boolean as java_lang_Boolean } from "./../../lang/Boolean";
import { Long as java_lang_Long } from "./../../lang/Long";
import { TimeUnit as java_util_concurrent_TimeUnit } from "./TimeUnit";
/**
 * This class just defines types, you should import {@link Future} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FutureClass extends JavaClass {
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    cancel(var0: java_lang_Boolean | boolean): Promise<boolean>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    cancelSync(var0: java_lang_Boolean | boolean): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isCancelled(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isCancelledSync(): boolean;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.util.concurrent.TimeUnit'
     * @return original return type: 'java.lang.Object'
     */
    get(var0: java_lang_Long | bigint | number, var1: java_util_concurrent_TimeUnit | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.util.concurrent.TimeUnit'
     * @return original return type: 'java.lang.Object'
     */
    getSync(var0: java_lang_Long | bigint | number, var1: java_util_concurrent_TimeUnit | null): BasicOrJavaType | null;
    /**
     * @return original return type: 'java.lang.Object'
     */
    get(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    getSync(): BasicOrJavaType | null;
    /**
     * @return original return type: 'boolean'
     */
    isDone(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isDoneSync(): boolean;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createFutureProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface FutureInterface {
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    cancel(var0: java_lang_Boolean | boolean): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isCancelled(): boolean;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.util.concurrent.TimeUnit'
     * @return original return type: 'java.lang.Object'
     */
    get(var0: java_lang_Long | bigint | number, var1: java_util_concurrent_TimeUnit | null): BasicOrJavaType | null;
    /**
     * @return original return type: 'java.lang.Object'
     */
    get(): BasicOrJavaType | null;
    /**
     * @return original return type: 'boolean'
     */
    isDone(): boolean;
}
/**
 * Create a proxy for the {@link Future} interface.
 * All required methods in {@link FutureInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createFutureProxy(methods: FutureInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<FutureInterface>;
declare const Future_base: typeof FutureClass;
/**
 * Class java.util.concurrent.Future.
 *
 * This actually imports the java class for further use.
 * The class {@link FutureClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Future extends Future_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default Future;
