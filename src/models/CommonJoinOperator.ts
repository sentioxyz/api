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
    Then: 'THEN'
} as const;
export type CommonJoinOperator = typeof CommonJoinOperator[keyof typeof CommonJoinOperator];


export function instanceOfCommonJoinOperator(value: any): boolean {
    for (const key in CommonJoinOperator) {
        if (Object.prototype.hasOwnProperty.call(CommonJoinOperator, key)) {
            if (CommonJoinOperator[key as keyof typeof CommonJoinOperator] === value) {
                return true;
            }
        }
    }
    return false;
}

export function CommonJoinOperatorFromJSON(json: any): CommonJoinOperator {
    return CommonJoinOperatorFromJSONTyped(json, false);
}

export function CommonJoinOperatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonJoinOperator {
    return json as CommonJoinOperator;
}

export function CommonJoinOperatorToJSON(value?: CommonJoinOperator | null): any {
    return value as any;
}

export function CommonJoinOperatorToJSONTyped(value: any, ignoreDiscriminator: boolean): CommonJoinOperator {
    return value as CommonJoinOperator;
}
