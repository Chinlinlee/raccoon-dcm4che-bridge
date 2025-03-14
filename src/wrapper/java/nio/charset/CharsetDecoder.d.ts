import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Charset as java_nio_charset_Charset } from "./Charset";
import { Class as java_lang_Class } from "./../../lang/Class";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { CodingErrorAction as java_nio_charset_CodingErrorAction } from "./CodingErrorAction";
import { CharBuffer as java_nio_CharBuffer } from "./../CharBuffer";
import { ByteBuffer as java_nio_ByteBuffer } from "./../ByteBuffer";
import { CoderResult as java_nio_charset_CoderResult } from "./CoderResult";
import { Boolean as java_lang_Boolean } from "./../../lang/Boolean";
/**
 * This class just defines types, you should import {@link CharsetDecoder} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class CharsetDecoderClass extends JavaClass {
    /**
     * @return original return type: 'float'
     */
    averageCharsPerByte(): Promise<number>;
    /**
     * @return original return type: 'float'
     */
    averageCharsPerByteSync(): number;
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
     * @return original return type: 'float'
     */
    maxCharsPerByte(): Promise<number>;
    /**
     * @return original return type: 'float'
     */
    maxCharsPerByteSync(): number;
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
     * @return original return type: 'java.nio.charset.CharsetDecoder'
     */
    onUnmappableCharacter(var0: java_nio_charset_CodingErrorAction | null): Promise<CharsetDecoder | null>;
    /**
     * @param var0 original type: 'java.nio.charset.CodingErrorAction'
     * @return original return type: 'java.nio.charset.CharsetDecoder'
     */
    onUnmappableCharacterSync(var0: java_nio_charset_CodingErrorAction | null): CharsetDecoder | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @return original return type: 'java.nio.CharBuffer'
     */
    decode(var0: java_nio_ByteBuffer | null): Promise<java_nio_CharBuffer | null>;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @return original return type: 'java.nio.CharBuffer'
     */
    decodeSync(var0: java_nio_ByteBuffer | null): java_nio_CharBuffer | null;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @param var1 original type: 'java.nio.CharBuffer'
     * @param var2 original type: 'boolean'
     * @return original return type: 'java.nio.charset.CoderResult'
     */
    decode(var0: java_nio_ByteBuffer | null, var1: java_nio_CharBuffer | null, var2: java_lang_Boolean | boolean): Promise<java_nio_charset_CoderResult | null>;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @param var1 original type: 'java.nio.CharBuffer'
     * @param var2 original type: 'boolean'
     * @return original return type: 'java.nio.charset.CoderResult'
     */
    decodeSync(var0: java_nio_ByteBuffer | null, var1: java_nio_CharBuffer | null, var2: java_lang_Boolean | boolean): java_nio_charset_CoderResult | null;
    /**
     * @return original return type: 'boolean'
     */
    isCharsetDetected(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isCharsetDetectedSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isAutoDetecting(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isAutoDetectingSync(): boolean;
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
     * @param var0 original type: 'java.nio.CharBuffer'
     * @return original return type: 'java.nio.charset.CoderResult'
     */
    flush(var0: java_nio_CharBuffer | null): Promise<java_nio_charset_CoderResult | null>;
    /**
     * @param var0 original type: 'java.nio.CharBuffer'
     * @return original return type: 'java.nio.charset.CoderResult'
     */
    flushSync(var0: java_nio_CharBuffer | null): java_nio_charset_CoderResult | null;
    /**
     * @return original return type: 'java.nio.charset.CodingErrorAction'
     */
    malformedInputAction(): Promise<java_nio_charset_CodingErrorAction | null>;
    /**
     * @return original return type: 'java.nio.charset.CodingErrorAction'
     */
    malformedInputActionSync(): java_nio_charset_CodingErrorAction | null;
    /**
     * @return original return type: 'java.nio.charset.Charset'
     */
    detectedCharset(): Promise<java_nio_charset_Charset | null>;
    /**
     * @return original return type: 'java.nio.charset.Charset'
     */
    detectedCharsetSync(): java_nio_charset_Charset | null;
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
     * @param var0 original type: 'java.nio.charset.CodingErrorAction'
     * @return original return type: 'java.nio.charset.CharsetDecoder'
     */
    onMalformedInput(var0: java_nio_charset_CodingErrorAction | null): Promise<CharsetDecoder | null>;
    /**
     * @param var0 original type: 'java.nio.charset.CodingErrorAction'
     * @return original return type: 'java.nio.charset.CharsetDecoder'
     */
    onMalformedInputSync(var0: java_nio_charset_CodingErrorAction | null): CharsetDecoder | null;
    /**
     * @return original return type: 'java.nio.charset.CharsetDecoder'
     */
    reset(): Promise<CharsetDecoder | null>;
    /**
     * @return original return type: 'java.nio.charset.CharsetDecoder'
     */
    resetSync(): CharsetDecoder | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    replacement(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    replacementSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.nio.charset.CharsetDecoder'
     */
    replaceWith(var0: string | null): Promise<CharsetDecoder | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.nio.charset.CharsetDecoder'
     */
    replaceWithSync(var0: string | null): CharsetDecoder | null;
}
declare const CharsetDecoder_base: typeof CharsetDecoderClass;
/**
 * Class java.nio.charset.CharsetDecoder.
 *
 * This actually imports the java class for further use.
 * The class {@link CharsetDecoderClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class CharsetDecoder extends CharsetDecoder_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default CharsetDecoder;
//# sourceMappingURL=CharsetDecoder.d.ts.map