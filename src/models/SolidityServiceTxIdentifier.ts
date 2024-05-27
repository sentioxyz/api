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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SolidityServiceTxIdentifier
 */
export interface SolidityServiceTxIdentifier {
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceTxIdentifier
     */
    txHash: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceTxIdentifier
     */
    simulationId?: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceTxIdentifier
     */
    bundleId?: string;
}

/**
 * Check if a given object implements the SolidityServiceTxIdentifier interface.
 */
export function instanceOfSolidityServiceTxIdentifier(value: object): boolean {
    if (!('txHash' in value)) return false;
    return true;
}

export function SolidityServiceTxIdentifierFromJSON(json: any): SolidityServiceTxIdentifier {
    return SolidityServiceTxIdentifierFromJSONTyped(json, false);
}

export function SolidityServiceTxIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolidityServiceTxIdentifier {
    if (json == null) {
        return json;
    }
    return {
        
        'txHash': json['txHash'],
        'simulationId': json['simulationId'] == null ? undefined : json['simulationId'],
        'bundleId': json['bundleId'] == null ? undefined : json['bundleId'],
    };
}

export function SolidityServiceTxIdentifierToJSON(value?: SolidityServiceTxIdentifier | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'txHash': value['txHash'],
        'simulationId': value['simulationId'],
        'bundleId': value['bundleId'],
    };
}

