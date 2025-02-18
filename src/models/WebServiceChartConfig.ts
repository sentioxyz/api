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

import { WebServiceChartConfigBarGaugeConfig } from '../models/WebServiceChartConfigBarGaugeConfig.js';
import { WebServiceChartConfigLabelConfig } from '../models/WebServiceChartConfigLabelConfig.js';
import { WebServiceChartConfigLineConfig } from '../models/WebServiceChartConfigLineConfig.js';
import { WebServiceChartConfigMarker } from '../models/WebServiceChartConfigMarker.js';
import { WebServiceChartConfigPieConfig } from '../models/WebServiceChartConfigPieConfig.js';
import { WebServiceChartConfigQueryValueConfig } from '../models/WebServiceChartConfigQueryValueConfig.js';
import { WebServiceChartConfigTableConfig } from '../models/WebServiceChartConfigTableConfig.js';
import { WebServiceChartConfigTimeRangeOverride } from '../models/WebServiceChartConfigTimeRangeOverride.js';
import { WebServiceChartConfigValueConfig } from '../models/WebServiceChartConfigValueConfig.js';
import { WebServiceChartConfigXAxisConfig } from '../models/WebServiceChartConfigXAxisConfig.js';
import { WebServiceChartConfigYAxisConfig } from '../models/WebServiceChartConfigYAxisConfig.js';
import { HttpFile } from '../http/http.js';

export class WebServiceChartConfig {
    'yAxis'?: WebServiceChartConfigYAxisConfig;
    'barGauge'?: WebServiceChartConfigBarGaugeConfig;
    'valueConfig'?: WebServiceChartConfigValueConfig;
    'timeRangeOverride'?: WebServiceChartConfigTimeRangeOverride;
    'tableConfig'?: WebServiceChartConfigTableConfig;
    'queryValueConfig'?: WebServiceChartConfigQueryValueConfig;
    'pieConfig'?: WebServiceChartConfigPieConfig;
    'markers'?: Array<WebServiceChartConfigMarker>;
    'lineConfig'?: WebServiceChartConfigLineConfig;
    'xAxis'?: WebServiceChartConfigXAxisConfig;
    'labelConfig'?: WebServiceChartConfigLabelConfig;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "yAxis",
            "baseName": "yAxis",
            "type": "WebServiceChartConfigYAxisConfig",
            "format": ""
        },
        {
            "name": "barGauge",
            "baseName": "barGauge",
            "type": "WebServiceChartConfigBarGaugeConfig",
            "format": ""
        },
        {
            "name": "valueConfig",
            "baseName": "valueConfig",
            "type": "WebServiceChartConfigValueConfig",
            "format": ""
        },
        {
            "name": "timeRangeOverride",
            "baseName": "timeRangeOverride",
            "type": "WebServiceChartConfigTimeRangeOverride",
            "format": ""
        },
        {
            "name": "tableConfig",
            "baseName": "tableConfig",
            "type": "WebServiceChartConfigTableConfig",
            "format": ""
        },
        {
            "name": "queryValueConfig",
            "baseName": "queryValueConfig",
            "type": "WebServiceChartConfigQueryValueConfig",
            "format": ""
        },
        {
            "name": "pieConfig",
            "baseName": "pieConfig",
            "type": "WebServiceChartConfigPieConfig",
            "format": ""
        },
        {
            "name": "markers",
            "baseName": "markers",
            "type": "Array<WebServiceChartConfigMarker>",
            "format": ""
        },
        {
            "name": "lineConfig",
            "baseName": "lineConfig",
            "type": "WebServiceChartConfigLineConfig",
            "format": ""
        },
        {
            "name": "xAxis",
            "baseName": "xAxis",
            "type": "WebServiceChartConfigXAxisConfig",
            "format": ""
        },
        {
            "name": "labelConfig",
            "baseName": "labelConfig",
            "type": "WebServiceChartConfigLabelConfig",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WebServiceChartConfig.attributeTypeMap;
    }

    public constructor() {
    }
}
