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

import { CommonProjectVariablesVariable } from '../models/CommonProjectVariablesVariable.js';
import { HttpFile } from '../http/http.js';

export class CommonProjectVariables {
    'projectId'?: string;
    'variables'?: Array<CommonProjectVariablesVariable>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "string",
            "format": ""
        },
        {
            "name": "variables",
            "baseName": "variables",
            "type": "Array<CommonProjectVariablesVariable>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CommonProjectVariables.attributeTypeMap;
    }

    public constructor() {
    }
}