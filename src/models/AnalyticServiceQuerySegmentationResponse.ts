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

import { AnalyticServiceQuerySegmentationResponseResult } from '../models/AnalyticServiceQuerySegmentationResponseResult.js';
import { HttpFile } from '../http/http.js';

export class AnalyticServiceQuerySegmentationResponse {
    'results'?: Array<AnalyticServiceQuerySegmentationResponseResult>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<AnalyticServiceQuerySegmentationResponseResult>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AnalyticServiceQuerySegmentationResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
