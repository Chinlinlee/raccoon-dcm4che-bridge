import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Integer as java_lang_Integer } from "./../../../../java/lang/Integer";
import { Number as java_lang_Number } from "./../../../../java/lang/Number";
import { Long as java_lang_Long } from "./../../../../java/lang/Long";
import { Class as java_lang_Class } from "./../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link Dcm2JpgExecutor$Dcm2JpgOptions} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Dcm2JpgExecutor$Dcm2JpgOptionsClass extends JavaClass {
    /**
     * Original type: 'java.lang.String'
     */
    iccProfileName: string | null;
    /**
     * Original type: 'int'
     */
    frameNumber: java_lang_Integer | number;
    /**
     * Original type: 'java.lang.Number'
     */
    jpgQuality: java_lang_Number | null;
    /**
     * Original type: 'int'
     */
    windowCenter: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    windowWidth: java_lang_Integer | number;
    /**
     * Original type: 'java.lang.String'
     */
    format: string | null;
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
     * @return original return type: 'org.github.chinlinlee.dcm2jpg.Dcm2JpgExecutor$Dcm2JpgOptions'
     */
    static newInstanceAsync(): Promise<Dcm2JpgExecutor$Dcm2JpgOptions>;
    constructor();
}
declare const Dcm2JpgExecutor$Dcm2JpgOptions_base: typeof Dcm2JpgExecutor$Dcm2JpgOptionsClass;
/**
 * Class org.github.chinlinlee.dcm2jpg.Dcm2JpgExecutor$Dcm2JpgOptions.
 *
 * This actually imports the java class for further use.
 * The class {@link Dcm2JpgExecutor$Dcm2JpgOptionsClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Dcm2JpgExecutor$Dcm2JpgOptions extends Dcm2JpgExecutor$Dcm2JpgOptions_base {
}
export default Dcm2JpgExecutor$Dcm2JpgOptions;
//# sourceMappingURL=Dcm2JpgExecutor$Dcm2JpgOptions.d.ts.map