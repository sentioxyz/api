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
import type { CommonComputeStats } from './CommonComputeStats.js';
import {
    CommonComputeStatsFromJSON,
    CommonComputeStatsFromJSONTyped,
    CommonComputeStatsToJSON,
} from './CommonComputeStats.js';
import type { MetricsServiceMetricsQueryResponseMatrix } from './MetricsServiceMetricsQueryResponseMatrix.js';
import {
    MetricsServiceMetricsQueryResponseMatrixFromJSON,
    MetricsServiceMetricsQueryResponseMatrixFromJSONTyped,
    MetricsServiceMetricsQueryResponseMatrixToJSON,
} from './MetricsServiceMetricsQueryResponseMatrix.js';

/**
 * 
 * @export
 * @interface MetricsServiceMetricsQueryResponseResult
 */
export interface MetricsServiceMetricsQueryResponseResult {
    /**
     * 
     * @type {MetricsServiceMetricsQueryResponseMatrix}
     * @memberof MetricsServiceMetricsQueryResponseResult
     */
    matrix?: MetricsServiceMetricsQueryResponseMatrix;
    /**
     * 
     * @type {string}
     * @memberof MetricsServiceMetricsQueryResponseResult
     */
    error?: string;
    /**
     * 
     * @type {string}
     * @memberof MetricsServiceMetricsQueryResponseResult
     */
    alias?: string;
    /**
     * 
     * @type {string}
     * @memberof MetricsServiceMetricsQueryResponseResult
     */
    id?: string;
    /**
     * 
     * @type {CommonComputeStats}
     * @memberof MetricsServiceMetricsQueryResponseResult
     */
    computeStats?: CommonComputeStats;
}

/**
 * Check if a given object implements the MetricsServiceMetricsQueryResponseResult interface.
 */
export function instanceOfMetricsServiceMetricsQueryResponseResult(value: object): boolean {
    return true;
}

export function MetricsServiceMetricsQueryResponseResultFromJSON(json: any): MetricsServiceMetricsQueryResponseResult {
    return MetricsServiceMetricsQueryResponseResultFromJSONTyped(json, false);
}

export function MetricsServiceMetricsQueryResponseResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetricsServiceMetricsQueryResponseResult {
    if (json == null) {
        return json;
    }
    return {
        
        'matrix': json['matrix'] == null ? undefined : MetricsServiceMetricsQueryResponseMatrixFromJSON(json['matrix']),
        'error': json['error'] == null ? undefined : json['error'],
        'alias': json['alias'] == null ? undefined : json['alias'],
        'id': json['id'] == null ? undefined : json['id'],
        'computeStats': json['computeStats'] == null ? undefined : CommonComputeStatsFromJSON(json['computeStats']),
    };
}

export function MetricsServiceMetricsQueryResponseResultToJSON(value?: MetricsServiceMetricsQueryResponseResult | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'matrix': MetricsServiceMetricsQueryResponseMatrixToJSON(value['matrix']),
        'error': value['error'],
        'alias': value['alias'],
        'id': value['id'],
        'computeStats': CommonComputeStatsToJSON(value['computeStats']),
    };
}
