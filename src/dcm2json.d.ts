/**
 * Utility class for converting DICOM files to JSON format
 * @example
 * const { JDcm2Json } = require("raccoon-dcm4che-wrappers/src/dcm2json");
 * JDcm2Json.get("src.dcm")
 *          .then(json => console.log(json));
 */
export class JDcm2Json {
    /**
     * Convert a DICOM file to JSON format
     * @param filename - Path to DICOM file
     */
    static async get(filename: string): Promise<Record<string, any>>;
}