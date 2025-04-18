import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../lang/Class";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { Format$Field as java_text_Format$Field } from "./Format$Field";
/**
 * This class just defines types, you should import {@link FieldPosition} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FieldPositionClass extends JavaClass {
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
    getField(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getFieldSync(): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setEndIndex(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setEndIndexSync(var0: java_lang_Integer | number): void;
    /**
     * @return original return type: 'int'
     */
    getBeginIndex(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getBeginIndexSync(): number;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'int'
     */
    getEndIndex(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getEndIndexSync(): number;
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
     * @return original return type: 'java.text.Format$Field'
     */
    getFieldAttribute(): Promise<java_text_Format$Field | null>;
    /**
     * @return original return type: 'java.text.Format$Field'
     */
    getFieldAttributeSync(): java_text_Format$Field | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setBeginIndex(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setBeginIndexSync(var0: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.text.Format$Field'
     * @param var1 original type: 'int'
     */
    constructor(var0: java_text_Format$Field | null, var1: java_lang_Integer | number);
    /**
     * @param var0 original type: 'java.text.Format$Field'
     * @param var1 original type: 'int'
     * @return original return type: 'java.text.FieldPosition'
     */
    static newInstanceAsync(var0: java_text_Format$Field | null, var1: java_lang_Integer | number): Promise<FieldPosition>;
    /**
     * @param var0 original type: 'java.text.Format$Field'
     */
    constructor(var0: java_text_Format$Field | null);
    /**
     * @param var0 original type: 'java.text.Format$Field'
     * @return original return type: 'java.text.FieldPosition'
     */
    static newInstanceAsync(var0: java_text_Format$Field | null): Promise<FieldPosition>;
    /**
     * @param var0 original type: 'int'
     */
    constructor(var0: java_lang_Integer | number);
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.text.FieldPosition'
     */
    static newInstanceAsync(var0: java_lang_Integer | number): Promise<FieldPosition>;
}
declare const FieldPosition_base: typeof FieldPositionClass;
/**
 * Class java.text.FieldPosition.
 *
 * This actually imports the java class for further use.
 * The class {@link FieldPositionClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FieldPosition extends FieldPosition_base {
}
export default FieldPosition;
