import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Font as java_awt_Font } from "./Font";
import { MenuComponent as java_awt_MenuComponent } from "./MenuComponent";
import { Event as java_awt_Event } from "./Event";
/**
 * This class just defines types, you should import {@link MenuContainer} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class MenuContainerClass extends JavaClass {
    /**
     * @return original return type: 'java.awt.Font'
     */
    getFont(): Promise<java_awt_Font | null>;
    /**
     * @return original return type: 'java.awt.Font'
     */
    getFontSync(): java_awt_Font | null;
    /**
     * @param var0 original type: 'java.awt.MenuComponent'
     * @return original return type: 'void'
     */
    remove(var0: java_awt_MenuComponent | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.MenuComponent'
     * @return original return type: 'void'
     */
    removeSync(var0: java_awt_MenuComponent | null): void;
    /**
     * @param var0 original type: 'java.awt.Event'
     * @return original return type: 'boolean'
     */
    postEvent(var0: java_awt_Event | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.awt.Event'
     * @return original return type: 'boolean'
     */
    postEventSync(var0: java_awt_Event | null): boolean;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createMenuContainerProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface MenuContainerInterface {
    /**
     * @return original return type: 'java.awt.Font'
     */
    getFont(): java_awt_Font | null;
    /**
     * @param var0 original type: 'java.awt.MenuComponent'
     * @return original return type: 'void'
     */
    remove(var0: java_awt_MenuComponent | null): void;
    /**
     * @param var0 original type: 'java.awt.Event'
     * @return original return type: 'boolean'
     */
    postEvent(var0: java_awt_Event | null): boolean;
}
/**
 * Create a proxy for the {@link MenuContainer} interface.
 * All required methods in {@link MenuContainerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createMenuContainerProxy(methods: MenuContainerInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<MenuContainerInterface>;
declare const MenuContainer_base: typeof MenuContainerClass;
/**
 * Class java.awt.MenuContainer.
 *
 * This actually imports the java class for further use.
 * The class {@link MenuContainerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class MenuContainer extends MenuContainer_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default MenuContainer;
