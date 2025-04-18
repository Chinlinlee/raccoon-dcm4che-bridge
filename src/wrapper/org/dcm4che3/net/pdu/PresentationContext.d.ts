import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../../../java/lang/Class";
import { Long as java_lang_Long } from "./../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../java/lang/Integer";
/**
 * This class just defines types, you should import {@link PresentationContext} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PresentationContextClass extends JavaClass {
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
     * @return original return type: 'java.lang.String'
     */
    getTransferSyntax(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTransferSyntaxSync(): string | null;
    /**
     * @return original return type: 'java.lang.String[]'
     */
    getTransferSyntaxes(): Promise<(string | null)[] | null>;
    /**
     * @return original return type: 'java.lang.String[]'
     */
    getTransferSyntaxesSync(): (string | null)[] | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    containsTransferSyntax(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    containsTransferSyntaxSync(var0: string | null): boolean;
    /**
     * @return original return type: 'int'
     */
    getPCID(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getPCIDSync(): number;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'int'
     */
    length(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    lengthSync(): number;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'int'
     */
    getResult(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getResultSync(): number;
    /**
     * @return original return type: 'boolean'
     */
    isAccepted(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isAcceptedSync(): boolean;
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
    getAbstractSyntax(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getAbstractSyntaxSync(): string | null;
    /**
     * Original type: 'int'
     */
    static readonly PROVIDER_REJECTION: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly USER_REJECTION: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly ACCEPTANCE: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TRANSFER_SYNTAX_NOT_SUPPORTED: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly ABSTRACT_SYNTAX_NOT_SUPPORTED: java_lang_Integer | number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.lang.String'
     */
    constructor(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: string | null);
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.net.pdu.PresentationContext'
     */
    static newInstanceAsync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: string | null): Promise<PresentationContext>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String[]'
     */
    constructor(var0: java_lang_Integer | number, var1: string | null, var2: (string | null)[] | null);
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String[]'
     * @return original return type: 'org.dcm4che3.net.pdu.PresentationContext'
     */
    static newInstanceAsync(var0: java_lang_Integer | number, var1: string | null, var2: (string | null)[] | null): Promise<PresentationContext>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String[]'
     */
    constructor(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: string | null, var3: (string | null)[] | null);
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String[]'
     * @return original return type: 'org.dcm4che3.net.pdu.PresentationContext'
     */
    static newInstanceAsync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: string | null, var3: (string | null)[] | null): Promise<PresentationContext>;
}
declare const PresentationContext_base: typeof PresentationContextClass;
/**
 * Class org.dcm4che3.net.pdu.PresentationContext.
 *
 * This actually imports the java class for further use.
 * The class {@link PresentationContextClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PresentationContext extends PresentationContext_base {
}
export default PresentationContext;
