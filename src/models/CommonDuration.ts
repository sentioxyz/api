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

import { HttpFile } from '../http/http.js';

export class CommonDuration {
    'value'?: number;
    'unit'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": "double"
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CommonDuration.attributeTypeMap;
    }

    public constructor() {
    }
}
