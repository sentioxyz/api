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

import { SolidityServiceExternalFork } from '../models/SolidityServiceExternalFork.js';
import { SolidityServiceForkType } from '../models/SolidityServiceForkType.js';
import { SolidityServiceManagedFork } from '../models/SolidityServiceManagedFork.js';
import { HttpFile } from '../http/http.js';

export class SolidityServiceFork {
    'id'?: string;
    'type'?: SolidityServiceForkType;
    'name'?: string;
    'extra'?: string;
    'managedFork'?: SolidityServiceManagedFork;
    'externalFork'?: SolidityServiceExternalFork;
    'createTime'?: Date;
    'updateTime'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SolidityServiceForkType",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "extra",
            "baseName": "extra",
            "type": "string",
            "format": ""
        },
        {
            "name": "managedFork",
            "baseName": "managedFork",
            "type": "SolidityServiceManagedFork",
            "format": ""
        },
        {
            "name": "externalFork",
            "baseName": "externalFork",
            "type": "SolidityServiceExternalFork",
            "format": ""
        },
        {
            "name": "createTime",
            "baseName": "createTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updateTime",
            "baseName": "updateTime",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return SolidityServiceFork.attributeTypeMap;
    }

    public constructor() {
    }
}


