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
import type { CommonCachePolicy } from './CommonCachePolicy.js';
import {
    CommonCachePolicyFromJSON,
    CommonCachePolicyFromJSONTyped,
    CommonCachePolicyToJSON,
} from './CommonCachePolicy.js';
import type { CommonFormula } from './CommonFormula.js';
import {
    CommonFormulaFromJSON,
    CommonFormulaFromJSONTyped,
    CommonFormulaToJSON,
} from './CommonFormula.js';
import type { CommonTimeRangeLite } from './CommonTimeRangeLite.js';
import {
    CommonTimeRangeLiteFromJSON,
    CommonTimeRangeLiteFromJSONTyped,
    CommonTimeRangeLiteToJSON,
} from './CommonTimeRangeLite.js';
import type { InsightsServiceQueryRequestQuery } from './InsightsServiceQueryRequestQuery.js';
import {
    InsightsServiceQueryRequestQueryFromJSON,
    InsightsServiceQueryRequestQueryFromJSONTyped,
    InsightsServiceQueryRequestQueryToJSON,
} from './InsightsServiceQueryRequestQuery.js';

/**
 * 
 * @export
 * @interface InsightsServiceQueryRequest
 */
export interface InsightsServiceQueryRequest {
    /**
     * 
     * @type {string}
     * @memberof InsightsServiceQueryRequest
     */
    projectOwner?: string;
    /**
     * 
     * @type {string}
     * @memberof InsightsServiceQueryRequest
     */
    projectSlug?: string;
    /**
     * 
     * @type {string}
     * @memberof InsightsServiceQueryRequest
     */
    projectId?: string;
    /**
     * 
     * @type {number}
     * @memberof InsightsServiceQueryRequest
     */
    version?: number;
    /**
     * 
     * @type {CommonTimeRangeLite}
     * @memberof InsightsServiceQueryRequest
     */
    timeRange?: CommonTimeRangeLite;
    /**
     * 
     * @type {Array<InsightsServiceQueryRequestQuery>}
     * @memberof InsightsServiceQueryRequest
     */
    queries?: Array<InsightsServiceQueryRequestQuery>;
    /**
     * 
     * @type {Array<CommonFormula>}
     * @memberof InsightsServiceQueryRequest
     */
    formulas?: Array<CommonFormula>;
    /**
     * 
     * @type {number}
     * @memberof InsightsServiceQueryRequest
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof InsightsServiceQueryRequest
     */
    offset?: number;
    /**
     * 
     * @type {boolean}
     * @memberof InsightsServiceQueryRequest
     */
    bypassCache?: boolean;
    /**
     * 
     * @type {CommonCachePolicy}
     * @memberof InsightsServiceQueryRequest
     */
    cachePolicy?: CommonCachePolicy;
}

/**
 * Check if a given object implements the InsightsServiceQueryRequest interface.
 */
export function instanceOfInsightsServiceQueryRequest(value: object): boolean {
    return true;
}

export function InsightsServiceQueryRequestFromJSON(json: any): InsightsServiceQueryRequest {
    return InsightsServiceQueryRequestFromJSONTyped(json, false);
}

export function InsightsServiceQueryRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InsightsServiceQueryRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'projectOwner': json['projectOwner'] == null ? undefined : json['projectOwner'],
        'projectSlug': json['projectSlug'] == null ? undefined : json['projectSlug'],
        'projectId': json['projectId'] == null ? undefined : json['projectId'],
        'version': json['version'] == null ? undefined : json['version'],
        'timeRange': json['timeRange'] == null ? undefined : CommonTimeRangeLiteFromJSON(json['timeRange']),
        'queries': json['queries'] == null ? undefined : ((json['queries'] as Array<any>).map(InsightsServiceQueryRequestQueryFromJSON)),
        'formulas': json['formulas'] == null ? undefined : ((json['formulas'] as Array<any>).map(CommonFormulaFromJSON)),
        'limit': json['limit'] == null ? undefined : json['limit'],
        'offset': json['offset'] == null ? undefined : json['offset'],
        'bypassCache': json['bypassCache'] == null ? undefined : json['bypassCache'],
        'cachePolicy': json['cachePolicy'] == null ? undefined : CommonCachePolicyFromJSON(json['cachePolicy']),
    };
}

export function InsightsServiceQueryRequestToJSON(value?: InsightsServiceQueryRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'projectOwner': value['projectOwner'],
        'projectSlug': value['projectSlug'],
        'projectId': value['projectId'],
        'version': value['version'],
        'timeRange': CommonTimeRangeLiteToJSON(value['timeRange']),
        'queries': value['queries'] == null ? undefined : ((value['queries'] as Array<any>).map(InsightsServiceQueryRequestQueryToJSON)),
        'formulas': value['formulas'] == null ? undefined : ((value['formulas'] as Array<any>).map(CommonFormulaToJSON)),
        'limit': value['limit'],
        'offset': value['offset'],
        'bypassCache': value['bypassCache'],
        'cachePolicy': CommonCachePolicyToJSON(value['cachePolicy']),
    };
}
