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

import { WebServiceChartConfigColorTheme } from '../models/WebServiceChartConfigColorTheme.js';
import { HttpFile } from '../http/http.js';

export class WebServiceChartConfigMappingRule {
    'comparison'?: string;
    'value'?: number;
    'text'?: string;
    'colorTheme'?: WebServiceChartConfigColorTheme;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "comparison",
            "baseName": "comparison",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": "double"
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string",
            "format": ""
        },
        {
            "name": "colorTheme",
            "baseName": "colorTheme",
            "type": "WebServiceChartConfigColorTheme",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WebServiceChartConfigMappingRule.attributeTypeMap;
    }

    public constructor() {
    }
}
