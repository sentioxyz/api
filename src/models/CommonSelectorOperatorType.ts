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
 * - GT: Numeric operators
 *  - CONTAINS: String operators
 * @export
 */
export const CommonSelectorOperatorType = {
    Eq: 'EQ',
    Neq: 'NEQ',
    Exists: 'EXISTS',
    NotExists: 'NOT_EXISTS',
    Gt: 'GT',
    Gte: 'GTE',
    Lt: 'LT',
    Lte: 'LTE',
    Between: 'BETWEEN',
    NotBetween: 'NOT_BETWEEN',
    Contains: 'CONTAINS',
    NotContains: 'NOT_CONTAINS',
    InCohorts: 'IN_COHORTS',
    NotInCohorts: 'NOT_IN_COHORTS'
} as const;
export type CommonSelectorOperatorType = typeof CommonSelectorOperatorType[keyof typeof CommonSelectorOperatorType];


export function instanceOfCommonSelectorOperatorType(value: any): boolean {
    for (const key in CommonSelectorOperatorType) {
        if (Object.prototype.hasOwnProperty.call(CommonSelectorOperatorType, key)) {
            if (CommonSelectorOperatorType[key as keyof typeof CommonSelectorOperatorType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function CommonSelectorOperatorTypeFromJSON(json: any): CommonSelectorOperatorType {
    return CommonSelectorOperatorTypeFromJSONTyped(json, false);
}

export function CommonSelectorOperatorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonSelectorOperatorType {
    return json as CommonSelectorOperatorType;
}

export function CommonSelectorOperatorTypeToJSON(value?: CommonSelectorOperatorType | null): any {
    return value as any;
}

export function CommonSelectorOperatorTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): CommonSelectorOperatorType {
    return value as CommonSelectorOperatorType;
}

