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
import type { PriceServiceCheckLatestPriceResponseCoinPrice } from './PriceServiceCheckLatestPriceResponseCoinPrice.js';
import {
    PriceServiceCheckLatestPriceResponseCoinPriceFromJSON,
    PriceServiceCheckLatestPriceResponseCoinPriceFromJSONTyped,
    PriceServiceCheckLatestPriceResponseCoinPriceToJSON,
    PriceServiceCheckLatestPriceResponseCoinPriceToJSONTyped,
} from './PriceServiceCheckLatestPriceResponseCoinPrice.js';

/**
 * 
 * @export
 * @interface PriceServiceCheckLatestPriceResponse
 */
export interface PriceServiceCheckLatestPriceResponse {
    /**
     * 
     * @type {Array<PriceServiceCheckLatestPriceResponseCoinPrice>}
     * @memberof PriceServiceCheckLatestPriceResponse
     */
    prices?: Array<PriceServiceCheckLatestPriceResponseCoinPrice>;
    /**
     * 
     * @type {PriceServiceCheckLatestPriceResponseCoinPrice}
     * @memberof PriceServiceCheckLatestPriceResponse
     */
    latestPrice?: PriceServiceCheckLatestPriceResponseCoinPrice;
}

/**
 * Check if a given object implements the PriceServiceCheckLatestPriceResponse interface.
 */
export function instanceOfPriceServiceCheckLatestPriceResponse(value: object): value is PriceServiceCheckLatestPriceResponse {
    return true;
}

export function PriceServiceCheckLatestPriceResponseFromJSON(json: any): PriceServiceCheckLatestPriceResponse {
    return PriceServiceCheckLatestPriceResponseFromJSONTyped(json, false);
}

export function PriceServiceCheckLatestPriceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PriceServiceCheckLatestPriceResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'prices': json['prices'] == null ? undefined : ((json['prices'] as Array<any>).map(PriceServiceCheckLatestPriceResponseCoinPriceFromJSON)),
        'latestPrice': json['latestPrice'] == null ? undefined : PriceServiceCheckLatestPriceResponseCoinPriceFromJSON(json['latestPrice']),
    };
}

  export function PriceServiceCheckLatestPriceResponseToJSON(json: any): PriceServiceCheckLatestPriceResponse {
      return PriceServiceCheckLatestPriceResponseToJSONTyped(json, false);
  }

  export function PriceServiceCheckLatestPriceResponseToJSONTyped(value?: PriceServiceCheckLatestPriceResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'prices': value['prices'] == null ? undefined : ((value['prices'] as Array<any>).map(PriceServiceCheckLatestPriceResponseCoinPriceToJSON)),
        'latestPrice': PriceServiceCheckLatestPriceResponseCoinPriceToJSON(value['latestPrice']),
    };
}
