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

import { exists, mapValues } from '../runtime';
import type { CommonTier } from './CommonTier';
import {
    CommonTierFromJSON,
    CommonTierFromJSONTyped,
    CommonTierToJSON,
} from './CommonTier';
import type { CommonUserAccountStatus } from './CommonUserAccountStatus';
import {
    CommonUserAccountStatusFromJSON,
    CommonUserAccountStatusFromJSONTyped,
    CommonUserAccountStatusToJSON,
} from './CommonUserAccountStatus';

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
export function instanceOfCommonUser(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommonUserFromJSON(json: any): CommonUser {
    return CommonUserFromJSONTyped(json, false);
}

export function CommonUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'emailVerified': !exists(json, 'emailVerified') ? undefined : json['emailVerified'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'locale': !exists(json, 'locale') ? undefined : json['locale'],
        'nickname': !exists(json, 'nickname') ? undefined : json['nickname'],
        'picture': !exists(json, 'picture') ? undefined : json['picture'],
        'sub': !exists(json, 'sub') ? undefined : json['sub'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'accountStatus': !exists(json, 'accountStatus') ? undefined : CommonUserAccountStatusFromJSON(json['accountStatus']),
        'tier': !exists(json, 'tier') ? undefined : CommonTierFromJSON(json['tier']),
    };
}

export function CommonUserToJSON(value?: CommonUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'email': value.email,
        'emailVerified': value.emailVerified,
        'lastName': value.lastName,
        'firstName': value.firstName,
        'locale': value.locale,
        'nickname': value.nickname,
        'picture': value.picture,
        'sub': value.sub,
        'updatedAt': value.updatedAt,
        'createdAt': value.createdAt,
        'username': value.username,
        'accountStatus': CommonUserAccountStatusToJSON(value.accountStatus),
        'tier': CommonTierToJSON(value.tier),
    };
}

