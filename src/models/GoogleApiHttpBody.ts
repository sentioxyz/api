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

import { GoogleProtobufAny } from '../models/GoogleProtobufAny.js';
import { HttpFile } from '../http/http.js';

export class GoogleApiHttpBody {
    'contentType'?: string;
    'data'?: string;
    'extensions'?: Array<GoogleProtobufAny>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "contentType",
            "baseName": "contentType",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "string",
            "format": "byte"
        },
        {
            "name": "extensions",
            "baseName": "extensions",
            "type": "Array<GoogleProtobufAny>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GoogleApiHttpBody.attributeTypeMap;
    }

    public constructor() {
    }
}
