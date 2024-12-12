const path = require('path');

const { raccoonDcm4cheJavaLoader } = require("../src/index");
raccoonDcm4cheJavaLoader();
const { ImageTranscodeParam } = require('../src/wrapper/org/dcm4che3/img/ImageTranscodeParam');
const { Transcoder$Format } = require('../src/wrapper/org/dcm4che3/img/Transcoder$Format');
const { Dcm2imageWrapper } = require('../src/dcm2img');

(async () => {
    let imageTranscodeParams = new ImageTranscodeParam(Transcoder$Format.JP2);

    await Dcm2imageWrapper.dcm2Image(
        path.resolve(__dirname, './TCGA-AF-2687-01Z-00-DX1_im_2.dcm'),
        path.resolve(__dirname, `./TCGA-AF-2687-01Z-00-DX1_im_2.jp2`),
        imageTranscodeParams,
        1
    );
})();