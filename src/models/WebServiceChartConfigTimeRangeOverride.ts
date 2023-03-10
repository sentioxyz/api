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
import type { CommonTimeRange } from './CommonTimeRange';
import {
    CommonTimeRangeFromJSON,
    CommonTimeRangeFromJSONTyped,
    CommonTimeRangeToJSON,
} from './CommonTimeRange';

/**
 * 
 * @export
 * @interface WebServiceChartConfigTimeRangeOverride
 */
export interface WebServiceChartConfigTimeRangeOverride {
    /**
     * 
     * @type {boolean}
     * @memberof WebServiceChartConfigTimeRangeOverride
     */
    enabled?: boolean;
    /**
     * 
     * @type {CommonTimeRange}
     * @memberof WebServiceChartConfigTimeRangeOverride
     */
    timeRange?: CommonTimeRange;
}

/**
 * Check if a given object implements the WebServiceChartConfigTimeRangeOverride interface.
 */
export function instanceOfWebServiceChartConfigTimeRangeOverride(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WebServiceChartConfigTimeRangeOverrideFromJSON(json: any): WebServiceChartConfigTimeRangeOverride {
    return WebServiceChartConfigTimeRangeOverrideFromJSONTyped(json, false);
}

export function WebServiceChartConfigTimeRangeOverrideFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceChartConfigTimeRangeOverride {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'timeRange': !exists(json, 'timeRange') ? undefined : CommonTimeRangeFromJSON(json['timeRange']),
    };
}

export function WebServiceChartConfigTimeRangeOverrideToJSON(value?: WebServiceChartConfigTimeRangeOverride | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enabled': value.enabled,
        'timeRange': CommonTimeRangeToJSON(value.timeRange),
    };
}

