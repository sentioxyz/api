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
export const CommonAggregateAggregateOps = {
    Avg: 'AVG',
    Sum: 'SUM',
    Min: 'MIN',
    Max: 'MAX',
    Count: 'COUNT'
} as const;
export type CommonAggregateAggregateOps = typeof CommonAggregateAggregateOps[keyof typeof CommonAggregateAggregateOps];


export function instanceOfCommonAggregateAggregateOps(value: any): boolean {
    for (const key in CommonAggregateAggregateOps) {
        if (Object.prototype.hasOwnProperty.call(CommonAggregateAggregateOps, key)) {
            if (CommonAggregateAggregateOps[key as keyof typeof CommonAggregateAggregateOps] === value) {
                return true;
            }
        }
    }
    return false;
}

export function CommonAggregateAggregateOpsFromJSON(json: any): CommonAggregateAggregateOps {
    return CommonAggregateAggregateOpsFromJSONTyped(json, false);
}

export function CommonAggregateAggregateOpsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonAggregateAggregateOps {
    return json as CommonAggregateAggregateOps;
}

export function CommonAggregateAggregateOpsToJSON(value?: CommonAggregateAggregateOps | null): any {
    return value as any;
}

export function CommonAggregateAggregateOpsToJSONTyped(value: any, ignoreDiscriminator: boolean): CommonAggregateAggregateOps {
    return value as CommonAggregateAggregateOps;
}
