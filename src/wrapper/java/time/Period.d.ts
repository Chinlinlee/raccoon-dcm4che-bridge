import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { TemporalAmount as java_time_temporal_TemporalAmount, TemporalAmountInterface as java_time_temporal_TemporalAmountInterface } from "./temporal/TemporalAmount";
import { ChronoPeriod as java_time_chrono_ChronoPeriod } from "./chrono/ChronoPeriod";
import { Class as java_lang_Class } from "./../lang/Class";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { TemporalUnit as java_time_temporal_TemporalUnit, TemporalUnitInterface as java_time_temporal_TemporalUnitInterface } from "./temporal/TemporalUnit";
import { IsoChronology as java_time_chrono_IsoChronology } from "./chrono/IsoChronology";
import { Chronology as java_time_chrono_Chronology } from "./chrono/Chronology";
import { LocalDate as java_time_LocalDate } from "./LocalDate";
import { CharSequence as java_lang_CharSequence, CharSequenceInterface as java_lang_CharSequenceInterface } from "./../lang/CharSequence";
import { Temporal as java_time_temporal_Temporal, TemporalInterface as java_time_temporal_TemporalInterface } from "./temporal/Temporal";
import { List as java_util_List } from "./../util/List";
/**
 * This class just defines types, you should import {@link Period} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PeriodClass extends JavaClass {
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.Period'
     */
    minus(var0: java_time_temporal_TemporalAmount | JavaInterfaceProxy<java_time_temporal_TemporalAmountInterface> | null): Promise<Period | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.Period'
     */
    minusSync(var0: java_time_temporal_TemporalAmount | JavaInterfaceProxy<java_time_temporal_TemporalAmountInterface> | null): Period | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.chrono.ChronoPeriod'
     */
    minus(var0: java_time_temporal_TemporalAmount | JavaInterfaceProxy<java_time_temporal_TemporalAmountInterface> | null): Promise<java_time_chrono_ChronoPeriod | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.chrono.ChronoPeriod'
     */
    minusSync(var0: java_time_temporal_TemporalAmount | JavaInterfaceProxy<java_time_temporal_TemporalAmountInterface> | null): java_time_chrono_ChronoPeriod | null;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
    /**
     * @return original return type: 'java.time.Period'
     */
    negated(): Promise<Period | null>;
    /**
     * @return original return type: 'java.time.Period'
     */
    negatedSync(): Period | null;
    /**
     * @return original return type: 'java.time.chrono.ChronoPeriod'
     */
    negated(): Promise<java_time_chrono_ChronoPeriod | null>;
    /**
     * @return original return type: 'java.time.chrono.ChronoPeriod'
     */
    negatedSync(): java_time_chrono_ChronoPeriod | null;
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
     * @return original return type: 'java.time.chrono.ChronoPeriod'
     */
    normalized(): Promise<java_time_chrono_ChronoPeriod | null>;
    /**
     * @return original return type: 'java.time.chrono.ChronoPeriod'
     */
    normalizedSync(): java_time_chrono_ChronoPeriod | null;
    /**
     * @return original return type: 'java.time.Period'
     */
    normalized(): Promise<Period | null>;
    /**
     * @return original return type: 'java.time.Period'
     */
    normalizedSync(): Period | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.Period'
     */
    static ofYears(var0: java_lang_Integer | number): Promise<Period | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.Period'
     */
    static ofYearsSync(var0: java_lang_Integer | number): Period | null;
    /**
     * @return original return type: 'int'
     */
    getMonths(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getMonthsSync(): number;
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
     * @return original return type: 'java.time.Period'
     */
    plusDays(var0: java_lang_Long | bigint | number): Promise<Period | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.Period'
     */
    plusDaysSync(var0: java_lang_Long | bigint | number): Period | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.chrono.ChronoPeriod'
     */
    multipliedBy(var0: java_lang_Integer | number): Promise<java_time_chrono_ChronoPeriod | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.chrono.ChronoPeriod'
     */
    multipliedBySync(var0: java_lang_Integer | number): java_time_chrono_ChronoPeriod | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.Period'
     */
    multipliedBy(var0: java_lang_Integer | number): Promise<Period | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.Period'
     */
    multipliedBySync(var0: java_lang_Integer | number): Period | null;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'int'
     */
    getYears(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getYearsSync(): number;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'long'
     */
    get(var0: java_time_temporal_TemporalUnit | JavaInterfaceProxy<java_time_temporal_TemporalUnitInterface> | null): Promise<number>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'long'
     */
    getSync(var0: java_time_temporal_TemporalUnit | JavaInterfaceProxy<java_time_temporal_TemporalUnitInterface> | null): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.time.Period'
     */
    static of(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<Period | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.time.Period'
     */
    static ofSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Period | null;
    /**
     * @return original return type: 'boolean'
     */
    isZero(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isZeroSync(): boolean;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.Period'
     */
    static from(var0: java_time_temporal_TemporalAmount | JavaInterfaceProxy<java_time_temporal_TemporalAmountInterface> | null): Promise<Period | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.Period'
     */
    static fromSync(var0: java_time_temporal_TemporalAmount | JavaInterfaceProxy<java_time_temporal_TemporalAmountInterface> | null): Period | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.Period'
     */
    withDays(var0: java_lang_Integer | number): Promise<Period | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.Period'
     */
    withDaysSync(var0: java_lang_Integer | number): Period | null;
    /**
     * @return original return type: 'java.time.chrono.IsoChronology'
     */
    getChronology(): Promise<java_time_chrono_IsoChronology | null>;
    /**
     * @return original return type: 'java.time.chrono.IsoChronology'
     */
    getChronologySync(): java_time_chrono_IsoChronology | null;
    /**
     * @return original return type: 'java.time.chrono.Chronology'
     */
    getChronology(): Promise<java_time_chrono_Chronology | null>;
    /**
     * @return original return type: 'java.time.chrono.Chronology'
     */
    getChronologySync(): java_time_chrono_Chronology | null;
    /**
     * @param var0 original type: 'java.time.LocalDate'
     * @param var1 original type: 'java.time.LocalDate'
     * @return original return type: 'java.time.Period'
     */
    static between(var0: java_time_LocalDate | null, var1: java_time_LocalDate | null): Promise<Period | null>;
    /**
     * @param var0 original type: 'java.time.LocalDate'
     * @param var1 original type: 'java.time.LocalDate'
     * @return original return type: 'java.time.Period'
     */
    static betweenSync(var0: java_time_LocalDate | null, var1: java_time_LocalDate | null): Period | null;
    /**
     * @return original return type: 'boolean'
     */
    isNegative(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isNegativeSync(): boolean;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.Period'
     */
    withMonths(var0: java_lang_Integer | number): Promise<Period | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.Period'
     */
    withMonthsSync(var0: java_lang_Integer | number): Period | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.Period'
     */
    minusYears(var0: java_lang_Long | bigint | number): Promise<Period | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.Period'
     */
    minusYearsSync(var0: java_lang_Long | bigint | number): Period | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.Period'
     */
    plusMonths(var0: java_lang_Long | bigint | number): Promise<Period | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.Period'
     */
    plusMonthsSync(var0: java_lang_Long | bigint | number): Period | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.Period'
     */
    plusYears(var0: java_lang_Long | bigint | number): Promise<Period | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.Period'
     */
    plusYearsSync(var0: java_lang_Long | bigint | number): Period | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.Period'
     */
    static ofDays(var0: java_lang_Integer | number): Promise<Period | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.Period'
     */
    static ofDaysSync(var0: java_lang_Integer | number): Period | null;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @return original return type: 'java.time.Period'
     */
    static parse(var0: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null): Promise<Period | null>;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @return original return type: 'java.time.Period'
     */
    static parseSync(var0: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null): Period | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.chrono.ChronoPeriod'
     */
    plus(var0: java_time_temporal_TemporalAmount | JavaInterfaceProxy<java_time_temporal_TemporalAmountInterface> | null): Promise<java_time_chrono_ChronoPeriod | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.chrono.ChronoPeriod'
     */
    plusSync(var0: java_time_temporal_TemporalAmount | JavaInterfaceProxy<java_time_temporal_TemporalAmountInterface> | null): java_time_chrono_ChronoPeriod | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.Period'
     */
    plus(var0: java_time_temporal_TemporalAmount | JavaInterfaceProxy<java_time_temporal_TemporalAmountInterface> | null): Promise<Period | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.Period'
     */
    plusSync(var0: java_time_temporal_TemporalAmount | JavaInterfaceProxy<java_time_temporal_TemporalAmountInterface> | null): Period | null;
    /**
     * @return original return type: 'long'
     */
    toTotalMonths(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    toTotalMonthsSync(): number;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.Period'
     */
    minusDays(var0: java_lang_Long | bigint | number): Promise<Period | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.Period'
     */
    minusDaysSync(var0: java_lang_Long | bigint | number): Period | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.Period'
     */
    minusMonths(var0: java_lang_Long | bigint | number): Promise<Period | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.time.Period'
     */
    minusMonthsSync(var0: java_lang_Long | bigint | number): Period | null;
    /**
     * @return original return type: 'int'
     */
    getDays(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getDaysSync(): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.Period'
     */
    static ofWeeks(var0: java_lang_Integer | number): Promise<Period | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.Period'
     */
    static ofWeeksSync(var0: java_lang_Integer | number): Period | null;
    /**
     * @param var0 original type: 'java.time.temporal.Temporal'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    subtractFrom(var0: java_time_temporal_Temporal | JavaInterfaceProxy<java_time_temporal_TemporalInterface> | null): Promise<java_time_temporal_Temporal | null>;
    /**
     * @param var0 original type: 'java.time.temporal.Temporal'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    subtractFromSync(var0: java_time_temporal_Temporal | JavaInterfaceProxy<java_time_temporal_TemporalInterface> | null): java_time_temporal_Temporal | null;
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
     * @return original return type: 'java.util.List'
     */
    getUnits(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getUnitsSync(): java_util_List | null;
    /**
     * @param var0 original type: 'java.time.temporal.Temporal'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    addTo(var0: java_time_temporal_Temporal | JavaInterfaceProxy<java_time_temporal_TemporalInterface> | null): Promise<java_time_temporal_Temporal | null>;
    /**
     * @param var0 original type: 'java.time.temporal.Temporal'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    addToSync(var0: java_time_temporal_Temporal | JavaInterfaceProxy<java_time_temporal_TemporalInterface> | null): java_time_temporal_Temporal | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.Period'
     */
    static ofMonths(var0: java_lang_Integer | number): Promise<Period | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.Period'
     */
    static ofMonthsSync(var0: java_lang_Integer | number): Period | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.Period'
     */
    withYears(var0: java_lang_Integer | number): Promise<Period | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.Period'
     */
    withYearsSync(var0: java_lang_Integer | number): Period | null;
    /**
     * Original type: 'java.time.Period'
     */
    static readonly ZERO: PeriodClass | null;
}
declare const Period_base: typeof PeriodClass;
/**
 * Class java.time.Period.
 *
 * This actually imports the java class for further use.
 * The class {@link PeriodClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Period extends Period_base {
}
export default Period;
//# sourceMappingURL=Period.d.ts.map