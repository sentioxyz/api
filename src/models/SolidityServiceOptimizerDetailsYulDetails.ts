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
/**
 * 
 * @export
 * @interface SolidityServiceOptimizerDetailsYulDetails
 */
export interface SolidityServiceOptimizerDetailsYulDetails {
    /**
     * 
     * @type {boolean}
     * @memberof SolidityServiceOptimizerDetailsYulDetails
     */
    stackAllocation?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceOptimizerDetailsYulDetails
     */
    optimizerSteps?: string;
}

/**
 * Check if a given object implements the SolidityServiceOptimizerDetailsYulDetails interface.
 */
export function instanceOfSolidityServiceOptimizerDetailsYulDetails(value: object): value is SolidityServiceOptimizerDetailsYulDetails {
    return true;
}

export function SolidityServiceOptimizerDetailsYulDetailsFromJSON(json: any): SolidityServiceOptimizerDetailsYulDetails {
    return SolidityServiceOptimizerDetailsYulDetailsFromJSONTyped(json, false);
}

export function SolidityServiceOptimizerDetailsYulDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolidityServiceOptimizerDetailsYulDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'stackAllocation': json['stackAllocation'] == null ? undefined : json['stackAllocation'],
        'optimizerSteps': json['optimizerSteps'] == null ? undefined : json['optimizerSteps'],
    };
}

  export function SolidityServiceOptimizerDetailsYulDetailsToJSON(json: any): SolidityServiceOptimizerDetailsYulDetails {
      return SolidityServiceOptimizerDetailsYulDetailsToJSONTyped(json, false);
  }

  export function SolidityServiceOptimizerDetailsYulDetailsToJSONTyped(value?: SolidityServiceOptimizerDetailsYulDetails | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'stackAllocation': value['stackAllocation'],
        'optimizerSteps': value['optimizerSteps'],
    };
}

