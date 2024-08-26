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
 * @interface CommonDuration
 */
export interface CommonDuration {
    /**
     * 
     * @type {number}
     * @memberof CommonDuration
     */
    value?: number;
    /**
     * 
     * @type {string}
     * @memberof CommonDuration
     */
    unit?: string;
}

/**
 * Check if a given object implements the CommonDuration interface.
 */
export function instanceOfCommonDuration(value: object): boolean {
    return true;
}

export function CommonDurationFromJSON(json: any): CommonDuration {
    return CommonDurationFromJSONTyped(json, false);
}

export function CommonDurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonDuration {
    if (json == null) {
        return json;
    }
    return {
        
        'value': json['value'] == null ? undefined : json['value'],
        'unit': json['unit'] == null ? undefined : json['unit'],
    };
}

export function CommonDurationToJSON(value?: CommonDuration | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'value': value['value'],
        'unit': value['unit'],
    };
}
