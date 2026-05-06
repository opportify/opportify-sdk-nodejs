/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * The `BlockListed` object provides detailed information about whether an IP address is listed in known blocklists and related data.
 * @export
 * @interface BlockListed
 */
export interface BlockListed {
    /**
     * Indicates if the IP is blocklisted in some of the known blocklist sources.
     * @type {boolean}
     * @memberof BlockListed
     */
    isBlockListed: boolean;
    /**
     * Number of blocklist sources.
     * @type {number}
     * @memberof BlockListed
     */
    sources: number;
    /**
     * Number of blocklist active reports for the given IP address. We constantly monitor and update this value as new reports are detected or resolved.
     * @type {number}
     * @memberof BlockListed
     */
    activeReports: number;
    /**
     * Date and time of the last blocklist detection. ISO 8601 standard. Format: date-time. Example: "2022-01-01T12:00:00Z".
     * @type {string}
     * @memberof BlockListed
     */
    lastDetected?: string;
}

/**
 * Check if a given object implements the BlockListed interface.
 */
export function instanceOfBlockListed(value: object): value is BlockListed {
    if (!('isBlockListed' in value) || value['isBlockListed'] === undefined) return false;
    if (!('sources' in value) || value['sources'] === undefined) return false;
    if (!('activeReports' in value) || value['activeReports'] === undefined) return false;
    return true;
}

export function BlockListedFromJSON(json: any): BlockListed {
    return BlockListedFromJSONTyped(json, false);
}

export function BlockListedFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockListed {
    if (json == null) {
        return json;
    }
    return {
        
        'isBlockListed': json['isBlockListed'],
        'sources': json['sources'],
        'activeReports': json['activeReports'],
        'lastDetected': json['lastDetected'] == null ? undefined : json['lastDetected'],
    };
}

export function BlockListedToJSON(json: any): BlockListed {
    return BlockListedToJSONTyped(json, false);
}

export function BlockListedToJSONTyped(value?: BlockListed | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'isBlockListed': value['isBlockListed'],
        'sources': value['sources'],
        'activeReports': value['activeReports'],
        'lastDetected': value['lastDetected'],
    };
}

