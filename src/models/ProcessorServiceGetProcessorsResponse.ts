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

import { exists, mapValues } from '../runtime';
import type { ProcessorServiceProcessor } from './ProcessorServiceProcessor';
import {
    ProcessorServiceProcessorFromJSON,
    ProcessorServiceProcessorFromJSONTyped,
    ProcessorServiceProcessorToJSON,
} from './ProcessorServiceProcessor';

/**
 * 
 * @export
 * @interface ProcessorServiceGetProcessorsResponse
 */
export interface ProcessorServiceGetProcessorsResponse {
    /**
     * 
     * @type {Array<ProcessorServiceProcessor>}
     * @memberof ProcessorServiceGetProcessorsResponse
     */
    processors?: Array<ProcessorServiceProcessor>;
}

/**
 * Check if a given object implements the ProcessorServiceGetProcessorsResponse interface.
 */
export function instanceOfProcessorServiceGetProcessorsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProcessorServiceGetProcessorsResponseFromJSON(json: any): ProcessorServiceGetProcessorsResponse {
    return ProcessorServiceGetProcessorsResponseFromJSONTyped(json, false);
}

export function ProcessorServiceGetProcessorsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessorServiceGetProcessorsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'processors': !exists(json, 'processors') ? undefined : ((json['processors'] as Array<any>).map(ProcessorServiceProcessorFromJSON)),
    };
}

export function ProcessorServiceGetProcessorsResponseToJSON(value?: ProcessorServiceGetProcessorsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'processors': value.processors === undefined ? undefined : ((value.processors as Array<any>).map(ProcessorServiceProcessorToJSON)),
    };
}

