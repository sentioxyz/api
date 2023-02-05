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
/**
 * 
 * @export
 * @interface CommonFormula
 */
export interface CommonFormula {
    /**
     * 
     * @type {string}
     * @memberof CommonFormula
     */
    expression?: string;
    /**
     * 
     * @type {string}
     * @memberof CommonFormula
     */
    alias?: string;
    /**
     * 
     * @type {string}
     * @memberof CommonFormula
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CommonFormula
     */
    disabled?: boolean;
}

/**
 * Check if a given object implements the CommonFormula interface.
 */
export function instanceOfCommonFormula(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommonFormulaFromJSON(json: any): CommonFormula {
    return CommonFormulaFromJSONTyped(json, false);
}

export function CommonFormulaFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonFormula {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'expression': !exists(json, 'expression') ? undefined : json['expression'],
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'disabled': !exists(json, 'disabled') ? undefined : json['disabled'],
    };
}

export function CommonFormulaToJSON(value?: CommonFormula | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'expression': value.expression,
        'alias': value.alias,
        'id': value.id,
        'disabled': value.disabled,
    };
}

