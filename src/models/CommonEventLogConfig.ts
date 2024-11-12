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

import { CommonColumnState } from '../models/CommonColumnState.js';
import { CommonEventLogColumn } from '../models/CommonEventLogColumn.js';
import { HttpFile } from '../http/http.js';

export class CommonEventLogConfig {
    'columns'?: Array<CommonEventLogColumn>;
    'state'?: CommonColumnState;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "columns",
            "baseName": "columns",
            "type": "Array<CommonEventLogColumn>",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "CommonColumnState",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CommonEventLogConfig.attributeTypeMap;
    }

    public constructor() {
    }
}
