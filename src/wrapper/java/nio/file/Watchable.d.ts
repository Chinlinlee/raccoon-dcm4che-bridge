import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { WatchKey as java_nio_file_WatchKey } from "./WatchKey";
import { WatchService as java_nio_file_WatchService, WatchServiceInterface as java_nio_file_WatchServiceInterface } from "./WatchService";
import { WatchEvent$Kind as java_nio_file_WatchEvent$Kind, WatchEvent$KindInterface as java_nio_file_WatchEvent$KindInterface } from "./WatchEvent$Kind";
import { WatchEvent$Modifier as java_nio_file_WatchEvent$Modifier, WatchEvent$ModifierInterface as java_nio_file_WatchEvent$ModifierInterface } from "./WatchEvent$Modifier";
/**
 * This class just defines types, you should import {@link Watchable} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class WatchableClass extends JavaClass {
    /**
     * @param var0 original type: 'java.nio.file.WatchService'
     * @param var1 original type: 'java.nio.file.WatchEvent$Kind[]'
     * @param var2 original type: 'java.nio.file.WatchEvent$Modifier[]'
     * @return original return type: 'java.nio.file.WatchKey'
     */
    register(var0: java_nio_file_WatchService | JavaInterfaceProxy<java_nio_file_WatchServiceInterface> | null, var1: (java_nio_file_WatchEvent$Kind | JavaInterfaceProxy<java_nio_file_WatchEvent$KindInterface> | null)[] | null, var2: (java_nio_file_WatchEvent$Modifier | JavaInterfaceProxy<java_nio_file_WatchEvent$ModifierInterface> | null)[] | null): Promise<java_nio_file_WatchKey | null>;
    /**
     * @param var0 original type: 'java.nio.file.WatchService'
     * @param var1 original type: 'java.nio.file.WatchEvent$Kind[]'
     * @param var2 original type: 'java.nio.file.WatchEvent$Modifier[]'
     * @return original return type: 'java.nio.file.WatchKey'
     */
    registerSync(var0: java_nio_file_WatchService | JavaInterfaceProxy<java_nio_file_WatchServiceInterface> | null, var1: (java_nio_file_WatchEvent$Kind | JavaInterfaceProxy<java_nio_file_WatchEvent$KindInterface> | null)[] | null, var2: (java_nio_file_WatchEvent$Modifier | JavaInterfaceProxy<java_nio_file_WatchEvent$ModifierInterface> | null)[] | null): java_nio_file_WatchKey | null;
    /**
     * @param var0 original type: 'java.nio.file.WatchService'
     * @param var1 original type: 'java.nio.file.WatchEvent$Kind[]'
     * @return original return type: 'java.nio.file.WatchKey'
     */
    register(var0: java_nio_file_WatchService | JavaInterfaceProxy<java_nio_file_WatchServiceInterface> | null, var1: (java_nio_file_WatchEvent$Kind | JavaInterfaceProxy<java_nio_file_WatchEvent$KindInterface> | null)[] | null): Promise<java_nio_file_WatchKey | null>;
    /**
     * @param var0 original type: 'java.nio.file.WatchService'
     * @param var1 original type: 'java.nio.file.WatchEvent$Kind[]'
     * @return original return type: 'java.nio.file.WatchKey'
     */
    registerSync(var0: java_nio_file_WatchService | JavaInterfaceProxy<java_nio_file_WatchServiceInterface> | null, var1: (java_nio_file_WatchEvent$Kind | JavaInterfaceProxy<java_nio_file_WatchEvent$KindInterface> | null)[] | null): java_nio_file_WatchKey | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createWatchableProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface WatchableInterface {
    /**
     * @param var0 original type: 'java.nio.file.WatchService'
     * @param var1 original type: 'java.nio.file.WatchEvent$Kind[]'
     * @param var2 original type: 'java.nio.file.WatchEvent$Modifier[]'
     * @return original return type: 'java.nio.file.WatchKey'
     */
    register(var0: java_nio_file_WatchService | JavaInterfaceProxy<java_nio_file_WatchServiceInterface> | null, var1: (java_nio_file_WatchEvent$Kind | JavaInterfaceProxy<java_nio_file_WatchEvent$KindInterface> | null)[] | null, var2: (java_nio_file_WatchEvent$Modifier | JavaInterfaceProxy<java_nio_file_WatchEvent$ModifierInterface> | null)[] | null): java_nio_file_WatchKey | null;
    /**
     * @param var0 original type: 'java.nio.file.WatchService'
     * @param var1 original type: 'java.nio.file.WatchEvent$Kind[]'
     * @return original return type: 'java.nio.file.WatchKey'
     */
    register(var0: java_nio_file_WatchService | JavaInterfaceProxy<java_nio_file_WatchServiceInterface> | null, var1: (java_nio_file_WatchEvent$Kind | JavaInterfaceProxy<java_nio_file_WatchEvent$KindInterface> | null)[] | null): java_nio_file_WatchKey | null;
}
/**
 * Create a proxy for the {@link Watchable} interface.
 * All required methods in {@link WatchableInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createWatchableProxy(methods: WatchableInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<WatchableInterface>;
declare const Watchable_base: typeof WatchableClass;
/**
 * Class java.nio.file.Watchable.
 *
 * This actually imports the java class for further use.
 * The class {@link WatchableClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Watchable extends Watchable_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default Watchable;
