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

import { CommonTimeRangeRelativeTime } from '../models/CommonTimeRangeRelativeTime.js';
import { HttpFile } from '../http/http.js';

export class CommonTimeRangeTimeLike {
    'relativeTime'?: CommonTimeRangeRelativeTime;
    'absoluteTime'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "relativeTime",
            "baseName": "relativeTime",
            "type": "CommonTimeRangeRelativeTime",
            "format": ""
        },
        {
            "name": "absoluteTime",
            "baseName": "absoluteTime",
            "type": "string",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return CommonTimeRangeTimeLike.attributeTypeMap;
    }

    public constructor() {
    }
}
