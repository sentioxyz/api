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
 * start and end time of the time range, Find more: https://docs.sentio.xyz/docs/data-api#time-range-configuration-guide
 * @export
 * @interface CommonTimeRangeLite
 */
export interface CommonTimeRangeLite {
    /**
     * 
     * @type {string}
     * @memberof CommonTimeRangeLite
     */
    start: string;
    /**
     * 
     * @type {string}
     * @memberof CommonTimeRangeLite
     */
    end: string;
    /**
     * 
     * @type {number}
     * @memberof CommonTimeRangeLite
     */
    step: number;
    /**
     * 
     * @type {string}
     * @memberof CommonTimeRangeLite
     */
    timezone?: string;
}

/**
 * Check if a given object implements the CommonTimeRangeLite interface.
 */
export function instanceOfCommonTimeRangeLite(value: object): boolean {
    if (!('start' in value)) return false;
    if (!('end' in value)) return false;
    if (!('step' in value)) return false;
    return true;
}

export function CommonTimeRangeLiteFromJSON(json: any): CommonTimeRangeLite {
    return CommonTimeRangeLiteFromJSONTyped(json, false);
}

export function CommonTimeRangeLiteFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonTimeRangeLite {
    if (json == null) {
        return json;
    }
    return {
        
        'start': json['start'],
        'end': json['end'],
        'step': json['step'],
        'timezone': json['timezone'] == null ? undefined : json['timezone'],
    };
}

export function CommonTimeRangeLiteToJSON(value?: CommonTimeRangeLite | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'start': value['start'],
        'end': value['end'],
        'step': value['step'],
        'timezone': value['timezone'],
    };
}

