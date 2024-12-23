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

import { CommonFunction } from '../models/CommonFunction.js';
import { CommonSegmentationQueryAggregation } from '../models/CommonSegmentationQueryAggregation.js';
import { CommonSegmentationQueryResource } from '../models/CommonSegmentationQueryResource.js';
import { CommonSegmentationQuerySelectorExpr } from '../models/CommonSegmentationQuerySelectorExpr.js';
import { HttpFile } from '../http/http.js';

export class CommonSegmentationQuery {
    'resource'?: CommonSegmentationQueryResource;
    'alias'?: string;
    'id'?: string;
    'aggregation'?: CommonSegmentationQueryAggregation;
    'selectorExpr'?: CommonSegmentationQuerySelectorExpr;
    'groupBy'?: Array<string>;
    'limit'?: number;
    'functions'?: Array<CommonFunction>;
    'disabled'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "resource",
            "baseName": "resource",
            "type": "CommonSegmentationQueryResource",
            "format": ""
        },
        {
            "name": "alias",
            "baseName": "alias",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "aggregation",
            "baseName": "aggregation",
            "type": "CommonSegmentationQueryAggregation",
            "format": ""
        },
        {
            "name": "selectorExpr",
            "baseName": "selectorExpr",
            "type": "CommonSegmentationQuerySelectorExpr",
            "format": ""
        },
        {
            "name": "groupBy",
            "baseName": "groupBy",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "functions",
            "baseName": "functions",
            "type": "Array<CommonFunction>",
            "format": ""
        },
        {
            "name": "disabled",
            "baseName": "disabled",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CommonSegmentationQuery.attributeTypeMap;
    }

    public constructor() {
    }
}
