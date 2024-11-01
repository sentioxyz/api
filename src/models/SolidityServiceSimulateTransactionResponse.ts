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
 * @interface SolidityServiceSimulateTransactionResponse
 */
export interface SolidityServiceSimulateTransactionResponse {
    /**
     * 
     * @type {SolidityServiceSimulation}
     * @memberof SolidityServiceSimulateTransactionResponse
     */
    simulation?: SolidityServiceSimulation;
}

/**
 * Check if a given object implements the SolidityServiceSimulateTransactionResponse interface.
 */
export function instanceOfSolidityServiceSimulateTransactionResponse(value: object): value is SolidityServiceSimulateTransactionResponse {
    return true;
}

export function SolidityServiceSimulateTransactionResponseFromJSON(json: any): SolidityServiceSimulateTransactionResponse {
    return SolidityServiceSimulateTransactionResponseFromJSONTyped(json, false);
}

export function SolidityServiceSimulateTransactionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolidityServiceSimulateTransactionResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'simulation': json['simulation'] == null ? undefined : SolidityServiceSimulationFromJSON(json['simulation']),
    };
}

  export function SolidityServiceSimulateTransactionResponseToJSON(json: any): SolidityServiceSimulateTransactionResponse {
      return SolidityServiceSimulateTransactionResponseToJSONTyped(json, false);
  }

  export function SolidityServiceSimulateTransactionResponseToJSONTyped(value?: SolidityServiceSimulateTransactionResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'simulation': SolidityServiceSimulationToJSON(value['simulation']),
    };
}

