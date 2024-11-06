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
import type { SolidityServiceChainIdentifier } from './SolidityServiceChainIdentifier.js';
import {
    SolidityServiceChainIdentifierFromJSON,
    SolidityServiceChainIdentifierFromJSONTyped,
    SolidityServiceChainIdentifierToJSON,
    SolidityServiceChainIdentifierToJSONTyped,
} from './SolidityServiceChainIdentifier.js';

/**
 * 
 * @export
 * @interface SolidityServiceManagedFork
 */
export interface SolidityServiceManagedFork {
    /**
     * 
     * @type {SolidityServiceChainIdentifier}
     * @memberof SolidityServiceManagedFork
     */
    chainSpec?: SolidityServiceChainIdentifier;
    /**
     * 
     * @type {string}
     * @memberof SolidityServiceManagedFork
     */
    rpcEndpoint?: string;
    /**
     * 
     * @type {number}
     * @memberof SolidityServiceManagedFork
     */
    parentBlockNumber?: number;
}

/**
 * Check if a given object implements the SolidityServiceManagedFork interface.
 */
export function instanceOfSolidityServiceManagedFork(value: object): value is SolidityServiceManagedFork {
    return true;
}

export function SolidityServiceManagedForkFromJSON(json: any): SolidityServiceManagedFork {
    return SolidityServiceManagedForkFromJSONTyped(json, false);
}

export function SolidityServiceManagedForkFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolidityServiceManagedFork {
    if (json == null) {
        return json;
    }
    return {
        
        'chainSpec': json['chainSpec'] == null ? undefined : SolidityServiceChainIdentifierFromJSON(json['chainSpec']),
        'rpcEndpoint': json['rpcEndpoint'] == null ? undefined : json['rpcEndpoint'],
        'parentBlockNumber': json['parentBlockNumber'] == null ? undefined : json['parentBlockNumber'],
    };
}

  export function SolidityServiceManagedForkToJSON(json: any): SolidityServiceManagedFork {
      return SolidityServiceManagedForkToJSONTyped(json, false);
  }

  export function SolidityServiceManagedForkToJSONTyped(value?: SolidityServiceManagedFork | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'chainSpec': SolidityServiceChainIdentifierToJSON(value['chainSpec']),
        'rpcEndpoint': value['rpcEndpoint'],
        'parentBlockNumber': value['parentBlockNumber'],
    };
}

