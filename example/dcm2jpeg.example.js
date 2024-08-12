const { raccoonDcm4cheJavaLoader } = require("../src/index");
raccoonDcm4cheJavaLoader();

const path = require("path");
const { Dcm2JpgExecutor } = require("../src/wrapper/org/github/chinlinlee/dcm2jpg/Dcm2JpgExecutor");
const { Dcm2JpgExecutor$Dcm2JpgOptions } = require("../src/wrapper/org/github/chinlinlee/dcm2jpg/Dcm2JpgExecutor$Dcm2JpgOptions");
const DICOM_FILE = path.resolve(__dirname, "./TCGA-AF-2687-01Z-00-DX1_im_2.dcm");

(async () => {
    let opt = new Dcm2JpgExecutor$Dcm2JpgOptions();

    opt.frameNumber = 1;
    opt.format = "jpeg";

    opt.jpgQuality = 0.8;

    let status = await Dcm2JpgExecutor.convertDcmToJpgFromFilename(
        DICOM_FILE,
        DICOM_FILE + ".jpg",
        opt
    );

    console.log(status.message); 
})();