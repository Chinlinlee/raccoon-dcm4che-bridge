import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./Class";
import { Long as java_lang_Long } from "./Long";
import { Integer as java_lang_Integer } from "./Integer";
/**
 * This class just defines types, you should import {@link Number} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class NumberClass extends JavaClass {
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
    intValue(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    intValueSync(): number;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'float'
     */
    floatValue(): Promise<number>;
    /**
     * @return original return type: 'float'
     */
    floatValueSync(): number;
    /**
     * @return original return type: 'double'
     */
    doubleValue(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    doubleValueSync(): number;
    /**
     * @return original return type: 'long'
     */
    longValue(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    longValueSync(): number;
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
     * @return original return type: 'short'
     */
    shortValue(): Promise<number>;
    /**
     * @return original return type: 'short'
     */
    shortValueSync(): number;
    /**
     * @return original return type: 'byte'
     */
    byteValue(): Promise<number>;
    /**
     * @return original return type: 'byte'
     */
    byteValueSync(): number;
}
declare const Number_base: typeof NumberClass;
/**
 * Class java.lang.Number.
 *
 * This actually imports the java class for further use.
 * The class {@link NumberClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Number extends Number_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default Number;
//# sourceMappingURL=Number.d.ts.map