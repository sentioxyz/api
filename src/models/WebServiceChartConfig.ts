/* tslint:disable */
/* eslint-disable */
/**
 * Sentio API
 * Sentio Open API for query data
 *
 * The version of the OpenAPI document: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
import type { WebServiceChartConfigBarGaugeConfig } from './WebServiceChartConfigBarGaugeConfig.js';
import {
    WebServiceChartConfigBarGaugeConfigFromJSON,
    WebServiceChartConfigBarGaugeConfigFromJSONTyped,
    WebServiceChartConfigBarGaugeConfigToJSON,
} from './WebServiceChartConfigBarGaugeConfig.js';
import type { WebServiceChartConfigMarker } from './WebServiceChartConfigMarker.js';
import {
    WebServiceChartConfigMarkerFromJSON,
    WebServiceChartConfigMarkerFromJSONTyped,
    WebServiceChartConfigMarkerToJSON,
} from './WebServiceChartConfigMarker.js';
import type { WebServiceChartConfigPieConfig } from './WebServiceChartConfigPieConfig.js';
import {
    WebServiceChartConfigPieConfigFromJSON,
    WebServiceChartConfigPieConfigFromJSONTyped,
    WebServiceChartConfigPieConfigToJSON,
} from './WebServiceChartConfigPieConfig.js';
import type { WebServiceChartConfigQueryValueConfig } from './WebServiceChartConfigQueryValueConfig.js';
import {
    WebServiceChartConfigQueryValueConfigFromJSON,
    WebServiceChartConfigQueryValueConfigFromJSONTyped,
    WebServiceChartConfigQueryValueConfigToJSON,
} from './WebServiceChartConfigQueryValueConfig.js';
import type { WebServiceChartConfigTableConfig } from './WebServiceChartConfigTableConfig.js';
import {
    WebServiceChartConfigTableConfigFromJSON,
    WebServiceChartConfigTableConfigFromJSONTyped,
    WebServiceChartConfigTableConfigToJSON,
} from './WebServiceChartConfigTableConfig.js';
import type { WebServiceChartConfigTimeRangeOverride } from './WebServiceChartConfigTimeRangeOverride.js';
import {
    WebServiceChartConfigTimeRangeOverrideFromJSON,
    WebServiceChartConfigTimeRangeOverrideFromJSONTyped,
    WebServiceChartConfigTimeRangeOverrideToJSON,
} from './WebServiceChartConfigTimeRangeOverride.js';
import type { WebServiceChartConfigValueConfig } from './WebServiceChartConfigValueConfig.js';
import {
    WebServiceChartConfigValueConfigFromJSON,
    WebServiceChartConfigValueConfigFromJSONTyped,
    WebServiceChartConfigValueConfigToJSON,
} from './WebServiceChartConfigValueConfig.js';
import type { WebServiceChartConfigYAxisConfig } from './WebServiceChartConfigYAxisConfig.js';
import {
    WebServiceChartConfigYAxisConfigFromJSON,
    WebServiceChartConfigYAxisConfigFromJSONTyped,
    WebServiceChartConfigYAxisConfigToJSON,
} from './WebServiceChartConfigYAxisConfig.js';

/**
 * 
 * @export
 * @interface WebServiceChartConfig
 */
export interface WebServiceChartConfig {
    /**
     * 
     * @type {WebServiceChartConfigYAxisConfig}
     * @memberof WebServiceChartConfig
     */
    yAxis?: WebServiceChartConfigYAxisConfig;
    /**
     * 
     * @type {WebServiceChartConfigBarGaugeConfig}
     * @memberof WebServiceChartConfig
     */
    barGauge?: WebServiceChartConfigBarGaugeConfig;
    /**
     * 
     * @type {WebServiceChartConfigValueConfig}
     * @memberof WebServiceChartConfig
     */
    valueConfig?: WebServiceChartConfigValueConfig;
    /**
     * 
     * @type {WebServiceChartConfigTimeRangeOverride}
     * @memberof WebServiceChartConfig
     */
    timeRangeOverride?: WebServiceChartConfigTimeRangeOverride;
    /**
     * 
     * @type {WebServiceChartConfigTableConfig}
     * @memberof WebServiceChartConfig
     */
    tableConfig?: WebServiceChartConfigTableConfig;
    /**
     * 
     * @type {WebServiceChartConfigQueryValueConfig}
     * @memberof WebServiceChartConfig
     */
    queryValueConfig?: WebServiceChartConfigQueryValueConfig;
    /**
     * 
     * @type {WebServiceChartConfigPieConfig}
     * @memberof WebServiceChartConfig
     */
    pieConfig?: WebServiceChartConfigPieConfig;
    /**
     * 
     * @type {Array<WebServiceChartConfigMarker>}
     * @memberof WebServiceChartConfig
     */
    markers?: Array<WebServiceChartConfigMarker>;
}

/**
 * Check if a given object implements the WebServiceChartConfig interface.
 */
export function instanceOfWebServiceChartConfig(value: object): boolean {
    return true;
}

export function WebServiceChartConfigFromJSON(json: any): WebServiceChartConfig {
    return WebServiceChartConfigFromJSONTyped(json, false);
}

export function WebServiceChartConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceChartConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'yAxis': json['yAxis'] == null ? undefined : WebServiceChartConfigYAxisConfigFromJSON(json['yAxis']),
        'barGauge': json['barGauge'] == null ? undefined : WebServiceChartConfigBarGaugeConfigFromJSON(json['barGauge']),
        'valueConfig': json['valueConfig'] == null ? undefined : WebServiceChartConfigValueConfigFromJSON(json['valueConfig']),
        'timeRangeOverride': json['timeRangeOverride'] == null ? undefined : WebServiceChartConfigTimeRangeOverrideFromJSON(json['timeRangeOverride']),
        'tableConfig': json['tableConfig'] == null ? undefined : WebServiceChartConfigTableConfigFromJSON(json['tableConfig']),
        'queryValueConfig': json['queryValueConfig'] == null ? undefined : WebServiceChartConfigQueryValueConfigFromJSON(json['queryValueConfig']),
        'pieConfig': json['pieConfig'] == null ? undefined : WebServiceChartConfigPieConfigFromJSON(json['pieConfig']),
        'markers': json['markers'] == null ? undefined : ((json['markers'] as Array<any>).map(WebServiceChartConfigMarkerFromJSON)),
    };
}

export function WebServiceChartConfigToJSON(value?: WebServiceChartConfig | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'yAxis': WebServiceChartConfigYAxisConfigToJSON(value['yAxis']),
        'barGauge': WebServiceChartConfigBarGaugeConfigToJSON(value['barGauge']),
        'valueConfig': WebServiceChartConfigValueConfigToJSON(value['valueConfig']),
        'timeRangeOverride': WebServiceChartConfigTimeRangeOverrideToJSON(value['timeRangeOverride']),
        'tableConfig': WebServiceChartConfigTableConfigToJSON(value['tableConfig']),
        'queryValueConfig': WebServiceChartConfigQueryValueConfigToJSON(value['queryValueConfig']),
        'pieConfig': WebServiceChartConfigPieConfigToJSON(value['pieConfig']),
        'markers': value['markers'] == null ? undefined : ((value['markers'] as Array<any>).map(WebServiceChartConfigMarkerToJSON)),
    };
}
