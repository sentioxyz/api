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
export const InsightsServiceDataSource = {
    Metrics: 'METRICS',
    Events: 'EVENTS',
    Price: 'PRICE',
    Formula: 'FORMULA',
    Cohorts: 'COHORTS',
    SystemSql: 'SYSTEM_SQL'
} as const;
export type InsightsServiceDataSource = typeof InsightsServiceDataSource[keyof typeof InsightsServiceDataSource];


export function instanceOfInsightsServiceDataSource(value: any): boolean {
    for (const key in InsightsServiceDataSource) {
        if (Object.prototype.hasOwnProperty.call(InsightsServiceDataSource, key)) {
            if (InsightsServiceDataSource[key as keyof typeof InsightsServiceDataSource] === value) {
                return true;
            }
        }
    }
    return false;
}

export function InsightsServiceDataSourceFromJSON(json: any): InsightsServiceDataSource {
    return InsightsServiceDataSourceFromJSONTyped(json, false);
}

export function InsightsServiceDataSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): InsightsServiceDataSource {
    return json as InsightsServiceDataSource;
}

export function InsightsServiceDataSourceToJSON(value?: InsightsServiceDataSource | null): any {
    return value as any;
}

export function InsightsServiceDataSourceToJSONTyped(value: any, ignoreDiscriminator: boolean): InsightsServiceDataSource {
    return value as InsightsServiceDataSource;
}
