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
    let isInstance = true;

    return isInstance;
}

export function WebServiceChartConfigYAxisConfigFromJSON(json: any): WebServiceChartConfigYAxisConfig {
    return WebServiceChartConfigYAxisConfigFromJSONTyped(json, false);
}

export function WebServiceChartConfigYAxisConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceChartConfigYAxisConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'min': !exists(json, 'min') ? undefined : json['min'],
        'max': !exists(json, 'max') ? undefined : json['max'],
        'scale': !exists(json, 'scale') ? undefined : json['scale'],
        'stacked': !exists(json, 'stacked') ? undefined : json['stacked'],
    };
}

export function WebServiceChartConfigYAxisConfigToJSON(value?: WebServiceChartConfigYAxisConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'min': value.min,
        'max': value.max,
        'scale': value.scale,
        'stacked': value.stacked,
    };
}

