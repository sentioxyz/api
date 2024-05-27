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
import type { CommonPermission } from './CommonPermission';
import {
    CommonPermissionFromJSON,
    CommonPermissionFromJSONTyped,
    CommonPermissionToJSON,
} from './CommonPermission';
import type { WebServiceDashboard } from './WebServiceDashboard';
import {
    WebServiceDashboardFromJSON,
    WebServiceDashboardFromJSONTyped,
    WebServiceDashboardToJSON,
} from './WebServiceDashboard';

/**
 * 
 * @export
 * @interface WebServiceGetDashboardResponse
 */
export interface WebServiceGetDashboardResponse {
    /**
     * 
     * @type {Array<WebServiceDashboard>}
     * @memberof WebServiceGetDashboardResponse
     */
    dashboards?: Array<WebServiceDashboard>;
    /**
     * 
     * @type {Array<CommonPermission>}
     * @memberof WebServiceGetDashboardResponse
     */
    permissions?: Array<CommonPermission>;
}

/**
 * Check if a given object implements the WebServiceGetDashboardResponse interface.
 */
export function instanceOfWebServiceGetDashboardResponse(value: object): boolean {
    return true;
}

export function WebServiceGetDashboardResponseFromJSON(json: any): WebServiceGetDashboardResponse {
    return WebServiceGetDashboardResponseFromJSONTyped(json, false);
}

export function WebServiceGetDashboardResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceGetDashboardResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'dashboards': json['dashboards'] == null ? undefined : ((json['dashboards'] as Array<any>).map(WebServiceDashboardFromJSON)),
        'permissions': json['permissions'] == null ? undefined : ((json['permissions'] as Array<any>).map(CommonPermissionFromJSON)),
    };
}

export function WebServiceGetDashboardResponseToJSON(value?: WebServiceGetDashboardResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'dashboards': value['dashboards'] == null ? undefined : ((value['dashboards'] as Array<any>).map(WebServiceDashboardToJSON)),
        'permissions': value['permissions'] == null ? undefined : ((value['permissions'] as Array<any>).map(CommonPermissionToJSON)),
    };
}

