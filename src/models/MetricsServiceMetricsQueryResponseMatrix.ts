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
import type { MetricsServiceMetricsQueryResponseSample } from './MetricsServiceMetricsQueryResponseSample';
import {
    MetricsServiceMetricsQueryResponseSampleFromJSON,
    MetricsServiceMetricsQueryResponseSampleFromJSONTyped,
    MetricsServiceMetricsQueryResponseSampleToJSON,
} from './MetricsServiceMetricsQueryResponseSample';

/**
 * 
 * @export
 * @interface MetricsServiceMetricsQueryResponseMatrix
 */
export interface MetricsServiceMetricsQueryResponseMatrix {
    /**
     * 
     * @type {Array<MetricsServiceMetricsQueryResponseSample>}
     * @memberof MetricsServiceMetricsQueryResponseMatrix
     */
    samples?: Array<MetricsServiceMetricsQueryResponseSample>;
    /**
     * 
     * @type {number}
     * @memberof MetricsServiceMetricsQueryResponseMatrix
     */
    totalSamples?: number;
}

/**
 * Check if a given object implements the MetricsServiceMetricsQueryResponseMatrix interface.
 */
export function instanceOfMetricsServiceMetricsQueryResponseMatrix(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MetricsServiceMetricsQueryResponseMatrixFromJSON(json: any): MetricsServiceMetricsQueryResponseMatrix {
    return MetricsServiceMetricsQueryResponseMatrixFromJSONTyped(json, false);
}

export function MetricsServiceMetricsQueryResponseMatrixFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetricsServiceMetricsQueryResponseMatrix {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'samples': !exists(json, 'samples') ? undefined : ((json['samples'] as Array<any>).map(MetricsServiceMetricsQueryResponseSampleFromJSON)),
        'totalSamples': !exists(json, 'totalSamples') ? undefined : json['totalSamples'],
    };
}

export function MetricsServiceMetricsQueryResponseMatrixToJSON(value?: MetricsServiceMetricsQueryResponseMatrix | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'samples': value.samples === undefined ? undefined : ((value.samples as Array<any>).map(MetricsServiceMetricsQueryResponseSampleToJSON)),
        'totalSamples': value.totalSamples,
    };
}

