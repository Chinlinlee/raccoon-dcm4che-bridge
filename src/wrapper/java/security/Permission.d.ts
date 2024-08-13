import { JavaClass, BasicOrJavaType } from "java-bridge";
import { PermissionCollection as java_security_PermissionCollection } from "./PermissionCollection";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { Class as java_lang_Class } from "./../lang/Class";
/**
 * This class just defines types, you should import {@link Permission} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PermissionClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.String'
     */
    getName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getNameSync(): string | null;
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
    toString(): string;
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
     * @param var0 original type: 'java.security.Permission'
     * @return original return type: 'boolean'
     */
    implies(var0: PermissionClass | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.security.Permission'
     * @return original return type: 'boolean'
     */
    impliesSync(var0: PermissionClass | null): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    getActions(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getActionsSync(): string | null;
    /**
     * @return original return type: 'java.security.PermissionCollection'
     */
    newPermissionCollection(): Promise<java_security_PermissionCollection | null>;
    /**
     * @return original return type: 'java.security.PermissionCollection'
     */
    newPermissionCollectionSync(): java_security_PermissionCollection | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    checkGuard(var0: BasicOrJavaType | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    checkGuardSync(var0: BasicOrJavaType | null): void;
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
declare const Permission_base: typeof PermissionClass;
/**
 * Class java.security.Permission.
 *
 * This actually imports the java class for further use.
 * The class {@link PermissionClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Permission extends Permission_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default Permission;
//# sourceMappingURL=Permission.d.ts.map