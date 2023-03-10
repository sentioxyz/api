/* tslint:disable */
/* eslint-disable */
/**
 * Sentio API
 * Sentio Open API for query data
 *
 * The version of the OpenAPI document: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ProcessorServiceChainState } from './ProcessorServiceChainState';
import {
    ProcessorServiceChainStateFromJSON,
    ProcessorServiceChainStateFromJSONTyped,
    ProcessorServiceChainStateToJSON,
} from './ProcessorServiceChainState';
import type { ProcessorServiceProcessorVersionState } from './ProcessorServiceProcessorVersionState';
import {
    ProcessorServiceProcessorVersionStateFromJSON,
    ProcessorServiceProcessorVersionStateFromJSONTyped,
    ProcessorServiceProcessorVersionStateToJSON,
} from './ProcessorServiceProcessorVersionState';

/**
 * This represents a processor which backend works on.
 * @export
 * @interface ProcessorServiceProcessor
 */
export interface ProcessorServiceProcessor {
    /**
     * The unique processor id.
     * @type {string}
     * @memberof ProcessorServiceProcessor
     */
    processorId?: string;
    /**
     * The project this processor belongs to.
     * @type {string}
     * @memberof ProcessorServiceProcessor
     */
    projectId?: string;
    /**
     * The version of the code_url below.
     * @type {number}
     * @memberof ProcessorServiceProcessor
     */
    version?: number;
    /**
     * 
     * @type {string}
     * @memberof ProcessorServiceProcessor
     */
    sdkVersion?: string;
    /**
     * Call should be able to fetch the code to run from code_url.
     * @type {string}
     * @memberof ProcessorServiceProcessor
     */
    codeUrl?: string;
    /**
     * 
     * @type {Array<ProcessorServiceChainState>}
     * @memberof ProcessorServiceProcessor
     */
    chainStates?: Array<ProcessorServiceChainState>;
    /**
     * If non empty, this is the contract associated with the processor.
     * @type {string}
     * @memberof ProcessorServiceProcessor
     */
    contractId?: string;
    /**
     * 
     * @type {ProcessorServiceProcessorVersionState}
     * @memberof ProcessorServiceProcessor
     */
    versionState?: ProcessorServiceProcessorVersionState;
    /**
     * 
     * @type {boolean}
     * @memberof ProcessorServiceProcessor
     */
    debug?: boolean;
    /**
     * The timescale-db sharding index of this processor.
     * @type {number}
     * @memberof ProcessorServiceProcessor
     */
    timescaleShardingIndex?: number;
}

/**
 * Check if a given object implements the ProcessorServiceProcessor interface.
 */
export function instanceOfProcessorServiceProcessor(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProcessorServiceProcessorFromJSON(json: any): ProcessorServiceProcessor {
    return ProcessorServiceProcessorFromJSONTyped(json, false);
}

export function ProcessorServiceProcessorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessorServiceProcessor {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'processorId': !exists(json, 'processorId') ? undefined : json['processorId'],
        'projectId': !exists(json, 'projectId') ? undefined : json['projectId'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'sdkVersion': !exists(json, 'sdkVersion') ? undefined : json['sdkVersion'],
        'codeUrl': !exists(json, 'codeUrl') ? undefined : json['codeUrl'],
        'chainStates': !exists(json, 'chainStates') ? undefined : ((json['chainStates'] as Array<any>).map(ProcessorServiceChainStateFromJSON)),
        'contractId': !exists(json, 'contractId') ? undefined : json['contractId'],
        'versionState': !exists(json, 'versionState') ? undefined : ProcessorServiceProcessorVersionStateFromJSON(json['versionState']),
        'debug': !exists(json, 'debug') ? undefined : json['debug'],
        'timescaleShardingIndex': !exists(json, 'timescaleShardingIndex') ? undefined : json['timescaleShardingIndex'],
    };
}

export function ProcessorServiceProcessorToJSON(value?: ProcessorServiceProcessor | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'processorId': value.processorId,
        'projectId': value.projectId,
        'version': value.version,
        'sdkVersion': value.sdkVersion,
        'codeUrl': value.codeUrl,
        'chainStates': value.chainStates === undefined ? undefined : ((value.chainStates as Array<any>).map(ProcessorServiceChainStateToJSON)),
        'contractId': value.contractId,
        'versionState': ProcessorServiceProcessorVersionStateToJSON(value.versionState),
        'debug': value.debug,
        'timescaleShardingIndex': value.timescaleShardingIndex,
    };
}

