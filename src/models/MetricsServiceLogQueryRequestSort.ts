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
 * @interface MetricsServiceLogQueryRequestSort
 */
export interface MetricsServiceLogQueryRequestSort {
    /**
     * 
     * @type {string}
     * @memberof MetricsServiceLogQueryRequestSort
     */
    field?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MetricsServiceLogQueryRequestSort
     */
    desc?: boolean;
}

/**
 * Check if a given object implements the MetricsServiceLogQueryRequestSort interface.
 */
export function instanceOfMetricsServiceLogQueryRequestSort(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MetricsServiceLogQueryRequestSortFromJSON(json: any): MetricsServiceLogQueryRequestSort {
    return MetricsServiceLogQueryRequestSortFromJSONTyped(json, false);
}

export function MetricsServiceLogQueryRequestSortFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetricsServiceLogQueryRequestSort {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'field': !exists(json, 'field') ? undefined : json['field'],
        'desc': !exists(json, 'desc') ? undefined : json['desc'],
    };
}

export function MetricsServiceLogQueryRequestSortToJSON(value?: MetricsServiceLogQueryRequestSort | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'field': value.field,
        'desc': value.desc,
    };
}

