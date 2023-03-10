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
import type { CommonSegmentationQueryAggregationAggregateProperties } from './CommonSegmentationQueryAggregationAggregateProperties';
import {
    CommonSegmentationQueryAggregationAggregatePropertiesFromJSON,
    CommonSegmentationQueryAggregationAggregatePropertiesFromJSONTyped,
    CommonSegmentationQueryAggregationAggregatePropertiesToJSON,
} from './CommonSegmentationQueryAggregationAggregateProperties';
import type { CommonSegmentationQueryAggregationCountUnique } from './CommonSegmentationQueryAggregationCountUnique';
import {
    CommonSegmentationQueryAggregationCountUniqueFromJSON,
    CommonSegmentationQueryAggregationCountUniqueFromJSONTyped,
    CommonSegmentationQueryAggregationCountUniqueToJSON,
} from './CommonSegmentationQueryAggregationCountUnique';

/**
 * 
 * @export
 * @interface CommonSegmentationQueryAggregation
 */
export interface CommonSegmentationQueryAggregation {
    /**
     * 
     * @type {object}
     * @memberof CommonSegmentationQueryAggregation
     */
    total?: object;
    /**
     * 
     * @type {object}
     * @memberof CommonSegmentationQueryAggregation
     */
    unique?: object;
    /**
     * 
     * @type {CommonSegmentationQueryAggregationCountUnique}
     * @memberof CommonSegmentationQueryAggregation
     */
    countUnique?: CommonSegmentationQueryAggregationCountUnique;
    /**
     * 
     * @type {CommonSegmentationQueryAggregationAggregateProperties}
     * @memberof CommonSegmentationQueryAggregation
     */
    aggregateProperties?: CommonSegmentationQueryAggregationAggregateProperties;
}

/**
 * Check if a given object implements the CommonSegmentationQueryAggregation interface.
 */
export function instanceOfCommonSegmentationQueryAggregation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommonSegmentationQueryAggregationFromJSON(json: any): CommonSegmentationQueryAggregation {
    return CommonSegmentationQueryAggregationFromJSONTyped(json, false);
}

export function CommonSegmentationQueryAggregationFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonSegmentationQueryAggregation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'total': !exists(json, 'total') ? undefined : json['total'],
        'unique': !exists(json, 'unique') ? undefined : json['unique'],
        'countUnique': !exists(json, 'countUnique') ? undefined : CommonSegmentationQueryAggregationCountUniqueFromJSON(json['countUnique']),
        'aggregateProperties': !exists(json, 'aggregateProperties') ? undefined : CommonSegmentationQueryAggregationAggregatePropertiesFromJSON(json['aggregateProperties']),
    };
}

export function CommonSegmentationQueryAggregationToJSON(value?: CommonSegmentationQueryAggregation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'total': value.total,
        'unique': value.unique,
        'countUnique': CommonSegmentationQueryAggregationCountUniqueToJSON(value.countUnique),
        'aggregateProperties': CommonSegmentationQueryAggregationAggregatePropertiesToJSON(value.aggregateProperties),
    };
}

