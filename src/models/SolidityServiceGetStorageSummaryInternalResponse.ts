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

import { SolidityServiceStorageSummaryResult } from '../models/SolidityServiceStorageSummaryResult.js';
import { HttpFile } from '../http/http.js';

export class SolidityServiceGetStorageSummaryInternalResponse {
    'results'?: Array<SolidityServiceStorageSummaryResult>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<SolidityServiceStorageSummaryResult>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SolidityServiceGetStorageSummaryInternalResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
