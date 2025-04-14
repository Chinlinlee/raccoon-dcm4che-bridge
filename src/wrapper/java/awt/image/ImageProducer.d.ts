import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { ImageConsumer as java_awt_image_ImageConsumer, ImageConsumerInterface as java_awt_image_ImageConsumerInterface } from "./ImageConsumer";
/**
 * This class just defines types, you should import {@link ImageProducer} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ImageProducerClass extends JavaClass {
    /**
     * @param var0 original type: 'java.awt.image.ImageConsumer'
     * @return original return type: 'boolean'
     */
    isConsumer(var0: java_awt_image_ImageConsumer | JavaInterfaceProxy<java_awt_image_ImageConsumerInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.awt.image.ImageConsumer'
     * @return original return type: 'boolean'
     */
    isConsumerSync(var0: java_awt_image_ImageConsumer | JavaInterfaceProxy<java_awt_image_ImageConsumerInterface> | null): boolean;
    /**
     * @param var0 original type: 'java.awt.image.ImageConsumer'
     * @return original return type: 'void'
     */
    addConsumer(var0: java_awt_image_ImageConsumer | JavaInterfaceProxy<java_awt_image_ImageConsumerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.image.ImageConsumer'
     * @return original return type: 'void'
     */
    addConsumerSync(var0: java_awt_image_ImageConsumer | JavaInterfaceProxy<java_awt_image_ImageConsumerInterface> | null): void;
    /**
     * @param var0 original type: 'java.awt.image.ImageConsumer'
     * @return original return type: 'void'
     */
    requestTopDownLeftRightResend(var0: java_awt_image_ImageConsumer | JavaInterfaceProxy<java_awt_image_ImageConsumerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.image.ImageConsumer'
     * @return original return type: 'void'
     */
    requestTopDownLeftRightResendSync(var0: java_awt_image_ImageConsumer | JavaInterfaceProxy<java_awt_image_ImageConsumerInterface> | null): void;
    /**
     * @param var0 original type: 'java.awt.image.ImageConsumer'
     * @return original return type: 'void'
     */
    removeConsumer(var0: java_awt_image_ImageConsumer | JavaInterfaceProxy<java_awt_image_ImageConsumerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.image.ImageConsumer'
     * @return original return type: 'void'
     */
    removeConsumerSync(var0: java_awt_image_ImageConsumer | JavaInterfaceProxy<java_awt_image_ImageConsumerInterface> | null): void;
    /**
     * @param var0 original type: 'java.awt.image.ImageConsumer'
     * @return original return type: 'void'
     */
    startProduction(var0: java_awt_image_ImageConsumer | JavaInterfaceProxy<java_awt_image_ImageConsumerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.image.ImageConsumer'
     * @return original return type: 'void'
     */
    startProductionSync(var0: java_awt_image_ImageConsumer | JavaInterfaceProxy<java_awt_image_ImageConsumerInterface> | null): void;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createImageProducerProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface ImageProducerInterface {
    /**
     * @param var0 original type: 'java.awt.image.ImageConsumer'
     * @return original return type: 'boolean'
     */
    isConsumer(var0: java_awt_image_ImageConsumer | JavaInterfaceProxy<java_awt_image_ImageConsumerInterface> | null): boolean;
    /**
     * @param var0 original type: 'java.awt.image.ImageConsumer'
     * @return original return type: 'void'
     */
    addConsumer(var0: java_awt_image_ImageConsumer | JavaInterfaceProxy<java_awt_image_ImageConsumerInterface> | null): void;
    /**
     * @param var0 original type: 'java.awt.image.ImageConsumer'
     * @return original return type: 'void'
     */
    requestTopDownLeftRightResend(var0: java_awt_image_ImageConsumer | JavaInterfaceProxy<java_awt_image_ImageConsumerInterface> | null): void;
    /**
     * @param var0 original type: 'java.awt.image.ImageConsumer'
     * @return original return type: 'void'
     */
    removeConsumer(var0: java_awt_image_ImageConsumer | JavaInterfaceProxy<java_awt_image_ImageConsumerInterface> | null): void;
    /**
     * @param var0 original type: 'java.awt.image.ImageConsumer'
     * @return original return type: 'void'
     */
    startProduction(var0: java_awt_image_ImageConsumer | JavaInterfaceProxy<java_awt_image_ImageConsumerInterface> | null): void;
}
/**
 * Create a proxy for the {@link ImageProducer} interface.
 * All required methods in {@link ImageProducerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createImageProducerProxy(methods: ImageProducerInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<ImageProducerInterface>;
declare const ImageProducer_base: typeof ImageProducerClass;
/**
 * Class java.awt.image.ImageProducer.
 *
 * This actually imports the java class for further use.
 * The class {@link ImageProducerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ImageProducer extends ImageProducer_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default ImageProducer;
