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


/**
 * 
 * @export
 */
export const WebServiceChartDataSourceType = {
    Metrics: 'METRICS',
    Notes: 'NOTES',
    Analytics: 'ANALYTICS',
    Insights: 'INSIGHTS',
    Events: 'EVENTS',
    Retention: 'RETENTION',
    Sql: 'SQL'
} as const;
export type WebServiceChartDataSourceType = typeof WebServiceChartDataSourceType[keyof typeof WebServiceChartDataSourceType];


export function instanceOfWebServiceChartDataSourceType(value: any): boolean {
    return Object.values(WebServiceChartDataSourceType).includes(value);
}

export function WebServiceChartDataSourceTypeFromJSON(json: any): WebServiceChartDataSourceType {
    return WebServiceChartDataSourceTypeFromJSONTyped(json, false);
}

export function WebServiceChartDataSourceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceChartDataSourceType {
    return json as WebServiceChartDataSourceType;
}

export function WebServiceChartDataSourceTypeToJSON(value?: WebServiceChartDataSourceType | null): any {
    return value as any;
}

