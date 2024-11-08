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
 * @interface SolidityServiceGetSimulationResponse
 */
export interface SolidityServiceGetSimulationResponse {
    /**
     * 
     * @type {SolidityServiceSimulation}
     * @memberof SolidityServiceGetSimulationResponse
     */
    simulation?: SolidityServiceSimulation;
}

/**
 * Check if a given object implements the SolidityServiceGetSimulationResponse interface.
 */
export function instanceOfSolidityServiceGetSimulationResponse(value: object): value is SolidityServiceGetSimulationResponse {
    return true;
}

export function SolidityServiceGetSimulationResponseFromJSON(json: any): SolidityServiceGetSimulationResponse {
    return SolidityServiceGetSimulationResponseFromJSONTyped(json, false);
}

export function SolidityServiceGetSimulationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolidityServiceGetSimulationResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'simulation': json['simulation'] == null ? undefined : SolidityServiceSimulationFromJSON(json['simulation']),
    };
}

  export function SolidityServiceGetSimulationResponseToJSON(json: any): SolidityServiceGetSimulationResponse {
      return SolidityServiceGetSimulationResponseToJSONTyped(json, false);
  }

  export function SolidityServiceGetSimulationResponseToJSONTyped(value?: SolidityServiceGetSimulationResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'simulation': SolidityServiceSimulationToJSON(value['simulation']),
    };
}
