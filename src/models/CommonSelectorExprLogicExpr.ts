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
import type { CommonJoinOperator } from './CommonJoinOperator';
import {
    CommonJoinOperatorFromJSON,
    CommonJoinOperatorFromJSONTyped,
    CommonJoinOperatorToJSON,
} from './CommonJoinOperator';
import type { CommonSelectorExpr } from './CommonSelectorExpr';
import {
    CommonSelectorExprFromJSON,
    CommonSelectorExprFromJSONTyped,
    CommonSelectorExprToJSON,
} from './CommonSelectorExpr';

/**
 * 
 * @export
 * @interface CommonSelectorExprLogicExpr
 */
export interface CommonSelectorExprLogicExpr {
    /**
     * 
     * @type {Array<CommonSelectorExpr>}
     * @memberof CommonSelectorExprLogicExpr
     */
    expressions?: Array<CommonSelectorExpr>;
    /**
     * 
     * @type {CommonJoinOperator}
     * @memberof CommonSelectorExprLogicExpr
     */
    operator?: CommonJoinOperator;
}

/**
 * Check if a given object implements the CommonSelectorExprLogicExpr interface.
 */
export function instanceOfCommonSelectorExprLogicExpr(value: object): boolean {
    return true;
}

export function CommonSelectorExprLogicExprFromJSON(json: any): CommonSelectorExprLogicExpr {
    return CommonSelectorExprLogicExprFromJSONTyped(json, false);
}

export function CommonSelectorExprLogicExprFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonSelectorExprLogicExpr {
    if (json == null) {
        return json;
    }
    return {
        
        'expressions': json['expressions'] == null ? undefined : ((json['expressions'] as Array<any>).map(CommonSelectorExprFromJSON)),
        'operator': json['operator'] == null ? undefined : CommonJoinOperatorFromJSON(json['operator']),
    };
}

export function CommonSelectorExprLogicExprToJSON(value?: CommonSelectorExprLogicExpr | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'expressions': value['expressions'] == null ? undefined : ((value['expressions'] as Array<any>).map(CommonSelectorExprToJSON)),
        'operator': CommonJoinOperatorToJSON(value['operator']),
    };
}

