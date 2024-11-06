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
  SolidityServiceCreateForkResponse,
  SolidityServiceForkServiceCreateForkBody,
  SolidityServiceForkServiceUpdateForkBody,
  SolidityServiceGetForkInfoResponse,
  SolidityServiceGetForkResponse,
  SolidityServiceListForksResponse,
  SolidityServiceUpdateForkResponse,
} from '../models/index.js';
import {
    SolidityServiceCreateForkResponseFromJSON,
    SolidityServiceCreateForkResponseToJSON,
    SolidityServiceForkServiceCreateForkBodyFromJSON,
    SolidityServiceForkServiceCreateForkBodyToJSON,
    SolidityServiceForkServiceUpdateForkBodyFromJSON,
    SolidityServiceForkServiceUpdateForkBodyToJSON,
    SolidityServiceGetForkInfoResponseFromJSON,
    SolidityServiceGetForkInfoResponseToJSON,
    SolidityServiceGetForkResponseFromJSON,
    SolidityServiceGetForkResponseToJSON,
    SolidityServiceListForksResponseFromJSON,
    SolidityServiceListForksResponseToJSON,
    SolidityServiceUpdateForkResponseFromJSON,
    SolidityServiceUpdateForkResponseToJSON,
} from '../models/index.js';

export interface CreateForkRequest {
    projectOwner: string;
    projectSlug: string;
    body: SolidityServiceForkServiceCreateForkBody;
}

export interface DeleteForkRequest {
    projectOwner: string;
    projectSlug: string;
    id: string;
}

export interface GetForkRequest {
    projectOwner: string;
    projectSlug: string;
    id: string;
}

export interface GetForkInfoRequest {
    projectOwner: string;
    projectSlug: string;
    id: string;
}

export interface ListForksRequest {
    projectOwner: string;
    projectSlug: string;
}

export interface UpdateForkRequest {
    projectOwner: string;
    projectSlug: string;
    id: string;
    body: SolidityServiceForkServiceUpdateForkBody;
}

/**
 * 
 */
export class ForksApi extends runtime.BaseAPI {

    /**
     */
    async createForkRaw(requestParameters: CreateForkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SolidityServiceCreateForkResponse>> {
        if (requestParameters['projectOwner'] == null) {
            throw new runtime.RequiredError(
                'projectOwner',
                'Required parameter "projectOwner" was null or undefined when calling createFork().'
            );
        }

        if (requestParameters['projectSlug'] == null) {
            throw new runtime.RequiredError(
                'projectSlug',
                'Required parameter "projectSlug" was null or undefined when calling createFork().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling createFork().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api-key"] = await this.configuration.apiKey("api-key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/solidity/{projectOwner}/{projectSlug}/fork`.replace(`{${"projectOwner"}}`, encodeURIComponent(String(requestParameters['projectOwner']))).replace(`{${"projectSlug"}}`, encodeURIComponent(String(requestParameters['projectSlug']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SolidityServiceForkServiceCreateForkBodyToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SolidityServiceCreateForkResponseFromJSON(jsonValue));
    }

    /**
     */
    async createFork(requestParameters: CreateForkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SolidityServiceCreateForkResponse> {
        const response = await this.createForkRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteForkRaw(requestParameters: DeleteForkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['projectOwner'] == null) {
            throw new runtime.RequiredError(
                'projectOwner',
                'Required parameter "projectOwner" was null or undefined when calling deleteFork().'
            );
        }

        if (requestParameters['projectSlug'] == null) {
            throw new runtime.RequiredError(
                'projectSlug',
                'Required parameter "projectSlug" was null or undefined when calling deleteFork().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteFork().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api-key"] = await this.configuration.apiKey("api-key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/solidity/{projectOwner}/{projectSlug}/fork/{id}`.replace(`{${"projectOwner"}}`, encodeURIComponent(String(requestParameters['projectOwner']))).replace(`{${"projectSlug"}}`, encodeURIComponent(String(requestParameters['projectSlug']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async deleteFork(requestParameters: DeleteForkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.deleteForkRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getForkRaw(requestParameters: GetForkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SolidityServiceGetForkResponse>> {
        if (requestParameters['projectOwner'] == null) {
            throw new runtime.RequiredError(
                'projectOwner',
                'Required parameter "projectOwner" was null or undefined when calling getFork().'
            );
        }

        if (requestParameters['projectSlug'] == null) {
            throw new runtime.RequiredError(
                'projectSlug',
                'Required parameter "projectSlug" was null or undefined when calling getFork().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getFork().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api-key"] = await this.configuration.apiKey("api-key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/solidity/{projectOwner}/{projectSlug}/fork/{id}`.replace(`{${"projectOwner"}}`, encodeURIComponent(String(requestParameters['projectOwner']))).replace(`{${"projectSlug"}}`, encodeURIComponent(String(requestParameters['projectSlug']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SolidityServiceGetForkResponseFromJSON(jsonValue));
    }

    /**
     */
    async getFork(requestParameters: GetForkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SolidityServiceGetForkResponse> {
        const response = await this.getForkRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getForkInfoRaw(requestParameters: GetForkInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SolidityServiceGetForkInfoResponse>> {
        if (requestParameters['projectOwner'] == null) {
            throw new runtime.RequiredError(
                'projectOwner',
                'Required parameter "projectOwner" was null or undefined when calling getForkInfo().'
            );
        }

        if (requestParameters['projectSlug'] == null) {
            throw new runtime.RequiredError(
                'projectSlug',
                'Required parameter "projectSlug" was null or undefined when calling getForkInfo().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getForkInfo().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api-key"] = await this.configuration.apiKey("api-key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/solidity/{projectOwner}/{projectSlug}/fork/{id}/info`.replace(`{${"projectOwner"}}`, encodeURIComponent(String(requestParameters['projectOwner']))).replace(`{${"projectSlug"}}`, encodeURIComponent(String(requestParameters['projectSlug']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SolidityServiceGetForkInfoResponseFromJSON(jsonValue));
    }

    /**
     */
    async getForkInfo(requestParameters: GetForkInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SolidityServiceGetForkInfoResponse> {
        const response = await this.getForkInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async listForksRaw(requestParameters: ListForksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SolidityServiceListForksResponse>> {
        if (requestParameters['projectOwner'] == null) {
            throw new runtime.RequiredError(
                'projectOwner',
                'Required parameter "projectOwner" was null or undefined when calling listForks().'
            );
        }

        if (requestParameters['projectSlug'] == null) {
            throw new runtime.RequiredError(
                'projectSlug',
                'Required parameter "projectSlug" was null or undefined when calling listForks().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api-key"] = await this.configuration.apiKey("api-key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/solidity/{projectOwner}/{projectSlug}/fork`.replace(`{${"projectOwner"}}`, encodeURIComponent(String(requestParameters['projectOwner']))).replace(`{${"projectSlug"}}`, encodeURIComponent(String(requestParameters['projectSlug']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SolidityServiceListForksResponseFromJSON(jsonValue));
    }

    /**
     */
    async listForks(requestParameters: ListForksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SolidityServiceListForksResponse> {
        const response = await this.listForksRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateForkRaw(requestParameters: UpdateForkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SolidityServiceUpdateForkResponse>> {
        if (requestParameters['projectOwner'] == null) {
            throw new runtime.RequiredError(
                'projectOwner',
                'Required parameter "projectOwner" was null or undefined when calling updateFork().'
            );
        }

        if (requestParameters['projectSlug'] == null) {
            throw new runtime.RequiredError(
                'projectSlug',
                'Required parameter "projectSlug" was null or undefined when calling updateFork().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling updateFork().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling updateFork().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api-key"] = await this.configuration.apiKey("api-key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/solidity/{projectOwner}/{projectSlug}/fork/{id}`.replace(`{${"projectOwner"}}`, encodeURIComponent(String(requestParameters['projectOwner']))).replace(`{${"projectSlug"}}`, encodeURIComponent(String(requestParameters['projectSlug']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SolidityServiceForkServiceUpdateForkBodyToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SolidityServiceUpdateForkResponseFromJSON(jsonValue));
    }

    /**
     */
    async updateFork(requestParameters: UpdateForkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SolidityServiceUpdateForkResponse> {
        const response = await this.updateForkRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
