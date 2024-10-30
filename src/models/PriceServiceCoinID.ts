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
import type { PriceServiceCoinIDAddressIdentifier } from './PriceServiceCoinIDAddressIdentifier.js';
import {
    PriceServiceCoinIDAddressIdentifierFromJSON,
    PriceServiceCoinIDAddressIdentifierFromJSONTyped,
    PriceServiceCoinIDAddressIdentifierToJSON,
    PriceServiceCoinIDAddressIdentifierToJSONTyped,
} from './PriceServiceCoinIDAddressIdentifier.js';

/**
 * The identifier of a coin.
 * @export
 * @interface PriceServiceCoinID
 */
export interface PriceServiceCoinID {
    /**
     * 
     * @type {string}
     * @memberof PriceServiceCoinID
     */
    symbol?: string;
    /**
     * 
     * @type {PriceServiceCoinIDAddressIdentifier}
     * @memberof PriceServiceCoinID
     */
    address?: PriceServiceCoinIDAddressIdentifier;
}

/**
 * Check if a given object implements the PriceServiceCoinID interface.
 */
export function instanceOfPriceServiceCoinID(value: object): value is PriceServiceCoinID {
    return true;
}

export function PriceServiceCoinIDFromJSON(json: any): PriceServiceCoinID {
    return PriceServiceCoinIDFromJSONTyped(json, false);
}

export function PriceServiceCoinIDFromJSONTyped(json: any, ignoreDiscriminator: boolean): PriceServiceCoinID {
    if (json == null) {
        return json;
    }
    return {
        
        'symbol': json['symbol'] == null ? undefined : json['symbol'],
        'address': json['address'] == null ? undefined : PriceServiceCoinIDAddressIdentifierFromJSON(json['address']),
    };
}

  export function PriceServiceCoinIDToJSON(json: any): PriceServiceCoinID {
      return PriceServiceCoinIDToJSONTyped(json, false);
  }

  export function PriceServiceCoinIDToJSONTyped(value?: PriceServiceCoinID | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'symbol': value['symbol'],
        'address': PriceServiceCoinIDAddressIdentifierToJSON(value['address']),
    };
}

