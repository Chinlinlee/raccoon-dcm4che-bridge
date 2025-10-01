import type { ImageTranscodeParam } from "./wrapper/org/dcm4che3/img/ImageTranscodeParam";

/**
 * Utility class for converting DICOM images to standard image formats
 * Implemented based on weasis-dicom-tools
 * @author Chinlinlee
 * @see {@link https://github.com/nroduit/weasis-dicom-tools/blob/master/weasis-dicom-tools/src/main/java/org/dcm4che3/img/Transcoder.java#L94}
 */
export class Dcm2imageWrapper {
    /**
     * Convert DICOM file to image
     * @param src - Source DICOM file path
     * @param dest - Destination image file path
     * @param params - ImageTranscodeParam
     * @param frameNumber - Frame number (default: 1)
     */
    static async dcm2Image(
        src: string,
        dest: string,
        params: ImageTranscodeParam,
        frameNumber?: number
    ): Promise<string>;
}