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
 * GetPriceResponse is the response for GetPrice.
 * @export
 * @interface PriceServiceGetPriceResponse
 */
export interface PriceServiceGetPriceResponse {
    /**
     * Price in USD.
     * @type {number}
     * @memberof PriceServiceGetPriceResponse
     */
    price?: number;
    /**
     * The actual timestamp of the price returned.
     * @type {Date}
     * @memberof PriceServiceGetPriceResponse
     */
    timestamp?: Date;
}

/**
 * Check if a given object implements the PriceServiceGetPriceResponse interface.
 */
export function instanceOfPriceServiceGetPriceResponse(value: object): boolean {
    return true;
}

export function PriceServiceGetPriceResponseFromJSON(json: any): PriceServiceGetPriceResponse {
    return PriceServiceGetPriceResponseFromJSONTyped(json, false);
}

export function PriceServiceGetPriceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PriceServiceGetPriceResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'price': json['price'] == null ? undefined : json['price'],
        'timestamp': json['timestamp'] == null ? undefined : (new Date(json['timestamp'])),
    };
}

export function PriceServiceGetPriceResponseToJSON(value?: PriceServiceGetPriceResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'price': value['price'],
        'timestamp': value['timestamp'] == null ? undefined : ((value['timestamp']).toISOString()),
    };
}

