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
 * @interface AnalyticServiceSQLQuery
 */
export interface AnalyticServiceSQLQuery {
    /**
     * 
     * @type {string}
     * @memberof AnalyticServiceSQLQuery
     */
    sql?: string;
    /**
     * 
     * @type {number}
     * @memberof AnalyticServiceSQLQuery
     */
    size?: number;
}

/**
 * Check if a given object implements the AnalyticServiceSQLQuery interface.
 */
export function instanceOfAnalyticServiceSQLQuery(value: object): boolean {
    return true;
}

export function AnalyticServiceSQLQueryFromJSON(json: any): AnalyticServiceSQLQuery {
    return AnalyticServiceSQLQueryFromJSONTyped(json, false);
}

export function AnalyticServiceSQLQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticServiceSQLQuery {
    if (json == null) {
        return json;
    }
    return {
        
        'sql': json['sql'] == null ? undefined : json['sql'],
        'size': json['size'] == null ? undefined : json['size'],
    };
}

export function AnalyticServiceSQLQueryToJSON(value?: AnalyticServiceSQLQuery | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'sql': value['sql'],
        'size': value['size'],
    };
}

