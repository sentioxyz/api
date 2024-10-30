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

import { mapValues } from '../runtime.js';
/**
 * 
 * @export
 * @interface WebServiceImportDashboardRequest
 */
export interface WebServiceImportDashboardRequest {
    /**
     * The id of the target dashboard to import into.
     * @type {string}
     * @memberof WebServiceImportDashboardRequest
     */
    dashboardId: string;
    /**
     * The json data of a previously exported dashboard.
     * @type {object}
     * @memberof WebServiceImportDashboardRequest
     */
    dashboardJson: object;
    /**
     * Override the layout of target dashboard.
     * @type {boolean}
     * @memberof WebServiceImportDashboardRequest
     */
    overrideLayouts?: boolean;
}

/**
 * Check if a given object implements the WebServiceImportDashboardRequest interface.
 */
export function instanceOfWebServiceImportDashboardRequest(value: object): boolean {
    if (!('dashboardId' in value)) return false;
    if (!('dashboardJson' in value)) return false;
    return true;
}

export function WebServiceImportDashboardRequestFromJSON(json: any): WebServiceImportDashboardRequest {
    return WebServiceImportDashboardRequestFromJSONTyped(json, false);
}

export function WebServiceImportDashboardRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceImportDashboardRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'dashboardId': json['dashboardId'],
        'dashboardJson': json['dashboardJson'],
        'overrideLayouts': json['overrideLayouts'] == null ? undefined : json['overrideLayouts'],
    };
}

export function WebServiceImportDashboardRequestToJSON(value?: WebServiceImportDashboardRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'dashboardId': value['dashboardId'],
        'dashboardJson': value['dashboardJson'],
        'overrideLayouts': value['overrideLayouts'],
    };
}

