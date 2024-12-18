// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.js';
import {Configuration} from '../configuration.js';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.js';
import {ObjectSerializer} from '../models/ObjectSerializer.js';
import {ApiException} from './exception.js';
import {canConsumeForm, isCodeInRange} from '../util.js';
import {SecurityAuthentication} from '../auth/auth.js';


import { CommonProjectInfo } from '../models/CommonProjectInfo.js';
import { WebServiceDashboard } from '../models/WebServiceDashboard.js';
import { WebServiceExportDashboardResponse } from '../models/WebServiceExportDashboardResponse.js';
import { WebServiceGetDashboardResponse } from '../models/WebServiceGetDashboardResponse.js';
import { WebServiceGetProjectListResponse } from '../models/WebServiceGetProjectListResponse.js';
import { WebServiceGetProjectResponse } from '../models/WebServiceGetProjectResponse.js';
import { WebServiceImportDashboardRequest } from '../models/WebServiceImportDashboardRequest.js';
import { WebServiceImportDashboardResponse } from '../models/WebServiceImportDashboardResponse.js';

/**
 * no description
 */
export class WebApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Delete a dashboard by id
     * @param dashboardId filter the dashboard by id
     * @param projectId filter the dashboard by project id
     * @param ownerName username or organization name
     * @param slug project slug
     */
    public async deleteDashboard(dashboardId: string, projectId?: string, ownerName?: string, slug?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'dashboardId' is not null or undefined
        if (dashboardId === null || dashboardId === undefined) {
            throw new RequiredError("WebApi", "deleteDashboard", "dashboardId");
        }





        // Path Params
        const localVarPath = '/api/v1/dashboards/{dashboardId}'
            .replace('{' + 'dashboardId' + '}', encodeURIComponent(String(dashboardId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (projectId !== undefined) {
            requestContext.setQueryParam("projectId", ObjectSerializer.serialize(projectId, "string", ""));
        }

        // Query Params
        if (ownerName !== undefined) {
            requestContext.setQueryParam("ownerName", ObjectSerializer.serialize(ownerName, "string", ""));
        }

        // Query Params
        if (slug !== undefined) {
            requestContext.setQueryParam("slug", ObjectSerializer.serialize(slug, "string", ""));
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
     * Export a dashboard to json
     * @param dashboardId 
     */
    public async exportDashboard(dashboardId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'dashboardId' is not null or undefined
        if (dashboardId === null || dashboardId === undefined) {
            throw new RequiredError("WebApi", "exportDashboard", "dashboardId");
        }


        // Path Params
        const localVarPath = '/api/v1/dashboards/{dashboardId}/json'
            .replace('{' + 'dashboardId' + '}', encodeURIComponent(String(dashboardId)));

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
     * Get a dashboard by id
     * @param dashboardId filter the dashboard by id
     * @param projectId filter the dashboard by project id
     * @param ownerName username or organization name
     * @param slug project slug
     */
    public async getDashboard(dashboardId: string, projectId?: string, ownerName?: string, slug?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'dashboardId' is not null or undefined
        if (dashboardId === null || dashboardId === undefined) {
            throw new RequiredError("WebApi", "getDashboard", "dashboardId");
        }





        // Path Params
        const localVarPath = '/api/v1/dashboards/{dashboardId}'
            .replace('{' + 'dashboardId' + '}', encodeURIComponent(String(dashboardId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (projectId !== undefined) {
            requestContext.setQueryParam("projectId", ObjectSerializer.serialize(projectId, "string", ""));
        }

        // Query Params
        if (ownerName !== undefined) {
            requestContext.setQueryParam("ownerName", ObjectSerializer.serialize(ownerName, "string", ""));
        }

        // Query Params
        if (slug !== undefined) {
            requestContext.setQueryParam("slug", ObjectSerializer.serialize(slug, "string", ""));
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
     * Get a dashboard by id
     * @param owner username or organization name
     * @param slug project slug
     * @param dashboardId filter the dashboard by id
     * @param projectId filter the dashboard by project id
     */
    public async getDashboard2(owner: string, slug: string, dashboardId: string, projectId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("WebApi", "getDashboard2", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("WebApi", "getDashboard2", "slug");
        }


        // verify required parameter 'dashboardId' is not null or undefined
        if (dashboardId === null || dashboardId === undefined) {
            throw new RequiredError("WebApi", "getDashboard2", "dashboardId");
        }



        // Path Params
        const localVarPath = '/api/v1/projects/{owner}/{slug}/dashboards/{dashboardId}'
            .replace('{' + 'owner' + '}', encodeURIComponent(String(owner)))
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'dashboardId' + '}', encodeURIComponent(String(dashboardId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (projectId !== undefined) {
            requestContext.setQueryParam("projectId", ObjectSerializer.serialize(projectId, "string", ""));
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
     * Get project details
     * @param owner username or organization name
     * @param slug project slug
     */
    public async getProject(owner: string, slug: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("WebApi", "getProject", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("WebApi", "getProject", "slug");
        }


        // Path Params
        const localVarPath = '/api/v1/project/{owner}/{slug}'
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
     * Get project details
     * @param projectId 
     */
    public async getProjectById(projectId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'projectId' is not null or undefined
        if (projectId === null || projectId === undefined) {
            throw new RequiredError("WebApi", "getProjectById", "projectId");
        }


        // Path Params
        const localVarPath = '/api/v1/project/{projectId}'
            .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));

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
     * Get project list
     * @param userId 
     * @param organizationId 
     */
    public async getProjectList(userId?: string, organizationId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/api/v1/projects';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (userId !== undefined) {
            requestContext.setQueryParam("userId", ObjectSerializer.serialize(userId, "string", ""));
        }

        // Query Params
        if (organizationId !== undefined) {
            requestContext.setQueryParam("organizationId", ObjectSerializer.serialize(organizationId, "string", ""));
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
     * Import a dashboard to another dashboard
     * @param body 
     */
    public async importDashboard(body: WebServiceImportDashboardRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("WebApi", "importDashboard", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/dashboards/json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "WebServiceImportDashboardRequest", ""),
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
     * List all dashboards in a project
     * @param dashboardId filter the dashboard by id
     * @param projectId filter the dashboard by project id
     * @param ownerName username or organization name
     * @param slug project slug
     */
    public async listDashboards(dashboardId?: string, projectId?: string, ownerName?: string, slug?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/api/v1/dashboards';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (dashboardId !== undefined) {
            requestContext.setQueryParam("dashboardId", ObjectSerializer.serialize(dashboardId, "string", ""));
        }

        // Query Params
        if (projectId !== undefined) {
            requestContext.setQueryParam("projectId", ObjectSerializer.serialize(projectId, "string", ""));
        }

        // Query Params
        if (ownerName !== undefined) {
            requestContext.setQueryParam("ownerName", ObjectSerializer.serialize(ownerName, "string", ""));
        }

        // Query Params
        if (slug !== undefined) {
            requestContext.setQueryParam("slug", ObjectSerializer.serialize(slug, "string", ""));
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
     * List all dashboards in a project
     * @param owner username or organization name
     * @param slug project slug
     * @param dashboardId filter the dashboard by id
     * @param projectId filter the dashboard by project id
     */
    public async listDashboards2(owner: string, slug: string, dashboardId?: string, projectId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("WebApi", "listDashboards2", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("WebApi", "listDashboards2", "slug");
        }




        // Path Params
        const localVarPath = '/api/v1/projects/{owner}/{slug}/dashboards'
            .replace('{' + 'owner' + '}', encodeURIComponent(String(owner)))
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (dashboardId !== undefined) {
            requestContext.setQueryParam("dashboardId", ObjectSerializer.serialize(dashboardId, "string", ""));
        }

        // Query Params
        if (projectId !== undefined) {
            requestContext.setQueryParam("projectId", ObjectSerializer.serialize(projectId, "string", ""));
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

export class WebApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDashboard
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteDashboardWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WebServiceDashboard >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebServiceDashboard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebServiceDashboard", ""
            ) as WebServiceDashboard;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebServiceDashboard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebServiceDashboard", ""
            ) as WebServiceDashboard;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to exportDashboard
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportDashboardWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WebServiceExportDashboardResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebServiceExportDashboardResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebServiceExportDashboardResponse", ""
            ) as WebServiceExportDashboardResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebServiceExportDashboardResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebServiceExportDashboardResponse", ""
            ) as WebServiceExportDashboardResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDashboard
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDashboardWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WebServiceGetDashboardResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebServiceGetDashboardResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebServiceGetDashboardResponse", ""
            ) as WebServiceGetDashboardResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebServiceGetDashboardResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebServiceGetDashboardResponse", ""
            ) as WebServiceGetDashboardResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDashboard2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDashboard2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<WebServiceGetDashboardResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebServiceGetDashboardResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebServiceGetDashboardResponse", ""
            ) as WebServiceGetDashboardResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebServiceGetDashboardResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebServiceGetDashboardResponse", ""
            ) as WebServiceGetDashboardResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getProject
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getProjectWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WebServiceGetProjectResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebServiceGetProjectResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebServiceGetProjectResponse", ""
            ) as WebServiceGetProjectResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebServiceGetProjectResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebServiceGetProjectResponse", ""
            ) as WebServiceGetProjectResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getProjectById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getProjectByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CommonProjectInfo >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CommonProjectInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CommonProjectInfo", ""
            ) as CommonProjectInfo;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CommonProjectInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CommonProjectInfo", ""
            ) as CommonProjectInfo;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getProjectList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getProjectListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WebServiceGetProjectListResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebServiceGetProjectListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebServiceGetProjectListResponse", ""
            ) as WebServiceGetProjectListResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebServiceGetProjectListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebServiceGetProjectListResponse", ""
            ) as WebServiceGetProjectListResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to importDashboard
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async importDashboardWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WebServiceImportDashboardResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebServiceImportDashboardResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebServiceImportDashboardResponse", ""
            ) as WebServiceImportDashboardResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebServiceImportDashboardResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebServiceImportDashboardResponse", ""
            ) as WebServiceImportDashboardResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDashboards
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listDashboardsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WebServiceGetDashboardResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebServiceGetDashboardResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebServiceGetDashboardResponse", ""
            ) as WebServiceGetDashboardResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebServiceGetDashboardResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebServiceGetDashboardResponse", ""
            ) as WebServiceGetDashboardResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDashboards2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listDashboards2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<WebServiceGetDashboardResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebServiceGetDashboardResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebServiceGetDashboardResponse", ""
            ) as WebServiceGetDashboardResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebServiceGetDashboardResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebServiceGetDashboardResponse", ""
            ) as WebServiceGetDashboardResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
