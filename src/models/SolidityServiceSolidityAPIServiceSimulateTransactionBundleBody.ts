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
import type { SolidityServiceSolidityAPIServiceSimulateTransactionBodyChainSpec } from './SolidityServiceSolidityAPIServiceSimulateTransactionBodyChainSpec.js';
import {
    SolidityServiceSolidityAPIServiceSimulateTransactionBodyChainSpecFromJSON,
    SolidityServiceSolidityAPIServiceSimulateTransactionBodyChainSpecFromJSONTyped,
    SolidityServiceSolidityAPIServiceSimulateTransactionBodyChainSpecToJSON,
    SolidityServiceSolidityAPIServiceSimulateTransactionBodyChainSpecToJSONTyped,
} from './SolidityServiceSolidityAPIServiceSimulateTransactionBodyChainSpec.js';
import type { SolidityServiceSimulation } from './SolidityServiceSimulation.js';
import {
    SolidityServiceSimulationFromJSON,
    SolidityServiceSimulationFromJSONTyped,
    SolidityServiceSimulationToJSON,
    SolidityServiceSimulationToJSONTyped,
} from './SolidityServiceSimulation.js';

/**
 * 
 * @export
 * @interface SolidityServiceSolidityAPIServiceSimulateTransactionBundleBody
 */
export interface SolidityServiceSolidityAPIServiceSimulateTransactionBundleBody {
    /**
     * 
     * @type {SolidityServiceSolidityAPIServiceSimulateTransactionBodyChainSpec}
     * @memberof SolidityServiceSolidityAPIServiceSimulateTransactionBundleBody
     */
    chainSpec: SolidityServiceSolidityAPIServiceSimulateTransactionBodyChainSpec;
    /**
     * For blockNumber, transactionIndex, networkId, stateOverrides and blockOverrides fields, only the first simulation takes effect.
     * @type {Array<SolidityServiceSimulation>}
     * @memberof SolidityServiceSolidityAPIServiceSimulateTransactionBundleBody
     */
    simulations: Array<SolidityServiceSimulation>;
}

/**
 * Check if a given object implements the SolidityServiceSolidityAPIServiceSimulateTransactionBundleBody interface.
 */
export function instanceOfSolidityServiceSolidityAPIServiceSimulateTransactionBundleBody(value: object): value is SolidityServiceSolidityAPIServiceSimulateTransactionBundleBody {
    if (!('chainSpec' in value) || value['chainSpec'] === undefined) return false;
    if (!('simulations' in value) || value['simulations'] === undefined) return false;
    return true;
}

export function SolidityServiceSolidityAPIServiceSimulateTransactionBundleBodyFromJSON(json: any): SolidityServiceSolidityAPIServiceSimulateTransactionBundleBody {
    return SolidityServiceSolidityAPIServiceSimulateTransactionBundleBodyFromJSONTyped(json, false);
}

export function SolidityServiceSolidityAPIServiceSimulateTransactionBundleBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolidityServiceSolidityAPIServiceSimulateTransactionBundleBody {
    if (json == null) {
        return json;
    }
    return {
        
        'chainSpec': SolidityServiceSolidityAPIServiceSimulateTransactionBodyChainSpecFromJSON(json['chainSpec']),
        'simulations': ((json['simulations'] as Array<any>).map(SolidityServiceSimulationFromJSON)),
    };
}

  export function SolidityServiceSolidityAPIServiceSimulateTransactionBundleBodyToJSON(json: any): SolidityServiceSolidityAPIServiceSimulateTransactionBundleBody {
      return SolidityServiceSolidityAPIServiceSimulateTransactionBundleBodyToJSONTyped(json, false);
  }

  export function SolidityServiceSolidityAPIServiceSimulateTransactionBundleBodyToJSONTyped(value?: SolidityServiceSolidityAPIServiceSimulateTransactionBundleBody | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'chainSpec': SolidityServiceSolidityAPIServiceSimulateTransactionBodyChainSpecToJSON(value['chainSpec']),
        'simulations': ((value['simulations'] as Array<any>).map(SolidityServiceSimulationToJSON)),
    };
}

