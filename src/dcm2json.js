const { importClassAsync } = require("java-bridge");
const { JSONWriter } = require("./wrapper/org/dcm4che3/json/JSONWriter");
const { DicomInputStream } = require("./wrapper/org/dcm4che3/io/DicomInputStream");
const { File } = require("./wrapper/java/io/File");
const { Json } = require("./wrapper/javax/json/Json");
const { Common } = require("./wrapper/org/github/chinlinlee/dcm777/common/Common");
const { DicomInputStream$IncludeBulkData } = require("./wrapper/org/dcm4che3/io/DicomInputStream$IncludeBulkData");
const { BasicBulkDataDescriptor } = require("./wrapper/org/dcm4che3/io/BasicBulkDataDescriptor");

/**
 * @description Convert DICOM file to JSON
 * @example
 * const { JDcm2Json } = require("raccoon-dcm4che-wrappers/src/dcm2json");
 * JDcm2Json.get("src.dcm")
 *          .then(json => console.log(json));
 */
class JDcm2Json {

    /**
     * 
     * @param {string} filename 
     */
    static async get(filename) {
        let jFile = new File(filename);
        let dicomInputStream = new DicomInputStream(jFile);
        await dicomInputStream.setIncludeBulkData(DicomInputStream$IncludeBulkData.NO);
        await dicomInputStream.setBulkDataDescriptor(new BasicBulkDataDescriptor());

        let JByteArrayOutputStream = await importClassAsync("java.io.ByteArrayOutputStream");
        let byteArrayOutputStream = new JByteArrayOutputStream();

        let jsonGeneratorFactory = await Json.createGeneratorFactory(
            await Common.jsonGeneratorFactoryConfig(false)
        );
        let jsonGenerator = await jsonGeneratorFactory.createGenerator(byteArrayOutputStream);
        let jsonWriter = new JSONWriter(jsonGenerator);

        await dicomInputStream.setDicomInputHandler(jsonWriter);
        await dicomInputStream.readDataset();
        await jsonGenerator.flush();

        let jsonStr = await byteArrayOutputStream.toString("UTF-8");
        await dicomInputStream.close();
        return JSON.parse(jsonStr);
    }
}

module.exports.JDcm2Json = JDcm2Json;