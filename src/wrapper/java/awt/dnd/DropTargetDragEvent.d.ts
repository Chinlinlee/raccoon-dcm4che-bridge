import { JavaClass, BasicOrJavaType } from "java-bridge";
import { DropTargetContext as java_awt_dnd_DropTargetContext } from "./DropTargetContext";
import { Class as java_lang_Class } from "./../../lang/Class";
import { Point as java_awt_Point } from "./../Point";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { Transferable as java_awt_datatransfer_Transferable } from "./../datatransfer/Transferable";
import { List as java_util_List } from "./../../util/List";
import { DataFlavor as java_awt_datatransfer_DataFlavor } from "./../datatransfer/DataFlavor";
/**
 * This class just defines types, you should import {@link DropTargetDragEvent} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DropTargetDragEventClass extends JavaClass {
    /**
     * @return original return type: 'int'
     */
    getDropAction(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getDropActionSync(): number;
    /**
     * @return original return type: 'java.awt.dnd.DropTargetContext'
     */
    getDropTargetContext(): Promise<java_awt_dnd_DropTargetContext | null>;
    /**
     * @return original return type: 'java.awt.dnd.DropTargetContext'
     */
    getDropTargetContextSync(): java_awt_dnd_DropTargetContext | null;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
    /**
     * @return original return type: 'java.awt.Point'
     */
    getLocation(): Promise<java_awt_Point | null>;
    /**
     * @return original return type: 'java.awt.Point'
     */
    getLocationSync(): java_awt_Point | null;
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
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    acceptDrag(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    acceptDragSync(var0: java_lang_Integer | number): void;
    /**
     * @return original return type: 'void'
     */
    rejectDrag(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    rejectDragSync(): void;
    /**
     * @return original return type: 'int'
     */
    getSourceActions(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getSourceActionsSync(): number;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'java.awt.datatransfer.Transferable'
     */
    getTransferable(): Promise<java_awt_datatransfer_Transferable | null>;
    /**
     * @return original return type: 'java.awt.datatransfer.Transferable'
     */
    getTransferableSync(): java_awt_datatransfer_Transferable | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getCurrentDataFlavorsAsList(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getCurrentDataFlavorsAsListSync(): java_util_List | null;
    /**
     * @param var0 original type: 'java.awt.datatransfer.DataFlavor'
     * @return original return type: 'boolean'
     */
    isDataFlavorSupported(var0: java_awt_datatransfer_DataFlavor | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.awt.datatransfer.DataFlavor'
     * @return original return type: 'boolean'
     */
    isDataFlavorSupportedSync(var0: java_awt_datatransfer_DataFlavor | null): boolean;
    /**
     * @return original return type: 'java.lang.Object'
     */
    getSource(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    getSourceSync(): BasicOrJavaType | null;
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
    getCurrentDataFlavors(): Promise<(java_awt_datatransfer_DataFlavor | null)[] | null>;
    /**
     * @return original return type: 'java.awt.datatransfer.DataFlavor[]'
     */
    getCurrentDataFlavorsSync(): (java_awt_datatransfer_DataFlavor | null)[] | null;
    /**
     * @param var0 original type: 'java.awt.dnd.DropTargetContext'
     * @param var1 original type: 'java.awt.Point'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     */
    constructor(var0: java_awt_dnd_DropTargetContext | null, var1: java_awt_Point | null, var2: java_lang_Integer | number, var3: java_lang_Integer | number);
    /**
     * @param var0 original type: 'java.awt.dnd.DropTargetContext'
     * @param var1 original type: 'java.awt.Point'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'java.awt.dnd.DropTargetDragEvent'
     */
    static newInstanceAsync(var0: java_awt_dnd_DropTargetContext | null, var1: java_awt_Point | null, var2: java_lang_Integer | number, var3: java_lang_Integer | number): Promise<DropTargetDragEvent>;
}
declare const DropTargetDragEvent_base: typeof DropTargetDragEventClass;
/**
 * Class java.awt.dnd.DropTargetDragEvent.
 *
 * This actually imports the java class for further use.
 * The class {@link DropTargetDragEventClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DropTargetDragEvent extends DropTargetDragEvent_base {
}
export default DropTargetDragEvent;
