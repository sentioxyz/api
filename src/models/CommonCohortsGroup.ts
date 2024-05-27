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
import type { CommonCohortsFilter } from './CommonCohortsFilter';
import {
    CommonCohortsFilterFromJSON,
    CommonCohortsFilterFromJSONTyped,
    CommonCohortsFilterToJSON,
} from './CommonCohortsFilter';
import type { CommonJoinOperator } from './CommonJoinOperator';
import {
    CommonJoinOperatorFromJSON,
    CommonJoinOperatorFromJSONTyped,
    CommonJoinOperatorToJSON,
} from './CommonJoinOperator';

/**
 * 
 * @export
 * @interface CommonCohortsGroup
 */
export interface CommonCohortsGroup {
    /**
     * 
     * @type {CommonJoinOperator}
     * @memberof CommonCohortsGroup
     */
    joinOperator?: CommonJoinOperator;
    /**
     * 
     * @type {Array<CommonCohortsFilter>}
     * @memberof CommonCohortsGroup
     */
    filters?: Array<CommonCohortsFilter>;
}

/**
 * Check if a given object implements the CommonCohortsGroup interface.
 */
export function instanceOfCommonCohortsGroup(value: object): boolean {
    return true;
}

export function CommonCohortsGroupFromJSON(json: any): CommonCohortsGroup {
    return CommonCohortsGroupFromJSONTyped(json, false);
}

export function CommonCohortsGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonCohortsGroup {
    if (json == null) {
        return json;
    }
    return {
        
        'joinOperator': json['joinOperator'] == null ? undefined : CommonJoinOperatorFromJSON(json['joinOperator']),
        'filters': json['filters'] == null ? undefined : ((json['filters'] as Array<any>).map(CommonCohortsFilterFromJSON)),
    };
}

export function CommonCohortsGroupToJSON(value?: CommonCohortsGroup | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'joinOperator': CommonJoinOperatorToJSON(value['joinOperator']),
        'filters': value['filters'] == null ? undefined : ((value['filters'] as Array<any>).map(CommonCohortsFilterToJSON)),
    };
}

