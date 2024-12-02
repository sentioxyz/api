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

import { AlertServiceAlertRule } from '../models/AlertServiceAlertRule.js';
import { HttpFile } from '../http/http.js';

export class AlertServiceSaveAlertRuleRequest {
    'rule'?: AlertServiceAlertRule;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "rule",
            "baseName": "rule",
            "type": "AlertServiceAlertRule",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AlertServiceSaveAlertRuleRequest.attributeTypeMap;
    }

    public constructor() {
    }
}