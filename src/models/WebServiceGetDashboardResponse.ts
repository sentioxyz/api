/**
 * Sentio API
 * Sentio Open API for query data
 *
 * OpenAPI spec version: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CommonPermission } from '../models/CommonPermission.js';
import { WebServiceDashboard } from '../models/WebServiceDashboard.js';
import { HttpFile } from '../http/http.js';

export class WebServiceGetDashboardResponse {
    'dashboards'?: Array<WebServiceDashboard>;
    'permissions'?: Array<CommonPermission>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dashboards",
            "baseName": "dashboards",
            "type": "Array<WebServiceDashboard>",
            "format": ""
        },
        {
            "name": "permissions",
            "baseName": "permissions",
            "type": "Array<CommonPermission>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WebServiceGetDashboardResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
