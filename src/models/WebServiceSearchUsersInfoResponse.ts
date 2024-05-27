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

import { mapValues } from '../runtime';
import type { CommonUserInfo } from './CommonUserInfo';
import {
    CommonUserInfoFromJSON,
    CommonUserInfoFromJSONTyped,
    CommonUserInfoToJSON,
} from './CommonUserInfo';

/**
 * 
 * @export
 * @interface WebServiceSearchUsersInfoResponse
 */
export interface WebServiceSearchUsersInfoResponse {
    /**
     * 
     * @type {Array<CommonUserInfo>}
     * @memberof WebServiceSearchUsersInfoResponse
     */
    users?: Array<CommonUserInfo>;
}

/**
 * Check if a given object implements the WebServiceSearchUsersInfoResponse interface.
 */
export function instanceOfWebServiceSearchUsersInfoResponse(value: object): boolean {
    return true;
}

export function WebServiceSearchUsersInfoResponseFromJSON(json: any): WebServiceSearchUsersInfoResponse {
    return WebServiceSearchUsersInfoResponseFromJSONTyped(json, false);
}

export function WebServiceSearchUsersInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceSearchUsersInfoResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'users': json['users'] == null ? undefined : ((json['users'] as Array<any>).map(CommonUserInfoFromJSON)),
    };
}

export function WebServiceSearchUsersInfoResponseToJSON(value?: WebServiceSearchUsersInfoResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'users': value['users'] == null ? undefined : ((value['users'] as Array<any>).map(CommonUserInfoToJSON)),
    };
}

