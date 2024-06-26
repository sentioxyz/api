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
import type { MetricsServiceQueryValueResponseResult } from './MetricsServiceQueryValueResponseResult.js';
import {
    MetricsServiceQueryValueResponseResultFromJSON,
    MetricsServiceQueryValueResponseResultFromJSONTyped,
    MetricsServiceQueryValueResponseResultToJSON,
} from './MetricsServiceQueryValueResponseResult.js';

/**
 * 
 * @export
 * @interface MetricsServiceQueryValueResponse
 */
export interface MetricsServiceQueryValueResponse {
    /**
     * 
     * @type {Array<MetricsServiceQueryValueResponseResult>}
     * @memberof MetricsServiceQueryValueResponse
     */
    results?: Array<MetricsServiceQueryValueResponseResult>;
}

/**
 * Check if a given object implements the MetricsServiceQueryValueResponse interface.
 */
export function instanceOfMetricsServiceQueryValueResponse(value: object): boolean {
    return true;
}

export function MetricsServiceQueryValueResponseFromJSON(json: any): MetricsServiceQueryValueResponse {
    return MetricsServiceQueryValueResponseFromJSONTyped(json, false);
}

export function MetricsServiceQueryValueResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetricsServiceQueryValueResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'results': json['results'] == null ? undefined : ((json['results'] as Array<any>).map(MetricsServiceQueryValueResponseResultFromJSON)),
    };
}

export function MetricsServiceQueryValueResponseToJSON(value?: MetricsServiceQueryValueResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(MetricsServiceQueryValueResponseResultToJSON)),
    };
}

