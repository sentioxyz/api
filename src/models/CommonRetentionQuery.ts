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
import type { CommonSelectorExpr } from './CommonSelectorExpr.js';
import {
    CommonSelectorExprFromJSON,
    CommonSelectorExprFromJSONTyped,
    CommonSelectorExprToJSON,
    CommonSelectorExprToJSONTyped,
} from './CommonSelectorExpr.js';
import type { CommonSegmentParameter } from './CommonSegmentParameter.js';
import {
    CommonSegmentParameterFromJSON,
    CommonSegmentParameterFromJSONTyped,
    CommonSegmentParameterToJSON,
    CommonSegmentParameterToJSONTyped,
} from './CommonSegmentParameter.js';
import type { CommonRetentionQueryInterval } from './CommonRetentionQueryInterval.js';
import {
    CommonRetentionQueryIntervalFromJSON,
    CommonRetentionQueryIntervalFromJSONTyped,
    CommonRetentionQueryIntervalToJSON,
    CommonRetentionQueryIntervalToJSONTyped,
} from './CommonRetentionQueryInterval.js';
import type { CommonRetentionQueryCriteria } from './CommonRetentionQueryCriteria.js';
import {
    CommonRetentionQueryCriteriaFromJSON,
    CommonRetentionQueryCriteriaFromJSONTyped,
    CommonRetentionQueryCriteriaToJSON,
    CommonRetentionQueryCriteriaToJSONTyped,
} from './CommonRetentionQueryCriteria.js';
import type { CommonRetentionQueryResource } from './CommonRetentionQueryResource.js';
import {
    CommonRetentionQueryResourceFromJSON,
    CommonRetentionQueryResourceFromJSONTyped,
    CommonRetentionQueryResourceToJSON,
    CommonRetentionQueryResourceToJSONTyped,
} from './CommonRetentionQueryResource.js';

/**
 * 
 * @export
 * @interface CommonRetentionQuery
 */
export interface CommonRetentionQuery {
    /**
     * 
     * @type {Array<CommonRetentionQueryResource>}
     * @memberof CommonRetentionQuery
     */
    resources?: Array<CommonRetentionQueryResource>;
    /**
     * 
     * @type {CommonRetentionQueryCriteria}
     * @memberof CommonRetentionQuery
     */
    criteria?: CommonRetentionQueryCriteria;
    /**
     * 
     * @type {CommonRetentionQueryInterval}
     * @memberof CommonRetentionQuery
     */
    interval?: CommonRetentionQueryInterval;
    /**
     * 
     * @type {CommonSelectorExpr}
     * @memberof CommonRetentionQuery
     */
    selectorExpr?: CommonSelectorExpr;
    /**
     * 
     * @type {Array<string>}
     * @memberof CommonRetentionQuery
     */
    groupBy?: Array<string>;
    /**
     * 
     * @type {Array<CommonSegmentParameter>}
     * @memberof CommonRetentionQuery
     */
    segmentBy?: Array<CommonSegmentParameter>;
    /**
     * 
     * @type {number}
     * @memberof CommonRetentionQuery
     */
    windowSize?: number;
}



/**
 * Check if a given object implements the CommonRetentionQuery interface.
 */
export function instanceOfCommonRetentionQuery(value: object): value is CommonRetentionQuery {
    return true;
}

export function CommonRetentionQueryFromJSON(json: any): CommonRetentionQuery {
    return CommonRetentionQueryFromJSONTyped(json, false);
}

export function CommonRetentionQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonRetentionQuery {
    if (json == null) {
        return json;
    }
    return {
        
        'resources': json['resources'] == null ? undefined : ((json['resources'] as Array<any>).map(CommonRetentionQueryResourceFromJSON)),
        'criteria': json['criteria'] == null ? undefined : CommonRetentionQueryCriteriaFromJSON(json['criteria']),
        'interval': json['interval'] == null ? undefined : CommonRetentionQueryIntervalFromJSON(json['interval']),
        'selectorExpr': json['selectorExpr'] == null ? undefined : CommonSelectorExprFromJSON(json['selectorExpr']),
        'groupBy': json['groupBy'] == null ? undefined : json['groupBy'],
        'segmentBy': json['segmentBy'] == null ? undefined : ((json['segmentBy'] as Array<any>).map(CommonSegmentParameterFromJSON)),
        'windowSize': json['windowSize'] == null ? undefined : json['windowSize'],
    };
}

  export function CommonRetentionQueryToJSON(json: any): CommonRetentionQuery {
      return CommonRetentionQueryToJSONTyped(json, false);
  }

  export function CommonRetentionQueryToJSONTyped(value?: CommonRetentionQuery | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'resources': value['resources'] == null ? undefined : ((value['resources'] as Array<any>).map(CommonRetentionQueryResourceToJSON)),
        'criteria': CommonRetentionQueryCriteriaToJSON(value['criteria']),
        'interval': CommonRetentionQueryIntervalToJSON(value['interval']),
        'selectorExpr': CommonSelectorExprToJSON(value['selectorExpr']),
        'groupBy': value['groupBy'],
        'segmentBy': value['segmentBy'] == null ? undefined : ((value['segmentBy'] as Array<any>).map(CommonSegmentParameterToJSON)),
        'windowSize': value['windowSize'],
    };
}

