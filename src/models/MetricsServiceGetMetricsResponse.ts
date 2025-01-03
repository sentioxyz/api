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

import { MetricsServiceMetricInfo } from '../models/MetricsServiceMetricInfo.js';
import { HttpFile } from '../http/http.js';

export class MetricsServiceGetMetricsResponse {
    'metrics'?: Array<MetricsServiceMetricInfo>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "metrics",
            "baseName": "metrics",
            "type": "Array<MetricsServiceMetricInfo>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MetricsServiceGetMetricsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
