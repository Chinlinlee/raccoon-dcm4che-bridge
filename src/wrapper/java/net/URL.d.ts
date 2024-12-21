import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./../lang/Class";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { URLStreamHandlerFactory as java_net_URLStreamHandlerFactory, URLStreamHandlerFactoryInterface as java_net_URLStreamHandlerFactoryInterface } from "./URLStreamHandlerFactory";
import { URI as java_net_URI } from "./URI";
import { URLStreamHandler as java_net_URLStreamHandler } from "./URLStreamHandler";
import { URLConnection as java_net_URLConnection } from "./URLConnection";
import { Proxy as java_net_Proxy } from "./Proxy";
import { InputStream as java_io_InputStream } from "./../io/InputStream";
/**
 * This class just defines types, you should import {@link URL} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class URLClass extends JavaClass {
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
     * @param var0 original type: 'java.net.URLStreamHandlerFactory'
     * @return original return type: 'void'
     */
    static setURLStreamHandlerFactory(var0: java_net_URLStreamHandlerFactory | JavaInterfaceProxy<java_net_URLStreamHandlerFactoryInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.net.URLStreamHandlerFactory'
     * @return original return type: 'void'
     */
    static setURLStreamHandlerFactorySync(var0: java_net_URLStreamHandlerFactory | JavaInterfaceProxy<java_net_URLStreamHandlerFactoryInterface> | null): void;
    /**
     * @return original return type: 'java.lang.Object'
     */
    getContent(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    getContentSync(): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.Class[]'
     * @return original return type: 'java.lang.Object'
     */
    getContent(var0: (java_lang_Class | null)[] | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Class[]'
     * @return original return type: 'java.lang.Object'
     */
    getContentSync(var0: (java_lang_Class | null)[] | null): BasicOrJavaType | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getFile(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getFileSync(): string | null;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getRef(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getRefSync(): string | null;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @param var0 original type: 'java.net.URL'
     * @return original return type: 'boolean'
     */
    sameFile(var0: URLClass | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.net.URL'
     * @return original return type: 'boolean'
     */
    sameFileSync(var0: URLClass | null): boolean;
    /**
     * @param var0 original type: 'java.net.URI'
     * @param var1 original type: 'java.net.URLStreamHandler'
     * @return original return type: 'java.net.URL'
     */
    static of(var0: java_net_URI | null, var1: java_net_URLStreamHandler | null): Promise<URL | null>;
    /**
     * @param var0 original type: 'java.net.URI'
     * @param var1 original type: 'java.net.URLStreamHandler'
     * @return original return type: 'java.net.URL'
     */
    static ofSync(var0: java_net_URI | null, var1: java_net_URLStreamHandler | null): URL | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPath(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPathSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getHost(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getHostSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getQuery(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getQuerySync(): string | null;
    /**
     * @return original return type: 'int'
     */
    getDefaultPort(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getDefaultPortSync(): number;
    /**
     * @return original return type: 'java.net.URLConnection'
     */
    openConnection(): Promise<java_net_URLConnection | null>;
    /**
     * @return original return type: 'java.net.URLConnection'
     */
    openConnectionSync(): java_net_URLConnection | null;
    /**
     * @param var0 original type: 'java.net.Proxy'
     * @return original return type: 'java.net.URLConnection'
     */
    openConnection(var0: java_net_Proxy | null): Promise<java_net_URLConnection | null>;
    /**
     * @param var0 original type: 'java.net.Proxy'
     * @return original return type: 'java.net.URLConnection'
     */
    openConnectionSync(var0: java_net_Proxy | null): java_net_URLConnection | null;
    /**
     * @return original return type: 'java.net.URI'
     */
    toURI(): Promise<java_net_URI | null>;
    /**
     * @return original return type: 'java.net.URI'
     */
    toURISync(): java_net_URI | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getProtocol(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getProtocolSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getAuthority(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getAuthoritySync(): string | null;
    /**
     * @return original return type: 'java.io.InputStream'
     */
    openStream(): Promise<java_io_InputStream | null>;
    /**
     * @return original return type: 'java.io.InputStream'
     */
    openStreamSync(): java_io_InputStream | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    toExternalForm(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toExternalFormSync(): string | null;
    /**
     * @return original return type: 'int'
     */
    getPort(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getPortSync(): number;
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
    getUserInfo(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getUserInfoSync(): string | null;
    /**
     * @param var0 original type: 'java.net.URL'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.net.URLStreamHandler'
     */
    constructor(var0: URLClass | null, var1: string | null, var2: java_net_URLStreamHandler | null);
    /**
     * @param var0 original type: 'java.net.URL'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.net.URLStreamHandler'
     * @return original return type: 'java.net.URL'
     */
    static newInstanceAsync(var0: URLClass | null, var1: string | null, var2: java_net_URLStreamHandler | null): Promise<URL>;
    /**
     * @param var0 original type: 'java.net.URL'
     * @param var1 original type: 'java.lang.String'
     */
    constructor(var0: URLClass | null, var1: string | null);
    /**
     * @param var0 original type: 'java.net.URL'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.net.URL'
     */
    static newInstanceAsync(var0: URLClass | null, var1: string | null): Promise<URL>;
    /**
     * @param var0 original type: 'java.lang.String'
     */
    constructor(var0: string | null);
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.net.URL'
     */
    static newInstanceAsync(var0: string | null): Promise<URL>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.lang.String'
     */
    constructor(var0: string | null, var1: string | null, var2: java_lang_Integer | number, var3: string | null);
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.lang.String'
     * @return original return type: 'java.net.URL'
     */
    static newInstanceAsync(var0: string | null, var1: string | null, var2: java_lang_Integer | number, var3: string | null): Promise<URL>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     */
    constructor(var0: string | null, var1: string | null, var2: string | null);
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'java.net.URL'
     */
    static newInstanceAsync(var0: string | null, var1: string | null, var2: string | null): Promise<URL>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'java.net.URLStreamHandler'
     */
    constructor(var0: string | null, var1: string | null, var2: java_lang_Integer | number, var3: string | null, var4: java_net_URLStreamHandler | null);
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'java.net.URLStreamHandler'
     * @return original return type: 'java.net.URL'
     */
    static newInstanceAsync(var0: string | null, var1: string | null, var2: java_lang_Integer | number, var3: string | null, var4: java_net_URLStreamHandler | null): Promise<URL>;
}
declare const URL_base: typeof URLClass;
/**
 * Class java.net.URL.
 *
 * This actually imports the java class for further use.
 * The class {@link URLClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class URL extends URL_base {
}
export default URL;
//# sourceMappingURL=URL.d.ts.map