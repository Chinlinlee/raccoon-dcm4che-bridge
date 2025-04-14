import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
/**
 * This class just defines types, you should import {@link ObjIntConsumer} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ObjIntConsumerClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    accept(var0: BasicOrJavaType | null, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    acceptSync(var0: BasicOrJavaType | null, var1: java_lang_Integer | number): void;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createObjIntConsumerProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface ObjIntConsumerInterface {
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    accept(var0: BasicOrJavaType | null, var1: java_lang_Integer | number): void;
}
/**
 * Create a proxy for the {@link ObjIntConsumer} interface.
 * All required methods in {@link ObjIntConsumerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createObjIntConsumerProxy(methods: ObjIntConsumerInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<ObjIntConsumerInterface>;
declare const ObjIntConsumer_base: typeof ObjIntConsumerClass;
/**
 * Class java.util.function.ObjIntConsumer.
 *
 * This actually imports the java class for further use.
 * The class {@link ObjIntConsumerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ObjIntConsumer extends ObjIntConsumer_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default ObjIntConsumer;
