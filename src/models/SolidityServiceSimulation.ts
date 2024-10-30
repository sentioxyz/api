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

import { mapValues } from '../runtime.js';
import type { EvmAccessListItem } from './EvmAccessListItem.js';
import {
    EvmAccessListItemFromJSON,
    EvmAccessListItemFromJSONTyped,
    EvmAccessListItemToJSON,
    EvmAccessListItemToJSONTyped,
} from './EvmAccessListItem.js';
import type { SolidityServiceSimulationResult } from './SolidityServiceSimulationResult.js';
import {
    SolidityServiceSimulationResultFromJSON,
    SolidityServiceSimulationResultFromJSONTyped,
    SolidityServiceSimulationResultToJSON,
    SolidityServiceSimulationResultToJSONTyped,
} from './SolidityServiceSimulationResult.js';
import type { SolidityServiceStateOverride } from './SolidityServiceStateOverride.js';
import {
    SolidityServiceStateOverrideFromJSON,
    SolidityServiceStateOverrideFromJSONTyped,
    SolidityServiceStateOverrideToJSON,
    SolidityServiceStateOverrideToJSONTyped,
} from './SolidityServiceStateOverride.js';
import type { SolidityServiceBlockOverrides } from './SolidityServiceBlockOverrides.js';
import {
    SolidityServiceBlockOverridesFromJSON,
    SolidityServiceBlockOverridesFromJSONTyped,
    SolidityServiceBlockOverridesToJSON,
    SolidityServiceBlockOverridesToJSONTyped,
} from './SolidityServiceBlockOverrides.js';

/**
 * 
 * @export
 * @interface SolidityServiceSimulation
 */
export interface SolidityServiceSimulation {
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceSimulation
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceSimulation
     */
    createAt?: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceSimulation
     */
    bundleId?: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceSimulation
     */
    networkId: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceSimulation
     */
    chainId?: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceSimulation
     */
    to: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceSimulation
     */
    input: string;
    /**
     * Can be "latest".
     * @type {string}
     * @memberof SolidityServiceSimulation
     */
    blockNumber: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceSimulation
     */
    transactionIndex: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceSimulation
     */
    from: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceSimulation
     */
    gas: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceSimulation
     */
    gasPrice: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceSimulation
     */
    maxFeePerGas?: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceSimulation
     */
    maxPriorityFeePerGas?: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceSimulation
     */
    value: string;
    /**
     * 
     * @type {Array<EvmAccessListItem>}
     * @memberof SolidityServiceSimulation
     */
    accessList?: Array<EvmAccessListItem>;
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceSimulation
     */
    originTxHash?: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceSimulation
     */
    label?: string;
    /**
     * 
     * @type {{ [key: string]: SolidityServiceStateOverride; }}
     * @memberof SolidityServiceSimulation
     */
    stateOverrides?: { [key: string]: SolidityServiceStateOverride; };
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SolidityServiceSimulation
     */
    sourceOverrides?: { [key: string]: string; };
    /**
     * 
     * @type {SolidityServiceBlockOverrides}
     * @memberof SolidityServiceSimulation
     */
    blockOverride?: SolidityServiceBlockOverrides;
    /**
     * 
     * @type {boolean}
     * @memberof SolidityServiceSimulation
     */
    debugDeployment?: boolean;
    /**
     * 
     * @type {SolidityServiceSimulationResult}
     * @memberof SolidityServiceSimulation
     */
    result?: SolidityServiceSimulationResult;
}

/**
 * Check if a given object implements the SolidityServiceSimulation interface.
 */
export function instanceOfSolidityServiceSimulation(value: object): value is SolidityServiceSimulation {
    if (!('networkId' in value) || value['networkId'] === undefined) return false;
    if (!('to' in value) || value['to'] === undefined) return false;
    if (!('input' in value) || value['input'] === undefined) return false;
    if (!('blockNumber' in value) || value['blockNumber'] === undefined) return false;
    if (!('transactionIndex' in value) || value['transactionIndex'] === undefined) return false;
    if (!('from' in value) || value['from'] === undefined) return false;
    if (!('gas' in value) || value['gas'] === undefined) return false;
    if (!('gasPrice' in value) || value['gasPrice'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function SolidityServiceSimulationFromJSON(json: any): SolidityServiceSimulation {
    return SolidityServiceSimulationFromJSONTyped(json, false);
}

export function SolidityServiceSimulationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolidityServiceSimulation {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'createAt': json['createAt'] == null ? undefined : json['createAt'],
        'bundleId': json['bundleId'] == null ? undefined : json['bundleId'],
        'networkId': json['networkId'],
        'chainId': json['chainId'] == null ? undefined : json['chainId'],
        'to': json['to'],
        'input': json['input'],
        'blockNumber': json['blockNumber'],
        'transactionIndex': json['transactionIndex'],
        'from': json['from'],
        'gas': json['gas'],
        'gasPrice': json['gasPrice'],
        'maxFeePerGas': json['maxFeePerGas'] == null ? undefined : json['maxFeePerGas'],
        'maxPriorityFeePerGas': json['maxPriorityFeePerGas'] == null ? undefined : json['maxPriorityFeePerGas'],
        'value': json['value'],
        'accessList': json['accessList'] == null ? undefined : ((json['accessList'] as Array<any>).map(EvmAccessListItemFromJSON)),
        'originTxHash': json['originTxHash'] == null ? undefined : json['originTxHash'],
        'label': json['label'] == null ? undefined : json['label'],
        'stateOverrides': json['stateOverrides'] == null ? undefined : (mapValues(json['stateOverrides'], SolidityServiceStateOverrideFromJSON)),
        'sourceOverrides': json['sourceOverrides'] == null ? undefined : json['sourceOverrides'],
        'blockOverride': json['blockOverride'] == null ? undefined : SolidityServiceBlockOverridesFromJSON(json['blockOverride']),
        'debugDeployment': json['debugDeployment'] == null ? undefined : json['debugDeployment'],
        'result': json['result'] == null ? undefined : SolidityServiceSimulationResultFromJSON(json['result']),
    };
}

  export function SolidityServiceSimulationToJSON(json: any): SolidityServiceSimulation {
      return SolidityServiceSimulationToJSONTyped(json, false);
  }

  export function SolidityServiceSimulationToJSONTyped(value?: SolidityServiceSimulation | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'createAt': value['createAt'],
        'bundleId': value['bundleId'],
        'networkId': value['networkId'],
        'chainId': value['chainId'],
        'to': value['to'],
        'input': value['input'],
        'blockNumber': value['blockNumber'],
        'transactionIndex': value['transactionIndex'],
        'from': value['from'],
        'gas': value['gas'],
        'gasPrice': value['gasPrice'],
        'maxFeePerGas': value['maxFeePerGas'],
        'maxPriorityFeePerGas': value['maxPriorityFeePerGas'],
        'value': value['value'],
        'accessList': value['accessList'] == null ? undefined : ((value['accessList'] as Array<any>).map(EvmAccessListItemToJSON)),
        'originTxHash': value['originTxHash'],
        'label': value['label'],
        'stateOverrides': value['stateOverrides'] == null ? undefined : (mapValues(value['stateOverrides'], SolidityServiceStateOverrideToJSON)),
        'sourceOverrides': value['sourceOverrides'],
        'blockOverride': SolidityServiceBlockOverridesToJSON(value['blockOverride']),
        'debugDeployment': value['debugDeployment'],
        'result': SolidityServiceSimulationResultToJSON(value['result']),
    };
}

