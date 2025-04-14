import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Connection as org_dcm4che3_net_Connection } from "./Connection";
import { Socket as java_net_Socket } from "./../../../java/net/Socket";
/**
 * This class just defines types, you should import {@link TCPProtocolHandler} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class TCPProtocolHandlerClass extends JavaClass {
    /**
     * @param var0 original type: 'org.dcm4che3.net.Connection'
     * @param var1 original type: 'java.net.Socket'
     * @return original return type: 'void'
     */
    onAccept(var0: org_dcm4che3_net_Connection | null, var1: java_net_Socket | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.net.Connection'
     * @param var1 original type: 'java.net.Socket'
     * @return original return type: 'void'
     */
    onAcceptSync(var0: org_dcm4che3_net_Connection | null, var1: java_net_Socket | null): void;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createTCPProtocolHandlerProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface TCPProtocolHandlerInterface {
    /**
     * @param var0 original type: 'org.dcm4che3.net.Connection'
     * @param var1 original type: 'java.net.Socket'
     * @return original return type: 'void'
     */
    onAccept(var0: org_dcm4che3_net_Connection | null, var1: java_net_Socket | null): void;
}
/**
 * Create a proxy for the {@link TCPProtocolHandler} interface.
 * All required methods in {@link TCPProtocolHandlerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createTCPProtocolHandlerProxy(methods: TCPProtocolHandlerInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<TCPProtocolHandlerInterface>;
declare const TCPProtocolHandler_base: typeof TCPProtocolHandlerClass;
/**
 * Class org.dcm4che3.net.TCPProtocolHandler.
 *
 * This actually imports the java class for further use.
 * The class {@link TCPProtocolHandlerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class TCPProtocolHandler extends TCPProtocolHandler_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default TCPProtocolHandler;
