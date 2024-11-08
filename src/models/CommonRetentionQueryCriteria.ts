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
export const CommonRetentionQueryCriteria = {
    OnOrAfter: 'OnOrAfter',
    On: 'On'
} as const;
export type CommonRetentionQueryCriteria = typeof CommonRetentionQueryCriteria[keyof typeof CommonRetentionQueryCriteria];


export function instanceOfCommonRetentionQueryCriteria(value: any): boolean {
    for (const key in CommonRetentionQueryCriteria) {
        if (Object.prototype.hasOwnProperty.call(CommonRetentionQueryCriteria, key)) {
            if (CommonRetentionQueryCriteria[key as keyof typeof CommonRetentionQueryCriteria] === value) {
                return true;
            }
        }
    }
    return false;
}

export function CommonRetentionQueryCriteriaFromJSON(json: any): CommonRetentionQueryCriteria {
    return CommonRetentionQueryCriteriaFromJSONTyped(json, false);
}

export function CommonRetentionQueryCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonRetentionQueryCriteria {
    return json as CommonRetentionQueryCriteria;
}

export function CommonRetentionQueryCriteriaToJSON(value?: CommonRetentionQueryCriteria | null): any {
    return value as any;
}

export function CommonRetentionQueryCriteriaToJSONTyped(value: any, ignoreDiscriminator: boolean): CommonRetentionQueryCriteria {
    return value as CommonRetentionQueryCriteria;
}
