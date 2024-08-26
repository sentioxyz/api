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
 * @interface WebServiceChartConfigColorTheme
 */
export interface WebServiceChartConfigColorTheme {
    /**
     * 
     * @type {string}
     * @memberof WebServiceChartConfigColorTheme
     */
    textColor?: string;
    /**
     * 
     * @type {string}
     * @memberof WebServiceChartConfigColorTheme
     */
    backgroundColor?: string;
    /**
     * 
     * @type {string}
     * @memberof WebServiceChartConfigColorTheme
     */
    themeType?: string;
}

/**
 * Check if a given object implements the WebServiceChartConfigColorTheme interface.
 */
export function instanceOfWebServiceChartConfigColorTheme(value: object): boolean {
    return true;
}

export function WebServiceChartConfigColorThemeFromJSON(json: any): WebServiceChartConfigColorTheme {
    return WebServiceChartConfigColorThemeFromJSONTyped(json, false);
}

export function WebServiceChartConfigColorThemeFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceChartConfigColorTheme {
    if (json == null) {
        return json;
    }
    return {
        
        'textColor': json['textColor'] == null ? undefined : json['textColor'],
        'backgroundColor': json['backgroundColor'] == null ? undefined : json['backgroundColor'],
        'themeType': json['themeType'] == null ? undefined : json['themeType'],
    };
}

export function WebServiceChartConfigColorThemeToJSON(value?: WebServiceChartConfigColorTheme | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'textColor': value['textColor'],
        'backgroundColor': value['backgroundColor'],
        'themeType': value['themeType'],
    };
}
