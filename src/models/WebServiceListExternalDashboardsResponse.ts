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
import type { WebServiceDashboardResult } from './WebServiceDashboardResult';
import {
    WebServiceDashboardResultFromJSON,
    WebServiceDashboardResultFromJSONTyped,
    WebServiceDashboardResultToJSON,
} from './WebServiceDashboardResult';

/**
 * 
 * @export
 * @interface WebServiceListExternalDashboardsResponse
 */
export interface WebServiceListExternalDashboardsResponse {
    /**
     * 
     * @type {Array<WebServiceDashboardResult>}
     * @memberof WebServiceListExternalDashboardsResponse
     */
    dashboards?: Array<WebServiceDashboardResult>;
}

/**
 * Check if a given object implements the WebServiceListExternalDashboardsResponse interface.
 */
export function instanceOfWebServiceListExternalDashboardsResponse(value: object): boolean {
    return true;
}

export function WebServiceListExternalDashboardsResponseFromJSON(json: any): WebServiceListExternalDashboardsResponse {
    return WebServiceListExternalDashboardsResponseFromJSONTyped(json, false);
}

export function WebServiceListExternalDashboardsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceListExternalDashboardsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'dashboards': json['dashboards'] == null ? undefined : ((json['dashboards'] as Array<any>).map(WebServiceDashboardResultFromJSON)),
    };
}

export function WebServiceListExternalDashboardsResponseToJSON(value?: WebServiceListExternalDashboardsResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'dashboards': value['dashboards'] == null ? undefined : ((value['dashboards'] as Array<any>).map(WebServiceDashboardResultToJSON)),
    };
}

