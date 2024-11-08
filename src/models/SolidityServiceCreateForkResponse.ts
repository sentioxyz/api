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
import type { SolidityServiceFork } from './SolidityServiceFork.js';
import {
    SolidityServiceForkFromJSON,
    SolidityServiceForkFromJSONTyped,
    SolidityServiceForkToJSON,
    SolidityServiceForkToJSONTyped,
} from './SolidityServiceFork.js';

/**
 * 
 * @export
 * @interface SolidityServiceCreateForkResponse
 */
export interface SolidityServiceCreateForkResponse {
    /**
     * 
     * @type {SolidityServiceFork}
     * @memberof SolidityServiceCreateForkResponse
     */
    fork?: SolidityServiceFork;
}

/**
 * Check if a given object implements the SolidityServiceCreateForkResponse interface.
 */
export function instanceOfSolidityServiceCreateForkResponse(value: object): value is SolidityServiceCreateForkResponse {
    return true;
}

export function SolidityServiceCreateForkResponseFromJSON(json: any): SolidityServiceCreateForkResponse {
    return SolidityServiceCreateForkResponseFromJSONTyped(json, false);
}

export function SolidityServiceCreateForkResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolidityServiceCreateForkResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'fork': json['fork'] == null ? undefined : SolidityServiceForkFromJSON(json['fork']),
    };
}

  export function SolidityServiceCreateForkResponseToJSON(json: any): SolidityServiceCreateForkResponse {
      return SolidityServiceCreateForkResponseToJSONTyped(json, false);
  }

  export function SolidityServiceCreateForkResponseToJSONTyped(value?: SolidityServiceCreateForkResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'fork': SolidityServiceForkToJSON(value['fork']),
    };
}
