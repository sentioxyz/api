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
import type { WebServiceDashboardLayoutsLayout } from './WebServiceDashboardLayoutsLayout.js';
import {
    WebServiceDashboardLayoutsLayoutFromJSON,
    WebServiceDashboardLayoutsLayoutFromJSONTyped,
    WebServiceDashboardLayoutsLayoutToJSON,
} from './WebServiceDashboardLayoutsLayout.js';

/**
 * 
 * @export
 * @interface WebServiceDashboardLayouts
 */
export interface WebServiceDashboardLayouts {
    /**
     * 
     * @type {Array<WebServiceDashboardLayoutsLayout>}
     * @memberof WebServiceDashboardLayouts
     */
    layouts?: Array<WebServiceDashboardLayoutsLayout>;
}

/**
 * Check if a given object implements the WebServiceDashboardLayouts interface.
 */
export function instanceOfWebServiceDashboardLayouts(value: object): boolean {
    return true;
}

export function WebServiceDashboardLayoutsFromJSON(json: any): WebServiceDashboardLayouts {
    return WebServiceDashboardLayoutsFromJSONTyped(json, false);
}

export function WebServiceDashboardLayoutsFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceDashboardLayouts {
    if (json == null) {
        return json;
    }
    return {
        
        'layouts': json['layouts'] == null ? undefined : ((json['layouts'] as Array<any>).map(WebServiceDashboardLayoutsLayoutFromJSON)),
    };
}

export function WebServiceDashboardLayoutsToJSON(value?: WebServiceDashboardLayouts | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'layouts': value['layouts'] == null ? undefined : ((value['layouts'] as Array<any>).map(WebServiceDashboardLayoutsLayoutToJSON)),
    };
}

