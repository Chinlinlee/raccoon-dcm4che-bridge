import type { File } from "./wrapper/java/io/File";
import type { DicomEncodingOptions } from "./wrapper/org/dcm4che3/io/DicomEncodingOptions";

/**
 * DICOM file format conversion utility class
 * Used to change DICOM file Transfer Syntax
 * @see {@link https://github.com/dcm4che/dcm4che/blob/master/dcm4che-tool/dcm4che-tool-dcm2dcm/src/main/java/org/dcm4che3/tool/dcm2dcm/Dcm2Dcm.java}
 * @example
 * let src = new File("src.dcm");
 * let dest = new File("dest.dcm");
 * let localDcm2Dcm = new LocalDcm2Dcm();
 * localDcm2Dcm.setTransferSyntax(UID.JPEGBaseline8Bit);
 * await localDcm2Dcm.transcode(src, dest);
 */
export class LocalDcm2Dcm {
    retainFileMetaInfo: boolean;
    maxThreads: number;
    encOpts: DicomEncodingOptions;

    constructor();

    setTransferSyntax(uid: string): void;

    setMaxThreads(maxThreads: number): void;

    transcode(src: File, dest: File): Promise<void>;
}