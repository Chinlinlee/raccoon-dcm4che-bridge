import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { ImageCV as org_weasis_opencv_data_ImageCV } from "./ImageCV";
import { Boolean as java_lang_Boolean } from "./../../../../java/lang/Boolean";
import { Mat as org_opencv_core_Mat } from "./../../../opencv/core/Mat";
import { Size as org_opencv_core_Size } from "./../../../opencv/core/Size";
import { Integer as java_lang_Integer } from "./../../../../java/lang/Integer";
import { Short as java_lang_Short } from "./../../../../java/lang/Short";
import { Float as java_lang_Float } from "./../../../../java/lang/Float";
import { Double as java_lang_Double } from "./../../../../java/lang/Double";
/**
 * This class just defines types, you should import {@link PlanarImage} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PlanarImageClass extends JavaClass {
    /**
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    toImageCV(): Promise<org_weasis_opencv_data_ImageCV | null>;
    /**
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    toImageCVSync(): org_weasis_opencv_data_ImageCV | null;
    /**
     * @return original return type: 'int'
     */
    dims(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    dimsSync(): number;
    /**
     * @return original return type: 'void'
     */
    release(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    releaseSync(): void;
    /**
     * @return original return type: 'long'
     */
    elemSize(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    elemSizeSync(): number;
    /**
     * @return original return type: 'long'
     */
    physicalBytes(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    physicalBytesSync(): number;
    /**
     * @return original return type: 'int'
     */
    type(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    typeSync(): number;
    /**
     * @return original return type: 'boolean'
     */
    isHasBeenReleased(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isHasBeenReleasedSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setReleasedAfterProcessing(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setReleasedAfterProcessingSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'int'
     */
    depth(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    depthSync(): number;
    /**
     * @return original return type: 'org.opencv.core.Mat'
     */
    toMat(): Promise<org_opencv_core_Mat | null>;
    /**
     * @return original return type: 'org.opencv.core.Mat'
     */
    toMatSync(): org_opencv_core_Mat | null;
    /**
     * @return original return type: 'org.opencv.core.Size'
     */
    size(): Promise<org_opencv_core_Size | null>;
    /**
     * @return original return type: 'org.opencv.core.Size'
     */
    sizeSync(): org_opencv_core_Size | null;
    /**
     * @return original return type: 'int'
     */
    channels(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    channelsSync(): number;
    /**
     * @return original return type: 'boolean'
     */
    isReleasedAfterProcessing(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isReleasedAfterProcessingSync(): boolean;
    /**
     * @return original return type: 'long'
     */
    elemSize1(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    elemSize1Sync(): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'short[]'
     * @return original return type: 'int'
     */
    get(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Short | number)[] | null): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'short[]'
     * @return original return type: 'int'
     */
    getSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Short | number)[] | null): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'double[]'
     */
    get(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'double[]'
     */
    getSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): (number)[] | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'byte[]'
     * @return original return type: 'int'
     */
    get(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: Buffer | null): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'byte[]'
     * @return original return type: 'int'
     */
    getSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: Buffer | null): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int[]'
     * @return original return type: 'int'
     */
    get(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Integer | number)[] | null): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int[]'
     * @return original return type: 'int'
     */
    getSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Integer | number)[] | null): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'float[]'
     * @return original return type: 'int'
     */
    get(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Float | number)[] | null): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'float[]'
     * @return original return type: 'int'
     */
    getSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Float | number)[] | null): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'double[]'
     * @return original return type: 'int'
     */
    get(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Double | number)[] | null): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'double[]'
     * @return original return type: 'int'
     */
    getSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Double | number)[] | null): number;
    /**
     * @return original return type: 'int'
     */
    width(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    widthSync(): number;
    /**
     * @return original return type: 'void'
     */
    close(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    closeSync(): void;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @return original return type: 'void'
     */
    assignTo(var0: org_opencv_core_Mat | null): Promise<void>;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @return original return type: 'void'
     */
    assignToSync(var0: org_opencv_core_Mat | null): void;
    /**
     * @return original return type: 'int'
     */
    height(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    heightSync(): number;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createPlanarImageProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface PlanarImageInterface {
    /**
     * @return original return type: 'org.weasis.opencv.data.ImageCV'
     */
    toImageCV?(): org_weasis_opencv_data_ImageCV | null;
    /**
     * @return original return type: 'int'
     */
    dims(): number;
    /**
     * @return original return type: 'void'
     */
    release(): void;
    /**
     * @return original return type: 'long'
     */
    elemSize(): number;
    /**
     * @return original return type: 'long'
     */
    physicalBytes(): number;
    /**
     * @return original return type: 'int'
     */
    type(): number;
    /**
     * @return original return type: 'boolean'
     */
    isHasBeenReleased(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setReleasedAfterProcessing(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'int'
     */
    depth(): number;
    /**
     * @return original return type: 'org.opencv.core.Mat'
     */
    toMat?(): org_opencv_core_Mat | null;
    /**
     * @return original return type: 'org.opencv.core.Size'
     */
    size(): org_opencv_core_Size | null;
    /**
     * @return original return type: 'int'
     */
    channels(): number;
    /**
     * @return original return type: 'boolean'
     */
    isReleasedAfterProcessing(): boolean;
    /**
     * @return original return type: 'long'
     */
    elemSize1(): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'short[]'
     * @return original return type: 'int'
     */
    get(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Short | number)[] | null): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'double[]'
     */
    get(var0: java_lang_Integer | number, var1: java_lang_Integer | number): (number)[] | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'byte[]'
     * @return original return type: 'int'
     */
    get(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: Buffer | null): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int[]'
     * @return original return type: 'int'
     */
    get(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Integer | number)[] | null): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'float[]'
     * @return original return type: 'int'
     */
    get(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Float | number)[] | null): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'double[]'
     * @return original return type: 'int'
     */
    get(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (java_lang_Double | number)[] | null): number;
    /**
     * @return original return type: 'int'
     */
    width(): number;
    /**
     * @return original return type: 'void'
     */
    close(): void;
    /**
     * @param var0 original type: 'org.opencv.core.Mat'
     * @return original return type: 'void'
     */
    assignTo(var0: org_opencv_core_Mat | null): void;
    /**
     * @return original return type: 'int'
     */
    height(): number;
}
/**
 * Create a proxy for the {@link PlanarImage} interface.
 * All required methods in {@link PlanarImageInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createPlanarImageProxy(methods: PlanarImageInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<PlanarImageInterface>;
declare const PlanarImage_base: typeof PlanarImageClass;
/**
 * Class org.weasis.opencv.data.PlanarImage.
 *
 * This actually imports the java class for further use.
 * The class {@link PlanarImageClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PlanarImage extends PlanarImage_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default PlanarImage;
