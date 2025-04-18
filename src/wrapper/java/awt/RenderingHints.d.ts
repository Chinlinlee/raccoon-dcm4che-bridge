import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./../lang/Class";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { Collection as java_util_Collection } from "./../util/Collection";
import { Function as java_util_function_Function, FunctionInterface as java_util_function_FunctionInterface } from "./../util/function/Function";
import { BiFunction as java_util_function_BiFunction, BiFunctionInterface as java_util_function_BiFunctionInterface } from "./../util/function/BiFunction";
import { Map as java_util_Map, MapInterface as java_util_MapInterface } from "./../util/Map";
import { Set as java_util_Set } from "./../util/Set";
import { BiConsumer as java_util_function_BiConsumer, BiConsumerInterface as java_util_function_BiConsumerInterface } from "./../util/function/BiConsumer";
import { RenderingHints$Key as java_awt_RenderingHints$Key } from "./RenderingHints$Key";
/**
 * This class just defines types, you should import {@link RenderingHints} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class RenderingHintsClass extends JavaClass {
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
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    getOrDefault(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    getOrDefaultSync(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): BasicOrJavaType | null;
    /**
     * @return original return type: 'java.util.Collection'
     */
    values(): Promise<java_util_Collection | null>;
    /**
     * @return original return type: 'java.util.Collection'
     */
    valuesSync(): java_util_Collection | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.function.Function'
     * @return original return type: 'java.lang.Object'
     */
    computeIfAbsent(var0: BasicOrJavaType | null, var1: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.function.Function'
     * @return original return type: 'java.lang.Object'
     */
    computeIfAbsentSync(var0: BasicOrJavaType | null, var1: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    replace(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    replaceSync(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    replace(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null, var2: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    replaceSync(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null, var2: BasicOrJavaType | null): boolean;
    /**
     * @param var0 original type: 'java.util.function.BiFunction'
     * @return original return type: 'void'
     */
    replaceAll(var0: java_util_function_BiFunction | JavaInterfaceProxy<java_util_function_BiFunctionInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.function.BiFunction'
     * @return original return type: 'void'
     */
    replaceAllSync(var0: java_util_function_BiFunction | JavaInterfaceProxy<java_util_function_BiFunctionInterface> | null): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    remove(var0: BasicOrJavaType | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    removeSync(var0: BasicOrJavaType | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    remove(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    removeSync(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): boolean;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    put(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    putSync(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    containsValue(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    containsValueSync(var0: BasicOrJavaType | null): boolean;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.function.BiFunction'
     * @return original return type: 'java.lang.Object'
     */
    compute(var0: BasicOrJavaType | null, var1: java_util_function_BiFunction | JavaInterfaceProxy<java_util_function_BiFunctionInterface> | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.function.BiFunction'
     * @return original return type: 'java.lang.Object'
     */
    computeSync(var0: BasicOrJavaType | null, var1: java_util_function_BiFunction | JavaInterfaceProxy<java_util_function_BiFunctionInterface> | null): BasicOrJavaType | null;
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
     * @return original return type: 'java.lang.Object'
     */
    get(var0: BasicOrJavaType | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    getSync(var0: BasicOrJavaType | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.util.Map'
     * @return original return type: 'void'
     */
    putAll(var0: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.Map'
     * @return original return type: 'void'
     */
    putAllSync(var0: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.util.function.BiFunction'
     * @return original return type: 'java.lang.Object'
     */
    merge(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null, var2: java_util_function_BiFunction | JavaInterfaceProxy<java_util_function_BiFunctionInterface> | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.util.function.BiFunction'
     * @return original return type: 'java.lang.Object'
     */
    mergeSync(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null, var2: java_util_function_BiFunction | JavaInterfaceProxy<java_util_function_BiFunctionInterface> | null): BasicOrJavaType | null;
    /**
     * @return original return type: 'java.util.Set'
     */
    keySet(): Promise<java_util_Set | null>;
    /**
     * @return original return type: 'java.util.Set'
     */
    keySetSync(): java_util_Set | null;
    /**
     * @param var0 original type: 'java.awt.RenderingHints'
     * @return original return type: 'void'
     */
    add(var0: RenderingHintsClass | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.RenderingHints'
     * @return original return type: 'void'
     */
    addSync(var0: RenderingHintsClass | null): void;
    /**
     * @return original return type: 'java.util.Set'
     */
    entrySet(): Promise<java_util_Set | null>;
    /**
     * @return original return type: 'java.util.Set'
     */
    entrySetSync(): java_util_Set | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    containsKey(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    containsKeySync(var0: BasicOrJavaType | null): boolean;
    /**
     * @param var0 original type: 'java.util.function.BiConsumer'
     * @return original return type: 'void'
     */
    forEach(var0: java_util_function_BiConsumer | JavaInterfaceProxy<java_util_function_BiConsumerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.function.BiConsumer'
     * @return original return type: 'void'
     */
    forEachSync(var0: java_util_function_BiConsumer | JavaInterfaceProxy<java_util_function_BiConsumerInterface> | null): void;
    /**
     * @return original return type: 'void'
     */
    clear(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    clearSync(): void;
    /**
     * @return original return type: 'boolean'
     */
    isEmpty(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isEmptySync(): boolean;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.function.BiFunction'
     * @return original return type: 'java.lang.Object'
     */
    computeIfPresent(var0: BasicOrJavaType | null, var1: java_util_function_BiFunction | JavaInterfaceProxy<java_util_function_BiFunctionInterface> | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.function.BiFunction'
     * @return original return type: 'java.lang.Object'
     */
    computeIfPresentSync(var0: BasicOrJavaType | null, var1: java_util_function_BiFunction | JavaInterfaceProxy<java_util_function_BiFunctionInterface> | null): BasicOrJavaType | null;
    /**
     * @return original return type: 'int'
     */
    size(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    sizeSync(): number;
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
     * @return original return type: 'java.lang.Object'
     */
    clone(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    cloneSync(): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    putIfAbsent(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    putIfAbsentSync(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): BasicOrJavaType | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_TEXT_ANTIALIAS_LCD_VRGB: BasicOrJavaType | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_TEXT_ANTIALIAS_LCD_VBGR: BasicOrJavaType | null;
    /**
     * Original type: 'java.awt.RenderingHints$Key'
     */
    static readonly KEY_FRACTIONALMETRICS: java_awt_RenderingHints$Key | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_RESOLUTION_VARIANT_SIZE_FIT: BasicOrJavaType | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_TEXT_ANTIALIAS_DEFAULT: BasicOrJavaType | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_TEXT_ANTIALIAS_OFF: BasicOrJavaType | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_ANTIALIAS_OFF: BasicOrJavaType | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_INTERPOLATION_BICUBIC: BasicOrJavaType | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_COLOR_RENDER_QUALITY: BasicOrJavaType | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_COLOR_RENDER_DEFAULT: BasicOrJavaType | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_STROKE_DEFAULT: BasicOrJavaType | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_RENDER_DEFAULT: BasicOrJavaType | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_RENDER_QUALITY: BasicOrJavaType | null;
    /**
     * Original type: 'java.awt.RenderingHints$Key'
     */
    static readonly KEY_ALPHA_INTERPOLATION: java_awt_RenderingHints$Key | null;
    /**
     * Original type: 'java.awt.RenderingHints$Key'
     */
    static readonly KEY_DITHERING: java_awt_RenderingHints$Key | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_FRACTIONALMETRICS_OFF: BasicOrJavaType | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_ANTIALIAS_DEFAULT: BasicOrJavaType | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_ALPHA_INTERPOLATION_SPEED: BasicOrJavaType | null;
    /**
     * Original type: 'java.awt.RenderingHints$Key'
     */
    static readonly KEY_TEXT_ANTIALIASING: java_awt_RenderingHints$Key | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_TEXT_ANTIALIAS_GASP: BasicOrJavaType | null;
    /**
     * Original type: 'java.awt.RenderingHints$Key'
     */
    static readonly KEY_TEXT_LCD_CONTRAST: java_awt_RenderingHints$Key | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_RENDER_SPEED: BasicOrJavaType | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_FRACTIONALMETRICS_ON: BasicOrJavaType | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_RESOLUTION_VARIANT_DEFAULT: BasicOrJavaType | null;
    /**
     * Original type: 'java.awt.RenderingHints$Key'
     */
    static readonly KEY_ANTIALIASING: java_awt_RenderingHints$Key | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_DITHER_ENABLE: BasicOrJavaType | null;
    /**
     * Original type: 'java.awt.RenderingHints$Key'
     */
    static readonly KEY_STROKE_CONTROL: java_awt_RenderingHints$Key | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_STROKE_PURE: BasicOrJavaType | null;
    /**
     * Original type: 'java.awt.RenderingHints$Key'
     */
    static readonly KEY_RENDERING: java_awt_RenderingHints$Key | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_DITHER_DEFAULT: BasicOrJavaType | null;
    /**
     * Original type: 'java.awt.RenderingHints$Key'
     */
    static readonly KEY_RESOLUTION_VARIANT: java_awt_RenderingHints$Key | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_INTERPOLATION_BILINEAR: BasicOrJavaType | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_ALPHA_INTERPOLATION_QUALITY: BasicOrJavaType | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_RESOLUTION_VARIANT_BASE: BasicOrJavaType | null;
    /**
     * Original type: 'java.awt.RenderingHints$Key'
     */
    static readonly KEY_COLOR_RENDERING: java_awt_RenderingHints$Key | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_RESOLUTION_VARIANT_DPI_FIT: BasicOrJavaType | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_ANTIALIAS_ON: BasicOrJavaType | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_STROKE_NORMALIZE: BasicOrJavaType | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_FRACTIONALMETRICS_DEFAULT: BasicOrJavaType | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_INTERPOLATION_NEAREST_NEIGHBOR: BasicOrJavaType | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_DITHER_DISABLE: BasicOrJavaType | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_TEXT_ANTIALIAS_LCD_HRGB: BasicOrJavaType | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_TEXT_ANTIALIAS_LCD_HBGR: BasicOrJavaType | null;
    /**
     * Original type: 'java.awt.RenderingHints$Key'
     */
    static readonly KEY_INTERPOLATION: java_awt_RenderingHints$Key | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_ALPHA_INTERPOLATION_DEFAULT: BasicOrJavaType | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_TEXT_ANTIALIAS_ON: BasicOrJavaType | null;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly VALUE_COLOR_RENDER_SPEED: BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.util.Map'
     */
    constructor(var0: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null);
    /**
     * @param var0 original type: 'java.util.Map'
     * @return original return type: 'java.awt.RenderingHints'
     */
    static newInstanceAsync(var0: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null): Promise<RenderingHints>;
    /**
     * @param var0 original type: 'java.awt.RenderingHints$Key'
     * @param var1 original type: 'java.lang.Object'
     */
    constructor(var0: java_awt_RenderingHints$Key | null, var1: BasicOrJavaType | null);
    /**
     * @param var0 original type: 'java.awt.RenderingHints$Key'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.awt.RenderingHints'
     */
    static newInstanceAsync(var0: java_awt_RenderingHints$Key | null, var1: BasicOrJavaType | null): Promise<RenderingHints>;
}
declare const RenderingHints_base: typeof RenderingHintsClass;
/**
 * Class java.awt.RenderingHints.
 *
 * This actually imports the java class for further use.
 * The class {@link RenderingHintsClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class RenderingHints extends RenderingHints_base {
}
export default RenderingHints;
