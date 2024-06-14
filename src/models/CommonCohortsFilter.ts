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
import type { CommonCohortsFilterAggregation } from './CommonCohortsFilterAggregation.js';
import {
    CommonCohortsFilterAggregationFromJSON,
    CommonCohortsFilterAggregationFromJSONTyped,
    CommonCohortsFilterAggregationToJSON,
} from './CommonCohortsFilterAggregation.js';
import type { CommonSelectorExpr } from './CommonSelectorExpr.js';
import {
    CommonSelectorExprFromJSON,
    CommonSelectorExprFromJSONTyped,
    CommonSelectorExprToJSON,
} from './CommonSelectorExpr.js';
import type { CommonTimeRangeLite } from './CommonTimeRangeLite.js';
import {
    CommonTimeRangeLiteFromJSON,
    CommonTimeRangeLiteFromJSONTyped,
    CommonTimeRangeLiteToJSON,
} from './CommonTimeRangeLite.js';

/**
 * 
 * @export
 * @interface CommonCohortsFilter
 */
export interface CommonCohortsFilter {
    /**
     * 
     * @type {boolean}
     * @memberof CommonCohortsFilter
     */
    symbol?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CommonCohortsFilter
     */
    name?: string;
    /**
     * 
     * @type {CommonCohortsFilterAggregation}
     * @memberof CommonCohortsFilter
     */
    aggregation?: CommonCohortsFilterAggregation;
    /**
     * 
     * @type {CommonSelectorExpr}
     * @memberof CommonCohortsFilter
     */
    selectorExpr?: CommonSelectorExpr;
    /**
     * 
     * @type {CommonTimeRangeLite}
     * @memberof CommonCohortsFilter
     */
    timeRange?: CommonTimeRangeLite;
}

/**
 * Check if a given object implements the CommonCohortsFilter interface.
 */
export function instanceOfCommonCohortsFilter(value: object): boolean {
    return true;
}

export function CommonCohortsFilterFromJSON(json: any): CommonCohortsFilter {
    return CommonCohortsFilterFromJSONTyped(json, false);
}

export function CommonCohortsFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonCohortsFilter {
    if (json == null) {
        return json;
    }
    return {
        
        'symbol': json['symbol'] == null ? undefined : json['symbol'],
        'name': json['name'] == null ? undefined : json['name'],
        'aggregation': json['aggregation'] == null ? undefined : CommonCohortsFilterAggregationFromJSON(json['aggregation']),
        'selectorExpr': json['selectorExpr'] == null ? undefined : CommonSelectorExprFromJSON(json['selectorExpr']),
        'timeRange': json['timeRange'] == null ? undefined : CommonTimeRangeLiteFromJSON(json['timeRange']),
    };
}

export function CommonCohortsFilterToJSON(value?: CommonCohortsFilter | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'symbol': value['symbol'],
        'name': value['name'],
        'aggregation': CommonCohortsFilterAggregationToJSON(value['aggregation']),
        'selectorExpr': CommonSelectorExprToJSON(value['selectorExpr']),
        'timeRange': CommonTimeRangeLiteToJSON(value['timeRange']),
    };
}
