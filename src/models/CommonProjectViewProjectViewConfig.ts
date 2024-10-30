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
import type { CommonEventLogConfig } from './CommonEventLogConfig.js';
import {
    CommonEventLogConfigFromJSON,
    CommonEventLogConfigFromJSONTyped,
    CommonEventLogConfigToJSON,
    CommonEventLogConfigToJSONTyped,
} from './CommonEventLogConfig.js';

/**
 * 
 * @export
 * @interface CommonProjectViewProjectViewConfig
 */
export interface CommonProjectViewProjectViewConfig {
    /**
     * 
     * @type {CommonEventLogConfig}
     * @memberof CommonProjectViewProjectViewConfig
     */
    eventLog?: CommonEventLogConfig;
}

/**
 * Check if a given object implements the CommonProjectViewProjectViewConfig interface.
 */
export function instanceOfCommonProjectViewProjectViewConfig(value: object): value is CommonProjectViewProjectViewConfig {
    return true;
}

export function CommonProjectViewProjectViewConfigFromJSON(json: any): CommonProjectViewProjectViewConfig {
    return CommonProjectViewProjectViewConfigFromJSONTyped(json, false);
}

export function CommonProjectViewProjectViewConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonProjectViewProjectViewConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'eventLog': json['eventLog'] == null ? undefined : CommonEventLogConfigFromJSON(json['eventLog']),
    };
}

  export function CommonProjectViewProjectViewConfigToJSON(json: any): CommonProjectViewProjectViewConfig {
      return CommonProjectViewProjectViewConfigToJSONTyped(json, false);
  }

  export function CommonProjectViewProjectViewConfigToJSONTyped(value?: CommonProjectViewProjectViewConfig | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'eventLog': CommonEventLogConfigToJSON(value['eventLog']),
    };
}

