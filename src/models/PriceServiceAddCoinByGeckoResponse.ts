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

import { PriceServiceAddCoinByGeckoResponseStatus } from '../models/PriceServiceAddCoinByGeckoResponseStatus.js';
import { PriceServiceCoinID } from '../models/PriceServiceCoinID.js';
import { HttpFile } from '../http/http.js';

export class PriceServiceAddCoinByGeckoResponse {
    'status'?: PriceServiceAddCoinByGeckoResponseStatus;
    'message'?: string;
    'currentPrice'?: number;
    'timestamp'?: Date;
    'symbol'?: string;
    'coins'?: Array<PriceServiceCoinID>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "PriceServiceAddCoinByGeckoResponseStatus",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "currentPrice",
            "baseName": "currentPrice",
            "type": "number",
            "format": "double"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "coins",
            "baseName": "coins",
            "type": "Array<PriceServiceCoinID>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PriceServiceAddCoinByGeckoResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


