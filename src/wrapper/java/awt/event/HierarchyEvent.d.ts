import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../lang/Class";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { Container as java_awt_Container } from "./../Container";
import { Component as java_awt_Component } from "./../Component";
/**
 * This class just defines types, you should import {@link HierarchyEvent} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class HierarchyEventClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    setSource(var0: BasicOrJavaType | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    setSourceSync(var0: BasicOrJavaType | null): void;
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
     * @return original return type: 'java.awt.Container'
     */
    getChangedParent(): Promise<java_awt_Container | null>;
    /**
     * @return original return type: 'java.awt.Container'
     */
    getChangedParentSync(): java_awt_Container | null;
    /**
     * @return original return type: 'java.awt.Component'
     */
    getChanged(): Promise<java_awt_Component | null>;
    /**
     * @return original return type: 'java.awt.Component'
     */
    getChangedSync(): java_awt_Component | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'int'
     */
    getID(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getIDSync(): number;
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
    paramString(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    paramStringSync(): string | null;
    /**
     * @return original return type: 'long'
     */
    getChangeFlags(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    getChangeFlagsSync(): number;
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
     * @return original return type: 'java.awt.Component'
     */
    getComponent(): Promise<java_awt_Component | null>;
    /**
     * @return original return type: 'java.awt.Component'
     */
    getComponentSync(): java_awt_Component | null;
    /**
     * Original type: 'long'
     */
    static readonly ADJUSTMENT_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly MOUSE_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'int'
     */
    static readonly HIERARCHY_FIRST: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly HIERARCHY_CHANGED: java_lang_Integer | number;
    /**
     * Original type: 'long'
     */
    static readonly COMPONENT_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly PAINT_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly INPUT_METHOD_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly HIERARCHY_BOUNDS_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly FOCUS_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly INVOCATION_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly KEY_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'int'
     */
    static readonly RESERVED_ID_MAX: java_lang_Integer | number;
    /**
     * Original type: 'long'
     */
    static readonly CONTAINER_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly WINDOW_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly MOUSE_WHEEL_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly MOUSE_MOTION_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'int'
     */
    static readonly ANCESTOR_RESIZED: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly HIERARCHY_LAST: java_lang_Integer | number;
    /**
     * Original type: 'long'
     */
    static readonly WINDOW_FOCUS_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'int'
     */
    static readonly PARENT_CHANGED: java_lang_Integer | number;
    /**
     * Original type: 'long'
     */
    static readonly TEXT_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'int'
     */
    static readonly SHOWING_CHANGED: java_lang_Integer | number;
    /**
     * Original type: 'long'
     */
    static readonly ACTION_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly ITEM_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly HIERARCHY_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'int'
     */
    static readonly ANCESTOR_MOVED: java_lang_Integer | number;
    /**
     * Original type: 'long'
     */
    static readonly WINDOW_STATE_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'int'
     */
    static readonly DISPLAYABILITY_CHANGED: java_lang_Integer | number;
    /**
     * @param var0 original type: 'java.awt.Component'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.awt.Component'
     * @param var3 original type: 'java.awt.Container'
     */
    constructor(var0: java_awt_Component | null, var1: java_lang_Integer | number, var2: java_awt_Component | null, var3: java_awt_Container | null);
    /**
     * @param var0 original type: 'java.awt.Component'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.awt.Component'
     * @param var3 original type: 'java.awt.Container'
     * @return original return type: 'java.awt.event.HierarchyEvent'
     */
    static newInstanceAsync(var0: java_awt_Component | null, var1: java_lang_Integer | number, var2: java_awt_Component | null, var3: java_awt_Container | null): Promise<HierarchyEvent>;
    /**
     * @param var0 original type: 'java.awt.Component'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.awt.Component'
     * @param var3 original type: 'java.awt.Container'
     * @param var4 original type: 'long'
     */
    constructor(var0: java_awt_Component | null, var1: java_lang_Integer | number, var2: java_awt_Component | null, var3: java_awt_Container | null, var4: java_lang_Long | bigint | number);
    /**
     * @param var0 original type: 'java.awt.Component'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.awt.Component'
     * @param var3 original type: 'java.awt.Container'
     * @param var4 original type: 'long'
     * @return original return type: 'java.awt.event.HierarchyEvent'
     */
    static newInstanceAsync(var0: java_awt_Component | null, var1: java_lang_Integer | number, var2: java_awt_Component | null, var3: java_awt_Container | null, var4: java_lang_Long | bigint | number): Promise<HierarchyEvent>;
}
declare const HierarchyEvent_base: typeof HierarchyEventClass;
/**
 * Class java.awt.event.HierarchyEvent.
 *
 * This actually imports the java class for further use.
 * The class {@link HierarchyEventClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class HierarchyEvent extends HierarchyEvent_base {
}
export default HierarchyEvent;
//# sourceMappingURL=HierarchyEvent.d.ts.map