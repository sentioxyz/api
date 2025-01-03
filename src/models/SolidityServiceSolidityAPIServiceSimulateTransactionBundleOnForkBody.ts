/**
 * Sentio API
 * Sentio Open API for query data
 *
 * OpenAPI spec version: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SolidityServiceSimulation } from '../models/SolidityServiceSimulation.js';
import { HttpFile } from '../http/http.js';

export class SolidityServiceSolidityAPIServiceSimulateTransactionBundleOnForkBody {
    /**
    * For blockNumber, transactionIndex, networkId, stateOverrides and blockOverrides fields, only the first simulation takes effect.
    */
    'simulations': Array<SolidityServiceSimulation>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "simulations",
            "baseName": "simulations",
            "type": "Array<SolidityServiceSimulation>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SolidityServiceSolidityAPIServiceSimulateTransactionBundleOnForkBody.attributeTypeMap;
    }

    public constructor() {
    }
}
