import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { NamespaceContext as javax_xml_namespace_NamespaceContext, NamespaceContextInterface as javax_xml_namespace_NamespaceContextInterface } from "./../namespace/NamespaceContext";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
/**
 * This class just defines types, you should import {@link XMLStreamWriter} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class XMLStreamWriterClass extends JavaClass {
    /**
     * @return original return type: 'void'
     */
    writeEndDocument(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    writeEndDocumentSync(): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeNamespace(var0: string | null, var1: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeNamespaceSync(var0: string | null, var1: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeComment(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeCommentSync(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Object'
     */
    getProperty(var0: string | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Object'
     */
    getPropertySync(var0: string | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getPrefix(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getPrefixSync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'javax.xml.namespace.NamespaceContext'
     * @return original return type: 'void'
     */
    setNamespaceContext(var0: javax_xml_namespace_NamespaceContext | JavaInterfaceProxy<javax_xml_namespace_NamespaceContextInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'javax.xml.namespace.NamespaceContext'
     * @return original return type: 'void'
     */
    setNamespaceContextSync(var0: javax_xml_namespace_NamespaceContext | JavaInterfaceProxy<javax_xml_namespace_NamespaceContextInterface> | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeDTD(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeDTDSync(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeEmptyElement(var0: string | null, var1: string | null, var2: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeEmptyElementSync(var0: string | null, var1: string | null, var2: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeEmptyElement(var0: string | null, var1: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeEmptyElementSync(var0: string | null, var1: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeEmptyElement(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeEmptyElementSync(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeEntityRef(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeEntityRefSync(var0: string | null): void;
    /**
     * @param var0 original type: 'char[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'void'
     */
    writeCharacters(var0: (string | null)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'char[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'void'
     */
    writeCharactersSync(var0: (string | null)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeCharacters(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeCharactersSync(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeDefaultNamespace(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeDefaultNamespaceSync(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeProcessingInstruction(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeProcessingInstructionSync(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeProcessingInstruction(var0: string | null, var1: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeProcessingInstructionSync(var0: string | null, var1: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setDefaultNamespace(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setDefaultNamespaceSync(var0: string | null): void;
    /**
     * @return original return type: 'void'
     */
    flush(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    flushSync(): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setPrefix(var0: string | null, var1: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setPrefixSync(var0: string | null, var1: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeCData(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeCDataSync(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeStartDocument(var0: string | null, var1: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeStartDocumentSync(var0: string | null, var1: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeStartDocument(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeStartDocumentSync(var0: string | null): void;
    /**
     * @return original return type: 'void'
     */
    writeStartDocument(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    writeStartDocumentSync(): void;
    /**
     * @return original return type: 'javax.xml.namespace.NamespaceContext'
     */
    getNamespaceContext(): Promise<javax_xml_namespace_NamespaceContext | null>;
    /**
     * @return original return type: 'javax.xml.namespace.NamespaceContext'
     */
    getNamespaceContextSync(): javax_xml_namespace_NamespaceContext | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeStartElement(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeStartElementSync(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeStartElement(var0: string | null, var1: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeStartElementSync(var0: string | null, var1: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeStartElement(var0: string | null, var1: string | null, var2: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeStartElementSync(var0: string | null, var1: string | null, var2: string | null): void;
    /**
     * @return original return type: 'void'
     */
    close(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    closeSync(): void;
    /**
     * @return original return type: 'void'
     */
    writeEndElement(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    writeEndElementSync(): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeAttribute(var0: string | null, var1: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeAttributeSync(var0: string | null, var1: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeAttribute(var0: string | null, var1: string | null, var2: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeAttributeSync(var0: string | null, var1: string | null, var2: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeAttribute(var0: string | null, var1: string | null, var2: string | null, var3: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeAttributeSync(var0: string | null, var1: string | null, var2: string | null, var3: string | null): void;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createXMLStreamWriterProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface XMLStreamWriterInterface {
    /**
     * @return original return type: 'void'
     */
    writeEndDocument(): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeNamespace(var0: string | null, var1: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeComment(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Object'
     */
    getProperty(var0: string | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getPrefix(var0: string | null): string | null;
    /**
     * @param var0 original type: 'javax.xml.namespace.NamespaceContext'
     * @return original return type: 'void'
     */
    setNamespaceContext(var0: javax_xml_namespace_NamespaceContext | JavaInterfaceProxy<javax_xml_namespace_NamespaceContextInterface> | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeDTD(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeEmptyElement(var0: string | null, var1: string | null, var2: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeEmptyElement(var0: string | null, var1: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeEmptyElement(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeEntityRef(var0: string | null): void;
    /**
     * @param var0 original type: 'char[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'void'
     */
    writeCharacters(var0: (string | null)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeCharacters(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeDefaultNamespace(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeProcessingInstruction(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeProcessingInstruction(var0: string | null, var1: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setDefaultNamespace(var0: string | null): void;
    /**
     * @return original return type: 'void'
     */
    flush(): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setPrefix(var0: string | null, var1: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeCData(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeStartDocument(var0: string | null, var1: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeStartDocument(var0: string | null): void;
    /**
     * @return original return type: 'void'
     */
    writeStartDocument(): void;
    /**
     * @return original return type: 'javax.xml.namespace.NamespaceContext'
     */
    getNamespaceContext(): javax_xml_namespace_NamespaceContext | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeStartElement(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeStartElement(var0: string | null, var1: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeStartElement(var0: string | null, var1: string | null, var2: string | null): void;
    /**
     * @return original return type: 'void'
     */
    close(): void;
    /**
     * @return original return type: 'void'
     */
    writeEndElement(): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeAttribute(var0: string | null, var1: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeAttribute(var0: string | null, var1: string | null, var2: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeAttribute(var0: string | null, var1: string | null, var2: string | null, var3: string | null): void;
}
/**
 * Create a proxy for the {@link XMLStreamWriter} interface.
 * All required methods in {@link XMLStreamWriterInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createXMLStreamWriterProxy(methods: XMLStreamWriterInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<XMLStreamWriterInterface>;
declare const XMLStreamWriter_base: typeof XMLStreamWriterClass;
/**
 * Class javax.xml.stream.XMLStreamWriter.
 *
 * This actually imports the java class for further use.
 * The class {@link XMLStreamWriterClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class XMLStreamWriter extends XMLStreamWriter_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default XMLStreamWriter;
//# sourceMappingURL=XMLStreamWriter.d.ts.map