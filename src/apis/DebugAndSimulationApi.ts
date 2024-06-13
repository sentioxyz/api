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
  GoogleApiHttpBody,
  SolidityServiceGetSimulationBundleResponse,
  SolidityServiceGetSimulationResponse,
  SolidityServiceGetSimulationsResponse,
  SolidityServiceSimulateTransactionBundleRequest,
  SolidityServiceSimulateTransactionBundleResponse,
  SolidityServiceSimulateTransactionRequest,
  SolidityServiceSimulateTransactionResponse,
  TxindexEvmSearchTransactionsResponse,
} from '../models/index.js';
import {
    GoogleApiHttpBodyFromJSON,
    GoogleApiHttpBodyToJSON,
    SolidityServiceGetSimulationBundleResponseFromJSON,
    SolidityServiceGetSimulationBundleResponseToJSON,
    SolidityServiceGetSimulationResponseFromJSON,
    SolidityServiceGetSimulationResponseToJSON,
    SolidityServiceGetSimulationsResponseFromJSON,
    SolidityServiceGetSimulationsResponseToJSON,
    SolidityServiceSimulateTransactionBundleRequestFromJSON,
    SolidityServiceSimulateTransactionBundleRequestToJSON,
    SolidityServiceSimulateTransactionBundleResponseFromJSON,
    SolidityServiceSimulateTransactionBundleResponseToJSON,
    SolidityServiceSimulateTransactionRequestFromJSON,
    SolidityServiceSimulateTransactionRequestToJSON,
    SolidityServiceSimulateTransactionResponseFromJSON,
    SolidityServiceSimulateTransactionResponseToJSON,
    TxindexEvmSearchTransactionsResponseFromJSON,
    TxindexEvmSearchTransactionsResponseToJSON,
} from '../models/index.js';

export interface GetCallTraceRequest {
    networkId: string;
    txIdTxHash: string;
    projectOwner?: string;
    projectSlug?: string;
    txIdSimulationId?: string;
    txIdBundleId?: string;
    disableOptimizer?: boolean;
    withInternalCalls?: boolean;
    ignoreGasCost?: boolean;
}

export interface GetSimulationRequest {
    simulationId: string;
    projectOwner?: string;
    projectSlug?: string;
}

export interface GetSimulationBundleRequest {
    bundleId: string;
    projectOwner?: string;
    projectSlug?: string;
}

export interface GetSimulationsRequest {
    projectOwner?: string;
    projectSlug?: string;
    page?: number;
    pageSize?: number;
}

export interface SearchTransactionsRequest {
    chainId?: Array<string>;
    address?: Array<string>;
    includeDirect?: boolean;
    includeTrace?: boolean;
    includeIn?: boolean;
    includeOut?: boolean;
    startBlock?: string;
    endBlock?: string;
    startTimestamp?: string;
    endTimestamp?: string;
    transactionStatus?: Array<number>;
    methodSignature?: string;
    limit?: number;
    pageToken?: string;
}

export interface SimulateTransactionRequest {
    body: SolidityServiceSimulateTransactionRequest;
}

export interface SimulateTransactionBundleRequest {
    body: SolidityServiceSimulateTransactionBundleRequest;
}

/**
 * 
 */
export class DebugAndSimulationApi extends runtime.BaseAPI {

    /**
     * API to get Sentio call trace. It takes `txId.txHash` and `networkId` arguments, where the first is transaction hash, and the second is the numeric ethereum chain ID.  The results looks very similar to the normal [Ethereum call trace](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(2)%20(1)%20(1)%20(1).png). But we have an additional `startIndex` and `startIndex` on each trace entry even for the LOG, representing the execution order in the trace.  This allows you to build chart that marks the order of fund flow.  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(2)%20(1)%20(1)%20(1).png)
     * Get indexed call trace
     */
    async getCallTraceRaw(requestParameters: GetCallTraceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GoogleApiHttpBody>> {
        if (requestParameters['networkId'] == null) {
            throw new runtime.RequiredError(
                'networkId',
                'Required parameter "networkId" was null or undefined when calling getCallTrace().'
            );
        }

        if (requestParameters['txIdTxHash'] == null) {
            throw new runtime.RequiredError(
                'txIdTxHash',
                'Required parameter "txIdTxHash" was null or undefined when calling getCallTrace().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['projectOwner'] != null) {
            queryParameters['projectOwner'] = requestParameters['projectOwner'];
        }

        if (requestParameters['projectSlug'] != null) {
            queryParameters['projectSlug'] = requestParameters['projectSlug'];
        }

        if (requestParameters['networkId'] != null) {
            queryParameters['networkId'] = requestParameters['networkId'];
        }

        if (requestParameters['txIdTxHash'] != null) {
            queryParameters['txId.txHash'] = requestParameters['txIdTxHash'];
        }

        if (requestParameters['txIdSimulationId'] != null) {
            queryParameters['txId.simulationId'] = requestParameters['txIdSimulationId'];
        }

        if (requestParameters['txIdBundleId'] != null) {
            queryParameters['txId.bundleId'] = requestParameters['txIdBundleId'];
        }

        if (requestParameters['disableOptimizer'] != null) {
            queryParameters['disableOptimizer'] = requestParameters['disableOptimizer'];
        }

        if (requestParameters['withInternalCalls'] != null) {
            queryParameters['withInternalCalls'] = requestParameters['withInternalCalls'];
        }

        if (requestParameters['ignoreGasCost'] != null) {
            queryParameters['ignoreGasCost'] = requestParameters['ignoreGasCost'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = await this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/solidity/call_trace`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GoogleApiHttpBodyFromJSON(jsonValue));
    }

    /**
     * API to get Sentio call trace. It takes `txId.txHash` and `networkId` arguments, where the first is transaction hash, and the second is the numeric ethereum chain ID.  The results looks very similar to the normal [Ethereum call trace](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(2)%20(1)%20(1)%20(1).png). But we have an additional `startIndex` and `startIndex` on each trace entry even for the LOG, representing the execution order in the trace.  This allows you to build chart that marks the order of fund flow.  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(2)%20(1)%20(1)%20(1).png)
     * Get indexed call trace
     */
    async getCallTrace(requestParameters: GetCallTraceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GoogleApiHttpBody> {
        const response = await this.getCallTraceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a simulation by id
     */
    async getSimulationRaw(requestParameters: GetSimulationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SolidityServiceGetSimulationResponse>> {
        if (requestParameters['simulationId'] == null) {
            throw new runtime.RequiredError(
                'simulationId',
                'Required parameter "simulationId" was null or undefined when calling getSimulation().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['projectOwner'] != null) {
            queryParameters['projectOwner'] = requestParameters['projectOwner'];
        }

        if (requestParameters['projectSlug'] != null) {
            queryParameters['projectSlug'] = requestParameters['projectSlug'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = await this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/solidity/simulate/{simulationId}`.replace(`{${"simulationId"}}`, encodeURIComponent(String(requestParameters['simulationId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SolidityServiceGetSimulationResponseFromJSON(jsonValue));
    }

    /**
     * Get a simulation by id
     */
    async getSimulation(requestParameters: GetSimulationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SolidityServiceGetSimulationResponse> {
        const response = await this.getSimulationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a bundle simulation by id
     */
    async getSimulationBundleRaw(requestParameters: GetSimulationBundleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SolidityServiceGetSimulationBundleResponse>> {
        if (requestParameters['bundleId'] == null) {
            throw new runtime.RequiredError(
                'bundleId',
                'Required parameter "bundleId" was null or undefined when calling getSimulationBundle().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['projectOwner'] != null) {
            queryParameters['projectOwner'] = requestParameters['projectOwner'];
        }

        if (requestParameters['projectSlug'] != null) {
            queryParameters['projectSlug'] = requestParameters['projectSlug'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = await this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/solidity/simulate_bundle/{bundleId}`.replace(`{${"bundleId"}}`, encodeURIComponent(String(requestParameters['bundleId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SolidityServiceGetSimulationBundleResponseFromJSON(jsonValue));
    }

    /**
     * Get a bundle simulation by id
     */
    async getSimulationBundle(requestParameters: GetSimulationBundleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SolidityServiceGetSimulationBundleResponse> {
        const response = await this.getSimulationBundleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get existing transaction simulations
     */
    async getSimulationsRaw(requestParameters: GetSimulationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SolidityServiceGetSimulationsResponse>> {
        const queryParameters: any = {};

        if (requestParameters['projectOwner'] != null) {
            queryParameters['projectOwner'] = requestParameters['projectOwner'];
        }

        if (requestParameters['projectSlug'] != null) {
            queryParameters['projectSlug'] = requestParameters['projectSlug'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['pageSize'] != null) {
            queryParameters['pageSize'] = requestParameters['pageSize'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = await this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/solidity/simulate`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SolidityServiceGetSimulationsResponseFromJSON(jsonValue));
    }

    /**
     * Get existing transaction simulations
     */
    async getSimulations(requestParameters: GetSimulationsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SolidityServiceGetSimulationsResponse> {
        const response = await this.getSimulationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search for transactions
     */
    async searchTransactionsRaw(requestParameters: SearchTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TxindexEvmSearchTransactionsResponse>> {
        const queryParameters: any = {};

        if (requestParameters['chainId'] != null) {
            queryParameters['chainId'] = requestParameters['chainId'];
        }

        if (requestParameters['address'] != null) {
            queryParameters['address'] = requestParameters['address'];
        }

        if (requestParameters['includeDirect'] != null) {
            queryParameters['includeDirect'] = requestParameters['includeDirect'];
        }

        if (requestParameters['includeTrace'] != null) {
            queryParameters['includeTrace'] = requestParameters['includeTrace'];
        }

        if (requestParameters['includeIn'] != null) {
            queryParameters['includeIn'] = requestParameters['includeIn'];
        }

        if (requestParameters['includeOut'] != null) {
            queryParameters['includeOut'] = requestParameters['includeOut'];
        }

        if (requestParameters['startBlock'] != null) {
            queryParameters['startBlock'] = requestParameters['startBlock'];
        }

        if (requestParameters['endBlock'] != null) {
            queryParameters['endBlock'] = requestParameters['endBlock'];
        }

        if (requestParameters['startTimestamp'] != null) {
            queryParameters['startTimestamp'] = requestParameters['startTimestamp'];
        }

        if (requestParameters['endTimestamp'] != null) {
            queryParameters['endTimestamp'] = requestParameters['endTimestamp'];
        }

        if (requestParameters['transactionStatus'] != null) {
            queryParameters['transactionStatus'] = requestParameters['transactionStatus'];
        }

        if (requestParameters['methodSignature'] != null) {
            queryParameters['methodSignature'] = requestParameters['methodSignature'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['pageToken'] != null) {
            queryParameters['pageToken'] = requestParameters['pageToken'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = await this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/solidity/search_transactions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TxindexEvmSearchTransactionsResponseFromJSON(jsonValue));
    }

    /**
     * Search for transactions
     */
    async searchTransactions(requestParameters: SearchTransactionsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TxindexEvmSearchTransactionsResponse> {
        const response = await this.searchTransactionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a new transaction simulation. The simulation body should be included in the request body. Your simulations will be saved, and a unique ID for each simulation is included in the response. It will be useful for fetching simulation details.
     * Single simulation
     */
    async simulateTransactionRaw(requestParameters: SimulateTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SolidityServiceSimulateTransactionResponse>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling simulateTransaction().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = await this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/solidity/simulate`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SolidityServiceSimulateTransactionRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SolidityServiceSimulateTransactionResponseFromJSON(jsonValue));
    }

    /**
     * Create a new transaction simulation. The simulation body should be included in the request body. Your simulations will be saved, and a unique ID for each simulation is included in the response. It will be useful for fetching simulation details.
     * Single simulation
     */
    async simulateTransaction(requestParameters: SimulateTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SolidityServiceSimulateTransactionResponse> {
        const response = await this.simulateTransactionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * You could also create bundle simulations so that one transaction could be executed one after another. For `blockNumber` `transactionIndex` `networkId` `stateOverrides` and `blockOverrides` fields, only the first simulation takes effect.
     * Bundle simulation
     */
    async simulateTransactionBundleRaw(requestParameters: SimulateTransactionBundleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SolidityServiceSimulateTransactionBundleResponse>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling simulateTransactionBundle().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = await this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/solidity/simulate_bundle`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SolidityServiceSimulateTransactionBundleRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SolidityServiceSimulateTransactionBundleResponseFromJSON(jsonValue));
    }

    /**
     * You could also create bundle simulations so that one transaction could be executed one after another. For `blockNumber` `transactionIndex` `networkId` `stateOverrides` and `blockOverrides` fields, only the first simulation takes effect.
     * Bundle simulation
     */
    async simulateTransactionBundle(requestParameters: SimulateTransactionBundleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SolidityServiceSimulateTransactionBundleResponse> {
        const response = await this.simulateTransactionBundleRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
