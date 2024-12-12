import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../lang/Class";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { Locale as java_util_Locale } from "./../../util/Locale";
import { Set as java_util_Set } from "./../../util/Set";
/**
 * This class just defines types, you should import {@link DecimalStyle} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DecimalStyleClass extends JavaClass {
    /**
     * @return original return type: 'char'
     */
    getPositiveSign(): Promise<string | null>;
    /**
     * @return original return type: 'char'
     */
    getPositiveSignSync(): string | null;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
    /**
     * @return original return type: 'char'
     */
    getDecimalSeparator(): Promise<string | null>;
    /**
     * @return original return type: 'char'
     */
    getDecimalSeparatorSync(): string | null;
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
     * @return original return type: 'char'
     */
    getNegativeSign(): Promise<string | null>;
    /**
     * @return original return type: 'char'
     */
    getNegativeSignSync(): string | null;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'char'
     */
    getZeroDigit(): Promise<string | null>;
    /**
     * @return original return type: 'char'
     */
    getZeroDigitSync(): string | null;
    /**
     * @return original return type: 'java.time.format.DecimalStyle'
     */
    static ofDefaultLocale(): Promise<DecimalStyle | null>;
    /**
     * @return original return type: 'java.time.format.DecimalStyle'
     */
    static ofDefaultLocaleSync(): DecimalStyle | null;
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'java.time.format.DecimalStyle'
     */
    withPositiveSign(var0: string | null): Promise<DecimalStyle | null>;
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'java.time.format.DecimalStyle'
     */
    withPositiveSignSync(var0: string | null): DecimalStyle | null;
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
     * @param var0 original type: 'java.util.Locale'
     * @return original return type: 'java.time.format.DecimalStyle'
     */
    static of(var0: java_util_Locale | null): Promise<DecimalStyle | null>;
    /**
     * @param var0 original type: 'java.util.Locale'
     * @return original return type: 'java.time.format.DecimalStyle'
     */
    static ofSync(var0: java_util_Locale | null): DecimalStyle | null;
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'java.time.format.DecimalStyle'
     */
    withDecimalSeparator(var0: string | null): Promise<DecimalStyle | null>;
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'java.time.format.DecimalStyle'
     */
    withDecimalSeparatorSync(var0: string | null): DecimalStyle | null;
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'java.time.format.DecimalStyle'
     */
    withNegativeSign(var0: string | null): Promise<DecimalStyle | null>;
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'java.time.format.DecimalStyle'
     */
    withNegativeSignSync(var0: string | null): DecimalStyle | null;
    /**
     * @return original return type: 'java.util.Set'
     */
    static getAvailableLocales(): Promise<java_util_Set | null>;
    /**
     * @return original return type: 'java.util.Set'
     */
    static getAvailableLocalesSync(): java_util_Set | null;
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'java.time.format.DecimalStyle'
     */
    withZeroDigit(var0: string | null): Promise<DecimalStyle | null>;
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'java.time.format.DecimalStyle'
     */
    withZeroDigitSync(var0: string | null): DecimalStyle | null;
    /**
     * Original type: 'java.time.format.DecimalStyle'
     */
    static readonly STANDARD: DecimalStyleClass | null;
}
declare const DecimalStyle_base: typeof DecimalStyleClass;
/**
 * Class java.time.format.DecimalStyle.
 *
 * This actually imports the java class for further use.
 * The class {@link DecimalStyleClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DecimalStyle extends DecimalStyle_base {
}
export default DecimalStyle;
//# sourceMappingURL=DecimalStyle.d.ts.map