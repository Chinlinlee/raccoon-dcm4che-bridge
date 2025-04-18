import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { AlgorithmParameterSpec as java_security_spec_AlgorithmParameterSpec, AlgorithmParameterSpecInterface as java_security_spec_AlgorithmParameterSpecInterface } from "./spec/AlgorithmParameterSpec";
import { Class as java_lang_Class } from "./../lang/Class";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { Provider as java_security_Provider } from "./Provider";
/**
 * This class just defines types, you should import {@link AlgorithmParameters} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AlgorithmParametersClass extends JavaClass {
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'void'
     */
    init(var0: Buffer | null): Promise<void>;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'void'
     */
    initSync(var0: Buffer | null): void;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    init(var0: Buffer | null, var1: string | null): Promise<void>;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    initSync(var0: Buffer | null, var1: string | null): void;
    /**
     * @param var0 original type: 'java.security.spec.AlgorithmParameterSpec'
     * @return original return type: 'void'
     */
    init(var0: java_security_spec_AlgorithmParameterSpec | JavaInterfaceProxy<java_security_spec_AlgorithmParameterSpecInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.security.spec.AlgorithmParameterSpec'
     * @return original return type: 'void'
     */
    initSync(var0: java_security_spec_AlgorithmParameterSpec | JavaInterfaceProxy<java_security_spec_AlgorithmParameterSpecInterface> | null): void;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
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
     * @return original return type: 'byte[]'
     */
    getEncoded(): Promise<Buffer | null>;
    /**
     * @return original return type: 'byte[]'
     */
    getEncodedSync(): Buffer | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'byte[]'
     */
    getEncoded(var0: string | null): Promise<Buffer | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'byte[]'
     */
    getEncodedSync(var0: string | null): Buffer | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getAlgorithm(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getAlgorithmSync(): string | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.security.spec.AlgorithmParameterSpec'
     */
    getParameterSpec(var0: java_lang_Class | null): Promise<java_security_spec_AlgorithmParameterSpec | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.security.spec.AlgorithmParameterSpec'
     */
    getParameterSpecSync(var0: java_lang_Class | null): java_security_spec_AlgorithmParameterSpec | null;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
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
     * @return original return type: 'java.security.Provider'
     */
    getProvider(): Promise<java_security_Provider | null>;
    /**
     * @return original return type: 'java.security.Provider'
     */
    getProviderSync(): java_security_Provider | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.security.Provider'
     * @return original return type: 'java.security.AlgorithmParameters'
     */
    static getInstance(var0: string | null, var1: java_security_Provider | null): Promise<AlgorithmParameters | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.security.Provider'
     * @return original return type: 'java.security.AlgorithmParameters'
     */
    static getInstanceSync(var0: string | null, var1: java_security_Provider | null): AlgorithmParameters | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.security.AlgorithmParameters'
     */
    static getInstance(var0: string | null, var1: string | null): Promise<AlgorithmParameters | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.security.AlgorithmParameters'
     */
    static getInstanceSync(var0: string | null, var1: string | null): AlgorithmParameters | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.security.AlgorithmParameters'
     */
    static getInstance(var0: string | null): Promise<AlgorithmParameters | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.security.AlgorithmParameters'
     */
    static getInstanceSync(var0: string | null): AlgorithmParameters | null;
}
declare const AlgorithmParameters_base: typeof AlgorithmParametersClass;
/**
 * Class java.security.AlgorithmParameters.
 *
 * This actually imports the java class for further use.
 * The class {@link AlgorithmParametersClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AlgorithmParameters extends AlgorithmParameters_base {
}
export default AlgorithmParameters;
