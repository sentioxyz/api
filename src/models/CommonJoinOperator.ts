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


/**
 * 
 * @export
 */
export const CommonJoinOperator = {
    And: 'AND',
    Or: 'OR',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type CommonJoinOperator = typeof CommonJoinOperator[keyof typeof CommonJoinOperator];


export function CommonJoinOperatorFromJSON(json: any): CommonJoinOperator {
    return CommonJoinOperatorFromJSONTyped(json, false);
}

export function CommonJoinOperatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonJoinOperator {
    return json as CommonJoinOperator;
}

export function CommonJoinOperatorToJSON(value?: CommonJoinOperator | null): any {
    return value as any;
}

