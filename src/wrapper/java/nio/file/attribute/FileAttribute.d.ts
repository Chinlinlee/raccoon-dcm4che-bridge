import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
/**
 * This class just defines types, you should import {@link FileAttribute} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FileAttributeClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.String'
     */
    name(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    nameSync(): string | null;
    /**
     * @return original return type: 'java.lang.Object'
     */
    value(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    valueSync(): BasicOrJavaType | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createFileAttributeProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface FileAttributeInterface {
    /**
     * @return original return type: 'java.lang.String'
     */
    name(): string | null;
    /**
     * @return original return type: 'java.lang.Object'
     */
    value(): BasicOrJavaType | null;
}
/**
 * Create a proxy for the {@link FileAttribute} interface.
 * All required methods in {@link FileAttributeInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createFileAttributeProxy(methods: FileAttributeInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<FileAttributeInterface>;
declare const FileAttribute_base: typeof FileAttributeClass;
/**
 * Class java.nio.file.attribute.FileAttribute.
 *
 * This actually imports the java class for further use.
 * The class {@link FileAttributeClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FileAttribute extends FileAttribute_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default FileAttribute;
