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
import type { CommonRetentionMatrix } from './CommonRetentionMatrix.js';
import {
    CommonRetentionMatrixFromJSON,
    CommonRetentionMatrixFromJSONTyped,
    CommonRetentionMatrixToJSON,
    CommonRetentionMatrixToJSONTyped,
} from './CommonRetentionMatrix.js';
import type { CommonComputeStats } from './CommonComputeStats.js';
import {
    CommonComputeStatsFromJSON,
    CommonComputeStatsFromJSONTyped,
    CommonComputeStatsToJSON,
    CommonComputeStatsToJSONTyped,
} from './CommonComputeStats.js';

/**
 * 
 * @export
 * @interface InsightsServiceRetentionResponse
 */
export interface InsightsServiceRetentionResponse {
    /**
     * 
     * @type {CommonComputeStats}
     * @memberof InsightsServiceRetentionResponse
     */
    computeStats?: CommonComputeStats;
    /**
     * 
     * @type {CommonRetentionMatrix}
     * @memberof InsightsServiceRetentionResponse
     */
    results?: CommonRetentionMatrix;
    /**
     * 
     * @type {string}
     * @memberof InsightsServiceRetentionResponse
     */
    error?: string;
}

/**
 * Check if a given object implements the InsightsServiceRetentionResponse interface.
 */
export function instanceOfInsightsServiceRetentionResponse(value: object): value is InsightsServiceRetentionResponse {
    return true;
}

export function InsightsServiceRetentionResponseFromJSON(json: any): InsightsServiceRetentionResponse {
    return InsightsServiceRetentionResponseFromJSONTyped(json, false);
}

export function InsightsServiceRetentionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InsightsServiceRetentionResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'computeStats': json['computeStats'] == null ? undefined : CommonComputeStatsFromJSON(json['computeStats']),
        'results': json['results'] == null ? undefined : CommonRetentionMatrixFromJSON(json['results']),
        'error': json['error'] == null ? undefined : json['error'],
    };
}

  export function InsightsServiceRetentionResponseToJSON(json: any): InsightsServiceRetentionResponse {
      return InsightsServiceRetentionResponseToJSONTyped(json, false);
  }

  export function InsightsServiceRetentionResponseToJSONTyped(value?: InsightsServiceRetentionResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'computeStats': CommonComputeStatsToJSON(value['computeStats']),
        'results': CommonRetentionMatrixToJSON(value['results']),
        'error': value['error'],
    };
}

