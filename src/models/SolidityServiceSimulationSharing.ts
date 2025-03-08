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

export class SolidityServiceSimulationSharing {
    'isPublic'?: boolean;
    'id'?: string;
    'simulationId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "isPublic",
            "baseName": "isPublic",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "simulationId",
            "baseName": "simulationId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SolidityServiceSimulationSharing.attributeTypeMap;
    }

    public constructor() {
    }
}
