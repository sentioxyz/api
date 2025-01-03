// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.js';
import {Configuration} from '../configuration.js';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.js';
import {ObjectSerializer} from '../models/ObjectSerializer.js';
import {ApiException} from './exception.js';
import {canConsumeForm, isCodeInRange} from '../util.js';
import {SecurityAuthentication} from '../auth/auth.js';


import { GoogleApiHttpBody } from '../models/GoogleApiHttpBody.js';
import { SolidityServiceEvmSearchTransactionsResponse } from '../models/SolidityServiceEvmSearchTransactionsResponse.js';
import { SolidityServiceGetEstimatedGasPriceResponse } from '../models/SolidityServiceGetEstimatedGasPriceResponse.js';
import { SolidityServiceGetSimulationBundleResponse } from '../models/SolidityServiceGetSimulationBundleResponse.js';
import { SolidityServiceGetSimulationResponse } from '../models/SolidityServiceGetSimulationResponse.js';
import { SolidityServiceGetSimulationsResponse } from '../models/SolidityServiceGetSimulationsResponse.js';
import { SolidityServiceSimulateTransactionBundleResponse } from '../models/SolidityServiceSimulateTransactionBundleResponse.js';
import { SolidityServiceSimulateTransactionResponse } from '../models/SolidityServiceSimulateTransactionResponse.js';
import { SolidityServiceSolidityAPIServiceSimulateTransactionBody } from '../models/SolidityServiceSolidityAPIServiceSimulateTransactionBody.js';
import { SolidityServiceSolidityAPIServiceSimulateTransactionBundleBody } from '../models/SolidityServiceSolidityAPIServiceSimulateTransactionBundleBody.js';

/**
 * no description
 */
export class DebugAndSimulationApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get trace by bundle simulation
     * @param owner 
     * @param slug 
     * @param chainId 
     * @param bundleId 
     * @param withInternalCalls Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace.
     * @param disableOptimizer Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution.
     * @param ignoreGasCost Only effective when disableOptimizer&#x3D;true.
     */
    public async getCallTraceByBundle(owner: string, slug: string, chainId: string, bundleId: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "getCallTraceByBundle", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "getCallTraceByBundle", "slug");
        }


        // verify required parameter 'chainId' is not null or undefined
        if (chainId === null || chainId === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "getCallTraceByBundle", "chainId");
        }


        // verify required parameter 'bundleId' is not null or undefined
        if (bundleId === null || bundleId === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "getCallTraceByBundle", "bundleId");
        }





        // Path Params
        const localVarPath = '/api/v1/solidity/{owner}/{slug}/{chainId}/bundle/{bundleId}/call_trace'
            .replace('{' + 'owner' + '}', encodeURIComponent(String(owner)))
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'chainId' + '}', encodeURIComponent(String(chainId)))
            .replace('{' + 'bundleId' + '}', encodeURIComponent(String(bundleId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (withInternalCalls !== undefined) {
            requestContext.setQueryParam("withInternalCalls", ObjectSerializer.serialize(withInternalCalls, "boolean", ""));
        }

        // Query Params
        if (disableOptimizer !== undefined) {
            requestContext.setQueryParam("disableOptimizer", ObjectSerializer.serialize(disableOptimizer, "boolean", ""));
        }

        // Query Params
        if (ignoreGasCost !== undefined) {
            requestContext.setQueryParam("ignoreGasCost", ObjectSerializer.serialize(ignoreGasCost, "boolean", ""));
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
     * Get trace by simulation
     * @param owner 
     * @param slug 
     * @param chainId 
     * @param simulationId 
     * @param withInternalCalls Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace.
     * @param disableOptimizer Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution.
     * @param ignoreGasCost Only effective when disableOptimizer&#x3D;true.
     */
    public async getCallTraceBySimulation(owner: string, slug: string, chainId: string, simulationId: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "getCallTraceBySimulation", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "getCallTraceBySimulation", "slug");
        }


        // verify required parameter 'chainId' is not null or undefined
        if (chainId === null || chainId === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "getCallTraceBySimulation", "chainId");
        }


        // verify required parameter 'simulationId' is not null or undefined
        if (simulationId === null || simulationId === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "getCallTraceBySimulation", "simulationId");
        }





        // Path Params
        const localVarPath = '/api/v1/solidity/{owner}/{slug}/{chainId}/simulation/{simulationId}/call_trace'
            .replace('{' + 'owner' + '}', encodeURIComponent(String(owner)))
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'chainId' + '}', encodeURIComponent(String(chainId)))
            .replace('{' + 'simulationId' + '}', encodeURIComponent(String(simulationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (withInternalCalls !== undefined) {
            requestContext.setQueryParam("withInternalCalls", ObjectSerializer.serialize(withInternalCalls, "boolean", ""));
        }

        // Query Params
        if (disableOptimizer !== undefined) {
            requestContext.setQueryParam("disableOptimizer", ObjectSerializer.serialize(disableOptimizer, "boolean", ""));
        }

        // Query Params
        if (ignoreGasCost !== undefined) {
            requestContext.setQueryParam("ignoreGasCost", ObjectSerializer.serialize(ignoreGasCost, "boolean", ""));
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
     * API to get Sentio call trace. It takes `txId.txHash` and `chainSpec.chainId` arguments, where the first is transaction hash, and the second is the numeric ethereum chain ID.  The results looks very similar to the normal [Ethereum call trace](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(2)%20(1)%20(1)%20(1).png). But we have an additional `startIndex` and `startIndex` on each trace entry even for the LOG, representing the execution order in the trace.  This allows you to build chart that marks the order of fund flow.  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(2)%20(1)%20(1)%20(1).png)
     * Get trace by transaction
     * @param owner 
     * @param slug 
     * @param chainId 
     * @param txHash 
     * @param withInternalCalls Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace.
     * @param disableOptimizer Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution.
     * @param ignoreGasCost Only effective when disableOptimizer&#x3D;true.
     */
    public async getCallTraceByTransaction(owner: string, slug: string, chainId: string, txHash: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "getCallTraceByTransaction", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "getCallTraceByTransaction", "slug");
        }


        // verify required parameter 'chainId' is not null or undefined
        if (chainId === null || chainId === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "getCallTraceByTransaction", "chainId");
        }


        // verify required parameter 'txHash' is not null or undefined
        if (txHash === null || txHash === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "getCallTraceByTransaction", "txHash");
        }





        // Path Params
        const localVarPath = '/api/v1/solidity/{owner}/{slug}/{chainId}/transaction/{txHash}/call_trace'
            .replace('{' + 'owner' + '}', encodeURIComponent(String(owner)))
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'chainId' + '}', encodeURIComponent(String(chainId)))
            .replace('{' + 'txHash' + '}', encodeURIComponent(String(txHash)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (withInternalCalls !== undefined) {
            requestContext.setQueryParam("withInternalCalls", ObjectSerializer.serialize(withInternalCalls, "boolean", ""));
        }

        // Query Params
        if (disableOptimizer !== undefined) {
            requestContext.setQueryParam("disableOptimizer", ObjectSerializer.serialize(disableOptimizer, "boolean", ""));
        }

        // Query Params
        if (ignoreGasCost !== undefined) {
            requestContext.setQueryParam("ignoreGasCost", ObjectSerializer.serialize(ignoreGasCost, "boolean", ""));
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
     * Estimate gas price
     * @param chainId Current support chain id: 1
     */
    public async getEstimatedGasPrice(chainId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/api/v1/solidity/estimated_gas_price';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (chainId !== undefined) {
            requestContext.setQueryParam("chainId", ObjectSerializer.serialize(chainId, "string", ""));
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
     * Get simulation by ID
     * @param owner 
     * @param slug 
     * @param simulationId 
     */
    public async getSimulation(owner: string, slug: string, simulationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "getSimulation", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "getSimulation", "slug");
        }


        // verify required parameter 'simulationId' is not null or undefined
        if (simulationId === null || simulationId === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "getSimulation", "simulationId");
        }


        // Path Params
        const localVarPath = '/api/v1/solidity/{owner}/{slug}/simulation/{simulationId}'
            .replace('{' + 'owner' + '}', encodeURIComponent(String(owner)))
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'simulationId' + '}', encodeURIComponent(String(simulationId)));

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
     * Get bundle simulation by ID
     * @param owner 
     * @param slug 
     * @param bundleId 
     */
    public async getSimulationBundleInProject(owner: string, slug: string, bundleId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "getSimulationBundleInProject", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "getSimulationBundleInProject", "slug");
        }


        // verify required parameter 'bundleId' is not null or undefined
        if (bundleId === null || bundleId === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "getSimulationBundleInProject", "bundleId");
        }


        // Path Params
        const localVarPath = '/api/v1/solidity/{owner}/{slug}/simulation_bundle/{bundleId}'
            .replace('{' + 'owner' + '}', encodeURIComponent(String(owner)))
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'bundleId' + '}', encodeURIComponent(String(bundleId)));

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
     * Get list of simulations
     * @param owner 
     * @param slug 
     * @param labelContains 
     * @param page 
     * @param pageSize 
     */
    public async getSimulations(owner: string, slug: string, labelContains?: string, page?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "getSimulations", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "getSimulations", "slug");
        }





        // Path Params
        const localVarPath = '/api/v1/solidity/{owner}/{slug}/simulation'
            .replace('{' + 'owner' + '}', encodeURIComponent(String(owner)))
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (labelContains !== undefined) {
            requestContext.setQueryParam("labelContains", ObjectSerializer.serialize(labelContains, "string", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int32"));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize, "number", "int32"));
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
     * Search transactions
     * @param owner 
     * @param slug 
     * @param chainId 
     * @param address 
     * @param includeDirect 
     * @param includeTrace 
     * @param includeIn 
     * @param includeOut 
     * @param startBlock 
     * @param endBlock 
     * @param startTimestamp 
     * @param endTimestamp 
     * @param transactionStatus 
     * @param methodSignature 
     * @param limit 
     * @param pageToken 
     */
    public async searchTransactions(owner: string, slug: string, chainId?: Array<string>, address?: Array<string>, includeDirect?: boolean, includeTrace?: boolean, includeIn?: boolean, includeOut?: boolean, startBlock?: string, endBlock?: string, startTimestamp?: string, endTimestamp?: string, transactionStatus?: Array<number>, methodSignature?: string, limit?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "searchTransactions", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "searchTransactions", "slug");
        }
















        // Path Params
        const localVarPath = '/api/v1/solidity/{owner}/{slug}/search_transactions'
            .replace('{' + 'owner' + '}', encodeURIComponent(String(owner)))
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (chainId !== undefined) {
            const serializedParams = ObjectSerializer.serialize(chainId, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("chainId", serializedParam);
            }
        }

        // Query Params
        if (address !== undefined) {
            const serializedParams = ObjectSerializer.serialize(address, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("address", serializedParam);
            }
        }

        // Query Params
        if (includeDirect !== undefined) {
            requestContext.setQueryParam("includeDirect", ObjectSerializer.serialize(includeDirect, "boolean", ""));
        }

        // Query Params
        if (includeTrace !== undefined) {
            requestContext.setQueryParam("includeTrace", ObjectSerializer.serialize(includeTrace, "boolean", ""));
        }

        // Query Params
        if (includeIn !== undefined) {
            requestContext.setQueryParam("includeIn", ObjectSerializer.serialize(includeIn, "boolean", ""));
        }

        // Query Params
        if (includeOut !== undefined) {
            requestContext.setQueryParam("includeOut", ObjectSerializer.serialize(includeOut, "boolean", ""));
        }

        // Query Params
        if (startBlock !== undefined) {
            requestContext.setQueryParam("startBlock", ObjectSerializer.serialize(startBlock, "string", "int64"));
        }

        // Query Params
        if (endBlock !== undefined) {
            requestContext.setQueryParam("endBlock", ObjectSerializer.serialize(endBlock, "string", "int64"));
        }

        // Query Params
        if (startTimestamp !== undefined) {
            requestContext.setQueryParam("startTimestamp", ObjectSerializer.serialize(startTimestamp, "string", "int64"));
        }

        // Query Params
        if (endTimestamp !== undefined) {
            requestContext.setQueryParam("endTimestamp", ObjectSerializer.serialize(endTimestamp, "string", "int64"));
        }

        // Query Params
        if (transactionStatus !== undefined) {
            const serializedParams = ObjectSerializer.serialize(transactionStatus, "Array<number>", "int32");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("transactionStatus", serializedParam);
            }
        }

        // Query Params
        if (methodSignature !== undefined) {
            requestContext.setQueryParam("methodSignature", ObjectSerializer.serialize(methodSignature, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (pageToken !== undefined) {
            requestContext.setQueryParam("pageToken", ObjectSerializer.serialize(pageToken, "string", "byte"));
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
     * Create a new transaction simulation. The simulation body should be included in the request body. Your simulations will be saved, and a unique ID for each simulation is included in the response. It will be useful for fetching simulation details.
     * Run simulation
     * @param owner 
     * @param slug 
     * @param chainId 
     * @param body 
     */
    public async simulateTransaction(owner: string, slug: string, chainId: string, body: SolidityServiceSolidityAPIServiceSimulateTransactionBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "simulateTransaction", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "simulateTransaction", "slug");
        }


        // verify required parameter 'chainId' is not null or undefined
        if (chainId === null || chainId === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "simulateTransaction", "chainId");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "simulateTransaction", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/solidity/{owner}/{slug}/{chainId}/simulation'
            .replace('{' + 'owner' + '}', encodeURIComponent(String(owner)))
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'chainId' + '}', encodeURIComponent(String(chainId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "SolidityServiceSolidityAPIServiceSimulateTransactionBody", ""),
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
     * You could also create bundle simulations so that one transaction could be executed one after another. For `blockNumber` `transactionIndex` `networkId` `stateOverrides` and `blockOverrides` fields, only the first simulation takes effect.
     * Run bundle simulation
     * @param owner 
     * @param slug 
     * @param chainId 
     * @param body 
     */
    public async simulateTransactionBundle(owner: string, slug: string, chainId: string, body: SolidityServiceSolidityAPIServiceSimulateTransactionBundleBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "simulateTransactionBundle", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "simulateTransactionBundle", "slug");
        }


        // verify required parameter 'chainId' is not null or undefined
        if (chainId === null || chainId === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "simulateTransactionBundle", "chainId");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("DebugAndSimulationApi", "simulateTransactionBundle", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/solidity/{owner}/{slug}/{chainId}/simulation_bundle'
            .replace('{' + 'owner' + '}', encodeURIComponent(String(owner)))
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'chainId' + '}', encodeURIComponent(String(chainId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "SolidityServiceSolidityAPIServiceSimulateTransactionBundleBody", ""),
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

}

export class DebugAndSimulationApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCallTraceByBundle
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCallTraceByBundleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GoogleApiHttpBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GoogleApiHttpBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GoogleApiHttpBody", ""
            ) as GoogleApiHttpBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GoogleApiHttpBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GoogleApiHttpBody", ""
            ) as GoogleApiHttpBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCallTraceBySimulation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCallTraceBySimulationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GoogleApiHttpBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GoogleApiHttpBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GoogleApiHttpBody", ""
            ) as GoogleApiHttpBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GoogleApiHttpBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GoogleApiHttpBody", ""
            ) as GoogleApiHttpBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCallTraceByTransaction
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCallTraceByTransactionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GoogleApiHttpBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GoogleApiHttpBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GoogleApiHttpBody", ""
            ) as GoogleApiHttpBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GoogleApiHttpBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GoogleApiHttpBody", ""
            ) as GoogleApiHttpBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEstimatedGasPrice
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEstimatedGasPriceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SolidityServiceGetEstimatedGasPriceResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SolidityServiceGetEstimatedGasPriceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SolidityServiceGetEstimatedGasPriceResponse", ""
            ) as SolidityServiceGetEstimatedGasPriceResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SolidityServiceGetEstimatedGasPriceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SolidityServiceGetEstimatedGasPriceResponse", ""
            ) as SolidityServiceGetEstimatedGasPriceResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSimulation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSimulationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SolidityServiceGetSimulationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SolidityServiceGetSimulationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SolidityServiceGetSimulationResponse", ""
            ) as SolidityServiceGetSimulationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SolidityServiceGetSimulationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SolidityServiceGetSimulationResponse", ""
            ) as SolidityServiceGetSimulationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSimulationBundleInProject
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSimulationBundleInProjectWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SolidityServiceGetSimulationBundleResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SolidityServiceGetSimulationBundleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SolidityServiceGetSimulationBundleResponse", ""
            ) as SolidityServiceGetSimulationBundleResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SolidityServiceGetSimulationBundleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SolidityServiceGetSimulationBundleResponse", ""
            ) as SolidityServiceGetSimulationBundleResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSimulations
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSimulationsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SolidityServiceGetSimulationsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SolidityServiceGetSimulationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SolidityServiceGetSimulationsResponse", ""
            ) as SolidityServiceGetSimulationsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SolidityServiceGetSimulationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SolidityServiceGetSimulationsResponse", ""
            ) as SolidityServiceGetSimulationsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchTransactions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchTransactionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SolidityServiceEvmSearchTransactionsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SolidityServiceEvmSearchTransactionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SolidityServiceEvmSearchTransactionsResponse", ""
            ) as SolidityServiceEvmSearchTransactionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SolidityServiceEvmSearchTransactionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SolidityServiceEvmSearchTransactionsResponse", ""
            ) as SolidityServiceEvmSearchTransactionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to simulateTransaction
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simulateTransactionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SolidityServiceSimulateTransactionResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SolidityServiceSimulateTransactionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SolidityServiceSimulateTransactionResponse", ""
            ) as SolidityServiceSimulateTransactionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SolidityServiceSimulateTransactionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SolidityServiceSimulateTransactionResponse", ""
            ) as SolidityServiceSimulateTransactionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to simulateTransactionBundle
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simulateTransactionBundleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SolidityServiceSimulateTransactionBundleResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SolidityServiceSimulateTransactionBundleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SolidityServiceSimulateTransactionBundleResponse", ""
            ) as SolidityServiceSimulateTransactionBundleResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SolidityServiceSimulateTransactionBundleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SolidityServiceSimulateTransactionBundleResponse", ""
            ) as SolidityServiceSimulateTransactionBundleResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
