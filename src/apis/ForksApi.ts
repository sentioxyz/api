// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.js';
import {Configuration} from '../configuration.js';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.js';
import {ObjectSerializer} from '../models/ObjectSerializer.js';
import {ApiException} from './exception.js';
import {canConsumeForm, isCodeInRange} from '../util.js';
import {SecurityAuthentication} from '../auth/auth.js';


import { GoogleApiHttpBody } from '../models/GoogleApiHttpBody.js';
import { SolidityServiceCreateForkResponse } from '../models/SolidityServiceCreateForkResponse.js';
import { SolidityServiceForkServiceCreateForkBody } from '../models/SolidityServiceForkServiceCreateForkBody.js';
import { SolidityServiceForkServiceUpdateForkBody } from '../models/SolidityServiceForkServiceUpdateForkBody.js';
import { SolidityServiceGetForkInfoResponse } from '../models/SolidityServiceGetForkInfoResponse.js';
import { SolidityServiceGetForkResponse } from '../models/SolidityServiceGetForkResponse.js';
import { SolidityServiceListForksResponse } from '../models/SolidityServiceListForksResponse.js';
import { SolidityServiceSimulateTransactionBundleResponse } from '../models/SolidityServiceSimulateTransactionBundleResponse.js';
import { SolidityServiceSimulateTransactionResponse } from '../models/SolidityServiceSimulateTransactionResponse.js';
import { SolidityServiceSolidityAPIServiceSimulateTransactionBundleOnForkBody } from '../models/SolidityServiceSolidityAPIServiceSimulateTransactionBundleOnForkBody.js';
import { SolidityServiceSolidityAPIServiceSimulateTransactionOnForkBody } from '../models/SolidityServiceSolidityAPIServiceSimulateTransactionOnForkBody.js';
import { SolidityServiceUpdateForkResponse } from '../models/SolidityServiceUpdateForkResponse.js';

/**
 * no description
 */
export class ForksApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a fork
     * @param owner 
     * @param slug 
     * @param body 
     */
    public async createFork(owner: string, slug: string, body: SolidityServiceForkServiceCreateForkBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("ForksApi", "createFork", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("ForksApi", "createFork", "slug");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("ForksApi", "createFork", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/solidity/{owner}/{slug}/fork'
            .replace('{' + 'owner' + '}', encodeURIComponent(String(owner)))
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "SolidityServiceForkServiceCreateForkBody", ""),
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
     * Delete fork by id
     * @param owner 
     * @param slug 
     * @param id 
     */
    public async deleteFork(owner: string, slug: string, id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("ForksApi", "deleteFork", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("ForksApi", "deleteFork", "slug");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ForksApi", "deleteFork", "id");
        }


        // Path Params
        const localVarPath = '/api/v1/solidity/{owner}/{slug}/fork/{id}'
            .replace('{' + 'owner' + '}', encodeURIComponent(String(owner)))
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * Get trace by bundle simulation
     * @param owner 
     * @param slug 
     * @param forkId 
     * @param bundleId 
     * @param withInternalCalls Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace.
     * @param disableOptimizer Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution.
     * @param ignoreGasCost Only effective when disableOptimizer&#x3D;true.
     */
    public async getCallTraceOnForkBundle(owner: string, slug: string, forkId: string, bundleId: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("ForksApi", "getCallTraceOnForkBundle", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("ForksApi", "getCallTraceOnForkBundle", "slug");
        }


        // verify required parameter 'forkId' is not null or undefined
        if (forkId === null || forkId === undefined) {
            throw new RequiredError("ForksApi", "getCallTraceOnForkBundle", "forkId");
        }


        // verify required parameter 'bundleId' is not null or undefined
        if (bundleId === null || bundleId === undefined) {
            throw new RequiredError("ForksApi", "getCallTraceOnForkBundle", "bundleId");
        }





        // Path Params
        const localVarPath = '/api/v1/solidity/{owner}/{slug}/fork/{forkId}/bundle/{bundleId}/call_trace'
            .replace('{' + 'owner' + '}', encodeURIComponent(String(owner)))
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'forkId' + '}', encodeURIComponent(String(forkId)))
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
     * @param forkId 
     * @param simulationId 
     * @param withInternalCalls Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace.
     * @param disableOptimizer Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution.
     * @param ignoreGasCost Only effective when disableOptimizer&#x3D;true.
     */
    public async getCallTraceOnForkSimulation(owner: string, slug: string, forkId: string, simulationId: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("ForksApi", "getCallTraceOnForkSimulation", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("ForksApi", "getCallTraceOnForkSimulation", "slug");
        }


        // verify required parameter 'forkId' is not null or undefined
        if (forkId === null || forkId === undefined) {
            throw new RequiredError("ForksApi", "getCallTraceOnForkSimulation", "forkId");
        }


        // verify required parameter 'simulationId' is not null or undefined
        if (simulationId === null || simulationId === undefined) {
            throw new RequiredError("ForksApi", "getCallTraceOnForkSimulation", "simulationId");
        }





        // Path Params
        const localVarPath = '/api/v1/solidity/{owner}/{slug}/fork/{forkId}/simulation/{simulationId}/call_trace'
            .replace('{' + 'owner' + '}', encodeURIComponent(String(owner)))
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'forkId' + '}', encodeURIComponent(String(forkId)))
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
     * Get trace by transaction
     * @param owner 
     * @param slug 
     * @param forkId 
     * @param txHash 
     * @param withInternalCalls Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace.
     * @param disableOptimizer Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution.
     * @param ignoreGasCost Only effective when disableOptimizer&#x3D;true.
     */
    public async getCallTraceOnForkTransaction(owner: string, slug: string, forkId: string, txHash: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("ForksApi", "getCallTraceOnForkTransaction", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("ForksApi", "getCallTraceOnForkTransaction", "slug");
        }


        // verify required parameter 'forkId' is not null or undefined
        if (forkId === null || forkId === undefined) {
            throw new RequiredError("ForksApi", "getCallTraceOnForkTransaction", "forkId");
        }


        // verify required parameter 'txHash' is not null or undefined
        if (txHash === null || txHash === undefined) {
            throw new RequiredError("ForksApi", "getCallTraceOnForkTransaction", "txHash");
        }





        // Path Params
        const localVarPath = '/api/v1/solidity/{owner}/{slug}/fork/{forkId}/transaction/{txHash}/call_trace'
            .replace('{' + 'owner' + '}', encodeURIComponent(String(owner)))
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'forkId' + '}', encodeURIComponent(String(forkId)))
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
     * Get fork by id
     * @param owner 
     * @param slug 
     * @param id 
     */
    public async getFork(owner: string, slug: string, id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("ForksApi", "getFork", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("ForksApi", "getFork", "slug");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ForksApi", "getFork", "id");
        }


        // Path Params
        const localVarPath = '/api/v1/solidity/{owner}/{slug}/fork/{id}'
            .replace('{' + 'owner' + '}', encodeURIComponent(String(owner)))
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
     * Get fork info by id
     * @param owner 
     * @param slug 
     * @param id 
     */
    public async getForkInfo(owner: string, slug: string, id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("ForksApi", "getForkInfo", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("ForksApi", "getForkInfo", "slug");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ForksApi", "getForkInfo", "id");
        }


        // Path Params
        const localVarPath = '/api/v1/solidity/{owner}/{slug}/fork/{id}/info'
            .replace('{' + 'owner' + '}', encodeURIComponent(String(owner)))
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
     * List all forks
     * @param owner 
     * @param slug 
     */
    public async listForks(owner: string, slug: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("ForksApi", "listForks", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("ForksApi", "listForks", "slug");
        }


        // Path Params
        const localVarPath = '/api/v1/solidity/{owner}/{slug}/fork'
            .replace('{' + 'owner' + '}', encodeURIComponent(String(owner)))
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)));

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
     * Run bundle simulation
     * @param owner 
     * @param slug 
     * @param forkId 
     * @param body 
     */
    public async simulateTransactionBundleOnFork(owner: string, slug: string, forkId: string, body: SolidityServiceSolidityAPIServiceSimulateTransactionBundleOnForkBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("ForksApi", "simulateTransactionBundleOnFork", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("ForksApi", "simulateTransactionBundleOnFork", "slug");
        }


        // verify required parameter 'forkId' is not null or undefined
        if (forkId === null || forkId === undefined) {
            throw new RequiredError("ForksApi", "simulateTransactionBundleOnFork", "forkId");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("ForksApi", "simulateTransactionBundleOnFork", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/solidity/{owner}/{slug}/fork/{forkId}/simulation_bundle'
            .replace('{' + 'owner' + '}', encodeURIComponent(String(owner)))
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'forkId' + '}', encodeURIComponent(String(forkId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "SolidityServiceSolidityAPIServiceSimulateTransactionBundleOnForkBody", ""),
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
     * Run Simulation
     * @param owner 
     * @param slug 
     * @param forkId 
     * @param body 
     */
    public async simulateTransactionOnFork(owner: string, slug: string, forkId: string, body: SolidityServiceSolidityAPIServiceSimulateTransactionOnForkBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("ForksApi", "simulateTransactionOnFork", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("ForksApi", "simulateTransactionOnFork", "slug");
        }


        // verify required parameter 'forkId' is not null or undefined
        if (forkId === null || forkId === undefined) {
            throw new RequiredError("ForksApi", "simulateTransactionOnFork", "forkId");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("ForksApi", "simulateTransactionOnFork", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/solidity/{owner}/{slug}/fork/{forkId}/simulation'
            .replace('{' + 'owner' + '}', encodeURIComponent(String(owner)))
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'forkId' + '}', encodeURIComponent(String(forkId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "SolidityServiceSolidityAPIServiceSimulateTransactionOnForkBody", ""),
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
     * Update fork by id
     * @param owner 
     * @param slug 
     * @param id 
     * @param body 
     */
    public async updateFork(owner: string, slug: string, id: string, body: SolidityServiceForkServiceUpdateForkBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("ForksApi", "updateFork", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("ForksApi", "updateFork", "slug");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ForksApi", "updateFork", "id");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("ForksApi", "updateFork", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/solidity/{owner}/{slug}/fork/{id}'
            .replace('{' + 'owner' + '}', encodeURIComponent(String(owner)))
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "SolidityServiceForkServiceUpdateForkBody", ""),
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

export class ForksApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createFork
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createForkWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SolidityServiceCreateForkResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SolidityServiceCreateForkResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SolidityServiceCreateForkResponse", ""
            ) as SolidityServiceCreateForkResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SolidityServiceCreateForkResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SolidityServiceCreateForkResponse", ""
            ) as SolidityServiceCreateForkResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteFork
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteForkWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCallTraceOnForkBundle
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCallTraceOnForkBundleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GoogleApiHttpBody >> {
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
     * @params response Response returned by the server for a request to getCallTraceOnForkSimulation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCallTraceOnForkSimulationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GoogleApiHttpBody >> {
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
     * @params response Response returned by the server for a request to getCallTraceOnForkTransaction
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCallTraceOnForkTransactionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GoogleApiHttpBody >> {
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
     * @params response Response returned by the server for a request to getFork
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getForkWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SolidityServiceGetForkResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SolidityServiceGetForkResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SolidityServiceGetForkResponse", ""
            ) as SolidityServiceGetForkResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SolidityServiceGetForkResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SolidityServiceGetForkResponse", ""
            ) as SolidityServiceGetForkResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getForkInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getForkInfoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SolidityServiceGetForkInfoResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SolidityServiceGetForkInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SolidityServiceGetForkInfoResponse", ""
            ) as SolidityServiceGetForkInfoResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SolidityServiceGetForkInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SolidityServiceGetForkInfoResponse", ""
            ) as SolidityServiceGetForkInfoResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listForks
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listForksWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SolidityServiceListForksResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SolidityServiceListForksResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SolidityServiceListForksResponse", ""
            ) as SolidityServiceListForksResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SolidityServiceListForksResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SolidityServiceListForksResponse", ""
            ) as SolidityServiceListForksResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to simulateTransactionBundleOnFork
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simulateTransactionBundleOnForkWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SolidityServiceSimulateTransactionBundleResponse >> {
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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to simulateTransactionOnFork
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simulateTransactionOnForkWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SolidityServiceSimulateTransactionResponse >> {
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
     * @params response Response returned by the server for a request to updateFork
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateForkWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SolidityServiceUpdateForkResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SolidityServiceUpdateForkResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SolidityServiceUpdateForkResponse", ""
            ) as SolidityServiceUpdateForkResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SolidityServiceUpdateForkResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SolidityServiceUpdateForkResponse", ""
            ) as SolidityServiceUpdateForkResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
