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
} from './CommonEventLogConfig.js';
import type { WebServiceEventLogsConfigTimeRangeOverride } from './WebServiceEventLogsConfigTimeRangeOverride.js';
import {
    WebServiceEventLogsConfigTimeRangeOverrideFromJSON,
    WebServiceEventLogsConfigTimeRangeOverrideFromJSONTyped,
    WebServiceEventLogsConfigTimeRangeOverrideToJSON,
} from './WebServiceEventLogsConfigTimeRangeOverride.js';

/**
 * 
 * @export
 * @interface WebServiceEventLogsConfig
 */
export interface WebServiceEventLogsConfig {
    /**
     * 
     * @type {CommonEventLogConfig}
     * @memberof WebServiceEventLogsConfig
     */
    columnsConfig?: CommonEventLogConfig;
    /**
     * 
     * @type {WebServiceEventLogsConfigTimeRangeOverride}
     * @memberof WebServiceEventLogsConfig
     */
    timeRangeOverride?: WebServiceEventLogsConfigTimeRangeOverride;
    /**
     * 
     * @type {string}
     * @memberof WebServiceEventLogsConfig
     */
    query?: string;
    /**
     * 
     * @type {string}
     * @memberof WebServiceEventLogsConfig
     */
    sourceName?: string;
}

/**
 * Check if a given object implements the WebServiceEventLogsConfig interface.
 */
export function instanceOfWebServiceEventLogsConfig(value: object): boolean {
    return true;
}

export function WebServiceEventLogsConfigFromJSON(json: any): WebServiceEventLogsConfig {
    return WebServiceEventLogsConfigFromJSONTyped(json, false);
}

export function WebServiceEventLogsConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceEventLogsConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'columnsConfig': json['columnsConfig'] == null ? undefined : CommonEventLogConfigFromJSON(json['columnsConfig']),
        'timeRangeOverride': json['timeRangeOverride'] == null ? undefined : WebServiceEventLogsConfigTimeRangeOverrideFromJSON(json['timeRangeOverride']),
        'query': json['query'] == null ? undefined : json['query'],
        'sourceName': json['sourceName'] == null ? undefined : json['sourceName'],
    };
}

export function WebServiceEventLogsConfigToJSON(value?: WebServiceEventLogsConfig | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'columnsConfig': CommonEventLogConfigToJSON(value['columnsConfig']),
        'timeRangeOverride': WebServiceEventLogsConfigTimeRangeOverrideToJSON(value['timeRangeOverride']),
        'query': value['query'],
        'sourceName': value['sourceName'],
    };
}

