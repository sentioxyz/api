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

import { mapValues } from '../runtime';
import type { CommonRetentionQueryFilterTimeFilter } from './CommonRetentionQueryFilterTimeFilter';
import {
    CommonRetentionQueryFilterTimeFilterFromJSON,
    CommonRetentionQueryFilterTimeFilterFromJSONTyped,
    CommonRetentionQueryFilterTimeFilterToJSON,
} from './CommonRetentionQueryFilterTimeFilter';
import type { CommonSelectorExpr } from './CommonSelectorExpr';
import {
    CommonSelectorExprFromJSON,
    CommonSelectorExprFromJSONTyped,
    CommonSelectorExprToJSON,
} from './CommonSelectorExpr';

/**
 * 
 * @export
 * @interface CommonRetentionQueryFilter
 */
export interface CommonRetentionQueryFilter {
    /**
     * 
     * @type {CommonSelectorExpr}
     * @memberof CommonRetentionQueryFilter
     */
    propertyFilter?: CommonSelectorExpr;
    /**
     * 
     * @type {CommonRetentionQueryFilterTimeFilter}
     * @memberof CommonRetentionQueryFilter
     */
    timeFilter?: CommonRetentionQueryFilterTimeFilter;
}

/**
 * Check if a given object implements the CommonRetentionQueryFilter interface.
 */
export function instanceOfCommonRetentionQueryFilter(value: object): boolean {
    return true;
}

export function CommonRetentionQueryFilterFromJSON(json: any): CommonRetentionQueryFilter {
    return CommonRetentionQueryFilterFromJSONTyped(json, false);
}

export function CommonRetentionQueryFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonRetentionQueryFilter {
    if (json == null) {
        return json;
    }
    return {
        
        'propertyFilter': json['propertyFilter'] == null ? undefined : CommonSelectorExprFromJSON(json['propertyFilter']),
        'timeFilter': json['timeFilter'] == null ? undefined : CommonRetentionQueryFilterTimeFilterFromJSON(json['timeFilter']),
    };
}

export function CommonRetentionQueryFilterToJSON(value?: CommonRetentionQueryFilter | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'propertyFilter': CommonSelectorExprToJSON(value['propertyFilter']),
        'timeFilter': CommonRetentionQueryFilterTimeFilterToJSON(value['timeFilter']),
    };
}

