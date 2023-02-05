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
import type { AnalyticServiceQueryCohortsResponseResult } from './AnalyticServiceQueryCohortsResponseResult';
import {
    AnalyticServiceQueryCohortsResponseResultFromJSON,
    AnalyticServiceQueryCohortsResponseResultFromJSONTyped,
    AnalyticServiceQueryCohortsResponseResultToJSON,
} from './AnalyticServiceQueryCohortsResponseResult';

/**
 * 
 * @export
 * @interface AnalyticServiceQueryCohortsResponse
 */
export interface AnalyticServiceQueryCohortsResponse {
    /**
     * 
     * @type {AnalyticServiceQueryCohortsResponseResult}
     * @memberof AnalyticServiceQueryCohortsResponse
     */
    result?: AnalyticServiceQueryCohortsResponseResult;
    /**
     * 
     * @type {string}
     * @memberof AnalyticServiceQueryCohortsResponse
     */
    error?: string;
}

/**
 * Check if a given object implements the AnalyticServiceQueryCohortsResponse interface.
 */
export function instanceOfAnalyticServiceQueryCohortsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AnalyticServiceQueryCohortsResponseFromJSON(json: any): AnalyticServiceQueryCohortsResponse {
    return AnalyticServiceQueryCohortsResponseFromJSONTyped(json, false);
}

export function AnalyticServiceQueryCohortsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticServiceQueryCohortsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': !exists(json, 'result') ? undefined : AnalyticServiceQueryCohortsResponseResultFromJSON(json['result']),
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function AnalyticServiceQueryCohortsResponseToJSON(value?: AnalyticServiceQueryCohortsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': AnalyticServiceQueryCohortsResponseResultToJSON(value.result),
        'error': value.error,
    };
}

