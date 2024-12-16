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

/**
 * no description
 */
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param body 
     */
    public async addCoinByGecko(body: PriceServiceAddCoinByGeckoRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("DefaultApi", "addCoinByGecko", "body");
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

}
