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
export const WebServiceChartConfigDirection = {
    Horizontal: 'HORIZONTAL',
    Vertical: 'VERTICAL',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type WebServiceChartConfigDirection = typeof WebServiceChartConfigDirection[keyof typeof WebServiceChartConfigDirection];


export function WebServiceChartConfigDirectionFromJSON(json: any): WebServiceChartConfigDirection {
    return WebServiceChartConfigDirectionFromJSONTyped(json, false);
}

export function WebServiceChartConfigDirectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceChartConfigDirection {
    return json as WebServiceChartConfigDirection;
}

export function WebServiceChartConfigDirectionToJSON(value?: WebServiceChartConfigDirection | null): any {
    return value as any;
}

