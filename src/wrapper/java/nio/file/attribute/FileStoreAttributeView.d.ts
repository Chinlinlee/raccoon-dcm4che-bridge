import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
/**
 * This class just defines types, you should import {@link FileStoreAttributeView} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FileStoreAttributeViewClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.String'
     */
    name(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    nameSync(): string | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createFileStoreAttributeViewProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface FileStoreAttributeViewInterface {
    /**
     * @return original return type: 'java.lang.String'
     */
    name(): string | null;
}
/**
 * Create a proxy for the {@link FileStoreAttributeView} interface.
 * All required methods in {@link FileStoreAttributeViewInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createFileStoreAttributeViewProxy(methods: FileStoreAttributeViewInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<FileStoreAttributeViewInterface>;
declare const FileStoreAttributeView_base: typeof FileStoreAttributeViewClass;
/**
 * Class java.nio.file.attribute.FileStoreAttributeView.
 *
 * This actually imports the java class for further use.
 * The class {@link FileStoreAttributeViewClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FileStoreAttributeView extends FileStoreAttributeView_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default FileStoreAttributeView;
