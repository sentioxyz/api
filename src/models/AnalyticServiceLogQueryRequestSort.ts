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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AnalyticServiceLogQueryRequestSort
 */
export interface AnalyticServiceLogQueryRequestSort {
    /**
     * 
     * @type {string}
     * @memberof AnalyticServiceLogQueryRequestSort
     */
    field?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AnalyticServiceLogQueryRequestSort
     */
    desc?: boolean;
}

/**
 * Check if a given object implements the AnalyticServiceLogQueryRequestSort interface.
 */
export function instanceOfAnalyticServiceLogQueryRequestSort(value: object): boolean {
    return true;
}

export function AnalyticServiceLogQueryRequestSortFromJSON(json: any): AnalyticServiceLogQueryRequestSort {
    return AnalyticServiceLogQueryRequestSortFromJSONTyped(json, false);
}

export function AnalyticServiceLogQueryRequestSortFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticServiceLogQueryRequestSort {
    if (json == null) {
        return json;
    }
    return {
        
        'field': json['field'] == null ? undefined : json['field'],
        'desc': json['desc'] == null ? undefined : json['desc'],
    };
}

export function AnalyticServiceLogQueryRequestSortToJSON(value?: AnalyticServiceLogQueryRequestSort | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'field': value['field'],
        'desc': value['desc'],
    };
}

