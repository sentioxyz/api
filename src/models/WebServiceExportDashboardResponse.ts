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
    return true;
}

export function WebServiceExportDashboardResponseFromJSON(json: any): WebServiceExportDashboardResponse {
    return WebServiceExportDashboardResponseFromJSONTyped(json, false);
}

export function WebServiceExportDashboardResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceExportDashboardResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'dashboardJson': json['dashboardJson'] == null ? undefined : json['dashboardJson'],
    };
}

export function WebServiceExportDashboardResponseToJSON(value?: WebServiceExportDashboardResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'dashboardJson': value['dashboardJson'],
    };
}

