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
import type { CommonStringList } from './CommonStringList';
import {
    CommonStringListFromJSON,
    CommonStringListFromJSONTyped,
    CommonStringListToJSON,
} from './CommonStringList';

/**
 * 
 * @export
 * @interface CommonAny
 */
export interface CommonAny {
    /**
     * 
     * @type {number}
     * @memberof CommonAny
     */
    intValue?: number;
    /**
     * 
     * @type {string}
     * @memberof CommonAny
     */
    longValue?: string;
    /**
     * 
     * @type {number}
     * @memberof CommonAny
     */
    doubleValue?: number;
    /**
     * 
     * @type {string}
     * @memberof CommonAny
     */
    stringValue?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CommonAny
     */
    boolValue?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof CommonAny
     */
    dateValue?: Date;
    /**
     * 
     * @type {CommonStringList}
     * @memberof CommonAny
     */
    listValue?: CommonStringList;
}

/**
 * Check if a given object implements the CommonAny interface.
 */
export function instanceOfCommonAny(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommonAnyFromJSON(json: any): CommonAny {
    return CommonAnyFromJSONTyped(json, false);
}

export function CommonAnyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonAny {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'intValue': !exists(json, 'intValue') ? undefined : json['intValue'],
        'longValue': !exists(json, 'longValue') ? undefined : json['longValue'],
        'doubleValue': !exists(json, 'doubleValue') ? undefined : json['doubleValue'],
        'stringValue': !exists(json, 'stringValue') ? undefined : json['stringValue'],
        'boolValue': !exists(json, 'boolValue') ? undefined : json['boolValue'],
        'dateValue': !exists(json, 'dateValue') ? undefined : (new Date(json['dateValue'])),
        'listValue': !exists(json, 'listValue') ? undefined : CommonStringListFromJSON(json['listValue']),
    };
}

export function CommonAnyToJSON(value?: CommonAny | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'intValue': value.intValue,
        'longValue': value.longValue,
        'doubleValue': value.doubleValue,
        'stringValue': value.stringValue,
        'boolValue': value.boolValue,
        'dateValue': value.dateValue === undefined ? undefined : (value.dateValue.toISOString()),
        'listValue': CommonStringListToJSON(value.listValue),
    };
}

