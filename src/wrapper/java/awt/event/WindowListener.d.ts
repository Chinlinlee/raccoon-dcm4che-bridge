import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { WindowEvent as java_awt_event_WindowEvent } from "./WindowEvent";
/**
 * This class just defines types, you should import {@link WindowListener} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class WindowListenerClass extends JavaClass {
    /**
     * @param var0 original type: 'java.awt.event.WindowEvent'
     * @return original return type: 'void'
     */
    windowDeactivated(var0: java_awt_event_WindowEvent | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.event.WindowEvent'
     * @return original return type: 'void'
     */
    windowDeactivatedSync(var0: java_awt_event_WindowEvent | null): void;
    /**
     * @param var0 original type: 'java.awt.event.WindowEvent'
     * @return original return type: 'void'
     */
    windowClosed(var0: java_awt_event_WindowEvent | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.event.WindowEvent'
     * @return original return type: 'void'
     */
    windowClosedSync(var0: java_awt_event_WindowEvent | null): void;
    /**
     * @param var0 original type: 'java.awt.event.WindowEvent'
     * @return original return type: 'void'
     */
    windowOpened(var0: java_awt_event_WindowEvent | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.event.WindowEvent'
     * @return original return type: 'void'
     */
    windowOpenedSync(var0: java_awt_event_WindowEvent | null): void;
    /**
     * @param var0 original type: 'java.awt.event.WindowEvent'
     * @return original return type: 'void'
     */
    windowActivated(var0: java_awt_event_WindowEvent | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.event.WindowEvent'
     * @return original return type: 'void'
     */
    windowActivatedSync(var0: java_awt_event_WindowEvent | null): void;
    /**
     * @param var0 original type: 'java.awt.event.WindowEvent'
     * @return original return type: 'void'
     */
    windowClosing(var0: java_awt_event_WindowEvent | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.event.WindowEvent'
     * @return original return type: 'void'
     */
    windowClosingSync(var0: java_awt_event_WindowEvent | null): void;
    /**
     * @param var0 original type: 'java.awt.event.WindowEvent'
     * @return original return type: 'void'
     */
    windowDeiconified(var0: java_awt_event_WindowEvent | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.event.WindowEvent'
     * @return original return type: 'void'
     */
    windowDeiconifiedSync(var0: java_awt_event_WindowEvent | null): void;
    /**
     * @param var0 original type: 'java.awt.event.WindowEvent'
     * @return original return type: 'void'
     */
    windowIconified(var0: java_awt_event_WindowEvent | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.event.WindowEvent'
     * @return original return type: 'void'
     */
    windowIconifiedSync(var0: java_awt_event_WindowEvent | null): void;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createWindowListenerProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface WindowListenerInterface {
    /**
     * @param var0 original type: 'java.awt.event.WindowEvent'
     * @return original return type: 'void'
     */
    windowDeactivated(var0: java_awt_event_WindowEvent | null): void;
    /**
     * @param var0 original type: 'java.awt.event.WindowEvent'
     * @return original return type: 'void'
     */
    windowClosed(var0: java_awt_event_WindowEvent | null): void;
    /**
     * @param var0 original type: 'java.awt.event.WindowEvent'
     * @return original return type: 'void'
     */
    windowOpened(var0: java_awt_event_WindowEvent | null): void;
    /**
     * @param var0 original type: 'java.awt.event.WindowEvent'
     * @return original return type: 'void'
     */
    windowActivated(var0: java_awt_event_WindowEvent | null): void;
    /**
     * @param var0 original type: 'java.awt.event.WindowEvent'
     * @return original return type: 'void'
     */
    windowClosing(var0: java_awt_event_WindowEvent | null): void;
    /**
     * @param var0 original type: 'java.awt.event.WindowEvent'
     * @return original return type: 'void'
     */
    windowDeiconified(var0: java_awt_event_WindowEvent | null): void;
    /**
     * @param var0 original type: 'java.awt.event.WindowEvent'
     * @return original return type: 'void'
     */
    windowIconified(var0: java_awt_event_WindowEvent | null): void;
}
/**
 * Create a proxy for the {@link WindowListener} interface.
 * All required methods in {@link WindowListenerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createWindowListenerProxy(methods: WindowListenerInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<WindowListenerInterface>;
declare const WindowListener_base: typeof WindowListenerClass;
/**
 * Class java.awt.event.WindowListener.
 *
 * This actually imports the java class for further use.
 * The class {@link WindowListenerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class WindowListener extends WindowListener_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default WindowListener;
//# sourceMappingURL=WindowListener.d.ts.map