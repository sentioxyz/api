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
import type { CommonSegmentationQueryAggregationAggregatePropertiesAggregationType } from './CommonSegmentationQueryAggregationAggregatePropertiesAggregationType.js';
import {
    CommonSegmentationQueryAggregationAggregatePropertiesAggregationTypeFromJSON,
    CommonSegmentationQueryAggregationAggregatePropertiesAggregationTypeFromJSONTyped,
    CommonSegmentationQueryAggregationAggregatePropertiesAggregationTypeToJSON,
    CommonSegmentationQueryAggregationAggregatePropertiesAggregationTypeToJSONTyped,
} from './CommonSegmentationQueryAggregationAggregatePropertiesAggregationType.js';

/**
 * 
 * @export
 * @interface CommonSegmentationQueryAggregationAggregateProperties
 */
export interface CommonSegmentationQueryAggregationAggregateProperties {
    /**
     * 
     * @type {CommonSegmentationQueryAggregationAggregatePropertiesAggregationType}
     * @memberof CommonSegmentationQueryAggregationAggregateProperties
     */
    type?: CommonSegmentationQueryAggregationAggregatePropertiesAggregationType;
    /**
     * 
     * @type {string}
     * @memberof CommonSegmentationQueryAggregationAggregateProperties
     */
    propertyName?: string;
}



/**
 * Check if a given object implements the CommonSegmentationQueryAggregationAggregateProperties interface.
 */
export function instanceOfCommonSegmentationQueryAggregationAggregateProperties(value: object): value is CommonSegmentationQueryAggregationAggregateProperties {
    return true;
}

export function CommonSegmentationQueryAggregationAggregatePropertiesFromJSON(json: any): CommonSegmentationQueryAggregationAggregateProperties {
    return CommonSegmentationQueryAggregationAggregatePropertiesFromJSONTyped(json, false);
}

export function CommonSegmentationQueryAggregationAggregatePropertiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonSegmentationQueryAggregationAggregateProperties {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'] == null ? undefined : CommonSegmentationQueryAggregationAggregatePropertiesAggregationTypeFromJSON(json['type']),
        'propertyName': json['propertyName'] == null ? undefined : json['propertyName'],
    };
}

  export function CommonSegmentationQueryAggregationAggregatePropertiesToJSON(json: any): CommonSegmentationQueryAggregationAggregateProperties {
      return CommonSegmentationQueryAggregationAggregatePropertiesToJSONTyped(json, false);
  }

  export function CommonSegmentationQueryAggregationAggregatePropertiesToJSONTyped(value?: CommonSegmentationQueryAggregationAggregateProperties | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': CommonSegmentationQueryAggregationAggregatePropertiesAggregationTypeToJSON(value['type']),
        'propertyName': value['propertyName'],
    };
}

