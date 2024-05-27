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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SolidityServiceDecodeStateDiffResponse
 */
export interface SolidityServiceDecodeStateDiffResponse {
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceDecodeStateDiffResponse
     */
    result?: string;
}

/**
 * Check if a given object implements the SolidityServiceDecodeStateDiffResponse interface.
 */
export function instanceOfSolidityServiceDecodeStateDiffResponse(value: object): boolean {
    return true;
}

export function SolidityServiceDecodeStateDiffResponseFromJSON(json: any): SolidityServiceDecodeStateDiffResponse {
    return SolidityServiceDecodeStateDiffResponseFromJSONTyped(json, false);
}

export function SolidityServiceDecodeStateDiffResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolidityServiceDecodeStateDiffResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'result': json['result'] == null ? undefined : json['result'],
    };
}

export function SolidityServiceDecodeStateDiffResponseToJSON(value?: SolidityServiceDecodeStateDiffResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'result': value['result'],
    };
}

