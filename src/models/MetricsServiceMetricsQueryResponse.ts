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

import { MetricsServiceMetricsQueryResponseResult } from '../models/MetricsServiceMetricsQueryResponseResult.js';
import { HttpFile } from '../http/http.js';

export class MetricsServiceMetricsQueryResponse {
    'results'?: Array<MetricsServiceMetricsQueryResponseResult>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<MetricsServiceMetricsQueryResponseResult>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MetricsServiceMetricsQueryResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
