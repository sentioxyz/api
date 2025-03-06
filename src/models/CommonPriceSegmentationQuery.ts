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

import { CommonCoinID } from '../models/CommonCoinID.js';
import { HttpFile } from '../http/http.js';

export class CommonPriceSegmentationQuery {
    'id'?: string;
    'alias'?: string;
    'coinId'?: Array<CommonCoinID>;
    'color'?: string;
    'disabled'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "alias",
            "baseName": "alias",
            "type": "string",
            "format": ""
        },
        {
            "name": "coinId",
            "baseName": "coinId",
            "type": "Array<CommonCoinID>",
            "format": ""
        },
        {
            "name": "color",
            "baseName": "color",
            "type": "string",
            "format": ""
        },
        {
            "name": "disabled",
            "baseName": "disabled",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CommonPriceSegmentationQuery.attributeTypeMap;
    }

    public constructor() {
    }
}
