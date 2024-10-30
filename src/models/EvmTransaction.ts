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
import type { EvmAccessListItem } from './EvmAccessListItem.js';
import {
    EvmAccessListItemFromJSON,
    EvmAccessListItemFromJSONTyped,
    EvmAccessListItemToJSON,
} from './EvmAccessListItem.js';

/**
 * 
 * @export
 * @interface EvmTransaction
 */
export interface EvmTransaction {
    /**
     * 
     * @type {string}
     * @memberof EvmTransaction
     */
    blockNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof EvmTransaction
     */
    blockHash?: string;
    /**
     * 
     * @type {string}
     * @memberof EvmTransaction
     */
    transactionIndex?: string;
    /**
     * 
     * @type {string}
     * @memberof EvmTransaction
     */
    hash?: string;
    /**
     * 
     * @type {string}
     * @memberof EvmTransaction
     */
    chainId?: string;
    /**
     * 
     * @type {string}
     * @memberof EvmTransaction
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof EvmTransaction
     */
    from?: string;
    /**
     * 
     * @type {string}
     * @memberof EvmTransaction
     */
    to?: string;
    /**
     * 
     * @type {string}
     * @memberof EvmTransaction
     */
    input?: string;
    /**
     * 
     * @type {string}
     * @memberof EvmTransaction
     */
    value?: string;
    /**
     * 
     * @type {string}
     * @memberof EvmTransaction
     */
    nonce?: string;
    /**
     * 
     * @type {string}
     * @memberof EvmTransaction
     */
    gas?: string;
    /**
     * 
     * @type {string}
     * @memberof EvmTransaction
     */
    gasPrice?: string;
    /**
     * 
     * @type {string}
     * @memberof EvmTransaction
     */
    maxFeePerGas?: string;
    /**
     * 
     * @type {string}
     * @memberof EvmTransaction
     */
    maxPriorityFeePerGas?: string;
    /**
     * 
     * @type {Array<EvmAccessListItem>}
     * @memberof EvmTransaction
     */
    accessList?: Array<EvmAccessListItem>;
}

/**
 * Check if a given object implements the EvmTransaction interface.
 */
export function instanceOfEvmTransaction(value: object): boolean {
    return true;
}

export function EvmTransactionFromJSON(json: any): EvmTransaction {
    return EvmTransactionFromJSONTyped(json, false);
}

export function EvmTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): EvmTransaction {
    if (json == null) {
        return json;
    }
    return {
        
        'blockNumber': json['blockNumber'] == null ? undefined : json['blockNumber'],
        'blockHash': json['blockHash'] == null ? undefined : json['blockHash'],
        'transactionIndex': json['transactionIndex'] == null ? undefined : json['transactionIndex'],
        'hash': json['hash'] == null ? undefined : json['hash'],
        'chainId': json['chainId'] == null ? undefined : json['chainId'],
        'type': json['type'] == null ? undefined : json['type'],
        'from': json['from'] == null ? undefined : json['from'],
        'to': json['to'] == null ? undefined : json['to'],
        'input': json['input'] == null ? undefined : json['input'],
        'value': json['value'] == null ? undefined : json['value'],
        'nonce': json['nonce'] == null ? undefined : json['nonce'],
        'gas': json['gas'] == null ? undefined : json['gas'],
        'gasPrice': json['gasPrice'] == null ? undefined : json['gasPrice'],
        'maxFeePerGas': json['maxFeePerGas'] == null ? undefined : json['maxFeePerGas'],
        'maxPriorityFeePerGas': json['maxPriorityFeePerGas'] == null ? undefined : json['maxPriorityFeePerGas'],
        'accessList': json['accessList'] == null ? undefined : ((json['accessList'] as Array<any>).map(EvmAccessListItemFromJSON)),
    };
}

export function EvmTransactionToJSON(value?: EvmTransaction | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'blockNumber': value['blockNumber'],
        'blockHash': value['blockHash'],
        'transactionIndex': value['transactionIndex'],
        'hash': value['hash'],
        'chainId': value['chainId'],
        'type': value['type'],
        'from': value['from'],
        'to': value['to'],
        'input': value['input'],
        'value': value['value'],
        'nonce': value['nonce'],
        'gas': value['gas'],
        'gasPrice': value['gasPrice'],
        'maxFeePerGas': value['maxFeePerGas'],
        'maxPriorityFeePerGas': value['maxPriorityFeePerGas'],
        'accessList': value['accessList'] == null ? undefined : ((value['accessList'] as Array<any>).map(EvmAccessListItemToJSON)),
    };
}

