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
import type { CommonTier } from './CommonTier.js';
import {
    CommonTierFromJSON,
    CommonTierFromJSONTyped,
    CommonTierToJSON,
    CommonTierToJSONTyped,
} from './CommonTier.js';
import type { CommonUserAccountStatus } from './CommonUserAccountStatus.js';
import {
    CommonUserAccountStatusFromJSON,
    CommonUserAccountStatusFromJSONTyped,
    CommonUserAccountStatusToJSON,
    CommonUserAccountStatusToJSONTyped,
} from './CommonUserAccountStatus.js';

/**
 * 
 * @export
 * @interface CommonUser
 */
export interface CommonUser {
    /**
     * 
     * @type {string}
     * @memberof CommonUser
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof CommonUser
     */
    email?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CommonUser
     */
    emailVerified?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CommonUser
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof CommonUser
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof CommonUser
     */
    locale?: string;
    /**
     * 
     * @type {string}
     * @memberof CommonUser
     */
    nickname?: string;
    /**
     * 
     * @type {string}
     * @memberof CommonUser
     */
    picture?: string;
    /**
     * 
     * @type {string}
     * @memberof CommonUser
     */
    sub?: string;
    /**
     * 
     * @type {string}
     * @memberof CommonUser
     */
    updatedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof CommonUser
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof CommonUser
     */
    username?: string;
    /**
     * 
     * @type {CommonUserAccountStatus}
     * @memberof CommonUser
     */
    accountStatus?: CommonUserAccountStatus;
    /**
     * 
     * @type {CommonTier}
     * @memberof CommonUser
     */
    tier?: CommonTier;
}



/**
 * Check if a given object implements the CommonUser interface.
 */
export function instanceOfCommonUser(value: object): value is CommonUser {
    return true;
}

export function CommonUserFromJSON(json: any): CommonUser {
    return CommonUserFromJSONTyped(json, false);
}

export function CommonUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonUser {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'email': json['email'] == null ? undefined : json['email'],
        'emailVerified': json['emailVerified'] == null ? undefined : json['emailVerified'],
        'lastName': json['lastName'] == null ? undefined : json['lastName'],
        'firstName': json['firstName'] == null ? undefined : json['firstName'],
        'locale': json['locale'] == null ? undefined : json['locale'],
        'nickname': json['nickname'] == null ? undefined : json['nickname'],
        'picture': json['picture'] == null ? undefined : json['picture'],
        'sub': json['sub'] == null ? undefined : json['sub'],
        'updatedAt': json['updatedAt'] == null ? undefined : json['updatedAt'],
        'createdAt': json['createdAt'] == null ? undefined : json['createdAt'],
        'username': json['username'] == null ? undefined : json['username'],
        'accountStatus': json['accountStatus'] == null ? undefined : CommonUserAccountStatusFromJSON(json['accountStatus']),
        'tier': json['tier'] == null ? undefined : CommonTierFromJSON(json['tier']),
    };
}

  export function CommonUserToJSON(json: any): CommonUser {
      return CommonUserToJSONTyped(json, false);
  }

  export function CommonUserToJSONTyped(value?: CommonUser | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'email': value['email'],
        'emailVerified': value['emailVerified'],
        'lastName': value['lastName'],
        'firstName': value['firstName'],
        'locale': value['locale'],
        'nickname': value['nickname'],
        'picture': value['picture'],
        'sub': value['sub'],
        'updatedAt': value['updatedAt'],
        'createdAt': value['createdAt'],
        'username': value['username'],
        'accountStatus': CommonUserAccountStatusToJSON(value['accountStatus']),
        'tier': CommonTierToJSON(value['tier']),
    };
}

