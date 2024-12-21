import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./../../lang/Class";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { ByteBuffer as java_nio_ByteBuffer } from "./../ByteBuffer";
import { ReadableByteChannel as java_nio_channels_ReadableByteChannel, ReadableByteChannelInterface as java_nio_channels_ReadableByteChannelInterface } from "./ReadableByteChannel";
import { WritableByteChannel as java_nio_channels_WritableByteChannel, WritableByteChannelInterface as java_nio_channels_WritableByteChannelInterface } from "./WritableByteChannel";
import { FileLock as java_nio_channels_FileLock } from "./FileLock";
import { Boolean as java_lang_Boolean } from "./../../lang/Boolean";
import { SeekableByteChannel as java_nio_channels_SeekableByteChannel } from "./SeekableByteChannel";
import { MemorySegment as java_lang_foreign_MemorySegment } from "./../../lang/foreign/MemorySegment";
import { FileChannel$MapMode as java_nio_channels_FileChannel$MapMode } from "./FileChannel$MapMode";
import { Arena as java_lang_foreign_Arena, ArenaInterface as java_lang_foreign_ArenaInterface } from "./../../lang/foreign/Arena";
import { MappedByteBuffer as java_nio_MappedByteBuffer } from "./../MappedByteBuffer";
import { Path as java_nio_file_Path, PathInterface as java_nio_file_PathInterface } from "./../file/Path";
import { OpenOption as java_nio_file_OpenOption, OpenOptionInterface as java_nio_file_OpenOptionInterface } from "./../file/OpenOption";
import { Set as java_util_Set, SetInterface as java_util_SetInterface } from "./../../util/Set";
import { FileAttribute as java_nio_file_attribute_FileAttribute, FileAttributeInterface as java_nio_file_attribute_FileAttributeInterface } from "./../file/attribute/FileAttribute";
/**
 * This class just defines types, you should import {@link FileChannel} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FileChannelClass extends JavaClass {
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
     * @return original return type: 'void'
     */
    wait(var0: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    waitSync(var0: java_lang_Long | bigint | number): void;
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
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @param var1 original type: 'long'
     * @return original return type: 'int'
     */
    read(var0: java_nio_ByteBuffer | null, var1: java_lang_Long | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @param var1 original type: 'long'
     * @return original return type: 'int'
     */
    readSync(var0: java_nio_ByteBuffer | null, var1: java_lang_Long | bigint | number): number;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @return original return type: 'int'
     */
    read(var0: java_nio_ByteBuffer | null): Promise<number>;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @return original return type: 'int'
     */
    readSync(var0: java_nio_ByteBuffer | null): number;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'long'
     */
    read(var0: (java_nio_ByteBuffer | null)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'long'
     */
    readSync(var0: (java_nio_ByteBuffer | null)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer[]'
     * @return original return type: 'long'
     */
    read(var0: (java_nio_ByteBuffer | null)[] | null): Promise<number>;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer[]'
     * @return original return type: 'long'
     */
    readSync(var0: (java_nio_ByteBuffer | null)[] | null): number;
    /**
     * @param var0 original type: 'java.nio.channels.ReadableByteChannel'
     * @param var1 original type: 'long'
     * @param var2 original type: 'long'
     * @return original return type: 'long'
     */
    transferFrom(var0: java_nio_channels_ReadableByteChannel | JavaInterfaceProxy<java_nio_channels_ReadableByteChannelInterface> | null, var1: java_lang_Long | bigint | number, var2: java_lang_Long | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'java.nio.channels.ReadableByteChannel'
     * @param var1 original type: 'long'
     * @param var2 original type: 'long'
     * @return original return type: 'long'
     */
    transferFromSync(var0: java_nio_channels_ReadableByteChannel | JavaInterfaceProxy<java_nio_channels_ReadableByteChannelInterface> | null, var1: java_lang_Long | bigint | number, var2: java_lang_Long | bigint | number): number;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @param var2 original type: 'java.nio.channels.WritableByteChannel'
     * @return original return type: 'long'
     */
    transferTo(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number, var2: java_nio_channels_WritableByteChannel | JavaInterfaceProxy<java_nio_channels_WritableByteChannelInterface> | null): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @param var2 original type: 'java.nio.channels.WritableByteChannel'
     * @return original return type: 'long'
     */
    transferToSync(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number, var2: java_nio_channels_WritableByteChannel | JavaInterfaceProxy<java_nio_channels_WritableByteChannelInterface> | null): number;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @param var2 original type: 'boolean'
     * @return original return type: 'java.nio.channels.FileLock'
     */
    tryLock(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number, var2: java_lang_Boolean | boolean): Promise<java_nio_channels_FileLock | null>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @param var2 original type: 'boolean'
     * @return original return type: 'java.nio.channels.FileLock'
     */
    tryLockSync(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number, var2: java_lang_Boolean | boolean): java_nio_channels_FileLock | null;
    /**
     * @return original return type: 'java.nio.channels.FileLock'
     */
    tryLock(): Promise<java_nio_channels_FileLock | null>;
    /**
     * @return original return type: 'java.nio.channels.FileLock'
     */
    tryLockSync(): java_nio_channels_FileLock | null;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'boolean'
     */
    isOpen(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isOpenSync(): boolean;
    /**
     * @return original return type: 'long'
     */
    size(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    sizeSync(): number;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.nio.channels.SeekableByteChannel'
     */
    truncate(var0: java_lang_Long | bigint | number): Promise<java_nio_channels_SeekableByteChannel | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.nio.channels.SeekableByteChannel'
     */
    truncateSync(var0: java_lang_Long | bigint | number): java_nio_channels_SeekableByteChannel | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.nio.channels.FileChannel'
     */
    truncate(var0: java_lang_Long | bigint | number): Promise<FileChannel | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.nio.channels.FileChannel'
     */
    truncateSync(var0: java_lang_Long | bigint | number): FileChannel | null;
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
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @param var2 original type: 'boolean'
     * @return original return type: 'java.nio.channels.FileLock'
     */
    lock(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number, var2: java_lang_Boolean | boolean): Promise<java_nio_channels_FileLock | null>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @param var2 original type: 'boolean'
     * @return original return type: 'java.nio.channels.FileLock'
     */
    lockSync(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number, var2: java_lang_Boolean | boolean): java_nio_channels_FileLock | null;
    /**
     * @return original return type: 'java.nio.channels.FileLock'
     */
    lock(): Promise<java_nio_channels_FileLock | null>;
    /**
     * @return original return type: 'java.nio.channels.FileLock'
     */
    lockSync(): java_nio_channels_FileLock | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    force(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    forceSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'long'
     */
    position(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    positionSync(): number;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.nio.channels.FileChannel'
     */
    position(var0: java_lang_Long | bigint | number): Promise<FileChannel | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.nio.channels.FileChannel'
     */
    positionSync(var0: java_lang_Long | bigint | number): FileChannel | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.nio.channels.SeekableByteChannel'
     */
    position(var0: java_lang_Long | bigint | number): Promise<java_nio_channels_SeekableByteChannel | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.nio.channels.SeekableByteChannel'
     */
    positionSync(var0: java_lang_Long | bigint | number): java_nio_channels_SeekableByteChannel | null;
    /**
     * @param var0 original type: 'java.nio.channels.FileChannel$MapMode'
     * @param var1 original type: 'long'
     * @param var2 original type: 'long'
     * @param var3 original type: 'java.lang.foreign.Arena'
     * @return original return type: 'java.lang.foreign.MemorySegment'
     */
    map(var0: java_nio_channels_FileChannel$MapMode | null, var1: java_lang_Long | bigint | number, var2: java_lang_Long | bigint | number, var3: java_lang_foreign_Arena | JavaInterfaceProxy<java_lang_foreign_ArenaInterface> | null): Promise<java_lang_foreign_MemorySegment | null>;
    /**
     * @param var0 original type: 'java.nio.channels.FileChannel$MapMode'
     * @param var1 original type: 'long'
     * @param var2 original type: 'long'
     * @param var3 original type: 'java.lang.foreign.Arena'
     * @return original return type: 'java.lang.foreign.MemorySegment'
     */
    mapSync(var0: java_nio_channels_FileChannel$MapMode | null, var1: java_lang_Long | bigint | number, var2: java_lang_Long | bigint | number, var3: java_lang_foreign_Arena | JavaInterfaceProxy<java_lang_foreign_ArenaInterface> | null): java_lang_foreign_MemorySegment | null;
    /**
     * @param var0 original type: 'java.nio.channels.FileChannel$MapMode'
     * @param var1 original type: 'long'
     * @param var2 original type: 'long'
     * @return original return type: 'java.nio.MappedByteBuffer'
     */
    map(var0: java_nio_channels_FileChannel$MapMode | null, var1: java_lang_Long | bigint | number, var2: java_lang_Long | bigint | number): Promise<java_nio_MappedByteBuffer | null>;
    /**
     * @param var0 original type: 'java.nio.channels.FileChannel$MapMode'
     * @param var1 original type: 'long'
     * @param var2 original type: 'long'
     * @return original return type: 'java.nio.MappedByteBuffer'
     */
    mapSync(var0: java_nio_channels_FileChannel$MapMode | null, var1: java_lang_Long | bigint | number, var2: java_lang_Long | bigint | number): java_nio_MappedByteBuffer | null;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @param var1 original type: 'long'
     * @return original return type: 'int'
     */
    write(var0: java_nio_ByteBuffer | null, var1: java_lang_Long | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @param var1 original type: 'long'
     * @return original return type: 'int'
     */
    writeSync(var0: java_nio_ByteBuffer | null, var1: java_lang_Long | bigint | number): number;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @return original return type: 'int'
     */
    write(var0: java_nio_ByteBuffer | null): Promise<number>;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @return original return type: 'int'
     */
    writeSync(var0: java_nio_ByteBuffer | null): number;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'long'
     */
    write(var0: (java_nio_ByteBuffer | null)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'long'
     */
    writeSync(var0: (java_nio_ByteBuffer | null)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer[]'
     * @return original return type: 'long'
     */
    write(var0: (java_nio_ByteBuffer | null)[] | null): Promise<number>;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer[]'
     * @return original return type: 'long'
     */
    writeSync(var0: (java_nio_ByteBuffer | null)[] | null): number;
    /**
     * @return original return type: 'void'
     */
    close(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    closeSync(): void;
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.OpenOption[]'
     * @return original return type: 'java.nio.channels.FileChannel'
     */
    static open(var0: java_nio_file_Path | JavaInterfaceProxy<java_nio_file_PathInterface> | null, var1: (java_nio_file_OpenOption | JavaInterfaceProxy<java_nio_file_OpenOptionInterface> | null)[] | null): Promise<FileChannel | null>;
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.OpenOption[]'
     * @return original return type: 'java.nio.channels.FileChannel'
     */
    static openSync(var0: java_nio_file_Path | JavaInterfaceProxy<java_nio_file_PathInterface> | null, var1: (java_nio_file_OpenOption | JavaInterfaceProxy<java_nio_file_OpenOptionInterface> | null)[] | null): FileChannel | null;
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.util.Set'
     * @param var2 original type: 'java.nio.file.attribute.FileAttribute[]'
     * @return original return type: 'java.nio.channels.FileChannel'
     */
    static open(var0: java_nio_file_Path | JavaInterfaceProxy<java_nio_file_PathInterface> | null, var1: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null, var2: (java_nio_file_attribute_FileAttribute | JavaInterfaceProxy<java_nio_file_attribute_FileAttributeInterface> | null)[] | null): Promise<FileChannel | null>;
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.util.Set'
     * @param var2 original type: 'java.nio.file.attribute.FileAttribute[]'
     * @return original return type: 'java.nio.channels.FileChannel'
     */
    static openSync(var0: java_nio_file_Path | JavaInterfaceProxy<java_nio_file_PathInterface> | null, var1: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null, var2: (java_nio_file_attribute_FileAttribute | JavaInterfaceProxy<java_nio_file_attribute_FileAttributeInterface> | null)[] | null): FileChannel | null;
}
declare const FileChannel_base: typeof FileChannelClass;
/**
 * Class java.nio.channels.FileChannel.
 *
 * This actually imports the java class for further use.
 * The class {@link FileChannelClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FileChannel extends FileChannel_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default FileChannel;
//# sourceMappingURL=FileChannel.d.ts.map