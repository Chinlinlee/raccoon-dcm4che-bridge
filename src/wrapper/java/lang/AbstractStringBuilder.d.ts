import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { CharSequence as java_lang_CharSequence, CharSequenceInterface as java_lang_CharSequenceInterface } from "./CharSequence";
import { Appendable as java_lang_Appendable } from "./Appendable";
import { Integer as java_lang_Integer } from "./Integer";
import { StringBuffer as java_lang_StringBuffer } from "./StringBuffer";
import { Long as java_lang_Long } from "./Long";
import { Float as java_lang_Float } from "./Float";
import { Double as java_lang_Double } from "./Double";
import { Boolean as java_lang_Boolean } from "./Boolean";
import { IntStream as java_util_stream_IntStream } from "./../util/stream/IntStream";
import { Class as java_lang_Class } from "./Class";
/**
 * This class just defines types, you should import {@link AbstractStringBuilder} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AbstractStringBuilderClass extends JavaClass {
    /**
     * @return original return type: 'int'
     */
    length(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    lengthSync(): number;
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): string;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    append(var0: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    appendSync(var0: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @return original return type: 'java.lang.Appendable'
     */
    append(var0: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null): Promise<java_lang_Appendable | null>;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @return original return type: 'java.lang.Appendable'
     */
    appendSync(var0: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null): java_lang_Appendable | null;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    append(var0: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    appendSync(var0: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.lang.Appendable'
     */
    append(var0: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<java_lang_Appendable | null>;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.lang.Appendable'
     */
    appendSync(var0: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): java_lang_Appendable | null;
    /**
     * @param var0 original type: 'char[]'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    append(var0: (string | null)[] | null): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'char[]'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    appendSync(var0: (string | null)[] | null): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    append(var0: BasicOrJavaType | null): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    appendSync(var0: BasicOrJavaType | null): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'java.lang.StringBuffer'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    append(var0: java_lang_StringBuffer | null): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'java.lang.StringBuffer'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    appendSync(var0: java_lang_StringBuffer | null): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    append(var0: string | null): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    appendSync(var0: string | null): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    append(var0: java_lang_Integer | number): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    appendSync(var0: java_lang_Integer | number): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    append(var0: java_lang_Long | bigint | number): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    appendSync(var0: java_lang_Long | bigint | number): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'float'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    append(var0: java_lang_Float | number): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'float'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    appendSync(var0: java_lang_Float | number): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    append(var0: java_lang_Double | number): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    appendSync(var0: java_lang_Double | number): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    append(var0: string | null): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    appendSync(var0: string | null): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'java.lang.Appendable'
     */
    append(var0: string | null): Promise<java_lang_Appendable | null>;
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'java.lang.Appendable'
     */
    appendSync(var0: string | null): java_lang_Appendable | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    append(var0: java_lang_Boolean | boolean): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    appendSync(var0: java_lang_Boolean | boolean): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'char[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    append(var0: (string | null)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'char[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    appendSync(var0: (string | null)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'char[]'
     * @param var3 original type: 'int'
     * @return original return type: 'void'
     */
    getChars(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (string | null)[] | null, var3: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'char[]'
     * @param var3 original type: 'int'
     * @return original return type: 'void'
     */
    getCharsSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (string | null)[] | null, var3: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'int'
     */
    indexOf(var0: string | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'int'
     */
    indexOfSync(var0: string | null): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    indexOf(var0: string | null, var1: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    indexOfSync(var0: string | null, var1: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    insert(var0: java_lang_Integer | number, var1: string | null): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    insertSync(var0: java_lang_Integer | number, var1: string | null): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.CharSequence'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    insert(var0: java_lang_Integer | number, var1: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.CharSequence'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    insertSync(var0: java_lang_Integer | number, var1: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'char[]'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    insert(var0: java_lang_Integer | number, var1: (string | null)[] | null): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'char[]'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    insertSync(var0: java_lang_Integer | number, var1: (string | null)[] | null): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    insert(var0: java_lang_Integer | number, var1: BasicOrJavaType | null): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    insertSync(var0: java_lang_Integer | number, var1: BasicOrJavaType | null): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'char[]'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    insert(var0: java_lang_Integer | number, var1: (string | null)[] | null, var2: java_lang_Integer | number, var3: java_lang_Integer | number): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'char[]'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    insertSync(var0: java_lang_Integer | number, var1: (string | null)[] | null, var2: java_lang_Integer | number, var3: java_lang_Integer | number): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'boolean'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    insert(var0: java_lang_Integer | number, var1: java_lang_Boolean | boolean): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'boolean'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    insertSync(var0: java_lang_Integer | number, var1: java_lang_Boolean | boolean): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'float'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    insert(var0: java_lang_Integer | number, var1: java_lang_Float | number): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'float'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    insertSync(var0: java_lang_Integer | number, var1: java_lang_Float | number): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'double'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    insert(var0: java_lang_Integer | number, var1: java_lang_Double | number): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'double'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    insertSync(var0: java_lang_Integer | number, var1: java_lang_Double | number): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'long'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    insert(var0: java_lang_Integer | number, var1: java_lang_Long | bigint | number): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'long'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    insertSync(var0: java_lang_Integer | number, var1: java_lang_Long | bigint | number): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.CharSequence'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    insert(var0: java_lang_Integer | number, var1: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null, var2: java_lang_Integer | number, var3: java_lang_Integer | number): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.CharSequence'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    insertSync(var0: java_lang_Integer | number, var1: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null, var2: java_lang_Integer | number, var3: java_lang_Integer | number): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    insert(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    insertSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'char'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    insert(var0: java_lang_Integer | number, var1: string | null): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'char'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    insertSync(var0: java_lang_Integer | number, var1: string | null): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'char'
     */
    charAt(var0: java_lang_Integer | number): Promise<string | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'char'
     */
    charAtSync(var0: java_lang_Integer | number): string | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    codePointAt(var0: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    codePointAtSync(var0: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    codePointBefore(var0: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    codePointBeforeSync(var0: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    codePointCount(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    codePointCountSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    offsetByCodePoints(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    offsetByCodePointsSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'int'
     */
    lastIndexOf(var0: string | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'int'
     */
    lastIndexOfSync(var0: string | null): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    lastIndexOf(var0: string | null, var1: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    lastIndexOfSync(var0: string | null, var1: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    substring(var0: java_lang_Integer | number): Promise<string | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    substringSync(var0: java_lang_Integer | number): string | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    substring(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<string | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    substringSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): string | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    replace(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: string | null): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    replaceSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: string | null): AbstractStringBuilder | null;
    /**
     * @return original return type: 'java.util.stream.IntStream'
     */
    codePoints(): Promise<java_util_stream_IntStream | null>;
    /**
     * @return original return type: 'java.util.stream.IntStream'
     */
    codePointsSync(): java_util_stream_IntStream | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.CharSequence'
     */
    subSequence(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<java_lang_CharSequence | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.CharSequence'
     */
    subSequenceSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): java_lang_CharSequence | null;
    /**
     * @return original return type: 'java.util.stream.IntStream'
     */
    chars(): Promise<java_util_stream_IntStream | null>;
    /**
     * @return original return type: 'java.util.stream.IntStream'
     */
    charsSync(): java_util_stream_IntStream | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    delete(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    deleteSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setLength(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setLengthSync(var0: java_lang_Integer | number): void;
    /**
     * @return original return type: 'int'
     */
    capacity(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    capacitySync(): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    ensureCapacity(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    ensureCapacitySync(var0: java_lang_Integer | number): void;
    /**
     * @return original return type: 'void'
     */
    trimToSize(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    trimToSizeSync(): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'char'
     * @return original return type: 'void'
     */
    setCharAt(var0: java_lang_Integer | number, var1: string | null): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'char'
     * @return original return type: 'void'
     */
    setCharAtSync(var0: java_lang_Integer | number, var1: string | null): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    appendCodePoint(var0: java_lang_Integer | number): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    appendCodePointSync(var0: java_lang_Integer | number): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    deleteCharAt(var0: java_lang_Integer | number): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    deleteCharAtSync(var0: java_lang_Integer | number): AbstractStringBuilder | null;
    /**
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    reverse(): Promise<AbstractStringBuilder | null>;
    /**
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    reverseSync(): AbstractStringBuilder | null;
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
     * @return original return type: 'boolean'
     */
    equals(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equalsSync(var0: BasicOrJavaType | null): boolean;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
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
    isEmpty(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isEmptySync(): boolean;
}
declare const AbstractStringBuilder_base: typeof AbstractStringBuilderClass;
/**
 * Class java.lang.AbstractStringBuilder.
 *
 * This actually imports the java class for further use.
 * The class {@link AbstractStringBuilderClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AbstractStringBuilder extends AbstractStringBuilder_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default AbstractStringBuilder;
//# sourceMappingURL=AbstractStringBuilder.d.ts.map