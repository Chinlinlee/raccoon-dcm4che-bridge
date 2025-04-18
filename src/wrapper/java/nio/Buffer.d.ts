import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../lang/Class";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
/**
 * This class just defines types, you should import {@link Buffer} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class BufferClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
    /**
     * @return original return type: 'boolean'
     */
    hasArray(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasArraySync(): boolean;
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
    hasRemaining(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasRemainingSync(): boolean;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    clear(): Promise<Buffer | null>;
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    clearSync(): Buffer | null;
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    duplicate(): Promise<Buffer | null>;
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    duplicateSync(): Buffer | null;
    /**
     * @return original return type: 'int'
     */
    remaining(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    remainingSync(): number;
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
    capacity(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    capacitySync(): number;
    /**
     * @return original return type: 'boolean'
     */
    isReadOnly(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isReadOnlySync(): boolean;
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    rewind(): Promise<Buffer | null>;
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    rewindSync(): Buffer | null;
    /**
     * @return original return type: 'java.lang.Object'
     */
    array(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    arraySync(): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.nio.Buffer'
     */
    slice(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<Buffer | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.nio.Buffer'
     */
    sliceSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Buffer | null;
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    slice(): Promise<Buffer | null>;
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    sliceSync(): Buffer | null;
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
     * @return original return type: 'java.nio.Buffer'
     */
    limit(var0: java_lang_Integer | number): Promise<Buffer | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.nio.Buffer'
     */
    limitSync(var0: java_lang_Integer | number): Buffer | null;
    /**
     * @return original return type: 'int'
     */
    limit(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    limitSync(): number;
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
    reset(): Promise<Buffer | null>;
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    resetSync(): Buffer | null;
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
     * @return original return type: 'java.nio.Buffer'
     */
    position(var0: java_lang_Integer | number): Promise<Buffer | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.nio.Buffer'
     */
    positionSync(var0: java_lang_Integer | number): Buffer | null;
    /**
     * @return original return type: 'boolean'
     */
    isDirect(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isDirectSync(): boolean;
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    flip(): Promise<Buffer | null>;
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    flipSync(): Buffer | null;
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    mark(): Promise<Buffer | null>;
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    markSync(): Buffer | null;
}
declare const Buffer_base: typeof BufferClass;
/**
 * Class java.nio.Buffer.
 *
 * This actually imports the java class for further use.
 * The class {@link BufferClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Buffer extends Buffer_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default Buffer;
