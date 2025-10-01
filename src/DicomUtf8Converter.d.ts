import type { Attributes } from "./wrapper/org/dcm4che3/data/Attributes";

export class DicomUtf8Converter {
    /**
     * 
     * @param filename - Input DICOM file path
     * @param outputFilename - Output DICOM file path (optional, defaults to overwriting original file)
     */
    constructor(
        filename: string,
        outputFilename?: string
    );
    
    /**
     * Execute UTF-8 encoding conversion
     */
    convert(): Promise<void>;
}