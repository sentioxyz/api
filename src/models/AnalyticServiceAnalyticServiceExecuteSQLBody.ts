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

import { AnalyticServiceSQLQuery } from '../models/AnalyticServiceSQLQuery.js';
import { CommonCachePolicy } from '../models/CommonCachePolicy.js';
import { HttpFile } from '../http/http.js';

export class AnalyticServiceAnalyticServiceExecuteSQLBody {
    'projectId'?: string;
    'version'?: number;
    'sqlQuery'?: AnalyticServiceSQLQuery;
    'cursor'?: string;
    'bypassCache'?: boolean;
    'cachePolicy'?: CommonCachePolicy;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "string",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "sqlQuery",
            "baseName": "sqlQuery",
            "type": "AnalyticServiceSQLQuery",
            "format": ""
        },
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "string",
            "format": ""
        },
        {
            "name": "bypassCache",
            "baseName": "bypassCache",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "cachePolicy",
            "baseName": "cachePolicy",
            "type": "CommonCachePolicy",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AnalyticServiceAnalyticServiceExecuteSQLBody.attributeTypeMap;
    }

    public constructor() {
    }
}
