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
/**
 * 
 * @export
 * @interface WebServiceExportDashboardResponse
 */
export interface WebServiceExportDashboardResponse {
    /**
     * 
     * @type {object}
     * @memberof WebServiceExportDashboardResponse
     */
    dashboardJson?: object;
}

/**
 * Check if a given object implements the WebServiceExportDashboardResponse interface.
 */
export function instanceOfWebServiceExportDashboardResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WebServiceExportDashboardResponseFromJSON(json: any): WebServiceExportDashboardResponse {
    return WebServiceExportDashboardResponseFromJSONTyped(json, false);
}

export function WebServiceExportDashboardResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceExportDashboardResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dashboardJson': !exists(json, 'dashboardJson') ? undefined : json['dashboardJson'],
    };
}

export function WebServiceExportDashboardResponseToJSON(value?: WebServiceExportDashboardResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dashboardJson': value.dashboardJson,
    };
}

