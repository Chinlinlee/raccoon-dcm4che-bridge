import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./../../lang/Class";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { AttributedCharacterIterator as java_text_AttributedCharacterIterator, AttributedCharacterIteratorInterface as java_text_AttributedCharacterIteratorInterface } from "./../../text/AttributedCharacterIterator";
import { TextHitInfo as java_awt_font_TextHitInfo } from "./../font/TextHitInfo";
import { Component as java_awt_Component } from "./../Component";
/**
 * This class just defines types, you should import {@link InputMethodEvent} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class InputMethodEventClass extends JavaClass {
    /**
     * @return original return type: 'int'
     */
    getCommittedCharacterCount(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getCommittedCharacterCountSync(): number;
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
     * @return original return type: 'java.text.AttributedCharacterIterator'
     */
    getText(): Promise<java_text_AttributedCharacterIterator | null>;
    /**
     * @return original return type: 'java.text.AttributedCharacterIterator'
     */
    getTextSync(): java_text_AttributedCharacterIterator | null;
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
    consume(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    consumeSync(): void;
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
     * @return original return type: 'java.awt.font.TextHitInfo'
     */
    getVisiblePosition(): Promise<java_awt_font_TextHitInfo | null>;
    /**
     * @return original return type: 'java.awt.font.TextHitInfo'
     */
    getVisiblePositionSync(): java_awt_font_TextHitInfo | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    paramString(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    paramStringSync(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    isConsumed(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isConsumedSync(): boolean;
    /**
     * @return original return type: 'java.awt.font.TextHitInfo'
     */
    getCaret(): Promise<java_awt_font_TextHitInfo | null>;
    /**
     * @return original return type: 'java.awt.font.TextHitInfo'
     */
    getCaretSync(): java_awt_font_TextHitInfo | null;
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
     * @return original return type: 'long'
     */
    getWhen(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    getWhenSync(): number;
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
    static readonly CARET_POSITION_CHANGED: java_lang_Integer | number;
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
     * Original type: 'int'
     */
    static readonly INPUT_METHOD_TEXT_CHANGED: java_lang_Integer | number;
    /**
     * Original type: 'long'
     */
    static readonly FOCUS_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'int'
     */
    static readonly INPUT_METHOD_LAST: java_lang_Integer | number;
    /**
     * Original type: 'long'
     */
    static readonly TEXT_EVENT_MASK: java_lang_Long | bigint | number;
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
    static readonly ACTION_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly ITEM_EVENT_MASK: java_lang_Long | bigint | number;
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
    static readonly HIERARCHY_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly WINDOW_STATE_EVENT_MASK: java_lang_Long | bigint | number;
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
    static readonly INPUT_METHOD_FIRST: java_lang_Integer | number;
    /**
     * Original type: 'long'
     */
    static readonly WINDOW_FOCUS_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * @param var0 original type: 'java.awt.Component'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.text.AttributedCharacterIterator'
     * @param var3 original type: 'int'
     * @param var4 original type: 'java.awt.font.TextHitInfo'
     * @param var5 original type: 'java.awt.font.TextHitInfo'
     */
    constructor(var0: java_awt_Component | null, var1: java_lang_Integer | number, var2: java_text_AttributedCharacterIterator | JavaInterfaceProxy<java_text_AttributedCharacterIteratorInterface> | null, var3: java_lang_Integer | number, var4: java_awt_font_TextHitInfo | null, var5: java_awt_font_TextHitInfo | null);
    /**
     * @param var0 original type: 'java.awt.Component'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.text.AttributedCharacterIterator'
     * @param var3 original type: 'int'
     * @param var4 original type: 'java.awt.font.TextHitInfo'
     * @param var5 original type: 'java.awt.font.TextHitInfo'
     * @return original return type: 'java.awt.event.InputMethodEvent'
     */
    static newInstanceAsync(var0: java_awt_Component | null, var1: java_lang_Integer | number, var2: java_text_AttributedCharacterIterator | JavaInterfaceProxy<java_text_AttributedCharacterIteratorInterface> | null, var3: java_lang_Integer | number, var4: java_awt_font_TextHitInfo | null, var5: java_awt_font_TextHitInfo | null): Promise<InputMethodEvent>;
    /**
     * @param var0 original type: 'java.awt.Component'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.awt.font.TextHitInfo'
     * @param var3 original type: 'java.awt.font.TextHitInfo'
     */
    constructor(var0: java_awt_Component | null, var1: java_lang_Integer | number, var2: java_awt_font_TextHitInfo | null, var3: java_awt_font_TextHitInfo | null);
    /**
     * @param var0 original type: 'java.awt.Component'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.awt.font.TextHitInfo'
     * @param var3 original type: 'java.awt.font.TextHitInfo'
     * @return original return type: 'java.awt.event.InputMethodEvent'
     */
    static newInstanceAsync(var0: java_awt_Component | null, var1: java_lang_Integer | number, var2: java_awt_font_TextHitInfo | null, var3: java_awt_font_TextHitInfo | null): Promise<InputMethodEvent>;
    /**
     * @param var0 original type: 'java.awt.Component'
     * @param var1 original type: 'int'
     * @param var2 original type: 'long'
     * @param var3 original type: 'java.text.AttributedCharacterIterator'
     * @param var4 original type: 'int'
     * @param var5 original type: 'java.awt.font.TextHitInfo'
     * @param var6 original type: 'java.awt.font.TextHitInfo'
     */
    constructor(var0: java_awt_Component | null, var1: java_lang_Integer | number, var2: java_lang_Long | bigint | number, var3: java_text_AttributedCharacterIterator | JavaInterfaceProxy<java_text_AttributedCharacterIteratorInterface> | null, var4: java_lang_Integer | number, var5: java_awt_font_TextHitInfo | null, var6: java_awt_font_TextHitInfo | null);
    /**
     * @param var0 original type: 'java.awt.Component'
     * @param var1 original type: 'int'
     * @param var2 original type: 'long'
     * @param var3 original type: 'java.text.AttributedCharacterIterator'
     * @param var4 original type: 'int'
     * @param var5 original type: 'java.awt.font.TextHitInfo'
     * @param var6 original type: 'java.awt.font.TextHitInfo'
     * @return original return type: 'java.awt.event.InputMethodEvent'
     */
    static newInstanceAsync(var0: java_awt_Component | null, var1: java_lang_Integer | number, var2: java_lang_Long | bigint | number, var3: java_text_AttributedCharacterIterator | JavaInterfaceProxy<java_text_AttributedCharacterIteratorInterface> | null, var4: java_lang_Integer | number, var5: java_awt_font_TextHitInfo | null, var6: java_awt_font_TextHitInfo | null): Promise<InputMethodEvent>;
}
declare const InputMethodEvent_base: typeof InputMethodEventClass;
/**
 * Class java.awt.event.InputMethodEvent.
 *
 * This actually imports the java class for further use.
 * The class {@link InputMethodEventClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class InputMethodEvent extends InputMethodEvent_base {
}
export default InputMethodEvent;
