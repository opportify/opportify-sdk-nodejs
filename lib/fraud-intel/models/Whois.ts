/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
import type { Organization } from './Organization';
import {
    OrganizationFromJSON,
    OrganizationFromJSONTyped,
    OrganizationToJSON,
    OrganizationToJSONTyped,
} from './Organization';
import type { AbuseContact } from './AbuseContact';
import {
    AbuseContactFromJSON,
    AbuseContactFromJSONTyped,
    AbuseContactToJSON,
    AbuseContactToJSONTyped,
} from './AbuseContact';
import type { AdminContact } from './AdminContact';
import {
    AdminContactFromJSON,
    AdminContactFromJSONTyped,
    AdminContactToJSON,
    AdminContactToJSONTyped,
} from './AdminContact';
import type { Asn } from './Asn';
import {
    AsnFromJSON,
    AsnFromJSONTyped,
    AsnToJSON,
    AsnToJSONTyped,
} from './Asn';
import type { TechContact } from './TechContact';
import {
    TechContactFromJSON,
    TechContactFromJSONTyped,
    TechContactToJSON,
    TechContactToJSONTyped,
} from './TechContact';

/**
 * This object provides sanitized and normalized WHOIS information for an IP address, including details about the Regional Internet Registry (RIR), Autonomous System Number (ASN), organization, and…
 * @export
 * @interface Whois
 */
export interface Whois {
    /**
     * Regional Internet Registry managing the IP.
     * @type {string}
     * @memberof Whois
     */
    rir?: string;
    /**
     * 
     * @type {Asn}
     * @memberof Whois
     */
    asn?: Asn;
    /**
     * 
     * @type {Organization}
     * @memberof Whois
     */
    organization?: Organization;
    /**
     * 
     * @type {AbuseContact}
     * @memberof Whois
     */
    abuseContact?: AbuseContact;
    /**
     * 
     * @type {AdminContact}
     * @memberof Whois
     */
    adminContact?: AdminContact;
    /**
     * 
     * @type {TechContact}
     * @memberof Whois
     */
    techContact?: TechContact;
}

/**
 * Check if a given object implements the Whois interface.
 */
export function instanceOfWhois(value: object): value is Whois {
    return true;
}

export function WhoisFromJSON(json: any): Whois {
    return WhoisFromJSONTyped(json, false);
}

export function WhoisFromJSONTyped(json: any, ignoreDiscriminator: boolean): Whois {
    if (json == null) {
        return json;
    }
    return {
        
        'rir': json['rir'] == null ? undefined : json['rir'],
        'asn': json['asn'] == null ? undefined : AsnFromJSON(json['asn']),
        'organization': json['organization'] == null ? undefined : OrganizationFromJSON(json['organization']),
        'abuseContact': json['abuseContact'] == null ? undefined : AbuseContactFromJSON(json['abuseContact']),
        'adminContact': json['adminContact'] == null ? undefined : AdminContactFromJSON(json['adminContact']),
        'techContact': json['techContact'] == null ? undefined : TechContactFromJSON(json['techContact']),
    };
}

export function WhoisToJSON(json: any): Whois {
    return WhoisToJSONTyped(json, false);
}

export function WhoisToJSONTyped(value?: Whois | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'rir': value['rir'],
        'asn': AsnToJSON(value['asn']),
        'organization': OrganizationToJSON(value['organization']),
        'abuseContact': AbuseContactToJSON(value['abuseContact']),
        'adminContact': AdminContactToJSON(value['adminContact']),
        'techContact': TechContactToJSON(value['techContact']),
    };
}

