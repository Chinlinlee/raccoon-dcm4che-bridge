import { JavaClass, BasicOrJavaType } from "java-bridge";
import { ServerSocket as java_net_ServerSocket } from "./../../java/net/ServerSocket";
import { Integer as java_lang_Integer } from "./../../java/lang/Integer";
import { InetAddress as java_net_InetAddress } from "./../../java/net/InetAddress";
import { Long as java_lang_Long } from "./../../java/lang/Long";
import { Class as java_lang_Class } from "./../../java/lang/Class";
/**
 * This class just defines types, you should import {@link ServerSocketFactory} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ServerSocketFactoryClass extends JavaClass {
    /**
     * @return original return type: 'javax.net.ServerSocketFactory'
     */
    static getDefault(): Promise<ServerSocketFactory | null>;
    /**
     * @return original return type: 'javax.net.ServerSocketFactory'
     */
    static getDefaultSync(): ServerSocketFactory | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.net.ServerSocket'
     */
    createServerSocket(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<java_net_ServerSocket | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.net.ServerSocket'
     */
    createServerSocketSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): java_net_ServerSocket | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.net.InetAddress'
     * @return original return type: 'java.net.ServerSocket'
     */
    createServerSocket(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_net_InetAddress | null): Promise<java_net_ServerSocket | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.net.InetAddress'
     * @return original return type: 'java.net.ServerSocket'
     */
    createServerSocketSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_net_InetAddress | null): java_net_ServerSocket | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.net.ServerSocket'
     */
    createServerSocket(var0: java_lang_Integer | number): Promise<java_net_ServerSocket | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.net.ServerSocket'
     */
    createServerSocketSync(var0: java_lang_Integer | number): java_net_ServerSocket | null;
    /**
     * @return original return type: 'java.net.ServerSocket'
     */
    createServerSocket(): Promise<java_net_ServerSocket | null>;
    /**
     * @return original return type: 'java.net.ServerSocket'
     */
    createServerSocketSync(): java_net_ServerSocket | null;
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
}
declare const ServerSocketFactory_base: typeof ServerSocketFactoryClass;
/**
 * Class javax.net.ServerSocketFactory.
 *
 * This actually imports the java class for further use.
 * The class {@link ServerSocketFactoryClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ServerSocketFactory extends ServerSocketFactory_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default ServerSocketFactory;
//# sourceMappingURL=ServerSocketFactory.d.ts.map