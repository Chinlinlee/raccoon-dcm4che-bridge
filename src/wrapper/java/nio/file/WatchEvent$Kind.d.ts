import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./../../lang/Class";
/**
 * This class just defines types, you should import {@link WatchEvent$Kind} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class WatchEvent$KindClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.String'
     */
    name(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    nameSync(): string | null;
    /**
     * @return original return type: 'java.lang.Class'
     */
    type(): Promise<java_lang_Class | null>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    typeSync(): java_lang_Class | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createWatchEvent$KindProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface WatchEvent$KindInterface {
    /**
     * @return original return type: 'java.lang.String'
     */
    name(): string | null;
    /**
     * @return original return type: 'java.lang.Class'
     */
    type(): java_lang_Class | null;
}
/**
 * Create a proxy for the {@link WatchEvent$Kind} interface.
 * All required methods in {@link WatchEvent$KindInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createWatchEvent$KindProxy(methods: WatchEvent$KindInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<WatchEvent$KindInterface>;
declare const WatchEvent$Kind_base: typeof WatchEvent$KindClass;
/**
 * Class java.nio.file.WatchEvent$Kind.
 *
 * This actually imports the java class for further use.
 * The class {@link WatchEvent$KindClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class WatchEvent$Kind extends WatchEvent$Kind_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default WatchEvent$Kind;
