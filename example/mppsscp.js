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
const { Association } = require("../src/wrapper/org/dcm4che3/net/Association");
const { SimpleCStoreSCP } = require("../src/wrapper/org/github/chinlinlee/dcm777/net/SimpleCStoreSCP");
const { createCStoreSCPInjectProxy } = require("../src/wrapper/org/github/chinlinlee/dcm777/net/CStoreSCPInject");
const { File } = require("../src/wrapper/java/io/File");
const { SimpleMPPSScp } = require("../src/wrapper/org/github/chinlinlee/dcm777/net/SimpleMPPSScp");
const { createMPPSScpInjectProxy } = require("../src/wrapper/org/github/chinlinlee/dcm777/net/MPPSScpInject");
const { IOD } = require("../src/wrapper/org/dcm4che3/data/IOD");
const { Commands } = require("../src/wrapper/org/dcm4che3/net/Commands");
const { Status } = require("../src/wrapper/org/dcm4che3/net/Status");
const { Tag } = require("../src/wrapper/org/dcm4che3/data/Tag");
const { UID } = require("../src/wrapper/org/dcm4che3/data/UID");
const { default: DicomOutputStream } = require("../src/wrapper/org/dcm4che3/io/DicomOutputStream");
const { default: Attributes } = require("../src/wrapper/org/dcm4che3/data/Attributes");
const { SafeClose } = require("../src/wrapper/org/dcm4che3/util/SafeClose");
const { importClassAsync } = require("java-bridge");
const { default: DicomInputStream } = require("../src/wrapper/org/dcm4che3/io/DicomInputStream");
const { default: VR } = require("../src/wrapper/org/dcm4che3/data/VR");

class MPPSScp {
    device = new Device("mppsscp");
    applicationEntity = new ApplicationEntity("*");
    connection = new Connection();
    static mppsScpProxy;
    static nCreateIOD;
    static nSetIOD;

    constructor() {
        this.device.addConnectionSync(this.connection);
        this.device.addApplicationEntitySync(this.applicationEntity);
        this.applicationEntity.setAssociationAcceptorSync(true);
        this.applicationEntity.addConnectionSync(this.connection);
        this.createDicomServiceRegistry().then(reg => {
            this.device.setDimseRQHandlerSync(reg);
        })
    }

    async createDicomServiceRegistry() {
        let dicomServiceRegistry = new DicomServiceRegistry();

        await dicomServiceRegistry.addDicomService(
            await this.getMPPSScp()
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
        await this.connection.setPort(104);
        await this.connection.setHostname("0.0.0.0");
        await this.applicationEntity.setAETitle("mppsscp");
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

    async getMPPSScp() {
        return new SimpleMPPSScp(MPPSScp.getProxy());
    }

    static getProxy() {
        if (MPPSScp.mppsScpProxy) {
            return MPPSScp.mppsScpProxy;
        }

        const mppsScpProxy = createMPPSScpInjectProxy({
            async onNCreateRQ(association, presentationContext, requestCmd, requestAttr) {
                let result = await requestAttr.validate(MPPSScp.getNCreateIOD());
                if (!await result.isValid()) {
                    let response = await Commands.mkNCreateRSP(requestCmd, Status.InvalidAttributeValue);
                    await association.tryWriteDimseRSP(presentationContext, response);
                    console.error("validation result error comment", await result.getErrorComment());
                    console.error("tags of invalid attribute values", await result.tagsOfInvalidAttributeValues());
                }

                let sopClassUID = await requestCmd.getString(Tag.AffectedSOPClassUID);
                let sopInstanceUID = await requestCmd.getString(Tag.AffectedSOPInstanceUID);

                let file = new File(
                    path.join(__dirname, sopInstanceUID)
                );

                let outStream;
                try {
                    outStream = new DicomOutputStream(file);
                    await outStream.writeDataset(
                        await Attributes.createFileMetaInformation(
                            sopInstanceUID, sopClassUID,
                            UID.ExplicitVRLittleEndian
                        ),
                        requestAttr
                    );

                    let response = await Commands.mkNCreateRSP(requestCmd, Status.Success);
                    await association.tryWriteDimseRSP(presentationContext, response);
                } catch(error) {
                    let response = await Commands.mkNCreateRSP(null, Status.ProcessingFailure);
                    await association.tryWriteDimseRSP(response);
                } finally {
                    await SafeClose.close(outStream);
                }
                return null;
            },
            async onNSetRQ(association, presentationContext, requestCmd, requestAttr) {
                let result = await requestAttr.validate(MPPSScp.getNSetIOD());
                if (!await result.isValid()) {
                    let response = await Commands.mkNSetRSP(requestCmd, Status.InvalidAttributeValue);
                    await association.tryWriteDimseRSP(presentationContext, response);
                    console.error("validation result error comment", await result.getErrorComment());
                    console.error("tags of invalid attribute values", await result.tagsOfInvalidAttributeValues());
                }

                let sopClassUID = await requestCmd.getString(Tag.RequestedSOPClassUID);
                let sopInstanceUID = await requestCmd.getString(Tag.RequestedSOPInstanceUID);

                let file = new File(
                    path.join(__dirname, sopInstanceUID)
                );

                let data;
                let inputStream;
                try {
                    inputStream = new DicomInputStream(file);
                    data = await inputStream.readDataset();
                } catch(error) {
                    console.error(error);
                    let response = await Commands.mkNSetRSP(null, Status.ProcessingFailure);
                    await association.tryWriteDimseRSP(presentationContext, response);
                } finally {
                    await SafeClose.close(inputStream);
                }

                let ppsStatus = await data.getString(Tag.PerformedProcedureStepStatus);
                if (ppsStatus !== "IN PROGRESS") {
                    let response = await Commands.mkNSetRSP(null, Status.ProcessingFailure);
                    await response.setString(Tag.ErrorComment, VR.LO, "PPS status is not IN PROGRESS");
                    await association.tryWriteDimseRSP(presentationContext, response);
                    return null;
                }

                await data.addAll(requestAttr);
                let outStream;
                try {
                    outStream = new DicomOutputStream(file);
                    await outStream.writeDataset(
                        await Attributes.createFileMetaInformation(
                            sopInstanceUID, sopClassUID,
                            UID.ExplicitVRLittleEndian
                        ),
                        data
                    );
                    let response = await Commands.mkNSetRSP(requestCmd, Status.Success);
                    await association.tryWriteDimseRSP(presentationContext, response);
                } catch(error) {
                    console.error(error);
                    let response = await Commands.mkNSetRSP(null, Status.ProcessingFailure);
                    await association.tryWriteDimseRSP(presentationContext, response);
                } finally {
                    await SafeClose.close(outStream);
                }
                return null;
            },
        }, {
            keepAsDaemon: true
        });

        MPPSScp.mppsScpProxy = mppsScpProxy;
        return MPPSScp.mppsScpProxy;
    }

    static getNCreateIOD() {
        if (MPPSScp.nCreateIOD) {
            return MPPSScp.nCreateIOD;
        }
        MPPSScp.nCreateIOD = IOD.loadSync(
            path.resolve(__dirname, "./mpps-ncreate-iod.xml")
        );
        return MPPSScp.nCreateIOD;
    }

    static getNSetIOD() {
        if (MPPSScp.nSetIOD) {
            return MPPSScp.nSetIOD;
        }
        MPPSScp.nSetIOD = IOD.loadSync(
            path.resolve(__dirname, "./mpps-nset-iod.xml")
        );
        return MPPSScp.nSetIOD;
    }
}

(async () => {
    try {
        let mppsScp = new MPPSScp();
        await mppsScp.start();
        console.log("start");
    } catch (e) {
        console.error(e);
    }
})();