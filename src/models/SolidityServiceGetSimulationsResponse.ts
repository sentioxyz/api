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
} from './SolidityServiceSimulation.js';

/**
 * 
 * @export
 * @interface SolidityServiceGetSimulationsResponse
 */
export interface SolidityServiceGetSimulationsResponse {
    /**
     * 
     * @type {Array<SolidityServiceSimulation>}
     * @memberof SolidityServiceGetSimulationsResponse
     */
    simulations?: Array<SolidityServiceSimulation>;
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceGetSimulationsResponse
     */
    count?: string;
    /**
     * 
     * @type {number}
     * @memberof SolidityServiceGetSimulationsResponse
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof SolidityServiceGetSimulationsResponse
     */
    pageSize?: number;
}

/**
 * Check if a given object implements the SolidityServiceGetSimulationsResponse interface.
 */
export function instanceOfSolidityServiceGetSimulationsResponse(value: object): boolean {
    return true;
}

export function SolidityServiceGetSimulationsResponseFromJSON(json: any): SolidityServiceGetSimulationsResponse {
    return SolidityServiceGetSimulationsResponseFromJSONTyped(json, false);
}

export function SolidityServiceGetSimulationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolidityServiceGetSimulationsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'simulations': json['simulations'] == null ? undefined : ((json['simulations'] as Array<any>).map(SolidityServiceSimulationFromJSON)),
        'count': json['count'] == null ? undefined : json['count'],
        'page': json['page'] == null ? undefined : json['page'],
        'pageSize': json['pageSize'] == null ? undefined : json['pageSize'],
    };
}

export function SolidityServiceGetSimulationsResponseToJSON(value?: SolidityServiceGetSimulationsResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'simulations': value['simulations'] == null ? undefined : ((value['simulations'] as Array<any>).map(SolidityServiceSimulationToJSON)),
        'count': value['count'],
        'page': value['page'],
        'pageSize': value['pageSize'],
    };
}

