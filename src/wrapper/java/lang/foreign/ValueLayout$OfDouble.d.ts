import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { MethodHandle as java_lang_invoke_MethodHandle } from "./../invoke/MethodHandle";
import { MemoryLayout$PathElement as java_lang_foreign_MemoryLayout$PathElement, MemoryLayout$PathElementInterface as java_lang_foreign_MemoryLayout$PathElementInterface } from "./MemoryLayout$PathElement";
import { MemoryLayout as java_lang_foreign_MemoryLayout } from "./MemoryLayout";
import { VarHandle as java_lang_invoke_VarHandle } from "./../invoke/VarHandle";
import { ValueLayout as java_lang_foreign_ValueLayout } from "./ValueLayout";
import { ByteOrder as java_nio_ByteOrder } from "./../../nio/ByteOrder";
import { Integer as java_lang_Integer } from "./../Integer";
import { Long as java_lang_Long } from "./../Long";
import { Class as java_lang_Class } from "./../Class";
import { Optional as java_util_Optional } from "./../../util/Optional";
import { ValueLayout$OfChar as java_lang_foreign_ValueLayout$OfChar, ValueLayout$OfCharInterface as java_lang_foreign_ValueLayout$OfCharInterface } from "./ValueLayout$OfChar";
import { AddressLayout as java_lang_foreign_AddressLayout, AddressLayoutInterface as java_lang_foreign_AddressLayoutInterface } from "./AddressLayout";
import { ValueLayout$OfLong as java_lang_foreign_ValueLayout$OfLong, ValueLayout$OfLongInterface as java_lang_foreign_ValueLayout$OfLongInterface } from "./ValueLayout$OfLong";
import { ValueLayout$OfBoolean as java_lang_foreign_ValueLayout$OfBoolean, ValueLayout$OfBooleanInterface as java_lang_foreign_ValueLayout$OfBooleanInterface } from "./ValueLayout$OfBoolean";
import { ValueLayout$OfInt as java_lang_foreign_ValueLayout$OfInt, ValueLayout$OfIntInterface as java_lang_foreign_ValueLayout$OfIntInterface } from "./ValueLayout$OfInt";
import { ValueLayout$OfFloat as java_lang_foreign_ValueLayout$OfFloat, ValueLayout$OfFloatInterface as java_lang_foreign_ValueLayout$OfFloatInterface } from "./ValueLayout$OfFloat";
import { ValueLayout$OfByte as java_lang_foreign_ValueLayout$OfByte, ValueLayout$OfByteInterface as java_lang_foreign_ValueLayout$OfByteInterface } from "./ValueLayout$OfByte";
import { ValueLayout$OfShort as java_lang_foreign_ValueLayout$OfShort, ValueLayout$OfShortInterface as java_lang_foreign_ValueLayout$OfShortInterface } from "./ValueLayout$OfShort";
/**
 * This class just defines types, you should import {@link ValueLayout$OfDouble} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ValueLayout$OfDoubleClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.foreign.MemoryLayout$PathElement[]'
     * @return original return type: 'java.lang.invoke.MethodHandle'
     */
    sliceHandle(var0: (java_lang_foreign_MemoryLayout$PathElement | JavaInterfaceProxy<java_lang_foreign_MemoryLayout$PathElementInterface> | null)[] | null): Promise<java_lang_invoke_MethodHandle | null>;
    /**
     * @param var0 original type: 'java.lang.foreign.MemoryLayout$PathElement[]'
     * @return original return type: 'java.lang.invoke.MethodHandle'
     */
    sliceHandleSync(var0: (java_lang_foreign_MemoryLayout$PathElement | JavaInterfaceProxy<java_lang_foreign_MemoryLayout$PathElementInterface> | null)[] | null): java_lang_invoke_MethodHandle | null;
    /**
     * @param var0 original type: 'java.lang.foreign.MemoryLayout$PathElement[]'
     * @return original return type: 'java.lang.invoke.MethodHandle'
     */
    byteOffsetHandle(var0: (java_lang_foreign_MemoryLayout$PathElement | JavaInterfaceProxy<java_lang_foreign_MemoryLayout$PathElementInterface> | null)[] | null): Promise<java_lang_invoke_MethodHandle | null>;
    /**
     * @param var0 original type: 'java.lang.foreign.MemoryLayout$PathElement[]'
     * @return original return type: 'java.lang.invoke.MethodHandle'
     */
    byteOffsetHandleSync(var0: (java_lang_foreign_MemoryLayout$PathElement | JavaInterfaceProxy<java_lang_foreign_MemoryLayout$PathElementInterface> | null)[] | null): java_lang_invoke_MethodHandle | null;
    /**
     * @param var0 original type: 'java.lang.foreign.MemoryLayout$PathElement[]'
     * @return original return type: 'java.lang.foreign.MemoryLayout'
     */
    select(var0: (java_lang_foreign_MemoryLayout$PathElement | JavaInterfaceProxy<java_lang_foreign_MemoryLayout$PathElementInterface> | null)[] | null): Promise<java_lang_foreign_MemoryLayout | null>;
    /**
     * @param var0 original type: 'java.lang.foreign.MemoryLayout$PathElement[]'
     * @return original return type: 'java.lang.foreign.MemoryLayout'
     */
    selectSync(var0: (java_lang_foreign_MemoryLayout$PathElement | JavaInterfaceProxy<java_lang_foreign_MemoryLayout$PathElementInterface> | null)[] | null): java_lang_foreign_MemoryLayout | null;
    /**
     * @return original return type: 'long'
     */
    byteSize(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    byteSizeSync(): number;
    /**
     * @param var0 original type: 'java.lang.foreign.MemoryLayout$PathElement[]'
     * @return original return type: 'java.lang.invoke.VarHandle'
     */
    varHandle(var0: (java_lang_foreign_MemoryLayout$PathElement | JavaInterfaceProxy<java_lang_foreign_MemoryLayout$PathElementInterface> | null)[] | null): Promise<java_lang_invoke_VarHandle | null>;
    /**
     * @param var0 original type: 'java.lang.foreign.MemoryLayout$PathElement[]'
     * @return original return type: 'java.lang.invoke.VarHandle'
     */
    varHandleSync(var0: (java_lang_foreign_MemoryLayout$PathElement | JavaInterfaceProxy<java_lang_foreign_MemoryLayout$PathElementInterface> | null)[] | null): java_lang_invoke_VarHandle | null;
    /**
     * @param var0 original type: 'java.nio.ByteOrder'
     * @return original return type: 'java.lang.foreign.ValueLayout'
     */
    withOrder(var0: java_nio_ByteOrder | null): Promise<java_lang_foreign_ValueLayout | null>;
    /**
     * @param var0 original type: 'java.nio.ByteOrder'
     * @return original return type: 'java.lang.foreign.ValueLayout'
     */
    withOrderSync(var0: java_nio_ByteOrder | null): java_lang_foreign_ValueLayout | null;
    /**
     * @param var0 original type: 'java.nio.ByteOrder'
     * @return original return type: 'java.lang.foreign.ValueLayout$OfDouble'
     */
    withOrder(var0: java_nio_ByteOrder | null): Promise<ValueLayout$OfDouble | null>;
    /**
     * @param var0 original type: 'java.nio.ByteOrder'
     * @return original return type: 'java.lang.foreign.ValueLayout$OfDouble'
     */
    withOrderSync(var0: java_nio_ByteOrder | null): ValueLayout$OfDouble | null;
    /**
     * @param var0 original type: 'int[]'
     * @return original return type: 'java.lang.invoke.VarHandle'
     */
    arrayElementVarHandle(var0: (java_lang_Integer | number)[] | null): Promise<java_lang_invoke_VarHandle | null>;
    /**
     * @param var0 original type: 'int[]'
     * @return original return type: 'java.lang.invoke.VarHandle'
     */
    arrayElementVarHandleSync(var0: (java_lang_Integer | number)[] | null): java_lang_invoke_VarHandle | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.foreign.ValueLayout'
     */
    withByteAlignment(var0: java_lang_Long | bigint | number): Promise<java_lang_foreign_ValueLayout | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.foreign.ValueLayout'
     */
    withByteAlignmentSync(var0: java_lang_Long | bigint | number): java_lang_foreign_ValueLayout | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.foreign.MemoryLayout'
     */
    withByteAlignment(var0: java_lang_Long | bigint | number): Promise<java_lang_foreign_MemoryLayout | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.foreign.MemoryLayout'
     */
    withByteAlignmentSync(var0: java_lang_Long | bigint | number): java_lang_foreign_MemoryLayout | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.foreign.ValueLayout$OfDouble'
     */
    withByteAlignment(var0: java_lang_Long | bigint | number): Promise<ValueLayout$OfDouble | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.foreign.ValueLayout$OfDouble'
     */
    withByteAlignmentSync(var0: java_lang_Long | bigint | number): ValueLayout$OfDouble | null;
    /**
     * @return original return type: 'java.lang.Class'
     */
    carrier(): Promise<java_lang_Class | null>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    carrierSync(): java_lang_Class | null;
    /**
     * @param var0 original type: 'java.lang.foreign.MemoryLayout$PathElement[]'
     * @return original return type: 'long'
     */
    byteOffset(var0: (java_lang_foreign_MemoryLayout$PathElement | JavaInterfaceProxy<java_lang_foreign_MemoryLayout$PathElementInterface> | null)[] | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.foreign.MemoryLayout$PathElement[]'
     * @return original return type: 'long'
     */
    byteOffsetSync(var0: (java_lang_foreign_MemoryLayout$PathElement | JavaInterfaceProxy<java_lang_foreign_MemoryLayout$PathElementInterface> | null)[] | null): number;
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
     * @return original return type: 'long'
     */
    byteAlignment(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    byteAlignmentSync(): number;
    /**
     * @return original return type: 'java.util.Optional'
     */
    name(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    nameSync(): java_util_Optional | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.foreign.ValueLayout'
     */
    withName(var0: string | null): Promise<java_lang_foreign_ValueLayout | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.foreign.ValueLayout'
     */
    withNameSync(var0: string | null): java_lang_foreign_ValueLayout | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.foreign.MemoryLayout'
     */
    withName(var0: string | null): Promise<java_lang_foreign_MemoryLayout | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.foreign.MemoryLayout'
     */
    withNameSync(var0: string | null): java_lang_foreign_MemoryLayout | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.foreign.ValueLayout$OfDouble'
     */
    withName(var0: string | null): Promise<ValueLayout$OfDouble | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.foreign.ValueLayout$OfDouble'
     */
    withNameSync(var0: string | null): ValueLayout$OfDouble | null;
    /**
     * @return original return type: 'java.lang.foreign.MemoryLayout'
     */
    withoutName(): Promise<java_lang_foreign_MemoryLayout | null>;
    /**
     * @return original return type: 'java.lang.foreign.MemoryLayout'
     */
    withoutNameSync(): java_lang_foreign_MemoryLayout | null;
    /**
     * @return original return type: 'java.lang.foreign.ValueLayout$OfDouble'
     */
    withoutName(): Promise<ValueLayout$OfDouble | null>;
    /**
     * @return original return type: 'java.lang.foreign.ValueLayout$OfDouble'
     */
    withoutNameSync(): ValueLayout$OfDouble | null;
    /**
     * @return original return type: 'java.lang.foreign.ValueLayout'
     */
    withoutName(): Promise<java_lang_foreign_ValueLayout | null>;
    /**
     * @return original return type: 'java.lang.foreign.ValueLayout'
     */
    withoutNameSync(): java_lang_foreign_ValueLayout | null;
    /**
     * @return original return type: 'java.nio.ByteOrder'
     */
    order(): Promise<java_nio_ByteOrder | null>;
    /**
     * @return original return type: 'java.nio.ByteOrder'
     */
    orderSync(): java_nio_ByteOrder | null;
    /**
     * Original type: 'java.lang.foreign.ValueLayout$OfChar'
     */
    static readonly JAVA_CHAR: java_lang_foreign_ValueLayout$OfChar | JavaInterfaceProxy<java_lang_foreign_ValueLayout$OfCharInterface> | null;
    /**
     * Original type: 'java.lang.foreign.AddressLayout'
     */
    static readonly ADDRESS_UNALIGNED: java_lang_foreign_AddressLayout | JavaInterfaceProxy<java_lang_foreign_AddressLayoutInterface> | null;
    /**
     * Original type: 'java.lang.foreign.ValueLayout$OfLong'
     */
    static readonly JAVA_LONG_UNALIGNED: java_lang_foreign_ValueLayout$OfLong | JavaInterfaceProxy<java_lang_foreign_ValueLayout$OfLongInterface> | null;
    /**
     * Original type: 'java.lang.foreign.ValueLayout$OfBoolean'
     */
    static readonly JAVA_BOOLEAN: java_lang_foreign_ValueLayout$OfBoolean | JavaInterfaceProxy<java_lang_foreign_ValueLayout$OfBooleanInterface> | null;
    /**
     * Original type: 'java.lang.foreign.ValueLayout$OfInt'
     */
    static readonly JAVA_INT_UNALIGNED: java_lang_foreign_ValueLayout$OfInt | JavaInterfaceProxy<java_lang_foreign_ValueLayout$OfIntInterface> | null;
    /**
     * Original type: 'java.lang.foreign.ValueLayout$OfDouble'
     */
    static readonly JAVA_DOUBLE: ValueLayout$OfDoubleClass | JavaInterfaceProxy<ValueLayout$OfDoubleInterface> | null;
    /**
     * Original type: 'java.lang.foreign.ValueLayout$OfLong'
     */
    static readonly JAVA_LONG: java_lang_foreign_ValueLayout$OfLong | JavaInterfaceProxy<java_lang_foreign_ValueLayout$OfLongInterface> | null;
    /**
     * Original type: 'java.lang.foreign.ValueLayout$OfChar'
     */
    static readonly JAVA_CHAR_UNALIGNED: java_lang_foreign_ValueLayout$OfChar | JavaInterfaceProxy<java_lang_foreign_ValueLayout$OfCharInterface> | null;
    /**
     * Original type: 'java.lang.foreign.ValueLayout$OfFloat'
     */
    static readonly JAVA_FLOAT: java_lang_foreign_ValueLayout$OfFloat | JavaInterfaceProxy<java_lang_foreign_ValueLayout$OfFloatInterface> | null;
    /**
     * Original type: 'java.lang.foreign.ValueLayout$OfByte'
     */
    static readonly JAVA_BYTE: java_lang_foreign_ValueLayout$OfByte | JavaInterfaceProxy<java_lang_foreign_ValueLayout$OfByteInterface> | null;
    /**
     * Original type: 'java.lang.foreign.AddressLayout'
     */
    static readonly ADDRESS: java_lang_foreign_AddressLayout | JavaInterfaceProxy<java_lang_foreign_AddressLayoutInterface> | null;
    /**
     * Original type: 'java.lang.foreign.ValueLayout$OfFloat'
     */
    static readonly JAVA_FLOAT_UNALIGNED: java_lang_foreign_ValueLayout$OfFloat | JavaInterfaceProxy<java_lang_foreign_ValueLayout$OfFloatInterface> | null;
    /**
     * Original type: 'java.lang.foreign.ValueLayout$OfShort'
     */
    static readonly JAVA_SHORT: java_lang_foreign_ValueLayout$OfShort | JavaInterfaceProxy<java_lang_foreign_ValueLayout$OfShortInterface> | null;
    /**
     * Original type: 'java.lang.foreign.ValueLayout$OfDouble'
     */
    static readonly JAVA_DOUBLE_UNALIGNED: ValueLayout$OfDoubleClass | JavaInterfaceProxy<ValueLayout$OfDoubleInterface> | null;
    /**
     * Original type: 'java.lang.foreign.ValueLayout$OfShort'
     */
    static readonly JAVA_SHORT_UNALIGNED: java_lang_foreign_ValueLayout$OfShort | JavaInterfaceProxy<java_lang_foreign_ValueLayout$OfShortInterface> | null;
    /**
     * Original type: 'java.lang.foreign.ValueLayout$OfInt'
     */
    static readonly JAVA_INT: java_lang_foreign_ValueLayout$OfInt | JavaInterfaceProxy<java_lang_foreign_ValueLayout$OfIntInterface> | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createValueLayout$OfDoubleProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface ValueLayout$OfDoubleInterface {
    /**
     * @param var0 original type: 'java.lang.foreign.MemoryLayout$PathElement[]'
     * @return original return type: 'java.lang.invoke.MethodHandle'
     */
    sliceHandle?(var0: (java_lang_foreign_MemoryLayout$PathElement | JavaInterfaceProxy<java_lang_foreign_MemoryLayout$PathElementInterface> | null)[] | null): java_lang_invoke_MethodHandle | null;
    /**
     * @param var0 original type: 'java.lang.foreign.MemoryLayout$PathElement[]'
     * @return original return type: 'java.lang.invoke.MethodHandle'
     */
    byteOffsetHandle?(var0: (java_lang_foreign_MemoryLayout$PathElement | JavaInterfaceProxy<java_lang_foreign_MemoryLayout$PathElementInterface> | null)[] | null): java_lang_invoke_MethodHandle | null;
    /**
     * @param var0 original type: 'java.lang.foreign.MemoryLayout$PathElement[]'
     * @return original return type: 'java.lang.foreign.MemoryLayout'
     */
    select?(var0: (java_lang_foreign_MemoryLayout$PathElement | JavaInterfaceProxy<java_lang_foreign_MemoryLayout$PathElementInterface> | null)[] | null): java_lang_foreign_MemoryLayout | null;
    /**
     * @return original return type: 'long'
     */
    byteSize(): number;
    /**
     * @param var0 original type: 'java.lang.foreign.MemoryLayout$PathElement[]'
     * @return original return type: 'java.lang.invoke.VarHandle'
     */
    varHandle?(var0: (java_lang_foreign_MemoryLayout$PathElement | JavaInterfaceProxy<java_lang_foreign_MemoryLayout$PathElementInterface> | null)[] | null): java_lang_invoke_VarHandle | null;
    /**
     * @param var0 original type: 'java.nio.ByteOrder'
     * @return original return type: 'java.lang.foreign.ValueLayout'
     */
    withOrder?(var0: java_nio_ByteOrder | null): java_lang_foreign_ValueLayout | null;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @param var0 original type: 'java.nio.ByteOrder'
     * @return original return type: 'java.lang.foreign.ValueLayout$OfDouble'
     */
    withOrder?(var0: java_nio_ByteOrder | null): ValueLayout$OfDouble | null;
    /**
     * @param var0 original type: 'int[]'
     * @return original return type: 'java.lang.invoke.VarHandle'
     */
    arrayElementVarHandle(var0: (java_lang_Integer | number)[] | null): java_lang_invoke_VarHandle | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.foreign.ValueLayout'
     */
    withByteAlignment?(var0: java_lang_Long | bigint | number): java_lang_foreign_ValueLayout | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.foreign.MemoryLayout'
     */
    withByteAlignment?(var0: java_lang_Long | bigint | number): java_lang_foreign_MemoryLayout | null;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.foreign.ValueLayout$OfDouble'
     */
    withByteAlignment?(var0: java_lang_Long | bigint | number): ValueLayout$OfDouble | null;
    /**
     * @return original return type: 'java.lang.Class'
     */
    carrier(): java_lang_Class | null;
    /**
     * @param var0 original type: 'java.lang.foreign.MemoryLayout$PathElement[]'
     * @return original return type: 'long'
     */
    byteOffset?(var0: (java_lang_foreign_MemoryLayout$PathElement | JavaInterfaceProxy<java_lang_foreign_MemoryLayout$PathElementInterface> | null)[] | null): number;
    /**
     * @return original return type: 'int'
     */
    hashCode(): number;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equals(var0: BasicOrJavaType | null): boolean;
    /**
     * @return original return type: 'long'
     */
    byteAlignment(): number;
    /**
     * @return original return type: 'java.util.Optional'
     */
    name(): java_util_Optional | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): string;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.foreign.ValueLayout'
     */
    withName?(var0: string | null): java_lang_foreign_ValueLayout | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.foreign.MemoryLayout'
     */
    withName?(var0: string | null): java_lang_foreign_MemoryLayout | null;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.foreign.ValueLayout$OfDouble'
     */
    withName?(var0: string | null): ValueLayout$OfDouble | null;
    /**
     * @return original return type: 'java.lang.foreign.MemoryLayout'
     */
    withoutName?(): java_lang_foreign_MemoryLayout | null;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @return original return type: 'java.lang.foreign.ValueLayout$OfDouble'
     */
    withoutName?(): ValueLayout$OfDouble | null;
    /**
     * @return original return type: 'java.lang.foreign.ValueLayout'
     */
    withoutName?(): java_lang_foreign_ValueLayout | null;
    /**
     * @return original return type: 'java.nio.ByteOrder'
     */
    order(): java_nio_ByteOrder | null;
}
/**
 * Create a proxy for the {@link ValueLayout$OfDouble} interface.
 * All required methods in {@link ValueLayout$OfDoubleInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createValueLayout$OfDoubleProxy(methods: ValueLayout$OfDoubleInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<ValueLayout$OfDoubleInterface>;
declare const ValueLayout$OfDouble_base: typeof ValueLayout$OfDoubleClass;
/**
 * Class java.lang.foreign.ValueLayout$OfDouble.
 *
 * This actually imports the java class for further use.
 * The class {@link ValueLayout$OfDoubleClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ValueLayout$OfDouble extends ValueLayout$OfDouble_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default ValueLayout$OfDouble;
//# sourceMappingURL=ValueLayout$OfDouble.d.ts.map