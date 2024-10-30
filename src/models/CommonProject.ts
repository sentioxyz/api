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
import type { CommonChannel } from './CommonChannel.js';
import {
    CommonChannelFromJSON,
    CommonChannelFromJSONTyped,
    CommonChannelToJSON,
    CommonChannelToJSONTyped,
} from './CommonChannel.js';
import type { CommonProjectType } from './CommonProjectType.js';
import {
    CommonProjectTypeFromJSON,
    CommonProjectTypeFromJSONTyped,
    CommonProjectTypeToJSON,
    CommonProjectTypeToJSONTyped,
} from './CommonProjectType.js';
import type { CommonProjectSuperset } from './CommonProjectSuperset.js';
import {
    CommonProjectSupersetFromJSON,
    CommonProjectSupersetFromJSONTyped,
    CommonProjectSupersetToJSON,
    CommonProjectSupersetToJSONTyped,
} from './CommonProjectSuperset.js';
import type { CommonOwner } from './CommonOwner.js';
import {
    CommonOwnerFromJSON,
    CommonOwnerFromJSONTyped,
    CommonOwnerToJSON,
    CommonOwnerToJSONTyped,
} from './CommonOwner.js';
import type { CommonProjectProjectMember } from './CommonProjectProjectMember.js';
import {
    CommonProjectProjectMemberFromJSON,
    CommonProjectProjectMemberFromJSONTyped,
    CommonProjectProjectMemberToJSON,
    CommonProjectProjectMemberToJSONTyped,
} from './CommonProjectProjectMember.js';
import type { CommonProjectView } from './CommonProjectView.js';
import {
    CommonProjectViewFromJSON,
    CommonProjectViewFromJSONTyped,
    CommonProjectViewToJSON,
    CommonProjectViewToJSONTyped,
} from './CommonProjectView.js';
import type { CommonProjectVisibility } from './CommonProjectVisibility.js';
import {
    CommonProjectVisibilityFromJSON,
    CommonProjectVisibilityFromJSONTyped,
    CommonProjectVisibilityToJSON,
    CommonProjectVisibilityToJSONTyped,
} from './CommonProjectVisibility.js';

/**
 * 
 * @export
 * @interface CommonProject
 */
export interface CommonProject {
    /**
     * 
     * @type {string}
     * @memberof CommonProject
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof CommonProject
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof CommonProject
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof CommonProject
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof CommonProject
     */
    updatedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof CommonProject
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof CommonProject
     */
    ownerId?: string;
    /**
     * 
     * @type {CommonOwner}
     * @memberof CommonProject
     */
    owner?: CommonOwner;
    /**
     * 
     * @type {CommonProjectVisibility}
     * @memberof CommonProject
     */
    visibility?: CommonProjectVisibility;
    /**
     * 
     * @type {CommonProjectType}
     * @memberof CommonProject
     */
    type?: CommonProjectType;
    /**
     * 
     * @type {Array<CommonProjectProjectMember>}
     * @memberof CommonProject
     */
    members?: Array<CommonProjectProjectMember>;
    /**
     * 
     * @type {boolean}
     * @memberof CommonProject
     */
    multiVersion?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CommonProject
     */
    ownerName?: string;
    /**
     * 
     * @type {Array<CommonChannel>}
     * @memberof CommonProject
     */
    notificationChannels?: Array<CommonChannel>;
    /**
     * 
     * @type {Array<CommonProjectView>}
     * @memberof CommonProject
     */
    views?: Array<CommonProjectView>;
    /**
     * 
     * @type {boolean}
     * @memberof CommonProject
     */
    supersetEnable?: boolean;
    /**
     * 
     * @type {CommonProjectSuperset}
     * @memberof CommonProject
     */
    superset?: CommonProjectSuperset;
    /**
     * 
     * @type {boolean}
     * @memberof CommonProject
     */
    enableDisk?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommonProject
     */
    enableMaterializedView?: boolean;
}



/**
 * Check if a given object implements the CommonProject interface.
 */
export function instanceOfCommonProject(value: object): value is CommonProject {
    return true;
}

export function CommonProjectFromJSON(json: any): CommonProject {
    return CommonProjectFromJSONTyped(json, false);
}

export function CommonProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonProject {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'displayName': json['displayName'] == null ? undefined : json['displayName'],
        'description': json['description'] == null ? undefined : json['description'],
        'createdAt': json['createdAt'] == null ? undefined : json['createdAt'],
        'updatedAt': json['updatedAt'] == null ? undefined : json['updatedAt'],
        'slug': json['slug'] == null ? undefined : json['slug'],
        'ownerId': json['ownerId'] == null ? undefined : json['ownerId'],
        'owner': json['owner'] == null ? undefined : CommonOwnerFromJSON(json['owner']),
        'visibility': json['visibility'] == null ? undefined : CommonProjectVisibilityFromJSON(json['visibility']),
        'type': json['type'] == null ? undefined : CommonProjectTypeFromJSON(json['type']),
        'members': json['members'] == null ? undefined : ((json['members'] as Array<any>).map(CommonProjectProjectMemberFromJSON)),
        'multiVersion': json['multiVersion'] == null ? undefined : json['multiVersion'],
        'ownerName': json['ownerName'] == null ? undefined : json['ownerName'],
        'notificationChannels': json['notificationChannels'] == null ? undefined : ((json['notificationChannels'] as Array<any>).map(CommonChannelFromJSON)),
        'views': json['views'] == null ? undefined : ((json['views'] as Array<any>).map(CommonProjectViewFromJSON)),
        'supersetEnable': json['supersetEnable'] == null ? undefined : json['supersetEnable'],
        'superset': json['superset'] == null ? undefined : CommonProjectSupersetFromJSON(json['superset']),
        'enableDisk': json['enableDisk'] == null ? undefined : json['enableDisk'],
        'enableMaterializedView': json['enableMaterializedView'] == null ? undefined : json['enableMaterializedView'],
    };
}

  export function CommonProjectToJSON(json: any): CommonProject {
      return CommonProjectToJSONTyped(json, false);
  }

  export function CommonProjectToJSONTyped(value?: CommonProject | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'displayName': value['displayName'],
        'description': value['description'],
        'createdAt': value['createdAt'],
        'updatedAt': value['updatedAt'],
        'slug': value['slug'],
        'ownerId': value['ownerId'],
        'owner': CommonOwnerToJSON(value['owner']),
        'visibility': CommonProjectVisibilityToJSON(value['visibility']),
        'type': CommonProjectTypeToJSON(value['type']),
        'members': value['members'] == null ? undefined : ((value['members'] as Array<any>).map(CommonProjectProjectMemberToJSON)),
        'multiVersion': value['multiVersion'],
        'ownerName': value['ownerName'],
        'notificationChannels': value['notificationChannels'] == null ? undefined : ((value['notificationChannels'] as Array<any>).map(CommonChannelToJSON)),
        'views': value['views'] == null ? undefined : ((value['views'] as Array<any>).map(CommonProjectViewToJSON)),
        'supersetEnable': value['supersetEnable'],
        'superset': CommonProjectSupersetToJSON(value['superset']),
        'enableDisk': value['enableDisk'],
        'enableMaterializedView': value['enableMaterializedView'],
    };
}

