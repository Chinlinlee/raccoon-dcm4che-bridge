import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../lang/Class";
import { Point as java_awt_Point } from "./../Point";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { DragSourceContext as java_awt_dnd_DragSourceContext } from "./DragSourceContext";
/**
 * This class just defines types, you should import {@link DragSourceEvent} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DragSourceEventClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
    /**
     * @return original return type: 'int'
     */
    getX(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getXSync(): number;
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
     * @return original return type: 'int'
     */
    getY(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getYSync(): number;
    /**
     * @return original return type: 'java.awt.dnd.DragSourceContext'
     */
    getDragSourceContext(): Promise<java_awt_dnd_DragSourceContext | null>;
    /**
     * @return original return type: 'java.awt.dnd.DragSourceContext'
     */
    getDragSourceContextSync(): java_awt_dnd_DragSourceContext | null;
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
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @param var0 original type: 'java.awt.dnd.DragSourceContext'
     */
    constructor(var0: java_awt_dnd_DragSourceContext | null);
    /**
     * @param var0 original type: 'java.awt.dnd.DragSourceContext'
     * @return original return type: 'java.awt.dnd.DragSourceEvent'
     */
    static newInstanceAsync(var0: java_awt_dnd_DragSourceContext | null): Promise<DragSourceEvent>;
    /**
     * @param var0 original type: 'java.awt.dnd.DragSourceContext'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     */
    constructor(var0: java_awt_dnd_DragSourceContext | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number);
    /**
     * @param var0 original type: 'java.awt.dnd.DragSourceContext'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.awt.dnd.DragSourceEvent'
     */
    static newInstanceAsync(var0: java_awt_dnd_DragSourceContext | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<DragSourceEvent>;
}
declare const DragSourceEvent_base: typeof DragSourceEventClass;
/**
 * Class java.awt.dnd.DragSourceEvent.
 *
 * This actually imports the java class for further use.
 * The class {@link DragSourceEventClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DragSourceEvent extends DragSourceEvent_base {
}
export default DragSourceEvent;
