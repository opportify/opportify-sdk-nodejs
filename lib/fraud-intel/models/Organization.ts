/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * Organization details for an IP address.
 * @export
 * @interface Organization
 */
export interface Organization {
    /**
     * Organization ID.
     * @type {string}
     * @memberof Organization
     */
    orgId?: string;
    /**
     * Organization name.
     * @type {string}
     * @memberof Organization
     */
    orgName?: string;
    /**
     * Organization type.
     * @type {string}
     * @memberof Organization
     */
    orgType?: string;
    /**
     * Organization description. It might return different values based on the data source. Some provide ownership, address, others provide a more abstract description. Our system tries to sanitize removing…
     * @type {Array<string>}
     * @memberof Organization
     */
    descr?: Array<string>;
    /**
     * Organization address details. No standard address format is guaranteed.
     * @type {Array<string>}
     * @memberof Organization
     */
    address?: Array<string>;
    /**
     * Country code of the organization with 2 digits. (ISO 3166-1 alpha-2)
     * @type {string}
     * @memberof Organization
     */
    country?: string;
    /**
     * Contact phone numbers.
     * @type {Array<string>}
     * @memberof Organization
     */
    phone?: Array<string>;
    /**
     * Contact fax numbers.
     * @type {Array<string>}
     * @memberof Organization
     */
    fax?: Array<string>;
    /**
     * Previously sanitized and validated contact email addresses always in lower case.
     * @type {Array<string>}
     * @memberof Organization
     */
    email?: Array<string>;
}

/**
 * Check if a given object implements the Organization interface.
 */
export function instanceOfOrganization(value: object): value is Organization {
    return true;
}

export function OrganizationFromJSON(json: any): Organization {
    return OrganizationFromJSONTyped(json, false);
}

export function OrganizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Organization {
    if (json == null) {
        return json;
    }
    return {
        
        'orgId': json['orgId'] == null ? undefined : json['orgId'],
        'orgName': json['orgName'] == null ? undefined : json['orgName'],
        'orgType': json['orgType'] == null ? undefined : json['orgType'],
        'descr': json['descr'] == null ? undefined : json['descr'],
        'address': json['address'] == null ? undefined : json['address'],
        'country': json['country'] == null ? undefined : json['country'],
        'phone': json['phone'] == null ? undefined : json['phone'],
        'fax': json['fax'] == null ? undefined : json['fax'],
        'email': json['email'] == null ? undefined : json['email'],
    };
}

export function OrganizationToJSON(json: any): Organization {
    return OrganizationToJSONTyped(json, false);
}

export function OrganizationToJSONTyped(value?: Organization | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'orgId': value['orgId'],
        'orgName': value['orgName'],
        'orgType': value['orgType'],
        'descr': value['descr'],
        'address': value['address'],
        'country': value['country'],
        'phone': value['phone'],
        'fax': value['fax'],
        'email': value['email'],
    };
}

