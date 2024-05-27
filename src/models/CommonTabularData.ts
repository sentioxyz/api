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
import type { CommonTabularDataColumnType } from './CommonTabularDataColumnType';
import {
    CommonTabularDataColumnTypeFromJSON,
    CommonTabularDataColumnTypeFromJSONTyped,
    CommonTabularDataColumnTypeToJSON,
} from './CommonTabularDataColumnType';

/**
 * 
 * @export
 * @interface CommonTabularData
 */
export interface CommonTabularData {
    /**
     * 
     * @type {Array<string>}
     * @memberof CommonTabularData
     */
    columns?: Array<string>;
    /**
     * 
     * @type {{ [key: string]: CommonTabularDataColumnType; }}
     * @memberof CommonTabularData
     */
    columnTypes?: { [key: string]: CommonTabularDataColumnType; };
    /**
     * 
     * @type {Array<object>}
     * @memberof CommonTabularData
     */
    rows?: Array<object>;
    /**
     * 
     * @type {Date}
     * @memberof CommonTabularData
     */
    generatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof CommonTabularData
     */
    cursor?: string;
}

/**
 * Check if a given object implements the CommonTabularData interface.
 */
export function instanceOfCommonTabularData(value: object): boolean {
    return true;
}

export function CommonTabularDataFromJSON(json: any): CommonTabularData {
    return CommonTabularDataFromJSONTyped(json, false);
}

export function CommonTabularDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonTabularData {
    if (json == null) {
        return json;
    }
    return {
        
        'columns': json['columns'] == null ? undefined : json['columns'],
        'columnTypes': json['columnTypes'] == null ? undefined : (mapValues(json['columnTypes'], CommonTabularDataColumnTypeFromJSON)),
        'rows': json['rows'] == null ? undefined : json['rows'],
        'generatedAt': json['generatedAt'] == null ? undefined : (new Date(json['generatedAt'])),
        'cursor': json['cursor'] == null ? undefined : json['cursor'],
    };
}

export function CommonTabularDataToJSON(value?: CommonTabularData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'columns': value['columns'],
        'columnTypes': value['columnTypes'] == null ? undefined : (mapValues(value['columnTypes'], CommonTabularDataColumnTypeToJSON)),
        'rows': value['rows'],
        'generatedAt': value['generatedAt'] == null ? undefined : ((value['generatedAt']).toISOString()),
        'cursor': value['cursor'],
    };
}

