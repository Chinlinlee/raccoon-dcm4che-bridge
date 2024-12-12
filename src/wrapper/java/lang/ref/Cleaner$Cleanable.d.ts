import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
/**
 * This class just defines types, you should import {@link Cleaner$Cleanable} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Cleaner$CleanableClass extends JavaClass {
    /**
     * @return original return type: 'void'
     */
    clean(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    cleanSync(): void;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createCleaner$CleanableProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface Cleaner$CleanableInterface {
    /**
     * @return original return type: 'void'
     */
    clean(): void;
}
/**
 * Create a proxy for the {@link Cleaner$Cleanable} interface.
 * All required methods in {@link Cleaner$CleanableInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createCleaner$CleanableProxy(methods: Cleaner$CleanableInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<Cleaner$CleanableInterface>;
declare const Cleaner$Cleanable_base: typeof Cleaner$CleanableClass;
/**
 * Class java.lang.ref.Cleaner$Cleanable.
 *
 * This actually imports the java class for further use.
 * The class {@link Cleaner$CleanableClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Cleaner$Cleanable extends Cleaner$Cleanable_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default Cleaner$Cleanable;
//# sourceMappingURL=Cleaner$Cleanable.d.ts.map