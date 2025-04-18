import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Dimension as java_awt_Dimension } from "./Dimension";
import { Container as java_awt_Container } from "./Container";
import { Component as java_awt_Component } from "./Component";
/**
 * This class just defines types, you should import {@link LayoutManager} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class LayoutManagerClass extends JavaClass {
    /**
     * @param var0 original type: 'java.awt.Container'
     * @return original return type: 'java.awt.Dimension'
     */
    preferredLayoutSize(var0: java_awt_Container | null): Promise<java_awt_Dimension | null>;
    /**
     * @param var0 original type: 'java.awt.Container'
     * @return original return type: 'java.awt.Dimension'
     */
    preferredLayoutSizeSync(var0: java_awt_Container | null): java_awt_Dimension | null;
    /**
     * @param var0 original type: 'java.awt.Component'
     * @return original return type: 'void'
     */
    removeLayoutComponent(var0: java_awt_Component | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.Component'
     * @return original return type: 'void'
     */
    removeLayoutComponentSync(var0: java_awt_Component | null): void;
    /**
     * @param var0 original type: 'java.awt.Container'
     * @return original return type: 'java.awt.Dimension'
     */
    minimumLayoutSize(var0: java_awt_Container | null): Promise<java_awt_Dimension | null>;
    /**
     * @param var0 original type: 'java.awt.Container'
     * @return original return type: 'java.awt.Dimension'
     */
    minimumLayoutSizeSync(var0: java_awt_Container | null): java_awt_Dimension | null;
    /**
     * @param var0 original type: 'java.awt.Container'
     * @return original return type: 'void'
     */
    layoutContainer(var0: java_awt_Container | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.Container'
     * @return original return type: 'void'
     */
    layoutContainerSync(var0: java_awt_Container | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.awt.Component'
     * @return original return type: 'void'
     */
    addLayoutComponent(var0: string | null, var1: java_awt_Component | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.awt.Component'
     * @return original return type: 'void'
     */
    addLayoutComponentSync(var0: string | null, var1: java_awt_Component | null): void;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createLayoutManagerProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface LayoutManagerInterface {
    /**
     * @param var0 original type: 'java.awt.Container'
     * @return original return type: 'java.awt.Dimension'
     */
    preferredLayoutSize(var0: java_awt_Container | null): java_awt_Dimension | null;
    /**
     * @param var0 original type: 'java.awt.Component'
     * @return original return type: 'void'
     */
    removeLayoutComponent(var0: java_awt_Component | null): void;
    /**
     * @param var0 original type: 'java.awt.Container'
     * @return original return type: 'java.awt.Dimension'
     */
    minimumLayoutSize(var0: java_awt_Container | null): java_awt_Dimension | null;
    /**
     * @param var0 original type: 'java.awt.Container'
     * @return original return type: 'void'
     */
    layoutContainer(var0: java_awt_Container | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.awt.Component'
     * @return original return type: 'void'
     */
    addLayoutComponent(var0: string | null, var1: java_awt_Component | null): void;
}
/**
 * Create a proxy for the {@link LayoutManager} interface.
 * All required methods in {@link LayoutManagerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createLayoutManagerProxy(methods: LayoutManagerInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<LayoutManagerInterface>;
declare const LayoutManager_base: typeof LayoutManagerClass;
/**
 * Class java.awt.LayoutManager.
 *
 * This actually imports the java class for further use.
 * The class {@link LayoutManagerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class LayoutManager extends LayoutManager_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default LayoutManager;
