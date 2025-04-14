import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { File as java_io_File } from "./File";
/**
 * This class just defines types, you should import {@link FilenameFilter} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FilenameFilterClass extends JavaClass {
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    accept(var0: java_io_File | null, var1: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    acceptSync(var0: java_io_File | null, var1: string | null): boolean;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createFilenameFilterProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface FilenameFilterInterface {
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    accept(var0: java_io_File | null, var1: string | null): boolean;
}
/**
 * Create a proxy for the {@link FilenameFilter} interface.
 * All required methods in {@link FilenameFilterInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createFilenameFilterProxy(methods: FilenameFilterInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<FilenameFilterInterface>;
declare const FilenameFilter_base: typeof FilenameFilterClass;
/**
 * Class java.io.FilenameFilter.
 *
 * This actually imports the java class for further use.
 * The class {@link FilenameFilterClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FilenameFilter extends FilenameFilter_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default FilenameFilter;
