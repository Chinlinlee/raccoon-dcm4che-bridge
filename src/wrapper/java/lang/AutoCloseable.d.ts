import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
/**
 * This class just defines types, you should import {@link AutoCloseable} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AutoCloseableClass extends JavaClass {
    /**
     * @return original return type: 'void'
     */
    close(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    closeSync(): void;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createAutoCloseableProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface AutoCloseableInterface {
    /**
     * @return original return type: 'void'
     */
    close(): void;
}
/**
 * Create a proxy for the {@link AutoCloseable} interface.
 * All required methods in {@link AutoCloseableInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createAutoCloseableProxy(methods: AutoCloseableInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<AutoCloseableInterface>;
declare const AutoCloseable_base: typeof AutoCloseableClass;
/**
 * Class java.lang.AutoCloseable.
 *
 * This actually imports the java class for further use.
 * The class {@link AutoCloseableClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AutoCloseable extends AutoCloseable_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default AutoCloseable;
//# sourceMappingURL=AutoCloseable.d.ts.map