const { raccoonDcm4cheJavaLoader } = require("../src/index");
raccoonDcm4cheJavaLoader();

const { importClass } = require("java-bridge");
const { DecompressFramesOutput } = require("../src/wrapper/org/github/chinlinlee/dcm777/img/DecompressFramesOutput");

const { File } = require("../src/wrapper/java/io/File");
const { default: DicomInputStream } = require("../src/wrapper/org/dcm4che3/io/DicomInputStream");
const ByteArrayOutputStream = importClass("java.io.ByteArrayOutputStream");

const path = require("path");

(async () => {
    let dis = new DicomInputStream(new File(
        path.resolve(__dirname, "./TCGA-AF-2687-01Z-00-DX1_im_2.dcm")
    ));

    let decompressor = new DecompressFramesOutput(dis, 0);

    let baos = new ByteArrayOutputStream();

    await decompressor.write(baos);

    /** @type { Buffer } */
    let bytes = await baos.toByteArray();

    await baos.close();
    await dis.close();
    await decompressor.close();

    console.log(bytes.length);
})();