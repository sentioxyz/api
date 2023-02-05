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
import type { WebServiceChartConfigSortBy } from './WebServiceChartConfigSortBy';
import {
    WebServiceChartConfigSortByFromJSON,
    WebServiceChartConfigSortByFromJSONTyped,
    WebServiceChartConfigSortByToJSON,
} from './WebServiceChartConfigSortBy';

/**
 * 
 * @export
 * @interface WebServiceChartConfigSort
 */
export interface WebServiceChartConfigSort {
    /**
     * 
     * @type {WebServiceChartConfigSortBy}
     * @memberof WebServiceChartConfigSort
     */
    sortBy?: WebServiceChartConfigSortBy;
    /**
     * 
     * @type {boolean}
     * @memberof WebServiceChartConfigSort
     */
    orderDesc?: boolean;
}

/**
 * Check if a given object implements the WebServiceChartConfigSort interface.
 */
export function instanceOfWebServiceChartConfigSort(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WebServiceChartConfigSortFromJSON(json: any): WebServiceChartConfigSort {
    return WebServiceChartConfigSortFromJSONTyped(json, false);
}

export function WebServiceChartConfigSortFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceChartConfigSort {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sortBy': !exists(json, 'sortBy') ? undefined : WebServiceChartConfigSortByFromJSON(json['sortBy']),
        'orderDesc': !exists(json, 'orderDesc') ? undefined : json['orderDesc'],
    };
}

export function WebServiceChartConfigSortToJSON(value?: WebServiceChartConfigSort | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sortBy': WebServiceChartConfigSortByToJSON(value.sortBy),
        'orderDesc': value.orderDesc,
    };
}

