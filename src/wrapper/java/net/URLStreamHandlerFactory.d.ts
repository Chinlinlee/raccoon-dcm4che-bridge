import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { URLStreamHandler as java_net_URLStreamHandler } from "./URLStreamHandler";
/**
 * This class just defines types, you should import {@link URLStreamHandlerFactory} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class URLStreamHandlerFactoryClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.net.URLStreamHandler'
     */
    createURLStreamHandler(var0: string | null): Promise<java_net_URLStreamHandler | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.net.URLStreamHandler'
     */
    createURLStreamHandlerSync(var0: string | null): java_net_URLStreamHandler | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createURLStreamHandlerFactoryProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface URLStreamHandlerFactoryInterface {
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.net.URLStreamHandler'
     */
    createURLStreamHandler(var0: string | null): java_net_URLStreamHandler | null;
}
/**
 * Create a proxy for the {@link URLStreamHandlerFactory} interface.
 * All required methods in {@link URLStreamHandlerFactoryInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createURLStreamHandlerFactoryProxy(methods: URLStreamHandlerFactoryInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<URLStreamHandlerFactoryInterface>;
declare const URLStreamHandlerFactory_base: typeof URLStreamHandlerFactoryClass;
/**
 * Class java.net.URLStreamHandlerFactory.
 *
 * This actually imports the java class for further use.
 * The class {@link URLStreamHandlerFactoryClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class URLStreamHandlerFactory extends URLStreamHandlerFactory_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default URLStreamHandlerFactory;
