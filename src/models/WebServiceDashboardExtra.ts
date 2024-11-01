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
import type { WebServiceDashboardExtraTemplateVariable } from './WebServiceDashboardExtraTemplateVariable.js';
import {
    WebServiceDashboardExtraTemplateVariableFromJSON,
    WebServiceDashboardExtraTemplateVariableFromJSONTyped,
    WebServiceDashboardExtraTemplateVariableToJSON,
    WebServiceDashboardExtraTemplateVariableToJSONTyped,
} from './WebServiceDashboardExtraTemplateVariable.js';
import type { WebServiceDashboardExtraTemplateView } from './WebServiceDashboardExtraTemplateView.js';
import {
    WebServiceDashboardExtraTemplateViewFromJSON,
    WebServiceDashboardExtraTemplateViewFromJSONTyped,
    WebServiceDashboardExtraTemplateViewToJSON,
    WebServiceDashboardExtraTemplateViewToJSONTyped,
} from './WebServiceDashboardExtraTemplateView.js';

/**
 * 
 * @export
 * @interface WebServiceDashboardExtra
 */
export interface WebServiceDashboardExtra {
    /**
     * 
     * @type {{ [key: string]: WebServiceDashboardExtraTemplateVariable; }}
     * @memberof WebServiceDashboardExtra
     */
    templateVariables?: { [key: string]: WebServiceDashboardExtraTemplateVariable; };
    /**
     * 
     * @type {Array<WebServiceDashboardExtraTemplateView>}
     * @memberof WebServiceDashboardExtra
     */
    templateViews?: Array<WebServiceDashboardExtraTemplateView>;
}

/**
 * Check if a given object implements the WebServiceDashboardExtra interface.
 */
export function instanceOfWebServiceDashboardExtra(value: object): value is WebServiceDashboardExtra {
    return true;
}

export function WebServiceDashboardExtraFromJSON(json: any): WebServiceDashboardExtra {
    return WebServiceDashboardExtraFromJSONTyped(json, false);
}

export function WebServiceDashboardExtraFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceDashboardExtra {
    if (json == null) {
        return json;
    }
    return {
        
        'templateVariables': json['templateVariables'] == null ? undefined : (mapValues(json['templateVariables'], WebServiceDashboardExtraTemplateVariableFromJSON)),
        'templateViews': json['templateViews'] == null ? undefined : ((json['templateViews'] as Array<any>).map(WebServiceDashboardExtraTemplateViewFromJSON)),
    };
}

  export function WebServiceDashboardExtraToJSON(json: any): WebServiceDashboardExtra {
      return WebServiceDashboardExtraToJSONTyped(json, false);
  }

  export function WebServiceDashboardExtraToJSONTyped(value?: WebServiceDashboardExtra | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'templateVariables': value['templateVariables'] == null ? undefined : (mapValues(value['templateVariables'], WebServiceDashboardExtraTemplateVariableToJSON)),
        'templateViews': value['templateViews'] == null ? undefined : ((value['templateViews'] as Array<any>).map(WebServiceDashboardExtraTemplateViewToJSON)),
    };
}

