import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./../../java/lang/Class";
import { Long as java_lang_Long } from "./../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../java/lang/Integer";
import { ImageTypeSpecifier as javax_imageio_ImageTypeSpecifier } from "./ImageTypeSpecifier";
import { IIOParamController as javax_imageio_IIOParamController, IIOParamControllerInterface as javax_imageio_IIOParamControllerInterface } from "./IIOParamController";
import { Point as java_awt_Point } from "./../../java/awt/Point";
import { Rectangle as java_awt_Rectangle } from "./../../java/awt/Rectangle";
/**
 * This class just defines types, you should import {@link IIOParam} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IIOParamClass extends JavaClass {
    /**
     * @return original return type: 'boolean'
     */
    hasController(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasControllerSync(): boolean;
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
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'void'
     */
    setSourceSubsampling(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'void'
     */
    setSourceSubsamplingSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number): void;
    /**
     * @return original return type: 'int'
     */
    getSubsamplingYOffset(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getSubsamplingYOffsetSync(): number;
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
    /**
     * @param var0 original type: 'int[]'
     * @return original return type: 'void'
     */
    setSourceBands(var0: (java_lang_Integer | number)[] | null): Promise<void>;
    /**
     * @param var0 original type: 'int[]'
     * @return original return type: 'void'
     */
    setSourceBandsSync(var0: (java_lang_Integer | number)[] | null): void;
    /**
     * @param var0 original type: 'javax.imageio.ImageTypeSpecifier'
     * @return original return type: 'void'
     */
    setDestinationType(var0: javax_imageio_ImageTypeSpecifier | null): Promise<void>;
    /**
     * @param var0 original type: 'javax.imageio.ImageTypeSpecifier'
     * @return original return type: 'void'
     */
    setDestinationTypeSync(var0: javax_imageio_ImageTypeSpecifier | null): void;
    /**
     * @return original return type: 'javax.imageio.IIOParamController'
     */
    getDefaultController(): Promise<javax_imageio_IIOParamController | null>;
    /**
     * @return original return type: 'javax.imageio.IIOParamController'
     */
    getDefaultControllerSync(): javax_imageio_IIOParamController | null;
    /**
     * @return original return type: 'int'
     */
    getSourceYSubsampling(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getSourceYSubsamplingSync(): number;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'boolean'
     */
    activateController(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    activateControllerSync(): boolean;
    /**
     * @return original return type: 'int'
     */
    getSourceXSubsampling(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getSourceXSubsamplingSync(): number;
    /**
     * @return original return type: 'java.awt.Point'
     */
    getDestinationOffset(): Promise<java_awt_Point | null>;
    /**
     * @return original return type: 'java.awt.Point'
     */
    getDestinationOffsetSync(): java_awt_Point | null;
    /**
     * @return original return type: 'javax.imageio.ImageTypeSpecifier'
     */
    getDestinationType(): Promise<javax_imageio_ImageTypeSpecifier | null>;
    /**
     * @return original return type: 'javax.imageio.ImageTypeSpecifier'
     */
    getDestinationTypeSync(): javax_imageio_ImageTypeSpecifier | null;
    /**
     * @param var0 original type: 'java.awt.Rectangle'
     * @return original return type: 'void'
     */
    setSourceRegion(var0: java_awt_Rectangle | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.Rectangle'
     * @return original return type: 'void'
     */
    setSourceRegionSync(var0: java_awt_Rectangle | null): void;
    /**
     * @return original return type: 'int[]'
     */
    getSourceBands(): Promise<(number)[] | null>;
    /**
     * @return original return type: 'int[]'
     */
    getSourceBandsSync(): (number)[] | null;
    /**
     * @return original return type: 'int'
     */
    getSubsamplingXOffset(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getSubsamplingXOffsetSync(): number;
    /**
     * @return original return type: 'javax.imageio.IIOParamController'
     */
    getController(): Promise<javax_imageio_IIOParamController | null>;
    /**
     * @return original return type: 'javax.imageio.IIOParamController'
     */
    getControllerSync(): javax_imageio_IIOParamController | null;
    /**
     * @return original return type: 'java.awt.Rectangle'
     */
    getSourceRegion(): Promise<java_awt_Rectangle | null>;
    /**
     * @return original return type: 'java.awt.Rectangle'
     */
    getSourceRegionSync(): java_awt_Rectangle | null;
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
     * @param var0 original type: 'javax.imageio.IIOParamController'
     * @return original return type: 'void'
     */
    setController(var0: javax_imageio_IIOParamController | JavaInterfaceProxy<javax_imageio_IIOParamControllerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'javax.imageio.IIOParamController'
     * @return original return type: 'void'
     */
    setControllerSync(var0: javax_imageio_IIOParamController | JavaInterfaceProxy<javax_imageio_IIOParamControllerInterface> | null): void;
    /**
     * @param var0 original type: 'java.awt.Point'
     * @return original return type: 'void'
     */
    setDestinationOffset(var0: java_awt_Point | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.Point'
     * @return original return type: 'void'
     */
    setDestinationOffsetSync(var0: java_awt_Point | null): void;
}
declare const IIOParam_base: typeof IIOParamClass;
/**
 * Class javax.imageio.IIOParam.
 *
 * This actually imports the java class for further use.
 * The class {@link IIOParamClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IIOParam extends IIOParam_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default IIOParam;
