import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Association as org_dcm4che3_net_Association } from "./../Association";
/**
 * This class just defines types, you should import {@link RetrieveTask} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class RetrieveTaskClass extends JavaClass {
    /**
     * @return original return type: 'void'
     */
    run(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    runSync(): void;
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
 * you should use {@link createRetrieveTaskProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface RetrieveTaskInterface {
    /**
     * @return original return type: 'void'
     */
    run(): void;
    /**
     * @param var0 original type: 'org.dcm4che3.net.Association'
     * @return original return type: 'void'
     */
    onCancelRQ(var0: org_dcm4che3_net_Association | null): void;
}
/**
 * Create a proxy for the {@link RetrieveTask} interface.
 * All required methods in {@link RetrieveTaskInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createRetrieveTaskProxy(methods: RetrieveTaskInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<RetrieveTaskInterface>;
declare const RetrieveTask_base: typeof RetrieveTaskClass;
/**
 * Class org.dcm4che3.net.service.RetrieveTask.
 *
 * This actually imports the java class for further use.
 * The class {@link RetrieveTaskClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class RetrieveTask extends RetrieveTask_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default RetrieveTask;
