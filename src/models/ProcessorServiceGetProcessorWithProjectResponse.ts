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
import { ProcessorServiceProcessor } from '../models/ProcessorServiceProcessor.js';
import { HttpFile } from '../http/http.js';

export class ProcessorServiceGetProcessorWithProjectResponse {
    'processor'?: ProcessorServiceProcessor;
    'project'?: CommonProject;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "processor",
            "baseName": "processor",
            "type": "ProcessorServiceProcessor",
            "format": ""
        },
        {
            "name": "project",
            "baseName": "project",
            "type": "CommonProject",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProcessorServiceGetProcessorWithProjectResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
