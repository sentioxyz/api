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
import type { CommonSelectorOperatorType } from './CommonSelectorOperatorType.js';
import {
    CommonSelectorOperatorTypeFromJSON,
    CommonSelectorOperatorTypeFromJSONTyped,
    CommonSelectorOperatorTypeToJSON,
    CommonSelectorOperatorTypeToJSONTyped,
} from './CommonSelectorOperatorType.js';
import type { CommonAny } from './CommonAny.js';
import {
    CommonAnyFromJSON,
    CommonAnyFromJSONTyped,
    CommonAnyToJSON,
    CommonAnyToJSONTyped,
} from './CommonAny.js';

/**
 * 
 * @export
 * @interface CommonSelector
 */
export interface CommonSelector {
    /**
     * 
     * @type {string}
     * @memberof CommonSelector
     */
    key?: string;
    /**
     * 
     * @type {CommonSelectorOperatorType}
     * @memberof CommonSelector
     */
    operator?: CommonSelectorOperatorType;
    /**
     * 
     * @type {Array<CommonAny>}
     * @memberof CommonSelector
     */
    value?: Array<CommonAny>;
}



/**
 * Check if a given object implements the CommonSelector interface.
 */
export function instanceOfCommonSelector(value: object): value is CommonSelector {
    return true;
}

export function CommonSelectorFromJSON(json: any): CommonSelector {
    return CommonSelectorFromJSONTyped(json, false);
}

export function CommonSelectorFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonSelector {
    if (json == null) {
        return json;
    }
    return {
        
        'key': json['key'] == null ? undefined : json['key'],
        'operator': json['operator'] == null ? undefined : CommonSelectorOperatorTypeFromJSON(json['operator']),
        'value': json['value'] == null ? undefined : ((json['value'] as Array<any>).map(CommonAnyFromJSON)),
    };
}

  export function CommonSelectorToJSON(json: any): CommonSelector {
      return CommonSelectorToJSONTyped(json, false);
  }

  export function CommonSelectorToJSONTyped(value?: CommonSelector | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'key': value['key'],
        'operator': CommonSelectorOperatorTypeToJSON(value['operator']),
        'value': value['value'] == null ? undefined : ((value['value'] as Array<any>).map(CommonAnyToJSON)),
    };
}

