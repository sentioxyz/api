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
export const WebServiceDashboardDashboardVisibility = {
    Internal: 'INTERNAL',
    Private: 'PRIVATE',
    Public: 'PUBLIC'
} as const;
export type WebServiceDashboardDashboardVisibility = typeof WebServiceDashboardDashboardVisibility[keyof typeof WebServiceDashboardDashboardVisibility];


export function instanceOfWebServiceDashboardDashboardVisibility(value: any): boolean {
    for (const key in WebServiceDashboardDashboardVisibility) {
        if (Object.prototype.hasOwnProperty.call(WebServiceDashboardDashboardVisibility, key)) {
            if (WebServiceDashboardDashboardVisibility[key as keyof typeof WebServiceDashboardDashboardVisibility] === value) {
                return true;
            }
        }
    }
    return false;
}

export function WebServiceDashboardDashboardVisibilityFromJSON(json: any): WebServiceDashboardDashboardVisibility {
    return WebServiceDashboardDashboardVisibilityFromJSONTyped(json, false);
}

export function WebServiceDashboardDashboardVisibilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceDashboardDashboardVisibility {
    return json as WebServiceDashboardDashboardVisibility;
}

export function WebServiceDashboardDashboardVisibilityToJSON(value?: WebServiceDashboardDashboardVisibility | null): any {
    return value as any;
}

export function WebServiceDashboardDashboardVisibilityToJSONTyped(value: any, ignoreDiscriminator: boolean): WebServiceDashboardDashboardVisibility {
    return value as WebServiceDashboardDashboardVisibility;
}
