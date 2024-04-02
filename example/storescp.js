const path = require("path");

const { raccoonDcm4cheJavaLoader } = require("../src/index");
raccoonDcm4cheJavaLoader();
const { EnumSet } = require("../src/wrapper/java/util/EnumSet");
const { ApplicationEntity } = require("../src/wrapper/org/dcm4che3/net/ApplicationEntity");
const { Connection } = require("../src/wrapper/org/dcm4che3/net/Connection");
const { Device } = require("../src/wrapper/org/dcm4che3/net/Device");
const { TransferCapability } = require("../src/wrapper/org/dcm4che3/net/TransferCapability");
const { TransferCapability$Role } = require("../src/wrapper/org/dcm4che3/net/TransferCapability$Role");
const { DicomServiceRegistry } = require("../src/wrapper/org/dcm4che3/net/service/DicomServiceRegistry");
const { QueryOption } = require("../src/wrapper/org/dcm4che3/net/QueryOption");
const { importClassAsync, newProxy } = require("java-bridge");
const { Association } = require("../src/wrapper/org/dcm4che3/net/Association");
const { SimpleCStoreSCP } = require("../src/wrapper/org/github/chinlinlee/dcm777/net/SimpleCStoreSCP");
const { createCStoreSCPInjectProxy } = require("../src/wrapper/org/github/chinlinlee/dcm777/net/CStoreSCPInject");
const { File } = require("../src/wrapper/java/io/File");

const proxy = createCStoreSCPInjectProxy({
    postDimseRQ: async (association, presentationContext, dimse, requestAttr, data, responseAttr) => {
        await association.tryWriteDimseRSP(presentationContext, responseAttr);
    },
    /**
     * 
     * @param {Association} association 
     * @param {PresentationContext} presentationContext 
     * @param {Attributes} requestAttr 
     * @param {*} data 
     * @param {*} responseAttr 
     * @param {*} file 
     */
    postStore: async (association, presentationContext, requestAttr, data, responseAttr, file) => {
        let absPath = await file.getAbsolutePath();

        /** @type {formidable.File} */
        let fileObj = {
            filepath: path.resolve(absPath),
            originalFilename: path.basename(absPath)
        };
        console.log(fileObj);
    }
}, {
    keepAsDaemon: true
});

class StoreScp {
    device = new Device("storescp");
    applicationEntity = new ApplicationEntity("*");
    connection = new Connection();

    constructor() {
        this.device.addConnectionSync(this.connection);
        this.device.addApplicationEntitySync(this.applicationEntity);
        this.applicationEntity.setAssociationAcceptorSync(true);
        this.applicationEntity.addConnectionSync(this.connection);
        this.createDicomServiceRegistry().then(reg => {
            this.device.setDimseRQHandlerSync(reg);
        });
    }

    async createDicomServiceRegistry() {
        let dicomServiceRegistry = new DicomServiceRegistry();

        await dicomServiceRegistry.addDicomService(
            await this.getStoreScp()
        );

        return dicomServiceRegistry;
    }

    async start() {
        await this.configureConnection();
        await this.configureBindServer();
        await this.configureTransferCapability();

        const Executors = await importClassAsync("java.util.concurrent.Executors");

        let executorService = await Executors.newCachedThreadPool();
        let scheduledExecutorService = await Executors.newSingleThreadScheduledExecutor();
        await this.device.setScheduledExecutor(scheduledExecutorService);
        await this.device.setExecutor(executorService);
        await this.device.bindConnections();
    }

    async configureConnection() {
        await this.connection.setReceivePDULength(Connection.DEF_MAX_PDU_LENGTH);
        await this.connection.setSendPDULength(Connection.DEF_MAX_PDU_LENGTH);

        // asynchronously
        await this.connection.setMaxOpsInvoked(0);
        await this.connection.setMaxOpsPerformed(0)

        await this.connection.setPackPDV(true);
        this.connection.setConnectTimeoutSync(Connection.NO_TIMEOUT);
        this.connection.setRequestTimeoutSync(Connection.NO_TIMEOUT);
        this.connection.setAcceptTimeoutSync(Connection.NO_TIMEOUT);
        this.connection.setReleaseTimeoutSync(Connection.NO_TIMEOUT);
        this.connection.setSendTimeoutSync(Connection.NO_TIMEOUT);
        this.connection.setStoreTimeoutSync(Connection.NO_TIMEOUT);
        this.connection.setResponseTimeoutSync(Connection.NO_TIMEOUT);

        await this.connection.setRetrieveTimeout(Connection.NO_TIMEOUT);
        await this.connection.setRetrieveTimeoutTotal(false);

        await this.connection.setIdleTimeout(Connection.NO_TIMEOUT);

        await this.connection.setSocketCloseDelay(Connection.DEF_SOCKETDELAY);
        await this.connection.setSendBufferSize(Connection.DEF_BUFFERSIZE);
        await this.connection.setReceiveBufferSize(Connection.DEF_BUFFERSIZE);
        await this.connection.setTcpNoDelay(true);
    }

    async configureBindServer() {
        await this.connection.setPort(11112);
        await this.connection.setHostname("0.0.0.0");
        await this.applicationEntity.setAETitle("MY_STORESCP");
    }

    async configureTransferCapability() {
        let tc = new TransferCapability(
            null,
            "*",
            TransferCapability$Role.SCP,
            ["*"]
        );

        await tc.setQueryOptions(
            await EnumSet.noneOf(QueryOption.class)
        );
        await this.applicationEntity.addTransferCapability(tc);
    }

    async getStoreScp() {
        let storageDir = new File(
            path.join(__dirname, "./temp")
        );

        return new SimpleCStoreSCP(
            proxy,
            storageDir,
            ["*"]
        );
    }
}

(async () => {
    try {
        let storeScp = new StoreScp();
        await storeScp.start();
        console.log("start");
    } catch (e) {
        console.error(e);
    }
})();