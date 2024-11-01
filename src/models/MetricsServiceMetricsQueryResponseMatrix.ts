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
import type { MetricsServiceMetricsQueryResponseSample } from './MetricsServiceMetricsQueryResponseSample.js';
import {
    MetricsServiceMetricsQueryResponseSampleFromJSON,
    MetricsServiceMetricsQueryResponseSampleFromJSONTyped,
    MetricsServiceMetricsQueryResponseSampleToJSON,
    MetricsServiceMetricsQueryResponseSampleToJSONTyped,
} from './MetricsServiceMetricsQueryResponseSample.js';

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
export function instanceOfMetricsServiceMetricsQueryResponseMatrix(value: object): value is MetricsServiceMetricsQueryResponseMatrix {
    return true;
}

export function MetricsServiceMetricsQueryResponseMatrixFromJSON(json: any): MetricsServiceMetricsQueryResponseMatrix {
    return MetricsServiceMetricsQueryResponseMatrixFromJSONTyped(json, false);
}

export function MetricsServiceMetricsQueryResponseMatrixFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetricsServiceMetricsQueryResponseMatrix {
    if (json == null) {
        return json;
    }
    return {
        
        'samples': json['samples'] == null ? undefined : ((json['samples'] as Array<any>).map(MetricsServiceMetricsQueryResponseSampleFromJSON)),
        'totalSamples': json['totalSamples'] == null ? undefined : json['totalSamples'],
    };
}

  export function MetricsServiceMetricsQueryResponseMatrixToJSON(json: any): MetricsServiceMetricsQueryResponseMatrix {
      return MetricsServiceMetricsQueryResponseMatrixToJSONTyped(json, false);
  }

  export function MetricsServiceMetricsQueryResponseMatrixToJSONTyped(value?: MetricsServiceMetricsQueryResponseMatrix | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'samples': value['samples'] == null ? undefined : ((value['samples'] as Array<any>).map(MetricsServiceMetricsQueryResponseSampleToJSON)),
        'totalSamples': value['totalSamples'],
    };
}

