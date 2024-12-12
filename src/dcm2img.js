const { Paths } = require('./wrapper/java/nio/file/Paths');
const { Transcoder$Format } = require('./wrapper/org/dcm4che3/img/Transcoder$Format');
const { DicomImageReaderSpi } = require('./wrapper/org/dcm4che3/img/DicomImageReaderSpi');
const { DicomImageReader } = require('./wrapper/org/dcm4che3/img/DicomImageReader');
const { DicomFileInputStream } = require('./wrapper/org/dcm4che3/img/stream/DicomFileInputStream');
const { ImageRendering } = require('./wrapper/org/dcm4che3/img/ImageRendering');
const { FileUtil } = require('./wrapper/org/weasis/core/util/FileUtil');
const { ImageProcessor } = require('./wrapper/org/weasis/opencv/op/ImageProcessor');
const { MatOfInt } = require('./wrapper/org/opencv/core/MatOfInt');
const { CvType } = require('./wrapper/org/opencv/core/CvType');
const { Imgcodecs } = require('./wrapper/org/opencv/imgcodecs/Imgcodecs');

/**
 * @author Chinlinlee
 * Implement nodejs dcm2image wrapper from [weasis-dicom-tools](https://github.com/nroduit/weasis-dicom-tools/blob/master/weasis-dicom-tools/src/main/java/org/dcm4che3/img/Transcoder.java#L94)
 */
class Dcm2imageWrapper {
    /**
     * @param {string} src
     * @param {string} dest
     * @param {import('./wrapper/org/dcm4che3/img/ImageTranscodeParam').ImageTranscodeParam} params
     * @param {number} frameNumber
     */
    static async dcm2Image(src, dest, params, frameNumber = 1) {
        let format = await params.getFormat();
        let reader = new DicomImageReader(new DicomImageReaderSpi());
        let srcPath = await Paths.get(src, []);
        let destPath = await Paths.get(dest, []);

        let inputStream;
        try {
            inputStream = new DicomFileInputStream(srcPath);
            let map = await format.equals(Transcoder$Format.JPEG) ? new MatOfInt([Imgcodecs.IMWRITE_JPEG_QUALITY, await this.#getCompressionRatio(params)]) : null;

            await reader.setInput(inputStream);

            let img = await reader.getPlanarImage(frameNumber - 1, await params.getReadParam());
            let rawImage = await this.#isPreserveRawImage(params, format, await img.type());
            if (rawImage) {
                img = await ImageRendering.getRawRenderedImage(
                    img, await reader.getImageDescriptor(), await params.getReadParam());
            } else {
                img =
                    await ImageRendering.getDefaultRenderedImage(
                        img, await reader.getImageDescriptor(), await params.getReadParam(), frameNumber - 1);
            }
            let outPath = await this.#writeImage(img, destPath, format, map);

            return outPath.toString();
        } catch (e) {
            throw e;
        } finally {
            await reader.dispose();
        }
    }

    /**
     * 
     * @param {import('./wrapper/org/dcm4che3/img/ImageTranscodeParam').ImageTranscodeParam} params 
     */
    static async #getCompressionRatio(params) {
        if (!params) {
            return 80;
        }

        return await (await params.getJpegCompressionQuality()).orElse(80);
    }

    /**
     * 
     * @param {import('./wrapper/org/dcm4che3/img/ImageTranscodeParam').ImageTranscodeParam} params 
     * @param {Transcoder$Format} format 
     * @param {int} cvType 
     * @returns 
     */
    static async #isPreserveRawImage(params, format, cvType) {
        if (params == null) {
            return false;
        }
        let value = await (await params.isPreserveRawImage()).orElse(false);
        if (value) {
            if (format == Transcoder$Format.HDR || cvType == CvType.CV_8U) {
                return true; // Convert all values in double so do not apply W/L
            } else if (cvType == CvType.CV_16U) {
                return format.support16U;
            } else if (cvType == CvType.CV_16S) {
                return format.support16S;
            } else if (cvType == CvType.CV_32F) {
                return format.support32F;
            } else if (cvType == CvType.CV_64F) {
                return format.support64F;
            }
        }
        return value;
    }

    /**
     * 
     * @param {import('./wrapper/org/weasis/opencv/data/PlanarImage')} img 
     * @param {import('./wrapper/java/nio/file/Path')} dest 
     * @param {string} ext 
     * @param {MatOfInt} map 
     * @returns 
     */
    static async #writeImage(img, dest, ext, map) {
        if (map === null) {
            if (!await ImageProcessor.writeImage(await img.toMat(), await dest.toFile())) {
                console.error(`Cannot Transform to ${ext} ${img}`);
                await FileUtil.delete(dest);
            }
        } else {
            if (!await ImageProcessor.writeImage(await img.toMat(), await dest.toFile(), map)) {
                console.error(`Cannot Transform to ${ext} ${img}`);
                await FileUtil.delete(dest);
            }
        }
        return dest;
    }
}

module.exports = {
    Dcm2imageWrapper
};