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
    let isInstance = true;

    return isInstance;
}

export function CommonDurationFromJSON(json: any): CommonDuration {
    return CommonDurationFromJSONTyped(json, false);
}

export function CommonDurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonDuration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
        'unit': !exists(json, 'unit') ? undefined : json['unit'],
    };
}

export function CommonDurationToJSON(value?: CommonDuration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'unit': value.unit,
    };
}

