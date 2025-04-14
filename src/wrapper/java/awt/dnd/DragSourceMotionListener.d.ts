import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { DragSourceDragEvent as java_awt_dnd_DragSourceDragEvent } from "./DragSourceDragEvent";
/**
 * This class just defines types, you should import {@link DragSourceMotionListener} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DragSourceMotionListenerClass extends JavaClass {
    /**
     * @param var0 original type: 'java.awt.dnd.DragSourceDragEvent'
     * @return original return type: 'void'
     */
    dragMouseMoved(var0: java_awt_dnd_DragSourceDragEvent | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.dnd.DragSourceDragEvent'
     * @return original return type: 'void'
     */
    dragMouseMovedSync(var0: java_awt_dnd_DragSourceDragEvent | null): void;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createDragSourceMotionListenerProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface DragSourceMotionListenerInterface {
    /**
     * @param var0 original type: 'java.awt.dnd.DragSourceDragEvent'
     * @return original return type: 'void'
     */
    dragMouseMoved(var0: java_awt_dnd_DragSourceDragEvent | null): void;
}
/**
 * Create a proxy for the {@link DragSourceMotionListener} interface.
 * All required methods in {@link DragSourceMotionListenerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createDragSourceMotionListenerProxy(methods: DragSourceMotionListenerInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<DragSourceMotionListenerInterface>;
declare const DragSourceMotionListener_base: typeof DragSourceMotionListenerClass;
/**
 * Class java.awt.dnd.DragSourceMotionListener.
 *
 * This actually imports the java class for further use.
 * The class {@link DragSourceMotionListenerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DragSourceMotionListener extends DragSourceMotionListener_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default DragSourceMotionListener;
