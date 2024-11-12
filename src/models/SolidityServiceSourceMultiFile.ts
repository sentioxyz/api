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

export class SolidityServiceSourceMultiFile {
    'source'?: { [key: string]: string; };
    'compilerSettings'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "source",
            "baseName": "source",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "compilerSettings",
            "baseName": "compilerSettings",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SolidityServiceSourceMultiFile.attributeTypeMap;
    }

    public constructor() {
    }
}
