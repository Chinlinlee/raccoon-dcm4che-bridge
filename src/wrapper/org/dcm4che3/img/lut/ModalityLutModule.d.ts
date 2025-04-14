import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../../../java/lang/Class";
import { Long as java_lang_Long } from "./../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../java/lang/Integer";
import { Optional as java_util_Optional } from "./../../../../java/util/Optional";
import { OptionalDouble as java_util_OptionalDouble } from "./../../../../java/util/OptionalDouble";
import { Attributes as org_dcm4che3_data_Attributes } from "./../../data/Attributes";
/**
 * This class just defines types, you should import {@link ModalityLutModule} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ModalityLutModuleClass extends JavaClass {
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
     * @return original return type: 'java.util.Optional'
     */
    getRescaleType(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getRescaleTypeSync(): java_util_Optional | null;
    /**
     * @return original return type: 'java.util.OptionalDouble'
     */
    getRescaleSlope(): Promise<java_util_OptionalDouble | null>;
    /**
     * @return original return type: 'java.util.OptionalDouble'
     */
    getRescaleSlopeSync(): java_util_OptionalDouble | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getLutExplanation(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getLutExplanationSync(): java_util_Optional | null;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getLutType(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getLutTypeSync(): java_util_Optional | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    adaptWithOverlayBitMask(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    adaptWithOverlayBitMaskSync(var0: java_lang_Integer | number): void;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'java.util.OptionalDouble'
     */
    getRescaleIntercept(): Promise<java_util_OptionalDouble | null>;
    /**
     * @return original return type: 'java.util.OptionalDouble'
     */
    getRescaleInterceptSync(): java_util_OptionalDouble | null;
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
     * @return original return type: 'java.util.Optional'
     */
    getLut(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    getLutSync(): java_util_Optional | null;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     */
    constructor(var0: org_dcm4che3_data_Attributes | null);
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @return original return type: 'org.dcm4che3.img.lut.ModalityLutModule'
     */
    static newInstanceAsync(var0: org_dcm4che3_data_Attributes | null): Promise<ModalityLutModule>;
}
declare const ModalityLutModule_base: typeof ModalityLutModuleClass;
/**
 * Class org.dcm4che3.img.lut.ModalityLutModule.
 *
 * This actually imports the java class for further use.
 * The class {@link ModalityLutModuleClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ModalityLutModule extends ModalityLutModule_base {
}
export default ModalityLutModule;
