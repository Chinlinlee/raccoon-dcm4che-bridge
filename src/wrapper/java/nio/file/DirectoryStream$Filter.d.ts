import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
/**
 * This class just defines types, you should import {@link DirectoryStream$Filter} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DirectoryStream$FilterClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    accept(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    acceptSync(var0: BasicOrJavaType | null): boolean;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createDirectoryStream$FilterProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface DirectoryStream$FilterInterface {
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    accept(var0: BasicOrJavaType | null): boolean;
}
/**
 * Create a proxy for the {@link DirectoryStream$Filter} interface.
 * All required methods in {@link DirectoryStream$FilterInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createDirectoryStream$FilterProxy(methods: DirectoryStream$FilterInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<DirectoryStream$FilterInterface>;
declare const DirectoryStream$Filter_base: typeof DirectoryStream$FilterClass;
/**
 * Class java.nio.file.DirectoryStream$Filter.
 *
 * This actually imports the java class for further use.
 * The class {@link DirectoryStream$FilterClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DirectoryStream$Filter extends DirectoryStream$Filter_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default DirectoryStream$Filter;
