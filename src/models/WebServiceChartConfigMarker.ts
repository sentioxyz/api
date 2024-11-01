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
import type { WebServiceChartConfigMarkerType } from './WebServiceChartConfigMarkerType.js';
import {
    WebServiceChartConfigMarkerTypeFromJSON,
    WebServiceChartConfigMarkerTypeFromJSONTyped,
    WebServiceChartConfigMarkerTypeToJSON,
    WebServiceChartConfigMarkerTypeToJSONTyped,
} from './WebServiceChartConfigMarkerType.js';

/**
 * 
 * @export
 * @interface WebServiceChartConfigMarker
 */
export interface WebServiceChartConfigMarker {
    /**
     * 
     * @type {WebServiceChartConfigMarkerType}
     * @memberof WebServiceChartConfigMarker
     */
    type?: WebServiceChartConfigMarkerType;
    /**
     * 
     * @type {number}
     * @memberof WebServiceChartConfigMarker
     */
    value?: number;
    /**
     * 
     * @type {string}
     * @memberof WebServiceChartConfigMarker
     */
    color?: string;
    /**
     * 
     * @type {string}
     * @memberof WebServiceChartConfigMarker
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof WebServiceChartConfigMarker
     */
    valueX?: string;
}



/**
 * Check if a given object implements the WebServiceChartConfigMarker interface.
 */
export function instanceOfWebServiceChartConfigMarker(value: object): value is WebServiceChartConfigMarker {
    return true;
}

export function WebServiceChartConfigMarkerFromJSON(json: any): WebServiceChartConfigMarker {
    return WebServiceChartConfigMarkerFromJSONTyped(json, false);
}

export function WebServiceChartConfigMarkerFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceChartConfigMarker {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'] == null ? undefined : WebServiceChartConfigMarkerTypeFromJSON(json['type']),
        'value': json['value'] == null ? undefined : json['value'],
        'color': json['color'] == null ? undefined : json['color'],
        'label': json['label'] == null ? undefined : json['label'],
        'valueX': json['valueX'] == null ? undefined : json['valueX'],
    };
}

  export function WebServiceChartConfigMarkerToJSON(json: any): WebServiceChartConfigMarker {
      return WebServiceChartConfigMarkerToJSONTyped(json, false);
  }

  export function WebServiceChartConfigMarkerToJSONTyped(value?: WebServiceChartConfigMarker | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': WebServiceChartConfigMarkerTypeToJSON(value['type']),
        'value': value['value'],
        'color': value['color'],
        'label': value['label'],
        'valueX': value['valueX'],
    };
}

