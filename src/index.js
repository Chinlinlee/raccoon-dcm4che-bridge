const java = require('java-bridge');
const glob = require("glob");
const path = require("path");

/**
 * 
 * @param {import("java-bridge").JVMOptions} jvmOptions 
 * @returns 
 */
module.exports.raccoonDcm4cheJavaLoader = function(jvmOptions={}) {
    java.ensureJvm(jvmOptions);

    let jarFiles = glob.sync("**/*.jar", {
        cwd: path.join(__dirname, "./javaNode"),
        absolute: true
    });
    
    java.appendClasspath(jarFiles);
    
    return java;
}

