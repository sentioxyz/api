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

import { MetricsServiceMetricInfoLabelValues } from '../models/MetricsServiceMetricInfoLabelValues.js';
import { MetricsServiceMetricMetadata } from '../models/MetricsServiceMetricMetadata.js';
import { HttpFile } from '../http/http.js';

export class MetricsServiceMetricInfo {
    'name'?: string;
    'displayName'?: string;
    'projectId'?: string;
    'contractName'?: Array<string>;
    'contractAddress'?: Array<string>;
    'chainId'?: Array<string>;
    'labels'?: { [key: string]: MetricsServiceMetricInfoLabelValues; };
    'metadata'?: MetricsServiceMetricMetadata;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string",
            "format": ""
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "string",
            "format": ""
        },
        {
            "name": "contractName",
            "baseName": "contractName",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "contractAddress",
            "baseName": "contractAddress",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "chainId",
            "baseName": "chainId",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "{ [key: string]: MetricsServiceMetricInfoLabelValues; }",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "MetricsServiceMetricMetadata",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MetricsServiceMetricInfo.attributeTypeMap;
    }

    public constructor() {
    }
}
