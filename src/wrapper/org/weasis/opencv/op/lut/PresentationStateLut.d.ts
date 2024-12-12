import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Optional as java_util_Optional } from "./../../../../../java/util/Optional";
/**
 * This class just defines types, you should import {@link PresentationStateLut} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PresentationStateLutClass extends JavaClass {
    /**
     * @return original return type: 'java.util.Optional'
     */
    getPrLutExplanation(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getPrLutExplanationSync(): java_util_Optional | null;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getPrLutShapeMode(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getPrLutShapeModeSync(): java_util_Optional | null;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getPrLut(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getPrLutSync(): java_util_Optional | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createPresentationStateLutProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface PresentationStateLutInterface {
    /**
     * @return original return type: 'java.util.Optional'
     */
    getPrLutExplanation(): java_util_Optional | null;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getPrLutShapeMode(): java_util_Optional | null;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getPrLut(): java_util_Optional | null;
}
/**
 * Create a proxy for the {@link PresentationStateLut} interface.
 * All required methods in {@link PresentationStateLutInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createPresentationStateLutProxy(methods: PresentationStateLutInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<PresentationStateLutInterface>;
declare const PresentationStateLut_base: typeof PresentationStateLutClass;
/**
 * Class org.weasis.opencv.op.lut.PresentationStateLut.
 *
 * This actually imports the java class for further use.
 * The class {@link PresentationStateLutClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PresentationStateLut extends PresentationStateLut_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default PresentationStateLut;
//# sourceMappingURL=PresentationStateLut.d.ts.map