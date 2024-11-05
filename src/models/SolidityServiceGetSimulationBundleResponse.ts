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
 * @interface SolidityServiceGetSimulationBundleResponse
 */
export interface SolidityServiceGetSimulationBundleResponse {
    /**
     * 
     * @type {Array<SolidityServiceSimulation>}
     * @memberof SolidityServiceGetSimulationBundleResponse
     */
    simulations?: Array<SolidityServiceSimulation>;
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceGetSimulationBundleResponse
     */
    error?: string;
}

/**
 * Check if a given object implements the SolidityServiceGetSimulationBundleResponse interface.
 */
export function instanceOfSolidityServiceGetSimulationBundleResponse(value: object): value is SolidityServiceGetSimulationBundleResponse {
    return true;
}

export function SolidityServiceGetSimulationBundleResponseFromJSON(json: any): SolidityServiceGetSimulationBundleResponse {
    return SolidityServiceGetSimulationBundleResponseFromJSONTyped(json, false);
}

export function SolidityServiceGetSimulationBundleResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolidityServiceGetSimulationBundleResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'simulations': json['simulations'] == null ? undefined : ((json['simulations'] as Array<any>).map(SolidityServiceSimulationFromJSON)),
        'error': json['error'] == null ? undefined : json['error'],
    };
}

  export function SolidityServiceGetSimulationBundleResponseToJSON(json: any): SolidityServiceGetSimulationBundleResponse {
      return SolidityServiceGetSimulationBundleResponseToJSONTyped(json, false);
  }

  export function SolidityServiceGetSimulationBundleResponseToJSONTyped(value?: SolidityServiceGetSimulationBundleResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'simulations': value['simulations'] == null ? undefined : ((value['simulations'] as Array<any>).map(SolidityServiceSimulationToJSON)),
        'error': value['error'],
    };
}
