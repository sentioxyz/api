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

import { exists, mapValues } from '../runtime';
import type { MetricsServiceQueryValueResponseResult } from './MetricsServiceQueryValueResponseResult';
import {
    MetricsServiceQueryValueResponseResultFromJSON,
    MetricsServiceQueryValueResponseResultFromJSONTyped,
    MetricsServiceQueryValueResponseResultToJSON,
} from './MetricsServiceQueryValueResponseResult';

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
    let isInstance = true;

    return isInstance;
}

export function MetricsServiceQueryValueResponseFromJSON(json: any): MetricsServiceQueryValueResponse {
    return MetricsServiceQueryValueResponseFromJSONTyped(json, false);
}

export function MetricsServiceQueryValueResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetricsServiceQueryValueResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(MetricsServiceQueryValueResponseResultFromJSON)),
    };
}

export function MetricsServiceQueryValueResponseToJSON(value?: MetricsServiceQueryValueResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(MetricsServiceQueryValueResponseResultToJSON)),
    };
}

