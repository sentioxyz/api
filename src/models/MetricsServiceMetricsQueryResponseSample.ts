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
import type { MetricsServiceMetricsQueryResponseMetric } from './MetricsServiceMetricsQueryResponseMetric';
import {
    MetricsServiceMetricsQueryResponseMetricFromJSON,
    MetricsServiceMetricsQueryResponseMetricFromJSONTyped,
    MetricsServiceMetricsQueryResponseMetricToJSON,
} from './MetricsServiceMetricsQueryResponseMetric';
import type { MetricsServiceMetricsQueryResponseValue } from './MetricsServiceMetricsQueryResponseValue';
import {
    MetricsServiceMetricsQueryResponseValueFromJSON,
    MetricsServiceMetricsQueryResponseValueFromJSONTyped,
    MetricsServiceMetricsQueryResponseValueToJSON,
} from './MetricsServiceMetricsQueryResponseValue';

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
    let isInstance = true;

    return isInstance;
}

export function MetricsServiceMetricsQueryResponseSampleFromJSON(json: any): MetricsServiceMetricsQueryResponseSample {
    return MetricsServiceMetricsQueryResponseSampleFromJSONTyped(json, false);
}

export function MetricsServiceMetricsQueryResponseSampleFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetricsServiceMetricsQueryResponseSample {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'metric': !exists(json, 'metric') ? undefined : MetricsServiceMetricsQueryResponseMetricFromJSON(json['metric']),
        'values': !exists(json, 'values') ? undefined : ((json['values'] as Array<any>).map(MetricsServiceMetricsQueryResponseValueFromJSON)),
    };
}

export function MetricsServiceMetricsQueryResponseSampleToJSON(value?: MetricsServiceMetricsQueryResponseSample | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'metric': MetricsServiceMetricsQueryResponseMetricToJSON(value.metric),
        'values': value.values === undefined ? undefined : ((value.values as Array<any>).map(MetricsServiceMetricsQueryResponseValueToJSON)),
    };
}

