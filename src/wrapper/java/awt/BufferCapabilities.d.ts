import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../lang/Class";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { ImageCapabilities as java_awt_ImageCapabilities } from "./ImageCapabilities";
import { BufferCapabilities$FlipContents as java_awt_BufferCapabilities$FlipContents } from "./BufferCapabilities$FlipContents";
/**
 * This class just defines types, you should import {@link BufferCapabilities} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class BufferCapabilitiesClass extends JavaClass {
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
     * @return original return type: 'boolean'
     */
    isFullScreenRequired(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isFullScreenRequiredSync(): boolean;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'java.awt.ImageCapabilities'
     */
    getFrontBufferCapabilities(): Promise<java_awt_ImageCapabilities | null>;
    /**
     * @return original return type: 'java.awt.ImageCapabilities'
     */
    getFrontBufferCapabilitiesSync(): java_awt_ImageCapabilities | null;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'java.awt.BufferCapabilities$FlipContents'
     */
    getFlipContents(): Promise<java_awt_BufferCapabilities$FlipContents | null>;
    /**
     * @return original return type: 'java.awt.BufferCapabilities$FlipContents'
     */
    getFlipContentsSync(): java_awt_BufferCapabilities$FlipContents | null;
    /**
     * @return original return type: 'boolean'
     */
    isPageFlipping(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isPageFlippingSync(): boolean;
    /**
     * @return original return type: 'java.awt.ImageCapabilities'
     */
    getBackBufferCapabilities(): Promise<java_awt_ImageCapabilities | null>;
    /**
     * @return original return type: 'java.awt.ImageCapabilities'
     */
    getBackBufferCapabilitiesSync(): java_awt_ImageCapabilities | null;
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
     * @return original return type: 'java.lang.Object'
     */
    clone(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    cloneSync(): BasicOrJavaType | null;
    /**
     * @return original return type: 'boolean'
     */
    isMultiBufferAvailable(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isMultiBufferAvailableSync(): boolean;
    /**
     * @param var0 original type: 'java.awt.ImageCapabilities'
     * @param var1 original type: 'java.awt.ImageCapabilities'
     * @param var2 original type: 'java.awt.BufferCapabilities$FlipContents'
     */
    constructor(var0: java_awt_ImageCapabilities | null, var1: java_awt_ImageCapabilities | null, var2: java_awt_BufferCapabilities$FlipContents | null);
    /**
     * @param var0 original type: 'java.awt.ImageCapabilities'
     * @param var1 original type: 'java.awt.ImageCapabilities'
     * @param var2 original type: 'java.awt.BufferCapabilities$FlipContents'
     * @return original return type: 'java.awt.BufferCapabilities'
     */
    static newInstanceAsync(var0: java_awt_ImageCapabilities | null, var1: java_awt_ImageCapabilities | null, var2: java_awt_BufferCapabilities$FlipContents | null): Promise<BufferCapabilities>;
}
declare const BufferCapabilities_base: typeof BufferCapabilitiesClass;
/**
 * Class java.awt.BufferCapabilities.
 *
 * This actually imports the java class for further use.
 * The class {@link BufferCapabilitiesClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class BufferCapabilities extends BufferCapabilities_base {
}
export default BufferCapabilities;
//# sourceMappingURL=BufferCapabilities.d.ts.map