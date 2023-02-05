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
 * @interface ProcessorServiceGetProcessorResponse
 */
export interface ProcessorServiceGetProcessorResponse {
    /**
     * 
     * @type {ProcessorServiceProcessor}
     * @memberof ProcessorServiceGetProcessorResponse
     */
    processor?: ProcessorServiceProcessor;
}

/**
 * Check if a given object implements the ProcessorServiceGetProcessorResponse interface.
 */
export function instanceOfProcessorServiceGetProcessorResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProcessorServiceGetProcessorResponseFromJSON(json: any): ProcessorServiceGetProcessorResponse {
    return ProcessorServiceGetProcessorResponseFromJSONTyped(json, false);
}

export function ProcessorServiceGetProcessorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessorServiceGetProcessorResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'processor': !exists(json, 'processor') ? undefined : ProcessorServiceProcessorFromJSON(json['processor']),
    };
}

export function ProcessorServiceGetProcessorResponseToJSON(value?: ProcessorServiceGetProcessorResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'processor': ProcessorServiceProcessorToJSON(value.processor),
    };
}

