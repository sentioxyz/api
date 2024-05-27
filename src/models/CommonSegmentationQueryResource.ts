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
import type { CommonCohortsQuery } from './CommonCohortsQuery';
import {
    CommonCohortsQueryFromJSON,
    CommonCohortsQueryFromJSONTyped,
    CommonCohortsQueryToJSON,
} from './CommonCohortsQuery';
import type { CommonSegmentationQueryResourceType } from './CommonSegmentationQueryResourceType';
import {
    CommonSegmentationQueryResourceTypeFromJSON,
    CommonSegmentationQueryResourceTypeFromJSONTyped,
    CommonSegmentationQueryResourceTypeToJSON,
} from './CommonSegmentationQueryResourceType';

/**
 * 
 * @export
 * @interface CommonSegmentationQueryResource
 */
export interface CommonSegmentationQueryResource {
    /**
     * 
     * @type {string}
     * @memberof CommonSegmentationQueryResource
     */
    name?: string;
    /**
     * 
     * @type {CommonSegmentationQueryResourceType}
     * @memberof CommonSegmentationQueryResource
     */
    type?: CommonSegmentationQueryResourceType;
    /**
     * 
     * @type {string}
     * @memberof CommonSegmentationQueryResource
     */
    cohortsId?: string;
    /**
     * 
     * @type {CommonCohortsQuery}
     * @memberof CommonSegmentationQueryResource
     */
    cohortsQuery?: CommonCohortsQuery;
}

/**
 * Check if a given object implements the CommonSegmentationQueryResource interface.
 */
export function instanceOfCommonSegmentationQueryResource(value: object): boolean {
    return true;
}

export function CommonSegmentationQueryResourceFromJSON(json: any): CommonSegmentationQueryResource {
    return CommonSegmentationQueryResourceFromJSONTyped(json, false);
}

export function CommonSegmentationQueryResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonSegmentationQueryResource {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'type': json['type'] == null ? undefined : CommonSegmentationQueryResourceTypeFromJSON(json['type']),
        'cohortsId': json['cohortsId'] == null ? undefined : json['cohortsId'],
        'cohortsQuery': json['cohortsQuery'] == null ? undefined : CommonCohortsQueryFromJSON(json['cohortsQuery']),
    };
}

export function CommonSegmentationQueryResourceToJSON(value?: CommonSegmentationQueryResource | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'type': CommonSegmentationQueryResourceTypeToJSON(value['type']),
        'cohortsId': value['cohortsId'],
        'cohortsQuery': CommonCohortsQueryToJSON(value['cohortsQuery']),
    };
}

