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
import type { WebServiceChartConfigCalculation } from './WebServiceChartConfigCalculation.js';
import {
    WebServiceChartConfigCalculationFromJSON,
    WebServiceChartConfigCalculationFromJSONTyped,
    WebServiceChartConfigCalculationToJSON,
} from './WebServiceChartConfigCalculation.js';
import type { WebServiceChartConfigPieConfigPieType } from './WebServiceChartConfigPieConfigPieType.js';
import {
    WebServiceChartConfigPieConfigPieTypeFromJSON,
    WebServiceChartConfigPieConfigPieTypeFromJSONTyped,
    WebServiceChartConfigPieConfigPieTypeToJSON,
} from './WebServiceChartConfigPieConfigPieType.js';

/**
 * 
 * @export
 * @interface WebServiceChartConfigPieConfig
 */
export interface WebServiceChartConfigPieConfig {
    /**
     * 
     * @type {WebServiceChartConfigPieConfigPieType}
     * @memberof WebServiceChartConfigPieConfig
     */
    pieType?: WebServiceChartConfigPieConfigPieType;
    /**
     * 
     * @type {boolean}
     * @memberof WebServiceChartConfigPieConfig
     */
    showPercent?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof WebServiceChartConfigPieConfig
     */
    showValue?: boolean;
    /**
     * 
     * @type {WebServiceChartConfigCalculation}
     * @memberof WebServiceChartConfigPieConfig
     */
    calculation?: WebServiceChartConfigCalculation;
}

/**
 * Check if a given object implements the WebServiceChartConfigPieConfig interface.
 */
export function instanceOfWebServiceChartConfigPieConfig(value: object): boolean {
    return true;
}

export function WebServiceChartConfigPieConfigFromJSON(json: any): WebServiceChartConfigPieConfig {
    return WebServiceChartConfigPieConfigFromJSONTyped(json, false);
}

export function WebServiceChartConfigPieConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceChartConfigPieConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'pieType': json['pieType'] == null ? undefined : WebServiceChartConfigPieConfigPieTypeFromJSON(json['pieType']),
        'showPercent': json['showPercent'] == null ? undefined : json['showPercent'],
        'showValue': json['showValue'] == null ? undefined : json['showValue'],
        'calculation': json['calculation'] == null ? undefined : WebServiceChartConfigCalculationFromJSON(json['calculation']),
    };
}

export function WebServiceChartConfigPieConfigToJSON(value?: WebServiceChartConfigPieConfig | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'pieType': WebServiceChartConfigPieConfigPieTypeToJSON(value['pieType']),
        'showPercent': value['showPercent'],
        'showValue': value['showValue'],
        'calculation': WebServiceChartConfigCalculationToJSON(value['calculation']),
    };
}

