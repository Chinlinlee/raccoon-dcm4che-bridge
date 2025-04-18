import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Temporal as java_time_temporal_Temporal, TemporalInterface as java_time_temporal_TemporalInterface } from "./Temporal";
import { TemporalUnit as java_time_temporal_TemporalUnit, TemporalUnitInterface as java_time_temporal_TemporalUnitInterface } from "./TemporalUnit";
import { List as java_util_List } from "./../../util/List";
/**
 * This class just defines types, you should import {@link TemporalAmount} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class TemporalAmountClass extends JavaClass {
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
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createTemporalAmountProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface TemporalAmountInterface {
    /**
     * @param var0 original type: 'java.time.temporal.Temporal'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    subtractFrom(var0: java_time_temporal_Temporal | JavaInterfaceProxy<java_time_temporal_TemporalInterface> | null): java_time_temporal_Temporal | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'long'
     */
    get(var0: java_time_temporal_TemporalUnit | JavaInterfaceProxy<java_time_temporal_TemporalUnitInterface> | null): number;
    /**
     * @return original return type: 'java.util.List'
     */
    getUnits(): java_util_List | null;
    /**
     * @param var0 original type: 'java.time.temporal.Temporal'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    addTo(var0: java_time_temporal_Temporal | JavaInterfaceProxy<java_time_temporal_TemporalInterface> | null): java_time_temporal_Temporal | null;
}
/**
 * Create a proxy for the {@link TemporalAmount} interface.
 * All required methods in {@link TemporalAmountInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createTemporalAmountProxy(methods: TemporalAmountInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<TemporalAmountInterface>;
declare const TemporalAmount_base: typeof TemporalAmountClass;
/**
 * Class java.time.temporal.TemporalAmount.
 *
 * This actually imports the java class for further use.
 * The class {@link TemporalAmountClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class TemporalAmount extends TemporalAmount_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default TemporalAmount;
