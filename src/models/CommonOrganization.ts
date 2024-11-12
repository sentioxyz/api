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

import { CommonOrganizationMember } from '../models/CommonOrganizationMember.js';
import { CommonProjectInfo } from '../models/CommonProjectInfo.js';
import { CommonTier } from '../models/CommonTier.js';
import { HttpFile } from '../http/http.js';

export class CommonOrganization {
    'id'?: string;
    'oid'?: string;
    'name'?: string;
    'createdAt'?: string;
    'updatedAt'?: string;
    'members'?: Array<CommonOrganizationMember>;
    'displayName'?: string;
    'logoUrl'?: string;
    'projects'?: Array<CommonProjectInfo>;
    'tier'?: CommonTier;

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
            "name": "oid",
            "baseName": "oid",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "members",
            "baseName": "members",
            "type": "Array<CommonOrganizationMember>",
            "format": ""
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string",
            "format": ""
        },
        {
            "name": "logoUrl",
            "baseName": "logoUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "projects",
            "baseName": "projects",
            "type": "Array<CommonProjectInfo>",
            "format": ""
        },
        {
            "name": "tier",
            "baseName": "tier",
            "type": "CommonTier",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CommonOrganization.attributeTypeMap;
    }

    public constructor() {
    }
}


