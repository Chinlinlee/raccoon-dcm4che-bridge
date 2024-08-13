/// <reference types="node" />
import { JavaClass, BasicOrJavaType } from "java-bridge";
import { UserIdentityRQ as org_dcm4che3_net_pdu_UserIdentityRQ } from "./UserIdentityRQ";
import { PresentationContext as org_dcm4che3_net_pdu_PresentationContext } from "./PresentationContext";
import { Integer as java_lang_Integer } from "./../../../../java/lang/Integer";
import { RoleSelection as org_dcm4che3_net_pdu_RoleSelection } from "./RoleSelection";
import { List as java_util_List } from "./../../../../java/util/List";
import { CommonExtendedNegotiation as org_dcm4che3_net_pdu_CommonExtendedNegotiation } from "./CommonExtendedNegotiation";
import { ExtendedNegotiation as org_dcm4che3_net_pdu_ExtendedNegotiation } from "./ExtendedNegotiation";
import { Collection as java_util_Collection } from "./../../../../java/util/Collection";
import { UserIdentityAC as org_dcm4che3_net_pdu_UserIdentityAC } from "./UserIdentityAC";
import { Long as java_lang_Long } from "./../../../../java/lang/Long";
import { Class as java_lang_Class } from "./../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link AAssociateAC} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AAssociateACClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): string;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @param var0 original type: 'org.dcm4che3.net.pdu.UserIdentityRQ'
     * @return original return type: 'void'
     */
    setUserIdentityRQ(var0: org_dcm4che3_net_pdu_UserIdentityRQ | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.net.pdu.UserIdentityRQ'
     * @return original return type: 'void'
     */
    setUserIdentityRQSync(var0: org_dcm4che3_net_pdu_UserIdentityRQ | null): void;
    /**
     * @return original return type: 'int'
     */
    length(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    lengthSync(): number;
    /**
     * @return original return type: 'int'
     */
    getProtocolVersion(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getProtocolVersionSync(): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.dcm4che3.net.pdu.PresentationContext'
     */
    getPresentationContext(var0: java_lang_Integer | number): Promise<org_dcm4che3_net_pdu_PresentationContext | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.dcm4che3.net.pdu.PresentationContext'
     */
    getPresentationContextSync(var0: java_lang_Integer | number): org_dcm4che3_net_pdu_PresentationContext | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.net.pdu.RoleSelection'
     */
    getRoleSelectionFor(var0: string | null): Promise<org_dcm4che3_net_pdu_RoleSelection | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.net.pdu.RoleSelection'
     */
    getRoleSelectionForSync(var0: string | null): org_dcm4che3_net_pdu_RoleSelection | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getPresentationContexts(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getPresentationContextsSync(): java_util_List | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.net.pdu.CommonExtendedNegotiation'
     */
    getCommonExtendedNegotiationFor(var0: string | null): Promise<org_dcm4che3_net_pdu_CommonExtendedNegotiation | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.net.pdu.CommonExtendedNegotiation'
     */
    getCommonExtendedNegotiationForSync(var0: string | null): org_dcm4che3_net_pdu_CommonExtendedNegotiation | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.net.pdu.ExtendedNegotiation'
     */
    getExtNegotiationFor(var0: string | null): Promise<org_dcm4che3_net_pdu_ExtendedNegotiation | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.net.pdu.ExtendedNegotiation'
     */
    getExtNegotiationForSync(var0: string | null): org_dcm4che3_net_pdu_ExtendedNegotiation | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getImplClassUID(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getImplClassUIDSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCallingAET(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCallingAETSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCalledAET(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCalledAETSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getImplVersionName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getImplVersionNameSync(): string | null;
    /**
     * @return original return type: 'int'
     */
    getMaxOpsInvoked(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getMaxOpsInvokedSync(): number;
    /**
     * @return original return type: 'int'
     */
    getMaxPDULength(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getMaxPDULengthSync(): number;
    /**
     * @return original return type: 'int'
     */
    getMaxOpsPerformed(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getMaxOpsPerformedSync(): number;
    /**
     * @return original return type: 'int'
     */
    getNumberOfPresentationContexts(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getNumberOfPresentationContextsSync(): number;
    /**
     * @return original return type: 'java.util.Collection'
     */
    getExtendedNegotiations(): Promise<java_util_Collection | null>;
    /**
     * @return original return type: 'java.util.Collection'
     */
    getExtendedNegotiationsSync(): java_util_Collection | null;
    /**
     * @param var0 original type: 'org.dcm4che3.net.pdu.PresentationContext'
     * @return original return type: 'boolean'
     */
    removePresentationContext(var0: org_dcm4che3_net_pdu_PresentationContext | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.dcm4che3.net.pdu.PresentationContext'
     * @return original return type: 'boolean'
     */
    removePresentationContextSync(var0: org_dcm4che3_net_pdu_PresentationContext | null): boolean;
    /**
     * @param var0 original type: 'org.dcm4che3.net.pdu.ExtendedNegotiation'
     * @return original return type: 'org.dcm4che3.net.pdu.ExtendedNegotiation'
     */
    addExtendedNegotiation(var0: org_dcm4che3_net_pdu_ExtendedNegotiation | null): Promise<org_dcm4che3_net_pdu_ExtendedNegotiation | null>;
    /**
     * @param var0 original type: 'org.dcm4che3.net.pdu.ExtendedNegotiation'
     * @return original return type: 'org.dcm4che3.net.pdu.ExtendedNegotiation'
     */
    addExtendedNegotiationSync(var0: org_dcm4che3_net_pdu_ExtendedNegotiation | null): org_dcm4che3_net_pdu_ExtendedNegotiation | null;
    /**
     * @param var0 original type: 'org.dcm4che3.net.pdu.CommonExtendedNegotiation'
     * @return original return type: 'org.dcm4che3.net.pdu.CommonExtendedNegotiation'
     */
    addCommonExtendedNegotiation(var0: org_dcm4che3_net_pdu_CommonExtendedNegotiation | null): Promise<org_dcm4che3_net_pdu_CommonExtendedNegotiation | null>;
    /**
     * @param var0 original type: 'org.dcm4che3.net.pdu.CommonExtendedNegotiation'
     * @return original return type: 'org.dcm4che3.net.pdu.CommonExtendedNegotiation'
     */
    addCommonExtendedNegotiationSync(var0: org_dcm4che3_net_pdu_CommonExtendedNegotiation | null): org_dcm4che3_net_pdu_CommonExtendedNegotiation | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getApplicationContext(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getApplicationContextSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.net.pdu.RoleSelection'
     */
    removeRoleSelectionFor(var0: string | null): Promise<org_dcm4che3_net_pdu_RoleSelection | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.net.pdu.RoleSelection'
     */
    removeRoleSelectionForSync(var0: string | null): org_dcm4che3_net_pdu_RoleSelection | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setApplicationContext(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setApplicationContextSync(var0: string | null): void;
    /**
     * @return original return type: 'java.util.Collection'
     */
    getCommonExtendedNegotiations(): Promise<java_util_Collection | null>;
    /**
     * @return original return type: 'java.util.Collection'
     */
    getCommonExtendedNegotiationsSync(): java_util_Collection | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.net.pdu.ExtendedNegotiation'
     */
    removeExtendedNegotiationFor(var0: string | null): Promise<org_dcm4che3_net_pdu_ExtendedNegotiation | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.net.pdu.ExtendedNegotiation'
     */
    removeExtendedNegotiationForSync(var0: string | null): org_dcm4che3_net_pdu_ExtendedNegotiation | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.net.pdu.CommonExtendedNegotiation'
     */
    removeCommonExtendedNegotiationFor(var0: string | null): Promise<org_dcm4che3_net_pdu_CommonExtendedNegotiation | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.net.pdu.CommonExtendedNegotiation'
     */
    removeCommonExtendedNegotiationForSync(var0: string | null): org_dcm4che3_net_pdu_CommonExtendedNegotiation | null;
    /**
     * @param var0 original type: 'org.dcm4che3.net.pdu.PresentationContext'
     * @return original return type: 'void'
     */
    addPresentationContext(var0: org_dcm4che3_net_pdu_PresentationContext | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.net.pdu.PresentationContext'
     * @return original return type: 'void'
     */
    addPresentationContextSync(var0: org_dcm4che3_net_pdu_PresentationContext | null): void;
    /**
     * @return original return type: 'org.dcm4che3.net.pdu.UserIdentityRQ'
     */
    getUserIdentityRQ(): Promise<org_dcm4che3_net_pdu_UserIdentityRQ | null>;
    /**
     * @return original return type: 'org.dcm4che3.net.pdu.UserIdentityRQ'
     */
    getUserIdentityRQSync(): org_dcm4che3_net_pdu_UserIdentityRQ | null;
    /**
     * @return original return type: 'boolean'
     */
    isAsyncOps(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isAsyncOpsSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setCallingAET(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setCallingAETSync(var0: string | null): void;
    /**
     * @return original return type: 'void'
     */
    checkCalledAET(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    checkCalledAETSync(): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setCalledAET(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setCalledAETSync(var0: string | null): void;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'void'
     */
    setReservedBytes(var0: Buffer | null): Promise<void>;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'void'
     */
    setReservedBytesSync(var0: Buffer | null): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setMaxPDULength(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setMaxPDULengthSync(var0: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setMaxOpsInvoked(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setMaxOpsInvokedSync(var0: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setProtocolVersion(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setProtocolVersionSync(var0: java_lang_Integer | number): void;
    /**
     * @return original return type: 'byte[]'
     */
    getReservedBytes(): Promise<Buffer | null>;
    /**
     * @return original return type: 'byte[]'
     */
    getReservedBytesSync(): Buffer | null;
    /**
     * @return original return type: 'int'
     */
    userInfoLength(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    userInfoLengthSync(): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setMaxOpsPerformed(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setMaxOpsPerformedSync(var0: java_lang_Integer | number): void;
    /**
     * @return original return type: 'void'
     */
    checkCallingAET(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    checkCallingAETSync(): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setImplClassUID(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setImplClassUIDSync(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setImplVersionName(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setImplVersionNameSync(var0: string | null): void;
    /**
     * @return original return type: 'org.dcm4che3.net.pdu.UserIdentityAC'
     */
    getUserIdentityAC(): Promise<org_dcm4che3_net_pdu_UserIdentityAC | null>;
    /**
     * @return original return type: 'org.dcm4che3.net.pdu.UserIdentityAC'
     */
    getUserIdentityACSync(): org_dcm4che3_net_pdu_UserIdentityAC | null;
    /**
     * @return original return type: 'java.util.Collection'
     */
    getRoleSelections(): Promise<java_util_Collection | null>;
    /**
     * @return original return type: 'java.util.Collection'
     */
    getRoleSelectionsSync(): java_util_Collection | null;
    /**
     * @param var0 original type: 'org.dcm4che3.net.pdu.RoleSelection'
     * @return original return type: 'org.dcm4che3.net.pdu.RoleSelection'
     */
    addRoleSelection(var0: org_dcm4che3_net_pdu_RoleSelection | null): Promise<org_dcm4che3_net_pdu_RoleSelection | null>;
    /**
     * @param var0 original type: 'org.dcm4che3.net.pdu.RoleSelection'
     * @return original return type: 'org.dcm4che3.net.pdu.RoleSelection'
     */
    addRoleSelectionSync(var0: org_dcm4che3_net_pdu_RoleSelection | null): org_dcm4che3_net_pdu_RoleSelection | null;
    /**
     * @param var0 original type: 'org.dcm4che3.net.pdu.UserIdentityAC'
     * @return original return type: 'void'
     */
    setUserIdentityAC(var0: org_dcm4che3_net_pdu_UserIdentityAC | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.net.pdu.UserIdentityAC'
     * @return original return type: 'void'
     */
    setUserIdentityACSync(var0: org_dcm4che3_net_pdu_UserIdentityAC | null): void;
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
     * @return original return type: 'org.dcm4che3.net.pdu.AAssociateAC'
     */
    static newInstanceAsync(): Promise<AAssociateAC>;
    constructor();
}
declare const AAssociateAC_base: typeof AAssociateACClass;
/**
 * Class org.dcm4che3.net.pdu.AAssociateAC.
 *
 * This actually imports the java class for further use.
 * The class {@link AAssociateACClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AAssociateAC extends AAssociateAC_base {
}
export default AAssociateAC;
//# sourceMappingURL=AAssociateAC.d.ts.map