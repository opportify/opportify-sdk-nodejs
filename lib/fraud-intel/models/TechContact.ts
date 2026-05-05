/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * Tech contact details.
 * @export
 * @interface TechContact
 */
export interface TechContact {
    /**
     * Unique identifier for the tech contact.
     * @type {string}
     * @memberof TechContact
     */
    contactId?: string;
    /**
     * Type of contact (e.g., "tech").
     * @type {string}
     * @memberof TechContact
     */
    contactType?: string;
    /**
     * Name of the tech contact.
     * @type {string}
     * @memberof TechContact
     */
    name?: string;
    /**
     * Tech contact address details.
     * @type {Array<string>}
     * @memberof TechContact
     */
    address?: Array<string>;
    /**
     * Contact phone numbers for tech issues.
     * @type {Array<string>}
     * @memberof TechContact
     */
    phone?: Array<string>;
    /**
     * Contact fax numbers for tech issues.
     * @type {Array<string>}
     * @memberof TechContact
     */
    fax?: Array<string>;
    /**
     * Contact email addresses for tech issues.
     * @type {Array<string>}
     * @memberof TechContact
     */
    email?: Array<string>;
}

/**
 * Check if a given object implements the TechContact interface.
 */
export function instanceOfTechContact(value: object): value is TechContact {
    return true;
}

export function TechContactFromJSON(json: any): TechContact {
    return TechContactFromJSONTyped(json, false);
}

export function TechContactFromJSONTyped(json: any, ignoreDiscriminator: boolean): TechContact {
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

export function TechContactToJSON(json: any): TechContact {
    return TechContactToJSONTyped(json, false);
}

export function TechContactToJSONTyped(value?: TechContact | null, ignoreDiscriminator: boolean = false): any {
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

