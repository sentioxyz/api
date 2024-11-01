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
import type { CommonQuery } from './CommonQuery.js';
import {
    CommonQueryFromJSON,
    CommonQueryFromJSONTyped,
    CommonQueryToJSON,
    CommonQueryToJSONTyped,
} from './CommonQuery.js';
import type { CommonFormula } from './CommonFormula.js';
import {
    CommonFormulaFromJSON,
    CommonFormulaFromJSONTyped,
    CommonFormulaToJSON,
    CommonFormulaToJSONTyped,
} from './CommonFormula.js';

/**
 * 
 * @export
 * @interface MetricsServiceObservabilityServiceQueryBody
 */
export interface MetricsServiceObservabilityServiceQueryBody {
    /**
     * 
     * @type {Array<CommonQuery>}
     * @memberof MetricsServiceObservabilityServiceQueryBody
     */
    queries?: Array<CommonQuery>;
    /**
     * 
     * @type {Array<CommonFormula>}
     * @memberof MetricsServiceObservabilityServiceQueryBody
     */
    formulas?: Array<CommonFormula>;
    /**
     * 
     * @type {string}
     * @memberof MetricsServiceObservabilityServiceQueryBody
     */
    time?: string;
    /**
     * 
     * @type {number}
     * @memberof MetricsServiceObservabilityServiceQueryBody
     */
    samplesLimit?: number;
    /**
     * 
     * @type {number}
     * @memberof MetricsServiceObservabilityServiceQueryBody
     */
    version?: number;
    /**
     * 
     * @type {string}
     * @memberof MetricsServiceObservabilityServiceQueryBody
     */
    timezone?: string;
    /**
     * 
     * @type {number}
     * @memberof MetricsServiceObservabilityServiceQueryBody
     */
    samplesOffset?: number;
}

/**
 * Check if a given object implements the MetricsServiceObservabilityServiceQueryBody interface.
 */
export function instanceOfMetricsServiceObservabilityServiceQueryBody(value: object): value is MetricsServiceObservabilityServiceQueryBody {
    return true;
}

export function MetricsServiceObservabilityServiceQueryBodyFromJSON(json: any): MetricsServiceObservabilityServiceQueryBody {
    return MetricsServiceObservabilityServiceQueryBodyFromJSONTyped(json, false);
}

export function MetricsServiceObservabilityServiceQueryBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetricsServiceObservabilityServiceQueryBody {
    if (json == null) {
        return json;
    }
    return {
        
        'queries': json['queries'] == null ? undefined : ((json['queries'] as Array<any>).map(CommonQueryFromJSON)),
        'formulas': json['formulas'] == null ? undefined : ((json['formulas'] as Array<any>).map(CommonFormulaFromJSON)),
        'time': json['time'] == null ? undefined : json['time'],
        'samplesLimit': json['samplesLimit'] == null ? undefined : json['samplesLimit'],
        'version': json['version'] == null ? undefined : json['version'],
        'timezone': json['timezone'] == null ? undefined : json['timezone'],
        'samplesOffset': json['samplesOffset'] == null ? undefined : json['samplesOffset'],
    };
}

  export function MetricsServiceObservabilityServiceQueryBodyToJSON(json: any): MetricsServiceObservabilityServiceQueryBody {
      return MetricsServiceObservabilityServiceQueryBodyToJSONTyped(json, false);
  }

  export function MetricsServiceObservabilityServiceQueryBodyToJSONTyped(value?: MetricsServiceObservabilityServiceQueryBody | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'queries': value['queries'] == null ? undefined : ((value['queries'] as Array<any>).map(CommonQueryToJSON)),
        'formulas': value['formulas'] == null ? undefined : ((value['formulas'] as Array<any>).map(CommonFormulaToJSON)),
        'time': value['time'],
        'samplesLimit': value['samplesLimit'],
        'version': value['version'],
        'timezone': value['timezone'],
        'samplesOffset': value['samplesOffset'],
    };
}

