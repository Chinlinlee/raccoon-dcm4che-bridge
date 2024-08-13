import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { JsonGenerator as jakarta_json_stream_JsonGenerator } from "./JsonGenerator";
import { OutputStream as java_io_OutputStream } from "./../../../java/io/OutputStream";
import { Charset as java_nio_charset_Charset } from "./../../../java/nio/charset/Charset";
import { Writer as java_io_Writer } from "./../../../java/io/Writer";
import { Map as java_util_Map } from "./../../../java/util/Map";
/**
 * This class just defines types, you should import {@link JsonGeneratorFactory} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class JsonGeneratorFactoryClass extends JavaClass {
    /**
     * @param var0 original type: 'java.io.OutputStream'
     * @param var1 original type: 'java.nio.charset.Charset'
     * @return original return type: 'jakarta.json.stream.JsonGenerator'
     */
    createGenerator(var0: java_io_OutputStream | null, var1: java_nio_charset_Charset | null): Promise<jakarta_json_stream_JsonGenerator | null>;
    /**
     * @param var0 original type: 'java.io.OutputStream'
     * @param var1 original type: 'java.nio.charset.Charset'
     * @return original return type: 'jakarta.json.stream.JsonGenerator'
     */
    createGeneratorSync(var0: java_io_OutputStream | null, var1: java_nio_charset_Charset | null): jakarta_json_stream_JsonGenerator | null;
    /**
     * @param var0 original type: 'java.io.OutputStream'
     * @return original return type: 'jakarta.json.stream.JsonGenerator'
     */
    createGenerator(var0: java_io_OutputStream | null): Promise<jakarta_json_stream_JsonGenerator | null>;
    /**
     * @param var0 original type: 'java.io.OutputStream'
     * @return original return type: 'jakarta.json.stream.JsonGenerator'
     */
    createGeneratorSync(var0: java_io_OutputStream | null): jakarta_json_stream_JsonGenerator | null;
    /**
     * @param var0 original type: 'java.io.Writer'
     * @return original return type: 'jakarta.json.stream.JsonGenerator'
     */
    createGenerator(var0: java_io_Writer | null): Promise<jakarta_json_stream_JsonGenerator | null>;
    /**
     * @param var0 original type: 'java.io.Writer'
     * @return original return type: 'jakarta.json.stream.JsonGenerator'
     */
    createGeneratorSync(var0: java_io_Writer | null): jakarta_json_stream_JsonGenerator | null;
    /**
     * @return original return type: 'java.util.Map'
     */
    getConfigInUse(): Promise<java_util_Map | null>;
    /**
     * @return original return type: 'java.util.Map'
     */
    getConfigInUseSync(): java_util_Map | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createJsonGeneratorFactoryProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface JsonGeneratorFactoryInterface {
    /**
     * @param var0 original type: 'java.io.OutputStream'
     * @param var1 original type: 'java.nio.charset.Charset'
     * @return original return type: 'jakarta.json.stream.JsonGenerator'
     */
    createGenerator(var0: java_io_OutputStream | null, var1: java_nio_charset_Charset | null): jakarta_json_stream_JsonGenerator | null;
    /**
     * @param var0 original type: 'java.io.OutputStream'
     * @return original return type: 'jakarta.json.stream.JsonGenerator'
     */
    createGenerator(var0: java_io_OutputStream | null): jakarta_json_stream_JsonGenerator | null;
    /**
     * @param var0 original type: 'java.io.Writer'
     * @return original return type: 'jakarta.json.stream.JsonGenerator'
     */
    createGenerator(var0: java_io_Writer | null): jakarta_json_stream_JsonGenerator | null;
    /**
     * @return original return type: 'java.util.Map'
     */
    getConfigInUse(): java_util_Map | null;
}
/**
 * Create a proxy for the {@link JsonGeneratorFactory} interface.
 * All required methods in {@link JsonGeneratorFactoryInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createJsonGeneratorFactoryProxy(methods: JsonGeneratorFactoryInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<JsonGeneratorFactoryInterface>;
declare const JsonGeneratorFactory_base: typeof JsonGeneratorFactoryClass;
/**
 * Class jakarta.json.stream.JsonGeneratorFactory.
 *
 * This actually imports the java class for further use.
 * The class {@link JsonGeneratorFactoryClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class JsonGeneratorFactory extends JsonGeneratorFactory_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default JsonGeneratorFactory;
//# sourceMappingURL=JsonGeneratorFactory.d.ts.map