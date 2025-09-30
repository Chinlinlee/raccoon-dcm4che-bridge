const java = require('java-bridge');
const glob = require("glob");
const path = require("path");

let jvmInitialized = false;
let javaInstance = null;


/**
 * 
 * @param {import("java-bridge").JVMOptions} jvmOptions 
 * @returns 
 */
module.exports.raccoonDcm4cheJavaLoader = function(jvmOptions={}) {
    if (jvmInitialized) {
        return javaInstance;
    }

    let imageApiOpts = ["--add-opens=java.desktop/javax.imageio.stream=ALL-UNNAMED", "--add-opens=java.base/java.io=ALL-UNNAMED"];

    try {
        java.ensureJvm({
            ...jvmOptions,
            opts: Array.isArray(jvmOptions.opts) ? [
                ...jvmOptions.opts, ...imageApiOpts
            ]: imageApiOpts
        });
    
        let jarFiles = glob.sync("**/*.jar", {
            cwd: path.join(__dirname, "./javaNode"),
            absolute: true
        });
        
        java.appendClasspath(jarFiles);

        javaInstance = java;
        jvmInitialized = true;
        
        return java;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports.isJvmInitialized = function () {
    return jvmInitialized;
};
module.exports.resetJvmState = function() {
    jvmInitialized = false;
    javaInstance = null;
}