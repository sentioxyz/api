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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SolidityServiceSourceMultiFile
 */
export interface SolidityServiceSourceMultiFile {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SolidityServiceSourceMultiFile
     */
    source?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceSourceMultiFile
     */
    compilerSettings?: string;
}

/**
 * Check if a given object implements the SolidityServiceSourceMultiFile interface.
 */
export function instanceOfSolidityServiceSourceMultiFile(value: object): boolean {
    return true;
}

export function SolidityServiceSourceMultiFileFromJSON(json: any): SolidityServiceSourceMultiFile {
    return SolidityServiceSourceMultiFileFromJSONTyped(json, false);
}

export function SolidityServiceSourceMultiFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolidityServiceSourceMultiFile {
    if (json == null) {
        return json;
    }
    return {
        
        'source': json['source'] == null ? undefined : json['source'],
        'compilerSettings': json['compilerSettings'] == null ? undefined : json['compilerSettings'],
    };
}

export function SolidityServiceSourceMultiFileToJSON(value?: SolidityServiceSourceMultiFile | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'source': value['source'],
        'compilerSettings': value['compilerSettings'],
    };
}

