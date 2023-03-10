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
/**
 * 
 * @export
 * @interface MetricsServiceMetricsQueryResponseValue
 */
export interface MetricsServiceMetricsQueryResponseValue {
    /**
     * 
     * @type {string}
     * @memberof MetricsServiceMetricsQueryResponseValue
     */
    timestamp?: string;
    /**
     * 
     * @type {number}
     * @memberof MetricsServiceMetricsQueryResponseValue
     */
    value?: number;
}

/**
 * Check if a given object implements the MetricsServiceMetricsQueryResponseValue interface.
 */
export function instanceOfMetricsServiceMetricsQueryResponseValue(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MetricsServiceMetricsQueryResponseValueFromJSON(json: any): MetricsServiceMetricsQueryResponseValue {
    return MetricsServiceMetricsQueryResponseValueFromJSONTyped(json, false);
}

export function MetricsServiceMetricsQueryResponseValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetricsServiceMetricsQueryResponseValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'timestamp': !exists(json, 'timestamp') ? undefined : json['timestamp'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function MetricsServiceMetricsQueryResponseValueToJSON(value?: MetricsServiceMetricsQueryResponseValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'timestamp': value.timestamp,
        'value': value.value,
    };
}

