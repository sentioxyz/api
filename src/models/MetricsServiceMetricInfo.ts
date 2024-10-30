/* tslint:disable */
/* eslint-disable */
/**
 * Sentio API
 * Sentio Open API for query data
 *
 * The version of the OpenAPI document: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
import type { MetricsServiceMetricInfoLabelValues } from './MetricsServiceMetricInfoLabelValues.js';
import {
    MetricsServiceMetricInfoLabelValuesFromJSON,
    MetricsServiceMetricInfoLabelValuesFromJSONTyped,
    MetricsServiceMetricInfoLabelValuesToJSON,
    MetricsServiceMetricInfoLabelValuesToJSONTyped,
} from './MetricsServiceMetricInfoLabelValues.js';
import type { MetricsServiceMetricMetadata } from './MetricsServiceMetricMetadata.js';
import {
    MetricsServiceMetricMetadataFromJSON,
    MetricsServiceMetricMetadataFromJSONTyped,
    MetricsServiceMetricMetadataToJSON,
    MetricsServiceMetricMetadataToJSONTyped,
} from './MetricsServiceMetricMetadata.js';

/**
 * 
 * @export
 * @interface MetricsServiceMetricInfo
 */
export interface MetricsServiceMetricInfo {
    /**
     * 
     * @type {string}
     * @memberof MetricsServiceMetricInfo
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof MetricsServiceMetricInfo
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof MetricsServiceMetricInfo
     */
    projectId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof MetricsServiceMetricInfo
     */
    contractName?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof MetricsServiceMetricInfo
     */
    contractAddress?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof MetricsServiceMetricInfo
     */
    chainId?: Array<string>;
    /**
     * 
     * @type {{ [key: string]: MetricsServiceMetricInfoLabelValues; }}
     * @memberof MetricsServiceMetricInfo
     */
    labels?: { [key: string]: MetricsServiceMetricInfoLabelValues; };
    /**
     * 
     * @type {MetricsServiceMetricMetadata}
     * @memberof MetricsServiceMetricInfo
     */
    metadata?: MetricsServiceMetricMetadata;
}

/**
 * Check if a given object implements the MetricsServiceMetricInfo interface.
 */
export function instanceOfMetricsServiceMetricInfo(value: object): value is MetricsServiceMetricInfo {
    return true;
}

export function MetricsServiceMetricInfoFromJSON(json: any): MetricsServiceMetricInfo {
    return MetricsServiceMetricInfoFromJSONTyped(json, false);
}

export function MetricsServiceMetricInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetricsServiceMetricInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'displayName': json['displayName'] == null ? undefined : json['displayName'],
        'projectId': json['projectId'] == null ? undefined : json['projectId'],
        'contractName': json['contractName'] == null ? undefined : json['contractName'],
        'contractAddress': json['contractAddress'] == null ? undefined : json['contractAddress'],
        'chainId': json['chainId'] == null ? undefined : json['chainId'],
        'labels': json['labels'] == null ? undefined : (mapValues(json['labels'], MetricsServiceMetricInfoLabelValuesFromJSON)),
        'metadata': json['metadata'] == null ? undefined : MetricsServiceMetricMetadataFromJSON(json['metadata']),
    };
}

  export function MetricsServiceMetricInfoToJSON(json: any): MetricsServiceMetricInfo {
      return MetricsServiceMetricInfoToJSONTyped(json, false);
  }

  export function MetricsServiceMetricInfoToJSONTyped(value?: MetricsServiceMetricInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'displayName': value['displayName'],
        'projectId': value['projectId'],
        'contractName': value['contractName'],
        'contractAddress': value['contractAddress'],
        'chainId': value['chainId'],
        'labels': value['labels'] == null ? undefined : (mapValues(value['labels'], MetricsServiceMetricInfoLabelValuesToJSON)),
        'metadata': MetricsServiceMetricMetadataToJSON(value['metadata']),
    };
}

