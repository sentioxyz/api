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
import type { CommonSegmentationQueryAggregationAggregateProperties } from './CommonSegmentationQueryAggregationAggregateProperties.js';
import {
    CommonSegmentationQueryAggregationAggregatePropertiesFromJSON,
    CommonSegmentationQueryAggregationAggregatePropertiesFromJSONTyped,
    CommonSegmentationQueryAggregationAggregatePropertiesToJSON,
    CommonSegmentationQueryAggregationAggregatePropertiesToJSONTyped,
} from './CommonSegmentationQueryAggregationAggregateProperties.js';
import type { CommonSegmentationQueryAggregationCountUnique } from './CommonSegmentationQueryAggregationCountUnique.js';
import {
    CommonSegmentationQueryAggregationCountUniqueFromJSON,
    CommonSegmentationQueryAggregationCountUniqueFromJSONTyped,
    CommonSegmentationQueryAggregationCountUniqueToJSON,
    CommonSegmentationQueryAggregationCountUniqueToJSONTyped,
} from './CommonSegmentationQueryAggregationCountUnique.js';

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
export function instanceOfCommonSegmentationQueryAggregation(value: object): value is CommonSegmentationQueryAggregation {
    return true;
}

export function CommonSegmentationQueryAggregationFromJSON(json: any): CommonSegmentationQueryAggregation {
    return CommonSegmentationQueryAggregationFromJSONTyped(json, false);
}

export function CommonSegmentationQueryAggregationFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonSegmentationQueryAggregation {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['total'] == null ? undefined : json['total'],
        'unique': json['unique'] == null ? undefined : json['unique'],
        'countUnique': json['countUnique'] == null ? undefined : CommonSegmentationQueryAggregationCountUniqueFromJSON(json['countUnique']),
        'aggregateProperties': json['aggregateProperties'] == null ? undefined : CommonSegmentationQueryAggregationAggregatePropertiesFromJSON(json['aggregateProperties']),
    };
}

  export function CommonSegmentationQueryAggregationToJSON(json: any): CommonSegmentationQueryAggregation {
      return CommonSegmentationQueryAggregationToJSONTyped(json, false);
  }

  export function CommonSegmentationQueryAggregationToJSONTyped(value?: CommonSegmentationQueryAggregation | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'total': value['total'],
        'unique': value['unique'],
        'countUnique': CommonSegmentationQueryAggregationCountUniqueToJSON(value['countUnique']),
        'aggregateProperties': CommonSegmentationQueryAggregationAggregatePropertiesToJSON(value['aggregateProperties']),
    };
}

