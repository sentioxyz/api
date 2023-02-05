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
import type { CommonOrganization } from './CommonOrganization';
import {
    CommonOrganizationFromJSON,
    CommonOrganizationFromJSONTyped,
    CommonOrganizationToJSON,
} from './CommonOrganization';
import type { CommonTier } from './CommonTier';
import {
    CommonTierFromJSON,
    CommonTierFromJSONTyped,
    CommonTierToJSON,
} from './CommonTier';
import type { CommonUser } from './CommonUser';
import {
    CommonUserFromJSON,
    CommonUserFromJSONTyped,
    CommonUserToJSON,
} from './CommonUser';

/**
 * 
 * @export
 * @interface CommonOwner
 */
export interface CommonOwner {
    /**
     * 
     * @type {CommonUser}
     * @memberof CommonOwner
     */
    user?: CommonUser;
    /**
     * 
     * @type {CommonOrganization}
     * @memberof CommonOwner
     */
    organization?: CommonOrganization;
    /**
     * 
     * @type {CommonTier}
     * @memberof CommonOwner
     */
    tier?: CommonTier;
}

/**
 * Check if a given object implements the CommonOwner interface.
 */
export function instanceOfCommonOwner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommonOwnerFromJSON(json: any): CommonOwner {
    return CommonOwnerFromJSONTyped(json, false);
}

export function CommonOwnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonOwner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'user': !exists(json, 'user') ? undefined : CommonUserFromJSON(json['user']),
        'organization': !exists(json, 'organization') ? undefined : CommonOrganizationFromJSON(json['organization']),
        'tier': !exists(json, 'tier') ? undefined : CommonTierFromJSON(json['tier']),
    };
}

export function CommonOwnerToJSON(value?: CommonOwner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user': CommonUserToJSON(value.user),
        'organization': CommonOrganizationToJSON(value.organization),
        'tier': CommonTierToJSON(value.tier),
    };
}

