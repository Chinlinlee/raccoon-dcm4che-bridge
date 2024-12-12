import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Temporal as java_time_temporal_Temporal, TemporalInterface as java_time_temporal_TemporalInterface } from "./../temporal/Temporal";
import { Long as java_lang_Long } from "./../../lang/Long";
import { TemporalUnit as java_time_temporal_TemporalUnit, TemporalUnitInterface as java_time_temporal_TemporalUnitInterface } from "./../temporal/TemporalUnit";
import { TemporalAmount as java_time_temporal_TemporalAmount, TemporalAmountInterface as java_time_temporal_TemporalAmountInterface } from "./../temporal/TemporalAmount";
import { ZoneOffset as java_time_ZoneOffset } from "./../ZoneOffset";
import { LocalTime as java_time_LocalTime } from "./../LocalTime";
import { ValueRange as java_time_temporal_ValueRange } from "./../temporal/ValueRange";
import { TemporalField as java_time_temporal_TemporalField, TemporalFieldInterface as java_time_temporal_TemporalFieldInterface } from "./../temporal/TemporalField";
import { ZoneId as java_time_ZoneId } from "./../ZoneId";
import { TemporalAccessor as java_time_temporal_TemporalAccessor, TemporalAccessorInterface as java_time_temporal_TemporalAccessorInterface } from "./../temporal/TemporalAccessor";
import { Chronology as java_time_chrono_Chronology } from "./Chronology";
import { TemporalQuery as java_time_temporal_TemporalQuery, TemporalQueryInterface as java_time_temporal_TemporalQueryInterface } from "./../temporal/TemporalQuery";
import { DateTimeFormatter as java_time_format_DateTimeFormatter } from "./../format/DateTimeFormatter";
import { Instant as java_time_Instant } from "./../Instant";
import { TemporalAdjuster as java_time_temporal_TemporalAdjuster, TemporalAdjusterInterface as java_time_temporal_TemporalAdjusterInterface } from "./../temporal/TemporalAdjuster";
import { ChronoLocalDate as java_time_chrono_ChronoLocalDate } from "./ChronoLocalDate";
import { ChronoLocalDateTime as java_time_chrono_ChronoLocalDateTime } from "./ChronoLocalDateTime";
import { Comparator as java_util_Comparator } from "./../../util/Comparator";
/**
 * This class just defines types, you should import {@link ChronoZonedDateTime} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ChronoZonedDateTimeClass extends JavaClass {
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
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    minus(var0: java_lang_Long | bigint | number, var1: java_time_temporal_TemporalUnit | JavaInterfaceProxy<java_time_temporal_TemporalUnitInterface> | null): Promise<ChronoZonedDateTime | null>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    minusSync(var0: java_lang_Long | bigint | number, var1: java_time_temporal_TemporalUnit | JavaInterfaceProxy<java_time_temporal_TemporalUnitInterface> | null): ChronoZonedDateTime | null;
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
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    minus(var0: java_time_temporal_TemporalAmount | JavaInterfaceProxy<java_time_temporal_TemporalAmountInterface> | null): Promise<ChronoZonedDateTime | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    minusSync(var0: java_time_temporal_TemporalAmount | JavaInterfaceProxy<java_time_temporal_TemporalAmountInterface> | null): ChronoZonedDateTime | null;
    /**
     * @return original return type: 'java.time.ZoneOffset'
     */
    getOffset(): Promise<java_time_ZoneOffset | null>;
    /**
     * @return original return type: 'java.time.ZoneOffset'
     */
    getOffsetSync(): java_time_ZoneOffset | null;
    /**
     * @param var0 original type: 'java.time.chrono.ChronoZonedDateTime'
     * @return original return type: 'boolean'
     */
    isEqual(var0: ChronoZonedDateTimeClass | JavaInterfaceProxy<ChronoZonedDateTimeInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.time.chrono.ChronoZonedDateTime'
     * @return original return type: 'boolean'
     */
    isEqualSync(var0: ChronoZonedDateTimeClass | JavaInterfaceProxy<ChronoZonedDateTimeInterface> | null): boolean;
    /**
     * @return original return type: 'java.time.LocalTime'
     */
    toLocalTime(): Promise<java_time_LocalTime | null>;
    /**
     * @return original return type: 'java.time.LocalTime'
     */
    toLocalTimeSync(): java_time_LocalTime | null;
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
     * @param var0 original type: 'java.time.chrono.ChronoZonedDateTime'
     * @return original return type: 'int'
     */
    compareTo(var0: ChronoZonedDateTimeClass | JavaInterfaceProxy<ChronoZonedDateTimeInterface> | null): Promise<number>;
    /**
     * @param var0 original type: 'java.time.chrono.ChronoZonedDateTime'
     * @return original return type: 'int'
     */
    compareToSync(var0: ChronoZonedDateTimeClass | JavaInterfaceProxy<ChronoZonedDateTimeInterface> | null): number;
    /**
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    withLaterOffsetAtOverlap(): Promise<ChronoZonedDateTime | null>;
    /**
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    withLaterOffsetAtOverlapSync(): ChronoZonedDateTime | null;
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
     * @param var0 original type: 'java.time.ZoneId'
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    withZoneSameLocal(var0: java_time_ZoneId | null): Promise<ChronoZonedDateTime | null>;
    /**
     * @param var0 original type: 'java.time.ZoneId'
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    withZoneSameLocalSync(var0: java_time_ZoneId | null): ChronoZonedDateTime | null;
    /**
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    withEarlierOffsetAtOverlap(): Promise<ChronoZonedDateTime | null>;
    /**
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    withEarlierOffsetAtOverlapSync(): ChronoZonedDateTime | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAccessor'
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    static from(var0: java_time_temporal_TemporalAccessor | JavaInterfaceProxy<java_time_temporal_TemporalAccessorInterface> | null): Promise<ChronoZonedDateTime | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAccessor'
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    static fromSync(var0: java_time_temporal_TemporalAccessor | JavaInterfaceProxy<java_time_temporal_TemporalAccessorInterface> | null): ChronoZonedDateTime | null;
    /**
     * @return original return type: 'java.time.chrono.Chronology'
     */
    getChronology(): Promise<java_time_chrono_Chronology | null>;
    /**
     * @return original return type: 'java.time.chrono.Chronology'
     */
    getChronologySync(): java_time_chrono_Chronology | null;
    /**
     * @param var0 original type: 'java.time.ZoneId'
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    withZoneSameInstant(var0: java_time_ZoneId | null): Promise<ChronoZonedDateTime | null>;
    /**
     * @param var0 original type: 'java.time.ZoneId'
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    withZoneSameInstantSync(var0: java_time_ZoneId | null): ChronoZonedDateTime | null;
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
     * @return original return type: 'java.time.ZoneId'
     */
    getZone(): Promise<java_time_ZoneId | null>;
    /**
     * @return original return type: 'java.time.ZoneId'
     */
    getZoneSync(): java_time_ZoneId | null;
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
     * @return original return type: 'java.time.Instant'
     */
    toInstant(): Promise<java_time_Instant | null>;
    /**
     * @return original return type: 'java.time.Instant'
     */
    toInstantSync(): java_time_Instant | null;
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
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    plus(var0: java_time_temporal_TemporalAmount | JavaInterfaceProxy<java_time_temporal_TemporalAmountInterface> | null): Promise<ChronoZonedDateTime | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    plusSync(var0: java_time_temporal_TemporalAmount | JavaInterfaceProxy<java_time_temporal_TemporalAmountInterface> | null): ChronoZonedDateTime | null;
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
     * @param var1 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    plus(var0: java_lang_Long | bigint | number, var1: java_time_temporal_TemporalUnit | JavaInterfaceProxy<java_time_temporal_TemporalUnitInterface> | null): Promise<ChronoZonedDateTime | null>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    plusSync(var0: java_lang_Long | bigint | number, var1: java_time_temporal_TemporalUnit | JavaInterfaceProxy<java_time_temporal_TemporalUnitInterface> | null): ChronoZonedDateTime | null;
    /**
     * @param var0 original type: 'java.time.chrono.ChronoZonedDateTime'
     * @return original return type: 'boolean'
     */
    isBefore(var0: ChronoZonedDateTimeClass | JavaInterfaceProxy<ChronoZonedDateTimeInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.time.chrono.ChronoZonedDateTime'
     * @return original return type: 'boolean'
     */
    isBeforeSync(var0: ChronoZonedDateTimeClass | JavaInterfaceProxy<ChronoZonedDateTimeInterface> | null): boolean;
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
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @param var1 original type: 'long'
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    with(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null, var1: java_lang_Long | bigint | number): Promise<ChronoZonedDateTime | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @param var1 original type: 'long'
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    withSync(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null, var1: java_lang_Long | bigint | number): ChronoZonedDateTime | null;
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
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    with(var0: java_time_temporal_TemporalAdjuster | JavaInterfaceProxy<java_time_temporal_TemporalAdjusterInterface> | null): Promise<ChronoZonedDateTime | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAdjuster'
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    withSync(var0: java_time_temporal_TemporalAdjuster | JavaInterfaceProxy<java_time_temporal_TemporalAdjusterInterface> | null): ChronoZonedDateTime | null;
    /**
     * @return original return type: 'java.time.chrono.ChronoLocalDate'
     */
    toLocalDate(): Promise<java_time_chrono_ChronoLocalDate | null>;
    /**
     * @return original return type: 'java.time.chrono.ChronoLocalDate'
     */
    toLocalDateSync(): java_time_chrono_ChronoLocalDate | null;
    /**
     * @return original return type: 'long'
     */
    toEpochSecond(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    toEpochSecondSync(): number;
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
     * @return original return type: 'java.time.chrono.ChronoLocalDateTime'
     */
    toLocalDateTime(): Promise<java_time_chrono_ChronoLocalDateTime | null>;
    /**
     * @return original return type: 'java.time.chrono.ChronoLocalDateTime'
     */
    toLocalDateTimeSync(): java_time_chrono_ChronoLocalDateTime | null;
    /**
     * @return original return type: 'java.util.Comparator'
     */
    static timeLineOrder(): Promise<java_util_Comparator | null>;
    /**
     * @return original return type: 'java.util.Comparator'
     */
    static timeLineOrderSync(): java_util_Comparator | null;
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
     * @param var0 original type: 'java.time.chrono.ChronoZonedDateTime'
     * @return original return type: 'boolean'
     */
    isAfter(var0: ChronoZonedDateTimeClass | JavaInterfaceProxy<ChronoZonedDateTimeInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.time.chrono.ChronoZonedDateTime'
     * @return original return type: 'boolean'
     */
    isAfterSync(var0: ChronoZonedDateTimeClass | JavaInterfaceProxy<ChronoZonedDateTimeInterface> | null): boolean;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createChronoZonedDateTimeProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface ChronoZonedDateTimeInterface {
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    minus?(var0: java_lang_Long | bigint | number, var1: java_time_temporal_TemporalUnit | JavaInterfaceProxy<java_time_temporal_TemporalUnitInterface> | null): java_time_temporal_Temporal | null;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    minus?(var0: java_lang_Long | bigint | number, var1: java_time_temporal_TemporalUnit | JavaInterfaceProxy<java_time_temporal_TemporalUnitInterface> | null): ChronoZonedDateTime | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    minus?(var0: java_time_temporal_TemporalAmount | JavaInterfaceProxy<java_time_temporal_TemporalAmountInterface> | null): java_time_temporal_Temporal | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    minus?(var0: java_time_temporal_TemporalAmount | JavaInterfaceProxy<java_time_temporal_TemporalAmountInterface> | null): ChronoZonedDateTime | null;
    /**
     * @return original return type: 'java.time.ZoneOffset'
     */
    getOffset(): java_time_ZoneOffset | null;
    /**
     * @param var0 original type: 'java.time.chrono.ChronoZonedDateTime'
     * @return original return type: 'boolean'
     */
    isEqual?(var0: ChronoZonedDateTimeClass | JavaInterfaceProxy<ChronoZonedDateTimeInterface> | null): boolean;
    /**
     * @return original return type: 'java.time.LocalTime'
     */
    toLocalTime?(): java_time_LocalTime | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'java.time.temporal.ValueRange'
     */
    range?(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null): java_time_temporal_ValueRange | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    compareTo?(var0: BasicOrJavaType | null): number;
    /**
     * @param var0 original type: 'java.time.chrono.ChronoZonedDateTime'
     * @return original return type: 'int'
     */
    compareTo?(var0: ChronoZonedDateTimeClass | JavaInterfaceProxy<ChronoZonedDateTimeInterface> | null): number;
    /**
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    withLaterOffsetAtOverlap(): ChronoZonedDateTime | null;
    /**
     * @return original return type: 'int'
     */
    hashCode(): number;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'int'
     */
    get?(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null): number;
    /**
     * @param var0 original type: 'java.time.ZoneId'
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    withZoneSameLocal(var0: java_time_ZoneId | null): ChronoZonedDateTime | null;
    /**
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    withEarlierOffsetAtOverlap(): ChronoZonedDateTime | null;
    /**
     * @return original return type: 'java.time.chrono.Chronology'
     */
    getChronology?(): java_time_chrono_Chronology | null;
    /**
     * @param var0 original type: 'java.time.ZoneId'
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    withZoneSameInstant(var0: java_time_ZoneId | null): ChronoZonedDateTime | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalQuery'
     * @return original return type: 'java.lang.Object'
     */
    query?(var0: java_time_temporal_TemporalQuery | JavaInterfaceProxy<java_time_temporal_TemporalQueryInterface> | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.time.format.DateTimeFormatter'
     * @return original return type: 'java.lang.String'
     */
    format?(var0: java_time_format_DateTimeFormatter | null): string | null;
    /**
     * @return original return type: 'java.time.ZoneId'
     */
    getZone(): java_time_ZoneId | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'boolean'
     */
    isSupported?(var0: java_time_temporal_TemporalUnit | JavaInterfaceProxy<java_time_temporal_TemporalUnitInterface> | null): boolean;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'boolean'
     */
    isSupported?(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null): boolean;
    /**
     * @return original return type: 'java.time.Instant'
     */
    toInstant?(): java_time_Instant | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    plus?(var0: java_time_temporal_TemporalAmount | JavaInterfaceProxy<java_time_temporal_TemporalAmountInterface> | null): java_time_temporal_Temporal | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    plus?(var0: java_time_temporal_TemporalAmount | JavaInterfaceProxy<java_time_temporal_TemporalAmountInterface> | null): ChronoZonedDateTime | null;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    plus?(var0: java_lang_Long | bigint | number, var1: java_time_temporal_TemporalUnit | JavaInterfaceProxy<java_time_temporal_TemporalUnitInterface> | null): java_time_temporal_Temporal | null;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    plus?(var0: java_lang_Long | bigint | number, var1: java_time_temporal_TemporalUnit | JavaInterfaceProxy<java_time_temporal_TemporalUnitInterface> | null): ChronoZonedDateTime | null;
    /**
     * @param var0 original type: 'java.time.chrono.ChronoZonedDateTime'
     * @return original return type: 'boolean'
     */
    isBefore?(var0: ChronoZonedDateTimeClass | JavaInterfaceProxy<ChronoZonedDateTimeInterface> | null): boolean;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'long'
     */
    getLong?(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null): number;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @param var1 original type: 'long'
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    with?(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null, var1: java_lang_Long | bigint | number): ChronoZonedDateTime | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @param var1 original type: 'long'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    with?(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null, var1: java_lang_Long | bigint | number): java_time_temporal_Temporal | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAdjuster'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    with?(var0: java_time_temporal_TemporalAdjuster | JavaInterfaceProxy<java_time_temporal_TemporalAdjusterInterface> | null): java_time_temporal_Temporal | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAdjuster'
     * @return original return type: 'java.time.chrono.ChronoZonedDateTime'
     */
    with?(var0: java_time_temporal_TemporalAdjuster | JavaInterfaceProxy<java_time_temporal_TemporalAdjusterInterface> | null): ChronoZonedDateTime | null;
    /**
     * @return original return type: 'java.time.chrono.ChronoLocalDate'
     */
    toLocalDate?(): java_time_chrono_ChronoLocalDate | null;
    /**
     * @return original return type: 'long'
     */
    toEpochSecond?(): number;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equals(var0: BasicOrJavaType | null): boolean;
    /**
     * @return original return type: 'java.time.chrono.ChronoLocalDateTime'
     */
    toLocalDateTime(): java_time_chrono_ChronoLocalDateTime | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): string;
    /**
     * @param var0 original type: 'java.time.temporal.Temporal'
     * @param var1 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'long'
     */
    until(var0: java_time_temporal_Temporal | JavaInterfaceProxy<java_time_temporal_TemporalInterface> | null, var1: java_time_temporal_TemporalUnit | JavaInterfaceProxy<java_time_temporal_TemporalUnitInterface> | null): number;
    /**
     * @param var0 original type: 'java.time.chrono.ChronoZonedDateTime'
     * @return original return type: 'boolean'
     */
    isAfter?(var0: ChronoZonedDateTimeClass | JavaInterfaceProxy<ChronoZonedDateTimeInterface> | null): boolean;
}
/**
 * Create a proxy for the {@link ChronoZonedDateTime} interface.
 * All required methods in {@link ChronoZonedDateTimeInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createChronoZonedDateTimeProxy(methods: ChronoZonedDateTimeInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<ChronoZonedDateTimeInterface>;
declare const ChronoZonedDateTime_base: typeof ChronoZonedDateTimeClass;
/**
 * Class java.time.chrono.ChronoZonedDateTime.
 *
 * This actually imports the java class for further use.
 * The class {@link ChronoZonedDateTimeClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ChronoZonedDateTime extends ChronoZonedDateTime_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default ChronoZonedDateTime;
//# sourceMappingURL=ChronoZonedDateTime.d.ts.map