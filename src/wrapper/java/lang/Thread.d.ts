import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./Class";
import { Long as java_lang_Long } from "./Long";
import { Integer as java_lang_Integer } from "./Integer";
import { ThreadGroup as java_lang_ThreadGroup } from "./ThreadGroup";
import { Map as java_util_Map } from "./../util/Map";
import { ClassLoader as java_lang_ClassLoader } from "./ClassLoader";
import { StackTraceElement as java_lang_StackTraceElement } from "./StackTraceElement";
import { Thread$UncaughtExceptionHandler as java_lang_Thread$UncaughtExceptionHandler, Thread$UncaughtExceptionHandlerInterface as java_lang_Thread$UncaughtExceptionHandlerInterface } from "./Thread$UncaughtExceptionHandler";
import { Boolean as java_lang_Boolean } from "./Boolean";
import { Thread$State as java_lang_Thread$State } from "./Thread$State";
import { Runnable as java_lang_Runnable, RunnableInterface as java_lang_RunnableInterface } from "./Runnable";
/**
 * This class just defines types, you should import {@link Thread} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ThreadClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setName(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setNameSync(var0: string | null): void;
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
     * @return original return type: 'java.lang.String'
     */
    getName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getNameSync(): string | null;
    /**
     * @return original return type: 'java.lang.ThreadGroup'
     */
    getThreadGroup(): Promise<java_lang_ThreadGroup | null>;
    /**
     * @return original return type: 'java.lang.ThreadGroup'
     */
    getThreadGroupSync(): java_lang_ThreadGroup | null;
    /**
     * @return original return type: 'java.util.Map'
     */
    static getAllStackTraces(): Promise<java_util_Map | null>;
    /**
     * @return original return type: 'java.util.Map'
     */
    static getAllStackTracesSync(): java_util_Map | null;
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
    static onSpinWait(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    static onSpinWaitSync(): void;
    /**
     * @return original return type: 'void'
     */
    run(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    runSync(): void;
    /**
     * @return original return type: 'long'
     */
    getId(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    getIdSync(): number;
    /**
     * @param var0 original type: 'java.lang.ClassLoader'
     * @return original return type: 'void'
     */
    setContextClassLoader(var0: java_lang_ClassLoader | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.ClassLoader'
     * @return original return type: 'void'
     */
    setContextClassLoaderSync(var0: java_lang_ClassLoader | null): void;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    static sleep(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    static sleepSync(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    static sleep(var0: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    static sleepSync(var0: java_lang_Long | bigint | number): void;
    /**
     * @return original return type: 'java.lang.StackTraceElement[]'
     */
    getStackTrace(): Promise<(java_lang_StackTraceElement | null)[] | null>;
    /**
     * @return original return type: 'java.lang.StackTraceElement[]'
     */
    getStackTraceSync(): (java_lang_StackTraceElement | null)[] | null;
    /**
     * @return original return type: 'boolean'
     */
    isDaemon(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isDaemonSync(): boolean;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'void'
     */
    static yield(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    static yieldSync(): void;
    /**
     * @return original return type: 'void'
     */
    interrupt(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    interruptSync(): void;
    /**
     * @param var0 original type: 'java.lang.Thread[]'
     * @return original return type: 'int'
     */
    static enumerate(var0: (ThreadClass | null)[] | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Thread[]'
     * @return original return type: 'int'
     */
    static enumerateSync(var0: (ThreadClass | null)[] | null): number;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    join(var0: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    joinSync(var0: java_lang_Long | bigint | number): void;
    /**
     * @return original return type: 'void'
     */
    join(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    joinSync(): void;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    join(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    joinSync(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): void;
    /**
     * @return original return type: 'void'
     */
    resume(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    resumeSync(): void;
    /**
     * @return original return type: 'int'
     */
    static activeCount(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    static activeCountSync(): number;
    /**
     * @return original return type: 'void'
     */
    suspend(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    suspendSync(): void;
    /**
     * @return original return type: 'java.lang.Thread'
     */
    static currentThread(): Promise<Thread | null>;
    /**
     * @return original return type: 'java.lang.Thread'
     */
    static currentThreadSync(): Thread | null;
    /**
     * @return original return type: 'boolean'
     */
    isInterrupted(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isInterruptedSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.Thread$UncaughtExceptionHandler'
     * @return original return type: 'void'
     */
    setUncaughtExceptionHandler(var0: java_lang_Thread$UncaughtExceptionHandler | JavaInterfaceProxy<java_lang_Thread$UncaughtExceptionHandlerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Thread$UncaughtExceptionHandler'
     * @return original return type: 'void'
     */
    setUncaughtExceptionHandlerSync(var0: java_lang_Thread$UncaughtExceptionHandler | JavaInterfaceProxy<java_lang_Thread$UncaughtExceptionHandlerInterface> | null): void;
    /**
     * @return original return type: 'void'
     */
    static dumpStack(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    static dumpStackSync(): void;
    /**
     * @param var0 original type: 'java.lang.Thread$UncaughtExceptionHandler'
     * @return original return type: 'void'
     */
    static setDefaultUncaughtExceptionHandler(var0: java_lang_Thread$UncaughtExceptionHandler | JavaInterfaceProxy<java_lang_Thread$UncaughtExceptionHandlerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Thread$UncaughtExceptionHandler'
     * @return original return type: 'void'
     */
    static setDefaultUncaughtExceptionHandlerSync(var0: java_lang_Thread$UncaughtExceptionHandler | JavaInterfaceProxy<java_lang_Thread$UncaughtExceptionHandlerInterface> | null): void;
    /**
     * @return original return type: 'void'
     */
    start(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    startSync(): void;
    /**
     * @return original return type: 'boolean'
     */
    static interrupted(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    static interruptedSync(): boolean;
    /**
     * @return original return type: 'java.lang.Thread$UncaughtExceptionHandler'
     */
    getUncaughtExceptionHandler(): Promise<java_lang_Thread$UncaughtExceptionHandler | null>;
    /**
     * @return original return type: 'java.lang.Thread$UncaughtExceptionHandler'
     */
    getUncaughtExceptionHandlerSync(): java_lang_Thread$UncaughtExceptionHandler | null;
    /**
     * @return original return type: 'void'
     */
    checkAccess(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    checkAccessSync(): void;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setDaemon(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setDaemonSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'boolean'
     */
    isAlive(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isAliveSync(): boolean;
    /**
     * @return original return type: 'java.lang.Thread$UncaughtExceptionHandler'
     */
    static getDefaultUncaughtExceptionHandler(): Promise<java_lang_Thread$UncaughtExceptionHandler | null>;
    /**
     * @return original return type: 'java.lang.Thread$UncaughtExceptionHandler'
     */
    static getDefaultUncaughtExceptionHandlerSync(): java_lang_Thread$UncaughtExceptionHandler | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    static holdsLock(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    static holdsLockSync(var0: BasicOrJavaType | null): boolean;
    /**
     * @return original return type: 'java.lang.Thread$State'
     */
    getState(): Promise<java_lang_Thread$State | null>;
    /**
     * @return original return type: 'java.lang.Thread$State'
     */
    getStateSync(): java_lang_Thread$State | null;
    /**
     * @return original return type: 'void'
     */
    stop(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    stopSync(): void;
    /**
     * @return original return type: 'java.lang.ClassLoader'
     */
    getContextClassLoader(): Promise<java_lang_ClassLoader | null>;
    /**
     * @return original return type: 'java.lang.ClassLoader'
     */
    getContextClassLoaderSync(): java_lang_ClassLoader | null;
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
    getPriority(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getPrioritySync(): number;
    /**
     * @return original return type: 'int'
     */
    countStackFrames(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    countStackFramesSync(): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setPriority(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setPrioritySync(var0: java_lang_Integer | number): void;
    /**
     * Original type: 'int'
     */
    static readonly MIN_PRIORITY: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly MAX_PRIORITY: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly NORM_PRIORITY: java_lang_Integer | number;
    /**
     * @param var0 original type: 'java.lang.ThreadGroup'
     * @param var1 original type: 'java.lang.Runnable'
     */
    constructor(var0: java_lang_ThreadGroup | null, var1: java_lang_Runnable | JavaInterfaceProxy<java_lang_RunnableInterface> | null);
    /**
     * @param var0 original type: 'java.lang.ThreadGroup'
     * @param var1 original type: 'java.lang.Runnable'
     * @return original return type: 'java.lang.Thread'
     */
    static newInstanceAsync(var0: java_lang_ThreadGroup | null, var1: java_lang_Runnable | JavaInterfaceProxy<java_lang_RunnableInterface> | null): Promise<Thread>;
    /**
     * @param var0 original type: 'java.lang.String'
     */
    constructor(var0: string | null);
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Thread'
     */
    static newInstanceAsync(var0: string | null): Promise<Thread>;
    /**
     * @param var0 original type: 'java.lang.Runnable'
     */
    constructor(var0: java_lang_Runnable | JavaInterfaceProxy<java_lang_RunnableInterface> | null);
    /**
     * @param var0 original type: 'java.lang.Runnable'
     * @return original return type: 'java.lang.Thread'
     */
    static newInstanceAsync(var0: java_lang_Runnable | JavaInterfaceProxy<java_lang_RunnableInterface> | null): Promise<Thread>;
    constructor();
    /**
     * @return original return type: 'java.lang.Thread'
     */
    static newInstanceAsync(): Promise<Thread>;
    /**
     * @param var0 original type: 'java.lang.ThreadGroup'
     * @param var1 original type: 'java.lang.Runnable'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'long'
     * @param var4 original type: 'boolean'
     */
    constructor(var0: java_lang_ThreadGroup | null, var1: java_lang_Runnable | JavaInterfaceProxy<java_lang_RunnableInterface> | null, var2: string | null, var3: java_lang_Long | bigint | number, var4: java_lang_Boolean | boolean);
    /**
     * @param var0 original type: 'java.lang.ThreadGroup'
     * @param var1 original type: 'java.lang.Runnable'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'long'
     * @param var4 original type: 'boolean'
     * @return original return type: 'java.lang.Thread'
     */
    static newInstanceAsync(var0: java_lang_ThreadGroup | null, var1: java_lang_Runnable | JavaInterfaceProxy<java_lang_RunnableInterface> | null, var2: string | null, var3: java_lang_Long | bigint | number, var4: java_lang_Boolean | boolean): Promise<Thread>;
    /**
     * @param var0 original type: 'java.lang.ThreadGroup'
     * @param var1 original type: 'java.lang.Runnable'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'long'
     */
    constructor(var0: java_lang_ThreadGroup | null, var1: java_lang_Runnable | JavaInterfaceProxy<java_lang_RunnableInterface> | null, var2: string | null, var3: java_lang_Long | bigint | number);
    /**
     * @param var0 original type: 'java.lang.ThreadGroup'
     * @param var1 original type: 'java.lang.Runnable'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'long'
     * @return original return type: 'java.lang.Thread'
     */
    static newInstanceAsync(var0: java_lang_ThreadGroup | null, var1: java_lang_Runnable | JavaInterfaceProxy<java_lang_RunnableInterface> | null, var2: string | null, var3: java_lang_Long | bigint | number): Promise<Thread>;
    /**
     * @param var0 original type: 'java.lang.ThreadGroup'
     * @param var1 original type: 'java.lang.Runnable'
     * @param var2 original type: 'java.lang.String'
     */
    constructor(var0: java_lang_ThreadGroup | null, var1: java_lang_Runnable | JavaInterfaceProxy<java_lang_RunnableInterface> | null, var2: string | null);
    /**
     * @param var0 original type: 'java.lang.ThreadGroup'
     * @param var1 original type: 'java.lang.Runnable'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Thread'
     */
    static newInstanceAsync(var0: java_lang_ThreadGroup | null, var1: java_lang_Runnable | JavaInterfaceProxy<java_lang_RunnableInterface> | null, var2: string | null): Promise<Thread>;
    /**
     * @param var0 original type: 'java.lang.Runnable'
     * @param var1 original type: 'java.lang.String'
     */
    constructor(var0: java_lang_Runnable | JavaInterfaceProxy<java_lang_RunnableInterface> | null, var1: string | null);
    /**
     * @param var0 original type: 'java.lang.Runnable'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Thread'
     */
    static newInstanceAsync(var0: java_lang_Runnable | JavaInterfaceProxy<java_lang_RunnableInterface> | null, var1: string | null): Promise<Thread>;
    /**
     * @param var0 original type: 'java.lang.ThreadGroup'
     * @param var1 original type: 'java.lang.String'
     */
    constructor(var0: java_lang_ThreadGroup | null, var1: string | null);
    /**
     * @param var0 original type: 'java.lang.ThreadGroup'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Thread'
     */
    static newInstanceAsync(var0: java_lang_ThreadGroup | null, var1: string | null): Promise<Thread>;
}
declare const Thread_base: typeof ThreadClass;
/**
 * Class java.lang.Thread.
 *
 * This actually imports the java class for further use.
 * The class {@link ThreadClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Thread extends Thread_base {
}
export default Thread;
