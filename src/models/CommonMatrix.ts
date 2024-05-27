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
import type { CommonMatrixSample } from './CommonMatrixSample';
import {
    CommonMatrixSampleFromJSON,
    CommonMatrixSampleFromJSONTyped,
    CommonMatrixSampleToJSON,
} from './CommonMatrixSample';

/**
 * 
 * @export
 * @interface CommonMatrix
 */
export interface CommonMatrix {
    /**
     * 
     * @type {Array<CommonMatrixSample>}
     * @memberof CommonMatrix
     */
    samples?: Array<CommonMatrixSample>;
    /**
     * 
     * @type {number}
     * @memberof CommonMatrix
     */
    totalSamples?: number;
}

/**
 * Check if a given object implements the CommonMatrix interface.
 */
export function instanceOfCommonMatrix(value: object): boolean {
    return true;
}

export function CommonMatrixFromJSON(json: any): CommonMatrix {
    return CommonMatrixFromJSONTyped(json, false);
}

export function CommonMatrixFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonMatrix {
    if (json == null) {
        return json;
    }
    return {
        
        'samples': json['samples'] == null ? undefined : ((json['samples'] as Array<any>).map(CommonMatrixSampleFromJSON)),
        'totalSamples': json['totalSamples'] == null ? undefined : json['totalSamples'],
    };
}

export function CommonMatrixToJSON(value?: CommonMatrix | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'samples': value['samples'] == null ? undefined : ((value['samples'] as Array<any>).map(CommonMatrixSampleToJSON)),
        'totalSamples': value['totalSamples'],
    };
}

