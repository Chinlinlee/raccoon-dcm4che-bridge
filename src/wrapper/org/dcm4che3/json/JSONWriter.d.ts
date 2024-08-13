import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Attributes as org_dcm4che3_data_Attributes } from "./../data/Attributes";
import { DicomInputStream as org_dcm4che3_io_DicomInputStream } from "./../io/DicomInputStream";
import { Fragments as org_dcm4che3_data_Fragments } from "./../data/Fragments";
import { Sequence as org_dcm4che3_data_Sequence } from "./../data/Sequence";
import { VR as org_dcm4che3_data_VR } from "./../data/VR";
import { JsonValue$ValueType as jakarta_json_JsonValue$ValueType } from "./../../../jakarta/json/JsonValue$ValueType";
import { Long as java_lang_Long } from "./../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
import { Class as java_lang_Class } from "./../../../java/lang/Class";
import { JsonGenerator as jakarta_json_stream_JsonGenerator, JsonGeneratorInterface as jakarta_json_stream_JsonGeneratorInterface } from "./../../../jakarta/json/stream/JsonGenerator";
/**
 * This class just defines types, you should import {@link JSONWriter} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class JSONWriterClass extends JavaClass {
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @return original return type: 'void'
     */
    write(var0: org_dcm4che3_data_Attributes | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @return original return type: 'void'
     */
    writeSync(var0: org_dcm4che3_data_Attributes | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setReplaceBulkDataURI(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setReplaceBulkDataURISync(var0: string | null): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getReplaceBulkDataURI(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getReplaceBulkDataURISync(): string | null;
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputStream'
     * @param var1 original type: 'org.dcm4che3.data.Attributes'
     * @return original return type: 'void'
     */
    readValue(var0: org_dcm4che3_io_DicomInputStream | null, var1: org_dcm4che3_data_Attributes | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputStream'
     * @param var1 original type: 'org.dcm4che3.data.Attributes'
     * @return original return type: 'void'
     */
    readValueSync(var0: org_dcm4che3_io_DicomInputStream | null, var1: org_dcm4che3_data_Attributes | null): void;
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputStream'
     * @param var1 original type: 'org.dcm4che3.data.Fragments'
     * @return original return type: 'void'
     */
    readValue(var0: org_dcm4che3_io_DicomInputStream | null, var1: org_dcm4che3_data_Fragments | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputStream'
     * @param var1 original type: 'org.dcm4che3.data.Fragments'
     * @return original return type: 'void'
     */
    readValueSync(var0: org_dcm4che3_io_DicomInputStream | null, var1: org_dcm4che3_data_Fragments | null): void;
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputStream'
     * @param var1 original type: 'org.dcm4che3.data.Sequence'
     * @return original return type: 'void'
     */
    readValue(var0: org_dcm4che3_io_DicomInputStream | null, var1: org_dcm4che3_data_Sequence | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputStream'
     * @param var1 original type: 'org.dcm4che3.data.Sequence'
     * @return original return type: 'void'
     */
    readValueSync(var0: org_dcm4che3_io_DicomInputStream | null, var1: org_dcm4che3_data_Sequence | null): void;
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputStream'
     * @return original return type: 'void'
     */
    endDataset(var0: org_dcm4che3_io_DicomInputStream | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputStream'
     * @return original return type: 'void'
     */
    endDatasetSync(var0: org_dcm4che3_io_DicomInputStream | null): void;
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputStream'
     * @return original return type: 'void'
     */
    startDataset(var0: org_dcm4che3_io_DicomInputStream | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputStream'
     * @return original return type: 'void'
     */
    startDatasetSync(var0: org_dcm4che3_io_DicomInputStream | null): void;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @return original return type: 'void'
     */
    writeAttributes(var0: org_dcm4che3_data_Attributes | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @return original return type: 'void'
     */
    writeAttributesSync(var0: org_dcm4che3_data_Attributes | null): void;
    /**
     * @param var0 original type: 'org.dcm4che3.data.VR'
     * @param var1 original type: 'jakarta.json.JsonValue$ValueType'
     * @return original return type: 'void'
     */
    setJsonType(var0: org_dcm4che3_data_VR | null, var1: jakarta_json_JsonValue$ValueType | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.data.VR'
     * @param var1 original type: 'jakarta.json.JsonValue$ValueType'
     * @return original return type: 'void'
     */
    setJsonTypeSync(var0: org_dcm4che3_data_VR | null, var1: jakarta_json_JsonValue$ValueType | null): void;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    wait(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    waitSync(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): void;
    /**
     * @return original return type: 'void'
     */
    wait(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    waitSync(): void;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    wait(var0: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    waitSync(var0: java_lang_Long | bigint | number): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equals(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equalsSync(var0: BasicOrJavaType | null): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): string;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'jakarta.json.stream.JsonGenerator'
     * @return original return type: 'org.dcm4che3.json.JSONWriter'
     */
    static newInstanceAsync(var0: jakarta_json_stream_JsonGenerator | JavaInterfaceProxy<jakarta_json_stream_JsonGeneratorInterface> | null): Promise<JSONWriter>;
    /**
     * @param var0 original type: 'jakarta.json.stream.JsonGenerator'
     */
    constructor(var0: jakarta_json_stream_JsonGenerator | JavaInterfaceProxy<jakarta_json_stream_JsonGeneratorInterface> | null);
}
declare const JSONWriter_base: typeof JSONWriterClass;
/**
 * Class org.dcm4che3.json.JSONWriter.
 *
 * This actually imports the java class for further use.
 * The class {@link JSONWriterClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class JSONWriter extends JSONWriter_base {
}
export default JSONWriter;
//# sourceMappingURL=JSONWriter.d.ts.map