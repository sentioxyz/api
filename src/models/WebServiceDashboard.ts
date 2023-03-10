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

import { exists, mapValues } from '../runtime';
import type { WebServiceDashboardExtra } from './WebServiceDashboardExtra';
import {
    WebServiceDashboardExtraFromJSON,
    WebServiceDashboardExtraFromJSONTyped,
    WebServiceDashboardExtraToJSON,
} from './WebServiceDashboardExtra';
import type { WebServiceDashboardResponsiveLayouts } from './WebServiceDashboardResponsiveLayouts';
import {
    WebServiceDashboardResponsiveLayoutsFromJSON,
    WebServiceDashboardResponsiveLayoutsFromJSONTyped,
    WebServiceDashboardResponsiveLayoutsToJSON,
} from './WebServiceDashboardResponsiveLayouts';
import type { WebServiceDashboardSharing } from './WebServiceDashboardSharing';
import {
    WebServiceDashboardSharingFromJSON,
    WebServiceDashboardSharingFromJSONTyped,
    WebServiceDashboardSharingToJSON,
} from './WebServiceDashboardSharing';
import type { WebServicePanel } from './WebServicePanel';
import {
    WebServicePanelFromJSON,
    WebServicePanelFromJSONTyped,
    WebServicePanelToJSON,
} from './WebServicePanel';

/**
 * 
 * @export
 * @interface WebServiceDashboard
 */
export interface WebServiceDashboard {
    /**
     * 
     * @type {string}
     * @memberof WebServiceDashboard
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof WebServiceDashboard
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof WebServiceDashboard
     */
    projectId?: string;
    /**
     * 
     * @type {string}
     * @memberof WebServiceDashboard
     */
    description?: string;
    /**
     * 
     * @type {Date}
     * @memberof WebServiceDashboard
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof WebServiceDashboard
     */
    updatedAt?: Date;
    /**
     * 
     * @type {{ [key: string]: WebServicePanel; }}
     * @memberof WebServiceDashboard
     */
    panels?: { [key: string]: WebServicePanel; };
    /**
     * 
     * @type {WebServiceDashboardResponsiveLayouts}
     * @memberof WebServiceDashboard
     */
    layouts?: WebServiceDashboardResponsiveLayouts;
    /**
     * 
     * @type {WebServiceDashboardExtra}
     * @memberof WebServiceDashboard
     */
    extra?: WebServiceDashboardExtra;
    /**
     * 
     * @type {WebServiceDashboardSharing}
     * @memberof WebServiceDashboard
     */
    sharing?: WebServiceDashboardSharing;
}

/**
 * Check if a given object implements the WebServiceDashboard interface.
 */
export function instanceOfWebServiceDashboard(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WebServiceDashboardFromJSON(json: any): WebServiceDashboard {
    return WebServiceDashboardFromJSONTyped(json, false);
}

export function WebServiceDashboardFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebServiceDashboard {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'projectId': !exists(json, 'projectId') ? undefined : json['projectId'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'panels': !exists(json, 'panels') ? undefined : (mapValues(json['panels'], WebServicePanelFromJSON)),
        'layouts': !exists(json, 'layouts') ? undefined : WebServiceDashboardResponsiveLayoutsFromJSON(json['layouts']),
        'extra': !exists(json, 'extra') ? undefined : WebServiceDashboardExtraFromJSON(json['extra']),
        'sharing': !exists(json, 'sharing') ? undefined : WebServiceDashboardSharingFromJSON(json['sharing']),
    };
}

export function WebServiceDashboardToJSON(value?: WebServiceDashboard | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'projectId': value.projectId,
        'description': value.description,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'panels': value.panels === undefined ? undefined : (mapValues(value.panels, WebServicePanelToJSON)),
        'layouts': WebServiceDashboardResponsiveLayoutsToJSON(value.layouts),
        'extra': WebServiceDashboardExtraToJSON(value.extra),
        'sharing': WebServiceDashboardSharingToJSON(value.sharing),
    };
}

