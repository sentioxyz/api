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


import * as runtime from '../runtime.js';
import type {
  PriceServiceBatchGetPricesResponse,
  PriceServiceCheckLatestPriceResponse,
  PriceServiceGetPriceResponse,
  PriceServiceListCoinsResponse,
} from '../models/index.js';
import {
    PriceServiceBatchGetPricesResponseFromJSON,
    PriceServiceBatchGetPricesResponseToJSON,
    PriceServiceCheckLatestPriceResponseFromJSON,
    PriceServiceCheckLatestPriceResponseToJSON,
    PriceServiceGetPriceResponseFromJSON,
    PriceServiceGetPriceResponseToJSON,
    PriceServiceListCoinsResponseFromJSON,
    PriceServiceListCoinsResponseToJSON,
} from '../models/index.js';

export interface BatchGetPricesRequest {
    timestamps?: Array<Date>;
}

export interface GetPriceRequest {
    timestamp?: Date;
    coinIdSymbol?: string;
    coinIdAddressAddress?: string;
    coinIdAddressChain?: string;
    source?: string;
}

export interface PriceListCoinsRequest {
    limit?: number;
    offset?: number;
    searchQuery?: string;
    chain?: string;
}

/**
 * 
 */
export class PriceApi extends runtime.BaseAPI {

    /**
     * Batch get prices
     */
    async batchGetPricesRaw(requestParameters: BatchGetPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PriceServiceBatchGetPricesResponse>> {
        const queryParameters: any = {};

        if (requestParameters['timestamps'] != null) {
            queryParameters['timestamps'] = requestParameters['timestamps'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api-key"] = await this.configuration.apiKey("api-key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/prices/batch`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PriceServiceBatchGetPricesResponseFromJSON(jsonValue));
    }

    /**
     * Batch get prices
     */
    async batchGetPrices(requestParameters: BatchGetPricesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PriceServiceBatchGetPricesResponse> {
        const response = await this.batchGetPricesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Check latest price
     */
    async checkLatestPriceRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PriceServiceCheckLatestPriceResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api-key"] = await this.configuration.apiKey("api-key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/prices/check_latest`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PriceServiceCheckLatestPriceResponseFromJSON(jsonValue));
    }

    /**
     * Check latest price
     */
    async checkLatestPrice(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PriceServiceCheckLatestPriceResponse> {
        const response = await this.checkLatestPriceRaw(initOverrides);
        return await response.value();
    }

    /**
     * GetPrice returns the price of a given coin identifier, in a best effort way. If we do not have any price data for the given coin, we will return NOT_FOUND error. If we have at least one price data for the given coin, we will return it with the actual timestamp. Client is responsible for checking the timestamp and decide whether to use the price or not.
     * Get price
     */
    async getPriceRaw(requestParameters: GetPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PriceServiceGetPriceResponse>> {
        const queryParameters: any = {};

        if (requestParameters['timestamp'] != null) {
            queryParameters['timestamp'] = (requestParameters['timestamp'] as any).toISOString();
        }

        if (requestParameters['coinIdSymbol'] != null) {
            queryParameters['coinId.symbol'] = requestParameters['coinIdSymbol'];
        }

        if (requestParameters['coinIdAddressAddress'] != null) {
            queryParameters['coinId.address.address'] = requestParameters['coinIdAddressAddress'];
        }

        if (requestParameters['coinIdAddressChain'] != null) {
            queryParameters['coinId.address.chain'] = requestParameters['coinIdAddressChain'];
        }

        if (requestParameters['source'] != null) {
            queryParameters['source'] = requestParameters['source'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api-key"] = await this.configuration.apiKey("api-key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/prices`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PriceServiceGetPriceResponseFromJSON(jsonValue));
    }

    /**
     * GetPrice returns the price of a given coin identifier, in a best effort way. If we do not have any price data for the given coin, we will return NOT_FOUND error. If we have at least one price data for the given coin, we will return it with the actual timestamp. Client is responsible for checking the timestamp and decide whether to use the price or not.
     * Get price
     */
    async getPrice(requestParameters: GetPriceRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PriceServiceGetPriceResponse> {
        const response = await this.getPriceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List coins
     */
    async priceListCoinsRaw(requestParameters: PriceListCoinsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PriceServiceListCoinsResponse>> {
        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['searchQuery'] != null) {
            queryParameters['searchQuery'] = requestParameters['searchQuery'];
        }

        if (requestParameters['chain'] != null) {
            queryParameters['chain'] = requestParameters['chain'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api-key"] = await this.configuration.apiKey("api-key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/prices/coins`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PriceServiceListCoinsResponseFromJSON(jsonValue));
    }

    /**
     * List coins
     */
    async priceListCoins(requestParameters: PriceListCoinsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PriceServiceListCoinsResponse> {
        const response = await this.priceListCoinsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
