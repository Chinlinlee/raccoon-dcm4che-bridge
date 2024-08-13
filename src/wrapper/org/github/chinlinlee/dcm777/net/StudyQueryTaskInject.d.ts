import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
/**
 * This class just defines types, you should import {@link StudyQueryTaskInject} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class StudyQueryTaskInjectClass extends JavaClass {
    /**
     * @return original return type: 'boolean'
     */
    findNextStudy(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    findNextStudySync(): boolean;
    /**
     * @return original return type: 'void'
     */
    getStudy(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    getStudySync(): void;
    /**
     * @return original return type: 'void'
     */
    wrappedFindNextStudy(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    wrappedFindNextStudySync(): void;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createStudyQueryTaskInjectProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface StudyQueryTaskInjectInterface {
    /**
     * @return original return type: 'boolean'
     */
    findNextStudy(): boolean;
    /**
     * @return original return type: 'void'
     */
    getStudy(): void;
    /**
     * @return original return type: 'void'
     */
    wrappedFindNextStudy(): void;
}
/**
 * Create a proxy for the {@link StudyQueryTaskInject} interface.
 * All required methods in {@link StudyQueryTaskInjectInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createStudyQueryTaskInjectProxy(methods: StudyQueryTaskInjectInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<StudyQueryTaskInjectInterface>;
declare const StudyQueryTaskInject_base: typeof StudyQueryTaskInjectClass;
/**
 * Class org.github.chinlinlee.dcm777.net.StudyQueryTaskInject.
 *
 * This actually imports the java class for further use.
 * The class {@link StudyQueryTaskInjectClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class StudyQueryTaskInject extends StudyQueryTaskInject_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default StudyQueryTaskInject;
//# sourceMappingURL=StudyQueryTaskInject.d.ts.map