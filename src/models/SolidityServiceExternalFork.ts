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

import { SolidityServiceBaseChainConfig } from '../models/SolidityServiceBaseChainConfig.js';
import { HttpFile } from '../http/http.js';

export class SolidityServiceExternalFork {
    'chainConfig'?: SolidityServiceBaseChainConfig;
    'nodeAdditionalHeaders'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "chainConfig",
            "baseName": "chainConfig",
            "type": "SolidityServiceBaseChainConfig",
            "format": ""
        },
        {
            "name": "nodeAdditionalHeaders",
            "baseName": "nodeAdditionalHeaders",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SolidityServiceExternalFork.attributeTypeMap;
    }

    public constructor() {
    }
}
