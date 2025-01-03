/**
 * Sentio API
 * Sentio Open API for query data
 *
 * OpenAPI spec version: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ProcessorServiceChainState } from '../models/ProcessorServiceChainState.js';
import { ProcessorServiceNetworkOverride } from '../models/ProcessorServiceNetworkOverride.js';
import { ProcessorServiceProcessorVersionState } from '../models/ProcessorServiceProcessorVersionState.js';
import { HttpFile } from '../http/http.js';

/**
* This represents a processor which backend works on.
*/
export class ProcessorServiceProcessor {
    /**
    * The unique processor id.
    */
    'processorId'?: string;
    /**
    * The project this processor belongs to.
    */
    'projectId'?: string;
    /**
    * The version of the code_url below.
    */
    'version'?: number;
    'sdkVersion'?: string;
    /**
    * Call should be able to fetch the code to run from code_url.
    */
    'codeUrl'?: string;
    'chainStates'?: Array<ProcessorServiceChainState>;
    /**
    * If non empty, this is the contract associated with the processor.
    */
    'contractId'?: string;
    'versionState'?: ProcessorServiceProcessorVersionState;
    'debug'?: boolean;
    /**
    * The timescale-db sharding index of this processor.
    */
    'timescaleShardingIndex'?: number;
    'versionLabel'?: string;
    'ipfsHash'?: string;
    'debugFork'?: string;
    /**
    * The created timestamp of the processor.
    */
    'createdAt'?: string;
    /**
    * The clickhouse sharding index of this processor.
    */
    'clickhouseShardingIndex'?: number;
    'k8sClusterId'?: number;
    'enableMaterializedView'?: boolean;
    'referenceProjectId'?: string;
    'networkOverrides'?: Array<ProcessorServiceNetworkOverride>;
    'eventlogMigrateStatus'?: number;
    'eventlogVersion'?: number;
    'pause'?: boolean;
    'entitySchemaVersion'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "processorId",
            "baseName": "processorId",
            "type": "string",
            "format": ""
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "string",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "sdkVersion",
            "baseName": "sdkVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "codeUrl",
            "baseName": "codeUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "chainStates",
            "baseName": "chainStates",
            "type": "Array<ProcessorServiceChainState>",
            "format": ""
        },
        {
            "name": "contractId",
            "baseName": "contractId",
            "type": "string",
            "format": ""
        },
        {
            "name": "versionState",
            "baseName": "versionState",
            "type": "ProcessorServiceProcessorVersionState",
            "format": ""
        },
        {
            "name": "debug",
            "baseName": "debug",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "timescaleShardingIndex",
            "baseName": "timescaleShardingIndex",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "versionLabel",
            "baseName": "versionLabel",
            "type": "string",
            "format": ""
        },
        {
            "name": "ipfsHash",
            "baseName": "ipfsHash",
            "type": "string",
            "format": ""
        },
        {
            "name": "debugFork",
            "baseName": "debugFork",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "clickhouseShardingIndex",
            "baseName": "clickhouseShardingIndex",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "k8sClusterId",
            "baseName": "k8sClusterId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "enableMaterializedView",
            "baseName": "enableMaterializedView",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "referenceProjectId",
            "baseName": "referenceProjectId",
            "type": "string",
            "format": ""
        },
        {
            "name": "networkOverrides",
            "baseName": "networkOverrides",
            "type": "Array<ProcessorServiceNetworkOverride>",
            "format": ""
        },
        {
            "name": "eventlogMigrateStatus",
            "baseName": "eventlogMigrateStatus",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "eventlogVersion",
            "baseName": "eventlogVersion",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "pause",
            "baseName": "pause",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "entitySchemaVersion",
            "baseName": "entitySchemaVersion",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return ProcessorServiceProcessor.attributeTypeMap;
    }

    public constructor() {
    }
}


