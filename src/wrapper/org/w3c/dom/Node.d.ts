import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Document as org_w3c_dom_Document } from "./Document";
import { Boolean as java_lang_Boolean } from "./../../../java/lang/Boolean";
import { NamedNodeMap as org_w3c_dom_NamedNodeMap } from "./NamedNodeMap";
import { UserDataHandler as org_w3c_dom_UserDataHandler, UserDataHandlerInterface as org_w3c_dom_UserDataHandlerInterface } from "./UserDataHandler";
import { NodeList as org_w3c_dom_NodeList } from "./NodeList";
import { Short as java_lang_Short } from "./../../../java/lang/Short";
/**
 * This class just defines types, you should import {@link Node} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class NodeClass extends JavaClass {
    /**
     * @return original return type: 'org.w3c.dom.Node'
     */
    getNextSibling(): Promise<Node | null>;
    /**
     * @return original return type: 'org.w3c.dom.Node'
     */
    getNextSiblingSync(): Node | null;
    /**
     * @return original return type: 'boolean'
     */
    hasChildNodes(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasChildNodesSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    lookupPrefix(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    lookupPrefixSync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    lookupNamespaceURI(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    lookupNamespaceURISync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'org.w3c.dom.Node'
     * @return original return type: 'org.w3c.dom.Node'
     */
    removeChild(var0: NodeClass | JavaInterfaceProxy<NodeInterface> | null): Promise<Node | null>;
    /**
     * @param var0 original type: 'org.w3c.dom.Node'
     * @return original return type: 'org.w3c.dom.Node'
     */
    removeChildSync(var0: NodeClass | JavaInterfaceProxy<NodeInterface> | null): Node | null;
    /**
     * @return original return type: 'org.w3c.dom.Document'
     */
    getOwnerDocument(): Promise<org_w3c_dom_Document | null>;
    /**
     * @return original return type: 'org.w3c.dom.Document'
     */
    getOwnerDocumentSync(): org_w3c_dom_Document | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.w3c.dom.Node'
     */
    cloneNode(var0: java_lang_Boolean | boolean): Promise<Node | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.w3c.dom.Node'
     */
    cloneNodeSync(var0: java_lang_Boolean | boolean): Node | null;
    /**
     * @param var0 original type: 'org.w3c.dom.Node'
     * @param var1 original type: 'org.w3c.dom.Node'
     * @return original return type: 'org.w3c.dom.Node'
     */
    insertBefore(var0: NodeClass | JavaInterfaceProxy<NodeInterface> | null, var1: NodeClass | JavaInterfaceProxy<NodeInterface> | null): Promise<Node | null>;
    /**
     * @param var0 original type: 'org.w3c.dom.Node'
     * @param var1 original type: 'org.w3c.dom.Node'
     * @return original return type: 'org.w3c.dom.Node'
     */
    insertBeforeSync(var0: NodeClass | JavaInterfaceProxy<NodeInterface> | null, var1: NodeClass | JavaInterfaceProxy<NodeInterface> | null): Node | null;
    /**
     * @return original return type: 'boolean'
     */
    hasAttributes(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasAttributesSync(): boolean;
    /**
     * @return original return type: 'void'
     */
    normalize(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    normalizeSync(): void;
    /**
     * @return original return type: 'short'
     */
    getNodeType(): Promise<number>;
    /**
     * @return original return type: 'short'
     */
    getNodeTypeSync(): number;
    /**
     * @return original return type: 'org.w3c.dom.Node'
     */
    getFirstChild(): Promise<Node | null>;
    /**
     * @return original return type: 'org.w3c.dom.Node'
     */
    getFirstChildSync(): Node | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getBaseURI(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getBaseURISync(): string | null;
    /**
     * @param var0 original type: 'org.w3c.dom.Node'
     * @return original return type: 'boolean'
     */
    isSameNode(var0: NodeClass | JavaInterfaceProxy<NodeInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.w3c.dom.Node'
     * @return original return type: 'boolean'
     */
    isSameNodeSync(var0: NodeClass | JavaInterfaceProxy<NodeInterface> | null): boolean;
    /**
     * @param var0 original type: 'org.w3c.dom.Node'
     * @return original return type: 'org.w3c.dom.Node'
     */
    appendChild(var0: NodeClass | JavaInterfaceProxy<NodeInterface> | null): Promise<Node | null>;
    /**
     * @param var0 original type: 'org.w3c.dom.Node'
     * @return original return type: 'org.w3c.dom.Node'
     */
    appendChildSync(var0: NodeClass | JavaInterfaceProxy<NodeInterface> | null): Node | null;
    /**
     * @return original return type: 'org.w3c.dom.Node'
     */
    getPreviousSibling(): Promise<Node | null>;
    /**
     * @return original return type: 'org.w3c.dom.Node'
     */
    getPreviousSiblingSync(): Node | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPrefix(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPrefixSync(): string | null;
    /**
     * @param var0 original type: 'org.w3c.dom.Node'
     * @param var1 original type: 'org.w3c.dom.Node'
     * @return original return type: 'org.w3c.dom.Node'
     */
    replaceChild(var0: NodeClass | JavaInterfaceProxy<NodeInterface> | null, var1: NodeClass | JavaInterfaceProxy<NodeInterface> | null): Promise<Node | null>;
    /**
     * @param var0 original type: 'org.w3c.dom.Node'
     * @param var1 original type: 'org.w3c.dom.Node'
     * @return original return type: 'org.w3c.dom.Node'
     */
    replaceChildSync(var0: NodeClass | JavaInterfaceProxy<NodeInterface> | null, var1: NodeClass | JavaInterfaceProxy<NodeInterface> | null): Node | null;
    /**
     * @return original return type: 'org.w3c.dom.NamedNodeMap'
     */
    getAttributes(): Promise<org_w3c_dom_NamedNodeMap | null>;
    /**
     * @return original return type: 'org.w3c.dom.NamedNodeMap'
     */
    getAttributesSync(): org_w3c_dom_NamedNodeMap | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    isDefaultNamespace(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    isDefaultNamespaceSync(var0: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setTextContent(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setTextContentSync(var0: string | null): void;
    /**
     * @return original return type: 'org.w3c.dom.Node'
     */
    getParentNode(): Promise<Node | null>;
    /**
     * @return original return type: 'org.w3c.dom.Node'
     */
    getParentNodeSync(): Node | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getNodeName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getNodeNameSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTextContent(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTextContentSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    isSupported(var0: string | null, var1: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    isSupportedSync(var0: string | null, var1: string | null): boolean;
    /**
     * @return original return type: 'org.w3c.dom.Node'
     */
    getLastChild(): Promise<Node | null>;
    /**
     * @return original return type: 'org.w3c.dom.Node'
     */
    getLastChildSync(): Node | null;
    /**
     * @param var0 original type: 'org.w3c.dom.Node'
     * @return original return type: 'short'
     */
    compareDocumentPosition(var0: NodeClass | JavaInterfaceProxy<NodeInterface> | null): Promise<number>;
    /**
     * @param var0 original type: 'org.w3c.dom.Node'
     * @return original return type: 'short'
     */
    compareDocumentPositionSync(var0: NodeClass | JavaInterfaceProxy<NodeInterface> | null): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Object'
     */
    getFeature(var0: string | null, var1: string | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Object'
     */
    getFeatureSync(var0: string | null, var1: string | null): BasicOrJavaType | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getNodeValue(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getNodeValueSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setNodeValue(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setNodeValueSync(var0: string | null): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getLocalName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getLocalNameSync(): string | null;
    /**
     * @param var0 original type: 'org.w3c.dom.Node'
     * @return original return type: 'boolean'
     */
    isEqualNode(var0: NodeClass | JavaInterfaceProxy<NodeInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.w3c.dom.Node'
     * @return original return type: 'boolean'
     */
    isEqualNodeSync(var0: NodeClass | JavaInterfaceProxy<NodeInterface> | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setPrefix(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setPrefixSync(var0: string | null): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getNamespaceURI(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getNamespaceURISync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Object'
     */
    getUserData(var0: string | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Object'
     */
    getUserDataSync(var0: string | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'org.w3c.dom.UserDataHandler'
     * @return original return type: 'java.lang.Object'
     */
    setUserData(var0: string | null, var1: BasicOrJavaType | null, var2: org_w3c_dom_UserDataHandler | JavaInterfaceProxy<org_w3c_dom_UserDataHandlerInterface> | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'org.w3c.dom.UserDataHandler'
     * @return original return type: 'java.lang.Object'
     */
    setUserDataSync(var0: string | null, var1: BasicOrJavaType | null, var2: org_w3c_dom_UserDataHandler | JavaInterfaceProxy<org_w3c_dom_UserDataHandlerInterface> | null): BasicOrJavaType | null;
    /**
     * @return original return type: 'org.w3c.dom.NodeList'
     */
    getChildNodes(): Promise<org_w3c_dom_NodeList | null>;
    /**
     * @return original return type: 'org.w3c.dom.NodeList'
     */
    getChildNodesSync(): org_w3c_dom_NodeList | null;
    /**
     * Original type: 'short'
     */
    static readonly NOTATION_NODE: java_lang_Short | number;
    /**
     * Original type: 'short'
     */
    static readonly ENTITY_REFERENCE_NODE: java_lang_Short | number;
    /**
     * Original type: 'short'
     */
    static readonly CDATA_SECTION_NODE: java_lang_Short | number;
    /**
     * Original type: 'short'
     */
    static readonly PROCESSING_INSTRUCTION_NODE: java_lang_Short | number;
    /**
     * Original type: 'short'
     */
    static readonly ENTITY_NODE: java_lang_Short | number;
    /**
     * Original type: 'short'
     */
    static readonly DOCUMENT_NODE: java_lang_Short | number;
    /**
     * Original type: 'short'
     */
    static readonly COMMENT_NODE: java_lang_Short | number;
    /**
     * Original type: 'short'
     */
    static readonly DOCUMENT_POSITION_CONTAINS: java_lang_Short | number;
    /**
     * Original type: 'short'
     */
    static readonly DOCUMENT_POSITION_PRECEDING: java_lang_Short | number;
    /**
     * Original type: 'short'
     */
    static readonly DOCUMENT_POSITION_DISCONNECTED: java_lang_Short | number;
    /**
     * Original type: 'short'
     */
    static readonly DOCUMENT_POSITION_CONTAINED_BY: java_lang_Short | number;
    /**
     * Original type: 'short'
     */
    static readonly ELEMENT_NODE: java_lang_Short | number;
    /**
     * Original type: 'short'
     */
    static readonly DOCUMENT_TYPE_NODE: java_lang_Short | number;
    /**
     * Original type: 'short'
     */
    static readonly DOCUMENT_FRAGMENT_NODE: java_lang_Short | number;
    /**
     * Original type: 'short'
     */
    static readonly TEXT_NODE: java_lang_Short | number;
    /**
     * Original type: 'short'
     */
    static readonly DOCUMENT_POSITION_FOLLOWING: java_lang_Short | number;
    /**
     * Original type: 'short'
     */
    static readonly ATTRIBUTE_NODE: java_lang_Short | number;
    /**
     * Original type: 'short'
     */
    static readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: java_lang_Short | number;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createNodeProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface NodeInterface {
    /**
     * @return original return type: 'org.w3c.dom.Node'
     */
    getNextSibling(): Node | null;
    /**
     * @return original return type: 'boolean'
     */
    hasChildNodes(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    lookupPrefix(var0: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    lookupNamespaceURI(var0: string | null): string | null;
    /**
     * @param var0 original type: 'org.w3c.dom.Node'
     * @return original return type: 'org.w3c.dom.Node'
     */
    removeChild(var0: NodeClass | JavaInterfaceProxy<NodeInterface> | null): Node | null;
    /**
     * @return original return type: 'org.w3c.dom.Document'
     */
    getOwnerDocument(): org_w3c_dom_Document | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.w3c.dom.Node'
     */
    cloneNode(var0: java_lang_Boolean | boolean): Node | null;
    /**
     * @param var0 original type: 'org.w3c.dom.Node'
     * @param var1 original type: 'org.w3c.dom.Node'
     * @return original return type: 'org.w3c.dom.Node'
     */
    insertBefore(var0: NodeClass | JavaInterfaceProxy<NodeInterface> | null, var1: NodeClass | JavaInterfaceProxy<NodeInterface> | null): Node | null;
    /**
     * @return original return type: 'boolean'
     */
    hasAttributes(): boolean;
    /**
     * @return original return type: 'void'
     */
    normalize(): void;
    /**
     * @return original return type: 'short'
     */
    getNodeType(): number;
    /**
     * @return original return type: 'org.w3c.dom.Node'
     */
    getFirstChild(): Node | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getBaseURI(): string | null;
    /**
     * @param var0 original type: 'org.w3c.dom.Node'
     * @return original return type: 'boolean'
     */
    isSameNode(var0: NodeClass | JavaInterfaceProxy<NodeInterface> | null): boolean;
    /**
     * @param var0 original type: 'org.w3c.dom.Node'
     * @return original return type: 'org.w3c.dom.Node'
     */
    appendChild(var0: NodeClass | JavaInterfaceProxy<NodeInterface> | null): Node | null;
    /**
     * @return original return type: 'org.w3c.dom.Node'
     */
    getPreviousSibling(): Node | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPrefix(): string | null;
    /**
     * @param var0 original type: 'org.w3c.dom.Node'
     * @param var1 original type: 'org.w3c.dom.Node'
     * @return original return type: 'org.w3c.dom.Node'
     */
    replaceChild(var0: NodeClass | JavaInterfaceProxy<NodeInterface> | null, var1: NodeClass | JavaInterfaceProxy<NodeInterface> | null): Node | null;
    /**
     * @return original return type: 'org.w3c.dom.NamedNodeMap'
     */
    getAttributes(): org_w3c_dom_NamedNodeMap | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    isDefaultNamespace(var0: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setTextContent(var0: string | null): void;
    /**
     * @return original return type: 'org.w3c.dom.Node'
     */
    getParentNode(): Node | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getNodeName(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTextContent(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    isSupported(var0: string | null, var1: string | null): boolean;
    /**
     * @return original return type: 'org.w3c.dom.Node'
     */
    getLastChild(): Node | null;
    /**
     * @param var0 original type: 'org.w3c.dom.Node'
     * @return original return type: 'short'
     */
    compareDocumentPosition(var0: NodeClass | JavaInterfaceProxy<NodeInterface> | null): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Object'
     */
    getFeature(var0: string | null, var1: string | null): BasicOrJavaType | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getNodeValue(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setNodeValue(var0: string | null): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getLocalName(): string | null;
    /**
     * @param var0 original type: 'org.w3c.dom.Node'
     * @return original return type: 'boolean'
     */
    isEqualNode(var0: NodeClass | JavaInterfaceProxy<NodeInterface> | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setPrefix(var0: string | null): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getNamespaceURI(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Object'
     */
    getUserData(var0: string | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'org.w3c.dom.UserDataHandler'
     * @return original return type: 'java.lang.Object'
     */
    setUserData(var0: string | null, var1: BasicOrJavaType | null, var2: org_w3c_dom_UserDataHandler | JavaInterfaceProxy<org_w3c_dom_UserDataHandlerInterface> | null): BasicOrJavaType | null;
    /**
     * @return original return type: 'org.w3c.dom.NodeList'
     */
    getChildNodes(): org_w3c_dom_NodeList | null;
}
/**
 * Create a proxy for the {@link Node} interface.
 * All required methods in {@link NodeInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createNodeProxy(methods: NodeInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<NodeInterface>;
declare const Node_base: typeof NodeClass;
/**
 * Class org.w3c.dom.Node.
 *
 * This actually imports the java class for further use.
 * The class {@link NodeClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Node extends Node_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default Node;
