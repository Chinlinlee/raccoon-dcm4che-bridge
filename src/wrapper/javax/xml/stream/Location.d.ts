import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
/**
 * This class just defines types, you should import {@link Location} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class LocationClass extends JavaClass {
    /**
     * @return original return type: 'int'
     */
    getLineNumber(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getLineNumberSync(): number;
    /**
     * @return original return type: 'java.lang.String'
     */
    getSystemId(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getSystemIdSync(): string | null;
    /**
     * @return original return type: 'int'
     */
    getCharacterOffset(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getCharacterOffsetSync(): number;
    /**
     * @return original return type: 'int'
     */
    getColumnNumber(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getColumnNumberSync(): number;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPublicId(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPublicIdSync(): string | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createLocationProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface LocationInterface {
    /**
     * @return original return type: 'int'
     */
    getLineNumber(): number;
    /**
     * @return original return type: 'java.lang.String'
     */
    getSystemId(): string | null;
    /**
     * @return original return type: 'int'
     */
    getCharacterOffset(): number;
    /**
     * @return original return type: 'int'
     */
    getColumnNumber(): number;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPublicId(): string | null;
}
/**
 * Create a proxy for the {@link Location} interface.
 * All required methods in {@link LocationInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createLocationProxy(methods: LocationInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<LocationInterface>;
declare const Location_base: typeof LocationClass;
/**
 * Class javax.xml.stream.Location.
 *
 * This actually imports the java class for further use.
 * The class {@link LocationClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Location extends Location_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default Location;
//# sourceMappingURL=Location.d.ts.map