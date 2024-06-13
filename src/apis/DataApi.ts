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
  AnalyticServiceAnalyticServiceExecuteSQLBody,
  AnalyticServiceLogQueryResponse,
  AnalyticServiceSearchServiceQueryLogBody,
  AnalyticServiceSyncExecuteSQLRequest,
  AnalyticServiceSyncExecuteSQLResponse,
  InsightsServiceInsightsServiceQueryBody,
  InsightsServiceInsightsServiceRetentionBody,
  InsightsServiceListCoinsResponse,
  InsightsServiceQueryRequest,
  InsightsServiceQueryResponse,
  InsightsServiceRetentionRequest,
  InsightsServiceRetentionResponse,
  MetricsServiceGetMetricsResponse,
  MetricsServiceMetricsQueryResponse,
  MetricsServiceObservabilityServiceQueryBody,
  MetricsServiceObservabilityServiceQueryRangeBody,
  MetricsServiceQueryValueResponse,
} from '../models/index.js';
import {
    AnalyticServiceAnalyticServiceExecuteSQLBodyFromJSON,
    AnalyticServiceAnalyticServiceExecuteSQLBodyToJSON,
    AnalyticServiceLogQueryResponseFromJSON,
    AnalyticServiceLogQueryResponseToJSON,
    AnalyticServiceSearchServiceQueryLogBodyFromJSON,
    AnalyticServiceSearchServiceQueryLogBodyToJSON,
    AnalyticServiceSyncExecuteSQLRequestFromJSON,
    AnalyticServiceSyncExecuteSQLRequestToJSON,
    AnalyticServiceSyncExecuteSQLResponseFromJSON,
    AnalyticServiceSyncExecuteSQLResponseToJSON,
    InsightsServiceInsightsServiceQueryBodyFromJSON,
    InsightsServiceInsightsServiceQueryBodyToJSON,
    InsightsServiceInsightsServiceRetentionBodyFromJSON,
    InsightsServiceInsightsServiceRetentionBodyToJSON,
    InsightsServiceListCoinsResponseFromJSON,
    InsightsServiceListCoinsResponseToJSON,
    InsightsServiceQueryRequestFromJSON,
    InsightsServiceQueryRequestToJSON,
    InsightsServiceQueryResponseFromJSON,
    InsightsServiceQueryResponseToJSON,
    InsightsServiceRetentionRequestFromJSON,
    InsightsServiceRetentionRequestToJSON,
    InsightsServiceRetentionResponseFromJSON,
    InsightsServiceRetentionResponseToJSON,
    MetricsServiceGetMetricsResponseFromJSON,
    MetricsServiceGetMetricsResponseToJSON,
    MetricsServiceMetricsQueryResponseFromJSON,
    MetricsServiceMetricsQueryResponseToJSON,
    MetricsServiceObservabilityServiceQueryBodyFromJSON,
    MetricsServiceObservabilityServiceQueryBodyToJSON,
    MetricsServiceObservabilityServiceQueryRangeBodyFromJSON,
    MetricsServiceObservabilityServiceQueryRangeBodyToJSON,
    MetricsServiceQueryValueResponseFromJSON,
    MetricsServiceQueryValueResponseToJSON,
} from '../models/index.js';

export interface ExecuteSQLRequest {
    owner: string;
    slug: string;
    body: AnalyticServiceAnalyticServiceExecuteSQLBody;
}

export interface ExecuteSQL2Request {
    body: AnalyticServiceSyncExecuteSQLRequest;
}

export interface ListCoinsRequest {
    owner: string;
    slug: string;
    projectId?: string;
    version?: number;
    limit?: number;
    offset?: number;
    searchQuery?: string;
}

export interface ListCoins2Request {
    projectOwner?: string;
    projectSlug?: string;
    projectId?: string;
    version?: number;
    limit?: number;
    offset?: number;
    searchQuery?: string;
}

export interface ObservabilityServiceGetMetricsRequest {
    projectId?: string;
    name?: string;
    version?: number;
}

export interface ObservabilityServiceQueryRequest {
    owner: string;
    slug: string;
    body: MetricsServiceObservabilityServiceQueryBody;
}

export interface ObservabilityServiceQueryRangeRequest {
    owner: string;
    slug: string;
    body: MetricsServiceObservabilityServiceQueryRangeBody;
}

export interface QueryRequest {
    owner: string;
    slug: string;
    body: InsightsServiceInsightsServiceQueryBody;
}

export interface Query2Request {
    body: InsightsServiceQueryRequest;
}

export interface QueryLogRequest {
    owner: string;
    slug: string;
    body: AnalyticServiceSearchServiceQueryLogBody;
}

export interface QueryLog2Request {
    owner: string;
    slug: string;
    projectId?: string;
    query?: string;
    timeRangeStartRelativeTimeUnit?: string;
    timeRangeStartRelativeTimeValue?: number;
    timeRangeStartRelativeTimeAlign?: string;
    timeRangeStartAbsoluteTime?: string;
    timeRangeEndRelativeTimeUnit?: string;
    timeRangeEndRelativeTimeValue?: number;
    timeRangeEndRelativeTimeAlign?: string;
    timeRangeEndAbsoluteTime?: string;
    timeRangeStep?: string;
    timeRangeIntervalValue?: number;
    timeRangeIntervalUnit?: string;
    timeRangeTimezone?: string;
    limit?: number;
    offset?: number;
    version?: number;
}

export interface RetentionRequest {
    owner: string;
    slug: string;
    body: InsightsServiceInsightsServiceRetentionBody;
}

export interface Retention2Request {
    body: InsightsServiceRetentionRequest;
}

/**
 * 
 */
export class DataApi extends runtime.BaseAPI {

    /**
     * Execute SQL in a project. Go to \"Data Studio\" -> \"SQL Editor\", write your query and then click \"Export as cURL\"  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(102).png)  Find more: https://docs.sentio.xyz/docs/data-api#sql-api
     * Execute SQL
     */
    async executeSQLRaw(requestParameters: ExecuteSQLRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnalyticServiceSyncExecuteSQLResponse>> {
        if (requestParameters['owner'] == null) {
            throw new runtime.RequiredError(
                'owner',
                'Required parameter "owner" was null or undefined when calling executeSQL().'
            );
        }

        if (requestParameters['slug'] == null) {
            throw new runtime.RequiredError(
                'slug',
                'Required parameter "slug" was null or undefined when calling executeSQL().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling executeSQL().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = await this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/analytics/{owner}/{slug}/sql/execute`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters['owner']))).replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AnalyticServiceAnalyticServiceExecuteSQLBodyToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AnalyticServiceSyncExecuteSQLResponseFromJSON(jsonValue));
    }

    /**
     * Execute SQL in a project. Go to \"Data Studio\" -> \"SQL Editor\", write your query and then click \"Export as cURL\"  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(102).png)  Find more: https://docs.sentio.xyz/docs/data-api#sql-api
     * Execute SQL
     */
    async executeSQL(requestParameters: ExecuteSQLRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnalyticServiceSyncExecuteSQLResponse> {
        const response = await this.executeSQLRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Execute SQL in a project. Go to \"Data Studio\" -> \"SQL Editor\", write your query and then click \"Export as cURL\"  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(102).png)  Find more: https://docs.sentio.xyz/docs/data-api#sql-api
     * Execute SQL
     */
    async executeSQL2Raw(requestParameters: ExecuteSQL2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnalyticServiceSyncExecuteSQLResponse>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling executeSQL2().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = await this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/analytics/sql/execute`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AnalyticServiceSyncExecuteSQLRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AnalyticServiceSyncExecuteSQLResponseFromJSON(jsonValue));
    }

    /**
     * Execute SQL in a project. Go to \"Data Studio\" -> \"SQL Editor\", write your query and then click \"Export as cURL\"  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(102).png)  Find more: https://docs.sentio.xyz/docs/data-api#sql-api
     * Execute SQL
     */
    async executeSQL2(requestParameters: ExecuteSQL2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnalyticServiceSyncExecuteSQLResponse> {
        const response = await this.executeSQL2Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a list of coins in a project.
     * List coins
     */
    async listCoinsRaw(requestParameters: ListCoinsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InsightsServiceListCoinsResponse>> {
        if (requestParameters['owner'] == null) {
            throw new runtime.RequiredError(
                'owner',
                'Required parameter "owner" was null or undefined when calling listCoins().'
            );
        }

        if (requestParameters['slug'] == null) {
            throw new runtime.RequiredError(
                'slug',
                'Required parameter "slug" was null or undefined when calling listCoins().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['projectId'] != null) {
            queryParameters['projectId'] = requestParameters['projectId'];
        }

        if (requestParameters['version'] != null) {
            queryParameters['version'] = requestParameters['version'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['searchQuery'] != null) {
            queryParameters['searchQuery'] = requestParameters['searchQuery'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = await this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/insights/{owner}/{slug}/coins`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters['owner']))).replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InsightsServiceListCoinsResponseFromJSON(jsonValue));
    }

    /**
     * Get a list of coins in a project.
     * List coins
     */
    async listCoins(requestParameters: ListCoinsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InsightsServiceListCoinsResponse> {
        const response = await this.listCoinsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a list of coins in a project.
     * List coins
     */
    async listCoins2Raw(requestParameters: ListCoins2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InsightsServiceListCoinsResponse>> {
        const queryParameters: any = {};

        if (requestParameters['projectOwner'] != null) {
            queryParameters['projectOwner'] = requestParameters['projectOwner'];
        }

        if (requestParameters['projectSlug'] != null) {
            queryParameters['projectSlug'] = requestParameters['projectSlug'];
        }

        if (requestParameters['projectId'] != null) {
            queryParameters['projectId'] = requestParameters['projectId'];
        }

        if (requestParameters['version'] != null) {
            queryParameters['version'] = requestParameters['version'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['searchQuery'] != null) {
            queryParameters['searchQuery'] = requestParameters['searchQuery'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = await this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/insights/coins`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InsightsServiceListCoinsResponseFromJSON(jsonValue));
    }

    /**
     * Get a list of coins in a project.
     * List coins
     */
    async listCoins2(requestParameters: ListCoins2Request = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InsightsServiceListCoinsResponse> {
        const response = await this.listCoins2Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a list of metrics in a project
     */
    async observabilityServiceGetMetricsRaw(requestParameters: ObservabilityServiceGetMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MetricsServiceGetMetricsResponse>> {
        const queryParameters: any = {};

        if (requestParameters['projectId'] != null) {
            queryParameters['projectId'] = requestParameters['projectId'];
        }

        if (requestParameters['name'] != null) {
            queryParameters['name'] = requestParameters['name'];
        }

        if (requestParameters['version'] != null) {
            queryParameters['version'] = requestParameters['version'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = await this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/metrics`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MetricsServiceGetMetricsResponseFromJSON(jsonValue));
    }

    /**
     * Get a list of metrics in a project
     */
    async observabilityServiceGetMetrics(requestParameters: ObservabilityServiceGetMetricsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MetricsServiceGetMetricsResponse> {
        const response = await this.observabilityServiceGetMetricsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Metric instant queries
     */
    async observabilityServiceQueryRaw(requestParameters: ObservabilityServiceQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MetricsServiceQueryValueResponse>> {
        if (requestParameters['owner'] == null) {
            throw new runtime.RequiredError(
                'owner',
                'Required parameter "owner" was null or undefined when calling observabilityServiceQuery().'
            );
        }

        if (requestParameters['slug'] == null) {
            throw new runtime.RequiredError(
                'slug',
                'Required parameter "slug" was null or undefined when calling observabilityServiceQuery().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling observabilityServiceQuery().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = await this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/metrics/{owner}/{slug}/query`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters['owner']))).replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MetricsServiceObservabilityServiceQueryBodyToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MetricsServiceQueryValueResponseFromJSON(jsonValue));
    }

    /**
     * Metric instant queries
     */
    async observabilityServiceQuery(requestParameters: ObservabilityServiceQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MetricsServiceQueryValueResponse> {
        const response = await this.observabilityServiceQueryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The easiest way to build query is through UI, you could first create an insight chart, and then **Export as cURL**.  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(101).png)
     * Metric range queries
     */
    async observabilityServiceQueryRangeRaw(requestParameters: ObservabilityServiceQueryRangeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MetricsServiceMetricsQueryResponse>> {
        if (requestParameters['owner'] == null) {
            throw new runtime.RequiredError(
                'owner',
                'Required parameter "owner" was null or undefined when calling observabilityServiceQueryRange().'
            );
        }

        if (requestParameters['slug'] == null) {
            throw new runtime.RequiredError(
                'slug',
                'Required parameter "slug" was null or undefined when calling observabilityServiceQueryRange().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling observabilityServiceQueryRange().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = await this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/metrics/{owner}/{slug}/query_range`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters['owner']))).replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MetricsServiceObservabilityServiceQueryRangeBodyToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MetricsServiceMetricsQueryResponseFromJSON(jsonValue));
    }

    /**
     * The easiest way to build query is through UI, you could first create an insight chart, and then **Export as cURL**.  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(101).png)
     * Metric range queries
     */
    async observabilityServiceQueryRange(requestParameters: ObservabilityServiceQueryRangeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MetricsServiceMetricsQueryResponse> {
        const response = await this.observabilityServiceQueryRangeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Query for metrics,event logs and coin prices in a project.
     * Insight Query
     */
    async queryRaw(requestParameters: QueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InsightsServiceQueryResponse>> {
        if (requestParameters['owner'] == null) {
            throw new runtime.RequiredError(
                'owner',
                'Required parameter "owner" was null or undefined when calling query().'
            );
        }

        if (requestParameters['slug'] == null) {
            throw new runtime.RequiredError(
                'slug',
                'Required parameter "slug" was null or undefined when calling query().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling query().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = await this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/insights/{owner}/{slug}/query`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters['owner']))).replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InsightsServiceInsightsServiceQueryBodyToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InsightsServiceQueryResponseFromJSON(jsonValue));
    }

    /**
     * Query for metrics,event logs and coin prices in a project.
     * Insight Query
     */
    async query(requestParameters: QueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InsightsServiceQueryResponse> {
        const response = await this.queryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Query for metrics,event logs and coin prices in a project.
     * Insight Query
     */
    async query2Raw(requestParameters: Query2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InsightsServiceQueryResponse>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling query2().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = await this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/insights/query`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InsightsServiceQueryRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InsightsServiceQueryResponseFromJSON(jsonValue));
    }

    /**
     * Query for metrics,event logs and coin prices in a project.
     * Insight Query
     */
    async query2(requestParameters: Query2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InsightsServiceQueryResponse> {
        const response = await this.query2Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Query event logs
     */
    async queryLogRaw(requestParameters: QueryLogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnalyticServiceLogQueryResponse>> {
        if (requestParameters['owner'] == null) {
            throw new runtime.RequiredError(
                'owner',
                'Required parameter "owner" was null or undefined when calling queryLog().'
            );
        }

        if (requestParameters['slug'] == null) {
            throw new runtime.RequiredError(
                'slug',
                'Required parameter "slug" was null or undefined when calling queryLog().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling queryLog().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = await this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/eventlogs/{owner}/{slug}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters['owner']))).replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AnalyticServiceSearchServiceQueryLogBodyToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AnalyticServiceLogQueryResponseFromJSON(jsonValue));
    }

    /**
     * Query event logs
     */
    async queryLog(requestParameters: QueryLogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnalyticServiceLogQueryResponse> {
        const response = await this.queryLogRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Query event logs
     */
    async queryLog2Raw(requestParameters: QueryLog2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnalyticServiceLogQueryResponse>> {
        if (requestParameters['owner'] == null) {
            throw new runtime.RequiredError(
                'owner',
                'Required parameter "owner" was null or undefined when calling queryLog2().'
            );
        }

        if (requestParameters['slug'] == null) {
            throw new runtime.RequiredError(
                'slug',
                'Required parameter "slug" was null or undefined when calling queryLog2().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['projectId'] != null) {
            queryParameters['projectId'] = requestParameters['projectId'];
        }

        if (requestParameters['query'] != null) {
            queryParameters['query'] = requestParameters['query'];
        }

        if (requestParameters['timeRangeStartRelativeTimeUnit'] != null) {
            queryParameters['timeRange.start.relativeTime.unit'] = requestParameters['timeRangeStartRelativeTimeUnit'];
        }

        if (requestParameters['timeRangeStartRelativeTimeValue'] != null) {
            queryParameters['timeRange.start.relativeTime.value'] = requestParameters['timeRangeStartRelativeTimeValue'];
        }

        if (requestParameters['timeRangeStartRelativeTimeAlign'] != null) {
            queryParameters['timeRange.start.relativeTime.align'] = requestParameters['timeRangeStartRelativeTimeAlign'];
        }

        if (requestParameters['timeRangeStartAbsoluteTime'] != null) {
            queryParameters['timeRange.start.absoluteTime'] = requestParameters['timeRangeStartAbsoluteTime'];
        }

        if (requestParameters['timeRangeEndRelativeTimeUnit'] != null) {
            queryParameters['timeRange.end.relativeTime.unit'] = requestParameters['timeRangeEndRelativeTimeUnit'];
        }

        if (requestParameters['timeRangeEndRelativeTimeValue'] != null) {
            queryParameters['timeRange.end.relativeTime.value'] = requestParameters['timeRangeEndRelativeTimeValue'];
        }

        if (requestParameters['timeRangeEndRelativeTimeAlign'] != null) {
            queryParameters['timeRange.end.relativeTime.align'] = requestParameters['timeRangeEndRelativeTimeAlign'];
        }

        if (requestParameters['timeRangeEndAbsoluteTime'] != null) {
            queryParameters['timeRange.end.absoluteTime'] = requestParameters['timeRangeEndAbsoluteTime'];
        }

        if (requestParameters['timeRangeStep'] != null) {
            queryParameters['timeRange.step'] = requestParameters['timeRangeStep'];
        }

        if (requestParameters['timeRangeIntervalValue'] != null) {
            queryParameters['timeRange.interval.value'] = requestParameters['timeRangeIntervalValue'];
        }

        if (requestParameters['timeRangeIntervalUnit'] != null) {
            queryParameters['timeRange.interval.unit'] = requestParameters['timeRangeIntervalUnit'];
        }

        if (requestParameters['timeRangeTimezone'] != null) {
            queryParameters['timeRange.timezone'] = requestParameters['timeRangeTimezone'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['version'] != null) {
            queryParameters['version'] = requestParameters['version'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = await this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/eventlogs/{owner}/{slug}/query`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters['owner']))).replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AnalyticServiceLogQueryResponseFromJSON(jsonValue));
    }

    /**
     * Query event logs
     */
    async queryLog2(requestParameters: QueryLog2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnalyticServiceLogQueryResponse> {
        const response = await this.queryLog2Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Query for retention.
     * Retention query
     */
    async retentionRaw(requestParameters: RetentionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InsightsServiceRetentionResponse>> {
        if (requestParameters['owner'] == null) {
            throw new runtime.RequiredError(
                'owner',
                'Required parameter "owner" was null or undefined when calling retention().'
            );
        }

        if (requestParameters['slug'] == null) {
            throw new runtime.RequiredError(
                'slug',
                'Required parameter "slug" was null or undefined when calling retention().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling retention().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = await this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/insights/{owner}/{slug}/retention`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters['owner']))).replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InsightsServiceInsightsServiceRetentionBodyToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InsightsServiceRetentionResponseFromJSON(jsonValue));
    }

    /**
     * Query for retention.
     * Retention query
     */
    async retention(requestParameters: RetentionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InsightsServiceRetentionResponse> {
        const response = await this.retentionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Query for retention.
     * Retention query
     */
    async retention2Raw(requestParameters: Retention2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InsightsServiceRetentionResponse>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling retention2().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = await this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/insights/retention`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InsightsServiceRetentionRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InsightsServiceRetentionResponseFromJSON(jsonValue));
    }

    /**
     * Query for retention.
     * Retention query
     */
    async retention2(requestParameters: Retention2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InsightsServiceRetentionResponse> {
        const response = await this.retention2Raw(requestParameters, initOverrides);
        return await response.value();
    }

}
