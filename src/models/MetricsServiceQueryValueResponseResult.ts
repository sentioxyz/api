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

import { MetricsServiceMetricsQueryResponseSample } from '../models/MetricsServiceMetricsQueryResponseSample.js';
import { HttpFile } from '../http/http.js';

export class MetricsServiceQueryValueResponseResult {
    'sample'?: Array<MetricsServiceMetricsQueryResponseSample>;
    'error'?: string;
    'alias'?: string;
    'id'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "sample",
            "baseName": "sample",
            "type": "Array<MetricsServiceMetricsQueryResponseSample>",
            "format": ""
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string",
            "format": ""
        },
        {
            "name": "alias",
            "baseName": "alias",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MetricsServiceQueryValueResponseResult.attributeTypeMap;
    }

    public constructor() {
    }
}
