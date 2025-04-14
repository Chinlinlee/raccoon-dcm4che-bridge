import { JavaClass, BasicOrJavaType } from "java-bridge";
import { ByteBuffer as java_nio_ByteBuffer } from "./../ByteBuffer";
import { CharBuffer as java_nio_CharBuffer } from "./../CharBuffer";
import { Class as java_lang_Class } from "./../../lang/Class";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { Set as java_util_Set } from "./../../util/Set";
import { CharsetDecoder as java_nio_charset_CharsetDecoder } from "./CharsetDecoder";
import { Locale as java_util_Locale } from "./../../util/Locale";
import { CharsetEncoder as java_nio_charset_CharsetEncoder } from "./CharsetEncoder";
import { SortedMap as java_util_SortedMap } from "./../../util/SortedMap";
/**
 * This class just defines types, you should import {@link Charset} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class CharsetClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.nio.ByteBuffer'
     */
    encode(var0: string | null): Promise<java_nio_ByteBuffer | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.nio.ByteBuffer'
     */
    encodeSync(var0: string | null): java_nio_ByteBuffer | null;
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
     * @return original return type: 'java.util.Set'
     */
    aliases(): Promise<java_util_Set | null>;
    /**
     * @return original return type: 'java.util.Set'
     */
    aliasesSync(): java_util_Set | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.nio.charset.Charset'
     */
    static forName(var0: string | null): Promise<Charset | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.nio.charset.Charset'
     */
    static forNameSync(var0: string | null): Charset | null;
    /**
     * @return original return type: 'java.nio.charset.CharsetDecoder'
     */
    newDecoder(): Promise<java_nio_charset_CharsetDecoder | null>;
    /**
     * @return original return type: 'java.nio.charset.CharsetDecoder'
     */
    newDecoderSync(): java_nio_charset_CharsetDecoder | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    displayName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    displayNameSync(): string | null;
    /**
     * @param var0 original type: 'java.util.Locale'
     * @return original return type: 'java.lang.String'
     */
    displayName(var0: java_util_Locale | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.util.Locale'
     * @return original return type: 'java.lang.String'
     */
    displayNameSync(var0: java_util_Locale | null): string | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'java.nio.charset.Charset'
     */
    static defaultCharset(): Promise<Charset | null>;
    /**
     * @return original return type: 'java.nio.charset.Charset'
     */
    static defaultCharsetSync(): Charset | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    compareTo(var0: BasicOrJavaType | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    compareToSync(var0: BasicOrJavaType | null): number;
    /**
     * @param var0 original type: 'java.nio.charset.Charset'
     * @return original return type: 'int'
     */
    compareTo(var0: CharsetClass | null): Promise<number>;
    /**
     * @param var0 original type: 'java.nio.charset.Charset'
     * @return original return type: 'int'
     */
    compareToSync(var0: CharsetClass | null): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static isSupported(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static isSupportedSync(var0: string | null): boolean;
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
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @param var0 original type: 'java.nio.charset.Charset'
     * @return original return type: 'boolean'
     */
    contains(var0: CharsetClass | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.nio.charset.Charset'
     * @return original return type: 'boolean'
     */
    containsSync(var0: CharsetClass | null): boolean;
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
     * @return original return type: 'boolean'
     */
    canEncode(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    canEncodeSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    name(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    nameSync(): string | null;
    /**
     * @return original return type: 'java.nio.charset.CharsetEncoder'
     */
    newEncoder(): Promise<java_nio_charset_CharsetEncoder | null>;
    /**
     * @return original return type: 'java.nio.charset.CharsetEncoder'
     */
    newEncoderSync(): java_nio_charset_CharsetEncoder | null;
    /**
     * @return original return type: 'boolean'
     */
    isRegistered(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isRegisteredSync(): boolean;
    /**
     * @return original return type: 'java.util.SortedMap'
     */
    static availableCharsets(): Promise<java_util_SortedMap | null>;
    /**
     * @return original return type: 'java.util.SortedMap'
     */
    static availableCharsetsSync(): java_util_SortedMap | null;
}
declare const Charset_base: typeof CharsetClass;
/**
 * Class java.nio.charset.Charset.
 *
 * This actually imports the java class for further use.
 * The class {@link CharsetClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Charset extends Charset_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default Charset;
