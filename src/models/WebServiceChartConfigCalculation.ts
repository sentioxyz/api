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
export const WebServiceChartConfigCalculation = {
    Last: 'LAST',
    First: 'FIRST',
    Mean: 'MEAN',
    Total: 'TOTAL',
    All: 'ALL',
    Min: 'MIN',
    Max: 'MAX'
} as const;
export type WebServiceChartConfigCalculation = typeof WebServiceChartConfigCalculation[keyof typeof WebServiceChartConfigCalculation];


export function instanceOfWebServiceChartConfigCalculation(value: any): boolean {
    for (const key in WebServiceChartConfigCalculation) {
        if (Object.prototype.hasOwnProperty.call(WebServiceChartConfigCalculation, key)) {
            if (WebServiceChartConfigCalculation[key as keyof typeof WebServiceChartConfigCalculation] === value) {
                return true;
            }
        }
    }
    return false;
}

export function WebServiceChartConfigCalculationFromJSON(json: any): WebServiceChartConfigCalculation {
    return WebServiceChartConfigCalculationFromJSONTyped(json, false);
}

export function WebServiceChartConfigCalculationFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceChartConfigCalculation {
    return json as WebServiceChartConfigCalculation;
}

export function WebServiceChartConfigCalculationToJSON(value?: WebServiceChartConfigCalculation | null): any {
    return value as any;
}

export function WebServiceChartConfigCalculationToJSONTyped(value: any, ignoreDiscriminator: boolean): WebServiceChartConfigCalculation {
    return value as WebServiceChartConfigCalculation;
}

