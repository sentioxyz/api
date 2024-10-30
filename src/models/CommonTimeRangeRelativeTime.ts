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
/**
 * 
 * @export
 * @interface CommonTimeRangeRelativeTime
 */
export interface CommonTimeRangeRelativeTime {
    /**
     * 
     * @type {string}
     * @memberof CommonTimeRangeRelativeTime
     */
    unit?: string;
    /**
     * 
     * @type {number}
     * @memberof CommonTimeRangeRelativeTime
     */
    value?: number;
    /**
     * 
     * @type {string}
     * @memberof CommonTimeRangeRelativeTime
     */
    align?: string;
}

/**
 * Check if a given object implements the CommonTimeRangeRelativeTime interface.
 */
export function instanceOfCommonTimeRangeRelativeTime(value: object): boolean {
    return true;
}

export function CommonTimeRangeRelativeTimeFromJSON(json: any): CommonTimeRangeRelativeTime {
    return CommonTimeRangeRelativeTimeFromJSONTyped(json, false);
}

export function CommonTimeRangeRelativeTimeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonTimeRangeRelativeTime {
    if (json == null) {
        return json;
    }
    return {
        
        'unit': json['unit'] == null ? undefined : json['unit'],
        'value': json['value'] == null ? undefined : json['value'],
        'align': json['align'] == null ? undefined : json['align'],
    };
}

export function CommonTimeRangeRelativeTimeToJSON(value?: CommonTimeRangeRelativeTime | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'unit': value['unit'],
        'value': value['value'],
        'align': value['align'],
    };
}

