import { JavaClass, BasicOrJavaType } from "java-bridge";
import { PageAttributes$ColorType as java_awt_PageAttributes$ColorType } from "./PageAttributes$ColorType";
import { PageAttributes$OriginType as java_awt_PageAttributes$OriginType } from "./PageAttributes$OriginType";
import { PageAttributes$MediaType as java_awt_PageAttributes$MediaType } from "./PageAttributes$MediaType";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { PageAttributes$OrientationRequestedType as java_awt_PageAttributes$OrientationRequestedType } from "./PageAttributes$OrientationRequestedType";
import { PageAttributes$PrintQualityType as java_awt_PageAttributes$PrintQualityType } from "./PageAttributes$PrintQualityType";
import { Long as java_lang_Long } from "./../lang/Long";
import { Class as java_lang_Class } from "./../lang/Class";
/**
 * This class just defines types, you should import {@link PageAttributes} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PageAttributesClass extends JavaClass {
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
    toString(): Promise<string>;
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
     * @return original return type: 'java.lang.Object'
     */
    clone(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    cloneSync(): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.awt.PageAttributes'
     * @return original return type: 'void'
     */
    set(var0: PageAttributesClass | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.PageAttributes'
     * @return original return type: 'void'
     */
    setSync(var0: PageAttributesClass | null): void;
    /**
     * @param var0 original type: 'java.awt.PageAttributes$ColorType'
     * @return original return type: 'void'
     */
    setColor(var0: java_awt_PageAttributes$ColorType | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.PageAttributes$ColorType'
     * @return original return type: 'void'
     */
    setColorSync(var0: java_awt_PageAttributes$ColorType | null): void;
    /**
     * @return original return type: 'java.awt.PageAttributes$ColorType'
     */
    getColor(): Promise<java_awt_PageAttributes$ColorType | null>;
    /**
     * @return original return type: 'java.awt.PageAttributes$ColorType'
     */
    getColorSync(): java_awt_PageAttributes$ColorType | null;
    /**
     * @return original return type: 'void'
     */
    setMediaToDefault(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    setMediaToDefaultSync(): void;
    /**
     * @return original return type: 'void'
     */
    setOrientationRequestedToDefault(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    setOrientationRequestedToDefaultSync(): void;
    /**
     * @param var0 original type: 'java.awt.PageAttributes$OriginType'
     * @return original return type: 'void'
     */
    setOrigin(var0: java_awt_PageAttributes$OriginType | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.PageAttributes$OriginType'
     * @return original return type: 'void'
     */
    setOriginSync(var0: java_awt_PageAttributes$OriginType | null): void;
    /**
     * @return original return type: 'void'
     */
    setPrintQualityToDefault(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    setPrintQualityToDefaultSync(): void;
    /**
     * @return original return type: 'void'
     */
    setPrinterResolutionToDefault(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    setPrinterResolutionToDefaultSync(): void;
    /**
     * @param var0 original type: 'java.awt.PageAttributes$MediaType'
     * @return original return type: 'void'
     */
    setMedia(var0: java_awt_PageAttributes$MediaType | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.PageAttributes$MediaType'
     * @return original return type: 'void'
     */
    setMediaSync(var0: java_awt_PageAttributes$MediaType | null): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setOrientationRequested(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setOrientationRequestedSync(var0: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.awt.PageAttributes$OrientationRequestedType'
     * @return original return type: 'void'
     */
    setOrientationRequested(var0: java_awt_PageAttributes$OrientationRequestedType | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.PageAttributes$OrientationRequestedType'
     * @return original return type: 'void'
     */
    setOrientationRequestedSync(var0: java_awt_PageAttributes$OrientationRequestedType | null): void;
    /**
     * @param var0 original type: 'java.awt.PageAttributes$PrintQualityType'
     * @return original return type: 'void'
     */
    setPrintQuality(var0: java_awt_PageAttributes$PrintQualityType | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.PageAttributes$PrintQualityType'
     * @return original return type: 'void'
     */
    setPrintQualitySync(var0: java_awt_PageAttributes$PrintQualityType | null): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setPrintQuality(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setPrintQualitySync(var0: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setPrinterResolution(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setPrinterResolutionSync(var0: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'int[]'
     * @return original return type: 'void'
     */
    setPrinterResolution(var0: (java_lang_Integer | number)[] | null): Promise<void>;
    /**
     * @param var0 original type: 'int[]'
     * @return original return type: 'void'
     */
    setPrinterResolutionSync(var0: (java_lang_Integer | number)[] | null): void;
    /**
     * @return original return type: 'java.awt.PageAttributes$MediaType'
     */
    getMedia(): Promise<java_awt_PageAttributes$MediaType | null>;
    /**
     * @return original return type: 'java.awt.PageAttributes$MediaType'
     */
    getMediaSync(): java_awt_PageAttributes$MediaType | null;
    /**
     * @return original return type: 'java.awt.PageAttributes$OrientationRequestedType'
     */
    getOrientationRequested(): Promise<java_awt_PageAttributes$OrientationRequestedType | null>;
    /**
     * @return original return type: 'java.awt.PageAttributes$OrientationRequestedType'
     */
    getOrientationRequestedSync(): java_awt_PageAttributes$OrientationRequestedType | null;
    /**
     * @return original return type: 'java.awt.PageAttributes$OriginType'
     */
    getOrigin(): Promise<java_awt_PageAttributes$OriginType | null>;
    /**
     * @return original return type: 'java.awt.PageAttributes$OriginType'
     */
    getOriginSync(): java_awt_PageAttributes$OriginType | null;
    /**
     * @return original return type: 'java.awt.PageAttributes$PrintQualityType'
     */
    getPrintQuality(): Promise<java_awt_PageAttributes$PrintQualityType | null>;
    /**
     * @return original return type: 'java.awt.PageAttributes$PrintQualityType'
     */
    getPrintQualitySync(): java_awt_PageAttributes$PrintQualityType | null;
    /**
     * @return original return type: 'int[]'
     */
    getPrinterResolution(): Promise<(number)[] | null>;
    /**
     * @return original return type: 'int[]'
     */
    getPrinterResolutionSync(): (number)[] | null;
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
     * @param var0 original type: 'java.awt.PageAttributes$ColorType'
     * @param var1 original type: 'java.awt.PageAttributes$MediaType'
     * @param var2 original type: 'java.awt.PageAttributes$OrientationRequestedType'
     * @param var3 original type: 'java.awt.PageAttributes$OriginType'
     * @param var4 original type: 'java.awt.PageAttributes$PrintQualityType'
     * @param var5 original type: 'int[]'
     * @return original return type: 'java.awt.PageAttributes'
     */
    static newInstanceAsync(var0: java_awt_PageAttributes$ColorType | null, var1: java_awt_PageAttributes$MediaType | null, var2: java_awt_PageAttributes$OrientationRequestedType | null, var3: java_awt_PageAttributes$OriginType | null, var4: java_awt_PageAttributes$PrintQualityType | null, var5: (java_lang_Integer | number)[] | null): Promise<PageAttributes>;
    /**
     * @param var0 original type: 'java.awt.PageAttributes'
     * @return original return type: 'java.awt.PageAttributes'
     */
    static newInstanceAsync(var0: PageAttributesClass | null): Promise<PageAttributes>;
    /**
     * @return original return type: 'java.awt.PageAttributes'
     */
    static newInstanceAsync(): Promise<PageAttributes>;
    /**
     * @param var0 original type: 'java.awt.PageAttributes$ColorType'
     * @param var1 original type: 'java.awt.PageAttributes$MediaType'
     * @param var2 original type: 'java.awt.PageAttributes$OrientationRequestedType'
     * @param var3 original type: 'java.awt.PageAttributes$OriginType'
     * @param var4 original type: 'java.awt.PageAttributes$PrintQualityType'
     * @param var5 original type: 'int[]'
     */
    constructor(var0: java_awt_PageAttributes$ColorType | null, var1: java_awt_PageAttributes$MediaType | null, var2: java_awt_PageAttributes$OrientationRequestedType | null, var3: java_awt_PageAttributes$OriginType | null, var4: java_awt_PageAttributes$PrintQualityType | null, var5: (java_lang_Integer | number)[] | null);
    /**
     * @param var0 original type: 'java.awt.PageAttributes'
     */
    constructor(var0: PageAttributesClass | null);
    constructor();
}
declare const PageAttributes_base: typeof PageAttributesClass;
/**
 * Class java.awt.PageAttributes.
 *
 * This actually imports the java class for further use.
 * The class {@link PageAttributesClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PageAttributes extends PageAttributes_base {
}
export default PageAttributes;
//# sourceMappingURL=PageAttributes.d.ts.map