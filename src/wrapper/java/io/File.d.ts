import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./../lang/Class";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { Boolean as java_lang_Boolean } from "./../lang/Boolean";
import { FilenameFilter as java_io_FilenameFilter, FilenameFilterInterface as java_io_FilenameFilterInterface } from "./FilenameFilter";
import { FileFilter as java_io_FileFilter, FileFilterInterface as java_io_FileFilterInterface } from "./FileFilter";
import { URL as java_net_URL } from "./../net/URL";
import { URI as java_net_URI } from "./../net/URI";
import { Path as java_nio_file_Path } from "./../nio/file/Path";
/**
 * This class just defines types, you should import {@link File} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FileClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    wait(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    waitSync(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): void;
    /**
     * @return original return type: 'void'
     */
    wait(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    waitSync(): void;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    wait(var0: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    waitSync(var0: java_lang_Long | bigint | number): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getNameSync(): string | null;
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'boolean'
     */
    renameTo(var0: FileClass | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'boolean'
     */
    renameToSync(var0: FileClass | null): boolean;
    /**
     * @return original return type: 'java.io.File[]'
     */
    static listRoots(): Promise<(File | null)[] | null>;
    /**
     * @return original return type: 'java.io.File[]'
     */
    static listRootsSync(): (File | null)[] | null;
    /**
     * @return original return type: 'long'
     */
    getUsableSpace(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    getUsableSpaceSync(): number;
    /**
     * @return original return type: 'boolean'
     */
    canRead(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    canReadSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @param var1 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    setExecutable(var0: java_lang_Boolean | boolean, var1: java_lang_Boolean | boolean): Promise<boolean>;
    /**
     * @param var0 original type: 'boolean'
     * @param var1 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    setExecutableSync(var0: java_lang_Boolean | boolean, var1: java_lang_Boolean | boolean): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    setExecutable(var0: java_lang_Boolean | boolean): Promise<boolean>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    setExecutableSync(var0: java_lang_Boolean | boolean): boolean;
    /**
     * @return original return type: 'java.io.File'
     */
    getCanonicalFile(): Promise<File | null>;
    /**
     * @return original return type: 'java.io.File'
     */
    getCanonicalFileSync(): File | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'int'
     */
    compareTo(var0: FileClass | null): Promise<number>;
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'int'
     */
    compareToSync(var0: FileClass | null): number;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    compareTo(var0: BasicOrJavaType | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    compareToSync(var0: BasicOrJavaType | null): number;
    /**
     * @return original return type: 'boolean'
     */
    delete(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    deleteSync(): boolean;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    setReadable(var0: java_lang_Boolean | boolean): Promise<boolean>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    setReadableSync(var0: java_lang_Boolean | boolean): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @param var1 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    setReadable(var0: java_lang_Boolean | boolean, var1: java_lang_Boolean | boolean): Promise<boolean>;
    /**
     * @param var0 original type: 'boolean'
     * @param var1 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    setReadableSync(var0: java_lang_Boolean | boolean, var1: java_lang_Boolean | boolean): boolean;
    /**
     * @return original return type: 'long'
     */
    getTotalSpace(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    getTotalSpaceSync(): number;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPath(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPathSync(): string | null;
    /**
     * @return original return type: 'java.io.File'
     */
    getParentFile(): Promise<File | null>;
    /**
     * @return original return type: 'java.io.File'
     */
    getParentFileSync(): File | null;
    /**
     * @return original return type: 'java.io.File'
     */
    getAbsoluteFile(): Promise<File | null>;
    /**
     * @return original return type: 'java.io.File'
     */
    getAbsoluteFileSync(): File | null;
    /**
     * @return original return type: 'boolean'
     */
    mkdir(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    mkdirSync(): boolean;
    /**
     * @param var0 original type: 'java.io.FilenameFilter'
     * @return original return type: 'java.io.File[]'
     */
    listFiles(var0: java_io_FilenameFilter | JavaInterfaceProxy<java_io_FilenameFilterInterface> | null): Promise<(File | null)[] | null>;
    /**
     * @param var0 original type: 'java.io.FilenameFilter'
     * @return original return type: 'java.io.File[]'
     */
    listFilesSync(var0: java_io_FilenameFilter | JavaInterfaceProxy<java_io_FilenameFilterInterface> | null): (File | null)[] | null;
    /**
     * @param var0 original type: 'java.io.FileFilter'
     * @return original return type: 'java.io.File[]'
     */
    listFiles(var0: java_io_FileFilter | JavaInterfaceProxy<java_io_FileFilterInterface> | null): Promise<(File | null)[] | null>;
    /**
     * @param var0 original type: 'java.io.FileFilter'
     * @return original return type: 'java.io.File[]'
     */
    listFilesSync(var0: java_io_FileFilter | JavaInterfaceProxy<java_io_FileFilterInterface> | null): (File | null)[] | null;
    /**
     * @return original return type: 'java.io.File[]'
     */
    listFiles(): Promise<(File | null)[] | null>;
    /**
     * @return original return type: 'java.io.File[]'
     */
    listFilesSync(): (File | null)[] | null;
    /**
     * @return original return type: 'void'
     */
    deleteOnExit(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    deleteOnExitSync(): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getParent(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getParentSync(): string | null;
    /**
     * @return original return type: 'java.net.URL'
     */
    toURL(): Promise<java_net_URL | null>;
    /**
     * @return original return type: 'java.net.URL'
     */
    toURLSync(): java_net_URL | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCanonicalPath(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCanonicalPathSync(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    canExecute(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    canExecuteSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    setWritable(var0: java_lang_Boolean | boolean): Promise<boolean>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    setWritableSync(var0: java_lang_Boolean | boolean): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @param var1 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    setWritable(var0: java_lang_Boolean | boolean, var1: java_lang_Boolean | boolean): Promise<boolean>;
    /**
     * @param var0 original type: 'boolean'
     * @param var1 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    setWritableSync(var0: java_lang_Boolean | boolean, var1: java_lang_Boolean | boolean): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isFile(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isFileSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    getAbsolutePath(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getAbsolutePathSync(): string | null;
    /**
     * @return original return type: 'java.net.URI'
     */
    toURI(): Promise<java_net_URI | null>;
    /**
     * @return original return type: 'java.net.URI'
     */
    toURISync(): java_net_URI | null;
    /**
     * @return original return type: 'long'
     */
    length(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    lengthSync(): number;
    /**
     * @return original return type: 'long'
     */
    getFreeSpace(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    getFreeSpaceSync(): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.io.File'
     * @return original return type: 'java.io.File'
     */
    static createTempFile(var0: string | null, var1: string | null, var2: FileClass | null): Promise<File | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.io.File'
     * @return original return type: 'java.io.File'
     */
    static createTempFileSync(var0: string | null, var1: string | null, var2: FileClass | null): File | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.io.File'
     */
    static createTempFile(var0: string | null, var1: string | null): Promise<File | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.io.File'
     */
    static createTempFileSync(var0: string | null, var1: string | null): File | null;
    /**
     * @return original return type: 'boolean'
     */
    canWrite(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    canWriteSync(): boolean;
    /**
     * @return original return type: 'java.lang.String[]'
     */
    list(): Promise<(string | null)[] | null>;
    /**
     * @return original return type: 'java.lang.String[]'
     */
    listSync(): (string | null)[] | null;
    /**
     * @param var0 original type: 'java.io.FilenameFilter'
     * @return original return type: 'java.lang.String[]'
     */
    list(var0: java_io_FilenameFilter | JavaInterfaceProxy<java_io_FilenameFilterInterface> | null): Promise<(string | null)[] | null>;
    /**
     * @param var0 original type: 'java.io.FilenameFilter'
     * @return original return type: 'java.lang.String[]'
     */
    listSync(var0: java_io_FilenameFilter | JavaInterfaceProxy<java_io_FilenameFilterInterface> | null): (string | null)[] | null;
    /**
     * @return original return type: 'boolean'
     */
    isHidden(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isHiddenSync(): boolean;
    /**
     * @return original return type: 'java.nio.file.Path'
     */
    toPath(): Promise<java_nio_file_Path | null>;
    /**
     * @return original return type: 'java.nio.file.Path'
     */
    toPathSync(): java_nio_file_Path | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equals(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equalsSync(var0: BasicOrJavaType | null): boolean;
    /**
     * @return original return type: 'boolean'
     */
    mkdirs(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    mkdirsSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isAbsolute(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isAbsoluteSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    exists(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    existsSync(): boolean;
    /**
     * @return original return type: 'long'
     */
    lastModified(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    lastModifiedSync(): number;
    /**
     * @return original return type: 'boolean'
     */
    createNewFile(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    createNewFileSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    setReadOnly(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    setReadOnlySync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isDirectory(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isDirectorySync(): boolean;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'boolean'
     */
    setLastModified(var0: java_lang_Long | bigint | number): Promise<boolean>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'boolean'
     */
    setLastModifiedSync(var0: java_lang_Long | bigint | number): boolean;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly pathSeparator: string | null;
    /**
     * Original type: 'char'
     */
    static readonly pathSeparatorChar: string | null;
    /**
     * Original type: 'char'
     */
    static readonly separatorChar: string | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly separator: string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     */
    constructor(var0: string | null);
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.io.File'
     */
    static newInstanceAsync(var0: string | null): Promise<File>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     */
    constructor(var0: string | null, var1: string | null);
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.io.File'
     */
    static newInstanceAsync(var0: string | null, var1: string | null): Promise<File>;
    /**
     * @param var0 original type: 'java.net.URI'
     */
    constructor(var0: java_net_URI | null);
    /**
     * @param var0 original type: 'java.net.URI'
     * @return original return type: 'java.io.File'
     */
    static newInstanceAsync(var0: java_net_URI | null): Promise<File>;
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'java.lang.String'
     */
    constructor(var0: FileClass | null, var1: string | null);
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.io.File'
     */
    static newInstanceAsync(var0: FileClass | null, var1: string | null): Promise<File>;
}
declare const File_base: typeof FileClass;
/**
 * Class java.io.File.
 *
 * This actually imports the java class for further use.
 * The class {@link FileClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class File extends File_base {
}
export default File;
//# sourceMappingURL=File.d.ts.map