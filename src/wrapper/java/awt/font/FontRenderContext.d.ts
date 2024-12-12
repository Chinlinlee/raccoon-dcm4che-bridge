import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../lang/Class";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { AffineTransform as java_awt_geom_AffineTransform } from "./../geom/AffineTransform";
import { Boolean as java_lang_Boolean } from "./../../lang/Boolean";
/**
 * This class just defines types, you should import {@link FontRenderContext} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FontRenderContextClass extends JavaClass {
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
     * @return original return type: 'boolean'
     */
    isTransformed(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isTransformedSync(): boolean;
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
     * @return original return type: 'java.lang.Object'
     */
    getAntiAliasingHint(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    getAntiAliasingHintSync(): BasicOrJavaType | null;
    /**
     * @return original return type: 'boolean'
     */
    usesFractionalMetrics(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    usesFractionalMetricsSync(): boolean;
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
     * @param var0 original type: 'java.awt.font.FontRenderContext'
     * @return original return type: 'boolean'
     */
    equals(var0: FontRenderContextClass | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.awt.font.FontRenderContext'
     * @return original return type: 'boolean'
     */
    equalsSync(var0: FontRenderContextClass | null): boolean;
    /**
     * @return original return type: 'int'
     */
    getTransformType(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getTransformTypeSync(): number;
    /**
     * @return original return type: 'java.lang.Object'
     */
    getFractionalMetricsHint(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    getFractionalMetricsHintSync(): BasicOrJavaType | null;
    /**
     * @return original return type: 'java.awt.geom.AffineTransform'
     */
    getTransform(): Promise<java_awt_geom_AffineTransform | null>;
    /**
     * @return original return type: 'java.awt.geom.AffineTransform'
     */
    getTransformSync(): java_awt_geom_AffineTransform | null;
    /**
     * @return original return type: 'boolean'
     */
    isAntiAliased(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isAntiAliasedSync(): boolean;
    /**
     * @param var0 original type: 'java.awt.geom.AffineTransform'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.Object'
     */
    constructor(var0: java_awt_geom_AffineTransform | null, var1: BasicOrJavaType | null, var2: BasicOrJavaType | null);
    /**
     * @param var0 original type: 'java.awt.geom.AffineTransform'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.Object'
     * @return original return type: 'java.awt.font.FontRenderContext'
     */
    static newInstanceAsync(var0: java_awt_geom_AffineTransform | null, var1: BasicOrJavaType | null, var2: BasicOrJavaType | null): Promise<FontRenderContext>;
    /**
     * @param var0 original type: 'java.awt.geom.AffineTransform'
     * @param var1 original type: 'boolean'
     * @param var2 original type: 'boolean'
     */
    constructor(var0: java_awt_geom_AffineTransform | null, var1: java_lang_Boolean | boolean, var2: java_lang_Boolean | boolean);
    /**
     * @param var0 original type: 'java.awt.geom.AffineTransform'
     * @param var1 original type: 'boolean'
     * @param var2 original type: 'boolean'
     * @return original return type: 'java.awt.font.FontRenderContext'
     */
    static newInstanceAsync(var0: java_awt_geom_AffineTransform | null, var1: java_lang_Boolean | boolean, var2: java_lang_Boolean | boolean): Promise<FontRenderContext>;
}
declare const FontRenderContext_base: typeof FontRenderContextClass;
/**
 * Class java.awt.font.FontRenderContext.
 *
 * This actually imports the java class for further use.
 * The class {@link FontRenderContextClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FontRenderContext extends FontRenderContext_base {
}
export default FontRenderContext;
//# sourceMappingURL=FontRenderContext.d.ts.map