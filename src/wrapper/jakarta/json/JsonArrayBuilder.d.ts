import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Integer as java_lang_Integer } from "./../../java/lang/Integer";
import { BigInteger as java_math_BigInteger } from "./../../java/math/BigInteger";
import { BigDecimal as java_math_BigDecimal } from "./../../java/math/BigDecimal";
import { JsonValue as jakarta_json_JsonValue, JsonValueInterface as jakarta_json_JsonValueInterface } from "./JsonValue";
import { JsonObjectBuilder as jakarta_json_JsonObjectBuilder, JsonObjectBuilderInterface as jakarta_json_JsonObjectBuilderInterface } from "./JsonObjectBuilder";
import { Boolean as java_lang_Boolean } from "./../../java/lang/Boolean";
import { Double as java_lang_Double } from "./../../java/lang/Double";
import { Long as java_lang_Long } from "./../../java/lang/Long";
import { JsonArray as jakarta_json_JsonArray } from "./JsonArray";
/**
 * This class just defines types, you should import {@link JsonArrayBuilder} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class JsonArrayBuilderClass extends JavaClass {
    /**
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addNull(): Promise<JsonArrayBuilder | null>;
    /**
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addNullSync(): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addNull(var0: java_lang_Integer | number): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addNullSync(var0: java_lang_Integer | number): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    setNull(var0: java_lang_Integer | number): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    setNullSync(var0: java_lang_Integer | number): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.math.BigInteger'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add(var0: java_lang_Integer | number, var1: java_math_BigInteger | null): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.math.BigInteger'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addSync(var0: java_lang_Integer | number, var1: java_math_BigInteger | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.math.BigDecimal'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add(var0: java_lang_Integer | number, var1: java_math_BigDecimal | null): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.math.BigDecimal'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addSync(var0: java_lang_Integer | number, var1: java_math_BigDecimal | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add(var0: java_lang_Integer | number, var1: string | null): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addSync(var0: java_lang_Integer | number, var1: string | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'jakarta.json.JsonValue'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add(var0: java_lang_Integer | number, var1: jakarta_json_JsonValue | JavaInterfaceProxy<jakarta_json_JsonValueInterface> | null): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'jakarta.json.JsonValue'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addSync(var0: java_lang_Integer | number, var1: jakarta_json_JsonValue | JavaInterfaceProxy<jakarta_json_JsonValueInterface> | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'jakarta.json.JsonArrayBuilder'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add(var0: java_lang_Integer | number, var1: JsonArrayBuilderClass | JavaInterfaceProxy<JsonArrayBuilderInterface> | null): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'jakarta.json.JsonArrayBuilder'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addSync(var0: java_lang_Integer | number, var1: JsonArrayBuilderClass | JavaInterfaceProxy<JsonArrayBuilderInterface> | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'jakarta.json.JsonObjectBuilder'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add(var0: java_lang_Integer | number, var1: jakarta_json_JsonObjectBuilder | JavaInterfaceProxy<jakarta_json_JsonObjectBuilderInterface> | null): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'jakarta.json.JsonObjectBuilder'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addSync(var0: java_lang_Integer | number, var1: jakarta_json_JsonObjectBuilder | JavaInterfaceProxy<jakarta_json_JsonObjectBuilderInterface> | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'boolean'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add(var0: java_lang_Integer | number, var1: java_lang_Boolean | boolean): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'boolean'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addSync(var0: java_lang_Integer | number, var1: java_lang_Boolean | boolean): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'double'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add(var0: java_lang_Integer | number, var1: java_lang_Double | number): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'double'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addSync(var0: java_lang_Integer | number, var1: java_lang_Double | number): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'long'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add(var0: java_lang_Integer | number, var1: java_lang_Long | bigint | number): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'long'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addSync(var0: java_lang_Integer | number, var1: java_lang_Long | bigint | number): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add(var0: java_lang_Long | bigint | number): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addSync(var0: java_lang_Long | bigint | number): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add(var0: java_lang_Integer | number): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addSync(var0: java_lang_Integer | number): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'java.math.BigInteger'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add(var0: java_math_BigInteger | null): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'java.math.BigInteger'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addSync(var0: java_math_BigInteger | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'jakarta.json.JsonValue'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add(var0: jakarta_json_JsonValue | JavaInterfaceProxy<jakarta_json_JsonValueInterface> | null): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'jakarta.json.JsonValue'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addSync(var0: jakarta_json_JsonValue | JavaInterfaceProxy<jakarta_json_JsonValueInterface> | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add(var0: string | null): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addSync(var0: string | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'java.math.BigDecimal'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add(var0: java_math_BigDecimal | null): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'java.math.BigDecimal'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addSync(var0: java_math_BigDecimal | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'jakarta.json.JsonArrayBuilder'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add(var0: JsonArrayBuilderClass | JavaInterfaceProxy<JsonArrayBuilderInterface> | null): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'jakarta.json.JsonArrayBuilder'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addSync(var0: JsonArrayBuilderClass | JavaInterfaceProxy<JsonArrayBuilderInterface> | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'jakarta.json.JsonObjectBuilder'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add(var0: jakarta_json_JsonObjectBuilder | JavaInterfaceProxy<jakarta_json_JsonObjectBuilderInterface> | null): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'jakarta.json.JsonObjectBuilder'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addSync(var0: jakarta_json_JsonObjectBuilder | JavaInterfaceProxy<jakarta_json_JsonObjectBuilderInterface> | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add(var0: java_lang_Boolean | boolean): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addSync(var0: java_lang_Boolean | boolean): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add(var0: java_lang_Double | number): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addSync(var0: java_lang_Double | number): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    remove(var0: java_lang_Integer | number): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    removeSync(var0: java_lang_Integer | number): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'jakarta.json.JsonArrayBuilder'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addAll(var0: JsonArrayBuilderClass | JavaInterfaceProxy<JsonArrayBuilderInterface> | null): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'jakarta.json.JsonArrayBuilder'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addAllSync(var0: JsonArrayBuilderClass | JavaInterfaceProxy<JsonArrayBuilderInterface> | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'double'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    set(var0: java_lang_Integer | number, var1: java_lang_Double | number): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'double'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    setSync(var0: java_lang_Integer | number, var1: java_lang_Double | number): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'boolean'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    set(var0: java_lang_Integer | number, var1: java_lang_Boolean | boolean): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'boolean'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    setSync(var0: java_lang_Integer | number, var1: java_lang_Boolean | boolean): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'jakarta.json.JsonArrayBuilder'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    set(var0: java_lang_Integer | number, var1: JsonArrayBuilderClass | JavaInterfaceProxy<JsonArrayBuilderInterface> | null): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'jakarta.json.JsonArrayBuilder'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    setSync(var0: java_lang_Integer | number, var1: JsonArrayBuilderClass | JavaInterfaceProxy<JsonArrayBuilderInterface> | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'jakarta.json.JsonObjectBuilder'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    set(var0: java_lang_Integer | number, var1: jakarta_json_JsonObjectBuilder | JavaInterfaceProxy<jakarta_json_JsonObjectBuilderInterface> | null): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'jakarta.json.JsonObjectBuilder'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    setSync(var0: java_lang_Integer | number, var1: jakarta_json_JsonObjectBuilder | JavaInterfaceProxy<jakarta_json_JsonObjectBuilderInterface> | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'jakarta.json.JsonValue'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    set(var0: java_lang_Integer | number, var1: jakarta_json_JsonValue | JavaInterfaceProxy<jakarta_json_JsonValueInterface> | null): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'jakarta.json.JsonValue'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    setSync(var0: java_lang_Integer | number, var1: jakarta_json_JsonValue | JavaInterfaceProxy<jakarta_json_JsonValueInterface> | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    set(var0: java_lang_Integer | number, var1: string | null): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    setSync(var0: java_lang_Integer | number, var1: string | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.math.BigDecimal'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    set(var0: java_lang_Integer | number, var1: java_math_BigDecimal | null): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.math.BigDecimal'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    setSync(var0: java_lang_Integer | number, var1: java_math_BigDecimal | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'long'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    set(var0: java_lang_Integer | number, var1: java_lang_Long | bigint | number): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'long'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    setSync(var0: java_lang_Integer | number, var1: java_lang_Long | bigint | number): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    set(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    setSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.math.BigInteger'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    set(var0: java_lang_Integer | number, var1: java_math_BigInteger | null): Promise<JsonArrayBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.math.BigInteger'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    setSync(var0: java_lang_Integer | number, var1: java_math_BigInteger | null): JsonArrayBuilder | null;
    /**
     * @return original return type: 'jakarta.json.JsonArray'
     */
    build(): Promise<jakarta_json_JsonArray | null>;
    /**
     * @return original return type: 'jakarta.json.JsonArray'
     */
    buildSync(): jakarta_json_JsonArray | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createJsonArrayBuilderProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface JsonArrayBuilderInterface {
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addNull?(): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addNull?(var0: java_lang_Integer | number): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    setNull?(var0: java_lang_Integer | number): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add?(var0: java_lang_Integer | number, var1: java_lang_Integer | number): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.math.BigInteger'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add?(var0: java_lang_Integer | number, var1: java_math_BigInteger | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.math.BigDecimal'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add?(var0: java_lang_Integer | number, var1: java_math_BigDecimal | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add?(var0: java_lang_Integer | number, var1: string | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'jakarta.json.JsonValue'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add?(var0: java_lang_Integer | number, var1: jakarta_json_JsonValue | JavaInterfaceProxy<jakarta_json_JsonValueInterface> | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'jakarta.json.JsonArrayBuilder'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add?(var0: java_lang_Integer | number, var1: JsonArrayBuilderClass | JavaInterfaceProxy<JsonArrayBuilderInterface> | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'jakarta.json.JsonObjectBuilder'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add?(var0: java_lang_Integer | number, var1: jakarta_json_JsonObjectBuilder | JavaInterfaceProxy<jakarta_json_JsonObjectBuilderInterface> | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'boolean'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add?(var0: java_lang_Integer | number, var1: java_lang_Boolean | boolean): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'double'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add?(var0: java_lang_Integer | number, var1: java_lang_Double | number): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'long'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add?(var0: java_lang_Integer | number, var1: java_lang_Long | bigint | number): JsonArrayBuilder | null;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @param var0 original type: 'long'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add?(var0: java_lang_Long | bigint | number): JsonArrayBuilder | null;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @param var0 original type: 'int'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add?(var0: java_lang_Integer | number): JsonArrayBuilder | null;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @param var0 original type: 'java.math.BigInteger'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add?(var0: java_math_BigInteger | null): JsonArrayBuilder | null;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @param var0 original type: 'jakarta.json.JsonValue'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add?(var0: jakarta_json_JsonValue | JavaInterfaceProxy<jakarta_json_JsonValueInterface> | null): JsonArrayBuilder | null;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add?(var0: string | null): JsonArrayBuilder | null;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @param var0 original type: 'java.math.BigDecimal'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add?(var0: java_math_BigDecimal | null): JsonArrayBuilder | null;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @param var0 original type: 'jakarta.json.JsonArrayBuilder'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add?(var0: JsonArrayBuilderClass | JavaInterfaceProxy<JsonArrayBuilderInterface> | null): JsonArrayBuilder | null;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @param var0 original type: 'jakarta.json.JsonObjectBuilder'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add?(var0: jakarta_json_JsonObjectBuilder | JavaInterfaceProxy<jakarta_json_JsonObjectBuilderInterface> | null): JsonArrayBuilder | null;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @param var0 original type: 'boolean'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add?(var0: java_lang_Boolean | boolean): JsonArrayBuilder | null;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @param var0 original type: 'double'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    add?(var0: java_lang_Double | number): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    remove?(var0: java_lang_Integer | number): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'jakarta.json.JsonArrayBuilder'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    addAll?(var0: JsonArrayBuilderClass | JavaInterfaceProxy<JsonArrayBuilderInterface> | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'double'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    set?(var0: java_lang_Integer | number, var1: java_lang_Double | number): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'boolean'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    set?(var0: java_lang_Integer | number, var1: java_lang_Boolean | boolean): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'jakarta.json.JsonArrayBuilder'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    set?(var0: java_lang_Integer | number, var1: JsonArrayBuilderClass | JavaInterfaceProxy<JsonArrayBuilderInterface> | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'jakarta.json.JsonObjectBuilder'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    set?(var0: java_lang_Integer | number, var1: jakarta_json_JsonObjectBuilder | JavaInterfaceProxy<jakarta_json_JsonObjectBuilderInterface> | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'jakarta.json.JsonValue'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    set?(var0: java_lang_Integer | number, var1: jakarta_json_JsonValue | JavaInterfaceProxy<jakarta_json_JsonValueInterface> | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    set?(var0: java_lang_Integer | number, var1: string | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.math.BigDecimal'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    set?(var0: java_lang_Integer | number, var1: java_math_BigDecimal | null): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'long'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    set?(var0: java_lang_Integer | number, var1: java_lang_Long | bigint | number): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    set?(var0: java_lang_Integer | number, var1: java_lang_Integer | number): JsonArrayBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.math.BigInteger'
     * @return original return type: 'jakarta.json.JsonArrayBuilder'
     */
    set?(var0: java_lang_Integer | number, var1: java_math_BigInteger | null): JsonArrayBuilder | null;
    /**
     * @return original return type: 'jakarta.json.JsonArray'
     */
    build(): jakarta_json_JsonArray | null;
}
/**
 * Create a proxy for the {@link JsonArrayBuilder} interface.
 * All required methods in {@link JsonArrayBuilderInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createJsonArrayBuilderProxy(methods: JsonArrayBuilderInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<JsonArrayBuilderInterface>;
declare const JsonArrayBuilder_base: typeof JsonArrayBuilderClass;
/**
 * Class jakarta.json.JsonArrayBuilder.
 *
 * This actually imports the java class for further use.
 * The class {@link JsonArrayBuilderClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class JsonArrayBuilder extends JsonArrayBuilder_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default JsonArrayBuilder;
//# sourceMappingURL=JsonArrayBuilder.d.ts.map