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

import { CommonProject } from '../models/CommonProject.js';
import { HttpFile } from '../http/http.js';

export class WebServiceGetProjectListResponse {
    'projects'?: Array<CommonProject>;
    'sharedProjects'?: Array<CommonProject>;
    'orgProjects'?: Array<CommonProject>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "projects",
            "baseName": "projects",
            "type": "Array<CommonProject>",
            "format": ""
        },
        {
            "name": "sharedProjects",
            "baseName": "sharedProjects",
            "type": "Array<CommonProject>",
            "format": ""
        },
        {
            "name": "orgProjects",
            "baseName": "orgProjects",
            "type": "Array<CommonProject>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WebServiceGetProjectListResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
