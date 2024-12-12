/// <reference types="node" />
/// <reference types="node" />
import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./../../../java/lang/Class";
import { Attributes as org_dcm4che3_data_Attributes } from "./../data/Attributes";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
import { Long as java_lang_Long } from "./../../../java/lang/Long";
import { DicomInputStream$IncludeBulkData as org_dcm4che3_io_DicomInputStream$IncludeBulkData } from "./DicomInputStream$IncludeBulkData";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../java/util/List";
import { Short as java_lang_Short } from "./../../../java/lang/Short";
import { Predicate as java_util_function_Predicate, PredicateInterface as java_util_function_PredicateInterface } from "./../../../java/util/function/Predicate";
import { Boolean as java_lang_Boolean } from "./../../../java/lang/Boolean";
import { VR as org_dcm4che3_data_VR } from "./../data/VR";
import { BulkData as org_dcm4che3_data_BulkData } from "./../data/BulkData";
import { BulkDataDescriptor as org_dcm4che3_io_BulkDataDescriptor, BulkDataDescriptorInterface as org_dcm4che3_io_BulkDataDescriptorInterface } from "./BulkDataDescriptor";
import { File as java_io_File } from "./../../../java/io/File";
import { OutputStream as java_io_OutputStream } from "./../../../java/io/OutputStream";
import { Sequence as org_dcm4che3_data_Sequence } from "./../data/Sequence";
import { Fragments as org_dcm4che3_data_Fragments } from "./../data/Fragments";
import { BulkDataCreator as org_dcm4che3_io_BulkDataCreator, BulkDataCreatorInterface as org_dcm4che3_io_BulkDataCreatorInterface } from "./BulkDataCreator";
import { InputStream as java_io_InputStream } from "./../../../java/io/InputStream";
import { DicomInputHandler as org_dcm4che3_io_DicomInputHandler, DicomInputHandlerInterface as org_dcm4che3_io_DicomInputHandlerInterface } from "./DicomInputHandler";
/**
 * This class just defines types, you should import {@link DicomInputStream} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DicomInputStreamClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'org.dcm4che3.data.Attributes'
     * @param var2 original type: 'int'
     * @return original return type: 'void'
     */
    static parseUNSequence(var0: Buffer | null, var1: org_dcm4che3_data_Attributes | null, var2: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'org.dcm4che3.data.Attributes'
     * @param var2 original type: 'int'
     * @return original return type: 'void'
     */
    static parseUNSequenceSync(var0: Buffer | null, var1: org_dcm4che3_data_Attributes | null, var2: java_lang_Integer | number): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTransferSyntax(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTransferSyntaxSync(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    markSupported(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    markSupportedSync(): boolean;
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputStream'
     * @return original return type: 'void'
     */
    endDataset(var0: DicomInputStreamClass | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputStream'
     * @return original return type: 'void'
     */
    endDatasetSync(var0: DicomInputStreamClass | null): void;
    /**
     * @return original return type: 'int'
     */
    available(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    availableSync(): number;
    /**
     * @return original return type: 'org.dcm4che3.data.Attributes'
     */
    readItem(): Promise<org_dcm4che3_data_Attributes | null>;
    /**
     * @return original return type: 'org.dcm4che3.data.Attributes'
     */
    readItemSync(): org_dcm4che3_data_Attributes | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    setPosition(var0: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    setPositionSync(var0: java_lang_Long | bigint | number): void;
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputStream$IncludeBulkData'
     * @return original return type: 'void'
     */
    setIncludeBulkData(var0: org_dcm4che3_io_DicomInputStream$IncludeBulkData | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputStream$IncludeBulkData'
     * @return original return type: 'void'
     */
    setIncludeBulkDataSync(var0: org_dcm4che3_io_DicomInputStream$IncludeBulkData | null): void;
    /**
     * @return original return type: 'java.util.List'
     */
    getBulkDataFiles(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getBulkDataFilesSync(): java_util_List | null;
    /**
     * @return original return type: 'boolean'
     */
    bigEndian(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    bigEndianSync(): boolean;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'void'
     */
    readFully(var0: Buffer | null): Promise<void>;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'void'
     */
    readFullySync(var0: Buffer | null): void;
    /**
     * @param var0 original type: 'short[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'void'
     */
    readFully(var0: (java_lang_Short | number)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'short[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'void'
     */
    readFullySync(var0: (java_lang_Short | number)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'void'
     */
    readFully(var0: Buffer | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'void'
     */
    readFullySync(var0: Buffer | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @param var1 original type: 'long'
     * @param var2 original type: 'int'
     * @return original return type: 'void'
     */
    readAttributes(var0: org_dcm4che3_data_Attributes | null, var1: java_lang_Long | bigint | number, var2: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @param var1 original type: 'long'
     * @param var2 original type: 'int'
     * @return original return type: 'void'
     */
    readAttributesSync(var0: org_dcm4che3_data_Attributes | null, var1: java_lang_Long | bigint | number, var2: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @param var1 original type: 'long'
     * @param var2 original type: 'java.util.function.Predicate'
     * @return original return type: 'void'
     */
    readAttributes(var0: org_dcm4che3_data_Attributes | null, var1: java_lang_Long | bigint | number, var2: java_util_function_Predicate | JavaInterfaceProxy<java_util_function_PredicateInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @param var1 original type: 'long'
     * @param var2 original type: 'java.util.function.Predicate'
     * @return original return type: 'void'
     */
    readAttributesSync(var0: org_dcm4che3_data_Attributes | null, var1: java_lang_Long | bigint | number, var2: java_util_function_Predicate | JavaInterfaceProxy<java_util_function_PredicateInterface> | null): void;
    /**
     * @return original return type: 'org.dcm4che3.data.Attributes'
     */
    getFileMetaInformation(): Promise<org_dcm4che3_data_Attributes | null>;
    /**
     * @return original return type: 'org.dcm4che3.data.Attributes'
     */
    getFileMetaInformationSync(): org_dcm4che3_data_Attributes | null;
    /**
     * @return original return type: 'int'
     */
    tag(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    tagSync(): number;
    /**
     * @return original return type: 'org.dcm4che3.data.Attributes'
     */
    readDatasetUntilPixelData(): Promise<org_dcm4che3_data_Attributes | null>;
    /**
     * @return original return type: 'org.dcm4che3.data.Attributes'
     */
    readDatasetUntilPixelDataSync(): org_dcm4che3_data_Attributes | null;
    /**
     * @return original return type: 'int'
     */
    read(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    readSync(): number;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'int'
     */
    read(var0: Buffer | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'int'
     */
    readSync(var0: Buffer | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'int'
     */
    read(var0: Buffer | null): Promise<number>;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'int'
     */
    readSync(var0: Buffer | null): number;
    /**
     * @return original return type: 'int'
     */
    level(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    levelSync(): number;
    /**
     * @return original return type: 'byte[]'
     */
    getPreamble(): Promise<Buffer | null>;
    /**
     * @return original return type: 'byte[]'
     */
    getPreambleSync(): Buffer | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setConcatenateBulkDataFiles(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setConcatenateBulkDataFilesSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setURI(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setURISync(var0: string | null): void;
    /**
     * @return original return type: 'boolean'
     */
    isIncludeBulkDataURI(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isIncludeBulkDataURISync(): boolean;
    /**
     * @return original return type: 'void'
     */
    setSkipAllDicomInputHandler(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    setSkipAllDicomInputHandlerSync(): void;
    /**
     * @return original return type: 'boolean'
     */
    readItemHeader(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    readItemHeaderSync(): boolean;
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputStream'
     * @return original return type: 'void'
     */
    startDataset(var0: DicomInputStreamClass | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputStream'
     * @return original return type: 'void'
     */
    startDatasetSync(var0: DicomInputStreamClass | null): void;
    /**
     * @return original return type: 'void'
     */
    reset(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    resetSync(): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'byte[]'
     */
    readNBytes(var0: java_lang_Integer | number): Promise<Buffer | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'byte[]'
     */
    readNBytesSync(var0: java_lang_Integer | number): Buffer | null;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'int'
     */
    readNBytes(var0: Buffer | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'int'
     */
    readNBytesSync(var0: Buffer | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): number;
    /**
     * @return original return type: 'boolean'
     */
    isConcatenateBulkDataFiles(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isConcatenateBulkDataFilesSync(): boolean;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @param var1 original type: 'long'
     * @return original return type: 'void'
     */
    readItemValue(var0: org_dcm4che3_data_Attributes | null, var1: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @param var1 original type: 'long'
     * @return original return type: 'void'
     */
    readItemValueSync(var0: org_dcm4che3_data_Attributes | null, var1: java_lang_Long | bigint | number): void;
    /**
     * @return original return type: 'org.dcm4che3.data.VR'
     */
    vr(): Promise<org_dcm4che3_data_VR | null>;
    /**
     * @return original return type: 'org.dcm4che3.data.VR'
     */
    vrSync(): org_dcm4che3_data_VR | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getURI(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getURISync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setBulkDataFilePrefix(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setBulkDataFilePrefixSync(var0: string | null): void;
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputStream'
     * @return original return type: 'org.dcm4che3.data.BulkData'
     */
    createBulkData(var0: DicomInputStreamClass | null): Promise<org_dcm4che3_data_BulkData | null>;
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputStream'
     * @return original return type: 'org.dcm4che3.data.BulkData'
     */
    createBulkDataSync(var0: DicomInputStreamClass | null): org_dcm4che3_data_BulkData | null;
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
     * @return original return type: 'org.dcm4che3.data.Attributes'
     */
    readFileMetaInformation(): Promise<org_dcm4che3_data_Attributes | null>;
    /**
     * @return original return type: 'org.dcm4che3.data.Attributes'
     */
    readFileMetaInformationSync(): org_dcm4che3_data_Attributes | null;
    /**
     * @param var0 original type: 'org.dcm4che3.io.BulkDataDescriptor'
     * @return original return type: 'void'
     */
    setBulkDataDescriptor(var0: org_dcm4che3_io_BulkDataDescriptor | JavaInterfaceProxy<org_dcm4che3_io_BulkDataDescriptorInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.io.BulkDataDescriptor'
     * @return original return type: 'void'
     */
    setBulkDataDescriptorSync(var0: org_dcm4che3_io_BulkDataDescriptor | JavaInterfaceProxy<org_dcm4che3_io_BulkDataDescriptorInterface> | null): void;
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'org.dcm4che3.io.DicomInputStream'
     */
    static createWithLimitFromFileLength(var0: java_io_File | null): Promise<DicomInputStream | null>;
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'org.dcm4che3.io.DicomInputStream'
     */
    static createWithLimitFromFileLengthSync(var0: java_io_File | null): DicomInputStream | null;
    /**
     * @return original return type: 'org.dcm4che3.data.Attributes'
     */
    readCommand(): Promise<org_dcm4che3_data_Attributes | null>;
    /**
     * @return original return type: 'org.dcm4che3.data.Attributes'
     */
    readCommandSync(): org_dcm4che3_data_Attributes | null;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'void'
     */
    setFileMetaInformationGroupLength(var0: Buffer | null): Promise<void>;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'void'
     */
    setFileMetaInformationGroupLengthSync(var0: Buffer | null): void;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    skip(var0: java_lang_Long | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    skipSync(var0: java_lang_Long | bigint | number): number;
    /**
     * @return original return type: 'long'
     */
    unsignedLength(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    unsignedLengthSync(): number;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @return original return type: 'void'
     */
    readAllAttributes(var0: org_dcm4che3_data_Attributes | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.data.Attributes'
     * @return original return type: 'void'
     */
    readAllAttributesSync(var0: org_dcm4che3_data_Attributes | null): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setAllocateLimit(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setAllocateLimitSync(var0: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'void'
     */
    setBulkDataDirectory(var0: java_io_File | null): Promise<void>;
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'void'
     */
    setBulkDataDirectorySync(var0: java_io_File | null): void;
    /**
     * @param var0 original type: 'java.util.function.Predicate'
     * @return original return type: 'void'
     */
    readHeader(var0: java_util_function_Predicate | JavaInterfaceProxy<java_util_function_PredicateInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.function.Predicate'
     * @return original return type: 'void'
     */
    readHeaderSync(var0: java_util_function_Predicate | JavaInterfaceProxy<java_util_function_PredicateInterface> | null): void;
    /**
     * @return original return type: 'void'
     */
    readHeader(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    readHeaderSync(): void;
    /**
     * @param var0 original type: 'java.io.OutputStream'
     * @return original return type: 'long'
     */
    transferTo(var0: java_io_OutputStream | null): Promise<number>;
    /**
     * @param var0 original type: 'java.io.OutputStream'
     * @return original return type: 'long'
     */
    transferToSync(var0: java_io_OutputStream | null): number;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getAttributePath(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getAttributePathSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getBulkDataFileSuffix(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getBulkDataFileSuffixSync(): string | null;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'byte[]'
     */
    readAllBytes(): Promise<Buffer | null>;
    /**
     * @return original return type: 'byte[]'
     */
    readAllBytesSync(): Buffer | null;
    /**
     * @return original return type: 'void'
     */
    close(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    closeSync(): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setBulkDataFileSuffix(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setBulkDataFileSuffixSync(var0: string | null): void;
    /**
     * @return original return type: 'void'
     */
    skipSequence(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    skipSequenceSync(): void;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    skipNBytes(var0: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    skipNBytesSync(var0: java_lang_Long | bigint | number): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getBulkDataFilePrefix(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getBulkDataFilePrefixSync(): string | null;
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputStream'
     * @param var1 original type: 'org.dcm4che3.data.Attributes'
     * @return original return type: 'void'
     */
    readValue(var0: DicomInputStreamClass | null, var1: org_dcm4che3_data_Attributes | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputStream'
     * @param var1 original type: 'org.dcm4che3.data.Attributes'
     * @return original return type: 'void'
     */
    readValueSync(var0: DicomInputStreamClass | null, var1: org_dcm4che3_data_Attributes | null): void;
    /**
     * @return original return type: 'byte[]'
     */
    readValue(): Promise<Buffer | null>;
    /**
     * @return original return type: 'byte[]'
     */
    readValueSync(): Buffer | null;
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputStream'
     * @param var1 original type: 'org.dcm4che3.data.Sequence'
     * @return original return type: 'void'
     */
    readValue(var0: DicomInputStreamClass | null, var1: org_dcm4che3_data_Sequence | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputStream'
     * @param var1 original type: 'org.dcm4che3.data.Sequence'
     * @return original return type: 'void'
     */
    readValueSync(var0: DicomInputStreamClass | null, var1: org_dcm4che3_data_Sequence | null): void;
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputStream'
     * @param var1 original type: 'org.dcm4che3.data.Fragments'
     * @return original return type: 'void'
     */
    readValue(var0: DicomInputStreamClass | null, var1: org_dcm4che3_data_Fragments | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputStream'
     * @param var1 original type: 'org.dcm4che3.data.Fragments'
     * @return original return type: 'void'
     */
    readValueSync(var0: DicomInputStreamClass | null, var1: org_dcm4che3_data_Fragments | null): void;
    /**
     * @return original return type: 'org.dcm4che3.io.BulkDataDescriptor'
     */
    getBulkDataDescriptor(): Promise<org_dcm4che3_io_BulkDataDescriptor | null>;
    /**
     * @return original return type: 'org.dcm4che3.io.BulkDataDescriptor'
     */
    getBulkDataDescriptorSync(): org_dcm4che3_io_BulkDataDescriptor | null;
    /**
     * @param var0 original type: 'org.dcm4che3.io.BulkDataCreator'
     * @return original return type: 'void'
     */
    setBulkDataCreator(var0: org_dcm4che3_io_BulkDataCreator | JavaInterfaceProxy<org_dcm4che3_io_BulkDataCreatorInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.io.BulkDataCreator'
     * @return original return type: 'void'
     */
    setBulkDataCreatorSync(var0: org_dcm4che3_io_BulkDataCreator | JavaInterfaceProxy<org_dcm4che3_io_BulkDataCreatorInterface> | null): void;
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
    getAllocateLimit(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getAllocateLimitSync(): number;
    /**
     * @return original return type: 'void'
     */
    skipItem(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    skipItemSync(): void;
    /**
     * @return original return type: 'java.io.InputStream'
     */
    static nullInputStream(): Promise<java_io_InputStream | null>;
    /**
     * @return original return type: 'java.io.InputStream'
     */
    static nullInputStreamSync(): java_io_InputStream | null;
    /**
     * @return original return type: 'long'
     */
    getTagPosition(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    getTagPositionSync(): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.dcm4che3.data.Attributes'
     */
    readDataset(var0: java_lang_Integer | number): Promise<org_dcm4che3_data_Attributes | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.dcm4che3.data.Attributes'
     */
    readDatasetSync(var0: java_lang_Integer | number): org_dcm4che3_data_Attributes | null;
    /**
     * @return original return type: 'org.dcm4che3.data.Attributes'
     */
    readDataset(): Promise<org_dcm4che3_data_Attributes | null>;
    /**
     * @return original return type: 'org.dcm4che3.data.Attributes'
     */
    readDatasetSync(): org_dcm4che3_data_Attributes | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'org.dcm4che3.data.Attributes'
     */
    readDataset(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<org_dcm4che3_data_Attributes | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'org.dcm4che3.data.Attributes'
     */
    readDatasetSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): org_dcm4che3_data_Attributes | null;
    /**
     * @param var0 original type: 'java.util.function.Predicate'
     * @return original return type: 'org.dcm4che3.data.Attributes'
     */
    readDataset(var0: java_util_function_Predicate | JavaInterfaceProxy<java_util_function_PredicateInterface> | null): Promise<org_dcm4che3_data_Attributes | null>;
    /**
     * @param var0 original type: 'java.util.function.Predicate'
     * @return original return type: 'org.dcm4che3.data.Attributes'
     */
    readDatasetSync(var0: java_util_function_Predicate | JavaInterfaceProxy<java_util_function_PredicateInterface> | null): org_dcm4che3_data_Attributes | null;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.util.function.Predicate'
     * @return original return type: 'org.dcm4che3.data.Attributes'
     */
    readDataset(var0: java_lang_Long | bigint | number, var1: java_util_function_Predicate | JavaInterfaceProxy<java_util_function_PredicateInterface> | null): Promise<org_dcm4che3_data_Attributes | null>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.util.function.Predicate'
     * @return original return type: 'org.dcm4che3.data.Attributes'
     */
    readDatasetSync(var0: java_lang_Long | bigint | number, var1: java_util_function_Predicate | JavaInterfaceProxy<java_util_function_PredicateInterface> | null): org_dcm4che3_data_Attributes | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    skipFully(var0: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    skipFullySync(var0: java_lang_Long | bigint | number): void;
    /**
     * @param var0 original type: 'java.util.List'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    static toAttributePath(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var1: java_lang_Integer | number): Promise<string | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    static toAttributePathSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var1: java_lang_Integer | number): string | null;
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputHandler'
     * @return original return type: 'void'
     */
    setDicomInputHandler(var0: org_dcm4che3_io_DicomInputHandler | JavaInterfaceProxy<org_dcm4che3_io_DicomInputHandlerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'org.dcm4che3.io.DicomInputHandler'
     * @return original return type: 'void'
     */
    setDicomInputHandlerSync(var0: org_dcm4che3_io_DicomInputHandler | JavaInterfaceProxy<org_dcm4che3_io_DicomInputHandlerInterface> | null): void;
    /**
     * @return original return type: 'boolean'
     */
    explicitVR(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    explicitVRSync(): boolean;
    /**
     * @return original return type: 'long'
     */
    getPosition(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    getPositionSync(): number;
    /**
     * @return original return type: 'java.io.File'
     */
    getBulkDataDirectory(): Promise<java_io_File | null>;
    /**
     * @return original return type: 'java.io.File'
     */
    getBulkDataDirectorySync(): java_io_File | null;
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
     * @return original return type: 'org.dcm4che3.io.DicomInputStream$IncludeBulkData'
     */
    getIncludeBulkData(): Promise<org_dcm4che3_io_DicomInputStream$IncludeBulkData | null>;
    /**
     * @return original return type: 'org.dcm4che3.io.DicomInputStream$IncludeBulkData'
     */
    getIncludeBulkDataSync(): org_dcm4che3_io_DicomInputStream$IncludeBulkData | null;
    /**
     * @return original return type: 'boolean'
     */
    isExcludeBulkData(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isExcludeBulkDataSync(): boolean;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'long'
     * @return original return type: 'org.dcm4che3.io.DicomInputStream'
     */
    static createWithLimit(var0: java_io_InputStream | null, var1: java_lang_Long | bigint | number): Promise<DicomInputStream | null>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'long'
     * @return original return type: 'org.dcm4che3.io.DicomInputStream'
     */
    static createWithLimitSync(var0: java_io_InputStream | null, var1: java_lang_Long | bigint | number): DicomInputStream | null;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'long'
     * @return original return type: 'org.dcm4che3.io.DicomInputStream'
     */
    static createWithLimit(var0: java_io_InputStream | null, var1: string | null, var2: java_lang_Long | bigint | number): Promise<DicomInputStream | null>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'long'
     * @return original return type: 'org.dcm4che3.io.DicomInputStream'
     */
    static createWithLimitSync(var0: java_io_InputStream | null, var1: string | null, var2: java_lang_Long | bigint | number): DicomInputStream | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    mark(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    markSync(var0: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.io.File'
     */
    constructor(var0: java_io_File | null);
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'org.dcm4che3.io.DicomInputStream'
     */
    static newInstanceAsync(var0: java_io_File | null): Promise<DicomInputStream>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'int'
     */
    constructor(var0: java_io_InputStream | null, var1: java_lang_Integer | number);
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'int'
     * @return original return type: 'org.dcm4che3.io.DicomInputStream'
     */
    static newInstanceAsync(var0: java_io_InputStream | null, var1: java_lang_Integer | number): Promise<DicomInputStream>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     */
    constructor(var0: java_io_InputStream | null);
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @return original return type: 'org.dcm4che3.io.DicomInputStream'
     */
    static newInstanceAsync(var0: java_io_InputStream | null): Promise<DicomInputStream>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     */
    constructor(var0: java_io_InputStream | null, var1: string | null);
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.dcm4che3.io.DicomInputStream'
     */
    static newInstanceAsync(var0: java_io_InputStream | null, var1: string | null): Promise<DicomInputStream>;
}
declare const DicomInputStream_base: typeof DicomInputStreamClass;
/**
 * Class org.dcm4che3.io.DicomInputStream.
 *
 * This actually imports the java class for further use.
 * The class {@link DicomInputStreamClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DicomInputStream extends DicomInputStream_base {
}
export default DicomInputStream;
//# sourceMappingURL=DicomInputStream.d.ts.map