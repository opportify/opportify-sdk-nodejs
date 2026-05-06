/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
import type { EmailDNS } from './EmailDNS';
import {
    EmailDNSFromJSON,
    EmailDNSFromJSONTyped,
    EmailDNSToJSON,
    EmailDNSToJSONTyped,
} from './EmailDNS';
import type { RiskReportEmail } from './RiskReportEmail';
import {
    RiskReportEmailFromJSON,
    RiskReportEmailFromJSONTyped,
    RiskReportEmailToJSON,
    RiskReportEmailToJSONTyped,
} from './RiskReportEmail';
import type { EmailDomain } from './EmailDomain';
import {
    EmailDomainFromJSON,
    EmailDomainFromJSONTyped,
    EmailDomainToJSON,
    EmailDomainToJSONTyped,
} from './EmailDomain';
import type { AddressSignals } from './AddressSignals';
import {
    AddressSignalsFromJSON,
    AddressSignalsFromJSONTyped,
    AddressSignalsToJSON,
    AddressSignalsToJSONTyped,
} from './AddressSignals';

/**
 * Full Email Insights response. Present when `email` was supplied.
 * @export
 * @interface AnalyzeFraud200ResponseSourcesEmail
 */
export interface AnalyzeFraud200ResponseSourcesEmail {
    /**
     * Normalized email address returned by the service (always lower-case).
     * @type {string}
     * @memberof AnalyzeFraud200ResponseSourcesEmail
     */
    emailAddress: string;
    /**
     * Provider slug derived from the domain, or `unknown` when not classified.
     * @type {string}
     * @memberof AnalyzeFraud200ResponseSourcesEmail
     */
    emailProvider: string;
    /**
     * Email classification based on provider and enrichment signals. Allowed values: `private`, `free`, `disposable`, `unknown`.
     * @type {string}
     * @memberof AnalyzeFraud200ResponseSourcesEmail
     */
    emailType: string;
    /**
     * Checks if the email address exists and is deliverable using SMTP handshake simulation. Allowed values: `yes`, `no`, `unknown`.
     * @type {string}
     * @memberof AnalyzeFraud200ResponseSourcesEmail
     */
    isDeliverable: string;
    /**
     * Determines if the email domain is configured as a catch-all.
     * @type {boolean}
     * @memberof AnalyzeFraud200ResponseSourcesEmail
     */
    isCatchAll: boolean;
    /**
     * Determines if the mailbox associated with the email is full.
     * @type {boolean}
     * @memberof AnalyzeFraud200ResponseSourcesEmail
     */
    isMailboxFull: boolean;
    /**
     * Confirms if the email domain has valid MX DNS records using DNS lookup.
     * @type {boolean}
     * @memberof AnalyzeFraud200ResponseSourcesEmail
     */
    isReachable: boolean;
    /**
     * Indicates if the email address meets syntax validation rules.
     * @type {boolean}
     * @memberof AnalyzeFraud200ResponseSourcesEmail
     */
    isFormatValid: boolean;
    /**
     * The corrected email address when the system is highly confident about a typo or misspelling. Empty string when no correction is needed.
     * @type {string}
     * @memberof AnalyzeFraud200ResponseSourcesEmail
     */
    emailCorrection: string;
    /**
     * The original email address before auto-correction was applied. Present only when auto-correction was applied.
     * @type {string}
     * @memberof AnalyzeFraud200ResponseSourcesEmail
     */
    emailAutoCorrectedFrom?: string;
    /**
     * Local-part parsing details for the analyzed address.
     * @type {AddressSignals}
     * @memberof AnalyzeFraud200ResponseSourcesEmail
     */
    addressSignals: AddressSignals;
    /**
     * 
     * @type {EmailDNS}
     * @memberof AnalyzeFraud200ResponseSourcesEmail
     */
    emailDNS: EmailDNS;
    /**
     * Risk report from Email Insights analysis.
     * @type {RiskReportEmail}
     * @memberof AnalyzeFraud200ResponseSourcesEmail
     */
    riskReport?: RiskReportEmail;
    /**
     * Domain summary derived from enrichment providers.
     * @type {EmailDomain}
     * @memberof AnalyzeFraud200ResponseSourcesEmail
     */
    domain?: EmailDomain;
}

/**
 * Check if a given object implements the AnalyzeFraud200ResponseSourcesEmail interface.
 */
export function instanceOfAnalyzeFraud200ResponseSourcesEmail(value: object): value is AnalyzeFraud200ResponseSourcesEmail {
    if (!('emailAddress' in value) || value['emailAddress'] === undefined) return false;
    if (!('emailProvider' in value) || value['emailProvider'] === undefined) return false;
    if (!('emailType' in value) || value['emailType'] === undefined) return false;
    if (!('isDeliverable' in value) || value['isDeliverable'] === undefined) return false;
    if (!('isCatchAll' in value) || value['isCatchAll'] === undefined) return false;
    if (!('isMailboxFull' in value) || value['isMailboxFull'] === undefined) return false;
    if (!('isReachable' in value) || value['isReachable'] === undefined) return false;
    if (!('isFormatValid' in value) || value['isFormatValid'] === undefined) return false;
    if (!('emailCorrection' in value) || value['emailCorrection'] === undefined) return false;
    if (!('addressSignals' in value) || value['addressSignals'] === undefined) return false;
    if (!('emailDNS' in value) || value['emailDNS'] === undefined) return false;
    return true;
}

export function AnalyzeFraud200ResponseSourcesEmailFromJSON(json: any): AnalyzeFraud200ResponseSourcesEmail {
    return AnalyzeFraud200ResponseSourcesEmailFromJSONTyped(json, false);
}

export function AnalyzeFraud200ResponseSourcesEmailFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeFraud200ResponseSourcesEmail {
    if (json == null) {
        return json;
    }
    return {
        
        'emailAddress': json['emailAddress'],
        'emailProvider': json['emailProvider'],
        'emailType': json['emailType'],
        'isDeliverable': json['isDeliverable'],
        'isCatchAll': json['isCatchAll'],
        'isMailboxFull': json['isMailboxFull'],
        'isReachable': json['isReachable'],
        'isFormatValid': json['isFormatValid'],
        'emailCorrection': json['emailCorrection'],
        'emailAutoCorrectedFrom': json['emailAutoCorrectedFrom'] == null ? undefined : json['emailAutoCorrectedFrom'],
        'addressSignals': AddressSignalsFromJSON(json['addressSignals']),
        'emailDNS': EmailDNSFromJSON(json['emailDNS']),
        'riskReport': json['riskReport'] == null ? undefined : RiskReportEmailFromJSON(json['riskReport']),
        'domain': json['domain'] == null ? undefined : EmailDomainFromJSON(json['domain']),
    };
}

export function AnalyzeFraud200ResponseSourcesEmailToJSON(json: any): AnalyzeFraud200ResponseSourcesEmail {
    return AnalyzeFraud200ResponseSourcesEmailToJSONTyped(json, false);
}

export function AnalyzeFraud200ResponseSourcesEmailToJSONTyped(value?: AnalyzeFraud200ResponseSourcesEmail | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'emailAddress': value['emailAddress'],
        'emailProvider': value['emailProvider'],
        'emailType': value['emailType'],
        'isDeliverable': value['isDeliverable'],
        'isCatchAll': value['isCatchAll'],
        'isMailboxFull': value['isMailboxFull'],
        'isReachable': value['isReachable'],
        'isFormatValid': value['isFormatValid'],
        'emailCorrection': value['emailCorrection'],
        'emailAutoCorrectedFrom': value['emailAutoCorrectedFrom'],
        'addressSignals': AddressSignalsToJSON(value['addressSignals']),
        'emailDNS': EmailDNSToJSON(value['emailDNS']),
        'riskReport': RiskReportEmailToJSON(value['riskReport']),
        'domain': EmailDomainToJSON(value['domain']),
    };
}

