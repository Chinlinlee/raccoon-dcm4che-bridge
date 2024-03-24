import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
/**
 * This class just defines types, you should import {@link TypeDescriptor$OfField} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class TypeDescriptor$OfFieldClass extends JavaClass {
    /**
     * @return original return type: 'boolean'
     */
    isArray(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isArraySync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isPrimitive(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isPrimitiveSync(): boolean;
    /**
     * @return original return type: 'java.lang.invoke.TypeDescriptor$OfField'
     */
    componentType(): Promise<TypeDescriptor$OfField | null>;
    /**
     * @return original return type: 'java.lang.invoke.TypeDescriptor$OfField'
     */
    componentTypeSync(): TypeDescriptor$OfField | null;
    /**
     * @return original return type: 'java.lang.invoke.TypeDescriptor$OfField'
     */
    arrayType(): Promise<TypeDescriptor$OfField | null>;
    /**
     * @return original return type: 'java.lang.invoke.TypeDescriptor$OfField'
     */
    arrayTypeSync(): TypeDescriptor$OfField | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    descriptorString(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    descriptorStringSync(): string | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createTypeDescriptor$OfFieldProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface TypeDescriptor$OfFieldInterface {
    /**
     * @return original return type: 'boolean'
     */
    isArray(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isPrimitive(): boolean;
    /**
     * @return original return type: 'java.lang.invoke.TypeDescriptor$OfField'
     */
    componentType(): TypeDescriptor$OfField | null;
    /**
     * @return original return type: 'java.lang.invoke.TypeDescriptor$OfField'
     */
    arrayType(): TypeDescriptor$OfField | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    descriptorString(): string | null;
}
/**
 * Create a proxy for the {@link TypeDescriptor$OfField} interface.
 * All required methods in {@link TypeDescriptor$OfFieldInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createTypeDescriptor$OfFieldProxy(methods: TypeDescriptor$OfFieldInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<TypeDescriptor$OfFieldInterface>;
declare const TypeDescriptor$OfField_base: typeof TypeDescriptor$OfFieldClass;
/**
 * Class java.lang.invoke.TypeDescriptor$OfField.
 *
 * This actually imports the java class for further use.
 * The class {@link TypeDescriptor$OfFieldClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class TypeDescriptor$OfField extends TypeDescriptor$OfField_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default TypeDescriptor$OfField;
//# sourceMappingURL=TypeDescriptor$OfField.d.ts.map