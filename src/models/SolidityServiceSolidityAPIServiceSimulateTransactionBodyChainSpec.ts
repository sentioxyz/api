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
 * @interface SolidityServiceSolidityAPIServiceSimulateTransactionBodyChainSpec
 */
export interface SolidityServiceSolidityAPIServiceSimulateTransactionBodyChainSpec {
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceSolidityAPIServiceSimulateTransactionBodyChainSpec
     */
    chainId?: string;
}

/**
 * Check if a given object implements the SolidityServiceSolidityAPIServiceSimulateTransactionBodyChainSpec interface.
 */
export function instanceOfSolidityServiceSolidityAPIServiceSimulateTransactionBodyChainSpec(value: object): value is SolidityServiceSolidityAPIServiceSimulateTransactionBodyChainSpec {
    return true;
}

export function SolidityServiceSolidityAPIServiceSimulateTransactionBodyChainSpecFromJSON(json: any): SolidityServiceSolidityAPIServiceSimulateTransactionBodyChainSpec {
    return SolidityServiceSolidityAPIServiceSimulateTransactionBodyChainSpecFromJSONTyped(json, false);
}

export function SolidityServiceSolidityAPIServiceSimulateTransactionBodyChainSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolidityServiceSolidityAPIServiceSimulateTransactionBodyChainSpec {
    if (json == null) {
        return json;
    }
    return {
        
        'chainId': json['chainId'] == null ? undefined : json['chainId'],
    };
}

  export function SolidityServiceSolidityAPIServiceSimulateTransactionBodyChainSpecToJSON(json: any): SolidityServiceSolidityAPIServiceSimulateTransactionBodyChainSpec {
      return SolidityServiceSolidityAPIServiceSimulateTransactionBodyChainSpecToJSONTyped(json, false);
  }

  export function SolidityServiceSolidityAPIServiceSimulateTransactionBodyChainSpecToJSONTyped(value?: SolidityServiceSolidityAPIServiceSimulateTransactionBodyChainSpec | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'chainId': value['chainId'],
    };
}
