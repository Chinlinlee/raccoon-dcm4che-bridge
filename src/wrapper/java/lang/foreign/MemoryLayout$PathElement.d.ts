import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Long as java_lang_Long } from "./../Long";
/**
 * This class just defines types, you should import {@link MemoryLayout$PathElement} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class MemoryLayout$PathElementClass extends JavaClass {
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.foreign.MemoryLayout$PathElement'
     */
    static sequenceElement(var0: java_lang_Long | bigint | number): Promise<MemoryLayout$PathElement | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.foreign.MemoryLayout$PathElement'
     */
    static sequenceElementSync(var0: java_lang_Long | bigint | number): MemoryLayout$PathElement | null;
    /**
     * @return original return type: 'java.lang.foreign.MemoryLayout$PathElement'
     */
    static sequenceElement(): Promise<MemoryLayout$PathElement | null>;
    /**
     * @return original return type: 'java.lang.foreign.MemoryLayout$PathElement'
     */
    static sequenceElementSync(): MemoryLayout$PathElement | null;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @return original return type: 'java.lang.foreign.MemoryLayout$PathElement'
     */
    static sequenceElement(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number): Promise<MemoryLayout$PathElement | null>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @return original return type: 'java.lang.foreign.MemoryLayout$PathElement'
     */
    static sequenceElementSync(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number): MemoryLayout$PathElement | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.foreign.MemoryLayout$PathElement'
     */
    static groupElement(var0: string | null): Promise<MemoryLayout$PathElement | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.foreign.MemoryLayout$PathElement'
     */
    static groupElementSync(var0: string | null): MemoryLayout$PathElement | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.foreign.MemoryLayout$PathElement'
     */
    static groupElement(var0: java_lang_Long | bigint | number): Promise<MemoryLayout$PathElement | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.foreign.MemoryLayout$PathElement'
     */
    static groupElementSync(var0: java_lang_Long | bigint | number): MemoryLayout$PathElement | null;
    /**
     * @return original return type: 'java.lang.foreign.MemoryLayout$PathElement'
     */
    static dereferenceElement(): Promise<MemoryLayout$PathElement | null>;
    /**
     * @return original return type: 'java.lang.foreign.MemoryLayout$PathElement'
     */
    static dereferenceElementSync(): MemoryLayout$PathElement | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createMemoryLayout$PathElementProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface MemoryLayout$PathElementInterface {
}
/**
 * Create a proxy for the {@link MemoryLayout$PathElement} interface.
 * All required methods in {@link MemoryLayout$PathElementInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createMemoryLayout$PathElementProxy(methods: MemoryLayout$PathElementInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<MemoryLayout$PathElementInterface>;
declare const MemoryLayout$PathElement_base: typeof MemoryLayout$PathElementClass;
/**
 * Class java.lang.foreign.MemoryLayout$PathElement.
 *
 * This actually imports the java class for further use.
 * The class {@link MemoryLayout$PathElementClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class MemoryLayout$PathElement extends MemoryLayout$PathElement_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default MemoryLayout$PathElement;
//# sourceMappingURL=MemoryLayout$PathElement.d.ts.map