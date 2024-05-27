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
import type { WebServiceChartConfigCalculation } from './WebServiceChartConfigCalculation';
import {
    WebServiceChartConfigCalculationFromJSON,
    WebServiceChartConfigCalculationFromJSONTyped,
    WebServiceChartConfigCalculationToJSON,
} from './WebServiceChartConfigCalculation';
import type { WebServiceChartConfigColorTheme } from './WebServiceChartConfigColorTheme';
import {
    WebServiceChartConfigColorThemeFromJSON,
    WebServiceChartConfigColorThemeFromJSONTyped,
    WebServiceChartConfigColorThemeToJSON,
} from './WebServiceChartConfigColorTheme';

/**
 * 
 * @export
 * @interface WebServiceChartConfigQueryValueConfig
 */
export interface WebServiceChartConfigQueryValueConfig {
    /**
     * 
     * @type {WebServiceChartConfigColorTheme}
     * @memberof WebServiceChartConfigQueryValueConfig
     */
    colorTheme?: WebServiceChartConfigColorTheme;
    /**
     * 
     * @type {boolean}
     * @memberof WebServiceChartConfigQueryValueConfig
     */
    showBackgroundChart?: boolean;
    /**
     * 
     * @type {WebServiceChartConfigCalculation}
     * @memberof WebServiceChartConfigQueryValueConfig
     */
    calculation?: WebServiceChartConfigCalculation;
    /**
     * 
     * @type {WebServiceChartConfigCalculation}
     * @memberof WebServiceChartConfigQueryValueConfig
     */
    seriesCalculation?: WebServiceChartConfigCalculation;
}

/**
 * Check if a given object implements the WebServiceChartConfigQueryValueConfig interface.
 */
export function instanceOfWebServiceChartConfigQueryValueConfig(value: object): boolean {
    return true;
}

export function WebServiceChartConfigQueryValueConfigFromJSON(json: any): WebServiceChartConfigQueryValueConfig {
    return WebServiceChartConfigQueryValueConfigFromJSONTyped(json, false);
}

export function WebServiceChartConfigQueryValueConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceChartConfigQueryValueConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'colorTheme': json['colorTheme'] == null ? undefined : WebServiceChartConfigColorThemeFromJSON(json['colorTheme']),
        'showBackgroundChart': json['showBackgroundChart'] == null ? undefined : json['showBackgroundChart'],
        'calculation': json['calculation'] == null ? undefined : WebServiceChartConfigCalculationFromJSON(json['calculation']),
        'seriesCalculation': json['seriesCalculation'] == null ? undefined : WebServiceChartConfigCalculationFromJSON(json['seriesCalculation']),
    };
}

export function WebServiceChartConfigQueryValueConfigToJSON(value?: WebServiceChartConfigQueryValueConfig | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'colorTheme': WebServiceChartConfigColorThemeToJSON(value['colorTheme']),
        'showBackgroundChart': value['showBackgroundChart'],
        'calculation': WebServiceChartConfigCalculationToJSON(value['calculation']),
        'seriesCalculation': WebServiceChartConfigCalculationToJSON(value['seriesCalculation']),
    };
}

