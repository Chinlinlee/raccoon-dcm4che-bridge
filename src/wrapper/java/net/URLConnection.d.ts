import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { InputStream as java_io_InputStream } from "./../io/InputStream";
import { Class as java_lang_Class } from "./../lang/Class";
import { Permission as java_security_Permission } from "./../security/Permission";
import { Boolean as java_lang_Boolean } from "./../lang/Boolean";
import { URL as java_net_URL } from "./URL";
import { FileNameMap as java_net_FileNameMap, FileNameMapInterface as java_net_FileNameMapInterface } from "./FileNameMap";
import { Map as java_util_Map } from "./../util/Map";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { Long as java_lang_Long } from "./../lang/Long";
import { OutputStream as java_io_OutputStream } from "./../io/OutputStream";
import { ContentHandlerFactory as java_net_ContentHandlerFactory, ContentHandlerFactoryInterface as java_net_ContentHandlerFactoryInterface } from "./ContentHandlerFactory";
/**
 * This class just defines types, you should import {@link URLConnection} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class URLConnectionClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): string;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @return original return type: 'void'
     */
    connect(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    connectSync(): void;
    /**
     * @return original return type: 'java.io.InputStream'
     */
    getInputStream(): Promise<java_io_InputStream | null>;
    /**
     * @return original return type: 'java.io.InputStream'
     */
    getInputStreamSync(): java_io_InputStream | null;
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
     * @return original return type: 'java.security.Permission'
     */
    getPermission(): Promise<java_security_Permission | null>;
    /**
     * @return original return type: 'java.security.Permission'
     */
    getPermissionSync(): java_security_Permission | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setUseCaches(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setUseCachesSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setRequestProperty(var0: string | null, var1: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setRequestPropertySync(var0: string | null, var1: string | null): void;
    /**
     * @return original return type: 'java.net.URL'
     */
    getURL(): Promise<java_net_URL | null>;
    /**
     * @return original return type: 'java.net.URL'
     */
    getURLSync(): java_net_URL | null;
    /**
     * @return original return type: 'int'
     */
    getContentLength(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getContentLengthSync(): number;
    /**
     * @return original return type: 'long'
     */
    getLastModified(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    getLastModifiedSync(): number;
    /**
     * @return original return type: 'long'
     */
    getDate(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    getDateSync(): number;
    /**
     * @return original return type: 'java.net.FileNameMap'
     */
    static getFileNameMap(): Promise<java_net_FileNameMap | null>;
    /**
     * @return original return type: 'java.net.FileNameMap'
     */
    static getFileNameMapSync(): java_net_FileNameMap | null;
    /**
     * @return original return type: 'java.util.Map'
     */
    getHeaderFields(): Promise<java_util_Map | null>;
    /**
     * @return original return type: 'java.util.Map'
     */
    getHeaderFieldsSync(): java_util_Map | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    getHeaderField(var0: java_lang_Integer | number): Promise<string | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    getHeaderFieldSync(var0: java_lang_Integer | number): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getHeaderField(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getHeaderFieldSync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    getHeaderFieldKey(var0: java_lang_Integer | number): Promise<string | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    getHeaderFieldKeySync(var0: java_lang_Integer | number): string | null;
    /**
     * @return original return type: 'long'
     */
    getContentLengthLong(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    getContentLengthLongSync(): number;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @return original return type: 'java.lang.String'
     */
    static guessContentTypeFromStream(var0: java_io_InputStream | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @return original return type: 'java.lang.String'
     */
    static guessContentTypeFromStreamSync(var0: java_io_InputStream | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static guessContentTypeFromName(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static guessContentTypeFromNameSync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    addRequestProperty(var0: string | null, var1: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    addRequestPropertySync(var0: string | null, var1: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getRequestProperty(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getRequestPropertySync(var0: string | null): string | null;
    /**
     * @return original return type: 'java.util.Map'
     */
    getRequestProperties(): Promise<java_util_Map | null>;
    /**
     * @return original return type: 'java.util.Map'
     */
    getRequestPropertiesSync(): java_util_Map | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getContentType(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getContentTypeSync(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    getDefaultUseCaches(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    getDefaultUseCachesSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static getDefaultUseCaches(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static getDefaultUseCachesSync(var0: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'long'
     * @return original return type: 'long'
     */
    getHeaderFieldLong(var0: string | null, var1: java_lang_Long | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'long'
     * @return original return type: 'long'
     */
    getHeaderFieldLongSync(var0: string | null, var1: java_lang_Long | bigint | number): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'long'
     * @return original return type: 'long'
     */
    getHeaderFieldDate(var0: string | null, var1: java_lang_Long | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'long'
     * @return original return type: 'long'
     */
    getHeaderFieldDateSync(var0: string | null, var1: java_lang_Long | bigint | number): number;
    /**
     * @param var0 original type: 'java.net.FileNameMap'
     * @return original return type: 'void'
     */
    static setFileNameMap(var0: java_net_FileNameMap | JavaInterfaceProxy<java_net_FileNameMapInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.net.FileNameMap'
     * @return original return type: 'void'
     */
    static setFileNameMapSync(var0: java_net_FileNameMap | JavaInterfaceProxy<java_net_FileNameMapInterface> | null): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setConnectTimeout(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setConnectTimeoutSync(var0: java_lang_Integer | number): void;
    /**
     * @return original return type: 'int'
     */
    getConnectTimeout(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getConnectTimeoutSync(): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setReadTimeout(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setReadTimeoutSync(var0: java_lang_Integer | number): void;
    /**
     * @return original return type: 'int'
     */
    getReadTimeout(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getReadTimeoutSync(): number;
    /**
     * @return original return type: 'java.lang.String'
     */
    getContentEncoding(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getContentEncodingSync(): string | null;
    /**
     * @return original return type: 'long'
     */
    getExpiration(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    getExpirationSync(): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    getHeaderFieldInt(var0: string | null, var1: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    getHeaderFieldIntSync(var0: string | null, var1: java_lang_Integer | number): number;
    /**
     * @return original return type: 'java.io.OutputStream'
     */
    getOutputStream(): Promise<java_io_OutputStream | null>;
    /**
     * @return original return type: 'java.io.OutputStream'
     */
    getOutputStreamSync(): java_io_OutputStream | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setDoInput(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setDoInputSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'boolean'
     */
    getDoInput(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    getDoInputSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setDoOutput(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setDoOutputSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'boolean'
     */
    getDoOutput(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    getDoOutputSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setAllowUserInteraction(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setAllowUserInteractionSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'boolean'
     */
    getAllowUserInteraction(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    getAllowUserInteractionSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    static setDefaultAllowUserInteraction(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    static setDefaultAllowUserInteractionSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'boolean'
     */
    static getDefaultAllowUserInteraction(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    static getDefaultAllowUserInteractionSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    getUseCaches(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    getUseCachesSync(): boolean;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    setIfModifiedSince(var0: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    setIfModifiedSinceSync(var0: java_lang_Long | bigint | number): void;
    /**
     * @return original return type: 'long'
     */
    getIfModifiedSince(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    getIfModifiedSinceSync(): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @return original return type: 'void'
     */
    static setDefaultUseCaches(var0: string | null, var1: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @return original return type: 'void'
     */
    static setDefaultUseCachesSync(var0: string | null, var1: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setDefaultUseCaches(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setDefaultUseCachesSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    static setDefaultRequestProperty(var0: string | null, var1: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    static setDefaultRequestPropertySync(var0: string | null, var1: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static getDefaultRequestProperty(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static getDefaultRequestPropertySync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'java.net.ContentHandlerFactory'
     * @return original return type: 'void'
     */
    static setContentHandlerFactory(var0: java_net_ContentHandlerFactory | JavaInterfaceProxy<java_net_ContentHandlerFactoryInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.net.ContentHandlerFactory'
     * @return original return type: 'void'
     */
    static setContentHandlerFactorySync(var0: java_net_ContentHandlerFactory | JavaInterfaceProxy<java_net_ContentHandlerFactoryInterface> | null): void;
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
declare const URLConnection_base: typeof URLConnectionClass;
/**
 * Class java.net.URLConnection.
 *
 * This actually imports the java class for further use.
 * The class {@link URLConnectionClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class URLConnection extends URLConnection_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default URLConnection;
//# sourceMappingURL=URLConnection.d.ts.map