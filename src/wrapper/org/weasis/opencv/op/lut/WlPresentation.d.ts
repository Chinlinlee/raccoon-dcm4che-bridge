import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { PresentationStateLut as org_weasis_opencv_op_lut_PresentationStateLut } from "./PresentationStateLut";
/**
 * This class just defines types, you should import {@link WlPresentation} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class WlPresentationClass extends JavaClass {
    /**
     * @return original return type: 'org.weasis.opencv.op.lut.PresentationStateLut'
     */
    getPresentationState(): Promise<org_weasis_opencv_op_lut_PresentationStateLut | null>;
    /**
     * @return original return type: 'org.weasis.opencv.op.lut.PresentationStateLut'
     */
    getPresentationStateSync(): org_weasis_opencv_op_lut_PresentationStateLut | null;
    /**
     * @return original return type: 'boolean'
     */
    isPixelPadding(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isPixelPaddingSync(): boolean;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createWlPresentationProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface WlPresentationInterface {
    /**
     * @return original return type: 'org.weasis.opencv.op.lut.PresentationStateLut'
     */
    getPresentationState(): org_weasis_opencv_op_lut_PresentationStateLut | null;
    /**
     * @return original return type: 'boolean'
     */
    isPixelPadding(): boolean;
}
/**
 * Create a proxy for the {@link WlPresentation} interface.
 * All required methods in {@link WlPresentationInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createWlPresentationProxy(methods: WlPresentationInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<WlPresentationInterface>;
declare const WlPresentation_base: typeof WlPresentationClass;
/**
 * Class org.weasis.opencv.op.lut.WlPresentation.
 *
 * This actually imports the java class for further use.
 * The class {@link WlPresentationClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class WlPresentation extends WlPresentation_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default WlPresentation;
