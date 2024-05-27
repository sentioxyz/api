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
import type { CommonRetentionQuery } from './CommonRetentionQuery';
import {
    CommonRetentionQueryFromJSON,
    CommonRetentionQueryFromJSONTyped,
    CommonRetentionQueryToJSON,
} from './CommonRetentionQuery';
import type { CommonTimeRangeLite } from './CommonTimeRangeLite';
import {
    CommonTimeRangeLiteFromJSON,
    CommonTimeRangeLiteFromJSONTyped,
    CommonTimeRangeLiteToJSON,
} from './CommonTimeRangeLite';

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
export function instanceOfInsightsServiceInsightsServiceRetentionBody(value: object): boolean {
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

export function InsightsServiceInsightsServiceRetentionBodyToJSON(value?: InsightsServiceInsightsServiceRetentionBody | null): any {
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

