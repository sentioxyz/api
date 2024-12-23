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

import { SolidityServiceChainIdentifier } from '../models/SolidityServiceChainIdentifier.js';
import { HttpFile } from '../http/http.js';

export class SolidityServiceManagedFork {
    'chainSpec'?: SolidityServiceChainIdentifier;
    'rpcEndpoint'?: string;
    'parentBlockNumber'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "chainSpec",
            "baseName": "chainSpec",
            "type": "SolidityServiceChainIdentifier",
            "format": ""
        },
        {
            "name": "rpcEndpoint",
            "baseName": "rpcEndpoint",
            "type": "string",
            "format": ""
        },
        {
            "name": "parentBlockNumber",
            "baseName": "parentBlockNumber",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return SolidityServiceManagedFork.attributeTypeMap;
    }

    public constructor() {
    }
}
