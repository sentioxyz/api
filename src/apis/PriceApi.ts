// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.js';
import {Configuration} from '../configuration.js';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.js';
import {ObjectSerializer} from '../models/ObjectSerializer.js';
import {ApiException} from './exception.js';
import {canConsumeForm, isCodeInRange} from '../util.js';
import {SecurityAuthentication} from '../auth/auth.js';


import { PriceServiceAddCoinByGeckoRequest } from '../models/PriceServiceAddCoinByGeckoRequest.js';
import { PriceServiceAddCoinByGeckoResponse } from '../models/PriceServiceAddCoinByGeckoResponse.js';
import { PriceServiceBatchGetPricesRequest } from '../models/PriceServiceBatchGetPricesRequest.js';
import { PriceServiceBatchGetPricesResponse } from '../models/PriceServiceBatchGetPricesResponse.js';
import { PriceServiceCheckLatestPriceResponse } from '../models/PriceServiceCheckLatestPriceResponse.js';
import { PriceServiceGetPriceResponse } from '../models/PriceServiceGetPriceResponse.js';
import { PriceServiceListCoinsResponse } from '../models/PriceServiceListCoinsResponse.js';

/**
 * no description
 */
export class PriceApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * coingecko id the API ID of the coin in coingecko web page.  please AWARE that the coingecko id is NOT the same as the symbol of the coin.  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/coingecko_apiid.png)
     * AddCoinByGecko adds a coin by its coingecko id.
     * @param body 
     */
    public async addCoinByGecko(body: PriceServiceAddCoinByGeckoRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("PriceApi", "addCoinByGecko", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/prices/add_coin_by_gecko';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "PriceServiceAddCoinByGeckoRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyHeaderAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyQueryAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Batch get prices
     * @param body 
     */
    public async batchGetPrices(body: PriceServiceBatchGetPricesRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("PriceApi", "batchGetPrices", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/prices/batch';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "PriceServiceBatchGetPricesRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyHeaderAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyQueryAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Check latest price
     */
    public async checkLatestPrice(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/api/v1/prices/check_latest';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyHeaderAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyQueryAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * GetPrice returns the price of a given coin identifier, in a best effort way. If we do not have any price data for the given coin, we will return NOT_FOUND error. If we have at least one price data for the given coin, we will return it with the actual timestamp. Client is responsible for checking the timestamp and decide whether to use the price or not.
     * Get price
     * @param timestamp The timestamp we request the price at. Note, the price service may not have the price at the exact timestamp, in which case it will return the price at the closest timestamp.
     * @param coinIdSymbol 
     * @param coinIdAddressAddress 
     * @param coinIdAddressChain 
     * @param source 
     */
    public async getPrice(timestamp?: Date, coinIdSymbol?: string, coinIdAddressAddress?: string, coinIdAddressChain?: string, source?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/api/v1/prices';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (timestamp !== undefined) {
            requestContext.setQueryParam("timestamp", ObjectSerializer.serialize(timestamp, "Date", "date-time"));
        }

        // Query Params
        if (coinIdSymbol !== undefined) {
            requestContext.setQueryParam("coinId.symbol", ObjectSerializer.serialize(coinIdSymbol, "string", ""));
        }

        // Query Params
        if (coinIdAddressAddress !== undefined) {
            requestContext.setQueryParam("coinId.address.address", ObjectSerializer.serialize(coinIdAddressAddress, "string", ""));
        }

        // Query Params
        if (coinIdAddressChain !== undefined) {
            requestContext.setQueryParam("coinId.address.chain", ObjectSerializer.serialize(coinIdAddressChain, "string", ""));
        }

        // Query Params
        if (source !== undefined) {
            requestContext.setQueryParam("source", ObjectSerializer.serialize(source, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyHeaderAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyQueryAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List coins
     * @param limit 
     * @param offset 
     * @param searchQuery 
     * @param chain 
     */
    public async priceListCoins(limit?: number, offset?: number, searchQuery?: string, chain?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/api/v1/prices/coins';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", "int32"));
        }

        // Query Params
        if (searchQuery !== undefined) {
            requestContext.setQueryParam("searchQuery", ObjectSerializer.serialize(searchQuery, "string", ""));
        }

        // Query Params
        if (chain !== undefined) {
            requestContext.setQueryParam("chain", ObjectSerializer.serialize(chain, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyHeaderAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyQueryAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class PriceApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addCoinByGecko
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addCoinByGeckoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PriceServiceAddCoinByGeckoResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PriceServiceAddCoinByGeckoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PriceServiceAddCoinByGeckoResponse", ""
            ) as PriceServiceAddCoinByGeckoResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PriceServiceAddCoinByGeckoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PriceServiceAddCoinByGeckoResponse", ""
            ) as PriceServiceAddCoinByGeckoResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to batchGetPrices
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async batchGetPricesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PriceServiceBatchGetPricesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PriceServiceBatchGetPricesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PriceServiceBatchGetPricesResponse", ""
            ) as PriceServiceBatchGetPricesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PriceServiceBatchGetPricesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PriceServiceBatchGetPricesResponse", ""
            ) as PriceServiceBatchGetPricesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to checkLatestPrice
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async checkLatestPriceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PriceServiceCheckLatestPriceResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PriceServiceCheckLatestPriceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PriceServiceCheckLatestPriceResponse", ""
            ) as PriceServiceCheckLatestPriceResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PriceServiceCheckLatestPriceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PriceServiceCheckLatestPriceResponse", ""
            ) as PriceServiceCheckLatestPriceResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPrice
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPriceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PriceServiceGetPriceResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PriceServiceGetPriceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PriceServiceGetPriceResponse", ""
            ) as PriceServiceGetPriceResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PriceServiceGetPriceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PriceServiceGetPriceResponse", ""
            ) as PriceServiceGetPriceResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to priceListCoins
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async priceListCoinsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PriceServiceListCoinsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PriceServiceListCoinsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PriceServiceListCoinsResponse", ""
            ) as PriceServiceListCoinsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PriceServiceListCoinsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PriceServiceListCoinsResponse", ""
            ) as PriceServiceListCoinsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
