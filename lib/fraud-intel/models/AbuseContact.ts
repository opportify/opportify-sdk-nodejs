/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * Abuse contact details.
 * @export
 * @interface AbuseContact
 */
export interface AbuseContact {
    /**
     * Unique identifier for the abuse contact.
     * @type {string}
     * @memberof AbuseContact
     */
    contactId?: string;
    /**
     * Type of contact (e.g., "abuse").
     * @type {string}
     * @memberof AbuseContact
     */
    contactType?: string;
    /**
     * Name of the abuse contact.
     * @type {string}
     * @memberof AbuseContact
     */
    name?: string;
    /**
     * Abuse contact address details.
     * @type {Array<string>}
     * @memberof AbuseContact
     */
    address?: Array<string>;
    /**
     * Contact phone numbers for abuse issues.
     * @type {Array<string>}
     * @memberof AbuseContact
     */
    phone?: Array<string>;
    /**
     * Contact fax numbers for abuse issues.
     * @type {Array<string>}
     * @memberof AbuseContact
     */
    fax?: Array<string>;
    /**
     * Contact email addresses for abuse issues.
     * @type {Array<string>}
     * @memberof AbuseContact
     */
    email?: Array<string>;
}

/**
 * Check if a given object implements the AbuseContact interface.
 */
export function instanceOfAbuseContact(value: object): value is AbuseContact {
    return true;
}

export function AbuseContactFromJSON(json: any): AbuseContact {
    return AbuseContactFromJSONTyped(json, false);
}

export function AbuseContactFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbuseContact {
    if (json == null) {
        return json;
    }
    return {
        
        'contactId': json['contactId'] == null ? undefined : json['contactId'],
        'contactType': json['contactType'] == null ? undefined : json['contactType'],
        'name': json['name'] == null ? undefined : json['name'],
        'address': json['address'] == null ? undefined : json['address'],
        'phone': json['phone'] == null ? undefined : json['phone'],
        'fax': json['fax'] == null ? undefined : json['fax'],
        'email': json['email'] == null ? undefined : json['email'],
    };
}

export function AbuseContactToJSON(json: any): AbuseContact {
    return AbuseContactToJSONTyped(json, false);
}

export function AbuseContactToJSONTyped(value?: AbuseContact | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'contactId': value['contactId'],
        'contactType': value['contactType'],
        'name': value['name'],
        'address': value['address'],
        'phone': value['phone'],
        'fax': value['fax'],
        'email': value['email'],
    };
}

