import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../lang/Class";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { AttributedCharacterIterator$Attribute as java_text_AttributedCharacterIterator$Attribute } from "./AttributedCharacterIterator$Attribute";
/**
 * This class just defines types, you should import {@link Format$Field} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Format$FieldClass extends JavaClass {
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
     * @return original return type: 'void'
     */
    wait(var0: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    waitSync(var0: java_lang_Long | bigint | number): void;
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
     * Original type: 'java.text.AttributedCharacterIterator$Attribute'
     */
    static readonly LANGUAGE: java_text_AttributedCharacterIterator$Attribute | null;
    /**
     * Original type: 'java.text.AttributedCharacterIterator$Attribute'
     */
    static readonly INPUT_METHOD_SEGMENT: java_text_AttributedCharacterIterator$Attribute | null;
    /**
     * Original type: 'java.text.AttributedCharacterIterator$Attribute'
     */
    static readonly READING: java_text_AttributedCharacterIterator$Attribute | null;
}
declare const Format$Field_base: typeof Format$FieldClass;
/**
 * Class java.text.Format$Field.
 *
 * This actually imports the java class for further use.
 * The class {@link Format$FieldClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Format$Field extends Format$Field_base {
}
export default Format$Field;
//# sourceMappingURL=Format$Field.d.ts.map