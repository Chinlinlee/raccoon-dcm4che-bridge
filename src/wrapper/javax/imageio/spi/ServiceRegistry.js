"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRegistry = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Class javax.imageio.spi.ServiceRegistry.
 *
 * This actually imports the java class for further use.
 * The class {@link ServiceRegistryClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class ServiceRegistry extends (0, java_bridge_1.importClass)('javax.imageio.spi.ServiceRegistry') {
}
exports.ServiceRegistry = ServiceRegistry;
exports.default = ServiceRegistry;
