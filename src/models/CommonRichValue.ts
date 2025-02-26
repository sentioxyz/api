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

import { CommonBigDecimal } from '../models/CommonBigDecimal.js';
import { CommonBigInteger } from '../models/CommonBigInteger.js';
import { CommonRichStruct } from '../models/CommonRichStruct.js';
import { CommonRichValueList } from '../models/CommonRichValueList.js';
import { CommonRichValueNullValue } from '../models/CommonRichValueNullValue.js';
import { CommonTokenAmount } from '../models/CommonTokenAmount.js';
import { HttpFile } from '../http/http.js';

export class CommonRichValue {
    'nullValue'?: CommonRichValueNullValue;
    'intValue'?: number;
    'int64Value'?: string;
    'floatValue'?: number;
    'bytesValue'?: string;
    'boolValue'?: boolean;
    'stringValue'?: string;
    'timestampValue'?: Date;
    'bigintValue'?: CommonBigInteger;
    'bigdecimalValue'?: CommonBigDecimal;
    'listValue'?: CommonRichValueList;
    'structValue'?: CommonRichStruct;
    'tokenValue'?: CommonTokenAmount;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "nullValue",
            "baseName": "nullValue",
            "type": "CommonRichValueNullValue",
            "format": ""
        },
        {
            "name": "intValue",
            "baseName": "intValue",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "int64Value",
            "baseName": "int64Value",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "floatValue",
            "baseName": "floatValue",
            "type": "number",
            "format": "double"
        },
        {
            "name": "bytesValue",
            "baseName": "bytesValue",
            "type": "string",
            "format": "byte"
        },
        {
            "name": "boolValue",
            "baseName": "boolValue",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "stringValue",
            "baseName": "stringValue",
            "type": "string",
            "format": ""
        },
        {
            "name": "timestampValue",
            "baseName": "timestampValue",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "bigintValue",
            "baseName": "bigintValue",
            "type": "CommonBigInteger",
            "format": ""
        },
        {
            "name": "bigdecimalValue",
            "baseName": "bigdecimalValue",
            "type": "CommonBigDecimal",
            "format": ""
        },
        {
            "name": "listValue",
            "baseName": "listValue",
            "type": "CommonRichValueList",
            "format": ""
        },
        {
            "name": "structValue",
            "baseName": "structValue",
            "type": "CommonRichStruct",
            "format": ""
        },
        {
            "name": "tokenValue",
            "baseName": "tokenValue",
            "type": "CommonTokenAmount",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CommonRichValue.attributeTypeMap;
    }

    public constructor() {
    }
}


