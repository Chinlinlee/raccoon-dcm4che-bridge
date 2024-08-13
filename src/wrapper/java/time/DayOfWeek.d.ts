import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { TemporalField as java_time_temporal_TemporalField, TemporalFieldInterface as java_time_temporal_TemporalFieldInterface } from "./temporal/TemporalField";
import { Enum as java_lang_Enum } from "./../lang/Enum";
import { Class as java_lang_Class } from "./../lang/Class";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { TemporalAccessor as java_time_temporal_TemporalAccessor, TemporalAccessorInterface as java_time_temporal_TemporalAccessorInterface } from "./temporal/TemporalAccessor";
import { TemporalQuery as java_time_temporal_TemporalQuery, TemporalQueryInterface as java_time_temporal_TemporalQueryInterface } from "./temporal/TemporalQuery";
import { ValueRange as java_time_temporal_ValueRange } from "./temporal/ValueRange";
import { TextStyle as java_time_format_TextStyle } from "./format/TextStyle";
import { Locale as java_util_Locale } from "./../util/Locale";
import { Temporal as java_time_temporal_Temporal, TemporalInterface as java_time_temporal_TemporalInterface } from "./temporal/Temporal";
import { Long as java_lang_Long } from "./../lang/Long";
import { Optional as java_util_Optional } from "./../util/Optional";
/**
 * This class just defines types, you should import {@link DayOfWeek} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DayOfWeekClass extends JavaClass {
    /**
     * Original type: 'java.time.DayOfWeek'
     */
    static readonly MONDAY: DayOfWeekClass | null;
    /**
     * Original type: 'java.time.DayOfWeek'
     */
    static readonly TUESDAY: DayOfWeekClass | null;
    /**
     * Original type: 'java.time.DayOfWeek'
     */
    static readonly WEDNESDAY: DayOfWeekClass | null;
    /**
     * Original type: 'java.time.DayOfWeek'
     */
    static readonly THURSDAY: DayOfWeekClass | null;
    /**
     * Original type: 'java.time.DayOfWeek'
     */
    static readonly FRIDAY: DayOfWeekClass | null;
    /**
     * Original type: 'java.time.DayOfWeek'
     */
    static readonly SATURDAY: DayOfWeekClass | null;
    /**
     * Original type: 'java.time.DayOfWeek'
     */
    static readonly SUNDAY: DayOfWeekClass | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'int'
     */
    get(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null): Promise<number>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'int'
     */
    getSync(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null): number;
    /**
     * @return original return type: 'java.time.DayOfWeek[]'
     */
    static values(): Promise<(DayOfWeek | null)[] | null>;
    /**
     * @return original return type: 'java.time.DayOfWeek[]'
     */
    static valuesSync(): (DayOfWeek | null)[] | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'long'
     */
    getLong(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null): Promise<number>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'long'
     */
    getLongSync(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.time.DayOfWeek'
     */
    static valueOf(var0: string | null): Promise<DayOfWeek | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.time.DayOfWeek'
     */
    static valueOfSync(var0: string | null): DayOfWeek | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Enum'
     */
    static valueOf(var0: java_lang_Class | null, var1: string | null): Promise<java_lang_Enum | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Enum'
     */
    static valueOfSync(var0: java_lang_Class | null, var1: string | null): java_lang_Enum | null;
    /**
     * @return original return type: 'int'
     */
    getValue(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getValueSync(): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.DayOfWeek'
     */
    static of(var0: java_lang_Integer | number): Promise<DayOfWeek | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.DayOfWeek'
     */
    static ofSync(var0: java_lang_Integer | number): DayOfWeek | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAccessor'
     * @return original return type: 'java.time.DayOfWeek'
     */
    static from(var0: java_time_temporal_TemporalAccessor | JavaInterfaceProxy<java_time_temporal_TemporalAccessorInterface> | null): Promise<DayOfWeek | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAccessor'
     * @return original return type: 'java.time.DayOfWeek'
     */
    static fromSync(var0: java_time_temporal_TemporalAccessor | JavaInterfaceProxy<java_time_temporal_TemporalAccessorInterface> | null): DayOfWeek | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalQuery'
     * @return original return type: 'java.lang.Object'
     */
    query(var0: java_time_temporal_TemporalQuery | JavaInterfaceProxy<java_time_temporal_TemporalQueryInterface> | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalQuery'
     * @return original return type: 'java.lang.Object'
     */
    querySync(var0: java_time_temporal_TemporalQuery | JavaInterfaceProxy<java_time_temporal_TemporalQueryInterface> | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'java.time.temporal.ValueRange'
     */
    range(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null): Promise<java_time_temporal_ValueRange | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'java.time.temporal.ValueRange'
     */
    rangeSync(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null): java_time_temporal_ValueRange | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'boolean'
     */
    isSupported(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'boolean'
     */
    isSupportedSync(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null): boolean;
    /**
     * @param var0 original type: 'java.time.format.TextStyle'
     * @param var1 original type: 'java.util.Locale'
     * @return original return type: 'java.lang.String'
     */
    getDisplayName(var0: java_time_format_TextStyle | null, var1: java_util_Locale | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.time.format.TextStyle'
     * @param var1 original type: 'java.util.Locale'
     * @return original return type: 'java.lang.String'
     */
    getDisplayNameSync(var0: java_time_format_TextStyle | null, var1: java_util_Locale | null): string | null;
    /**
     * @param var0 original type: 'java.time.temporal.Temporal'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    adjustInto(var0: java_time_temporal_Temporal | JavaInterfaceProxy<java_time_temporal_TemporalInterface> | null): Promise<java_time_temporal_Temporal | null>;
    /**
     * @param var0 original type: 'java.time.temporal.Temporal'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    adjustIntoSync(var0: java_time_temporal_Temporal | JavaInterfaceProxy<java_time_temporal_TemporalInterface> | null): java_time_temporal_Temporal | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.DayOfWeek'
     */
    plus(var0: java_lang_Long | bigint | number): Promise<DayOfWeek | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.DayOfWeek'
     */
    plusSync(var0: java_lang_Long | bigint | number): DayOfWeek | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.DayOfWeek'
     */
    minus(var0: java_lang_Long | bigint | number): Promise<DayOfWeek | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.DayOfWeek'
     */
    minusSync(var0: java_lang_Long | bigint | number): DayOfWeek | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    name(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    nameSync(): string | null;
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
     * @return original return type: 'java.lang.String'
     */
    toString(): string;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
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
     * @return original return type: 'int'
     */
    compareTo(var0: BasicOrJavaType | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    compareToSync(var0: BasicOrJavaType | null): number;
    /**
     * @param var0 original type: 'java.lang.Enum'
     * @return original return type: 'int'
     */
    compareTo(var0: java_lang_Enum | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Enum'
     * @return original return type: 'int'
     */
    compareToSync(var0: java_lang_Enum | null): number;
    /**
     * @return original return type: 'java.util.Optional'
     */
    describeConstable(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    describeConstableSync(): java_util_Optional | null;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getDeclaringClass(): Promise<java_lang_Class | null>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getDeclaringClassSync(): java_lang_Class | null;
    /**
     * @return original return type: 'int'
     */
    ordinal(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    ordinalSync(): number;
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
}
declare const DayOfWeek_base: typeof DayOfWeekClass;
/**
 * Class java.time.DayOfWeek.
 *
 * This actually imports the java class for further use.
 * The class {@link DayOfWeekClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DayOfWeek extends DayOfWeek_base {
}
export default DayOfWeek;
//# sourceMappingURL=DayOfWeek.d.ts.map