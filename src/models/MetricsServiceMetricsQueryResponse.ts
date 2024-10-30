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
import type { MetricsServiceMetricsQueryResponseResult } from './MetricsServiceMetricsQueryResponseResult.js';
import {
    MetricsServiceMetricsQueryResponseResultFromJSON,
    MetricsServiceMetricsQueryResponseResultFromJSONTyped,
    MetricsServiceMetricsQueryResponseResultToJSON,
} from './MetricsServiceMetricsQueryResponseResult.js';

/**
 * 
 * @export
 * @interface MetricsServiceMetricsQueryResponse
 */
export interface MetricsServiceMetricsQueryResponse {
    /**
     * 
     * @type {Array<MetricsServiceMetricsQueryResponseResult>}
     * @memberof MetricsServiceMetricsQueryResponse
     */
    results?: Array<MetricsServiceMetricsQueryResponseResult>;
}

/**
 * Check if a given object implements the MetricsServiceMetricsQueryResponse interface.
 */
export function instanceOfMetricsServiceMetricsQueryResponse(value: object): boolean {
    return true;
}

export function MetricsServiceMetricsQueryResponseFromJSON(json: any): MetricsServiceMetricsQueryResponse {
    return MetricsServiceMetricsQueryResponseFromJSONTyped(json, false);
}

export function MetricsServiceMetricsQueryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetricsServiceMetricsQueryResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'results': json['results'] == null ? undefined : ((json['results'] as Array<any>).map(MetricsServiceMetricsQueryResponseResultFromJSON)),
    };
}

export function MetricsServiceMetricsQueryResponseToJSON(value?: MetricsServiceMetricsQueryResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(MetricsServiceMetricsQueryResponseResultToJSON)),
    };
}

