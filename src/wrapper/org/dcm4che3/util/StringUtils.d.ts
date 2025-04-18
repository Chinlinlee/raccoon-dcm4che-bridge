import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./../../../java/lang/Class";
import { Long as java_lang_Long } from "./../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
import { Float as java_lang_Float } from "./../../../java/lang/Float";
import { Double as java_lang_Double } from "./../../../java/lang/Double";
import { StringBuilder as java_lang_StringBuilder } from "./../../../java/lang/StringBuilder";
import { Collection as java_util_Collection, CollectionInterface as java_util_CollectionInterface } from "./../../../java/util/Collection";
import { Boolean as java_lang_Boolean } from "./../../../java/lang/Boolean";
import { Pattern as java_util_regex_Pattern } from "./../../../java/util/regex/Pattern";
/**
 * This class just defines types, you should import {@link StringUtils} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class StringUtilsClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static isIPAddr(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static isIPAddrSync(var0: string | null): boolean;
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
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @param var2 original type: 'char'
     * @return original return type: 'java.lang.String'
     */
    static cut(var0: string | null, var1: java_lang_Integer | number, var2: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @param var2 original type: 'char'
     * @return original return type: 'java.lang.String'
     */
    static cutSync(var0: string | null, var1: java_lang_Integer | number, var2: string | null): string | null;
    /**
     * @param var0 original type: 'float'
     * @return original return type: 'java.lang.String'
     */
    static formatDS(var0: java_lang_Float | number): Promise<string | null>;
    /**
     * @param var0 original type: 'float'
     * @return original return type: 'java.lang.String'
     */
    static formatDSSync(var0: java_lang_Float | number): string | null;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'java.lang.String'
     */
    static formatDS(var0: java_lang_Double | number): Promise<string | null>;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'java.lang.String'
     */
    static formatDSSync(var0: java_lang_Double | number): string | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static replaceSystemProperties(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static replaceSystemPropertiesSync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String[]'
     */
    static requireContainsNoEmpty(var0: (string | null)[] | null, var1: string | null): Promise<(string | null)[] | null>;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String[]'
     */
    static requireContainsNoEmptySync(var0: (string | null)[] | null, var1: string | null): (string | null)[] | null;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'char'
     * @return original return type: 'java.lang.String[]'
     */
    static split(var0: string | null, var1: string | null): Promise<(string | null)[] | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'char'
     * @return original return type: 'java.lang.String[]'
     */
    static splitSync(var0: string | null, var1: string | null): (string | null)[] | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    static truncate(var0: string | null, var1: java_lang_Integer | number): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    static truncateSync(var0: string | null, var1: java_lang_Integer | number): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static resourceURL(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static resourceURLSync(var0: string | null): string | null;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @param var0 original type: 'java.lang.StringBuilder'
     * @param var1 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.StringBuilder'
     */
    static appendLine(var0: java_lang_StringBuilder | null, var1: (BasicOrJavaType | null)[] | null): Promise<java_lang_StringBuilder | null>;
    /**
     * @param var0 original type: 'java.lang.StringBuilder'
     * @param var1 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.StringBuilder'
     */
    static appendLineSync(var0: java_lang_StringBuilder | null, var1: (BasicOrJavaType | null)[] | null): java_lang_StringBuilder | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'char'
     * @return original return type: 'java.lang.Object'
     */
    static splitAndTrim(var0: string | null, var1: string | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'char'
     * @return original return type: 'java.lang.Object'
     */
    static splitAndTrimSync(var0: string | null, var1: string | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static trimTrailing(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static trimTrailingSync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'long'
     */
    static parseIS(var0: string | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'long'
     */
    static parseISSync(var0: string | null): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static requireNotEmpty(var0: string | null, var1: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static requireNotEmptySync(var0: string | null, var1: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Object[]'
     */
    static requireNotEmpty(var0: (BasicOrJavaType | null)[] | null, var1: string | null): Promise<(BasicOrJavaType | null)[] | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Object[]'
     */
    static requireNotEmptySync(var0: (BasicOrJavaType | null)[] | null, var1: string | null): (BasicOrJavaType | null)[] | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'long'
     */
    static parseUV(var0: string | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'long'
     */
    static parseUVSync(var0: string | null): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static isUpperCase(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static isUpperCaseSync(var0: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @param var1 original type: 'char'
     * @return original return type: 'java.lang.String'
     */
    static concat(var0: (string | null)[] | null, var1: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @param var1 original type: 'char'
     * @return original return type: 'java.lang.String'
     */
    static concatSync(var0: (string | null)[] | null, var1: string | null): string | null;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @param var1 original type: 'char'
     * @return original return type: 'java.lang.String'
     */
    static concat(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null, var1: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @param var1 original type: 'char'
     * @return original return type: 'java.lang.String'
     */
    static concatSync(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null, var1: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    static nullify(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    static nullifySync(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'boolean'
     * @param var3 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    static matches(var0: string | null, var1: string | null, var2: java_lang_Boolean | boolean, var3: java_lang_Boolean | boolean): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'boolean'
     * @param var3 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    static matchesSync(var0: string | null, var1: string | null, var2: java_lang_Boolean | boolean, var3: java_lang_Boolean | boolean): boolean;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    static maskNull(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    static maskNullSync(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'java.lang.String[]'
     */
    static maskNull(var0: (string | null)[] | null): Promise<(string | null)[] | null>;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'java.lang.String[]'
     */
    static maskNullSync(var0: (string | null)[] | null): (string | null)[] | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @return original return type: 'java.util.regex.Pattern'
     */
    static compilePattern(var0: string | null, var1: java_lang_Boolean | boolean): Promise<java_util_regex_Pattern | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @return original return type: 'java.util.regex.Pattern'
     */
    static compilePatternSync(var0: string | null, var1: java_lang_Boolean | boolean): java_util_regex_Pattern | null;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    static contains(var0: (BasicOrJavaType | null)[] | null, var1: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    static containsSync(var0: (BasicOrJavaType | null)[] | null, var1: BasicOrJavaType | null): boolean;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    static equals(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    static equalsSync(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): boolean;
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
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static containsWildCard(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static containsWildCardSync(var0: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static maskEmpty(var0: string | null, var1: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static maskEmptySync(var0: string | null, var1: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'char'
     * @return original return type: 'java.lang.String'
     */
    static replaceNonPrintASCII(var0: string | null, var1: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'char'
     * @return original return type: 'java.lang.String'
     */
    static replaceNonPrintASCIISync(var0: string | null, var1: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'double'
     */
    static parseDS(var0: string | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'double'
     */
    static parseDSSync(var0: string | null): number;
    /**
     * Original type: 'java.lang.String'
     */
    static LINE_SEPARATOR: string | null;
    /**
     * Original type: 'java.lang.String[]'
     */
    static EMPTY_STRING: (string | null)[] | null;
    constructor();
    /**
     * @return original return type: 'org.dcm4che3.util.StringUtils'
     */
    static newInstanceAsync(): Promise<StringUtils>;
}
declare const StringUtils_base: typeof StringUtilsClass;
/**
 * Class org.dcm4che3.util.StringUtils.
 *
 * This actually imports the java class for further use.
 * The class {@link StringUtilsClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class StringUtils extends StringUtils_base {
}
export default StringUtils;
