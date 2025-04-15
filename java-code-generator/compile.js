#!/usr/bin/env node

const { exec } = require("child_process");
const path = require("path");
const fs = require("fs/promises"); // Using promises version of fs
const { promisify } = require("util");
const Diff = require("diff");

// Promisify the exec function for easier async/await usage
const execPromise = promisify(exec);

// --- Configuration ---
const sourceDir = path.join(__dirname, "java-wrapper"); // Directory with generated .ts files
const outputDir = path.join(__dirname, "wrapper");     // Directory for compiled .js output
const finalDestDir = path.join(__dirname, "../src/wrapper");
// --- End Configuration ---

/**
 * Recursively synchronizes the contents of a source directory to a destination directory.
 * Copies new/changed files, skips identical files, and removes files/dirs in destination
 * that are no longer in the source.
 * @param {string} source The source directory path.
 * @param {string} destination The destination directory path.
 */
async function syncDirectories(source, destination) {
    try {
        const [sourceEntries, destEntries] = await Promise.all([
            fs.readdir(source, { withFileTypes: true }),
            fs.readdir(destination, { withFileTypes: true }).catch(() => []) // Handle if dest doesn't exist initially
        ]);

        const sourceEntryMap = new Map(sourceEntries.map(entry => [entry.name, entry]));
        const destEntryMap = new Map(destEntries.map(entry => [entry.name, entry]));

        // Process entries in the source directory
        for (const sourceEntry of sourceEntries) {
            const sourcePath = path.join(source, sourceEntry.name);
            const destPath = path.join(destination, sourceEntry.name);

            if (sourceEntry.isDirectory()) {
                // Recursively sync subdirectories
                await syncDirectories(sourcePath, destPath);
            } else if (sourceEntry.isFile()) {
                const destEntry = destEntryMap.get(sourceEntry.name);
                if (destEntry && destEntry.isDirectory()) {
                    // Name collision: source is file, destination is directory. Remove dest dir.
                    console.log(`Removing directory to replace with file: ${path.relative(__dirname, destPath)}`);
                    await fs.rm(destPath, { recursive: true, force: true });
                }
                console.log(`Copying new file: ${path.relative(__dirname, destPath)}`);

                await fs.mkdir(path.dirname(destPath), { recursive: true });
                await fs.copyFile(sourcePath, destPath);

            }
            // Ignore other entry types like symbolic links for simplicity here
        }

        // Process entries in the destination directory that are NOT in the source
        // for (const destEntry of destEntries) {
        //     if (!sourceEntryMap.has(destEntry.name)) {
        //         const destPath = path.join(destination, destEntry.name);
        //         console.log(`Removing obsolete entry: ${path.relative(__dirname, destPath)}`);
        //         await fs.rm(destPath, { recursive: true, force: true });
        //     }
        // }

    } catch (error) {
        console.error(`Error synchronizing directory ${source} to ${destination}: ${error.message}`);
        process.exit(1);
    }
}


/**
 * Runs the TypeScript compiler (tsc) to compile the source directory.
 */
async function compileTypeScript() {
    console.log(`Source directory: ${sourceDir}`);
    console.log(`Output directory: ${outputDir}`);

    // 1. Clean the output directory (optional but recommended)
    try {
        console.log(`Cleaning output directory: ${outputDir}...`);
        await fs.rm(outputDir, { recursive: true, force: true });
        console.log("Output directory cleaned.");
    } catch (error) {
        // Ignore error if directory doesn't exist
        if (error.code !== 'ENOENT') {
            console.error(`Error cleaning output directory: ${error.message}`);
            process.exit(1);
        }
    }

    // 2. Ensure the output directory exists
    try {
        await fs.mkdir(outputDir, { recursive: true });
        console.log(`Ensured output directory exists: ${outputDir}`);
    } catch (error) {
        console.error(`Error creating output directory: ${error.message}`);
        process.exit(1);
    }

    // 3. Construct the tsc command
    // Using npx ensures we use the locally installed tsc if available, or falls back to global.

    const tscCommand = `npx tsc --project ${__dirname}`;

    console.log(`Executing: ${tscCommand}`);

    // 4. Execute the tsc command
    try {
        const { stdout, stderr } = await execPromise(tscCommand, { cwd: __dirname }); // Run command from the script's directory

        if (stderr) {
            // tsc might output non-error info to stderr, check if it looks like an error
            console.warn("TypeScript compiler output (stderr):\n", stderr);
        }
        if (stdout) {
            console.log("TypeScript compiler output (stdout):\n", stdout);
        }
        console.log("TypeScript compilation successful!");

    } catch (error) {
        console.error("TypeScript compilation failed.");
        // The error object from execPromise often contains stdout and stderr
        if (error.stderr) {
            console.error("Error details (stderr):\n", error.stderr);
        }
        if (error.stdout) {
            console.error("Error details (stdout):\n", error.stdout); // Log stdout too, might have useful info
        }
        // Log the full error if the above wasn't helpful
        if (!error.stderr && !error.stdout) {
            console.error("Full error object:", error);
        }
        process.exit(1); // Exit with a non-zero code to indicate failure
    }

    // 5. delete ts files
    await fs.rm(sourceDir, { recursive: true, force: true });

    // 6. Synchronize compiled files to final destination
    console.log(`Synchronizing ${outputDir} to ${finalDestDir}...`);
    await syncDirectories(outputDir, finalDestDir);
    console.log("Synchronization complete.");


    // Step 7: Clean up intermediate directory
    console.log(`Cleaning up intermediate directory: ${outputDir}...`);
    try {
        await fs.rm(outputDir, { recursive: true, force: true });
        console.log("Intermediate directory cleaned up.");
    } catch (error) {
        console.warn(`Warning: Could not clean up intermediate directory ${outputDir}: ${error.message}`);
    }

    console.log("Script finished successfully.");
}

module.exports = {
    compileTypeScript
};