import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Enum as java_lang_Enum } from "./../../lang/Enum";
import { Class as java_lang_Class } from "./../../lang/Class";
import { Temporal as java_time_temporal_Temporal, TemporalInterface as java_time_temporal_TemporalInterface } from "./Temporal";
import { Duration as java_time_Duration } from "./../Duration";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Optional as java_util_Optional } from "./../../util/Optional";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
/**
 * This class just defines types, you should import {@link ChronoUnit} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ChronoUnitClass extends JavaClass {
    /**
     * Original type: 'java.time.temporal.ChronoUnit'
     */
    static readonly NANOS: ChronoUnitClass | null;
    /**
     * Original type: 'java.time.temporal.ChronoUnit'
     */
    static readonly MICROS: ChronoUnitClass | null;
    /**
     * Original type: 'java.time.temporal.ChronoUnit'
     */
    static readonly MILLIS: ChronoUnitClass | null;
    /**
     * Original type: 'java.time.temporal.ChronoUnit'
     */
    static readonly SECONDS: ChronoUnitClass | null;
    /**
     * Original type: 'java.time.temporal.ChronoUnit'
     */
    static readonly MINUTES: ChronoUnitClass | null;
    /**
     * Original type: 'java.time.temporal.ChronoUnit'
     */
    static readonly HOURS: ChronoUnitClass | null;
    /**
     * Original type: 'java.time.temporal.ChronoUnit'
     */
    static readonly HALF_DAYS: ChronoUnitClass | null;
    /**
     * Original type: 'java.time.temporal.ChronoUnit'
     */
    static readonly DAYS: ChronoUnitClass | null;
    /**
     * Original type: 'java.time.temporal.ChronoUnit'
     */
    static readonly WEEKS: ChronoUnitClass | null;
    /**
     * Original type: 'java.time.temporal.ChronoUnit'
     */
    static readonly MONTHS: ChronoUnitClass | null;
    /**
     * Original type: 'java.time.temporal.ChronoUnit'
     */
    static readonly YEARS: ChronoUnitClass | null;
    /**
     * Original type: 'java.time.temporal.ChronoUnit'
     */
    static readonly DECADES: ChronoUnitClass | null;
    /**
     * Original type: 'java.time.temporal.ChronoUnit'
     */
    static readonly CENTURIES: ChronoUnitClass | null;
    /**
     * Original type: 'java.time.temporal.ChronoUnit'
     */
    static readonly MILLENNIA: ChronoUnitClass | null;
    /**
     * Original type: 'java.time.temporal.ChronoUnit'
     */
    static readonly ERAS: ChronoUnitClass | null;
    /**
     * Original type: 'java.time.temporal.ChronoUnit'
     */
    static readonly FOREVER: ChronoUnitClass | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): string;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @return original return type: 'java.time.temporal.ChronoUnit[]'
     */
    static values(): Promise<(ChronoUnit | null)[] | null>;
    /**
     * @return original return type: 'java.time.temporal.ChronoUnit[]'
     */
    static valuesSync(): (ChronoUnit | null)[] | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.time.temporal.ChronoUnit'
     */
    static valueOf(var0: string | null): Promise<ChronoUnit | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.time.temporal.ChronoUnit'
     */
    static valueOfSync(var0: string | null): ChronoUnit | null;
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
     * @param var0 original type: 'java.time.temporal.Temporal'
     * @param var1 original type: 'java.time.temporal.Temporal'
     * @return original return type: 'long'
     */
    between(var0: java_time_temporal_Temporal | JavaInterfaceProxy<java_time_temporal_TemporalInterface> | null, var1: java_time_temporal_Temporal | JavaInterfaceProxy<java_time_temporal_TemporalInterface> | null): Promise<number>;
    /**
     * @param var0 original type: 'java.time.temporal.Temporal'
     * @param var1 original type: 'java.time.temporal.Temporal'
     * @return original return type: 'long'
     */
    betweenSync(var0: java_time_temporal_Temporal | JavaInterfaceProxy<java_time_temporal_TemporalInterface> | null, var1: java_time_temporal_Temporal | JavaInterfaceProxy<java_time_temporal_TemporalInterface> | null): number;
    /**
     * @return original return type: 'boolean'
     */
    isDateBased(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isDateBasedSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isTimeBased(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isTimeBasedSync(): boolean;
    /**
     * @param var0 original type: 'java.time.temporal.Temporal'
     * @return original return type: 'boolean'
     */
    isSupportedBy(var0: java_time_temporal_Temporal | JavaInterfaceProxy<java_time_temporal_TemporalInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.time.temporal.Temporal'
     * @return original return type: 'boolean'
     */
    isSupportedBySync(var0: java_time_temporal_Temporal | JavaInterfaceProxy<java_time_temporal_TemporalInterface> | null): boolean;
    /**
     * @return original return type: 'java.time.Duration'
     */
    getDuration(): Promise<java_time_Duration | null>;
    /**
     * @return original return type: 'java.time.Duration'
     */
    getDurationSync(): java_time_Duration | null;
    /**
     * @return original return type: 'boolean'
     */
    isDurationEstimated(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isDurationEstimatedSync(): boolean;
    /**
     * @param var0 original type: 'java.time.temporal.Temporal'
     * @param var1 original type: 'long'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    addTo(var0: java_time_temporal_Temporal | JavaInterfaceProxy<java_time_temporal_TemporalInterface> | null, var1: java_lang_Long | bigint | number): Promise<java_time_temporal_Temporal | null>;
    /**
     * @param var0 original type: 'java.time.temporal.Temporal'
     * @param var1 original type: 'long'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    addToSync(var0: java_time_temporal_Temporal | JavaInterfaceProxy<java_time_temporal_TemporalInterface> | null, var1: java_lang_Long | bigint | number): java_time_temporal_Temporal | null;
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
declare const ChronoUnit_base: typeof ChronoUnitClass;
/**
 * Class java.time.temporal.ChronoUnit.
 *
 * This actually imports the java class for further use.
 * The class {@link ChronoUnitClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ChronoUnit extends ChronoUnit_base {
}
export default ChronoUnit;
//# sourceMappingURL=ChronoUnit.d.ts.map