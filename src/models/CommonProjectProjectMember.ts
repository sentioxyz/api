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

import { mapValues } from '../runtime.js';
import type { CommonUserInfo } from './CommonUserInfo.js';
import {
    CommonUserInfoFromJSON,
    CommonUserInfoFromJSONTyped,
    CommonUserInfoToJSON,
} from './CommonUserInfo.js';

/**
 * 
 * @export
 * @interface CommonProjectProjectMember
 */
export interface CommonProjectProjectMember {
    /**
     * 
     * @type {CommonUserInfo}
     * @memberof CommonProjectProjectMember
     */
    user?: CommonUserInfo;
    /**
     * 
     * @type {string}
     * @memberof CommonProjectProjectMember
     */
    role?: string;
}

/**
 * Check if a given object implements the CommonProjectProjectMember interface.
 */
export function instanceOfCommonProjectProjectMember(value: object): boolean {
    return true;
}

export function CommonProjectProjectMemberFromJSON(json: any): CommonProjectProjectMember {
    return CommonProjectProjectMemberFromJSONTyped(json, false);
}

export function CommonProjectProjectMemberFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonProjectProjectMember {
    if (json == null) {
        return json;
    }
    return {
        
        'user': json['user'] == null ? undefined : CommonUserInfoFromJSON(json['user']),
        'role': json['role'] == null ? undefined : json['role'],
    };
}

export function CommonProjectProjectMemberToJSON(value?: CommonProjectProjectMember | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'user': CommonUserInfoToJSON(value['user']),
        'role': value['role'],
    };
}

