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
import type { WebServiceChart } from './WebServiceChart';
import {
    WebServiceChartFromJSON,
    WebServiceChartFromJSONTyped,
    WebServiceChartToJSON,
} from './WebServiceChart';

/**
 * 
 * @export
 * @interface WebServicePanel
 */
export interface WebServicePanel {
    /**
     * 
     * @type {string}
     * @memberof WebServicePanel
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof WebServicePanel
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof WebServicePanel
     */
    dashboardId?: string;
    /**
     * 
     * @type {WebServiceChart}
     * @memberof WebServicePanel
     */
    chart?: WebServiceChart;
}

/**
 * Check if a given object implements the WebServicePanel interface.
 */
export function instanceOfWebServicePanel(value: object): boolean {
    return true;
}

export function WebServicePanelFromJSON(json: any): WebServicePanel {
    return WebServicePanelFromJSONTyped(json, false);
}

export function WebServicePanelFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServicePanel {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'dashboardId': json['dashboardId'] == null ? undefined : json['dashboardId'],
        'chart': json['chart'] == null ? undefined : WebServiceChartFromJSON(json['chart']),
    };
}

export function WebServicePanelToJSON(value?: WebServicePanel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'dashboardId': value['dashboardId'],
        'chart': WebServiceChartToJSON(value['chart']),
    };
}

