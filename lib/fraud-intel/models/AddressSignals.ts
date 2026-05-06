/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * Local-part parsing insights produced during analysis. The service always returns this payload; when a specific signal is unavailable, the corresponding value falls back to `false` or an empty string.
 * @export
 * @interface AddressSignals
 */
export interface AddressSignals {
    /**
     * Indicates whether the local-part contains `+tag` sub-addressing. Default: false. Example: true.
     * @type {boolean}
     * @memberof AddressSignals
     */
    tagDetected: boolean;
    /**
     * Raw tag contents following the plus sign. Empty string when a tag is not present or has no suffix. Default: empty string. Example: "campaign-123".
     * @type {string}
     * @memberof AddressSignals
     */
    tagValue: string;
    /**
     * Email rebuilt without the tag. Always lower-case. Default: empty string. Example: "noreply@company.com".
     * @type {string}
     * @memberof AddressSignals
     */
    normalizedAddress: string;
    /**
     * True when the local-part maps to a catalogued role inbox (e.g., support, sales, billing). Default: false. Example: true.
     * @type {boolean}
     * @memberof AddressSignals
     */
    isRoleAddress: boolean;
    /**
     * Role category slug. Empty string when `isRoleAddress` is false. Default: empty string. Example: "support".
     * @type {string}
     * @memberof AddressSignals
     */
    roleType: string;
    /**
     * True when the local-part matches no-reply or do-not-reply patterns (multi-language aware). Default: false. Example: true.
     * @type {boolean}
     * @memberof AddressSignals
     */
    isNoReply: boolean;
    /**
     * Canonical pattern matched when `isNoReply` is true (for example `noreply`, `no-responder`, `mailer-daemon`). Empty string when no pattern applies. Default: empty string. Example: "noreply".
     * @type {string}
     * @memberof AddressSignals
     */
    noReplyPattern: string;
}

/**
 * Check if a given object implements the AddressSignals interface.
 */
export function instanceOfAddressSignals(value: object): value is AddressSignals {
    if (!('tagDetected' in value) || value['tagDetected'] === undefined) return false;
    if (!('tagValue' in value) || value['tagValue'] === undefined) return false;
    if (!('normalizedAddress' in value) || value['normalizedAddress'] === undefined) return false;
    if (!('isRoleAddress' in value) || value['isRoleAddress'] === undefined) return false;
    if (!('roleType' in value) || value['roleType'] === undefined) return false;
    if (!('isNoReply' in value) || value['isNoReply'] === undefined) return false;
    if (!('noReplyPattern' in value) || value['noReplyPattern'] === undefined) return false;
    return true;
}

export function AddressSignalsFromJSON(json: any): AddressSignals {
    return AddressSignalsFromJSONTyped(json, false);
}

export function AddressSignalsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressSignals {
    if (json == null) {
        return json;
    }
    return {
        
        'tagDetected': json['tagDetected'],
        'tagValue': json['tagValue'],
        'normalizedAddress': json['normalizedAddress'],
        'isRoleAddress': json['isRoleAddress'],
        'roleType': json['roleType'],
        'isNoReply': json['isNoReply'],
        'noReplyPattern': json['noReplyPattern'],
    };
}

export function AddressSignalsToJSON(json: any): AddressSignals {
    return AddressSignalsToJSONTyped(json, false);
}

export function AddressSignalsToJSONTyped(value?: AddressSignals | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'tagDetected': value['tagDetected'],
        'tagValue': value['tagValue'],
        'normalizedAddress': value['normalizedAddress'],
        'isRoleAddress': value['isRoleAddress'],
        'roleType': value['roleType'],
        'isNoReply': value['isNoReply'],
        'noReplyPattern': value['noReplyPattern'],
    };
}

