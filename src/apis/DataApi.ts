// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.js';
import {Configuration} from '../configuration.js';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.js';
import {ObjectSerializer} from '../models/ObjectSerializer.js';
import {ApiException} from './exception.js';
import {canConsumeForm, isCodeInRange} from '../util.js';
import {SecurityAuthentication} from '../auth/auth.js';


import { AnalyticServiceAnalyticServiceExecuteSQLAsyncBody } from '../models/AnalyticServiceAnalyticServiceExecuteSQLAsyncBody.js';
import { AnalyticServiceAnalyticServiceExecuteSQLBody } from '../models/AnalyticServiceAnalyticServiceExecuteSQLBody.js';
import { AnalyticServiceAnalyticServiceSaveSQLBody } from '../models/AnalyticServiceAnalyticServiceSaveSQLBody.js';
import { AnalyticServiceAsyncExecuteSQLResponse } from '../models/AnalyticServiceAsyncExecuteSQLResponse.js';
import { AnalyticServiceLogQueryResponse } from '../models/AnalyticServiceLogQueryResponse.js';
import { AnalyticServiceQuerySQLResultResponse } from '../models/AnalyticServiceQuerySQLResultResponse.js';
import { AnalyticServiceSaveSQLResponse } from '../models/AnalyticServiceSaveSQLResponse.js';
import { AnalyticServiceSearchServiceQueryLogBody } from '../models/AnalyticServiceSearchServiceQueryLogBody.js';
import { AnalyticServiceSyncExecuteSQLResponse } from '../models/AnalyticServiceSyncExecuteSQLResponse.js';
import { InsightsServiceInsightsServiceQueryBody } from '../models/InsightsServiceInsightsServiceQueryBody.js';
import { InsightsServiceInsightsServiceRetentionBody } from '../models/InsightsServiceInsightsServiceRetentionBody.js';
import { InsightsServiceListCoinsResponse } from '../models/InsightsServiceListCoinsResponse.js';
import { InsightsServiceQueryResponse } from '../models/InsightsServiceQueryResponse.js';
import { InsightsServiceRetentionRequest } from '../models/InsightsServiceRetentionRequest.js';
import { InsightsServiceRetentionResponse } from '../models/InsightsServiceRetentionResponse.js';
import { MetricsServiceGetMetricsResponse } from '../models/MetricsServiceGetMetricsResponse.js';
import { MetricsServiceMetricsQueryResponse } from '../models/MetricsServiceMetricsQueryResponse.js';
import { MetricsServiceObservabilityServiceQueryBody } from '../models/MetricsServiceObservabilityServiceQueryBody.js';
import { MetricsServiceObservabilityServiceQueryRangeBody } from '../models/MetricsServiceObservabilityServiceQueryRangeBody.js';
import { MetricsServiceQueryValueResponse } from '../models/MetricsServiceQueryValueResponse.js';

/**
 * no description
 */
export class DataApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Execute SQL in a project. Go to \"Data Studio\" -> \"SQL Editor\", write your query and then click \"Export as cURL\"  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(102).png)  Find more: https://docs.sentio.xyz/reference/data#sql-api
     * Execute SQL
     * @param owner username or organization name
     * @param slug project slug
     * @param body 
     */
    public async executeSQL(owner: string, slug: string, body: AnalyticServiceAnalyticServiceExecuteSQLBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("DataApi", "executeSQL", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("DataApi", "executeSQL", "slug");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("DataApi", "executeSQL", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/analytics/{owner}/{slug}/sql/execute'
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
            ObjectSerializer.serialize(body, "AnalyticServiceAnalyticServiceExecuteSQLBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
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
     * Execute SQL in a project asynchronously.
     * Execute SQL by Async
     * @param owner username or organization name
     * @param slug project slug
     * @param body 
     */
    public async executeSQLAsync(owner: string, slug: string, body: AnalyticServiceAnalyticServiceExecuteSQLAsyncBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("DataApi", "executeSQLAsync", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("DataApi", "executeSQLAsync", "slug");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("DataApi", "executeSQLAsync", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/analytics/{owner}/{slug}/sql/execute/async'
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
            ObjectSerializer.serialize(body, "AnalyticServiceAnalyticServiceExecuteSQLAsyncBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
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
     * Get a list of metrics in a project
     * @param projectId 
     * @param name 
     * @param version 
     */
    public async getMetrics(projectId?: string, name?: string, version?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/api/v1/metrics';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (projectId !== undefined) {
            requestContext.setQueryParam("projectId", ObjectSerializer.serialize(projectId, "string", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }

        // Query Params
        if (version !== undefined) {
            requestContext.setQueryParam("version", ObjectSerializer.serialize(version, "number", "int32"));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
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
     * Get a list of coins in a project.
     * List coins
     * @param owner 
     * @param slug 
     * @param projectId 
     * @param version 
     * @param limit 
     * @param offset 
     * @param searchQuery 
     */
    public async listCoins(owner: string, slug: string, projectId?: string, version?: number, limit?: number, offset?: number, searchQuery?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("DataApi", "listCoins", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("DataApi", "listCoins", "slug");
        }







        // Path Params
        const localVarPath = '/api/v1/insights/{owner}/{slug}/coins'
            .replace('{' + 'owner' + '}', encodeURIComponent(String(owner)))
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (projectId !== undefined) {
            requestContext.setQueryParam("projectId", ObjectSerializer.serialize(projectId, "string", ""));
        }

        // Query Params
        if (version !== undefined) {
            requestContext.setQueryParam("version", ObjectSerializer.serialize(version, "number", "int32"));
        }

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


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
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
     * Get a list of coins in a project.
     * List coins
     * @param projectOwner 
     * @param projectSlug 
     * @param projectId 
     * @param version 
     * @param limit 
     * @param offset 
     * @param searchQuery 
     */
    public async listCoins2(projectOwner?: string, projectSlug?: string, projectId?: string, version?: number, limit?: number, offset?: number, searchQuery?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;








        // Path Params
        const localVarPath = '/api/v1/insights/coins';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (projectOwner !== undefined) {
            requestContext.setQueryParam("projectOwner", ObjectSerializer.serialize(projectOwner, "string", ""));
        }

        // Query Params
        if (projectSlug !== undefined) {
            requestContext.setQueryParam("projectSlug", ObjectSerializer.serialize(projectSlug, "string", ""));
        }

        // Query Params
        if (projectId !== undefined) {
            requestContext.setQueryParam("projectId", ObjectSerializer.serialize(projectId, "string", ""));
        }

        // Query Params
        if (version !== undefined) {
            requestContext.setQueryParam("version", ObjectSerializer.serialize(version, "number", "int32"));
        }

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


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
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
     * Query for metrics,event logs and coin prices in a project.
     * Insight Query
     * @param owner username or organization name
     * @param slug project slug
     * @param body 
     */
    public async query(owner: string, slug: string, body: InsightsServiceInsightsServiceQueryBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("DataApi", "query", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("DataApi", "query", "slug");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("DataApi", "query", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/insights/{owner}/{slug}/query'
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
            ObjectSerializer.serialize(body, "InsightsServiceInsightsServiceQueryBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
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
     * Metric instant queries
     * @param owner username or organization name
     * @param slug project slug
     * @param body 
     */
    public async queryInstant(owner: string, slug: string, body: MetricsServiceObservabilityServiceQueryBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("DataApi", "queryInstant", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("DataApi", "queryInstant", "slug");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("DataApi", "queryInstant", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/metrics/{owner}/{slug}/query'
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
            ObjectSerializer.serialize(body, "MetricsServiceObservabilityServiceQueryBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
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
     * Query event logs
     * @param owner 
     * @param slug 
     * @param body 
     */
    public async queryLog(owner: string, slug: string, body: AnalyticServiceSearchServiceQueryLogBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("DataApi", "queryLog", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("DataApi", "queryLog", "slug");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("DataApi", "queryLog", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/eventlogs/{owner}/{slug}'
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
            ObjectSerializer.serialize(body, "AnalyticServiceSearchServiceQueryLogBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
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
     * Query event logs
     * @param owner 
     * @param slug 
     * @param projectId 
     * @param query 
     * @param timeRangeStartRelativeTimeUnit 
     * @param timeRangeStartRelativeTimeValue 
     * @param timeRangeStartRelativeTimeAlign 
     * @param timeRangeStartAbsoluteTime 
     * @param timeRangeEndRelativeTimeUnit 
     * @param timeRangeEndRelativeTimeValue 
     * @param timeRangeEndRelativeTimeAlign 
     * @param timeRangeEndAbsoluteTime 
     * @param timeRangeStep 
     * @param timeRangeIntervalValue 
     * @param timeRangeIntervalUnit 
     * @param timeRangeTimezone 
     * @param limit 
     * @param offset 
     * @param version 
     */
    public async queryLog2(owner: string, slug: string, projectId?: string, query?: string, timeRangeStartRelativeTimeUnit?: string, timeRangeStartRelativeTimeValue?: number, timeRangeStartRelativeTimeAlign?: string, timeRangeStartAbsoluteTime?: string, timeRangeEndRelativeTimeUnit?: string, timeRangeEndRelativeTimeValue?: number, timeRangeEndRelativeTimeAlign?: string, timeRangeEndAbsoluteTime?: string, timeRangeStep?: string, timeRangeIntervalValue?: number, timeRangeIntervalUnit?: string, timeRangeTimezone?: string, limit?: number, offset?: number, version?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("DataApi", "queryLog2", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("DataApi", "queryLog2", "slug");
        }



















        // Path Params
        const localVarPath = '/api/v1/eventlogs/{owner}/{slug}/query'
            .replace('{' + 'owner' + '}', encodeURIComponent(String(owner)))
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (projectId !== undefined) {
            requestContext.setQueryParam("projectId", ObjectSerializer.serialize(projectId, "string", ""));
        }

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (timeRangeStartRelativeTimeUnit !== undefined) {
            requestContext.setQueryParam("timeRange.start.relativeTime.unit", ObjectSerializer.serialize(timeRangeStartRelativeTimeUnit, "string", ""));
        }

        // Query Params
        if (timeRangeStartRelativeTimeValue !== undefined) {
            requestContext.setQueryParam("timeRange.start.relativeTime.value", ObjectSerializer.serialize(timeRangeStartRelativeTimeValue, "number", "int32"));
        }

        // Query Params
        if (timeRangeStartRelativeTimeAlign !== undefined) {
            requestContext.setQueryParam("timeRange.start.relativeTime.align", ObjectSerializer.serialize(timeRangeStartRelativeTimeAlign, "string", ""));
        }

        // Query Params
        if (timeRangeStartAbsoluteTime !== undefined) {
            requestContext.setQueryParam("timeRange.start.absoluteTime", ObjectSerializer.serialize(timeRangeStartAbsoluteTime, "string", "int64"));
        }

        // Query Params
        if (timeRangeEndRelativeTimeUnit !== undefined) {
            requestContext.setQueryParam("timeRange.end.relativeTime.unit", ObjectSerializer.serialize(timeRangeEndRelativeTimeUnit, "string", ""));
        }

        // Query Params
        if (timeRangeEndRelativeTimeValue !== undefined) {
            requestContext.setQueryParam("timeRange.end.relativeTime.value", ObjectSerializer.serialize(timeRangeEndRelativeTimeValue, "number", "int32"));
        }

        // Query Params
        if (timeRangeEndRelativeTimeAlign !== undefined) {
            requestContext.setQueryParam("timeRange.end.relativeTime.align", ObjectSerializer.serialize(timeRangeEndRelativeTimeAlign, "string", ""));
        }

        // Query Params
        if (timeRangeEndAbsoluteTime !== undefined) {
            requestContext.setQueryParam("timeRange.end.absoluteTime", ObjectSerializer.serialize(timeRangeEndAbsoluteTime, "string", "int64"));
        }

        // Query Params
        if (timeRangeStep !== undefined) {
            requestContext.setQueryParam("timeRange.step", ObjectSerializer.serialize(timeRangeStep, "string", "int64"));
        }

        // Query Params
        if (timeRangeIntervalValue !== undefined) {
            requestContext.setQueryParam("timeRange.interval.value", ObjectSerializer.serialize(timeRangeIntervalValue, "number", "double"));
        }

        // Query Params
        if (timeRangeIntervalUnit !== undefined) {
            requestContext.setQueryParam("timeRange.interval.unit", ObjectSerializer.serialize(timeRangeIntervalUnit, "string", ""));
        }

        // Query Params
        if (timeRangeTimezone !== undefined) {
            requestContext.setQueryParam("timeRange.timezone", ObjectSerializer.serialize(timeRangeTimezone, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", "int32"));
        }

        // Query Params
        if (version !== undefined) {
            requestContext.setQueryParam("version", ObjectSerializer.serialize(version, "number", "int32"));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
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
     * The easiest way to build query is through UI, you could first create an insight chart, and then **Export as cURL**.  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(101).png)
     * Metric range queries
     * @param owner username or organization name
     * @param slug project slug
     * @param body 
     */
    public async queryRange(owner: string, slug: string, body: MetricsServiceObservabilityServiceQueryRangeBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("DataApi", "queryRange", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("DataApi", "queryRange", "slug");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("DataApi", "queryRange", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/metrics/{owner}/{slug}/query_range'
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
            ObjectSerializer.serialize(body, "MetricsServiceObservabilityServiceQueryRangeBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
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
     * Query the result of a SQL query by execution_id.
     * Query SQL Result
     * @param owner username or organization name
     * @param slug project slug
     * @param executionId 
     * @param projectId use project id if project_owner and project_slug are not provided
     * @param version version of the datasource, default to the active version if not provided
     */
    public async querySQLResult(owner: string, slug: string, executionId: string, projectId?: string, version?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("DataApi", "querySQLResult", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("DataApi", "querySQLResult", "slug");
        }


        // verify required parameter 'executionId' is not null or undefined
        if (executionId === null || executionId === undefined) {
            throw new RequiredError("DataApi", "querySQLResult", "executionId");
        }




        // Path Params
        const localVarPath = '/api/v1/analytics/{owner}/{slug}/sql/query_result/{executionId}'
            .replace('{' + 'owner' + '}', encodeURIComponent(String(owner)))
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'executionId' + '}', encodeURIComponent(String(executionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (projectId !== undefined) {
            requestContext.setQueryParam("projectId", ObjectSerializer.serialize(projectId, "string", ""));
        }

        // Query Params
        if (version !== undefined) {
            requestContext.setQueryParam("version", ObjectSerializer.serialize(version, "number", "int32"));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
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
     * Query for retention.
     * Retention query
     * @param owner 
     * @param slug 
     * @param body 
     */
    public async retention(owner: string, slug: string, body: InsightsServiceInsightsServiceRetentionBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("DataApi", "retention", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("DataApi", "retention", "slug");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("DataApi", "retention", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/insights/{owner}/{slug}/retention'
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
            ObjectSerializer.serialize(body, "InsightsServiceInsightsServiceRetentionBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
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
     * Query for retention.
     * Retention query
     * @param body 
     */
    public async retention2(body: InsightsServiceRetentionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("DataApi", "retention2", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/insights/retention';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "InsightsServiceRetentionRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
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
     * Save or update a SQL query in a project.
     * Save SQL
     * @param owner username or organization name
     * @param slug project slug
     * @param body 
     */
    public async saveSQL(owner: string, slug: string, body: AnalyticServiceAnalyticServiceSaveSQLBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("DataApi", "saveSQL", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("DataApi", "saveSQL", "slug");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("DataApi", "saveSQL", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/analytics/{owner}/{slug}/sql/save'
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
            ObjectSerializer.serialize(body, "AnalyticServiceAnalyticServiceSaveSQLBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
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
     * Save or update a SQL query in a project.
     * Save SQL
     * @param owner username or organization name
     * @param slug project slug
     * @param body 
     */
    public async saveSQL2(owner: string, slug: string, body: AnalyticServiceAnalyticServiceSaveSQLBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("DataApi", "saveSQL2", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("DataApi", "saveSQL2", "slug");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("DataApi", "saveSQL2", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/analytics/{owner}/{slug}/sql/save'
            .replace('{' + 'owner' + '}', encodeURIComponent(String(owner)))
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "AnalyticServiceAnalyticServiceSaveSQLBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
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

export class DataApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to executeSQL
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async executeSQLWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnalyticServiceSyncExecuteSQLResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AnalyticServiceSyncExecuteSQLResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalyticServiceSyncExecuteSQLResponse", ""
            ) as AnalyticServiceSyncExecuteSQLResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AnalyticServiceSyncExecuteSQLResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalyticServiceSyncExecuteSQLResponse", ""
            ) as AnalyticServiceSyncExecuteSQLResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to executeSQLAsync
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async executeSQLAsyncWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnalyticServiceAsyncExecuteSQLResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AnalyticServiceAsyncExecuteSQLResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalyticServiceAsyncExecuteSQLResponse", ""
            ) as AnalyticServiceAsyncExecuteSQLResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AnalyticServiceAsyncExecuteSQLResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalyticServiceAsyncExecuteSQLResponse", ""
            ) as AnalyticServiceAsyncExecuteSQLResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMetricsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetricsServiceGetMetricsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetricsServiceGetMetricsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetricsServiceGetMetricsResponse", ""
            ) as MetricsServiceGetMetricsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MetricsServiceGetMetricsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetricsServiceGetMetricsResponse", ""
            ) as MetricsServiceGetMetricsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCoins
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listCoinsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<InsightsServiceListCoinsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InsightsServiceListCoinsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InsightsServiceListCoinsResponse", ""
            ) as InsightsServiceListCoinsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InsightsServiceListCoinsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InsightsServiceListCoinsResponse", ""
            ) as InsightsServiceListCoinsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCoins2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listCoins2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<InsightsServiceListCoinsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InsightsServiceListCoinsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InsightsServiceListCoinsResponse", ""
            ) as InsightsServiceListCoinsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InsightsServiceListCoinsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InsightsServiceListCoinsResponse", ""
            ) as InsightsServiceListCoinsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to query
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async queryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<InsightsServiceQueryResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InsightsServiceQueryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InsightsServiceQueryResponse", ""
            ) as InsightsServiceQueryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InsightsServiceQueryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InsightsServiceQueryResponse", ""
            ) as InsightsServiceQueryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to queryInstant
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async queryInstantWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetricsServiceQueryValueResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetricsServiceQueryValueResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetricsServiceQueryValueResponse", ""
            ) as MetricsServiceQueryValueResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MetricsServiceQueryValueResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetricsServiceQueryValueResponse", ""
            ) as MetricsServiceQueryValueResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to queryLog
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async queryLogWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnalyticServiceLogQueryResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AnalyticServiceLogQueryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalyticServiceLogQueryResponse", ""
            ) as AnalyticServiceLogQueryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AnalyticServiceLogQueryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalyticServiceLogQueryResponse", ""
            ) as AnalyticServiceLogQueryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to queryLog2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async queryLog2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnalyticServiceLogQueryResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AnalyticServiceLogQueryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalyticServiceLogQueryResponse", ""
            ) as AnalyticServiceLogQueryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AnalyticServiceLogQueryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalyticServiceLogQueryResponse", ""
            ) as AnalyticServiceLogQueryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to queryRange
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async queryRangeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetricsServiceMetricsQueryResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetricsServiceMetricsQueryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetricsServiceMetricsQueryResponse", ""
            ) as MetricsServiceMetricsQueryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MetricsServiceMetricsQueryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetricsServiceMetricsQueryResponse", ""
            ) as MetricsServiceMetricsQueryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to querySQLResult
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async querySQLResultWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnalyticServiceQuerySQLResultResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AnalyticServiceQuerySQLResultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalyticServiceQuerySQLResultResponse", ""
            ) as AnalyticServiceQuerySQLResultResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AnalyticServiceQuerySQLResultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalyticServiceQuerySQLResultResponse", ""
            ) as AnalyticServiceQuerySQLResultResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retention
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retentionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<InsightsServiceRetentionResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InsightsServiceRetentionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InsightsServiceRetentionResponse", ""
            ) as InsightsServiceRetentionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InsightsServiceRetentionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InsightsServiceRetentionResponse", ""
            ) as InsightsServiceRetentionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retention2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retention2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<InsightsServiceRetentionResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InsightsServiceRetentionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InsightsServiceRetentionResponse", ""
            ) as InsightsServiceRetentionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InsightsServiceRetentionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InsightsServiceRetentionResponse", ""
            ) as InsightsServiceRetentionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to saveSQL
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async saveSQLWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnalyticServiceSaveSQLResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AnalyticServiceSaveSQLResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalyticServiceSaveSQLResponse", ""
            ) as AnalyticServiceSaveSQLResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AnalyticServiceSaveSQLResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalyticServiceSaveSQLResponse", ""
            ) as AnalyticServiceSaveSQLResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to saveSQL2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async saveSQL2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnalyticServiceSaveSQLResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AnalyticServiceSaveSQLResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalyticServiceSaveSQLResponse", ""
            ) as AnalyticServiceSaveSQLResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AnalyticServiceSaveSQLResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalyticServiceSaveSQLResponse", ""
            ) as AnalyticServiceSaveSQLResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
