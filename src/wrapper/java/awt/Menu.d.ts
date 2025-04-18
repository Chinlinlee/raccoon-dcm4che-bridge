import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { EventListener as java_util_EventListener } from "./../util/EventListener";
import { Class as java_lang_Class } from "./../lang/Class";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { MenuItem as java_awt_MenuItem } from "./MenuItem";
import { MenuShortcut as java_awt_MenuShortcut } from "./MenuShortcut";
import { MenuComponent as java_awt_MenuComponent } from "./MenuComponent";
import { ActionListener as java_awt_event_ActionListener, ActionListenerInterface as java_awt_event_ActionListenerInterface } from "./event/ActionListener";
import { Boolean as java_lang_Boolean } from "./../lang/Boolean";
import { Font as java_awt_Font } from "./Font";
import { MenuContainer as java_awt_MenuContainer } from "./MenuContainer";
import { AWTEvent as java_awt_AWTEvent } from "./AWTEvent";
import { AccessibleContext as javax_accessibility_AccessibleContext } from "./../../javax/accessibility/AccessibleContext";
import { Event as java_awt_Event } from "./Event";
/**
 * This class just defines types, you should import {@link Menu} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class MenuClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.util.EventListener[]'
     */
    getListeners(var0: java_lang_Class | null): Promise<(java_util_EventListener | null)[] | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.util.EventListener[]'
     */
    getListenersSync(var0: java_lang_Class | null): (java_util_EventListener | null)[] | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setName(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setNameSync(var0: string | null): void;
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
    getLabel(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getLabelSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getNameSync(): string | null;
    /**
     * @return original return type: 'int'
     */
    getItemCount(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getItemCountSync(): number;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    insert(var0: string | null, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    insertSync(var0: string | null, var1: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.awt.MenuItem'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    insert(var0: java_awt_MenuItem | null, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.MenuItem'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    insertSync(var0: java_awt_MenuItem | null, var1: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.awt.MenuItem'
     */
    getItem(var0: java_lang_Integer | number): Promise<java_awt_MenuItem | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.awt.MenuItem'
     */
    getItemSync(var0: java_lang_Integer | number): java_awt_MenuItem | null;
    /**
     * @return original return type: 'boolean'
     */
    isTearOff(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isTearOffSync(): boolean;
    /**
     * @return original return type: 'java.awt.MenuShortcut'
     */
    getShortcut(): Promise<java_awt_MenuShortcut | null>;
    /**
     * @return original return type: 'java.awt.MenuShortcut'
     */
    getShortcutSync(): java_awt_MenuShortcut | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    remove(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    removeSync(var0: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.awt.MenuComponent'
     * @return original return type: 'void'
     */
    remove(var0: java_awt_MenuComponent | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.MenuComponent'
     * @return original return type: 'void'
     */
    removeSync(var0: java_awt_MenuComponent | null): void;
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
     * @return original return type: 'void'
     */
    removeAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    removeAllSync(): void;
    /**
     * @return original return type: 'void'
     */
    addSeparator(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    addSeparatorSync(): void;
    /**
     * @param var0 original type: 'java.awt.event.ActionListener'
     * @return original return type: 'void'
     */
    removeActionListener(var0: java_awt_event_ActionListener | JavaInterfaceProxy<java_awt_event_ActionListenerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.event.ActionListener'
     * @return original return type: 'void'
     */
    removeActionListenerSync(var0: java_awt_event_ActionListener | JavaInterfaceProxy<java_awt_event_ActionListenerInterface> | null): void;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    enable(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    enableSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'void'
     */
    enable(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    enableSync(): void;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @param var0 original type: 'java.awt.Font'
     * @return original return type: 'void'
     */
    setFont(var0: java_awt_Font | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.Font'
     * @return original return type: 'void'
     */
    setFontSync(var0: java_awt_Font | null): void;
    /**
     * @param var0 original type: 'java.awt.MenuItem'
     * @return original return type: 'java.awt.MenuItem'
     */
    add(var0: java_awt_MenuItem | null): Promise<java_awt_MenuItem | null>;
    /**
     * @param var0 original type: 'java.awt.MenuItem'
     * @return original return type: 'java.awt.MenuItem'
     */
    addSync(var0: java_awt_MenuItem | null): java_awt_MenuItem | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    add(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    addSync(var0: string | null): void;
    /**
     * @param var0 original type: 'java.awt.MenuShortcut'
     * @return original return type: 'void'
     */
    setShortcut(var0: java_awt_MenuShortcut | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.MenuShortcut'
     * @return original return type: 'void'
     */
    setShortcutSync(var0: java_awt_MenuShortcut | null): void;
    /**
     * @return original return type: 'java.awt.MenuContainer'
     */
    getParent(): Promise<java_awt_MenuContainer | null>;
    /**
     * @return original return type: 'java.awt.MenuContainer'
     */
    getParentSync(): java_awt_MenuContainer | null;
    /**
     * @param var0 original type: 'java.awt.AWTEvent'
     * @return original return type: 'void'
     */
    dispatchEvent(var0: java_awt_AWTEvent | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.AWTEvent'
     * @return original return type: 'void'
     */
    dispatchEventSync(var0: java_awt_AWTEvent | null): void;
    /**
     * @return original return type: 'void'
     */
    deleteShortcut(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    deleteShortcutSync(): void;
    /**
     * @return original return type: 'int'
     */
    countItems(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    countItemsSync(): number;
    /**
     * @param var0 original type: 'java.awt.event.ActionListener'
     * @return original return type: 'void'
     */
    addActionListener(var0: java_awt_event_ActionListener | JavaInterfaceProxy<java_awt_event_ActionListenerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.event.ActionListener'
     * @return original return type: 'void'
     */
    addActionListenerSync(var0: java_awt_event_ActionListener | JavaInterfaceProxy<java_awt_event_ActionListenerInterface> | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setActionCommand(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setActionCommandSync(var0: string | null): void;
    /**
     * @return original return type: 'javax.accessibility.AccessibleContext'
     */
    getAccessibleContext(): Promise<javax_accessibility_AccessibleContext | null>;
    /**
     * @return original return type: 'javax.accessibility.AccessibleContext'
     */
    getAccessibleContextSync(): javax_accessibility_AccessibleContext | null;
    /**
     * @param var0 original type: 'java.awt.Event'
     * @return original return type: 'boolean'
     */
    postEvent(var0: java_awt_Event | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.awt.Event'
     * @return original return type: 'boolean'
     */
    postEventSync(var0: java_awt_Event | null): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setEnabled(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setEnabledSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'void'
     */
    addNotify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    addNotifySync(): void;
    /**
     * @return original return type: 'void'
     */
    disable(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    disableSync(): void;
    /**
     * @return original return type: 'boolean'
     */
    isEnabled(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isEnabledSync(): boolean;
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
     * @return original return type: 'java.awt.event.ActionListener[]'
     */
    getActionListeners(): Promise<(java_awt_event_ActionListener | null)[] | null>;
    /**
     * @return original return type: 'java.awt.event.ActionListener[]'
     */
    getActionListenersSync(): (java_awt_event_ActionListener | null)[] | null;
    /**
     * @return original return type: 'void'
     */
    removeNotify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    removeNotifySync(): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setLabel(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setLabelSync(var0: string | null): void;
    /**
     * @return original return type: 'java.awt.Font'
     */
    getFont(): Promise<java_awt_Font | null>;
    /**
     * @return original return type: 'java.awt.Font'
     */
    getFontSync(): java_awt_Font | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    insertSeparator(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    insertSeparatorSync(var0: java_lang_Integer | number): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getActionCommand(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getActionCommandSync(): string | null;
    constructor();
    /**
     * @return original return type: 'java.awt.Menu'
     */
    static newInstanceAsync(): Promise<Menu>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     */
    constructor(var0: string | null, var1: java_lang_Boolean | boolean);
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @return original return type: 'java.awt.Menu'
     */
    static newInstanceAsync(var0: string | null, var1: java_lang_Boolean | boolean): Promise<Menu>;
    /**
     * @param var0 original type: 'java.lang.String'
     */
    constructor(var0: string | null);
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.awt.Menu'
     */
    static newInstanceAsync(var0: string | null): Promise<Menu>;
}
declare const Menu_base: typeof MenuClass;
/**
 * Class java.awt.Menu.
 *
 * This actually imports the java class for further use.
 * The class {@link MenuClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Menu extends Menu_base {
}
export default Menu;
