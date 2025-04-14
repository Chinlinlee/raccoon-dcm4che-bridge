import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./../../lang/Class";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { Map as java_util_Map, MapInterface as java_util_MapInterface } from "./../../util/Map";
import { Boolean as java_lang_Boolean } from "./../../lang/Boolean";
/**
 * This class just defines types, you should import {@link InputMethodHighlight} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class InputMethodHighlightClass extends JavaClass {
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
     * @return original return type: 'int'
     */
    getState(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getStateSync(): number;
    /**
     * @return original return type: 'java.util.Map'
     */
    getStyle(): Promise<java_util_Map | null>;
    /**
     * @return original return type: 'java.util.Map'
     */
    getStyleSync(): java_util_Map | null;
    /**
     * @return original return type: 'int'
     */
    getVariation(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getVariationSync(): number;
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
    isSelected(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isSelectedSync(): boolean;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * Original type: 'java.awt.im.InputMethodHighlight'
     */
    static readonly UNSELECTED_CONVERTED_TEXT_HIGHLIGHT: InputMethodHighlightClass | null;
    /**
     * Original type: 'java.awt.im.InputMethodHighlight'
     */
    static readonly SELECTED_CONVERTED_TEXT_HIGHLIGHT: InputMethodHighlightClass | null;
    /**
     * Original type: 'int'
     */
    static readonly RAW_TEXT: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly CONVERTED_TEXT: java_lang_Integer | number;
    /**
     * Original type: 'java.awt.im.InputMethodHighlight'
     */
    static readonly UNSELECTED_RAW_TEXT_HIGHLIGHT: InputMethodHighlightClass | null;
    /**
     * Original type: 'java.awt.im.InputMethodHighlight'
     */
    static readonly SELECTED_RAW_TEXT_HIGHLIGHT: InputMethodHighlightClass | null;
    /**
     * @param var0 original type: 'boolean'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.util.Map'
     */
    constructor(var0: java_lang_Boolean | boolean, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null);
    /**
     * @param var0 original type: 'boolean'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.util.Map'
     * @return original return type: 'java.awt.im.InputMethodHighlight'
     */
    static newInstanceAsync(var0: java_lang_Boolean | boolean, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null): Promise<InputMethodHighlight>;
    /**
     * @param var0 original type: 'boolean'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     */
    constructor(var0: java_lang_Boolean | boolean, var1: java_lang_Integer | number, var2: java_lang_Integer | number);
    /**
     * @param var0 original type: 'boolean'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.awt.im.InputMethodHighlight'
     */
    static newInstanceAsync(var0: java_lang_Boolean | boolean, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<InputMethodHighlight>;
    /**
     * @param var0 original type: 'boolean'
     * @param var1 original type: 'int'
     */
    constructor(var0: java_lang_Boolean | boolean, var1: java_lang_Integer | number);
    /**
     * @param var0 original type: 'boolean'
     * @param var1 original type: 'int'
     * @return original return type: 'java.awt.im.InputMethodHighlight'
     */
    static newInstanceAsync(var0: java_lang_Boolean | boolean, var1: java_lang_Integer | number): Promise<InputMethodHighlight>;
}
declare const InputMethodHighlight_base: typeof InputMethodHighlightClass;
/**
 * Class java.awt.im.InputMethodHighlight.
 *
 * This actually imports the java class for further use.
 * The class {@link InputMethodHighlightClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class InputMethodHighlight extends InputMethodHighlight_base {
}
export default InputMethodHighlight;
