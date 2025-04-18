import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./../../lang/Class";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { DataFlavor as java_awt_datatransfer_DataFlavor } from "./DataFlavor";
import { FlavorListener as java_awt_datatransfer_FlavorListener, FlavorListenerInterface as java_awt_datatransfer_FlavorListenerInterface } from "./FlavorListener";
import { Transferable as java_awt_datatransfer_Transferable, TransferableInterface as java_awt_datatransfer_TransferableInterface } from "./Transferable";
import { ClipboardOwner as java_awt_datatransfer_ClipboardOwner, ClipboardOwnerInterface as java_awt_datatransfer_ClipboardOwnerInterface } from "./ClipboardOwner";
/**
 * This class just defines types, you should import {@link Clipboard} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ClipboardClass extends JavaClass {
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
     * @return original return type: 'java.lang.String'
     */
    getName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getNameSync(): string | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'java.awt.datatransfer.DataFlavor'
     * @return original return type: 'boolean'
     */
    isDataFlavorAvailable(var0: java_awt_datatransfer_DataFlavor | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.awt.datatransfer.DataFlavor'
     * @return original return type: 'boolean'
     */
    isDataFlavorAvailableSync(var0: java_awt_datatransfer_DataFlavor | null): boolean;
    /**
     * @param var0 original type: 'java.awt.datatransfer.FlavorListener'
     * @return original return type: 'void'
     */
    addFlavorListener(var0: java_awt_datatransfer_FlavorListener | JavaInterfaceProxy<java_awt_datatransfer_FlavorListenerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.datatransfer.FlavorListener'
     * @return original return type: 'void'
     */
    addFlavorListenerSync(var0: java_awt_datatransfer_FlavorListener | JavaInterfaceProxy<java_awt_datatransfer_FlavorListenerInterface> | null): void;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
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
     * @return original return type: 'java.awt.datatransfer.DataFlavor[]'
     */
    getAvailableDataFlavors(): Promise<(java_awt_datatransfer_DataFlavor | null)[] | null>;
    /**
     * @return original return type: 'java.awt.datatransfer.DataFlavor[]'
     */
    getAvailableDataFlavorsSync(): (java_awt_datatransfer_DataFlavor | null)[] | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'java.awt.datatransfer.Transferable'
     */
    getContents(var0: BasicOrJavaType | null): Promise<java_awt_datatransfer_Transferable | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'java.awt.datatransfer.Transferable'
     */
    getContentsSync(var0: BasicOrJavaType | null): java_awt_datatransfer_Transferable | null;
    /**
     * @return original return type: 'java.awt.datatransfer.FlavorListener[]'
     */
    getFlavorListeners(): Promise<(java_awt_datatransfer_FlavorListener | null)[] | null>;
    /**
     * @return original return type: 'java.awt.datatransfer.FlavorListener[]'
     */
    getFlavorListenersSync(): (java_awt_datatransfer_FlavorListener | null)[] | null;
    /**
     * @param var0 original type: 'java.awt.datatransfer.FlavorListener'
     * @return original return type: 'void'
     */
    removeFlavorListener(var0: java_awt_datatransfer_FlavorListener | JavaInterfaceProxy<java_awt_datatransfer_FlavorListenerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.datatransfer.FlavorListener'
     * @return original return type: 'void'
     */
    removeFlavorListenerSync(var0: java_awt_datatransfer_FlavorListener | JavaInterfaceProxy<java_awt_datatransfer_FlavorListenerInterface> | null): void;
    /**
     * @param var0 original type: 'java.awt.datatransfer.Transferable'
     * @param var1 original type: 'java.awt.datatransfer.ClipboardOwner'
     * @return original return type: 'void'
     */
    setContents(var0: java_awt_datatransfer_Transferable | JavaInterfaceProxy<java_awt_datatransfer_TransferableInterface> | null, var1: java_awt_datatransfer_ClipboardOwner | JavaInterfaceProxy<java_awt_datatransfer_ClipboardOwnerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.datatransfer.Transferable'
     * @param var1 original type: 'java.awt.datatransfer.ClipboardOwner'
     * @return original return type: 'void'
     */
    setContentsSync(var0: java_awt_datatransfer_Transferable | JavaInterfaceProxy<java_awt_datatransfer_TransferableInterface> | null, var1: java_awt_datatransfer_ClipboardOwner | JavaInterfaceProxy<java_awt_datatransfer_ClipboardOwnerInterface> | null): void;
    /**
     * @param var0 original type: 'java.awt.datatransfer.DataFlavor'
     * @return original return type: 'java.lang.Object'
     */
    getData(var0: java_awt_datatransfer_DataFlavor | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.awt.datatransfer.DataFlavor'
     * @return original return type: 'java.lang.Object'
     */
    getDataSync(var0: java_awt_datatransfer_DataFlavor | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     */
    constructor(var0: string | null);
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.awt.datatransfer.Clipboard'
     */
    static newInstanceAsync(var0: string | null): Promise<Clipboard>;
}
declare const Clipboard_base: typeof ClipboardClass;
/**
 * Class java.awt.datatransfer.Clipboard.
 *
 * This actually imports the java class for further use.
 * The class {@link ClipboardClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Clipboard extends Clipboard_base {
}
export default Clipboard;
