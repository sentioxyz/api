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

import { CommonComputeStats } from '../models/CommonComputeStats.js';
import { MetricsServiceMetricsQueryResponseMatrix } from '../models/MetricsServiceMetricsQueryResponseMatrix.js';
import { HttpFile } from '../http/http.js';

export class MetricsServiceMetricsQueryResponseResult {
    'matrix'?: MetricsServiceMetricsQueryResponseMatrix;
    'error'?: string;
    'alias'?: string;
    'id'?: string;
    'computeStats'?: CommonComputeStats;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "matrix",
            "baseName": "matrix",
            "type": "MetricsServiceMetricsQueryResponseMatrix",
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
        },
        {
            "name": "computeStats",
            "baseName": "computeStats",
            "type": "CommonComputeStats",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MetricsServiceMetricsQueryResponseResult.attributeTypeMap;
    }

    public constructor() {
    }
}
