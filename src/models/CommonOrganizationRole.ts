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
export const CommonOrganizationRole = {
    Member: 'ORG_MEMBER',
    Admin: 'ORG_ADMIN'
} as const;
export type CommonOrganizationRole = typeof CommonOrganizationRole[keyof typeof CommonOrganizationRole];


export function instanceOfCommonOrganizationRole(value: any): boolean {
    return Object.values(CommonOrganizationRole).includes(value);
}

export function CommonOrganizationRoleFromJSON(json: any): CommonOrganizationRole {
    return CommonOrganizationRoleFromJSONTyped(json, false);
}

export function CommonOrganizationRoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonOrganizationRole {
    return json as CommonOrganizationRole;
}

export function CommonOrganizationRoleToJSON(value?: CommonOrganizationRole | null): any {
    return value as any;
}
