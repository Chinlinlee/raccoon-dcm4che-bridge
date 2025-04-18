import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../lang/Class";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
/**
 * This class just defines types, you should import {@link Event} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class EventClass extends JavaClass {
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
     * @return original return type: 'boolean'
     */
    shiftDown(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    shiftDownSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    controlDown(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    controlDownSync(): boolean;
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
     * @return original return type: 'boolean'
     */
    metaDown(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    metaDownSync(): boolean;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    translate(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    translateSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): void;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * Original type: 'int'
     */
    static readonly DOWN: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly PRINT_SCREEN: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly BACK_SPACE: java_lang_Integer | number;
    /**
     * Original type: 'long'
     */
    when: java_lang_Long | bigint | number;
    /**
     * Original type: 'int'
     */
    static readonly MOUSE_UP: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SCROLL_ABSOLUTE: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly KEY_RELEASE: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly MOUSE_DRAG: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly UP: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SCROLL_PAGE_UP: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    id: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly LIST_DESELECT: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly LOAD_FILE: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly MOUSE_EXIT: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly LEFT: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly F1: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly MOUSE_DOWN: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly F2: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly F3: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly F4: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly F5: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly F6: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SAVE_FILE: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly F7: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly F8: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly F9: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly NUM_LOCK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly MOUSE_ENTER: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SCROLL_END: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly END: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly INSERT: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly WINDOW_DEICONIFY: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly GOT_FOCUS: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly WINDOW_DESTROY: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SCROLL_BEGIN: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly CAPS_LOCK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SCROLL_LINE_DOWN: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly WINDOW_EXPOSE: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    clickCount: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SHIFT_MASK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly KEY_ACTION: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly ENTER: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly LOST_FOCUS: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    modifiers: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly PAUSE: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly KEY_PRESS: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly DELETE: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly LIST_SELECT: java_lang_Integer | number;
    /**
     * Original type: 'java.lang.Object'
     */
    arg: BasicOrJavaType | null;
    /**
     * Original type: 'int'
     */
    static readonly CTRL_MASK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly ALT_MASK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly RIGHT: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly WINDOW_MOVED: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    key: java_lang_Integer | number;
    /**
     * Original type: 'java.awt.Event'
     */
    evt: EventClass | null;
    /**
     * Original type: 'int'
     */
    static readonly PGDN: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly F10: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly WINDOW_ICONIFY: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly F12: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SCROLL_LINE_UP: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly F11: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly ESCAPE: java_lang_Integer | number;
    /**
     * Original type: 'java.lang.Object'
     */
    target: BasicOrJavaType | null;
    /**
     * Original type: 'int'
     */
    static readonly MOUSE_MOVE: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SCROLL_LOCK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TAB: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly PGUP: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SCROLL_PAGE_DOWN: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly ACTION_EVENT: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    x: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    y: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly KEY_ACTION_RELEASE: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly META_MASK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly HOME: java_lang_Integer | number;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'long'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'int'
     * @param var6 original type: 'int'
     * @param var7 original type: 'java.lang.Object'
     */
    constructor(var0: BasicOrJavaType | null, var1: java_lang_Long | bigint | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: java_lang_Integer | number, var6: java_lang_Integer | number, var7: BasicOrJavaType | null);
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'long'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'int'
     * @param var6 original type: 'int'
     * @param var7 original type: 'java.lang.Object'
     * @return original return type: 'java.awt.Event'
     */
    static newInstanceAsync(var0: BasicOrJavaType | null, var1: java_lang_Long | bigint | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: java_lang_Integer | number, var6: java_lang_Integer | number, var7: BasicOrJavaType | null): Promise<Event>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'long'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'int'
     * @param var6 original type: 'int'
     */
    constructor(var0: BasicOrJavaType | null, var1: java_lang_Long | bigint | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: java_lang_Integer | number, var6: java_lang_Integer | number);
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'long'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'int'
     * @param var6 original type: 'int'
     * @return original return type: 'java.awt.Event'
     */
    static newInstanceAsync(var0: BasicOrJavaType | null, var1: java_lang_Long | bigint | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: java_lang_Integer | number, var6: java_lang_Integer | number): Promise<Event>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.lang.Object'
     */
    constructor(var0: BasicOrJavaType | null, var1: java_lang_Integer | number, var2: BasicOrJavaType | null);
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.lang.Object'
     * @return original return type: 'java.awt.Event'
     */
    static newInstanceAsync(var0: BasicOrJavaType | null, var1: java_lang_Integer | number, var2: BasicOrJavaType | null): Promise<Event>;
}
declare const Event_base: typeof EventClass;
/**
 * Class java.awt.Event.
 *
 * This actually imports the java class for further use.
 * The class {@link EventClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Event extends Event_base {
}
export default Event;
