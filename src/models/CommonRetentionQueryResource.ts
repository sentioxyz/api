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

import { CommonRetentionQueryFilter } from '../models/CommonRetentionQueryFilter.js';
import { HttpFile } from '../http/http.js';

export class CommonRetentionQueryResource {
    'eventNames'?: Array<string>;
    'filter'?: CommonRetentionQueryFilter;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "eventNames",
            "baseName": "eventNames",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "CommonRetentionQueryFilter",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CommonRetentionQueryResource.attributeTypeMap;
    }

    public constructor() {
    }
}
