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
/**
 * 
 * @export
 * @interface CommonComputeStats
 */
export interface CommonComputeStats {
    /**
     * 
     * @type {Date}
     * @memberof CommonComputeStats
     */
    computedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof CommonComputeStats
     */
    computeCostMs?: string;
    /**
     * 
     * @type {string}
     * @memberof CommonComputeStats
     */
    binaryVersionHash?: string;
    /**
     * 
     * @type {string}
     * @memberof CommonComputeStats
     */
    computedBy?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CommonComputeStats
     */
    isCached?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommonComputeStats
     */
    isRefreshing?: boolean;
}

/**
 * Check if a given object implements the CommonComputeStats interface.
 */
export function instanceOfCommonComputeStats(value: object): value is CommonComputeStats {
    return true;
}

export function CommonComputeStatsFromJSON(json: any): CommonComputeStats {
    return CommonComputeStatsFromJSONTyped(json, false);
}

export function CommonComputeStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonComputeStats {
    if (json == null) {
        return json;
    }
    return {
        
        'computedAt': json['computedAt'] == null ? undefined : (new Date(json['computedAt'])),
        'computeCostMs': json['computeCostMs'] == null ? undefined : json['computeCostMs'],
        'binaryVersionHash': json['binaryVersionHash'] == null ? undefined : json['binaryVersionHash'],
        'computedBy': json['computedBy'] == null ? undefined : json['computedBy'],
        'isCached': json['isCached'] == null ? undefined : json['isCached'],
        'isRefreshing': json['isRefreshing'] == null ? undefined : json['isRefreshing'],
    };
}

  export function CommonComputeStatsToJSON(json: any): CommonComputeStats {
      return CommonComputeStatsToJSONTyped(json, false);
  }

  export function CommonComputeStatsToJSONTyped(value?: CommonComputeStats | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'computedAt': value['computedAt'] == null ? undefined : ((value['computedAt']).toISOString()),
        'computeCostMs': value['computeCostMs'],
        'binaryVersionHash': value['binaryVersionHash'],
        'computedBy': value['computedBy'],
        'isCached': value['isCached'],
        'isRefreshing': value['isRefreshing'],
    };
}

