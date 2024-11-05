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
 * @interface SolidityServiceChainIdentifier
 */
export interface SolidityServiceChainIdentifier {
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceChainIdentifier
     */
    chainId?: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceChainIdentifier
     */
    forkId?: string;
}

/**
 * Check if a given object implements the SolidityServiceChainIdentifier interface.
 */
export function instanceOfSolidityServiceChainIdentifier(value: object): value is SolidityServiceChainIdentifier {
    return true;
}

export function SolidityServiceChainIdentifierFromJSON(json: any): SolidityServiceChainIdentifier {
    return SolidityServiceChainIdentifierFromJSONTyped(json, false);
}

export function SolidityServiceChainIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolidityServiceChainIdentifier {
    if (json == null) {
        return json;
    }
    return {
        
        'chainId': json['chainId'] == null ? undefined : json['chainId'],
        'forkId': json['forkId'] == null ? undefined : json['forkId'],
    };
}

  export function SolidityServiceChainIdentifierToJSON(json: any): SolidityServiceChainIdentifier {
      return SolidityServiceChainIdentifierToJSONTyped(json, false);
  }

  export function SolidityServiceChainIdentifierToJSONTyped(value?: SolidityServiceChainIdentifier | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'chainId': value['chainId'],
        'forkId': value['forkId'],
    };
}

