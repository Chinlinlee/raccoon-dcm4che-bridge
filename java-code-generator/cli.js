/**
 * You can use this cli to generate java-bridge definition of class
 */

const { program } = require('commander');

program
  .option('-cn, --classname [string...]', "class name of java class");

program.parse();

const options = program.opts();

const path = require("path");
const glob = require("glob");
const { appendClasspath, ensureJvm } = require("java-bridge");
const { TypescriptDefinitionGenerator } = require("java-ts-definition-generator");
const { compileTypeScript } = require("./compile");

let depJarFiles = glob.sync("**/*.jar", {
    root: path.join(__dirname, "./java-jars")
});

ensureJvm();
for (let i = 0; i < depJarFiles.length; i++) {
    appendClasspath(depJarFiles);
}

(async () => {

    const generator = new TypescriptDefinitionGenerator(options.classname);
    // Generate definitions for the provided modules
    await generator.createModuleDeclarations();

    // Save the definitions to a directory
    await generator.save(path.join(__dirname, "./java-wrapper"));
    await compileTypeScript();
})();