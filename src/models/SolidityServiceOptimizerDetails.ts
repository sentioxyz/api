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

import { mapValues } from '../runtime.js';
import type { SolidityServiceOptimizerDetailsYulDetails } from './SolidityServiceOptimizerDetailsYulDetails.js';
import {
    SolidityServiceOptimizerDetailsYulDetailsFromJSON,
    SolidityServiceOptimizerDetailsYulDetailsFromJSONTyped,
    SolidityServiceOptimizerDetailsYulDetailsToJSON,
} from './SolidityServiceOptimizerDetailsYulDetails.js';

/**
 * 
 * @export
 * @interface SolidityServiceOptimizerDetails
 */
export interface SolidityServiceOptimizerDetails {
    /**
     * 
     * @type {boolean}
     * @memberof SolidityServiceOptimizerDetails
     */
    peephole?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SolidityServiceOptimizerDetails
     */
    jumpdestRemover?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SolidityServiceOptimizerDetails
     */
    yul?: boolean;
    /**
     * 
     * @type {SolidityServiceOptimizerDetailsYulDetails}
     * @memberof SolidityServiceOptimizerDetails
     */
    yulDetails?: SolidityServiceOptimizerDetailsYulDetails;
}

/**
 * Check if a given object implements the SolidityServiceOptimizerDetails interface.
 */
export function instanceOfSolidityServiceOptimizerDetails(value: object): boolean {
    return true;
}

export function SolidityServiceOptimizerDetailsFromJSON(json: any): SolidityServiceOptimizerDetails {
    return SolidityServiceOptimizerDetailsFromJSONTyped(json, false);
}

export function SolidityServiceOptimizerDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolidityServiceOptimizerDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'peephole': json['peephole'] == null ? undefined : json['peephole'],
        'jumpdestRemover': json['jumpdestRemover'] == null ? undefined : json['jumpdestRemover'],
        'yul': json['yul'] == null ? undefined : json['yul'],
        'yulDetails': json['yulDetails'] == null ? undefined : SolidityServiceOptimizerDetailsYulDetailsFromJSON(json['yulDetails']),
    };
}

export function SolidityServiceOptimizerDetailsToJSON(value?: SolidityServiceOptimizerDetails | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'peephole': value['peephole'],
        'jumpdestRemover': value['jumpdestRemover'],
        'yul': value['yul'],
        'yulDetails': SolidityServiceOptimizerDetailsYulDetailsToJSON(value['yulDetails']),
    };
}
