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
export const SolidityServiceForkType = {
    Managed: 'MANAGED',
    External: 'EXTERNAL'
} as const;
export type SolidityServiceForkType = typeof SolidityServiceForkType[keyof typeof SolidityServiceForkType];


export function instanceOfSolidityServiceForkType(value: any): boolean {
    for (const key in SolidityServiceForkType) {
        if (Object.prototype.hasOwnProperty.call(SolidityServiceForkType, key)) {
            if (SolidityServiceForkType[key as keyof typeof SolidityServiceForkType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function SolidityServiceForkTypeFromJSON(json: any): SolidityServiceForkType {
    return SolidityServiceForkTypeFromJSONTyped(json, false);
}

export function SolidityServiceForkTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolidityServiceForkType {
    return json as SolidityServiceForkType;
}

export function SolidityServiceForkTypeToJSON(value?: SolidityServiceForkType | null): any {
    return value as any;
}

export function SolidityServiceForkTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): SolidityServiceForkType {
    return value as SolidityServiceForkType;
}
