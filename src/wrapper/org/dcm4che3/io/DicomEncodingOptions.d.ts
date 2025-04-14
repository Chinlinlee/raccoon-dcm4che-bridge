import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../../java/lang/Class";
import { Long as java_lang_Long } from "./../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
import { Boolean as java_lang_Boolean } from "./../../../java/lang/Boolean";
/**
 * This class just defines types, you should import {@link DicomEncodingOptions} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DicomEncodingOptionsClass extends JavaClass {
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
     * Original type: 'boolean'
     */
    readonly undefEmptyItemLength: java_lang_Boolean | boolean;
    /**
     * Original type: 'boolean'
     */
    readonly undefItemLength: java_lang_Boolean | boolean;
    /**
     * Original type: 'boolean'
     */
    readonly undefSequenceLength: java_lang_Boolean | boolean;
    /**
     * Original type: 'org.dcm4che3.io.DicomEncodingOptions'
     */
    static readonly DEFAULT: DicomEncodingOptionsClass | null;
    /**
     * Original type: 'boolean'
     */
    readonly groupLength: java_lang_Boolean | boolean;
    /**
     * Original type: 'boolean'
     */
    readonly undefEmptySequenceLength: java_lang_Boolean | boolean;
    /**
     * @param var0 original type: 'boolean'
     * @param var1 original type: 'boolean'
     * @param var2 original type: 'boolean'
     * @param var3 original type: 'boolean'
     * @param var4 original type: 'boolean'
     */
    constructor(var0: java_lang_Boolean | boolean, var1: java_lang_Boolean | boolean, var2: java_lang_Boolean | boolean, var3: java_lang_Boolean | boolean, var4: java_lang_Boolean | boolean);
    /**
     * @param var0 original type: 'boolean'
     * @param var1 original type: 'boolean'
     * @param var2 original type: 'boolean'
     * @param var3 original type: 'boolean'
     * @param var4 original type: 'boolean'
     * @return original return type: 'org.dcm4che3.io.DicomEncodingOptions'
     */
    static newInstanceAsync(var0: java_lang_Boolean | boolean, var1: java_lang_Boolean | boolean, var2: java_lang_Boolean | boolean, var3: java_lang_Boolean | boolean, var4: java_lang_Boolean | boolean): Promise<DicomEncodingOptions>;
}
declare const DicomEncodingOptions_base: typeof DicomEncodingOptionsClass;
/**
 * Class org.dcm4che3.io.DicomEncodingOptions.
 *
 * This actually imports the java class for further use.
 * The class {@link DicomEncodingOptionsClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DicomEncodingOptions extends DicomEncodingOptions_base {
}
export default DicomEncodingOptions;
