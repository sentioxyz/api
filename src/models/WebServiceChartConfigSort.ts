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
import type { WebServiceChartConfigSortBy } from './WebServiceChartConfigSortBy.js';
import {
    WebServiceChartConfigSortByFromJSON,
    WebServiceChartConfigSortByFromJSONTyped,
    WebServiceChartConfigSortByToJSON,
    WebServiceChartConfigSortByToJSONTyped,
} from './WebServiceChartConfigSortBy.js';

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
export function instanceOfWebServiceChartConfigSort(value: object): value is WebServiceChartConfigSort {
    return true;
}

export function WebServiceChartConfigSortFromJSON(json: any): WebServiceChartConfigSort {
    return WebServiceChartConfigSortFromJSONTyped(json, false);
}

export function WebServiceChartConfigSortFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceChartConfigSort {
    if (json == null) {
        return json;
    }
    return {
        
        'sortBy': json['sortBy'] == null ? undefined : WebServiceChartConfigSortByFromJSON(json['sortBy']),
        'orderDesc': json['orderDesc'] == null ? undefined : json['orderDesc'],
    };
}

  export function WebServiceChartConfigSortToJSON(json: any): WebServiceChartConfigSort {
      return WebServiceChartConfigSortToJSONTyped(json, false);
  }

  export function WebServiceChartConfigSortToJSONTyped(value?: WebServiceChartConfigSort | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'sortBy': WebServiceChartConfigSortByToJSON(value['sortBy']),
        'orderDesc': value['orderDesc'],
    };
}

