import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Node as org_w3c_dom_Node } from "./Node";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
/**
 * This class just defines types, you should import {@link NodeList} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class NodeListClass extends JavaClass {
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.w3c.dom.Node'
     */
    item(var0: java_lang_Integer | number): Promise<org_w3c_dom_Node | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.w3c.dom.Node'
     */
    itemSync(var0: java_lang_Integer | number): org_w3c_dom_Node | null;
    /**
     * @return original return type: 'int'
     */
    getLength(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getLengthSync(): number;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createNodeListProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface NodeListInterface {
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.w3c.dom.Node'
     */
    item(var0: java_lang_Integer | number): org_w3c_dom_Node | null;
    /**
     * @return original return type: 'int'
     */
    getLength(): number;
}
/**
 * Create a proxy for the {@link NodeList} interface.
 * All required methods in {@link NodeListInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createNodeListProxy(methods: NodeListInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<NodeListInterface>;
declare const NodeList_base: typeof NodeListClass;
/**
 * Class org.w3c.dom.NodeList.
 *
 * This actually imports the java class for further use.
 * The class {@link NodeListClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class NodeList extends NodeList_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default NodeList;
