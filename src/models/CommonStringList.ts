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
/**
 * 
 * @export
 * @interface CommonStringList
 */
export interface CommonStringList {
    /**
     * 
     * @type {Array<string>}
     * @memberof CommonStringList
     */
    values?: Array<string>;
}

/**
 * Check if a given object implements the CommonStringList interface.
 */
export function instanceOfCommonStringList(value: object): value is CommonStringList {
    return true;
}

export function CommonStringListFromJSON(json: any): CommonStringList {
    return CommonStringListFromJSONTyped(json, false);
}

export function CommonStringListFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonStringList {
    if (json == null) {
        return json;
    }
    return {
        
        'values': json['values'] == null ? undefined : json['values'],
    };
}

  export function CommonStringListToJSON(json: any): CommonStringList {
      return CommonStringListToJSONTyped(json, false);
  }

  export function CommonStringListToJSONTyped(value?: CommonStringList | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'values': value['values'],
    };
}

