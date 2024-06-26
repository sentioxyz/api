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
 * @interface WebServiceDashboardExtraTemplateView
 */
export interface WebServiceDashboardExtraTemplateView {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof WebServiceDashboardExtraTemplateView
     */
    values?: { [key: string]: string; };
}

/**
 * Check if a given object implements the WebServiceDashboardExtraTemplateView interface.
 */
export function instanceOfWebServiceDashboardExtraTemplateView(value: object): boolean {
    return true;
}

export function WebServiceDashboardExtraTemplateViewFromJSON(json: any): WebServiceDashboardExtraTemplateView {
    return WebServiceDashboardExtraTemplateViewFromJSONTyped(json, false);
}

export function WebServiceDashboardExtraTemplateViewFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceDashboardExtraTemplateView {
    if (json == null) {
        return json;
    }
    return {
        
        'values': json['values'] == null ? undefined : json['values'],
    };
}

export function WebServiceDashboardExtraTemplateViewToJSON(value?: WebServiceDashboardExtraTemplateView | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'values': value['values'],
    };
}

