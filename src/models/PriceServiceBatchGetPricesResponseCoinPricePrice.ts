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
import type { PriceServiceGetPriceResponse } from './PriceServiceGetPriceResponse.js';
import {
    PriceServiceGetPriceResponseFromJSON,
    PriceServiceGetPriceResponseFromJSONTyped,
    PriceServiceGetPriceResponseToJSON,
    PriceServiceGetPriceResponseToJSONTyped,
} from './PriceServiceGetPriceResponse.js';

/**
 * 
 * @export
 * @interface PriceServiceBatchGetPricesResponseCoinPricePrice
 */
export interface PriceServiceBatchGetPricesResponseCoinPricePrice {
    /**
     * 
     * @type {Array<PriceServiceGetPriceResponse>}
     * @memberof PriceServiceBatchGetPricesResponseCoinPricePrice
     */
    results?: Array<PriceServiceGetPriceResponse>;
}

/**
 * Check if a given object implements the PriceServiceBatchGetPricesResponseCoinPricePrice interface.
 */
export function instanceOfPriceServiceBatchGetPricesResponseCoinPricePrice(value: object): value is PriceServiceBatchGetPricesResponseCoinPricePrice {
    return true;
}

export function PriceServiceBatchGetPricesResponseCoinPricePriceFromJSON(json: any): PriceServiceBatchGetPricesResponseCoinPricePrice {
    return PriceServiceBatchGetPricesResponseCoinPricePriceFromJSONTyped(json, false);
}

export function PriceServiceBatchGetPricesResponseCoinPricePriceFromJSONTyped(json: any, ignoreDiscriminator: boolean): PriceServiceBatchGetPricesResponseCoinPricePrice {
    if (json == null) {
        return json;
    }
    return {
        
        'results': json['results'] == null ? undefined : ((json['results'] as Array<any>).map(PriceServiceGetPriceResponseFromJSON)),
    };
}

  export function PriceServiceBatchGetPricesResponseCoinPricePriceToJSON(json: any): PriceServiceBatchGetPricesResponseCoinPricePrice {
      return PriceServiceBatchGetPricesResponseCoinPricePriceToJSONTyped(json, false);
  }

  export function PriceServiceBatchGetPricesResponseCoinPricePriceToJSONTyped(value?: PriceServiceBatchGetPricesResponseCoinPricePrice | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(PriceServiceGetPriceResponseToJSON)),
    };
}

