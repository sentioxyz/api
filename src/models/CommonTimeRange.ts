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
import type { CommonDuration } from './CommonDuration';
import {
    CommonDurationFromJSON,
    CommonDurationFromJSONTyped,
    CommonDurationToJSON,
} from './CommonDuration';
import type { CommonTimeRangeTimeLike } from './CommonTimeRangeTimeLike';
import {
    CommonTimeRangeTimeLikeFromJSON,
    CommonTimeRangeTimeLikeFromJSONTyped,
    CommonTimeRangeTimeLikeToJSON,
} from './CommonTimeRangeTimeLike';

/**
 * 
 * @export
 * @interface CommonTimeRange
 */
export interface CommonTimeRange {
    /**
     * 
     * @type {CommonTimeRangeTimeLike}
     * @memberof CommonTimeRange
     */
    start?: CommonTimeRangeTimeLike;
    /**
     * 
     * @type {CommonTimeRangeTimeLike}
     * @memberof CommonTimeRange
     */
    end?: CommonTimeRangeTimeLike;
    /**
     * 
     * @type {string}
     * @memberof CommonTimeRange
     */
    step?: string;
    /**
     * 
     * @type {CommonDuration}
     * @memberof CommonTimeRange
     */
    interval?: CommonDuration;
    /**
     * 
     * @type {string}
     * @memberof CommonTimeRange
     */
    timezone?: string;
}

/**
 * Check if a given object implements the CommonTimeRange interface.
 */
export function instanceOfCommonTimeRange(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommonTimeRangeFromJSON(json: any): CommonTimeRange {
    return CommonTimeRangeFromJSONTyped(json, false);
}

export function CommonTimeRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonTimeRange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'start': !exists(json, 'start') ? undefined : CommonTimeRangeTimeLikeFromJSON(json['start']),
        'end': !exists(json, 'end') ? undefined : CommonTimeRangeTimeLikeFromJSON(json['end']),
        'step': !exists(json, 'step') ? undefined : json['step'],
        'interval': !exists(json, 'interval') ? undefined : CommonDurationFromJSON(json['interval']),
        'timezone': !exists(json, 'timezone') ? undefined : json['timezone'],
    };
}

export function CommonTimeRangeToJSON(value?: CommonTimeRange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'start': CommonTimeRangeTimeLikeToJSON(value.start),
        'end': CommonTimeRangeTimeLikeToJSON(value.end),
        'step': value.step,
        'interval': CommonDurationToJSON(value.interval),
        'timezone': value.timezone,
    };
}

