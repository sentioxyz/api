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
 * @interface AnalyticServiceQueryCohortsResponseResult
 */
export interface AnalyticServiceQueryCohortsResponseResult {
    /**
     * 
     * @type {string}
     * @memberof AnalyticServiceQueryCohortsResponseResult
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AnalyticServiceQueryCohortsResponseResult
     */
    displayName?: string;
    /**
     * 
     * @type {number}
     * @memberof AnalyticServiceQueryCohortsResponseResult
     */
    total?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof AnalyticServiceQueryCohortsResponseResult
     */
    values?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof AnalyticServiceQueryCohortsResponseResult
     */
    executeCommand?: string;
}

/**
 * Check if a given object implements the AnalyticServiceQueryCohortsResponseResult interface.
 */
export function instanceOfAnalyticServiceQueryCohortsResponseResult(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AnalyticServiceQueryCohortsResponseResultFromJSON(json: any): AnalyticServiceQueryCohortsResponseResult {
    return AnalyticServiceQueryCohortsResponseResultFromJSONTyped(json, false);
}

export function AnalyticServiceQueryCohortsResponseResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticServiceQueryCohortsResponseResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'total': !exists(json, 'total') ? undefined : json['total'],
        'values': !exists(json, 'values') ? undefined : json['values'],
        'executeCommand': !exists(json, 'executeCommand') ? undefined : json['executeCommand'],
    };
}

export function AnalyticServiceQueryCohortsResponseResultToJSON(value?: AnalyticServiceQueryCohortsResponseResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'displayName': value.displayName,
        'total': value.total,
        'values': value.values,
        'executeCommand': value.executeCommand,
    };
}

