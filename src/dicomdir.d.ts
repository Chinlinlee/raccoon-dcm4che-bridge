import type { RecordFactory } from "./wrapper/org/dcm4che3/media/RecordFactory";
import type { DicomDirReader } from "./wrapper/org/dcm4che3/media/DicomDirReader";
import type { DicomDirWriter } from "./wrapper/org/dcm4che3/media/DicomDirWriter";
import type { File } from "./wrapper/java/io/File";
import type { Attributes } from "./wrapper/org/dcm4che3/data/Attributes";

/**
 * Utility class for creating DICOMDIR files and indexing DICOM files
 * @example
 * let dicomDir = new DicomDir("./DICOMDIR", "./file/1.dcm", "./file/2.dcm");
 * await dicomDir.exec();
 */
export class DicomDir {
    static checkDuplicate: boolean;

    constructor(dicomDirDest: string, ...dicomFiles: string[]);

    set recFact(value: RecordFactory): void;
    get recFact(): RecordFactory;

    exec(): Promise<void>;

    initializeRecords(): Promise<void>;

    create(): Promise<void>;

    /**
     * 
     * @param dataSet - Dcm4che DICOM dataset
     * @param num - Record number
     * @param fileIDs - List of file IDs
     * @param prompt 
     * @param iuid - SOP Instance UID
     * @param fmi - File meta information
     */
    addRecords(
        dataSet: Attributes,
        num: number,
        fileIDs: string[],
        prompt: string,
        iuid: string,
        fmi: Attributes
    ): Promise<number>;

    /**
     * Add file reference to DICOMDIR
     * @param jFile - Java File object
     */
    addReferenceTo(jFile: File): Promise<number>;
}