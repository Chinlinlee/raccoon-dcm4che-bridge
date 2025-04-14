import { JavaClass, BasicOrJavaType } from "java-bridge";
import { MethodHandle as java_lang_invoke_MethodHandle } from "./MethodHandle";
import { VarHandle$AccessMode as java_lang_invoke_VarHandle$AccessMode } from "./VarHandle$AccessMode";
import { Class as java_lang_Class } from "./../Class";
import { Optional as java_util_Optional } from "./../../util/Optional";
import { List as java_util_List } from "./../../util/List";
import { Long as java_lang_Long } from "./../Long";
import { Integer as java_lang_Integer } from "./../Integer";
import { MethodType as java_lang_invoke_MethodType } from "./MethodType";
/**
 * This class just defines types, you should import {@link VarHandle} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class VarHandleClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.invoke.VarHandle$AccessMode'
     * @return original return type: 'java.lang.invoke.MethodHandle'
     */
    toMethodHandle(var0: java_lang_invoke_VarHandle$AccessMode | null): Promise<java_lang_invoke_MethodHandle | null>;
    /**
     * @param var0 original type: 'java.lang.invoke.VarHandle$AccessMode'
     * @return original return type: 'java.lang.invoke.MethodHandle'
     */
    toMethodHandleSync(var0: java_lang_invoke_VarHandle$AccessMode | null): java_lang_invoke_MethodHandle | null;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndBitwiseXor(var0: (BasicOrJavaType | null)[] | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndBitwiseXorSync(var0: (BasicOrJavaType | null)[] | null): BasicOrJavaType | null;
    /**
     * @return original return type: 'void'
     */
    static storeStoreFence(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    static storeStoreFenceSync(): void;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    compareAndExchange(var0: (BasicOrJavaType | null)[] | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    compareAndExchangeSync(var0: (BasicOrJavaType | null)[] | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndSetRelease(var0: (BasicOrJavaType | null)[] | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndSetReleaseSync(var0: (BasicOrJavaType | null)[] | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndBitwiseAnd(var0: (BasicOrJavaType | null)[] | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndBitwiseAndSync(var0: (BasicOrJavaType | null)[] | null): BasicOrJavaType | null;
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
    varType(): Promise<java_lang_Class | null>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    varTypeSync(): java_lang_Class | null;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'void'
     */
    setVolatile(var0: (BasicOrJavaType | null)[] | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'void'
     */
    setVolatileSync(var0: (BasicOrJavaType | null)[] | null): void;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndBitwiseOrAcquire(var0: (BasicOrJavaType | null)[] | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndBitwiseOrAcquireSync(var0: (BasicOrJavaType | null)[] | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndAdd(var0: (BasicOrJavaType | null)[] | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndAddSync(var0: (BasicOrJavaType | null)[] | null): BasicOrJavaType | null;
    /**
     * @return original return type: 'void'
     */
    static releaseFence(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    static releaseFenceSync(): void;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'boolean'
     */
    weakCompareAndSetRelease(var0: (BasicOrJavaType | null)[] | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'boolean'
     */
    weakCompareAndSetReleaseSync(var0: (BasicOrJavaType | null)[] | null): boolean;
    /**
     * @return original return type: 'void'
     */
    static loadLoadFence(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    static loadLoadFenceSync(): void;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndAddAcquire(var0: (BasicOrJavaType | null)[] | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndAddAcquireSync(var0: (BasicOrJavaType | null)[] | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.invoke.VarHandle$AccessMode'
     * @return original return type: 'boolean'
     */
    isAccessModeSupported(var0: java_lang_invoke_VarHandle$AccessMode | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.invoke.VarHandle$AccessMode'
     * @return original return type: 'boolean'
     */
    isAccessModeSupportedSync(var0: java_lang_invoke_VarHandle$AccessMode | null): boolean;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'void'
     */
    setOpaque(var0: (BasicOrJavaType | null)[] | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'void'
     */
    setOpaqueSync(var0: (BasicOrJavaType | null)[] | null): void;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    compareAndExchangeRelease(var0: (BasicOrJavaType | null)[] | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    compareAndExchangeReleaseSync(var0: (BasicOrJavaType | null)[] | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'boolean'
     */
    compareAndSet(var0: (BasicOrJavaType | null)[] | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'boolean'
     */
    compareAndSetSync(var0: (BasicOrJavaType | null)[] | null): boolean;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    compareAndExchangeAcquire(var0: (BasicOrJavaType | null)[] | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    compareAndExchangeAcquireSync(var0: (BasicOrJavaType | null)[] | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndBitwiseXorRelease(var0: (BasicOrJavaType | null)[] | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndBitwiseXorReleaseSync(var0: (BasicOrJavaType | null)[] | null): BasicOrJavaType | null;
    /**
     * @return original return type: 'java.lang.invoke.VarHandle'
     */
    withInvokeBehavior(): Promise<VarHandle | null>;
    /**
     * @return original return type: 'java.lang.invoke.VarHandle'
     */
    withInvokeBehaviorSync(): VarHandle | null;
    /**
     * @return original return type: 'java.lang.invoke.VarHandle'
     */
    withInvokeExactBehavior(): Promise<VarHandle | null>;
    /**
     * @return original return type: 'java.lang.invoke.VarHandle'
     */
    withInvokeExactBehaviorSync(): VarHandle | null;
    /**
     * @return original return type: 'java.util.List'
     */
    coordinateTypes(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    coordinateTypesSync(): java_util_List | null;
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
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getVolatile(var0: (BasicOrJavaType | null)[] | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getVolatileSync(var0: (BasicOrJavaType | null)[] | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'boolean'
     */
    weakCompareAndSetPlain(var0: (BasicOrJavaType | null)[] | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'boolean'
     */
    weakCompareAndSetPlainSync(var0: (BasicOrJavaType | null)[] | null): boolean;
    /**
     * @return original return type: 'void'
     */
    static fullFence(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    static fullFenceSync(): void;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAcquire(var0: (BasicOrJavaType | null)[] | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAcquireSync(var0: (BasicOrJavaType | null)[] | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.invoke.VarHandle$AccessMode'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    accessModeType(var0: java_lang_invoke_VarHandle$AccessMode | null): Promise<java_lang_invoke_MethodType | null>;
    /**
     * @param var0 original type: 'java.lang.invoke.VarHandle$AccessMode'
     * @return original return type: 'java.lang.invoke.MethodType'
     */
    accessModeTypeSync(var0: java_lang_invoke_VarHandle$AccessMode | null): java_lang_invoke_MethodType | null;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndBitwiseOr(var0: (BasicOrJavaType | null)[] | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndBitwiseOrSync(var0: (BasicOrJavaType | null)[] | null): BasicOrJavaType | null;
    /**
     * @return original return type: 'void'
     */
    static acquireFence(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    static acquireFenceSync(): void;
    /**
     * @return original return type: 'boolean'
     */
    hasInvokeExactBehavior(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasInvokeExactBehaviorSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getOpaque(var0: (BasicOrJavaType | null)[] | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getOpaqueSync(var0: (BasicOrJavaType | null)[] | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndSetAcquire(var0: (BasicOrJavaType | null)[] | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndSetAcquireSync(var0: (BasicOrJavaType | null)[] | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndBitwiseOrRelease(var0: (BasicOrJavaType | null)[] | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndBitwiseOrReleaseSync(var0: (BasicOrJavaType | null)[] | null): BasicOrJavaType | null;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndBitwiseXorAcquire(var0: (BasicOrJavaType | null)[] | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndBitwiseXorAcquireSync(var0: (BasicOrJavaType | null)[] | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndBitwiseAndRelease(var0: (BasicOrJavaType | null)[] | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndBitwiseAndReleaseSync(var0: (BasicOrJavaType | null)[] | null): BasicOrJavaType | null;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    get(var0: (BasicOrJavaType | null)[] | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getSync(var0: (BasicOrJavaType | null)[] | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'boolean'
     */
    weakCompareAndSetAcquire(var0: (BasicOrJavaType | null)[] | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'boolean'
     */
    weakCompareAndSetAcquireSync(var0: (BasicOrJavaType | null)[] | null): boolean;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndSet(var0: (BasicOrJavaType | null)[] | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndSetSync(var0: (BasicOrJavaType | null)[] | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'void'
     */
    set(var0: (BasicOrJavaType | null)[] | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'void'
     */
    setSync(var0: (BasicOrJavaType | null)[] | null): void;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'boolean'
     */
    weakCompareAndSet(var0: (BasicOrJavaType | null)[] | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'boolean'
     */
    weakCompareAndSetSync(var0: (BasicOrJavaType | null)[] | null): boolean;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndAddRelease(var0: (BasicOrJavaType | null)[] | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndAddReleaseSync(var0: (BasicOrJavaType | null)[] | null): BasicOrJavaType | null;
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
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'void'
     */
    setRelease(var0: (BasicOrJavaType | null)[] | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'void'
     */
    setReleaseSync(var0: (BasicOrJavaType | null)[] | null): void;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndBitwiseAndAcquire(var0: (BasicOrJavaType | null)[] | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object'
     */
    getAndBitwiseAndAcquireSync(var0: (BasicOrJavaType | null)[] | null): BasicOrJavaType | null;
}
declare const VarHandle_base: typeof VarHandleClass;
/**
 * Class java.lang.invoke.VarHandle.
 *
 * This actually imports the java class for further use.
 * The class {@link VarHandleClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class VarHandle extends VarHandle_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default VarHandle;
