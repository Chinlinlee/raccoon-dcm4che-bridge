import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { WindowEvent as java_awt_event_WindowEvent } from "./WindowEvent";
/**
 * This class just defines types, you should import {@link WindowFocusListener} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class WindowFocusListenerClass extends JavaClass {
    /**
     * @param var0 original type: 'java.awt.event.WindowEvent'
     * @return original return type: 'void'
     */
    windowGainedFocus(var0: java_awt_event_WindowEvent | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.event.WindowEvent'
     * @return original return type: 'void'
     */
    windowGainedFocusSync(var0: java_awt_event_WindowEvent | null): void;
    /**
     * @param var0 original type: 'java.awt.event.WindowEvent'
     * @return original return type: 'void'
     */
    windowLostFocus(var0: java_awt_event_WindowEvent | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.event.WindowEvent'
     * @return original return type: 'void'
     */
    windowLostFocusSync(var0: java_awt_event_WindowEvent | null): void;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createWindowFocusListenerProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface WindowFocusListenerInterface {
    /**
     * @param var0 original type: 'java.awt.event.WindowEvent'
     * @return original return type: 'void'
     */
    windowGainedFocus(var0: java_awt_event_WindowEvent | null): void;
    /**
     * @param var0 original type: 'java.awt.event.WindowEvent'
     * @return original return type: 'void'
     */
    windowLostFocus(var0: java_awt_event_WindowEvent | null): void;
}
/**
 * Create a proxy for the {@link WindowFocusListener} interface.
 * All required methods in {@link WindowFocusListenerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createWindowFocusListenerProxy(methods: WindowFocusListenerInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<WindowFocusListenerInterface>;
declare const WindowFocusListener_base: typeof WindowFocusListenerClass;
/**
 * Class java.awt.event.WindowFocusListener.
 *
 * This actually imports the java class for further use.
 * The class {@link WindowFocusListenerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class WindowFocusListener extends WindowFocusListener_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default WindowFocusListener;
//# sourceMappingURL=WindowFocusListener.d.ts.map