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
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 * 
 * The JSON representation for `NullValue` is JSON `null`.
 * 
 *  - NULL_VALUE: Null value.
 * @export
 */
export const GoogleProtobufNullValue = {
    NullValue: 'NULL_VALUE'
} as const;
export type GoogleProtobufNullValue = typeof GoogleProtobufNullValue[keyof typeof GoogleProtobufNullValue];


export function instanceOfGoogleProtobufNullValue(value: any): boolean {
    for (const key in GoogleProtobufNullValue) {
        if (Object.prototype.hasOwnProperty.call(GoogleProtobufNullValue, key)) {
            if (GoogleProtobufNullValue[key as keyof typeof GoogleProtobufNullValue] === value) {
                return true;
            }
        }
    }
    return false;
}

export function GoogleProtobufNullValueFromJSON(json: any): GoogleProtobufNullValue {
    return GoogleProtobufNullValueFromJSONTyped(json, false);
}

export function GoogleProtobufNullValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): GoogleProtobufNullValue {
    return json as GoogleProtobufNullValue;
}

export function GoogleProtobufNullValueToJSON(value?: GoogleProtobufNullValue | null): any {
    return value as any;
}

export function GoogleProtobufNullValueToJSONTyped(value: any, ignoreDiscriminator: boolean): GoogleProtobufNullValue {
    return value as GoogleProtobufNullValue;
}

