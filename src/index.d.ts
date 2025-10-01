import type { JVMOptions } from "java-bridge";
import type * as java from "java-bridge";

/**
 * 
 * @param jvmOptions - JVM options, please refer to [JVMOptions](https://markusjx.github.io/node-java-bridge/interfaces/JVMOptions.html)
 */
export function raccoonDcm4cheJavaLoader(jvmOptions?: JVMOptions): typeof java;
export function isJvmInitialized(): boolean;

/**
 * Reset the JVM state
 * only use for testing
 */
export function resetJvmState(): void;