import { JavaClass, BasicOrJavaType } from "java-bridge";
import { PrintWriter as java_io_PrintWriter } from "./../io/PrintWriter";
import { PrintStream as java_io_PrintStream } from "./../io/PrintStream";
import { StackTraceElement as java_lang_StackTraceElement } from "./StackTraceElement";
import { Long as java_lang_Long } from "./Long";
import { Integer as java_lang_Integer } from "./Integer";
import { Class as java_lang_Class } from "./Class";
/**
 * This class just defines types, you should import {@link Throwable} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ThrowableClass extends JavaClass {
    /**
     * @return original return type: 'void'
     */
    printStackTrace(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    printStackTraceSync(): void;
    /**
     * @param var0 original type: 'java.io.PrintWriter'
     * @return original return type: 'void'
     */
    printStackTrace(var0: java_io_PrintWriter | null): Promise<void>;
    /**
     * @param var0 original type: 'java.io.PrintWriter'
     * @return original return type: 'void'
     */
    printStackTraceSync(var0: java_io_PrintWriter | null): void;
    /**
     * @param var0 original type: 'java.io.PrintStream'
     * @return original return type: 'void'
     */
    printStackTrace(var0: java_io_PrintStream | null): Promise<void>;
    /**
     * @param var0 original type: 'java.io.PrintStream'
     * @return original return type: 'void'
     */
    printStackTraceSync(var0: java_io_PrintStream | null): void;
    /**
     * @return original return type: 'java.lang.StackTraceElement[]'
     */
    getStackTrace(): Promise<(java_lang_StackTraceElement | null)[] | null>;
    /**
     * @return original return type: 'java.lang.StackTraceElement[]'
     */
    getStackTraceSync(): (java_lang_StackTraceElement | null)[] | null;
    /**
     * @return original return type: 'java.lang.Throwable'
     */
    fillInStackTrace(): Promise<Throwable | null>;
    /**
     * @return original return type: 'java.lang.Throwable'
     */
    fillInStackTraceSync(): Throwable | null;
    /**
     * @return original return type: 'java.lang.Throwable'
     */
    getCause(): Promise<Throwable | null>;
    /**
     * @return original return type: 'java.lang.Throwable'
     */
    getCauseSync(): Throwable | null;
    /**
     * @param var0 original type: 'java.lang.Throwable'
     * @return original return type: 'java.lang.Throwable'
     */
    initCause(var0: ThrowableClass | null): Promise<Throwable | null>;
    /**
     * @param var0 original type: 'java.lang.Throwable'
     * @return original return type: 'java.lang.Throwable'
     */
    initCauseSync(var0: ThrowableClass | null): Throwable | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): string;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @return original return type: 'java.lang.String'
     */
    getMessage(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getMessageSync(): string | null;
    /**
     * @return original return type: 'java.lang.Throwable[]'
     */
    getSuppressed(): Promise<(Throwable | null)[] | null>;
    /**
     * @return original return type: 'java.lang.Throwable[]'
     */
    getSuppressedSync(): (Throwable | null)[] | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getLocalizedMessage(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getLocalizedMessageSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.StackTraceElement[]'
     * @return original return type: 'void'
     */
    setStackTrace(var0: (java_lang_StackTraceElement | null)[] | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.StackTraceElement[]'
     * @return original return type: 'void'
     */
    setStackTraceSync(var0: (java_lang_StackTraceElement | null)[] | null): void;
    /**
     * @param var0 original type: 'java.lang.Throwable'
     * @return original return type: 'void'
     */
    addSuppressed(var0: ThrowableClass | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Throwable'
     * @return original return type: 'void'
     */
    addSuppressedSync(var0: ThrowableClass | null): void;
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
     * @param var0 original type: 'java.lang.Throwable'
     * @return original return type: 'java.lang.Throwable'
     */
    static newInstanceAsync(var0: ThrowableClass | null): Promise<Throwable>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Throwable'
     * @return original return type: 'java.lang.Throwable'
     */
    static newInstanceAsync(var0: string | null, var1: ThrowableClass | null): Promise<Throwable>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Throwable'
     */
    static newInstanceAsync(var0: string | null): Promise<Throwable>;
    /**
     * @return original return type: 'java.lang.Throwable'
     */
    static newInstanceAsync(): Promise<Throwable>;
    /**
     * @param var0 original type: 'java.lang.Throwable'
     */
    constructor(var0: ThrowableClass | null);
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Throwable'
     */
    constructor(var0: string | null, var1: ThrowableClass | null);
    /**
     * @param var0 original type: 'java.lang.String'
     */
    constructor(var0: string | null);
    constructor();
}
declare const Throwable_base: typeof ThrowableClass;
/**
 * Class java.lang.Throwable.
 *
 * This actually imports the java class for further use.
 * The class {@link ThrowableClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Throwable extends Throwable_base {
}
export default Throwable;
//# sourceMappingURL=Throwable.d.ts.map