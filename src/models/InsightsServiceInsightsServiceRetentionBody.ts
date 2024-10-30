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
import type { CommonRetentionQuery } from './CommonRetentionQuery.js';
import {
    CommonRetentionQueryFromJSON,
    CommonRetentionQueryFromJSONTyped,
    CommonRetentionQueryToJSON,
    CommonRetentionQueryToJSONTyped,
} from './CommonRetentionQuery.js';
import type { CommonTimeRangeLite } from './CommonTimeRangeLite.js';
import {
    CommonTimeRangeLiteFromJSON,
    CommonTimeRangeLiteFromJSONTyped,
    CommonTimeRangeLiteToJSON,
    CommonTimeRangeLiteToJSONTyped,
} from './CommonTimeRangeLite.js';

/**
 * 
 * @export
 * @interface InsightsServiceInsightsServiceRetentionBody
 */
export interface InsightsServiceInsightsServiceRetentionBody {
    /**
     * 
     * @type {string}
     * @memberof InsightsServiceInsightsServiceRetentionBody
     */
    projectId?: string;
    /**
     * 
     * @type {number}
     * @memberof InsightsServiceInsightsServiceRetentionBody
     */
    version?: number;
    /**
     * 
     * @type {CommonTimeRangeLite}
     * @memberof InsightsServiceInsightsServiceRetentionBody
     */
    timeRange?: CommonTimeRangeLite;
    /**
     * 
     * @type {CommonRetentionQuery}
     * @memberof InsightsServiceInsightsServiceRetentionBody
     */
    query?: CommonRetentionQuery;
}

/**
 * Check if a given object implements the InsightsServiceInsightsServiceRetentionBody interface.
 */
export function instanceOfInsightsServiceInsightsServiceRetentionBody(value: object): value is InsightsServiceInsightsServiceRetentionBody {
    return true;
}

export function InsightsServiceInsightsServiceRetentionBodyFromJSON(json: any): InsightsServiceInsightsServiceRetentionBody {
    return InsightsServiceInsightsServiceRetentionBodyFromJSONTyped(json, false);
}

export function InsightsServiceInsightsServiceRetentionBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): InsightsServiceInsightsServiceRetentionBody {
    if (json == null) {
        return json;
    }
    return {
        
        'projectId': json['projectId'] == null ? undefined : json['projectId'],
        'version': json['version'] == null ? undefined : json['version'],
        'timeRange': json['timeRange'] == null ? undefined : CommonTimeRangeLiteFromJSON(json['timeRange']),
        'query': json['query'] == null ? undefined : CommonRetentionQueryFromJSON(json['query']),
    };
}

  export function InsightsServiceInsightsServiceRetentionBodyToJSON(json: any): InsightsServiceInsightsServiceRetentionBody {
      return InsightsServiceInsightsServiceRetentionBodyToJSONTyped(json, false);
  }

  export function InsightsServiceInsightsServiceRetentionBodyToJSONTyped(value?: InsightsServiceInsightsServiceRetentionBody | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'projectId': value['projectId'],
        'version': value['version'],
        'timeRange': CommonTimeRangeLiteToJSON(value['timeRange']),
        'query': CommonRetentionQueryToJSON(value['query']),
    };
}

