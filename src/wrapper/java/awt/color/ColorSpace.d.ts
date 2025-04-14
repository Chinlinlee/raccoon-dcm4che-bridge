import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../lang/Class";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { Float as java_lang_Float } from "./../../lang/Float";
/**
 * This class just defines types, you should import {@link ColorSpace} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ColorSpaceClass extends JavaClass {
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
     * @param var0 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    toCIEXYZ(var0: (java_lang_Float | number)[] | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    toCIEXYZSync(var0: (java_lang_Float | number)[] | null): (number)[] | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    getName(var0: java_lang_Integer | number): Promise<string | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    getNameSync(var0: java_lang_Integer | number): string | null;
    /**
     * @param var0 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    toRGB(var0: (java_lang_Float | number)[] | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    toRGBSync(var0: (java_lang_Float | number)[] | null): (number)[] | null;
    /**
     * @param var0 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    fromCIEXYZ(var0: (java_lang_Float | number)[] | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    fromCIEXYZSync(var0: (java_lang_Float | number)[] | null): (number)[] | null;
    /**
     * @return original return type: 'int'
     */
    getNumComponents(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getNumComponentsSync(): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'float'
     */
    getMaxValue(var0: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'float'
     */
    getMaxValueSync(var0: java_lang_Integer | number): number;
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
     * @param var0 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    fromRGB(var0: (java_lang_Float | number)[] | null): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'float[]'
     * @return original return type: 'float[]'
     */
    fromRGBSync(var0: (java_lang_Float | number)[] | null): (number)[] | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'float'
     */
    getMinValue(var0: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'float'
     */
    getMinValueSync(var0: java_lang_Integer | number): number;
    /**
     * @return original return type: 'boolean'
     */
    isCS_sRGB(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isCS_sRGBSync(): boolean;
    /**
     * @return original return type: 'int'
     */
    getType(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getTypeSync(): number;
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
     * @param var0 original type: 'int'
     * @return original return type: 'java.awt.color.ColorSpace'
     */
    static getInstance(var0: java_lang_Integer | number): Promise<ColorSpace | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.awt.color.ColorSpace'
     */
    static getInstanceSync(var0: java_lang_Integer | number): ColorSpace | null;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_ECLR: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_Lab: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_Luv: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_RGB: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_GRAY: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_CMY: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_CCLR: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_ACLR: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_HSV: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_YCbCr: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_7CLR: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly CS_LINEAR_RGB: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_9CLR: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_5CLR: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly CS_sRGB: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_3CLR: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly CS_PYCC: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_XYZ: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_FCLR: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_DCLR: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_HLS: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_CMYK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_BCLR: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly CS_GRAY: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_8CLR: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_6CLR: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_4CLR: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_Yxy: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_2CLR: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly CS_CIEXYZ: java_lang_Integer | number;
}
declare const ColorSpace_base: typeof ColorSpaceClass;
/**
 * Class java.awt.color.ColorSpace.
 *
 * This actually imports the java class for further use.
 * The class {@link ColorSpaceClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ColorSpace extends ColorSpace_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default ColorSpace;
