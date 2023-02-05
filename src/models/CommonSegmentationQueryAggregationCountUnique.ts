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

/**
 * 
 * @export
 * @interface CommonSegmentationQueryAggregationCountUnique
 */
export interface CommonSegmentationQueryAggregationCountUnique {
    /**
     * 
     * @type {CommonDuration}
     * @memberof CommonSegmentationQueryAggregationCountUnique
     */
    duration?: CommonDuration;
}

/**
 * Check if a given object implements the CommonSegmentationQueryAggregationCountUnique interface.
 */
export function instanceOfCommonSegmentationQueryAggregationCountUnique(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommonSegmentationQueryAggregationCountUniqueFromJSON(json: any): CommonSegmentationQueryAggregationCountUnique {
    return CommonSegmentationQueryAggregationCountUniqueFromJSONTyped(json, false);
}

export function CommonSegmentationQueryAggregationCountUniqueFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonSegmentationQueryAggregationCountUnique {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'duration': !exists(json, 'duration') ? undefined : CommonDurationFromJSON(json['duration']),
    };
}

export function CommonSegmentationQueryAggregationCountUniqueToJSON(value?: CommonSegmentationQueryAggregationCountUnique | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'duration': CommonDurationToJSON(value.duration),
    };
}

