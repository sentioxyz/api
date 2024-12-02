/**
 * Sentio API
 * Sentio Open API for query data
 *
 * OpenAPI spec version: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.js';

export class AnalyticServiceAsyncExecuteSQLResponse {
    'queryId'?: string;
    'executionId'?: string;
    'queueLength'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "queryId",
            "baseName": "queryId",
            "type": "string",
            "format": ""
        },
        {
            "name": "executionId",
            "baseName": "executionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "queueLength",
            "baseName": "queueLength",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return AnalyticServiceAsyncExecuteSQLResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
