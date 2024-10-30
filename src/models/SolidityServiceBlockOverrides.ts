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
 * @interface SolidityServiceBlockOverrides
 */
export interface SolidityServiceBlockOverrides {
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceBlockOverrides
     */
    blockNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceBlockOverrides
     */
    timestamp?: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceBlockOverrides
     */
    gasLimit?: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceBlockOverrides
     */
    difficulty?: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceBlockOverrides
     */
    baseFee?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SolidityServiceBlockOverrides
     */
    blockHash?: { [key: string]: string; };
}

/**
 * Check if a given object implements the SolidityServiceBlockOverrides interface.
 */
export function instanceOfSolidityServiceBlockOverrides(value: object): value is SolidityServiceBlockOverrides {
    return true;
}

export function SolidityServiceBlockOverridesFromJSON(json: any): SolidityServiceBlockOverrides {
    return SolidityServiceBlockOverridesFromJSONTyped(json, false);
}

export function SolidityServiceBlockOverridesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolidityServiceBlockOverrides {
    if (json == null) {
        return json;
    }
    return {
        
        'blockNumber': json['blockNumber'] == null ? undefined : json['blockNumber'],
        'timestamp': json['timestamp'] == null ? undefined : json['timestamp'],
        'gasLimit': json['gasLimit'] == null ? undefined : json['gasLimit'],
        'difficulty': json['difficulty'] == null ? undefined : json['difficulty'],
        'baseFee': json['baseFee'] == null ? undefined : json['baseFee'],
        'blockHash': json['blockHash'] == null ? undefined : json['blockHash'],
    };
}

  export function SolidityServiceBlockOverridesToJSON(json: any): SolidityServiceBlockOverrides {
      return SolidityServiceBlockOverridesToJSONTyped(json, false);
  }

  export function SolidityServiceBlockOverridesToJSONTyped(value?: SolidityServiceBlockOverrides | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'blockNumber': value['blockNumber'],
        'timestamp': value['timestamp'],
        'gasLimit': value['gasLimit'],
        'difficulty': value['difficulty'],
        'baseFee': value['baseFee'],
        'blockHash': value['blockHash'],
    };
}

