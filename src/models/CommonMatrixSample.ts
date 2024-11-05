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
import type { CommonMatrixMetric } from './CommonMatrixMetric.js';
import {
    CommonMatrixMetricFromJSON,
    CommonMatrixMetricFromJSONTyped,
    CommonMatrixMetricToJSON,
    CommonMatrixMetricToJSONTyped,
} from './CommonMatrixMetric.js';
import type { CommonMatrixValue } from './CommonMatrixValue.js';
import {
    CommonMatrixValueFromJSON,
    CommonMatrixValueFromJSONTyped,
    CommonMatrixValueToJSON,
    CommonMatrixValueToJSONTyped,
} from './CommonMatrixValue.js';

/**
 * 
 * @export
 * @interface CommonMatrixSample
 */
export interface CommonMatrixSample {
    /**
     * 
     * @type {CommonMatrixMetric}
     * @memberof CommonMatrixSample
     */
    metric?: CommonMatrixMetric;
    /**
     * 
     * @type {Array<CommonMatrixValue>}
     * @memberof CommonMatrixSample
     */
    values?: Array<CommonMatrixValue>;
}

/**
 * Check if a given object implements the CommonMatrixSample interface.
 */
export function instanceOfCommonMatrixSample(value: object): value is CommonMatrixSample {
    return true;
}

export function CommonMatrixSampleFromJSON(json: any): CommonMatrixSample {
    return CommonMatrixSampleFromJSONTyped(json, false);
}

export function CommonMatrixSampleFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonMatrixSample {
    if (json == null) {
        return json;
    }
    return {
        
        'metric': json['metric'] == null ? undefined : CommonMatrixMetricFromJSON(json['metric']),
        'values': json['values'] == null ? undefined : ((json['values'] as Array<any>).map(CommonMatrixValueFromJSON)),
    };
}

  export function CommonMatrixSampleToJSON(json: any): CommonMatrixSample {
      return CommonMatrixSampleToJSONTyped(json, false);
  }

  export function CommonMatrixSampleToJSONTyped(value?: CommonMatrixSample | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'metric': CommonMatrixMetricToJSON(value['metric']),
        'values': value['values'] == null ? undefined : ((value['values'] as Array<any>).map(CommonMatrixValueToJSON)),
    };
}
