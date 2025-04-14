import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { InputMethodEvent as java_awt_event_InputMethodEvent } from "./InputMethodEvent";
/**
 * This class just defines types, you should import {@link InputMethodListener} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class InputMethodListenerClass extends JavaClass {
    /**
     * @param var0 original type: 'java.awt.event.InputMethodEvent'
     * @return original return type: 'void'
     */
    inputMethodTextChanged(var0: java_awt_event_InputMethodEvent | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.event.InputMethodEvent'
     * @return original return type: 'void'
     */
    inputMethodTextChangedSync(var0: java_awt_event_InputMethodEvent | null): void;
    /**
     * @param var0 original type: 'java.awt.event.InputMethodEvent'
     * @return original return type: 'void'
     */
    caretPositionChanged(var0: java_awt_event_InputMethodEvent | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.event.InputMethodEvent'
     * @return original return type: 'void'
     */
    caretPositionChangedSync(var0: java_awt_event_InputMethodEvent | null): void;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createInputMethodListenerProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface InputMethodListenerInterface {
    /**
     * @param var0 original type: 'java.awt.event.InputMethodEvent'
     * @return original return type: 'void'
     */
    inputMethodTextChanged(var0: java_awt_event_InputMethodEvent | null): void;
    /**
     * @param var0 original type: 'java.awt.event.InputMethodEvent'
     * @return original return type: 'void'
     */
    caretPositionChanged(var0: java_awt_event_InputMethodEvent | null): void;
}
/**
 * Create a proxy for the {@link InputMethodListener} interface.
 * All required methods in {@link InputMethodListenerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createInputMethodListenerProxy(methods: InputMethodListenerInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<InputMethodListenerInterface>;
declare const InputMethodListener_base: typeof InputMethodListenerClass;
/**
 * Class java.awt.event.InputMethodListener.
 *
 * This actually imports the java class for further use.
 * The class {@link InputMethodListenerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class InputMethodListener extends InputMethodListener_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default InputMethodListener;
