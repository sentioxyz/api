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
import type { CommonCohortsFilterAggregationAggregatePropertiesAggregationType } from './CommonCohortsFilterAggregationAggregatePropertiesAggregationType.js';
import {
    CommonCohortsFilterAggregationAggregatePropertiesAggregationTypeFromJSON,
    CommonCohortsFilterAggregationAggregatePropertiesAggregationTypeFromJSONTyped,
    CommonCohortsFilterAggregationAggregatePropertiesAggregationTypeToJSON,
} from './CommonCohortsFilterAggregationAggregatePropertiesAggregationType.js';

/**
 * 
 * @export
 * @interface CommonCohortsFilterAggregationAggregateProperties
 */
export interface CommonCohortsFilterAggregationAggregateProperties {
    /**
     * 
     * @type {CommonCohortsFilterAggregationAggregatePropertiesAggregationType}
     * @memberof CommonCohortsFilterAggregationAggregateProperties
     */
    type?: CommonCohortsFilterAggregationAggregatePropertiesAggregationType;
    /**
     * 
     * @type {string}
     * @memberof CommonCohortsFilterAggregationAggregateProperties
     */
    propertyName?: string;
}

/**
 * Check if a given object implements the CommonCohortsFilterAggregationAggregateProperties interface.
 */
export function instanceOfCommonCohortsFilterAggregationAggregateProperties(value: object): boolean {
    return true;
}

export function CommonCohortsFilterAggregationAggregatePropertiesFromJSON(json: any): CommonCohortsFilterAggregationAggregateProperties {
    return CommonCohortsFilterAggregationAggregatePropertiesFromJSONTyped(json, false);
}

export function CommonCohortsFilterAggregationAggregatePropertiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonCohortsFilterAggregationAggregateProperties {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'] == null ? undefined : CommonCohortsFilterAggregationAggregatePropertiesAggregationTypeFromJSON(json['type']),
        'propertyName': json['propertyName'] == null ? undefined : json['propertyName'],
    };
}

export function CommonCohortsFilterAggregationAggregatePropertiesToJSON(value?: CommonCohortsFilterAggregationAggregateProperties | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': CommonCohortsFilterAggregationAggregatePropertiesAggregationTypeToJSON(value['type']),
        'propertyName': value['propertyName'],
    };
}
