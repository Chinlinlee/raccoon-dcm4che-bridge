import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../lang/Class";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { Enumeration as java_util_Enumeration } from "./../util/Enumeration";
import { MenuComponent as java_awt_MenuComponent } from "./MenuComponent";
import { MenuItem as java_awt_MenuItem } from "./MenuItem";
import { MenuShortcut as java_awt_MenuShortcut } from "./MenuShortcut";
import { Menu as java_awt_Menu } from "./Menu";
import { Font as java_awt_Font } from "./Font";
import { MenuContainer as java_awt_MenuContainer } from "./MenuContainer";
import { AWTEvent as java_awt_AWTEvent } from "./AWTEvent";
import { AccessibleContext as javax_accessibility_AccessibleContext } from "./../../javax/accessibility/AccessibleContext";
import { Event as java_awt_Event } from "./Event";
/**
 * This class just defines types, you should import {@link MenuBar} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class MenuBarClass extends JavaClass {
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
     * @return original return type: 'java.util.Enumeration'
     */
    shortcuts(): Promise<java_util_Enumeration | null>;
    /**
     * @return original return type: 'java.util.Enumeration'
     */
    shortcutsSync(): java_util_Enumeration | null;
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
     * @param var0 original type: 'java.awt.MenuShortcut'
     * @return original return type: 'java.awt.MenuItem'
     */
    getShortcutMenuItem(var0: java_awt_MenuShortcut | null): Promise<java_awt_MenuItem | null>;
    /**
     * @param var0 original type: 'java.awt.MenuShortcut'
     * @return original return type: 'java.awt.MenuItem'
     */
    getShortcutMenuItemSync(var0: java_awt_MenuShortcut | null): java_awt_MenuItem | null;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.awt.Menu'
     */
    getMenu(var0: java_lang_Integer | number): Promise<java_awt_Menu | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.awt.Menu'
     */
    getMenuSync(var0: java_lang_Integer | number): java_awt_Menu | null;
    /**
     * @return original return type: 'int'
     */
    getMenuCount(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getMenuCountSync(): number;
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
     * @param var0 original type: 'java.awt.Menu'
     * @return original return type: 'java.awt.Menu'
     */
    add(var0: java_awt_Menu | null): Promise<java_awt_Menu | null>;
    /**
     * @param var0 original type: 'java.awt.Menu'
     * @return original return type: 'java.awt.Menu'
     */
    addSync(var0: java_awt_Menu | null): java_awt_Menu | null;
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
     * @param var0 original type: 'java.awt.MenuShortcut'
     * @return original return type: 'void'
     */
    deleteShortcut(var0: java_awt_MenuShortcut | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.MenuShortcut'
     * @return original return type: 'void'
     */
    deleteShortcutSync(var0: java_awt_MenuShortcut | null): void;
    /**
     * @return original return type: 'int'
     */
    countMenus(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    countMenusSync(): number;
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
     * @return original return type: 'java.awt.Menu'
     */
    getHelpMenu(): Promise<java_awt_Menu | null>;
    /**
     * @return original return type: 'java.awt.Menu'
     */
    getHelpMenuSync(): java_awt_Menu | null;
    /**
     * @return original return type: 'void'
     */
    addNotify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    addNotifySync(): void;
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
    removeNotify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    removeNotifySync(): void;
    /**
     * @return original return type: 'java.awt.Font'
     */
    getFont(): Promise<java_awt_Font | null>;
    /**
     * @return original return type: 'java.awt.Font'
     */
    getFontSync(): java_awt_Font | null;
    /**
     * @param var0 original type: 'java.awt.Menu'
     * @return original return type: 'void'
     */
    setHelpMenu(var0: java_awt_Menu | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.Menu'
     * @return original return type: 'void'
     */
    setHelpMenuSync(var0: java_awt_Menu | null): void;
    constructor();
    /**
     * @return original return type: 'java.awt.MenuBar'
     */
    static newInstanceAsync(): Promise<MenuBar>;
}
declare const MenuBar_base: typeof MenuBarClass;
/**
 * Class java.awt.MenuBar.
 *
 * This actually imports the java class for further use.
 * The class {@link MenuBarClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class MenuBar extends MenuBar_base {
}
export default MenuBar;
