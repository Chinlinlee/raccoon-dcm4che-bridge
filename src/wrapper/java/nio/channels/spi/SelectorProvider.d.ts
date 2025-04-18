import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { SocketChannel as java_nio_channels_SocketChannel } from "./../SocketChannel";
import { ProtocolFamily as java_net_ProtocolFamily, ProtocolFamilyInterface as java_net_ProtocolFamilyInterface } from "./../../../net/ProtocolFamily";
import { Class as java_lang_Class } from "./../../../lang/Class";
import { Long as java_lang_Long } from "./../../../lang/Long";
import { Integer as java_lang_Integer } from "./../../../lang/Integer";
import { DatagramChannel as java_nio_channels_DatagramChannel } from "./../DatagramChannel";
import { Pipe as java_nio_channels_Pipe } from "./../Pipe";
import { Channel as java_nio_channels_Channel } from "./../Channel";
import { ServerSocketChannel as java_nio_channels_ServerSocketChannel } from "./../ServerSocketChannel";
import { AbstractSelector as java_nio_channels_spi_AbstractSelector } from "./AbstractSelector";
/**
 * This class just defines types, you should import {@link SelectorProvider} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class SelectorProviderClass extends JavaClass {
    /**
     * @return original return type: 'java.nio.channels.SocketChannel'
     */
    openSocketChannel(): Promise<java_nio_channels_SocketChannel | null>;
    /**
     * @return original return type: 'java.nio.channels.SocketChannel'
     */
    openSocketChannelSync(): java_nio_channels_SocketChannel | null;
    /**
     * @param var0 original type: 'java.net.ProtocolFamily'
     * @return original return type: 'java.nio.channels.SocketChannel'
     */
    openSocketChannel(var0: java_net_ProtocolFamily | JavaInterfaceProxy<java_net_ProtocolFamilyInterface> | null): Promise<java_nio_channels_SocketChannel | null>;
    /**
     * @param var0 original type: 'java.net.ProtocolFamily'
     * @return original return type: 'java.nio.channels.SocketChannel'
     */
    openSocketChannelSync(var0: java_net_ProtocolFamily | JavaInterfaceProxy<java_net_ProtocolFamilyInterface> | null): java_nio_channels_SocketChannel | null;
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
     * @param var0 original type: 'java.net.ProtocolFamily'
     * @return original return type: 'java.nio.channels.DatagramChannel'
     */
    openDatagramChannel(var0: java_net_ProtocolFamily | JavaInterfaceProxy<java_net_ProtocolFamilyInterface> | null): Promise<java_nio_channels_DatagramChannel | null>;
    /**
     * @param var0 original type: 'java.net.ProtocolFamily'
     * @return original return type: 'java.nio.channels.DatagramChannel'
     */
    openDatagramChannelSync(var0: java_net_ProtocolFamily | JavaInterfaceProxy<java_net_ProtocolFamilyInterface> | null): java_nio_channels_DatagramChannel | null;
    /**
     * @return original return type: 'java.nio.channels.DatagramChannel'
     */
    openDatagramChannel(): Promise<java_nio_channels_DatagramChannel | null>;
    /**
     * @return original return type: 'java.nio.channels.DatagramChannel'
     */
    openDatagramChannelSync(): java_nio_channels_DatagramChannel | null;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'java.nio.channels.Pipe'
     */
    openPipe(): Promise<java_nio_channels_Pipe | null>;
    /**
     * @return original return type: 'java.nio.channels.Pipe'
     */
    openPipeSync(): java_nio_channels_Pipe | null;
    /**
     * @return original return type: 'java.nio.channels.spi.SelectorProvider'
     */
    static provider(): Promise<SelectorProvider | null>;
    /**
     * @return original return type: 'java.nio.channels.spi.SelectorProvider'
     */
    static providerSync(): SelectorProvider | null;
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
     * @return original return type: 'java.nio.channels.Channel'
     */
    inheritedChannel(): Promise<java_nio_channels_Channel | null>;
    /**
     * @return original return type: 'java.nio.channels.Channel'
     */
    inheritedChannelSync(): java_nio_channels_Channel | null;
    /**
     * @return original return type: 'java.nio.channels.ServerSocketChannel'
     */
    openServerSocketChannel(): Promise<java_nio_channels_ServerSocketChannel | null>;
    /**
     * @return original return type: 'java.nio.channels.ServerSocketChannel'
     */
    openServerSocketChannelSync(): java_nio_channels_ServerSocketChannel | null;
    /**
     * @param var0 original type: 'java.net.ProtocolFamily'
     * @return original return type: 'java.nio.channels.ServerSocketChannel'
     */
    openServerSocketChannel(var0: java_net_ProtocolFamily | JavaInterfaceProxy<java_net_ProtocolFamilyInterface> | null): Promise<java_nio_channels_ServerSocketChannel | null>;
    /**
     * @param var0 original type: 'java.net.ProtocolFamily'
     * @return original return type: 'java.nio.channels.ServerSocketChannel'
     */
    openServerSocketChannelSync(var0: java_net_ProtocolFamily | JavaInterfaceProxy<java_net_ProtocolFamilyInterface> | null): java_nio_channels_ServerSocketChannel | null;
    /**
     * @return original return type: 'java.nio.channels.spi.AbstractSelector'
     */
    openSelector(): Promise<java_nio_channels_spi_AbstractSelector | null>;
    /**
     * @return original return type: 'java.nio.channels.spi.AbstractSelector'
     */
    openSelectorSync(): java_nio_channels_spi_AbstractSelector | null;
}
declare const SelectorProvider_base: typeof SelectorProviderClass;
/**
 * Class java.nio.channels.spi.SelectorProvider.
 *
 * This actually imports the java class for further use.
 * The class {@link SelectorProviderClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class SelectorProvider extends SelectorProvider_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default SelectorProvider;
