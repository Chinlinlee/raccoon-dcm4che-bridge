import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../java/lang/Class";
import { Long as java_lang_Long } from "./../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../java/lang/Integer";
import { Locale as java_util_Locale } from "./../../java/util/Locale";
/**
 * This class just defines types, you should import {@link AccessibleRole} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AccessibleRoleClass extends JavaClass {
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
    toDisplayString(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toDisplayStringSync(): string | null;
    /**
     * @param var0 original type: 'java.util.Locale'
     * @return original return type: 'java.lang.String'
     */
    toDisplayString(var0: java_util_Locale | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.util.Locale'
     * @return original return type: 'java.lang.String'
     */
    toDisplayStringSync(var0: java_util_Locale | null): string | null;
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
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly DATE_EDITOR: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly PARAGRAPH: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly TEXT: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly ALERT: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly FONT_CHOOSER: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly GROUP_BOX: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly ROOT_PANE: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly TABLE: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly COMBO_BOX: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly SLIDER: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly PROGRESS_MONITOR: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly HYPERLINK: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly LABEL: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly PROGRESS_BAR: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly DESKTOP_ICON: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly SEPARATOR: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly MENU_ITEM: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly SCROLL_PANE: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly AWT_COMPONENT: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly MENU_BAR: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly PUSH_BUTTON: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly PAGE_TAB: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly CHECK_BOX: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly TREE: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly PASSWORD_TEXT: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly LIST: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly HTML_CONTAINER: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly OPTION_PANE: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly DESKTOP_PANE: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly HEADER: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly FRAME: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly TOOL_TIP: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly ROW_HEADER: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly SPIN_BOX: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly CANVAS: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly TOOL_BAR: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly INTERNAL_FRAME: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly LAYERED_PANE: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly PAGE_TAB_LIST: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly COLUMN_HEADER: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly ICON: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly COLOR_CHOOSER: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly VIEWPORT: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly PANEL: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly DIRECTORY_PANE: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly STATUS_BAR: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly DIALOG: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly SPLIT_PANE: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly GLASS_PANE: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly SWING_COMPONENT: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly FOOTER: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly EDITBAR: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly FILLER: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly WINDOW: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly FILE_CHOOSER: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly POPUP_MENU: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly SCROLL_BAR: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly LIST_ITEM: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly RADIO_BUTTON: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly MENU: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly UNKNOWN: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly RULER: AccessibleRoleClass | null;
    /**
     * Original type: 'javax.accessibility.AccessibleRole'
     */
    static readonly TOGGLE_BUTTON: AccessibleRoleClass | null;
}
declare const AccessibleRole_base: typeof AccessibleRoleClass;
/**
 * Class javax.accessibility.AccessibleRole.
 *
 * This actually imports the java class for further use.
 * The class {@link AccessibleRoleClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AccessibleRole extends AccessibleRole_base {
}
export default AccessibleRole;
//# sourceMappingURL=AccessibleRole.d.ts.map