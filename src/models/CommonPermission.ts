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
export const CommonPermission = {
    Read: 'READ',
    Write: 'WRITE',
    Admin: 'ADMIN',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type CommonPermission = typeof CommonPermission[keyof typeof CommonPermission];


export function CommonPermissionFromJSON(json: any): CommonPermission {
    return CommonPermissionFromJSONTyped(json, false);
}

export function CommonPermissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonPermission {
    return json as CommonPermission;
}

export function CommonPermissionToJSON(value?: CommonPermission | null): any {
    return value as any;
}

