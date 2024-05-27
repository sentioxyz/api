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

import { mapValues } from '../runtime';
import type { CommonFormula } from './CommonFormula';
import {
    CommonFormulaFromJSON,
    CommonFormulaFromJSONTyped,
    CommonFormulaToJSON,
} from './CommonFormula';
import type { CommonQuery } from './CommonQuery';
import {
    CommonQueryFromJSON,
    CommonQueryFromJSONTyped,
    CommonQueryToJSON,
} from './CommonQuery';
import type { CommonRetentionQuery } from './CommonRetentionQuery';
import {
    CommonRetentionQueryFromJSON,
    CommonRetentionQueryFromJSONTyped,
    CommonRetentionQueryToJSON,
} from './CommonRetentionQuery';
import type { CommonSegmentationQuery } from './CommonSegmentationQuery';
import {
    CommonSegmentationQueryFromJSON,
    CommonSegmentationQueryFromJSONTyped,
    CommonSegmentationQueryToJSON,
} from './CommonSegmentationQuery';
import type { InsightsServiceQueryRequestQuery } from './InsightsServiceQueryRequestQuery';
import {
    InsightsServiceQueryRequestQueryFromJSON,
    InsightsServiceQueryRequestQueryFromJSONTyped,
    InsightsServiceQueryRequestQueryToJSON,
} from './InsightsServiceQueryRequestQuery';
import type { WebServiceChartChartType } from './WebServiceChartChartType';
import {
    WebServiceChartChartTypeFromJSON,
    WebServiceChartChartTypeFromJSONTyped,
    WebServiceChartChartTypeToJSON,
} from './WebServiceChartChartType';
import type { WebServiceChartConfig } from './WebServiceChartConfig';
import {
    WebServiceChartConfigFromJSON,
    WebServiceChartConfigFromJSONTyped,
    WebServiceChartConfigToJSON,
} from './WebServiceChartConfig';
import type { WebServiceChartDataSourceType } from './WebServiceChartDataSourceType';
import {
    WebServiceChartDataSourceTypeFromJSON,
    WebServiceChartDataSourceTypeFromJSONTyped,
    WebServiceChartDataSourceTypeToJSON,
} from './WebServiceChartDataSourceType';
import type { WebServiceEventLogsConfig } from './WebServiceEventLogsConfig';
import {
    WebServiceEventLogsConfigFromJSON,
    WebServiceEventLogsConfigFromJSONTyped,
    WebServiceEventLogsConfigToJSON,
} from './WebServiceEventLogsConfig';
import type { WebServiceNote } from './WebServiceNote';
import {
    WebServiceNoteFromJSON,
    WebServiceNoteFromJSONTyped,
    WebServiceNoteToJSON,
} from './WebServiceNote';

/**
 * 
 * @export
 * @interface WebServiceChart
 */
export interface WebServiceChart {
    /**
     * 
     * @type {WebServiceChartChartType}
     * @memberof WebServiceChart
     */
    type?: WebServiceChartChartType;
    /**
     * 
     * @type {Array<CommonQuery>}
     * @memberof WebServiceChart
     */
    queries?: Array<CommonQuery>;
    /**
     * 
     * @type {Array<CommonFormula>}
     * @memberof WebServiceChart
     */
    formulas?: Array<CommonFormula>;
    /**
     * 
     * @type {WebServiceChartConfig}
     * @memberof WebServiceChart
     */
    config?: WebServiceChartConfig;
    /**
     * 
     * @type {WebServiceNote}
     * @memberof WebServiceChart
     */
    note?: WebServiceNote;
    /**
     * 
     * @type {WebServiceChartDataSourceType}
     * @memberof WebServiceChart
     */
    datasourceType?: WebServiceChartDataSourceType;
    /**
     * 
     * @type {Array<CommonSegmentationQuery>}
     * @memberof WebServiceChart
     */
    segmentationQueries?: Array<CommonSegmentationQuery>;
    /**
     * 
     * @type {Array<InsightsServiceQueryRequestQuery>}
     * @memberof WebServiceChart
     */
    insightsQueries?: Array<InsightsServiceQueryRequestQuery>;
    /**
     * 
     * @type {WebServiceEventLogsConfig}
     * @memberof WebServiceChart
     */
    eventLogsConfig?: WebServiceEventLogsConfig;
    /**
     * 
     * @type {CommonRetentionQuery}
     * @memberof WebServiceChart
     */
    retentionQuery?: CommonRetentionQuery;
    /**
     * 
     * @type {string}
     * @memberof WebServiceChart
     */
    sqlQuery?: string;
}

/**
 * Check if a given object implements the WebServiceChart interface.
 */
export function instanceOfWebServiceChart(value: object): boolean {
    return true;
}

export function WebServiceChartFromJSON(json: any): WebServiceChart {
    return WebServiceChartFromJSONTyped(json, false);
}

export function WebServiceChartFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceChart {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'] == null ? undefined : WebServiceChartChartTypeFromJSON(json['type']),
        'queries': json['queries'] == null ? undefined : ((json['queries'] as Array<any>).map(CommonQueryFromJSON)),
        'formulas': json['formulas'] == null ? undefined : ((json['formulas'] as Array<any>).map(CommonFormulaFromJSON)),
        'config': json['config'] == null ? undefined : WebServiceChartConfigFromJSON(json['config']),
        'note': json['note'] == null ? undefined : WebServiceNoteFromJSON(json['note']),
        'datasourceType': json['datasourceType'] == null ? undefined : WebServiceChartDataSourceTypeFromJSON(json['datasourceType']),
        'segmentationQueries': json['segmentationQueries'] == null ? undefined : ((json['segmentationQueries'] as Array<any>).map(CommonSegmentationQueryFromJSON)),
        'insightsQueries': json['insightsQueries'] == null ? undefined : ((json['insightsQueries'] as Array<any>).map(InsightsServiceQueryRequestQueryFromJSON)),
        'eventLogsConfig': json['eventLogsConfig'] == null ? undefined : WebServiceEventLogsConfigFromJSON(json['eventLogsConfig']),
        'retentionQuery': json['retentionQuery'] == null ? undefined : CommonRetentionQueryFromJSON(json['retentionQuery']),
        'sqlQuery': json['sqlQuery'] == null ? undefined : json['sqlQuery'],
    };
}

export function WebServiceChartToJSON(value?: WebServiceChart | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': WebServiceChartChartTypeToJSON(value['type']),
        'queries': value['queries'] == null ? undefined : ((value['queries'] as Array<any>).map(CommonQueryToJSON)),
        'formulas': value['formulas'] == null ? undefined : ((value['formulas'] as Array<any>).map(CommonFormulaToJSON)),
        'config': WebServiceChartConfigToJSON(value['config']),
        'note': WebServiceNoteToJSON(value['note']),
        'datasourceType': WebServiceChartDataSourceTypeToJSON(value['datasourceType']),
        'segmentationQueries': value['segmentationQueries'] == null ? undefined : ((value['segmentationQueries'] as Array<any>).map(CommonSegmentationQueryToJSON)),
        'insightsQueries': value['insightsQueries'] == null ? undefined : ((value['insightsQueries'] as Array<any>).map(InsightsServiceQueryRequestQueryToJSON)),
        'eventLogsConfig': WebServiceEventLogsConfigToJSON(value['eventLogsConfig']),
        'retentionQuery': CommonRetentionQueryToJSON(value['retentionQuery']),
        'sqlQuery': value['sqlQuery'],
    };
}

