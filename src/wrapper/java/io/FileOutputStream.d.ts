import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../lang/Class";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { FileDescriptor as java_io_FileDescriptor } from "./FileDescriptor";
import { FileChannel as java_nio_channels_FileChannel } from "./../nio/channels/FileChannel";
import { OutputStream as java_io_OutputStream } from "./OutputStream";
import { File as java_io_File } from "./File";
import { Boolean as java_lang_Boolean } from "./../lang/Boolean";
/**
 * This class just defines types, you should import {@link FileOutputStream} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FileOutputStreamClass extends JavaClass {
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
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'java.io.FileDescriptor'
     */
    getFD(): Promise<java_io_FileDescriptor | null>;
    /**
     * @return original return type: 'java.io.FileDescriptor'
     */
    getFDSync(): java_io_FileDescriptor | null;
    /**
     * @return original return type: 'void'
     */
    flush(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    flushSync(): void;
    /**
     * @return original return type: 'java.nio.channels.FileChannel'
     */
    getChannel(): Promise<java_nio_channels_FileChannel | null>;
    /**
     * @return original return type: 'java.nio.channels.FileChannel'
     */
    getChannelSync(): java_nio_channels_FileChannel | null;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
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
     * @return original return type: 'java.io.OutputStream'
     */
    static nullOutputStream(): Promise<java_io_OutputStream | null>;
    /**
     * @return original return type: 'java.io.OutputStream'
     */
    static nullOutputStreamSync(): java_io_OutputStream | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    write(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    writeSync(var0: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'void'
     */
    write(var0: Buffer | null): Promise<void>;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'void'
     */
    writeSync(var0: Buffer | null): void;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'void'
     */
    write(var0: Buffer | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'void'
     */
    writeSync(var0: Buffer | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): void;
    /**
     * @return original return type: 'void'
     */
    close(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    closeSync(): void;
    /**
     * @param var0 original type: 'java.io.FileDescriptor'
     */
    constructor(var0: java_io_FileDescriptor | null);
    /**
     * @param var0 original type: 'java.io.FileDescriptor'
     * @return original return type: 'java.io.FileOutputStream'
     */
    static newInstanceAsync(var0: java_io_FileDescriptor | null): Promise<FileOutputStream>;
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'boolean'
     */
    constructor(var0: java_io_File | null, var1: java_lang_Boolean | boolean);
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'boolean'
     * @return original return type: 'java.io.FileOutputStream'
     */
    static newInstanceAsync(var0: java_io_File | null, var1: java_lang_Boolean | boolean): Promise<FileOutputStream>;
    /**
     * @param var0 original type: 'java.io.File'
     */
    constructor(var0: java_io_File | null);
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'java.io.FileOutputStream'
     */
    static newInstanceAsync(var0: java_io_File | null): Promise<FileOutputStream>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     */
    constructor(var0: string | null, var1: java_lang_Boolean | boolean);
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @return original return type: 'java.io.FileOutputStream'
     */
    static newInstanceAsync(var0: string | null, var1: java_lang_Boolean | boolean): Promise<FileOutputStream>;
    /**
     * @param var0 original type: 'java.lang.String'
     */
    constructor(var0: string | null);
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.io.FileOutputStream'
     */
    static newInstanceAsync(var0: string | null): Promise<FileOutputStream>;
}
declare const FileOutputStream_base: typeof FileOutputStreamClass;
/**
 * Class java.io.FileOutputStream.
 *
 * This actually imports the java class for further use.
 * The class {@link FileOutputStreamClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FileOutputStream extends FileOutputStream_base {
}
export default FileOutputStream;
