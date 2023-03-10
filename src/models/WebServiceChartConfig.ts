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

import { exists, mapValues } from '../runtime';
import type { WebServiceChartConfigBarGaugeConfig } from './WebServiceChartConfigBarGaugeConfig';
import {
    WebServiceChartConfigBarGaugeConfigFromJSON,
    WebServiceChartConfigBarGaugeConfigFromJSONTyped,
    WebServiceChartConfigBarGaugeConfigToJSON,
} from './WebServiceChartConfigBarGaugeConfig';
import type { WebServiceChartConfigPieConfig } from './WebServiceChartConfigPieConfig';
import {
    WebServiceChartConfigPieConfigFromJSON,
    WebServiceChartConfigPieConfigFromJSONTyped,
    WebServiceChartConfigPieConfigToJSON,
} from './WebServiceChartConfigPieConfig';
import type { WebServiceChartConfigQueryValueConfig } from './WebServiceChartConfigQueryValueConfig';
import {
    WebServiceChartConfigQueryValueConfigFromJSON,
    WebServiceChartConfigQueryValueConfigFromJSONTyped,
    WebServiceChartConfigQueryValueConfigToJSON,
} from './WebServiceChartConfigQueryValueConfig';
import type { WebServiceChartConfigTableConfig } from './WebServiceChartConfigTableConfig';
import {
    WebServiceChartConfigTableConfigFromJSON,
    WebServiceChartConfigTableConfigFromJSONTyped,
    WebServiceChartConfigTableConfigToJSON,
} from './WebServiceChartConfigTableConfig';
import type { WebServiceChartConfigTimeRangeOverride } from './WebServiceChartConfigTimeRangeOverride';
import {
    WebServiceChartConfigTimeRangeOverrideFromJSON,
    WebServiceChartConfigTimeRangeOverrideFromJSONTyped,
    WebServiceChartConfigTimeRangeOverrideToJSON,
} from './WebServiceChartConfigTimeRangeOverride';
import type { WebServiceChartConfigValueConfig } from './WebServiceChartConfigValueConfig';
import {
    WebServiceChartConfigValueConfigFromJSON,
    WebServiceChartConfigValueConfigFromJSONTyped,
    WebServiceChartConfigValueConfigToJSON,
} from './WebServiceChartConfigValueConfig';
import type { WebServiceChartConfigYAxisConfig } from './WebServiceChartConfigYAxisConfig';
import {
    WebServiceChartConfigYAxisConfigFromJSON,
    WebServiceChartConfigYAxisConfigFromJSONTyped,
    WebServiceChartConfigYAxisConfigToJSON,
} from './WebServiceChartConfigYAxisConfig';

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
}

/**
 * Check if a given object implements the WebServiceChartConfig interface.
 */
export function instanceOfWebServiceChartConfig(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WebServiceChartConfigFromJSON(json: any): WebServiceChartConfig {
    return WebServiceChartConfigFromJSONTyped(json, false);
}

export function WebServiceChartConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceChartConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'yAxis': !exists(json, 'yAxis') ? undefined : WebServiceChartConfigYAxisConfigFromJSON(json['yAxis']),
        'barGauge': !exists(json, 'barGauge') ? undefined : WebServiceChartConfigBarGaugeConfigFromJSON(json['barGauge']),
        'valueConfig': !exists(json, 'valueConfig') ? undefined : WebServiceChartConfigValueConfigFromJSON(json['valueConfig']),
        'timeRangeOverride': !exists(json, 'timeRangeOverride') ? undefined : WebServiceChartConfigTimeRangeOverrideFromJSON(json['timeRangeOverride']),
        'tableConfig': !exists(json, 'tableConfig') ? undefined : WebServiceChartConfigTableConfigFromJSON(json['tableConfig']),
        'queryValueConfig': !exists(json, 'queryValueConfig') ? undefined : WebServiceChartConfigQueryValueConfigFromJSON(json['queryValueConfig']),
        'pieConfig': !exists(json, 'pieConfig') ? undefined : WebServiceChartConfigPieConfigFromJSON(json['pieConfig']),
    };
}

export function WebServiceChartConfigToJSON(value?: WebServiceChartConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'yAxis': WebServiceChartConfigYAxisConfigToJSON(value.yAxis),
        'barGauge': WebServiceChartConfigBarGaugeConfigToJSON(value.barGauge),
        'valueConfig': WebServiceChartConfigValueConfigToJSON(value.valueConfig),
        'timeRangeOverride': WebServiceChartConfigTimeRangeOverrideToJSON(value.timeRangeOverride),
        'tableConfig': WebServiceChartConfigTableConfigToJSON(value.tableConfig),
        'queryValueConfig': WebServiceChartConfigQueryValueConfigToJSON(value.queryValueConfig),
        'pieConfig': WebServiceChartConfigPieConfigToJSON(value.pieConfig),
    };
}

