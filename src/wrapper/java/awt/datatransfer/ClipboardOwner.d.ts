import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Clipboard as java_awt_datatransfer_Clipboard } from "./Clipboard";
import { Transferable as java_awt_datatransfer_Transferable, TransferableInterface as java_awt_datatransfer_TransferableInterface } from "./Transferable";
/**
 * This class just defines types, you should import {@link ClipboardOwner} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ClipboardOwnerClass extends JavaClass {
    /**
     * @param var0 original type: 'java.awt.datatransfer.Clipboard'
     * @param var1 original type: 'java.awt.datatransfer.Transferable'
     * @return original return type: 'void'
     */
    lostOwnership(var0: java_awt_datatransfer_Clipboard | null, var1: java_awt_datatransfer_Transferable | JavaInterfaceProxy<java_awt_datatransfer_TransferableInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.datatransfer.Clipboard'
     * @param var1 original type: 'java.awt.datatransfer.Transferable'
     * @return original return type: 'void'
     */
    lostOwnershipSync(var0: java_awt_datatransfer_Clipboard | null, var1: java_awt_datatransfer_Transferable | JavaInterfaceProxy<java_awt_datatransfer_TransferableInterface> | null): void;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createClipboardOwnerProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface ClipboardOwnerInterface {
    /**
     * @param var0 original type: 'java.awt.datatransfer.Clipboard'
     * @param var1 original type: 'java.awt.datatransfer.Transferable'
     * @return original return type: 'void'
     */
    lostOwnership(var0: java_awt_datatransfer_Clipboard | null, var1: java_awt_datatransfer_Transferable | JavaInterfaceProxy<java_awt_datatransfer_TransferableInterface> | null): void;
}
/**
 * Create a proxy for the {@link ClipboardOwner} interface.
 * All required methods in {@link ClipboardOwnerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createClipboardOwnerProxy(methods: ClipboardOwnerInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<ClipboardOwnerInterface>;
declare const ClipboardOwner_base: typeof ClipboardOwnerClass;
/**
 * Class java.awt.datatransfer.ClipboardOwner.
 *
 * This actually imports the java class for further use.
 * The class {@link ClipboardOwnerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ClipboardOwner extends ClipboardOwner_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default ClipboardOwner;
