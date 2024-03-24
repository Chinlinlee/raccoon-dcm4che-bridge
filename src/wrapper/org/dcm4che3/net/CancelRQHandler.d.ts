import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Association as org_dcm4che3_net_Association } from "./Association";
/**
 * This class just defines types, you should import {@link CancelRQHandler} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class CancelRQHandlerClass extends JavaClass {
    /**
     * @param var0 original type: 'org.dcm4che3.net.Association'
     * @return original return type: 'void'
     */
    onCancelRQ(var0: org_dcm4che3_net_Association | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.net.Association'
     * @return original return type: 'void'
     */
    onCancelRQSync(var0: org_dcm4che3_net_Association | null): void;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createCancelRQHandlerProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface CancelRQHandlerInterface {
    /**
     * @param var0 original type: 'org.dcm4che3.net.Association'
     * @return original return type: 'void'
     */
    onCancelRQ(var0: org_dcm4che3_net_Association | null): void;
}
/**
 * Create a proxy for the {@link CancelRQHandler} interface.
 * All required methods in {@link CancelRQHandlerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createCancelRQHandlerProxy(methods: CancelRQHandlerInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<CancelRQHandlerInterface>;
declare const CancelRQHandler_base: typeof CancelRQHandlerClass;
/**
 * Class org.dcm4che3.net.CancelRQHandler.
 *
 * This actually imports the java class for further use.
 * The class {@link CancelRQHandlerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class CancelRQHandler extends CancelRQHandler_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default CancelRQHandler;
//# sourceMappingURL=CancelRQHandler.d.ts.map