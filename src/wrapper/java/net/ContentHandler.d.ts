import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../lang/Class";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { URLConnection as java_net_URLConnection } from "./URLConnection";
/**
 * This class just defines types, you should import {@link ContentHandler} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ContentHandlerClass extends JavaClass {
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
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @param var0 original type: 'java.net.URLConnection'
     * @return original return type: 'java.lang.Object'
     */
    getContent(var0: java_net_URLConnection | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.net.URLConnection'
     * @return original return type: 'java.lang.Object'
     */
    getContentSync(var0: java_net_URLConnection | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.net.URLConnection'
     * @param var1 original type: 'java.lang.Class[]'
     * @return original return type: 'java.lang.Object'
     */
    getContent(var0: java_net_URLConnection | null, var1: (java_lang_Class | null)[] | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.net.URLConnection'
     * @param var1 original type: 'java.lang.Class[]'
     * @return original return type: 'java.lang.Object'
     */
    getContentSync(var0: java_net_URLConnection | null, var1: (java_lang_Class | null)[] | null): BasicOrJavaType | null;
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
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
}
declare const ContentHandler_base: typeof ContentHandlerClass;
/**
 * Class java.net.ContentHandler.
 *
 * This actually imports the java class for further use.
 * The class {@link ContentHandlerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ContentHandler extends ContentHandler_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default ContentHandler;
//# sourceMappingURL=ContentHandler.d.ts.map