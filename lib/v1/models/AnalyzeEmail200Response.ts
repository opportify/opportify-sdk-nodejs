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
 * 
 * @export
 * @interface AnalyzeEmail200Response
 */
export interface AnalyzeEmail200Response {
    /**
     * Normalized email address returned by the service (always lower-case).
     * @type {string}
     * @memberof AnalyzeEmail200Response
     */
    emailAddress: string;
    /**
     * Provider slug derived from the domain, or `unknown` when not classified.
     * @type {string}
     * @memberof AnalyzeEmail200Response
     */
    emailProvider: string;
    /**
     * Email classification based on provider and enrichment signals. Allowed values: `private`, `free`, `disposable`, `unknown`. Example: `free`.
     * @type {string}
     * @memberof AnalyzeEmail200Response
     */
    emailType: string;
    /**
     * Checks if the email address exists and is deliverable using SMTP handshake simulation. This involves connecting to the mail server and issuing commands to verify deliverability. The possible answers…
     * @type {string}
     * @memberof AnalyzeEmail200Response
     */
    isDeliverable: string;
    /**
     * Determines if the email domain is configured as a catch-all, which accepts emails for all addresses within the domain. This is verified through multiple email tests.
     * @type {boolean}
     * @memberof AnalyzeEmail200Response
     */
    isCatchAll: boolean;
    /**
     * Determines if the mailbox associated with the email is full, in association with isDeliverable field, it can give a reason why the email is not deliverable.
     * @type {boolean}
     * @memberof AnalyzeEmail200Response
     */
    isMailboxFull: boolean;
    /**
     * Confirms if the email domain has valid MX DNS records using DNS lookup.
     * @type {boolean}
     * @memberof AnalyzeEmail200Response
     */
    isReachable: boolean;
    /**
     * Indicates if the email address meets syntax validation rules.
     * @type {boolean}
     * @memberof AnalyzeEmail200Response
     */
    isFormatValid: boolean;
    /**
     * The corrected email address when the system is highly confident about a typo or misspelling. Always present; empty string when no correction is needed.
     * @type {string}
     * @memberof AnalyzeEmail200Response
     */
    emailCorrection: string;
    /**
     * The original email address provided in the request, before auto-correction was applied. This field is only present when `enableAutoCorrection` is `true` AND the system automatically applied a…
     * @type {string}
     * @memberof AnalyzeEmail200Response
     */
    emailAutoCorrectedFrom?: string;
    /**
     * Local-part parsing details for the analyzed address. Always present; fields default to empty strings when a signal is not applicable.
     * @type {AddressSignals}
     * @memberof AnalyzeEmail200Response
     */
    addressSignals: AddressSignals;
    /**
     * 
     * @type {EmailDNS}
     * @memberof AnalyzeEmail200Response
     */
    emailDNS: EmailDNS;
    /**
     * AI-generated risk report detailing the evaluated risk bucket. Returned only when `enableAI` is true.
     * @type {RiskReportEmail}
     * @memberof AnalyzeEmail200Response
     */
    riskReport?: RiskReportEmail;
    /**
     * Domain summary derived from enrichment providers. Omitted when enrichment is unavailable or `enableDomainEnrichment` is set to `false`.
     * @type {EmailDomain}
     * @memberof AnalyzeEmail200Response
     */
    domain?: EmailDomain;
}

/**
 * Check if a given object implements the AnalyzeEmail200Response interface.
 */
export function instanceOfAnalyzeEmail200Response(value: object): value is AnalyzeEmail200Response {
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

export function AnalyzeEmail200ResponseFromJSON(json: any): AnalyzeEmail200Response {
    return AnalyzeEmail200ResponseFromJSONTyped(json, false);
}

export function AnalyzeEmail200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeEmail200Response {
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

export function AnalyzeEmail200ResponseToJSON(json: any): AnalyzeEmail200Response {
    return AnalyzeEmail200ResponseToJSONTyped(json, false);
}

export function AnalyzeEmail200ResponseToJSONTyped(value?: AnalyzeEmail200Response | null, ignoreDiscriminator: boolean = false): any {
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

