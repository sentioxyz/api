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
 * @interface SolidityServiceUpdateForkResponse
 */
export interface SolidityServiceUpdateForkResponse {
    /**
     * 
     * @type {SolidityServiceFork}
     * @memberof SolidityServiceUpdateForkResponse
     */
    fork?: SolidityServiceFork;
}

/**
 * Check if a given object implements the SolidityServiceUpdateForkResponse interface.
 */
export function instanceOfSolidityServiceUpdateForkResponse(value: object): value is SolidityServiceUpdateForkResponse {
    return true;
}

export function SolidityServiceUpdateForkResponseFromJSON(json: any): SolidityServiceUpdateForkResponse {
    return SolidityServiceUpdateForkResponseFromJSONTyped(json, false);
}

export function SolidityServiceUpdateForkResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolidityServiceUpdateForkResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'fork': json['fork'] == null ? undefined : SolidityServiceForkFromJSON(json['fork']),
    };
}

  export function SolidityServiceUpdateForkResponseToJSON(json: any): SolidityServiceUpdateForkResponse {
      return SolidityServiceUpdateForkResponseToJSONTyped(json, false);
  }

  export function SolidityServiceUpdateForkResponseToJSONTyped(value?: SolidityServiceUpdateForkResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'fork': SolidityServiceForkToJSON(value['fork']),
    };
}

