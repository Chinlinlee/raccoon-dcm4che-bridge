import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./../lang/Class";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { ZoneId as java_time_ZoneId } from "./ZoneId";
import { Temporal as java_time_temporal_Temporal, TemporalInterface as java_time_temporal_TemporalInterface } from "./temporal/Temporal";
import { ValueRange as java_time_temporal_ValueRange } from "./temporal/ValueRange";
import { TemporalField as java_time_temporal_TemporalField, TemporalFieldInterface as java_time_temporal_TemporalFieldInterface } from "./temporal/TemporalField";
import { Set as java_util_Set } from "./../util/Set";
import { Map as java_util_Map, MapInterface as java_util_MapInterface } from "./../util/Map";
import { TemporalAccessor as java_time_temporal_TemporalAccessor, TemporalAccessorInterface as java_time_temporal_TemporalAccessorInterface } from "./temporal/TemporalAccessor";
import { ZoneRules as java_time_zone_ZoneRules } from "./zone/ZoneRules";
import { TemporalQuery as java_time_temporal_TemporalQuery, TemporalQueryInterface as java_time_temporal_TemporalQueryInterface } from "./temporal/TemporalQuery";
import { TextStyle as java_time_format_TextStyle } from "./format/TextStyle";
import { Locale as java_util_Locale } from "./../util/Locale";
/**
 * This class just defines types, you should import {@link ZoneOffset} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ZoneOffsetClass extends JavaClass {
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
     * @return original return type: 'java.time.ZoneId'
     */
    normalized(): Promise<java_time_ZoneId | null>;
    /**
     * @return original return type: 'java.time.ZoneId'
     */
    normalizedSync(): java_time_ZoneId | null;
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
     * @return original return type: 'java.lang.String'
     */
    getId(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getIdSync(): string | null;
    /**
     * @param var0 original type: 'java.time.ZoneOffset'
     * @return original return type: 'int'
     */
    compareTo(var0: ZoneOffsetClass | null): Promise<number>;
    /**
     * @param var0 original type: 'java.time.ZoneOffset'
     * @return original return type: 'int'
     */
    compareToSync(var0: ZoneOffsetClass | null): number;
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
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'java.time.ZoneId'
     */
    static systemDefault(): Promise<java_time_ZoneId | null>;
    /**
     * @return original return type: 'java.time.ZoneId'
     */
    static systemDefaultSync(): java_time_ZoneId | null;
    /**
     * @return original return type: 'java.util.Set'
     */
    static getAvailableZoneIds(): Promise<java_util_Set | null>;
    /**
     * @return original return type: 'java.util.Set'
     */
    static getAvailableZoneIdsSync(): java_util_Set | null;
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
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.time.ZoneOffset'
     */
    static of(var0: string | null): Promise<ZoneOffset | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.time.ZoneOffset'
     */
    static ofSync(var0: string | null): ZoneOffset | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.time.ZoneId'
     */
    static of(var0: string | null): Promise<java_time_ZoneId | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.time.ZoneId'
     */
    static ofSync(var0: string | null): java_time_ZoneId | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.util.Map'
     * @return original return type: 'java.time.ZoneId'
     */
    static of(var0: string | null, var1: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null): Promise<java_time_ZoneId | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.util.Map'
     * @return original return type: 'java.time.ZoneId'
     */
    static ofSync(var0: string | null, var1: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null): java_time_ZoneId | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAccessor'
     * @return original return type: 'java.time.ZoneOffset'
     */
    static from(var0: java_time_temporal_TemporalAccessor | JavaInterfaceProxy<java_time_temporal_TemporalAccessorInterface> | null): Promise<ZoneOffset | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAccessor'
     * @return original return type: 'java.time.ZoneOffset'
     */
    static fromSync(var0: java_time_temporal_TemporalAccessor | JavaInterfaceProxy<java_time_temporal_TemporalAccessorInterface> | null): ZoneOffset | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAccessor'
     * @return original return type: 'java.time.ZoneId'
     */
    static from(var0: java_time_temporal_TemporalAccessor | JavaInterfaceProxy<java_time_temporal_TemporalAccessorInterface> | null): Promise<java_time_ZoneId | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAccessor'
     * @return original return type: 'java.time.ZoneId'
     */
    static fromSync(var0: java_time_temporal_TemporalAccessor | JavaInterfaceProxy<java_time_temporal_TemporalAccessorInterface> | null): java_time_ZoneId | null;
    /**
     * @return original return type: 'java.time.zone.ZoneRules'
     */
    getRules(): Promise<java_time_zone_ZoneRules | null>;
    /**
     * @return original return type: 'java.time.zone.ZoneRules'
     */
    getRulesSync(): java_time_zone_ZoneRules | null;
    /**
     * @return original return type: 'int'
     */
    getTotalSeconds(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getTotalSecondsSync(): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.time.ZoneOffset'
     */
    static ofHoursMinutes(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<ZoneOffset | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.time.ZoneOffset'
     */
    static ofHoursMinutesSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): ZoneOffset | null;
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
     * @return original return type: 'boolean'
     */
    isSupported(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'boolean'
     */
    isSupportedSync(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null): boolean;
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
     * @param var1 original type: 'java.time.ZoneOffset'
     * @return original return type: 'java.time.ZoneId'
     */
    static ofOffset(var0: string | null, var1: ZoneOffsetClass | null): Promise<java_time_ZoneId | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.time.ZoneOffset'
     * @return original return type: 'java.time.ZoneId'
     */
    static ofOffsetSync(var0: string | null, var1: ZoneOffsetClass | null): java_time_ZoneId | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.ZoneOffset'
     */
    static ofHours(var0: java_lang_Integer | number): Promise<ZoneOffset | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.ZoneOffset'
     */
    static ofHoursSync(var0: java_lang_Integer | number): ZoneOffset | null;
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
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.time.ZoneOffset'
     */
    static ofHoursMinutesSeconds(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<ZoneOffset | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.time.ZoneOffset'
     */
    static ofHoursMinutesSecondsSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number): ZoneOffset | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.ZoneOffset'
     */
    static ofTotalSeconds(var0: java_lang_Integer | number): Promise<ZoneOffset | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.time.ZoneOffset'
     */
    static ofTotalSecondsSync(var0: java_lang_Integer | number): ZoneOffset | null;
    /**
     * Original type: 'java.time.ZoneOffset'
     */
    static readonly MIN: ZoneOffsetClass | null;
    /**
     * Original type: 'java.time.ZoneOffset'
     */
    static readonly UTC: ZoneOffsetClass | null;
    /**
     * Original type: 'java.time.ZoneOffset'
     */
    static readonly MAX: ZoneOffsetClass | null;
    /**
     * Original type: 'java.util.Map'
     */
    static readonly SHORT_IDS: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null;
}
declare const ZoneOffset_base: typeof ZoneOffsetClass;
/**
 * Class java.time.ZoneOffset.
 *
 * This actually imports the java class for further use.
 * The class {@link ZoneOffsetClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ZoneOffset extends ZoneOffset_base {
}
export default ZoneOffset;
//# sourceMappingURL=ZoneOffset.d.ts.map