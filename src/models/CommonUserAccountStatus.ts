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
export const CommonUserAccountStatus = {
    Pending: 'PENDING',
    SetUsername: 'SET_USERNAME',
    Banned: 'BANNED',
    Active: 'ACTIVE'
} as const;
export type CommonUserAccountStatus = typeof CommonUserAccountStatus[keyof typeof CommonUserAccountStatus];


export function instanceOfCommonUserAccountStatus(value: any): boolean {
    for (const key in CommonUserAccountStatus) {
        if (Object.prototype.hasOwnProperty.call(CommonUserAccountStatus, key)) {
            if (CommonUserAccountStatus[key as keyof typeof CommonUserAccountStatus] === value) {
                return true;
            }
        }
    }
    return false;
}

export function CommonUserAccountStatusFromJSON(json: any): CommonUserAccountStatus {
    return CommonUserAccountStatusFromJSONTyped(json, false);
}

export function CommonUserAccountStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonUserAccountStatus {
    return json as CommonUserAccountStatus;
}

export function CommonUserAccountStatusToJSON(value?: CommonUserAccountStatus | null): any {
    return value as any;
}

export function CommonUserAccountStatusToJSONTyped(value: any, ignoreDiscriminator: boolean): CommonUserAccountStatus {
    return value as CommonUserAccountStatus;
}

