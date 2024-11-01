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
import type { CommonSegmentParameter } from './CommonSegmentParameter.js';
import {
    CommonSegmentParameterFromJSON,
    CommonSegmentParameterFromJSONTyped,
    CommonSegmentParameterToJSON,
    CommonSegmentParameterToJSONTyped,
} from './CommonSegmentParameter.js';

/**
 * 
 * @export
 * @interface CommonRetentionMatrixSample
 */
export interface CommonRetentionMatrixSample {
    /**
     * 
     * @type {Date}
     * @memberof CommonRetentionMatrixSample
     */
    time?: Date;
    /**
     * 
     * @type {CommonSegmentParameter}
     * @memberof CommonRetentionMatrixSample
     */
    segmentParameter?: CommonSegmentParameter;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof CommonRetentionMatrixSample
     */
    labels?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof CommonRetentionMatrixSample
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof CommonRetentionMatrixSample
     */
    counts?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof CommonRetentionMatrixSample
     */
    rates?: Array<number>;
}

/**
 * Check if a given object implements the CommonRetentionMatrixSample interface.
 */
export function instanceOfCommonRetentionMatrixSample(value: object): value is CommonRetentionMatrixSample {
    return true;
}

export function CommonRetentionMatrixSampleFromJSON(json: any): CommonRetentionMatrixSample {
    return CommonRetentionMatrixSampleFromJSONTyped(json, false);
}

export function CommonRetentionMatrixSampleFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonRetentionMatrixSample {
    if (json == null) {
        return json;
    }
    return {
        
        'time': json['time'] == null ? undefined : (new Date(json['time'])),
        'segmentParameter': json['segmentParameter'] == null ? undefined : CommonSegmentParameterFromJSON(json['segmentParameter']),
        'labels': json['labels'] == null ? undefined : json['labels'],
        'totalCount': json['totalCount'] == null ? undefined : json['totalCount'],
        'counts': json['counts'] == null ? undefined : json['counts'],
        'rates': json['rates'] == null ? undefined : json['rates'],
    };
}

  export function CommonRetentionMatrixSampleToJSON(json: any): CommonRetentionMatrixSample {
      return CommonRetentionMatrixSampleToJSONTyped(json, false);
  }

  export function CommonRetentionMatrixSampleToJSONTyped(value?: CommonRetentionMatrixSample | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'time': value['time'] == null ? undefined : ((value['time']).toISOString()),
        'segmentParameter': CommonSegmentParameterToJSON(value['segmentParameter']),
        'labels': value['labels'],
        'totalCount': value['totalCount'],
        'counts': value['counts'],
        'rates': value['rates'],
    };
}

