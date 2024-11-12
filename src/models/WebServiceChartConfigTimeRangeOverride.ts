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

import { CommonTimeRange } from '../models/CommonTimeRange.js';
import { WebServiceChartConfigCompareTime } from '../models/WebServiceChartConfigCompareTime.js';
import { HttpFile } from '../http/http.js';

export class WebServiceChartConfigTimeRangeOverride {
    'enabled'?: boolean;
    'timeRange'?: CommonTimeRange;
    'compareTime'?: WebServiceChartConfigCompareTime;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "timeRange",
            "baseName": "timeRange",
            "type": "CommonTimeRange",
            "format": ""
        },
        {
            "name": "compareTime",
            "baseName": "compareTime",
            "type": "WebServiceChartConfigCompareTime",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WebServiceChartConfigTimeRangeOverride.attributeTypeMap;
    }

    public constructor() {
    }
}
