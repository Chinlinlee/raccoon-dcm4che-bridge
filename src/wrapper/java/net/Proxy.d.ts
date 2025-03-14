import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../lang/Class";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { SocketAddress as java_net_SocketAddress } from "./SocketAddress";
import { Proxy$Type as java_net_Proxy$Type } from "./Proxy$Type";
/**
 * This class just defines types, you should import {@link Proxy} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ProxyClass extends JavaClass {
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
     * @return original return type: 'java.net.SocketAddress'
     */
    address(): Promise<java_net_SocketAddress | null>;
    /**
     * @return original return type: 'java.net.SocketAddress'
     */
    addressSync(): java_net_SocketAddress | null;
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
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'java.net.Proxy$Type'
     */
    type(): Promise<java_net_Proxy$Type | null>;
    /**
     * @return original return type: 'java.net.Proxy$Type'
     */
    typeSync(): java_net_Proxy$Type | null;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * Original type: 'java.net.Proxy'
     */
    static readonly NO_PROXY: ProxyClass | null;
    /**
     * @param var0 original type: 'java.net.Proxy$Type'
     * @param var1 original type: 'java.net.SocketAddress'
     */
    constructor(var0: java_net_Proxy$Type | null, var1: java_net_SocketAddress | null);
    /**
     * @param var0 original type: 'java.net.Proxy$Type'
     * @param var1 original type: 'java.net.SocketAddress'
     * @return original return type: 'java.net.Proxy'
     */
    static newInstanceAsync(var0: java_net_Proxy$Type | null, var1: java_net_SocketAddress | null): Promise<Proxy>;
}
declare const Proxy_base: typeof ProxyClass;
/**
 * Class java.net.Proxy.
 *
 * This actually imports the java class for further use.
 * The class {@link ProxyClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Proxy extends Proxy_base {
}
export default Proxy;
//# sourceMappingURL=Proxy.d.ts.map