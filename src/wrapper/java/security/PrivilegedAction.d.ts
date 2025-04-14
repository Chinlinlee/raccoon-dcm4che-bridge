import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
/**
 * This class just defines types, you should import {@link PrivilegedAction} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PrivilegedActionClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.Object'
     */
    run(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    runSync(): BasicOrJavaType | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createPrivilegedActionProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface PrivilegedActionInterface {
    /**
     * @return original return type: 'java.lang.Object'
     */
    run(): BasicOrJavaType | null;
}
/**
 * Create a proxy for the {@link PrivilegedAction} interface.
 * All required methods in {@link PrivilegedActionInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createPrivilegedActionProxy(methods: PrivilegedActionInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<PrivilegedActionInterface>;
declare const PrivilegedAction_base: typeof PrivilegedActionClass;
/**
 * Class java.security.PrivilegedAction.
 *
 * This actually imports the java class for further use.
 * The class {@link PrivilegedActionClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PrivilegedAction extends PrivilegedAction_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default PrivilegedAction;
