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
import type { MetricsServiceMetricsQueryResponseMetric } from './MetricsServiceMetricsQueryResponseMetric.js';
import {
    MetricsServiceMetricsQueryResponseMetricFromJSON,
    MetricsServiceMetricsQueryResponseMetricFromJSONTyped,
    MetricsServiceMetricsQueryResponseMetricToJSON,
} from './MetricsServiceMetricsQueryResponseMetric.js';
import type { MetricsServiceMetricsQueryResponseValue } from './MetricsServiceMetricsQueryResponseValue.js';
import {
    MetricsServiceMetricsQueryResponseValueFromJSON,
    MetricsServiceMetricsQueryResponseValueFromJSONTyped,
    MetricsServiceMetricsQueryResponseValueToJSON,
} from './MetricsServiceMetricsQueryResponseValue.js';

/**
 * 
 * @export
 * @interface MetricsServiceMetricsQueryResponseSample
 */
export interface MetricsServiceMetricsQueryResponseSample {
    /**
     * 
     * @type {MetricsServiceMetricsQueryResponseMetric}
     * @memberof MetricsServiceMetricsQueryResponseSample
     */
    metric?: MetricsServiceMetricsQueryResponseMetric;
    /**
     * 
     * @type {Array<MetricsServiceMetricsQueryResponseValue>}
     * @memberof MetricsServiceMetricsQueryResponseSample
     */
    values?: Array<MetricsServiceMetricsQueryResponseValue>;
}

/**
 * Check if a given object implements the MetricsServiceMetricsQueryResponseSample interface.
 */
export function instanceOfMetricsServiceMetricsQueryResponseSample(value: object): boolean {
    return true;
}

export function MetricsServiceMetricsQueryResponseSampleFromJSON(json: any): MetricsServiceMetricsQueryResponseSample {
    return MetricsServiceMetricsQueryResponseSampleFromJSONTyped(json, false);
}

export function MetricsServiceMetricsQueryResponseSampleFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetricsServiceMetricsQueryResponseSample {
    if (json == null) {
        return json;
    }
    return {
        
        'metric': json['metric'] == null ? undefined : MetricsServiceMetricsQueryResponseMetricFromJSON(json['metric']),
        'values': json['values'] == null ? undefined : ((json['values'] as Array<any>).map(MetricsServiceMetricsQueryResponseValueFromJSON)),
    };
}

export function MetricsServiceMetricsQueryResponseSampleToJSON(value?: MetricsServiceMetricsQueryResponseSample | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'metric': MetricsServiceMetricsQueryResponseMetricToJSON(value['metric']),
        'values': value['values'] == null ? undefined : ((value['values'] as Array<any>).map(MetricsServiceMetricsQueryResponseValueToJSON)),
    };
}

