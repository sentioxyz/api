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

import { exists, mapValues } from '../runtime';
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
}

/**
 * Check if a given object implements the CommonSegmentationQueryResource interface.
 */
export function instanceOfCommonSegmentationQueryResource(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommonSegmentationQueryResourceFromJSON(json: any): CommonSegmentationQueryResource {
    return CommonSegmentationQueryResourceFromJSONTyped(json, false);
}

export function CommonSegmentationQueryResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonSegmentationQueryResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'type': !exists(json, 'type') ? undefined : CommonSegmentationQueryResourceTypeFromJSON(json['type']),
    };
}

export function CommonSegmentationQueryResourceToJSON(value?: CommonSegmentationQueryResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'type': CommonSegmentationQueryResourceTypeToJSON(value.type),
    };
}

