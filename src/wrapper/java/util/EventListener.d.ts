import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
/**
 * This class just defines types, you should import {@link EventListener} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class EventListenerClass extends JavaClass {
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createEventListenerProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface EventListenerInterface {
}
/**
 * Create a proxy for the {@link EventListener} interface.
 * All required methods in {@link EventListenerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createEventListenerProxy(methods: EventListenerInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<EventListenerInterface>;
declare const EventListener_base: typeof EventListenerClass;
/**
 * Class java.util.EventListener.
 *
 * This actually imports the java class for further use.
 * The class {@link EventListenerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class EventListener extends EventListener_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default EventListener;
//# sourceMappingURL=EventListener.d.ts.map