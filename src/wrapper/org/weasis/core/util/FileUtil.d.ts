import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./../../../../java/lang/Class";
import { Long as java_lang_Long } from "./../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../java/lang/Integer";
import { File as java_io_File } from "./../../../../java/io/File";
import { InputStream as java_io_InputStream } from "./../../../../java/io/InputStream";
import { Path as java_nio_file_Path, PathInterface as java_nio_file_PathInterface } from "./../../../../java/nio/file/Path";
import { Boolean as java_lang_Boolean } from "./../../../../java/lang/Boolean";
import { Properties as java_util_Properties } from "./../../../../java/util/Properties";
import { FileInputStream as java_io_FileInputStream } from "./../../../../java/io/FileInputStream";
import { FileOutputStream as java_io_FileOutputStream } from "./../../../../java/io/FileOutputStream";
import { OutputStream as java_io_OutputStream } from "./../../../../java/io/OutputStream";
import { ImageInputStream as javax_imageio_stream_ImageInputStream, ImageInputStreamInterface as javax_imageio_stream_ImageInputStreamInterface } from "./../../../../javax/imageio/stream/ImageInputStream";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../../java/util/List";
import { CopyOption as java_nio_file_CopyOption, CopyOptionInterface as java_nio_file_CopyOptionInterface } from "./../../../../java/nio/file/CopyOption";
import { AutoCloseable as java_lang_AutoCloseable, AutoCloseableInterface as java_lang_AutoCloseableInterface } from "./../../../../java/lang/AutoCloseable";
import { XMLStreamWriter as javax_xml_stream_XMLStreamWriter, XMLStreamWriterInterface as javax_xml_stream_XMLStreamWriterInterface } from "./../../../../javax/xml/stream/XMLStreamWriter";
import { XMLStreamReader as javax_xml_stream_XMLStreamReader, XMLStreamReaderInterface as javax_xml_stream_XMLStreamReaderInterface } from "./../../../../javax/xml/stream/XMLStreamReader";
/**
 * This class just defines types, you should import {@link FileUtil} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FileUtilClass extends JavaClass {
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
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static nameWithoutExtension(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static nameWithoutExtensionSync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'java.io.File'
     * @return original return type: 'void'
     */
    static unzip(var0: java_io_File | null, var1: java_io_File | null): Promise<void>;
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'java.io.File'
     * @return original return type: 'void'
     */
    static unzipSync(var0: java_io_File | null, var1: java_io_File | null): void;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.io.File'
     * @return original return type: 'void'
     */
    static unzip(var0: java_io_InputStream | null, var1: java_io_File | null): Promise<void>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.io.File'
     * @return original return type: 'void'
     */
    static unzipSync(var0: java_io_InputStream | null, var1: java_io_File | null): void;
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @return original return type: 'boolean'
     */
    static delete(var0: java_nio_file_Path | JavaInterfaceProxy<java_nio_file_PathInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @return original return type: 'boolean'
     */
    static deleteSync(var0: java_nio_file_Path | JavaInterfaceProxy<java_nio_file_PathInterface> | null): boolean;
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'boolean'
     */
    static delete(var0: java_io_File | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'boolean'
     */
    static deleteSync(var0: java_io_File | null): boolean;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.nio.file.Path'
     */
    static addFileIndex(var0: java_nio_file_Path | JavaInterfaceProxy<java_nio_file_PathInterface> | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<java_nio_file_Path | null>;
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.nio.file.Path'
     */
    static addFileIndexSync(var0: java_nio_file_Path | JavaInterfaceProxy<java_nio_file_PathInterface> | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): java_nio_file_Path | null;
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'void'
     */
    static prepareToWriteFile(var0: java_io_File | null): Promise<void>;
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'void'
     */
    static prepareToWriteFileSync(var0: java_io_File | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static getValidFileNameWithoutHTML(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static getValidFileNameWithoutHTMLSync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.io.File'
     * @return original return type: 'int'
     */
    static writeStream(var0: java_io_InputStream | null, var1: java_io_File | null): Promise<number>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.io.File'
     * @return original return type: 'int'
     */
    static writeStreamSync(var0: java_io_InputStream | null, var1: java_io_File | null): number;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.nio.file.Path'
     * @param var2 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    static writeStream(var0: java_io_InputStream | null, var1: java_nio_file_Path | JavaInterfaceProxy<java_nio_file_PathInterface> | null, var2: java_lang_Boolean | boolean): Promise<boolean>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.nio.file.Path'
     * @param var2 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    static writeStreamSync(var0: java_io_InputStream | null, var1: java_nio_file_Path | JavaInterfaceProxy<java_nio_file_PathInterface> | null, var2: java_lang_Boolean | boolean): boolean;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.io.File'
     * @param var2 original type: 'boolean'
     * @return original return type: 'int'
     */
    static writeStream(var0: java_io_InputStream | null, var1: java_io_File | null, var2: java_lang_Boolean | boolean): Promise<number>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.io.File'
     * @param var2 original type: 'boolean'
     * @return original return type: 'int'
     */
    static writeStreamSync(var0: java_io_InputStream | null, var1: java_io_File | null, var2: java_lang_Boolean | boolean): number;
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'java.util.Properties'
     * @return original return type: 'java.util.Properties'
     */
    static readProperties(var0: java_io_File | null, var1: java_util_Properties | null): Promise<java_util_Properties | null>;
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'java.util.Properties'
     * @return original return type: 'java.util.Properties'
     */
    static readPropertiesSync(var0: java_io_File | null, var1: java_util_Properties | null): java_util_Properties | null;
    /**
     * @param var0 original type: 'java.io.FileInputStream'
     * @param var1 original type: 'java.io.FileOutputStream'
     * @return original return type: 'boolean'
     */
    static nioWriteFile(var0: java_io_FileInputStream | null, var1: java_io_FileOutputStream | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.io.FileInputStream'
     * @param var1 original type: 'java.io.FileOutputStream'
     * @return original return type: 'boolean'
     */
    static nioWriteFileSync(var0: java_io_FileInputStream | null, var1: java_io_FileOutputStream | null): boolean;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.io.OutputStream'
     * @param var2 original type: 'int'
     * @return original return type: 'boolean'
     */
    static nioWriteFile(var0: java_io_InputStream | null, var1: java_io_OutputStream | null, var2: java_lang_Integer | number): Promise<boolean>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.io.OutputStream'
     * @param var2 original type: 'int'
     * @return original return type: 'boolean'
     */
    static nioWriteFileSync(var0: java_io_InputStream | null, var1: java_io_OutputStream | null, var2: java_lang_Integer | number): boolean;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'boolean'
     * @return original return type: 'void'
     */
    static recursiveDelete(var0: java_io_File | null, var1: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'boolean'
     * @return original return type: 'void'
     */
    static recursiveDeleteSync(var0: java_io_File | null, var1: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'void'
     */
    static recursiveDelete(var0: java_io_File | null): Promise<void>;
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'void'
     */
    static recursiveDeleteSync(var0: java_io_File | null): void;
    /**
     * @param var0 original type: 'javax.imageio.stream.ImageInputStream'
     * @param var1 original type: 'java.io.File'
     * @return original return type: 'int'
     */
    static writeFile(var0: javax_imageio_stream_ImageInputStream | JavaInterfaceProxy<javax_imageio_stream_ImageInputStreamInterface> | null, var1: java_io_File | null): Promise<number>;
    /**
     * @param var0 original type: 'javax.imageio.stream.ImageInputStream'
     * @param var1 original type: 'java.io.File'
     * @return original return type: 'int'
     */
    static writeFileSync(var0: javax_imageio_stream_ImageInputStream | JavaInterfaceProxy<javax_imageio_stream_ImageInputStreamInterface> | null, var1: java_io_File | null): number;
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'java.io.File'
     * @return original return type: 'void'
     */
    static zip(var0: java_io_File | null, var1: java_io_File | null): Promise<void>;
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'java.io.File'
     * @return original return type: 'void'
     */
    static zipSync(var0: java_io_File | null, var1: java_io_File | null): void;
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'boolean'
     * @return original return type: 'void'
     */
    static getAllFilesInDirectory(var0: java_io_File | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'boolean'
     * @return original return type: 'void'
     */
    static getAllFilesInDirectorySync(var0: java_io_File | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'java.util.List'
     * @return original return type: 'void'
     */
    static getAllFilesInDirectory(var0: java_io_File | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'java.util.List'
     * @return original return type: 'void'
     */
    static getAllFilesInDirectorySync(var0: java_io_File | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): void;
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'java.util.Properties'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    static storeProperties(var0: java_io_File | null, var1: java_util_Properties | null, var2: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'java.util.Properties'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    static storePropertiesSync(var0: java_io_File | null, var1: java_util_Properties | null, var2: string | null): void;
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'java.lang.String[]'
     * @return original return type: 'boolean'
     */
    static isFileExtensionMatching(var0: java_io_File | null, var1: (string | null)[] | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'java.lang.String[]'
     * @return original return type: 'boolean'
     */
    static isFileExtensionMatchingSync(var0: java_io_File | null, var1: (string | null)[] | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static getExtension(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static getExtensionSync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'void'
     */
    static deleteDirectoryContents(var0: java_io_File | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'void'
     */
    static deleteDirectoryContentsSync(var0: java_io_File | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static getValidFileName(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static getValidFileNameSync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.Path'
     * @param var2 original type: 'java.nio.file.CopyOption[]'
     * @return original return type: 'void'
     */
    static copyFolder(var0: java_nio_file_Path | JavaInterfaceProxy<java_nio_file_PathInterface> | null, var1: java_nio_file_Path | JavaInterfaceProxy<java_nio_file_PathInterface> | null, var2: (java_nio_file_CopyOption | JavaInterfaceProxy<java_nio_file_CopyOptionInterface> | null)[] | null): Promise<void>;
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.Path'
     * @param var2 original type: 'java.nio.file.CopyOption[]'
     * @return original return type: 'void'
     */
    static copyFolderSync(var0: java_nio_file_Path | JavaInterfaceProxy<java_nio_file_PathInterface> | null, var1: java_nio_file_Path | JavaInterfaceProxy<java_nio_file_PathInterface> | null, var2: (java_nio_file_CopyOption | JavaInterfaceProxy<java_nio_file_CopyOptionInterface> | null)[] | null): void;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'boolean'
     * @return original return type: 'java.lang.String'
     */
    static humanReadableByte(var0: java_lang_Long | bigint | number, var1: java_lang_Boolean | boolean): Promise<string | null>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'boolean'
     * @return original return type: 'java.lang.String'
     */
    static humanReadableByteSync(var0: java_lang_Long | bigint | number, var1: java_lang_Boolean | boolean): string | null;
    /**
     * @param var0 original type: 'java.lang.AutoCloseable'
     * @return original return type: 'void'
     */
    static safeClose(var0: java_lang_AutoCloseable | JavaInterfaceProxy<java_lang_AutoCloseableInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.AutoCloseable'
     * @return original return type: 'void'
     */
    static safeCloseSync(var0: java_lang_AutoCloseable | JavaInterfaceProxy<java_lang_AutoCloseableInterface> | null): void;
    /**
     * @param var0 original type: 'javax.xml.stream.XMLStreamWriter'
     * @return original return type: 'void'
     */
    static safeClose(var0: javax_xml_stream_XMLStreamWriter | JavaInterfaceProxy<javax_xml_stream_XMLStreamWriterInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'javax.xml.stream.XMLStreamWriter'
     * @return original return type: 'void'
     */
    static safeCloseSync(var0: javax_xml_stream_XMLStreamWriter | JavaInterfaceProxy<javax_xml_stream_XMLStreamWriterInterface> | null): void;
    /**
     * @param var0 original type: 'javax.xml.stream.XMLStreamReader'
     * @return original return type: 'void'
     */
    static safeClose(var0: javax_xml_stream_XMLStreamReader | JavaInterfaceProxy<javax_xml_stream_XMLStreamReaderInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'javax.xml.stream.XMLStreamReader'
     * @return original return type: 'void'
     */
    static safeCloseSync(var0: javax_xml_stream_XMLStreamReader | JavaInterfaceProxy<javax_xml_stream_XMLStreamReaderInterface> | null): void;
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.Path'
     * @return original return type: 'java.nio.file.Path'
     */
    static getOutputPath(var0: java_nio_file_Path | JavaInterfaceProxy<java_nio_file_PathInterface> | null, var1: java_nio_file_Path | JavaInterfaceProxy<java_nio_file_PathInterface> | null): Promise<java_nio_file_Path | null>;
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.Path'
     * @return original return type: 'java.nio.file.Path'
     */
    static getOutputPathSync(var0: java_nio_file_Path | JavaInterfaceProxy<java_nio_file_PathInterface> | null, var1: java_nio_file_Path | JavaInterfaceProxy<java_nio_file_PathInterface> | null): java_nio_file_Path | null;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.io.File'
     * @return original return type: 'void'
     */
    static writeStreamWithIOException(var0: java_io_InputStream | null, var1: java_io_File | null): Promise<void>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.io.File'
     * @return original return type: 'void'
     */
    static writeStreamWithIOExceptionSync(var0: java_io_InputStream | null, var1: java_io_File | null): void;
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
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'java.io.File'
     * @return original return type: 'boolean'
     */
    static nioCopyFile(var0: java_io_File | null, var1: java_io_File | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'java.io.File'
     * @return original return type: 'boolean'
     */
    static nioCopyFileSync(var0: java_io_File | null, var1: java_io_File | null): boolean;
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'java.io.File'
     */
    static createTempDir(var0: java_io_File | null): Promise<java_io_File | null>;
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'java.io.File'
     */
    static createTempDirSync(var0: java_io_File | null): java_io_File | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly CANNOT_DELETE: string | null;
    /**
     * Original type: 'int'
     */
    static readonly FILE_BUFFER: java_lang_Integer | number;
}
declare const FileUtil_base: typeof FileUtilClass;
/**
 * Class org.weasis.core.util.FileUtil.
 *
 * This actually imports the java class for further use.
 * The class {@link FileUtilClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FileUtil extends FileUtil_base {
}
export default FileUtil;
