const java = require('java-bridge');
const glob = require("glob");
const path = require("path");

/**
 * 
 * @param {import("java-bridge").JVMOptions} jvmOptions 
 * @returns 
 */
module.exports.raccoonDcm4cheJavaLoader = function(jvmOptions={}) {
    let imageApiOpts = ["--add-opens=java.desktop/javax.imageio.stream=ALL-UNNAMED", "--add-opens=java.base/java.io=ALL-UNNAMED"];
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
    
    return java;
}

