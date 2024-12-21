import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { CoderResult as java_nio_charset_CoderResult } from "./CoderResult";
import { CharBuffer as java_nio_CharBuffer } from "./../CharBuffer";
import { ByteBuffer as java_nio_ByteBuffer } from "./../ByteBuffer";
import { Boolean as java_lang_Boolean } from "./../../lang/Boolean";
import { Charset as java_nio_charset_Charset } from "./Charset";
import { Class as java_lang_Class } from "./../../lang/Class";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { CodingErrorAction as java_nio_charset_CodingErrorAction } from "./CodingErrorAction";
import { CharSequence as java_lang_CharSequence, CharSequenceInterface as java_lang_CharSequenceInterface } from "./../../lang/CharSequence";
/**
 * This class just defines types, you should import {@link CharsetEncoder} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class CharsetEncoderClass extends JavaClass {
    /**
     * @param var0 original type: 'java.nio.CharBuffer'
     * @param var1 original type: 'java.nio.ByteBuffer'
     * @param var2 original type: 'boolean'
     * @return original return type: 'java.nio.charset.CoderResult'
     */
    encode(var0: java_nio_CharBuffer | null, var1: java_nio_ByteBuffer | null, var2: java_lang_Boolean | boolean): Promise<java_nio_charset_CoderResult | null>;
    /**
     * @param var0 original type: 'java.nio.CharBuffer'
     * @param var1 original type: 'java.nio.ByteBuffer'
     * @param var2 original type: 'boolean'
     * @return original return type: 'java.nio.charset.CoderResult'
     */
    encodeSync(var0: java_nio_CharBuffer | null, var1: java_nio_ByteBuffer | null, var2: java_lang_Boolean | boolean): java_nio_charset_CoderResult | null;
    /**
     * @param var0 original type: 'java.nio.CharBuffer'
     * @return original return type: 'java.nio.ByteBuffer'
     */
    encode(var0: java_nio_CharBuffer | null): Promise<java_nio_ByteBuffer | null>;
    /**
     * @param var0 original type: 'java.nio.CharBuffer'
     * @return original return type: 'java.nio.ByteBuffer'
     */
    encodeSync(var0: java_nio_CharBuffer | null): java_nio_ByteBuffer | null;
    /**
     * @return original return type: 'java.nio.charset.Charset'
     */
    charset(): Promise<java_nio_charset_Charset | null>;
    /**
     * @return original return type: 'java.nio.charset.Charset'
     */
    charsetSync(): java_nio_charset_Charset | null;
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
     * @param var0 original type: 'java.nio.charset.CodingErrorAction'
     * @return original return type: 'java.nio.charset.CharsetEncoder'
     */
    onUnmappableCharacter(var0: java_nio_charset_CodingErrorAction | null): Promise<CharsetEncoder | null>;
    /**
     * @param var0 original type: 'java.nio.charset.CodingErrorAction'
     * @return original return type: 'java.nio.charset.CharsetEncoder'
     */
    onUnmappableCharacterSync(var0: java_nio_charset_CodingErrorAction | null): CharsetEncoder | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'float'
     */
    maxBytesPerChar(): Promise<number>;
    /**
     * @return original return type: 'float'
     */
    maxBytesPerCharSync(): number;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'boolean'
     */
    isLegalReplacement(var0: Buffer | null): Promise<boolean>;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'boolean'
     */
    isLegalReplacementSync(var0: Buffer | null): boolean;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'java.nio.charset.CodingErrorAction'
     */
    unmappableCharacterAction(): Promise<java_nio_charset_CodingErrorAction | null>;
    /**
     * @return original return type: 'java.nio.charset.CodingErrorAction'
     */
    unmappableCharacterActionSync(): java_nio_charset_CodingErrorAction | null;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @return original return type: 'java.nio.charset.CoderResult'
     */
    flush(var0: java_nio_ByteBuffer | null): Promise<java_nio_charset_CoderResult | null>;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @return original return type: 'java.nio.charset.CoderResult'
     */
    flushSync(var0: java_nio_ByteBuffer | null): java_nio_charset_CoderResult | null;
    /**
     * @return original return type: 'java.nio.charset.CodingErrorAction'
     */
    malformedInputAction(): Promise<java_nio_charset_CodingErrorAction | null>;
    /**
     * @return original return type: 'java.nio.charset.CodingErrorAction'
     */
    malformedInputActionSync(): java_nio_charset_CodingErrorAction | null;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @return original return type: 'boolean'
     */
    canEncode(var0: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @return original return type: 'boolean'
     */
    canEncodeSync(var0: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null): boolean;
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'boolean'
     */
    canEncode(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'boolean'
     */
    canEncodeSync(var0: string | null): boolean;
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
     * @param var0 original type: 'java.nio.charset.CodingErrorAction'
     * @return original return type: 'java.nio.charset.CharsetEncoder'
     */
    onMalformedInput(var0: java_nio_charset_CodingErrorAction | null): Promise<CharsetEncoder | null>;
    /**
     * @param var0 original type: 'java.nio.charset.CodingErrorAction'
     * @return original return type: 'java.nio.charset.CharsetEncoder'
     */
    onMalformedInputSync(var0: java_nio_charset_CodingErrorAction | null): CharsetEncoder | null;
    /**
     * @return original return type: 'float'
     */
    averageBytesPerChar(): Promise<number>;
    /**
     * @return original return type: 'float'
     */
    averageBytesPerCharSync(): number;
    /**
     * @return original return type: 'java.nio.charset.CharsetEncoder'
     */
    reset(): Promise<CharsetEncoder | null>;
    /**
     * @return original return type: 'java.nio.charset.CharsetEncoder'
     */
    resetSync(): CharsetEncoder | null;
    /**
     * @return original return type: 'byte[]'
     */
    replacement(): Promise<Buffer | null>;
    /**
     * @return original return type: 'byte[]'
     */
    replacementSync(): Buffer | null;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'java.nio.charset.CharsetEncoder'
     */
    replaceWith(var0: Buffer | null): Promise<CharsetEncoder | null>;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'java.nio.charset.CharsetEncoder'
     */
    replaceWithSync(var0: Buffer | null): CharsetEncoder | null;
}
declare const CharsetEncoder_base: typeof CharsetEncoderClass;
/**
 * Class java.nio.charset.CharsetEncoder.
 *
 * This actually imports the java class for further use.
 * The class {@link CharsetEncoderClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class CharsetEncoder extends CharsetEncoder_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default CharsetEncoder;
//# sourceMappingURL=CharsetEncoder.d.ts.map