/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * Summary of the domain-level enrichment returned when enrichment is available and not opted out via `enableDomainEnrichment`.
 * @export
 * @interface EmailDomain
 */
export interface EmailDomain {
    /**
     * Fully qualified domain name associated with the email. Default: empty string. Example: "company.com".
     * @type {string}
     * @memberof EmailDomain
     */
    name: string;
    /**
     * Indicates whether enrichment data was available at analysis time.
     * @type {boolean}
     * @memberof EmailDomain
     */
    enrichmentAvailable: boolean;
    /**
     * Domain creation timestamp (ISO 8601). Returns an empty string when enrichment data is unavailable. Format: date-time. Example: "2014-05-12T00:00:00Z".
     * @type {string}
     * @memberof EmailDomain
     */
    creationDate: string;
    /**
     * Domain expiration timestamp (ISO 8601). Returns an empty string when enrichment data is unavailable. Format: date-time. Example: "2026-05-11T23:59:59Z".
     * @type {string}
     * @memberof EmailDomain
     */
    expirationDate: string;
    /**
     * Last WHOIS update timestamp (ISO 8601). Returns an empty string when enrichment data is unavailable. Format: date-time. Example: "2024-11-01T08:30:00Z".
     * @type {string}
     * @memberof EmailDomain
     */
    updatedDate: string;
    /**
     * Domain age in whole years based on stored enrichment data. Returns 0 for domains younger than one year. Default: 0. Example: 11.
     * @type {number}
     * @memberof EmailDomain
     */
    ageYears: number;
    /**
     * Registrar recorded for the domain. Default: empty string. Example: "Namecheap, Inc.".
     * @type {string}
     * @memberof EmailDomain
     */
    registrar: string;
    /**
     * Indicates whether the domain appears in monitored blocklists. Default: false. Example: false.
     * @type {boolean}
     * @memberof EmailDomain
     */
    isBlockListed: boolean;
    /**
     * Status of the domain's MTA-STS configuration. Allowed values: `present`, `invalid`, `absent`, `unknown`. Default: `unknown`. Example: `present`.
     * @type {string}
     * @memberof EmailDomain
     */
    mtaStsStatus: string;
    /**
     * BIMI (Brand Indicators for Message Identification) status. Allowed values: `present`, `present-no-vmc`, `invalid`, `absent`, `unknown`. Default: `unknown`. Example: `present-no-vmc`.
     * @type {string}
     * @memberof EmailDomain
     */
    bimiStatus: string;
    /**
     * Indicates whether a Verified Mark Certificate is associated with the domain. Default: false. Example: false.
     * @type {boolean}
     * @memberof EmailDomain
     */
    hasVMC: boolean;
    /**
     * Indicates whether the domain has valid A records. Default: false. Example: true.
     * @type {boolean}
     * @memberof EmailDomain
     */
    aRecordValid: boolean;
    /**
     * Reverse hostname observed for the A record when available. Empty string when no reverse mapping is returned. Default: empty string. Example: "reverse.company.com".
     * @type {string}
     * @memberof EmailDomain
     */
    aRecordReverseHost: string;
    /**
     * Indicates whether the domain serves a valid SSL certificate on common endpoints. Default: false. Example: true.
     * @type {boolean}
     * @memberof EmailDomain
     */
    sslValid: boolean;
}

/**
 * Check if a given object implements the EmailDomain interface.
 */
export function instanceOfEmailDomain(value: object): value is EmailDomain {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('enrichmentAvailable' in value) || value['enrichmentAvailable'] === undefined) return false;
    if (!('creationDate' in value) || value['creationDate'] === undefined) return false;
    if (!('expirationDate' in value) || value['expirationDate'] === undefined) return false;
    if (!('updatedDate' in value) || value['updatedDate'] === undefined) return false;
    if (!('ageYears' in value) || value['ageYears'] === undefined) return false;
    if (!('registrar' in value) || value['registrar'] === undefined) return false;
    if (!('isBlockListed' in value) || value['isBlockListed'] === undefined) return false;
    if (!('mtaStsStatus' in value) || value['mtaStsStatus'] === undefined) return false;
    if (!('bimiStatus' in value) || value['bimiStatus'] === undefined) return false;
    if (!('hasVMC' in value) || value['hasVMC'] === undefined) return false;
    if (!('aRecordValid' in value) || value['aRecordValid'] === undefined) return false;
    if (!('aRecordReverseHost' in value) || value['aRecordReverseHost'] === undefined) return false;
    if (!('sslValid' in value) || value['sslValid'] === undefined) return false;
    return true;
}

export function EmailDomainFromJSON(json: any): EmailDomain {
    return EmailDomainFromJSONTyped(json, false);
}

export function EmailDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailDomain {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'enrichmentAvailable': json['enrichmentAvailable'],
        'creationDate': json['creationDate'],
        'expirationDate': json['expirationDate'],
        'updatedDate': json['updatedDate'],
        'ageYears': json['ageYears'],
        'registrar': json['registrar'],
        'isBlockListed': json['isBlockListed'],
        'mtaStsStatus': json['mtaStsStatus'],
        'bimiStatus': json['bimiStatus'],
        'hasVMC': json['hasVMC'],
        'aRecordValid': json['aRecordValid'],
        'aRecordReverseHost': json['aRecordReverseHost'],
        'sslValid': json['sslValid'],
    };
}

export function EmailDomainToJSON(json: any): EmailDomain {
    return EmailDomainToJSONTyped(json, false);
}

export function EmailDomainToJSONTyped(value?: EmailDomain | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'enrichmentAvailable': value['enrichmentAvailable'],
        'creationDate': value['creationDate'],
        'expirationDate': value['expirationDate'],
        'updatedDate': value['updatedDate'],
        'ageYears': value['ageYears'],
        'registrar': value['registrar'],
        'isBlockListed': value['isBlockListed'],
        'mtaStsStatus': value['mtaStsStatus'],
        'bimiStatus': value['bimiStatus'],
        'hasVMC': value['hasVMC'],
        'aRecordValid': value['aRecordValid'],
        'aRecordReverseHost': value['aRecordReverseHost'],
        'sslValid': value['sslValid'],
    };
}

