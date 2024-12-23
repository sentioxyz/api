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

import { CommonTier } from '../models/CommonTier.js';
import { CommonUserAccountStatus } from '../models/CommonUserAccountStatus.js';
import { HttpFile } from '../http/http.js';

export class CommonUser {
    'id'?: string;
    'email'?: string;
    'emailVerified'?: boolean;
    'lastName'?: string;
    'firstName'?: string;
    'locale'?: string;
    'nickname'?: string;
    'picture'?: string;
    'sub'?: string;
    'updatedAt'?: string;
    'createdAt'?: string;
    'username'?: string;
    'accountStatus'?: CommonUserAccountStatus;
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
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "emailVerified",
            "baseName": "emailVerified",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "locale",
            "baseName": "locale",
            "type": "string",
            "format": ""
        },
        {
            "name": "nickname",
            "baseName": "nickname",
            "type": "string",
            "format": ""
        },
        {
            "name": "picture",
            "baseName": "picture",
            "type": "string",
            "format": ""
        },
        {
            "name": "sub",
            "baseName": "sub",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountStatus",
            "baseName": "accountStatus",
            "type": "CommonUserAccountStatus",
            "format": ""
        },
        {
            "name": "tier",
            "baseName": "tier",
            "type": "CommonTier",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CommonUser.attributeTypeMap;
    }

    public constructor() {
    }
}


