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

import { SolidityServiceFailure } from '../models/SolidityServiceFailure.js';
import { HttpFile } from '../http/http.js';

export class SolidityServiceFetchAndCompileInternalResponse {
    'compiledAddresses'?: Array<string>;
    'failures'?: { [key: string]: SolidityServiceFailure; };

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "compiledAddresses",
            "baseName": "compiledAddresses",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "failures",
            "baseName": "failures",
            "type": "{ [key: string]: SolidityServiceFailure; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SolidityServiceFetchAndCompileInternalResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
