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
/**
 * 
 * @export
 * @interface SolidityServiceGetTraceTransactionInternalResponse
 */
export interface SolidityServiceGetTraceTransactionInternalResponse {
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceGetTraceTransactionInternalResponse
     */
    result?: string;
}

/**
 * Check if a given object implements the SolidityServiceGetTraceTransactionInternalResponse interface.
 */
export function instanceOfSolidityServiceGetTraceTransactionInternalResponse(value: object): boolean {
    return true;
}

export function SolidityServiceGetTraceTransactionInternalResponseFromJSON(json: any): SolidityServiceGetTraceTransactionInternalResponse {
    return SolidityServiceGetTraceTransactionInternalResponseFromJSONTyped(json, false);
}

export function SolidityServiceGetTraceTransactionInternalResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolidityServiceGetTraceTransactionInternalResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'result': json['result'] == null ? undefined : json['result'],
    };
}

export function SolidityServiceGetTraceTransactionInternalResponseToJSON(value?: SolidityServiceGetTraceTransactionInternalResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'result': value['result'],
    };
}
