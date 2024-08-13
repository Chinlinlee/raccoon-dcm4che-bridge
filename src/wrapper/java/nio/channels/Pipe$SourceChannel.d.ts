import { JavaClass, BasicOrJavaType } from "java-bridge";
import { SelectionKey as java_nio_channels_SelectionKey } from "./SelectionKey";
import { Selector as java_nio_channels_Selector } from "./Selector";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { SelectorProvider as java_nio_channels_spi_SelectorProvider } from "./spi/SelectorProvider";
import { SelectableChannel as java_nio_channels_SelectableChannel } from "./SelectableChannel";
import { Boolean as java_lang_Boolean } from "./../../lang/Boolean";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Class as java_lang_Class } from "./../../lang/Class";
import { ByteBuffer as java_nio_ByteBuffer } from "./../ByteBuffer";
/**
 * This class just defines types, you should import {@link Pipe$SourceChannel} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Pipe$SourceChannelClass extends JavaClass {
    /**
     * @return original return type: 'int'
     */
    validOps(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    validOpsSync(): number;
    /**
     * @return original return type: 'boolean'
     */
    isRegistered(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isRegisteredSync(): boolean;
    /**
     * @param var0 original type: 'java.nio.channels.Selector'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.lang.Object'
     * @return original return type: 'java.nio.channels.SelectionKey'
     */
    register(var0: java_nio_channels_Selector | null, var1: java_lang_Integer | number, var2: BasicOrJavaType | null): Promise<java_nio_channels_SelectionKey | null>;
    /**
     * @param var0 original type: 'java.nio.channels.Selector'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.lang.Object'
     * @return original return type: 'java.nio.channels.SelectionKey'
     */
    registerSync(var0: java_nio_channels_Selector | null, var1: java_lang_Integer | number, var2: BasicOrJavaType | null): java_nio_channels_SelectionKey | null;
    /**
     * @param var0 original type: 'java.nio.channels.Selector'
     * @param var1 original type: 'int'
     * @return original return type: 'java.nio.channels.SelectionKey'
     */
    register(var0: java_nio_channels_Selector | null, var1: java_lang_Integer | number): Promise<java_nio_channels_SelectionKey | null>;
    /**
     * @param var0 original type: 'java.nio.channels.Selector'
     * @param var1 original type: 'int'
     * @return original return type: 'java.nio.channels.SelectionKey'
     */
    registerSync(var0: java_nio_channels_Selector | null, var1: java_lang_Integer | number): java_nio_channels_SelectionKey | null;
    /**
     * @return original return type: 'java.nio.channels.spi.SelectorProvider'
     */
    provider(): Promise<java_nio_channels_spi_SelectorProvider | null>;
    /**
     * @return original return type: 'java.nio.channels.spi.SelectorProvider'
     */
    providerSync(): java_nio_channels_spi_SelectorProvider | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'java.nio.channels.SelectableChannel'
     */
    configureBlocking(var0: java_lang_Boolean | boolean): Promise<java_nio_channels_SelectableChannel | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'java.nio.channels.SelectableChannel'
     */
    configureBlockingSync(var0: java_lang_Boolean | boolean): java_nio_channels_SelectableChannel | null;
    /**
     * @return original return type: 'boolean'
     */
    isBlocking(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isBlockingSync(): boolean;
    /**
     * @return original return type: 'java.lang.Object'
     */
    blockingLock(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    blockingLockSync(): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.nio.channels.Selector'
     * @return original return type: 'java.nio.channels.SelectionKey'
     */
    keyFor(var0: java_nio_channels_Selector | null): Promise<java_nio_channels_SelectionKey | null>;
    /**
     * @param var0 original type: 'java.nio.channels.Selector'
     * @return original return type: 'java.nio.channels.SelectionKey'
     */
    keyForSync(var0: java_nio_channels_Selector | null): java_nio_channels_SelectionKey | null;
    /**
     * @return original return type: 'boolean'
     */
    isOpen(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isOpenSync(): boolean;
    /**
     * @return original return type: 'void'
     */
    close(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    closeSync(): void;
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
     * @return original return type: 'java.lang.String'
     */
    toString(): string;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
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
}
declare const Pipe$SourceChannel_base: typeof Pipe$SourceChannelClass;
/**
 * Class java.nio.channels.Pipe$SourceChannel.
 *
 * This actually imports the java class for further use.
 * The class {@link Pipe$SourceChannelClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Pipe$SourceChannel extends Pipe$SourceChannel_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default Pipe$SourceChannel;
//# sourceMappingURL=Pipe$SourceChannel.d.ts.map