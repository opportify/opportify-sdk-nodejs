/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * DNS details for an email address domain.
 * @export
 * @interface EmailDNS
 */
export interface EmailDNS {
    /**
     * Mail exchange records for the domain formatted as "<priority> <hostname>". Records are sorted ascending by numeric priority before responding. Default: empty array. Example: ["0 mx1.example.com", "10…
     * @type {Array<string>}
     * @memberof EmailDNS
     */
    mx: Array<string>;
    /**
     * Indicates whether SPF validation succeeded for the domain. Default: false. Example: true.
     * @type {boolean}
     * @memberof EmailDNS
     */
    spfValid: boolean;
    /**
     * Indicates whether DKIM selectors are configured for the domain. Default: false. Example: true.
     * @type {boolean}
     * @memberof EmailDNS
     */
    dkimConfigured: boolean;
    /**
     * Indicates whether a valid DMARC policy is present for the domain. Default: false. Example: false.
     * @type {boolean}
     * @memberof EmailDNS
     */
    dmarcValid: boolean;
    /**
     * Primary MX relay hostname identified during analysis. Default: empty string. Example: "mx1.example.com".
     * @type {string}
     * @memberof EmailDNS
     */
    mxRelay: string;
    /**
     * Categorization of the MX relay (provider slug or classification when available). Default: empty string. Example: "google".
     * @type {string}
     * @memberof EmailDNS
     */
    mxRelayCategory: string;
}

/**
 * Check if a given object implements the EmailDNS interface.
 */
export function instanceOfEmailDNS(value: object): value is EmailDNS {
    if (!('mx' in value) || value['mx'] === undefined) return false;
    if (!('spfValid' in value) || value['spfValid'] === undefined) return false;
    if (!('dkimConfigured' in value) || value['dkimConfigured'] === undefined) return false;
    if (!('dmarcValid' in value) || value['dmarcValid'] === undefined) return false;
    if (!('mxRelay' in value) || value['mxRelay'] === undefined) return false;
    if (!('mxRelayCategory' in value) || value['mxRelayCategory'] === undefined) return false;
    return true;
}

export function EmailDNSFromJSON(json: any): EmailDNS {
    return EmailDNSFromJSONTyped(json, false);
}

export function EmailDNSFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailDNS {
    if (json == null) {
        return json;
    }
    return {
        
        'mx': json['mx'],
        'spfValid': json['spfValid'],
        'dkimConfigured': json['dkimConfigured'],
        'dmarcValid': json['dmarcValid'],
        'mxRelay': json['mxRelay'],
        'mxRelayCategory': json['mxRelayCategory'],
    };
}

export function EmailDNSToJSON(json: any): EmailDNS {
    return EmailDNSToJSONTyped(json, false);
}

export function EmailDNSToJSONTyped(value?: EmailDNS | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'mx': value['mx'],
        'spfValid': value['spfValid'],
        'dkimConfigured': value['dkimConfigured'],
        'dmarcValid': value['dmarcValid'],
        'mxRelay': value['mxRelay'],
        'mxRelayCategory': value['mxRelayCategory'],
    };
}

