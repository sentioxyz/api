// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.js';
import {Configuration} from '../configuration.js';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.js';
import {ObjectSerializer} from '../models/ObjectSerializer.js';
import {ApiException} from './exception.js';
import {canConsumeForm, isCodeInRange} from '../util.js';
import {SecurityAuthentication} from '../auth/auth.js';


import { AnalyticServiceAnalyticServiceRerunSQLQueryBody } from '../models/AnalyticServiceAnalyticServiceRerunSQLQueryBody.js';
import { AnalyticServiceRerunSQLQueryRequest } from '../models/AnalyticServiceRerunSQLQueryRequest.js';
import { AnalyticServiceRerunSQLQueryResponse } from '../models/AnalyticServiceRerunSQLQueryResponse.js';

/**
 * no description
 */
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * deprecated
     * @param owner username or organization name
     * @param slug project slug
     * @param body 
     */
    public async rerunSQLQuery(owner: string, slug: string, body: AnalyticServiceAnalyticServiceRerunSQLQueryBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new RequiredError("DefaultApi", "rerunSQLQuery", "owner");
        }


        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError("DefaultApi", "rerunSQLQuery", "slug");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("DefaultApi", "rerunSQLQuery", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/analytics/{owner}/{slug}/sql/rerun_query'
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
            ObjectSerializer.serialize(body, "AnalyticServiceAnalyticServiceRerunSQLQueryBody", ""),
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
     * deprecated
     * @param body Deprecated: will drop in the future.
     */
    public async rerunSQLQuery2(body: AnalyticServiceRerunSQLQueryRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("DefaultApi", "rerunSQLQuery2", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/analytics/sql/rerun_query';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "AnalyticServiceRerunSQLQueryRequest", ""),
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

export class DefaultApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to rerunSQLQuery
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async rerunSQLQueryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnalyticServiceRerunSQLQueryResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AnalyticServiceRerunSQLQueryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalyticServiceRerunSQLQueryResponse", ""
            ) as AnalyticServiceRerunSQLQueryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AnalyticServiceRerunSQLQueryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalyticServiceRerunSQLQueryResponse", ""
            ) as AnalyticServiceRerunSQLQueryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to rerunSQLQuery2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async rerunSQLQuery2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnalyticServiceRerunSQLQueryResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AnalyticServiceRerunSQLQueryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalyticServiceRerunSQLQueryResponse", ""
            ) as AnalyticServiceRerunSQLQueryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AnalyticServiceRerunSQLQueryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalyticServiceRerunSQLQueryResponse", ""
            ) as AnalyticServiceRerunSQLQueryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
