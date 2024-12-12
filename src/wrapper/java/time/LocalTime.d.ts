import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./../lang/Class";
import { Long as java_lang_Long } from "./../lang/Long";
import { LocalDateTime as java_time_LocalDateTime } from "./LocalDateTime";
import { LocalDate as java_time_LocalDate } from "./LocalDate";
import { TemporalAccessor as java_time_temporal_TemporalAccessor, TemporalAccessorInterface as java_time_temporal_TemporalAccessorInterface } from "./temporal/TemporalAccessor";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { TemporalQuery as java_time_temporal_TemporalQuery, TemporalQueryInterface as java_time_temporal_TemporalQueryInterface } from "./temporal/TemporalQuery";
import { TemporalUnit as java_time_temporal_TemporalUnit, TemporalUnitInterface as java_time_temporal_TemporalUnitInterface } from "./temporal/TemporalUnit";
import { DateTimeFormatter as java_time_format_DateTimeFormatter } from "./format/DateTimeFormatter";
import { TemporalField as java_time_temporal_TemporalField, TemporalFieldInterface as java_time_temporal_TemporalFieldInterface } from "./temporal/TemporalField";
import { Temporal as java_time_temporal_Temporal, TemporalInterface as java_time_temporal_TemporalInterface } from "./temporal/Temporal";
import { TemporalAmount as java_time_temporal_TemporalAmount, TemporalAmountInterface as java_time_temporal_TemporalAmountInterface } from "./temporal/TemporalAmount";
import { ZoneOffset as java_time_ZoneOffset } from "./ZoneOffset";
import { Instant as java_time_Instant } from "./Instant";
import { ZoneId as java_time_ZoneId } from "./ZoneId";
import { ValueRange as java_time_temporal_ValueRange } from "./temporal/ValueRange";
import { Clock as java_time_Clock } from "./Clock";
import { OffsetTime as java_time_OffsetTime } from "./OffsetTime";
import { CharSequence as java_lang_CharSequence, CharSequenceInterface as java_lang_CharSequenceInterface } from "./../lang/CharSequence";
import { TemporalAdjuster as java_time_temporal_TemporalAdjuster, TemporalAdjusterInterface as java_time_temporal_TemporalAdjusterInterface } from "./temporal/TemporalAdjuster";
/**
 * This class just defines types, you should import {@link LocalTime} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class LocalTimeClass extends JavaClass {
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
     * @return original return type: 'java.time.LocalTime'
     */
    plusHours(var0: java_lang_Long | bigint | number): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.LocalTime'
     */
    plusHoursSync(var0: java_lang_Long | bigint | number): LocalTime | null;
    /**
     * @param var0 original type: 'java.time.LocalDate'
     * @return original return type: 'java.time.LocalDateTime'
     */
    atDate(var0: java_time_LocalDate | null): Promise<java_time_LocalDateTime | null>;
    /**
     * @param var0 original type: 'java.time.LocalDate'
     * @return original return type: 'java.time.LocalDateTime'
     */
    atDateSync(var0: java_time_LocalDate | null): java_time_LocalDateTime | null;
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
     * @param var0 original type: 'java.time.LocalTime'
     * @return original return type: 'int'
     */
    compareTo(var0: LocalTimeClass | null): Promise<number>;
    /**
     * @param var0 original type: 'java.time.LocalTime'
     * @return original return type: 'int'
     */
    compareToSync(var0: LocalTimeClass | null): number;
    /**
     * @return original return type: 'int'
     */
    toSecondOfDay(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    toSecondOfDaySync(): number;
    /**
     * @return original return type: 'int'
     */
    getMinute(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getMinuteSync(): number;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.LocalTime'
     */
    plusSeconds(var0: java_lang_Long | bigint | number): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.LocalTime'
     */
    plusSecondsSync(var0: java_lang_Long | bigint | number): LocalTime | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAccessor'
     * @return original return type: 'java.time.LocalTime'
     */
    static from(var0: java_time_temporal_TemporalAccessor | JavaInterfaceProxy<java_time_temporal_TemporalAccessorInterface> | null): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAccessor'
     * @return original return type: 'java.time.LocalTime'
     */
    static fromSync(var0: java_time_temporal_TemporalAccessor | JavaInterfaceProxy<java_time_temporal_TemporalAccessorInterface> | null): LocalTime | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.LocalTime'
     */
    plusNanos(var0: java_lang_Long | bigint | number): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.LocalTime'
     */
    plusNanosSync(var0: java_lang_Long | bigint | number): LocalTime | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.LocalTime'
     */
    static ofNanoOfDay(var0: java_lang_Long | bigint | number): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.LocalTime'
     */
    static ofNanoOfDaySync(var0: java_lang_Long | bigint | number): LocalTime | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.LocalTime'
     */
    withHour(var0: java_lang_Integer | number): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.LocalTime'
     */
    withHourSync(var0: java_lang_Integer | number): LocalTime | null;
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
     * @param var0 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'java.time.LocalTime'
     */
    truncatedTo(var0: java_time_temporal_TemporalUnit | JavaInterfaceProxy<java_time_temporal_TemporalUnitInterface> | null): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'java.time.LocalTime'
     */
    truncatedToSync(var0: java_time_temporal_TemporalUnit | JavaInterfaceProxy<java_time_temporal_TemporalUnitInterface> | null): LocalTime | null;
    /**
     * @param var0 original type: 'java.time.format.DateTimeFormatter'
     * @return original return type: 'java.lang.String'
     */
    format(var0: java_time_format_DateTimeFormatter | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.time.format.DateTimeFormatter'
     * @return original return type: 'java.lang.String'
     */
    formatSync(var0: java_time_format_DateTimeFormatter | null): string | null;
    /**
     * @return original return type: 'int'
     */
    getNano(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getNanoSync(): number;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.LocalTime'
     */
    minusNanos(var0: java_lang_Long | bigint | number): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.LocalTime'
     */
    minusNanosSync(var0: java_lang_Long | bigint | number): LocalTime | null;
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
     * @param var0 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'boolean'
     */
    isSupported(var0: java_time_temporal_TemporalUnit | JavaInterfaceProxy<java_time_temporal_TemporalUnitInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'boolean'
     */
    isSupportedSync(var0: java_time_temporal_TemporalUnit | JavaInterfaceProxy<java_time_temporal_TemporalUnitInterface> | null): boolean;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    plus(var0: java_time_temporal_TemporalAmount | JavaInterfaceProxy<java_time_temporal_TemporalAmountInterface> | null): Promise<java_time_temporal_Temporal | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    plusSync(var0: java_time_temporal_TemporalAmount | JavaInterfaceProxy<java_time_temporal_TemporalAmountInterface> | null): java_time_temporal_Temporal | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.LocalTime'
     */
    plus(var0: java_time_temporal_TemporalAmount | JavaInterfaceProxy<java_time_temporal_TemporalAmountInterface> | null): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.LocalTime'
     */
    plusSync(var0: java_time_temporal_TemporalAmount | JavaInterfaceProxy<java_time_temporal_TemporalAmountInterface> | null): LocalTime | null;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'java.time.LocalTime'
     */
    plus(var0: java_lang_Long | bigint | number, var1: java_time_temporal_TemporalUnit | JavaInterfaceProxy<java_time_temporal_TemporalUnitInterface> | null): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'java.time.LocalTime'
     */
    plusSync(var0: java_lang_Long | bigint | number, var1: java_time_temporal_TemporalUnit | JavaInterfaceProxy<java_time_temporal_TemporalUnitInterface> | null): LocalTime | null;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    plus(var0: java_lang_Long | bigint | number, var1: java_time_temporal_TemporalUnit | JavaInterfaceProxy<java_time_temporal_TemporalUnitInterface> | null): Promise<java_time_temporal_Temporal | null>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    plusSync(var0: java_lang_Long | bigint | number, var1: java_time_temporal_TemporalUnit | JavaInterfaceProxy<java_time_temporal_TemporalUnitInterface> | null): java_time_temporal_Temporal | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.LocalTime'
     */
    static ofSecondOfDay(var0: java_lang_Long | bigint | number): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.LocalTime'
     */
    static ofSecondOfDaySync(var0: java_lang_Long | bigint | number): LocalTime | null;
    /**
     * @return original return type: 'long'
     */
    toNanoOfDay(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    toNanoOfDaySync(): number;
    /**
     * @param var0 original type: 'java.time.LocalDate'
     * @param var1 original type: 'java.time.ZoneOffset'
     * @return original return type: 'long'
     */
    toEpochSecond(var0: java_time_LocalDate | null, var1: java_time_ZoneOffset | null): Promise<number>;
    /**
     * @param var0 original type: 'java.time.LocalDate'
     * @param var1 original type: 'java.time.ZoneOffset'
     * @return original return type: 'long'
     */
    toEpochSecondSync(var0: java_time_LocalDate | null, var1: java_time_ZoneOffset | null): number;
    /**
     * @param var0 original type: 'java.time.LocalTime'
     * @return original return type: 'boolean'
     */
    isAfter(var0: LocalTimeClass | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.time.LocalTime'
     * @return original return type: 'boolean'
     */
    isAfterSync(var0: LocalTimeClass | null): boolean;
    /**
     * @param var0 original type: 'java.time.Instant'
     * @param var1 original type: 'java.time.ZoneId'
     * @return original return type: 'java.time.LocalTime'
     */
    static ofInstant(var0: java_time_Instant | null, var1: java_time_ZoneId | null): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'java.time.Instant'
     * @param var1 original type: 'java.time.ZoneId'
     * @return original return type: 'java.time.LocalTime'
     */
    static ofInstantSync(var0: java_time_Instant | null, var1: java_time_ZoneId | null): LocalTime | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.LocalTime'
     */
    minus(var0: java_time_temporal_TemporalAmount | JavaInterfaceProxy<java_time_temporal_TemporalAmountInterface> | null): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.LocalTime'
     */
    minusSync(var0: java_time_temporal_TemporalAmount | JavaInterfaceProxy<java_time_temporal_TemporalAmountInterface> | null): LocalTime | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    minus(var0: java_time_temporal_TemporalAmount | JavaInterfaceProxy<java_time_temporal_TemporalAmountInterface> | null): Promise<java_time_temporal_Temporal | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    minusSync(var0: java_time_temporal_TemporalAmount | JavaInterfaceProxy<java_time_temporal_TemporalAmountInterface> | null): java_time_temporal_Temporal | null;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    minus(var0: java_lang_Long | bigint | number, var1: java_time_temporal_TemporalUnit | JavaInterfaceProxy<java_time_temporal_TemporalUnitInterface> | null): Promise<java_time_temporal_Temporal | null>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    minusSync(var0: java_lang_Long | bigint | number, var1: java_time_temporal_TemporalUnit | JavaInterfaceProxy<java_time_temporal_TemporalUnitInterface> | null): java_time_temporal_Temporal | null;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'java.time.LocalTime'
     */
    minus(var0: java_lang_Long | bigint | number, var1: java_time_temporal_TemporalUnit | JavaInterfaceProxy<java_time_temporal_TemporalUnitInterface> | null): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'java.time.LocalTime'
     */
    minusSync(var0: java_lang_Long | bigint | number, var1: java_time_temporal_TemporalUnit | JavaInterfaceProxy<java_time_temporal_TemporalUnitInterface> | null): LocalTime | null;
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
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.LocalTime'
     */
    minusHours(var0: java_lang_Long | bigint | number): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.LocalTime'
     */
    minusHoursSync(var0: java_lang_Long | bigint | number): LocalTime | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
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
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.LocalTime'
     */
    plusMinutes(var0: java_lang_Long | bigint | number): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.LocalTime'
     */
    plusMinutesSync(var0: java_lang_Long | bigint | number): LocalTime | null;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.LocalTime'
     */
    minusMinutes(var0: java_lang_Long | bigint | number): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.LocalTime'
     */
    minusMinutesSync(var0: java_lang_Long | bigint | number): LocalTime | null;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
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
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'java.time.LocalTime'
     */
    static of(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'java.time.LocalTime'
     */
    static ofSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number): LocalTime | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.time.LocalTime'
     */
    static of(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.time.LocalTime'
     */
    static ofSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): LocalTime | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.time.LocalTime'
     */
    static of(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.time.LocalTime'
     */
    static ofSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number): LocalTime | null;
    /**
     * @return original return type: 'java.time.LocalTime'
     */
    static now(): Promise<LocalTime | null>;
    /**
     * @return original return type: 'java.time.LocalTime'
     */
    static nowSync(): LocalTime | null;
    /**
     * @param var0 original type: 'java.time.Clock'
     * @return original return type: 'java.time.LocalTime'
     */
    static now(var0: java_time_Clock | null): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'java.time.Clock'
     * @return original return type: 'java.time.LocalTime'
     */
    static nowSync(var0: java_time_Clock | null): LocalTime | null;
    /**
     * @param var0 original type: 'java.time.ZoneId'
     * @return original return type: 'java.time.LocalTime'
     */
    static now(var0: java_time_ZoneId | null): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'java.time.ZoneId'
     * @return original return type: 'java.time.LocalTime'
     */
    static nowSync(var0: java_time_ZoneId | null): LocalTime | null;
    /**
     * @return original return type: 'int'
     */
    getHour(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getHourSync(): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.LocalTime'
     */
    withMinute(var0: java_lang_Integer | number): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.LocalTime'
     */
    withMinuteSync(var0: java_lang_Integer | number): LocalTime | null;
    /**
     * @param var0 original type: 'java.time.ZoneOffset'
     * @return original return type: 'java.time.OffsetTime'
     */
    atOffset(var0: java_time_ZoneOffset | null): Promise<java_time_OffsetTime | null>;
    /**
     * @param var0 original type: 'java.time.ZoneOffset'
     * @return original return type: 'java.time.OffsetTime'
     */
    atOffsetSync(var0: java_time_ZoneOffset | null): java_time_OffsetTime | null;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @param var1 original type: 'java.time.format.DateTimeFormatter'
     * @return original return type: 'java.time.LocalTime'
     */
    static parse(var0: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null, var1: java_time_format_DateTimeFormatter | null): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @param var1 original type: 'java.time.format.DateTimeFormatter'
     * @return original return type: 'java.time.LocalTime'
     */
    static parseSync(var0: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null, var1: java_time_format_DateTimeFormatter | null): LocalTime | null;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @return original return type: 'java.time.LocalTime'
     */
    static parse(var0: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @return original return type: 'java.time.LocalTime'
     */
    static parseSync(var0: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null): LocalTime | null;
    /**
     * @param var0 original type: 'java.time.LocalTime'
     * @return original return type: 'boolean'
     */
    isBefore(var0: LocalTimeClass | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.time.LocalTime'
     * @return original return type: 'boolean'
     */
    isBeforeSync(var0: LocalTimeClass | null): boolean;
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
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.LocalTime'
     */
    withNano(var0: java_lang_Integer | number): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.LocalTime'
     */
    withNanoSync(var0: java_lang_Integer | number): LocalTime | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @param var1 original type: 'long'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    with(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null, var1: java_lang_Long | bigint | number): Promise<java_time_temporal_Temporal | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @param var1 original type: 'long'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    withSync(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null, var1: java_lang_Long | bigint | number): java_time_temporal_Temporal | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @param var1 original type: 'long'
     * @return original return type: 'java.time.LocalTime'
     */
    with(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null, var1: java_lang_Long | bigint | number): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @param var1 original type: 'long'
     * @return original return type: 'java.time.LocalTime'
     */
    withSync(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null, var1: java_lang_Long | bigint | number): LocalTime | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAdjuster'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    with(var0: java_time_temporal_TemporalAdjuster | JavaInterfaceProxy<java_time_temporal_TemporalAdjusterInterface> | null): Promise<java_time_temporal_Temporal | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAdjuster'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    withSync(var0: java_time_temporal_TemporalAdjuster | JavaInterfaceProxy<java_time_temporal_TemporalAdjusterInterface> | null): java_time_temporal_Temporal | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAdjuster'
     * @return original return type: 'java.time.LocalTime'
     */
    with(var0: java_time_temporal_TemporalAdjuster | JavaInterfaceProxy<java_time_temporal_TemporalAdjusterInterface> | null): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAdjuster'
     * @return original return type: 'java.time.LocalTime'
     */
    withSync(var0: java_time_temporal_TemporalAdjuster | JavaInterfaceProxy<java_time_temporal_TemporalAdjusterInterface> | null): LocalTime | null;
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
    getSecond(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getSecondSync(): number;
    /**
     * @param var0 original type: 'java.time.temporal.Temporal'
     * @param var1 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'long'
     */
    until(var0: java_time_temporal_Temporal | JavaInterfaceProxy<java_time_temporal_TemporalInterface> | null, var1: java_time_temporal_TemporalUnit | JavaInterfaceProxy<java_time_temporal_TemporalUnitInterface> | null): Promise<number>;
    /**
     * @param var0 original type: 'java.time.temporal.Temporal'
     * @param var1 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'long'
     */
    untilSync(var0: java_time_temporal_Temporal | JavaInterfaceProxy<java_time_temporal_TemporalInterface> | null, var1: java_time_temporal_TemporalUnit | JavaInterfaceProxy<java_time_temporal_TemporalUnitInterface> | null): number;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.LocalTime'
     */
    minusSeconds(var0: java_lang_Long | bigint | number): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.LocalTime'
     */
    minusSecondsSync(var0: java_lang_Long | bigint | number): LocalTime | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.LocalTime'
     */
    withSecond(var0: java_lang_Integer | number): Promise<LocalTime | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.LocalTime'
     */
    withSecondSync(var0: java_lang_Integer | number): LocalTime | null;
    /**
     * Original type: 'java.time.LocalTime'
     */
    static readonly MIN: LocalTimeClass | null;
    /**
     * Original type: 'java.time.LocalTime'
     */
    static readonly NOON: LocalTimeClass | null;
    /**
     * Original type: 'java.time.LocalTime'
     */
    static readonly MAX: LocalTimeClass | null;
    /**
     * Original type: 'java.time.LocalTime'
     */
    static readonly MIDNIGHT: LocalTimeClass | null;
}
declare const LocalTime_base: typeof LocalTimeClass;
/**
 * Class java.time.LocalTime.
 *
 * This actually imports the java class for further use.
 * The class {@link LocalTimeClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class LocalTime extends LocalTime_base {
}
export default LocalTime;
//# sourceMappingURL=LocalTime.d.ts.map