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
export const WebServiceChartConfigValueFormatter = {
    NumberFormatter: 'NumberFormatter',
    DateFormatter: 'DateFormatter',
    StringFormatter: 'StringFormatter'
} as const;
export type WebServiceChartConfigValueFormatter = typeof WebServiceChartConfigValueFormatter[keyof typeof WebServiceChartConfigValueFormatter];


export function instanceOfWebServiceChartConfigValueFormatter(value: any): boolean {
    return Object.values(WebServiceChartConfigValueFormatter).includes(value);
}

export function WebServiceChartConfigValueFormatterFromJSON(json: any): WebServiceChartConfigValueFormatter {
    return WebServiceChartConfigValueFormatterFromJSONTyped(json, false);
}

export function WebServiceChartConfigValueFormatterFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceChartConfigValueFormatter {
    return json as WebServiceChartConfigValueFormatter;
}

export function WebServiceChartConfigValueFormatterToJSON(value?: WebServiceChartConfigValueFormatter | null): any {
    return value as any;
}

