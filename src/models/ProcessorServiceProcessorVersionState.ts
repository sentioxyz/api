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
export const ProcessorServiceProcessorVersionState = {
    Unknown: 'UNKNOWN',
    Pending: 'PENDING',
    Active: 'ACTIVE',
    Obsolete: 'OBSOLETE',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ProcessorServiceProcessorVersionState = typeof ProcessorServiceProcessorVersionState[keyof typeof ProcessorServiceProcessorVersionState];


export function ProcessorServiceProcessorVersionStateFromJSON(json: any): ProcessorServiceProcessorVersionState {
    return ProcessorServiceProcessorVersionStateFromJSONTyped(json, false);
}

export function ProcessorServiceProcessorVersionStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessorServiceProcessorVersionState {
    return json as ProcessorServiceProcessorVersionState;
}

export function ProcessorServiceProcessorVersionStateToJSON(value?: ProcessorServiceProcessorVersionState | null): any {
    return value as any;
}

