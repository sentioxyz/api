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
import { AnalyticServiceSource } from '../models/AnalyticServiceSource.js';
import { HttpFile } from '../http/http.js';

export class AnalyticServiceAnalyticServiceSaveSQLBody {
    'projectId'?: string;
    'version'?: number;
    'sqlQuery'?: AnalyticServiceSQLQuery;
    'source'?: AnalyticServiceSource;
    'runImmediately'?: boolean;
    'queryId'?: string;

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
            "name": "source",
            "baseName": "source",
            "type": "AnalyticServiceSource",
            "format": ""
        },
        {
            "name": "runImmediately",
            "baseName": "runImmediately",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "queryId",
            "baseName": "queryId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AnalyticServiceAnalyticServiceSaveSQLBody.attributeTypeMap;
    }

    public constructor() {
    }
}


