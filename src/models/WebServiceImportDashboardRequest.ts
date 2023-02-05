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
 * @interface WebServiceImportDashboardRequest
 */
export interface WebServiceImportDashboardRequest {
    /**
     * 
     * @type {string}
     * @memberof WebServiceImportDashboardRequest
     */
    dashboardId?: string;
    /**
     * 
     * @type {object}
     * @memberof WebServiceImportDashboardRequest
     */
    dashboardJson?: object;
    /**
     * 
     * @type {boolean}
     * @memberof WebServiceImportDashboardRequest
     */
    overrideLayouts?: boolean;
}

/**
 * Check if a given object implements the WebServiceImportDashboardRequest interface.
 */
export function instanceOfWebServiceImportDashboardRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WebServiceImportDashboardRequestFromJSON(json: any): WebServiceImportDashboardRequest {
    return WebServiceImportDashboardRequestFromJSONTyped(json, false);
}

export function WebServiceImportDashboardRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceImportDashboardRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dashboardId': !exists(json, 'dashboardId') ? undefined : json['dashboardId'],
        'dashboardJson': !exists(json, 'dashboardJson') ? undefined : json['dashboardJson'],
        'overrideLayouts': !exists(json, 'overrideLayouts') ? undefined : json['overrideLayouts'],
    };
}

export function WebServiceImportDashboardRequestToJSON(value?: WebServiceImportDashboardRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dashboardId': value.dashboardId,
        'dashboardJson': value.dashboardJson,
        'overrideLayouts': value.overrideLayouts,
    };
}

