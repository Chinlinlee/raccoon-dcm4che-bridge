import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
/**
 * This class just defines types, you should import {@link AccessibleIcon} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AccessibleIconClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setAccessibleIconDescription(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setAccessibleIconDescriptionSync(var0: string | null): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getAccessibleIconDescription(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getAccessibleIconDescriptionSync(): string | null;
    /**
     * @return original return type: 'int'
     */
    getAccessibleIconHeight(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getAccessibleIconHeightSync(): number;
    /**
     * @return original return type: 'int'
     */
    getAccessibleIconWidth(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getAccessibleIconWidthSync(): number;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createAccessibleIconProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface AccessibleIconInterface {
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setAccessibleIconDescription(var0: string | null): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getAccessibleIconDescription(): string | null;
    /**
     * @return original return type: 'int'
     */
    getAccessibleIconHeight(): number;
    /**
     * @return original return type: 'int'
     */
    getAccessibleIconWidth(): number;
}
/**
 * Create a proxy for the {@link AccessibleIcon} interface.
 * All required methods in {@link AccessibleIconInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createAccessibleIconProxy(methods: AccessibleIconInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<AccessibleIconInterface>;
declare const AccessibleIcon_base: typeof AccessibleIconClass;
/**
 * Class javax.accessibility.AccessibleIcon.
 *
 * This actually imports the java class for further use.
 * The class {@link AccessibleIconClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AccessibleIcon extends AccessibleIcon_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default AccessibleIcon;
