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

import { AnalyticServiceExecutionStatus } from '../models/AnalyticServiceExecutionStatus.js';
import { CommonComputeStats } from '../models/CommonComputeStats.js';
import { CommonTabularData } from '../models/CommonTabularData.js';
import { HttpFile } from '../http/http.js';

export class AnalyticServiceExecutionInfo {
    'queryId'?: string;
    'executionId'?: string;
    'status'?: AnalyticServiceExecutionStatus;
    'scheduledAt'?: Date;
    'startedAt'?: Date;
    'finishedAt'?: Date;
    'result'?: CommonTabularData;
    'error'?: string;
    'computeStats'?: CommonComputeStats;
    'processorVersion'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "queryId",
            "baseName": "queryId",
            "type": "string",
            "format": ""
        },
        {
            "name": "executionId",
            "baseName": "executionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "AnalyticServiceExecutionStatus",
            "format": ""
        },
        {
            "name": "scheduledAt",
            "baseName": "scheduledAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "startedAt",
            "baseName": "startedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "finishedAt",
            "baseName": "finishedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "result",
            "baseName": "result",
            "type": "CommonTabularData",
            "format": ""
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string",
            "format": ""
        },
        {
            "name": "computeStats",
            "baseName": "computeStats",
            "type": "CommonComputeStats",
            "format": ""
        },
        {
            "name": "processorVersion",
            "baseName": "processorVersion",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return AnalyticServiceExecutionInfo.attributeTypeMap;
    }

    public constructor() {
    }
}


