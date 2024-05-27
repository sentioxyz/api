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
/**
 * 
 * @export
 * @interface WebServiceChartConfigYAxisConfig
 */
export interface WebServiceChartConfigYAxisConfig {
    /**
     * 
     * @type {string}
     * @memberof WebServiceChartConfigYAxisConfig
     */
    min?: string;
    /**
     * 
     * @type {string}
     * @memberof WebServiceChartConfigYAxisConfig
     */
    max?: string;
    /**
     * 
     * @type {boolean}
     * @memberof WebServiceChartConfigYAxisConfig
     */
    scale?: boolean;
    /**
     * 
     * @type {string}
     * @memberof WebServiceChartConfigYAxisConfig
     */
    stacked?: string;
}

/**
 * Check if a given object implements the WebServiceChartConfigYAxisConfig interface.
 */
export function instanceOfWebServiceChartConfigYAxisConfig(value: object): boolean {
    return true;
}

export function WebServiceChartConfigYAxisConfigFromJSON(json: any): WebServiceChartConfigYAxisConfig {
    return WebServiceChartConfigYAxisConfigFromJSONTyped(json, false);
}

export function WebServiceChartConfigYAxisConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceChartConfigYAxisConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'min': json['min'] == null ? undefined : json['min'],
        'max': json['max'] == null ? undefined : json['max'],
        'scale': json['scale'] == null ? undefined : json['scale'],
        'stacked': json['stacked'] == null ? undefined : json['stacked'],
    };
}

export function WebServiceChartConfigYAxisConfigToJSON(value?: WebServiceChartConfigYAxisConfig | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'min': value['min'],
        'max': value['max'],
        'scale': value['scale'],
        'stacked': value['stacked'],
    };
}

