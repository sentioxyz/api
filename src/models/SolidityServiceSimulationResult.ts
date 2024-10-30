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
import type { EvmTransaction } from './EvmTransaction.js';
import {
    EvmTransactionFromJSON,
    EvmTransactionFromJSONTyped,
    EvmTransactionToJSON,
} from './EvmTransaction.js';
import type { EvmTransactionReceipt } from './EvmTransactionReceipt.js';
import {
    EvmTransactionReceiptFromJSON,
    EvmTransactionReceiptFromJSONTyped,
    EvmTransactionReceiptToJSON,
} from './EvmTransactionReceipt.js';

/**
 * 
 * @export
 * @interface SolidityServiceSimulationResult
 */
export interface SolidityServiceSimulationResult {
    /**
     * 
     * @type {EvmTransaction}
     * @memberof SolidityServiceSimulationResult
     */
    transaction?: EvmTransaction;
    /**
     * 
     * @type {EvmTransactionReceipt}
     * @memberof SolidityServiceSimulationResult
     */
    transactionReceipt?: EvmTransactionReceipt;
}

/**
 * Check if a given object implements the SolidityServiceSimulationResult interface.
 */
export function instanceOfSolidityServiceSimulationResult(value: object): boolean {
    return true;
}

export function SolidityServiceSimulationResultFromJSON(json: any): SolidityServiceSimulationResult {
    return SolidityServiceSimulationResultFromJSONTyped(json, false);
}

export function SolidityServiceSimulationResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolidityServiceSimulationResult {
    if (json == null) {
        return json;
    }
    return {
        
        'transaction': json['transaction'] == null ? undefined : EvmTransactionFromJSON(json['transaction']),
        'transactionReceipt': json['transactionReceipt'] == null ? undefined : EvmTransactionReceiptFromJSON(json['transactionReceipt']),
    };
}

export function SolidityServiceSimulationResultToJSON(value?: SolidityServiceSimulationResult | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'transaction': EvmTransactionToJSON(value['transaction']),
        'transactionReceipt': EvmTransactionReceiptToJSON(value['transactionReceipt']),
    };
}

