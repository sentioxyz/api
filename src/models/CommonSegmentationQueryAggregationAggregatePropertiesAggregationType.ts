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
export const CommonSegmentationQueryAggregationAggregatePropertiesAggregationType = {
    Sum: 'SUM',
    CumulativeSum: 'CUMULATIVE_SUM',
    Avg: 'AVG',
    Median: 'MEDIAN',
    Min: 'MIN',
    Max: 'MAX',
    DistinctCount: 'DISTINCT_COUNT',
    CumulativeDistinctCount: 'CUMULATIVE_DISTINCT_COUNT',
    CumulativeCount: 'CUMULATIVE_COUNT',
    Last: 'LAST',
    CumulativeLast: 'CUMULATIVE_LAST',
    First: 'FIRST',
    CumulativeFirst: 'CUMULATIVE_FIRST',
    Percentile25Th: 'PERCENTILE_25TH',
    Percentile75Th: 'PERCENTILE_75TH',
    Percentile90Th: 'PERCENTILE_90TH',
    Percentile95Th: 'PERCENTILE_95TH',
    Percentile99Th: 'PERCENTILE_99TH'
} as const;
export type CommonSegmentationQueryAggregationAggregatePropertiesAggregationType = typeof CommonSegmentationQueryAggregationAggregatePropertiesAggregationType[keyof typeof CommonSegmentationQueryAggregationAggregatePropertiesAggregationType];


export function instanceOfCommonSegmentationQueryAggregationAggregatePropertiesAggregationType(value: any): boolean {
    for (const key in CommonSegmentationQueryAggregationAggregatePropertiesAggregationType) {
        if (Object.prototype.hasOwnProperty.call(CommonSegmentationQueryAggregationAggregatePropertiesAggregationType, key)) {
            if (CommonSegmentationQueryAggregationAggregatePropertiesAggregationType[key as keyof typeof CommonSegmentationQueryAggregationAggregatePropertiesAggregationType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function CommonSegmentationQueryAggregationAggregatePropertiesAggregationTypeFromJSON(json: any): CommonSegmentationQueryAggregationAggregatePropertiesAggregationType {
    return CommonSegmentationQueryAggregationAggregatePropertiesAggregationTypeFromJSONTyped(json, false);
}

export function CommonSegmentationQueryAggregationAggregatePropertiesAggregationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonSegmentationQueryAggregationAggregatePropertiesAggregationType {
    return json as CommonSegmentationQueryAggregationAggregatePropertiesAggregationType;
}

export function CommonSegmentationQueryAggregationAggregatePropertiesAggregationTypeToJSON(value?: CommonSegmentationQueryAggregationAggregatePropertiesAggregationType | null): any {
    return value as any;
}

export function CommonSegmentationQueryAggregationAggregatePropertiesAggregationTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): CommonSegmentationQueryAggregationAggregatePropertiesAggregationType {
    return value as CommonSegmentationQueryAggregationAggregatePropertiesAggregationType;
}

