const { resolve } = require("path");
const fs = require("fs");

const { raccoonDcm4cheJavaLoader } = require("../src/index");
raccoonDcm4cheJavaLoader();
const { JDcm2Json } = require("../src/dcm2json");

(async () => {
    const filename = resolve(__dirname, "./TCGA-AF-2687-01Z-00-DX1_im_2.dcm");
    const json = await JDcm2Json.get(filename);
    fs.writeFileSync("output-json.json", JSON.stringify(json));
})();