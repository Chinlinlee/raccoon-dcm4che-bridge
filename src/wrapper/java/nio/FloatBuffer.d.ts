import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { Float as java_lang_Float } from "./../lang/Float";
import { Buffer as java_nio_Buffer } from "./Buffer";
import { ByteOrder as java_nio_ByteOrder } from "./ByteOrder";
import { Long as java_lang_Long } from "./../lang/Long";
import { Class as java_lang_Class } from "./../lang/Class";
/**
 * This class just defines types, you should import {@link FloatBuffer} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FloatBufferClass extends JavaClass {
    /**
     * @return original return type: 'float'
     */
    get(): Promise<number>;
    /**
     * @return original return type: 'float'
     */
    getSync(): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'float[]'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    get(var0: java_lang_Integer | number, var1: (java_lang_Float | number)[] | null): Promise<FloatBuffer | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'float[]'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    getSync(var0: java_lang_Integer | number, var1: (java_lang_Float | number)[] | null): FloatBuffer | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'float'
     */
    get(var0: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'float'
     */
    getSync(var0: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'float[]'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    get(var0: java_lang_Integer | number, var1: (java_lang_Float | number)[] | null, var2: java_lang_Integer | number, var3: java_lang_Integer | number): Promise<FloatBuffer | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'float[]'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    getSync(var0: java_lang_Integer | number, var1: (java_lang_Float | number)[] | null, var2: java_lang_Integer | number, var3: java_lang_Integer | number): FloatBuffer | null;
    /**
     * @param var0 original type: 'float[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    get(var0: (java_lang_Float | number)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<FloatBuffer | null>;
    /**
     * @param var0 original type: 'float[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    getSync(var0: (java_lang_Float | number)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): FloatBuffer | null;
    /**
     * @param var0 original type: 'float[]'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    get(var0: (java_lang_Float | number)[] | null): Promise<FloatBuffer | null>;
    /**
     * @param var0 original type: 'float[]'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    getSync(var0: (java_lang_Float | number)[] | null): FloatBuffer | null;
    /**
     * @param var0 original type: 'float[]'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    put(var0: (java_lang_Float | number)[] | null): Promise<FloatBuffer | null>;
    /**
     * @param var0 original type: 'float[]'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    putSync(var0: (java_lang_Float | number)[] | null): FloatBuffer | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'float[]'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    put(var0: java_lang_Integer | number, var1: (java_lang_Float | number)[] | null, var2: java_lang_Integer | number, var3: java_lang_Integer | number): Promise<FloatBuffer | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'float[]'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    putSync(var0: java_lang_Integer | number, var1: (java_lang_Float | number)[] | null, var2: java_lang_Integer | number, var3: java_lang_Integer | number): FloatBuffer | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'float[]'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    put(var0: java_lang_Integer | number, var1: (java_lang_Float | number)[] | null): Promise<FloatBuffer | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'float[]'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    putSync(var0: java_lang_Integer | number, var1: (java_lang_Float | number)[] | null): FloatBuffer | null;
    /**
     * @param var0 original type: 'float[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    put(var0: (java_lang_Float | number)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<FloatBuffer | null>;
    /**
     * @param var0 original type: 'float[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    putSync(var0: (java_lang_Float | number)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): FloatBuffer | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.nio.FloatBuffer'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    put(var0: java_lang_Integer | number, var1: FloatBufferClass | null, var2: java_lang_Integer | number, var3: java_lang_Integer | number): Promise<FloatBuffer | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.nio.FloatBuffer'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    putSync(var0: java_lang_Integer | number, var1: FloatBufferClass | null, var2: java_lang_Integer | number, var3: java_lang_Integer | number): FloatBuffer | null;
    /**
     * @param var0 original type: 'java.nio.FloatBuffer'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    put(var0: FloatBufferClass | null): Promise<FloatBuffer | null>;
    /**
     * @param var0 original type: 'java.nio.FloatBuffer'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    putSync(var0: FloatBufferClass | null): FloatBuffer | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'float'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    put(var0: java_lang_Integer | number, var1: java_lang_Float | number): Promise<FloatBuffer | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'float'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    putSync(var0: java_lang_Integer | number, var1: java_lang_Float | number): FloatBuffer | null;
    /**
     * @param var0 original type: 'float'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    put(var0: java_lang_Float | number): Promise<FloatBuffer | null>;
    /**
     * @param var0 original type: 'float'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    putSync(var0: java_lang_Float | number): FloatBuffer | null;
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
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    compareTo(var0: BasicOrJavaType | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    compareToSync(var0: BasicOrJavaType | null): number;
    /**
     * @param var0 original type: 'java.nio.FloatBuffer'
     * @return original return type: 'int'
     */
    compareTo(var0: FloatBufferClass | null): Promise<number>;
    /**
     * @param var0 original type: 'java.nio.FloatBuffer'
     * @return original return type: 'int'
     */
    compareToSync(var0: FloatBufferClass | null): number;
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    clear(): Promise<java_nio_Buffer | null>;
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    clearSync(): java_nio_Buffer | null;
    /**
     * @return original return type: 'java.nio.FloatBuffer'
     */
    clear(): Promise<FloatBuffer | null>;
    /**
     * @return original return type: 'java.nio.FloatBuffer'
     */
    clearSync(): FloatBuffer | null;
    /**
     * @param var0 original type: 'float[]'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    static wrap(var0: (java_lang_Float | number)[] | null): Promise<FloatBuffer | null>;
    /**
     * @param var0 original type: 'float[]'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    static wrapSync(var0: (java_lang_Float | number)[] | null): FloatBuffer | null;
    /**
     * @param var0 original type: 'float[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    static wrap(var0: (java_lang_Float | number)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<FloatBuffer | null>;
    /**
     * @param var0 original type: 'float[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    static wrapSync(var0: (java_lang_Float | number)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): FloatBuffer | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    position(var0: java_lang_Integer | number): Promise<FloatBuffer | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    positionSync(var0: java_lang_Integer | number): FloatBuffer | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.nio.Buffer'
     */
    position(var0: java_lang_Integer | number): Promise<java_nio_Buffer | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.nio.Buffer'
     */
    positionSync(var0: java_lang_Integer | number): java_nio_Buffer | null;
    /**
     * @return original return type: 'int'
     */
    position(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    positionSync(): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    limit(var0: java_lang_Integer | number): Promise<FloatBuffer | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    limitSync(var0: java_lang_Integer | number): FloatBuffer | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.nio.Buffer'
     */
    limit(var0: java_lang_Integer | number): Promise<java_nio_Buffer | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.nio.Buffer'
     */
    limitSync(var0: java_lang_Integer | number): java_nio_Buffer | null;
    /**
     * @return original return type: 'int'
     */
    limit(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    limitSync(): number;
    /**
     * @return original return type: 'boolean'
     */
    isDirect(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isDirectSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasArray(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasArraySync(): boolean;
    /**
     * @return original return type: 'float[]'
     */
    array(): Promise<(number)[] | null>;
    /**
     * @return original return type: 'float[]'
     */
    arraySync(): (number)[] | null;
    /**
     * @return original return type: 'java.lang.Object'
     */
    array(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    arraySync(): BasicOrJavaType | null;
    /**
     * @return original return type: 'int'
     */
    arrayOffset(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    arrayOffsetSync(): number;
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    mark(): Promise<java_nio_Buffer | null>;
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    markSync(): java_nio_Buffer | null;
    /**
     * @return original return type: 'java.nio.FloatBuffer'
     */
    mark(): Promise<FloatBuffer | null>;
    /**
     * @return original return type: 'java.nio.FloatBuffer'
     */
    markSync(): FloatBuffer | null;
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    reset(): Promise<java_nio_Buffer | null>;
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    resetSync(): java_nio_Buffer | null;
    /**
     * @return original return type: 'java.nio.FloatBuffer'
     */
    reset(): Promise<FloatBuffer | null>;
    /**
     * @return original return type: 'java.nio.FloatBuffer'
     */
    resetSync(): FloatBuffer | null;
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    flip(): Promise<java_nio_Buffer | null>;
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    flipSync(): java_nio_Buffer | null;
    /**
     * @return original return type: 'java.nio.FloatBuffer'
     */
    flip(): Promise<FloatBuffer | null>;
    /**
     * @return original return type: 'java.nio.FloatBuffer'
     */
    flipSync(): FloatBuffer | null;
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    rewind(): Promise<java_nio_Buffer | null>;
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    rewindSync(): java_nio_Buffer | null;
    /**
     * @return original return type: 'java.nio.FloatBuffer'
     */
    rewind(): Promise<FloatBuffer | null>;
    /**
     * @return original return type: 'java.nio.FloatBuffer'
     */
    rewindSync(): FloatBuffer | null;
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    slice(): Promise<java_nio_Buffer | null>;
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    sliceSync(): java_nio_Buffer | null;
    /**
     * @return original return type: 'java.nio.FloatBuffer'
     */
    slice(): Promise<FloatBuffer | null>;
    /**
     * @return original return type: 'java.nio.FloatBuffer'
     */
    sliceSync(): FloatBuffer | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.nio.Buffer'
     */
    slice(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<java_nio_Buffer | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.nio.Buffer'
     */
    sliceSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): java_nio_Buffer | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    slice(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<FloatBuffer | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    sliceSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): FloatBuffer | null;
    /**
     * @return original return type: 'java.nio.FloatBuffer'
     */
    duplicate(): Promise<FloatBuffer | null>;
    /**
     * @return original return type: 'java.nio.FloatBuffer'
     */
    duplicateSync(): FloatBuffer | null;
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    duplicate(): Promise<java_nio_Buffer | null>;
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    duplicateSync(): java_nio_Buffer | null;
    /**
     * @return original return type: 'java.nio.ByteOrder'
     */
    order(): Promise<java_nio_ByteOrder | null>;
    /**
     * @return original return type: 'java.nio.ByteOrder'
     */
    orderSync(): java_nio_ByteOrder | null;
    /**
     * @param var0 original type: 'java.nio.FloatBuffer'
     * @return original return type: 'int'
     */
    mismatch(var0: FloatBufferClass | null): Promise<number>;
    /**
     * @param var0 original type: 'java.nio.FloatBuffer'
     * @return original return type: 'int'
     */
    mismatchSync(var0: FloatBufferClass | null): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    static allocate(var0: java_lang_Integer | number): Promise<FloatBuffer | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.nio.FloatBuffer'
     */
    static allocateSync(var0: java_lang_Integer | number): FloatBuffer | null;
    /**
     * @return original return type: 'java.nio.FloatBuffer'
     */
    asReadOnlyBuffer(): Promise<FloatBuffer | null>;
    /**
     * @return original return type: 'java.nio.FloatBuffer'
     */
    asReadOnlyBufferSync(): FloatBuffer | null;
    /**
     * @return original return type: 'java.nio.FloatBuffer'
     */
    compact(): Promise<FloatBuffer | null>;
    /**
     * @return original return type: 'java.nio.FloatBuffer'
     */
    compactSync(): FloatBuffer | null;
    /**
     * @return original return type: 'int'
     */
    remaining(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    remainingSync(): number;
    /**
     * @return original return type: 'int'
     */
    capacity(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    capacitySync(): number;
    /**
     * @return original return type: 'boolean'
     */
    hasRemaining(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasRemainingSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isReadOnly(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isReadOnlySync(): boolean;
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
}
declare const FloatBuffer_base: typeof FloatBufferClass;
/**
 * Class java.nio.FloatBuffer.
 *
 * This actually imports the java class for further use.
 * The class {@link FloatBufferClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FloatBuffer extends FloatBuffer_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default FloatBuffer;
//# sourceMappingURL=FloatBuffer.d.ts.map