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

import { WebServiceDashboardExtraTemplateVariable } from '../models/WebServiceDashboardExtraTemplateVariable.js';
import { WebServiceDashboardExtraTemplateView } from '../models/WebServiceDashboardExtraTemplateView.js';
import { HttpFile } from '../http/http.js';

export class WebServiceDashboardExtra {
    'templateVariables'?: { [key: string]: WebServiceDashboardExtraTemplateVariable; };
    'templateViews'?: Array<WebServiceDashboardExtraTemplateView>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "templateVariables",
            "baseName": "templateVariables",
            "type": "{ [key: string]: WebServiceDashboardExtraTemplateVariable; }",
            "format": ""
        },
        {
            "name": "templateViews",
            "baseName": "templateViews",
            "type": "Array<WebServiceDashboardExtraTemplateView>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WebServiceDashboardExtra.attributeTypeMap;
    }

    public constructor() {
    }
}
