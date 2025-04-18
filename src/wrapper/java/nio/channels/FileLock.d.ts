import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../lang/Class";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { FileChannel as java_nio_channels_FileChannel } from "./FileChannel";
import { Channel as java_nio_channels_Channel } from "./Channel";
/**
 * This class just defines types, you should import {@link FileLock} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FileLockClass extends JavaClass {
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
    release(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    releaseSync(): void;
    /**
     * @return original return type: 'boolean'
     */
    isValid(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isValidSync(): boolean;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'java.nio.channels.FileChannel'
     */
    channel(): Promise<java_nio_channels_FileChannel | null>;
    /**
     * @return original return type: 'java.nio.channels.FileChannel'
     */
    channelSync(): java_nio_channels_FileChannel | null;
    /**
     * @return original return type: 'java.nio.channels.Channel'
     */
    acquiredBy(): Promise<java_nio_channels_Channel | null>;
    /**
     * @return original return type: 'java.nio.channels.Channel'
     */
    acquiredBySync(): java_nio_channels_Channel | null;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'long'
     */
    size(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    sizeSync(): number;
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
     * @return original return type: 'boolean'
     */
    overlaps(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number): Promise<boolean>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @return original return type: 'boolean'
     */
    overlapsSync(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number): boolean;
    /**
     * @return original return type: 'long'
     */
    position(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    positionSync(): number;
    /**
     * @return original return type: 'void'
     */
    close(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    closeSync(): void;
    /**
     * @return original return type: 'boolean'
     */
    isShared(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isSharedSync(): boolean;
}
declare const FileLock_base: typeof FileLockClass;
/**
 * Class java.nio.channels.FileLock.
 *
 * This actually imports the java class for further use.
 * The class {@link FileLockClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FileLock extends FileLock_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default FileLock;
