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
export const CommonSegmentationQueryResourceType = {
    Events: 'EVENTS',
    Cohorts: 'COHORTS'
} as const;
export type CommonSegmentationQueryResourceType = typeof CommonSegmentationQueryResourceType[keyof typeof CommonSegmentationQueryResourceType];


export function instanceOfCommonSegmentationQueryResourceType(value: any): boolean {
    return Object.values(CommonSegmentationQueryResourceType).includes(value);
}

export function CommonSegmentationQueryResourceTypeFromJSON(json: any): CommonSegmentationQueryResourceType {
    return CommonSegmentationQueryResourceTypeFromJSONTyped(json, false);
}

export function CommonSegmentationQueryResourceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonSegmentationQueryResourceType {
    return json as CommonSegmentationQueryResourceType;
}

export function CommonSegmentationQueryResourceTypeToJSON(value?: CommonSegmentationQueryResourceType | null): any {
    return value as any;
}

