import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Subject as javax_security_auth_Subject } from "./../../../../javax/security/auth/Subject";
/**
 * This class just defines types, you should import {@link GroupPrincipal} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class GroupPrincipalClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.String'
     */
    getName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getNameSync(): string | null;
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
     * @param var0 original type: 'javax.security.auth.Subject'
     * @return original return type: 'boolean'
     */
    implies(var0: javax_security_auth_Subject | null): Promise<boolean>;
    /**
     * @param var0 original type: 'javax.security.auth.Subject'
     * @return original return type: 'boolean'
     */
    impliesSync(var0: javax_security_auth_Subject | null): boolean;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createGroupPrincipalProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface GroupPrincipalInterface {
    /**
     * @return original return type: 'java.lang.String'
     */
    getName(): string | null;
    /**
     * @return original return type: 'int'
     */
    hashCode(): number;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equals(var0: BasicOrJavaType | null): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): string;
    /**
     * @param var0 original type: 'javax.security.auth.Subject'
     * @return original return type: 'boolean'
     */
    implies?(var0: javax_security_auth_Subject | null): boolean;
}
/**
 * Create a proxy for the {@link GroupPrincipal} interface.
 * All required methods in {@link GroupPrincipalInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createGroupPrincipalProxy(methods: GroupPrincipalInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<GroupPrincipalInterface>;
declare const GroupPrincipal_base: typeof GroupPrincipalClass;
/**
 * Class java.nio.file.attribute.GroupPrincipal.
 *
 * This actually imports the java class for further use.
 * The class {@link GroupPrincipalClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class GroupPrincipal extends GroupPrincipal_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default GroupPrincipal;
//# sourceMappingURL=GroupPrincipal.d.ts.map