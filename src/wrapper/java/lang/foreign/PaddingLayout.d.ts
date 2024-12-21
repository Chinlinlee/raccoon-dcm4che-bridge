import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { MethodHandle as java_lang_invoke_MethodHandle } from "./../invoke/MethodHandle";
import { MemoryLayout$PathElement as java_lang_foreign_MemoryLayout$PathElement, MemoryLayout$PathElementInterface as java_lang_foreign_MemoryLayout$PathElementInterface } from "./MemoryLayout$PathElement";
import { MemoryLayout as java_lang_foreign_MemoryLayout } from "./MemoryLayout";
import { VarHandle as java_lang_invoke_VarHandle } from "./../invoke/VarHandle";
import { Long as java_lang_Long } from "./../Long";
import { Optional as java_util_Optional } from "./../../util/Optional";
/**
 * This class just defines types, you should import {@link PaddingLayout} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PaddingLayoutClass extends JavaClass {
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
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.foreign.PaddingLayout'
     */
    withByteAlignment(var0: java_lang_Long | bigint | number): Promise<PaddingLayout | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.foreign.PaddingLayout'
     */
    withByteAlignmentSync(var0: java_lang_Long | bigint | number): PaddingLayout | null;
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
     * @return original return type: 'java.lang.foreign.PaddingLayout'
     */
    withName(var0: string | null): Promise<PaddingLayout | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.foreign.PaddingLayout'
     */
    withNameSync(var0: string | null): PaddingLayout | null;
    /**
     * @return original return type: 'java.lang.foreign.MemoryLayout'
     */
    withoutName(): Promise<java_lang_foreign_MemoryLayout | null>;
    /**
     * @return original return type: 'java.lang.foreign.MemoryLayout'
     */
    withoutNameSync(): java_lang_foreign_MemoryLayout | null;
    /**
     * @return original return type: 'java.lang.foreign.PaddingLayout'
     */
    withoutName(): Promise<PaddingLayout | null>;
    /**
     * @return original return type: 'java.lang.foreign.PaddingLayout'
     */
    withoutNameSync(): PaddingLayout | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createPaddingLayoutProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface PaddingLayoutInterface {
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
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.foreign.PaddingLayout'
     */
    withByteAlignment?(var0: java_lang_Long | bigint | number): PaddingLayout | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.foreign.MemoryLayout'
     */
    withByteAlignment?(var0: java_lang_Long | bigint | number): java_lang_foreign_MemoryLayout | null;
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
     * @return original return type: 'java.lang.foreign.MemoryLayout'
     */
    withName?(var0: string | null): java_lang_foreign_MemoryLayout | null;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.foreign.PaddingLayout'
     */
    withName?(var0: string | null): PaddingLayout | null;
    /**
     * @return original return type: 'java.lang.foreign.MemoryLayout'
     */
    withoutName?(): java_lang_foreign_MemoryLayout | null;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @return original return type: 'java.lang.foreign.PaddingLayout'
     */
    withoutName?(): PaddingLayout | null;
}
/**
 * Create a proxy for the {@link PaddingLayout} interface.
 * All required methods in {@link PaddingLayoutInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createPaddingLayoutProxy(methods: PaddingLayoutInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<PaddingLayoutInterface>;
declare const PaddingLayout_base: typeof PaddingLayoutClass;
/**
 * Class java.lang.foreign.PaddingLayout.
 *
 * This actually imports the java class for further use.
 * The class {@link PaddingLayoutClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PaddingLayout extends PaddingLayout_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default PaddingLayout;
//# sourceMappingURL=PaddingLayout.d.ts.map