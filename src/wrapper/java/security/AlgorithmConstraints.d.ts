import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Set as java_util_Set, SetInterface as java_util_SetInterface } from "./../util/Set";
import { AlgorithmParameters as java_security_AlgorithmParameters } from "./AlgorithmParameters";
import { Key as java_security_Key, KeyInterface as java_security_KeyInterface } from "./Key";
/**
 * This class just defines types, you should import {@link AlgorithmConstraints} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AlgorithmConstraintsClass extends JavaClass {
    /**
     * @param var0 original type: 'java.util.Set'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.security.AlgorithmParameters'
     * @return original return type: 'boolean'
     */
    permits(var0: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null, var1: string | null, var2: java_security_AlgorithmParameters | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.Set'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.security.AlgorithmParameters'
     * @return original return type: 'boolean'
     */
    permitsSync(var0: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null, var1: string | null, var2: java_security_AlgorithmParameters | null): boolean;
    /**
     * @param var0 original type: 'java.util.Set'
     * @param var1 original type: 'java.security.Key'
     * @return original return type: 'boolean'
     */
    permits(var0: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null, var1: java_security_Key | JavaInterfaceProxy<java_security_KeyInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.Set'
     * @param var1 original type: 'java.security.Key'
     * @return original return type: 'boolean'
     */
    permitsSync(var0: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null, var1: java_security_Key | JavaInterfaceProxy<java_security_KeyInterface> | null): boolean;
    /**
     * @param var0 original type: 'java.util.Set'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.security.Key'
     * @param var3 original type: 'java.security.AlgorithmParameters'
     * @return original return type: 'boolean'
     */
    permits(var0: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null, var1: string | null, var2: java_security_Key | JavaInterfaceProxy<java_security_KeyInterface> | null, var3: java_security_AlgorithmParameters | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.Set'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.security.Key'
     * @param var3 original type: 'java.security.AlgorithmParameters'
     * @return original return type: 'boolean'
     */
    permitsSync(var0: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null, var1: string | null, var2: java_security_Key | JavaInterfaceProxy<java_security_KeyInterface> | null, var3: java_security_AlgorithmParameters | null): boolean;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createAlgorithmConstraintsProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface AlgorithmConstraintsInterface {
    /**
     * @param var0 original type: 'java.util.Set'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.security.AlgorithmParameters'
     * @return original return type: 'boolean'
     */
    permits(var0: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null, var1: string | null, var2: java_security_AlgorithmParameters | null): boolean;
    /**
     * @param var0 original type: 'java.util.Set'
     * @param var1 original type: 'java.security.Key'
     * @return original return type: 'boolean'
     */
    permits(var0: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null, var1: java_security_Key | JavaInterfaceProxy<java_security_KeyInterface> | null): boolean;
    /**
     * @param var0 original type: 'java.util.Set'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.security.Key'
     * @param var3 original type: 'java.security.AlgorithmParameters'
     * @return original return type: 'boolean'
     */
    permits(var0: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null, var1: string | null, var2: java_security_Key | JavaInterfaceProxy<java_security_KeyInterface> | null, var3: java_security_AlgorithmParameters | null): boolean;
}
/**
 * Create a proxy for the {@link AlgorithmConstraints} interface.
 * All required methods in {@link AlgorithmConstraintsInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createAlgorithmConstraintsProxy(methods: AlgorithmConstraintsInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<AlgorithmConstraintsInterface>;
declare const AlgorithmConstraints_base: typeof AlgorithmConstraintsClass;
/**
 * Class java.security.AlgorithmConstraints.
 *
 * This actually imports the java class for further use.
 * The class {@link AlgorithmConstraintsClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AlgorithmConstraints extends AlgorithmConstraints_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default AlgorithmConstraints;
