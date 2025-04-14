import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Long as java_lang_Long } from "./../../lang/Long";
/**
 * This class just defines types, you should import {@link ObjLongConsumer} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ObjLongConsumerClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'long'
     * @return original return type: 'void'
     */
    accept(var0: BasicOrJavaType | null, var1: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'long'
     * @return original return type: 'void'
     */
    acceptSync(var0: BasicOrJavaType | null, var1: java_lang_Long | bigint | number): void;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createObjLongConsumerProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface ObjLongConsumerInterface {
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'long'
     * @return original return type: 'void'
     */
    accept(var0: BasicOrJavaType | null, var1: java_lang_Long | bigint | number): void;
}
/**
 * Create a proxy for the {@link ObjLongConsumer} interface.
 * All required methods in {@link ObjLongConsumerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createObjLongConsumerProxy(methods: ObjLongConsumerInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<ObjLongConsumerInterface>;
declare const ObjLongConsumer_base: typeof ObjLongConsumerClass;
/**
 * Class java.util.function.ObjLongConsumer.
 *
 * This actually imports the java class for further use.
 * The class {@link ObjLongConsumerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ObjLongConsumer extends ObjLongConsumer_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default ObjLongConsumer;
