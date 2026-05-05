/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * Admin contact details.
 * @export
 * @interface AdminContact
 */
export interface AdminContact {
    /**
     * Unique identifier for the admin contact.
     * @type {string}
     * @memberof AdminContact
     */
    contactId?: string;
    /**
     * Type of contact (e.g., "admin").
     * @type {string}
     * @memberof AdminContact
     */
    contactType?: string;
    /**
     * Name of the admin contact.
     * @type {string}
     * @memberof AdminContact
     */
    name?: string;
    /**
     * Admin contact address details.
     * @type {Array<string>}
     * @memberof AdminContact
     */
    address?: Array<string>;
    /**
     * Contact phone numbers for admin issues.
     * @type {Array<string>}
     * @memberof AdminContact
     */
    phone?: Array<string>;
    /**
     * Contact fax numbers for admin issues.
     * @type {Array<string>}
     * @memberof AdminContact
     */
    fax?: Array<string>;
    /**
     * Contact email addresses for admin issues.
     * @type {Array<string>}
     * @memberof AdminContact
     */
    email?: Array<string>;
}

/**
 * Check if a given object implements the AdminContact interface.
 */
export function instanceOfAdminContact(value: object): value is AdminContact {
    return true;
}

export function AdminContactFromJSON(json: any): AdminContact {
    return AdminContactFromJSONTyped(json, false);
}

export function AdminContactFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdminContact {
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

export function AdminContactToJSON(json: any): AdminContact {
    return AdminContactToJSONTyped(json, false);
}

export function AdminContactToJSONTyped(value?: AdminContact | null, ignoreDiscriminator: boolean = false): any {
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

