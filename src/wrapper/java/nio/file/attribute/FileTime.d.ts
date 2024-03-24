import { JavaClass, BasicOrJavaType } from "java-bridge";
import { TimeUnit as java_util_concurrent_TimeUnit } from "./../../../util/concurrent/TimeUnit";
import { Long as java_lang_Long } from "./../../../lang/Long";
import { Instant as java_time_Instant } from "./../../../time/Instant";
import { Integer as java_lang_Integer } from "./../../../lang/Integer";
import { Class as java_lang_Class } from "./../../../lang/Class";
/**
 * This class just defines types, you should import {@link FileTime} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FileTimeClass extends JavaClass {
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
     * @param var0 original type: 'java.nio.file.attribute.FileTime'
     * @return original return type: 'int'
     */
    compareTo(var0: FileTimeClass | null): Promise<number>;
    /**
     * @param var0 original type: 'java.nio.file.attribute.FileTime'
     * @return original return type: 'int'
     */
    compareToSync(var0: FileTimeClass | null): number;
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
     * @param var0 original type: 'java.util.concurrent.TimeUnit'
     * @return original return type: 'long'
     */
    to(var0: java_util_concurrent_TimeUnit | null): Promise<number>;
    /**
     * @param var0 original type: 'java.util.concurrent.TimeUnit'
     * @return original return type: 'long'
     */
    toSync(var0: java_util_concurrent_TimeUnit | null): number;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.util.concurrent.TimeUnit'
     * @return original return type: 'java.nio.file.attribute.FileTime'
     */
    static from(var0: java_lang_Long | bigint | number, var1: java_util_concurrent_TimeUnit | null): Promise<FileTime | null>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.util.concurrent.TimeUnit'
     * @return original return type: 'java.nio.file.attribute.FileTime'
     */
    static fromSync(var0: java_lang_Long | bigint | number, var1: java_util_concurrent_TimeUnit | null): FileTime | null;
    /**
     * @param var0 original type: 'java.time.Instant'
     * @return original return type: 'java.nio.file.attribute.FileTime'
     */
    static from(var0: java_time_Instant | null): Promise<FileTime | null>;
    /**
     * @param var0 original type: 'java.time.Instant'
     * @return original return type: 'java.nio.file.attribute.FileTime'
     */
    static fromSync(var0: java_time_Instant | null): FileTime | null;
    /**
     * @return original return type: 'long'
     */
    toMillis(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    toMillisSync(): number;
    /**
     * @return original return type: 'java.time.Instant'
     */
    toInstant(): Promise<java_time_Instant | null>;
    /**
     * @return original return type: 'java.time.Instant'
     */
    toInstantSync(): java_time_Instant | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.nio.file.attribute.FileTime'
     */
    static fromMillis(var0: java_lang_Long | bigint | number): Promise<FileTime | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.nio.file.attribute.FileTime'
     */
    static fromMillisSync(var0: java_lang_Long | bigint | number): FileTime | null;
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
declare const FileTime_base: typeof FileTimeClass;
/**
 * Class java.nio.file.attribute.FileTime.
 *
 * This actually imports the java class for further use.
 * The class {@link FileTimeClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FileTime extends FileTime_base {
}
export default FileTime;
//# sourceMappingURL=FileTime.d.ts.map