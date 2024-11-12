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

import { CommonAny } from '../models/CommonAny.js';
import { CommonSelectorOperatorType } from '../models/CommonSelectorOperatorType.js';
import { HttpFile } from '../http/http.js';

export class CommonSelector {
    'key'?: string;
    'operator'?: CommonSelectorOperatorType;
    'value'?: Array<CommonAny>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "CommonSelectorOperatorType",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "Array<CommonAny>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CommonSelector.attributeTypeMap;
    }

    public constructor() {
    }
}


