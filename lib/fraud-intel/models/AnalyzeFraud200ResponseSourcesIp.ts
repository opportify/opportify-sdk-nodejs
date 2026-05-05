/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
import type { Geo } from './Geo';
import {
    GeoFromJSON,
    GeoFromJSONTyped,
    GeoToJSON,
    GeoToJSONTyped,
} from './Geo';
import type { BlockListed } from './BlockListed';
import {
    BlockListedFromJSON,
    BlockListedFromJSONTyped,
    BlockListedToJSON,
    BlockListedToJSONTyped,
} from './BlockListed';
import type { Whois } from './Whois';
import {
    WhoisFromJSON,
    WhoisFromJSONTyped,
    WhoisToJSON,
    WhoisToJSONTyped,
} from './Whois';
import type { RiskReportIp } from './RiskReportIp';
import {
    RiskReportIpFromJSON,
    RiskReportIpFromJSONTyped,
    RiskReportIpToJSON,
    RiskReportIpToJSONTyped,
} from './RiskReportIp';
import type { TrustedProvider } from './TrustedProvider';
import {
    TrustedProviderFromJSON,
    TrustedProviderFromJSONTyped,
    TrustedProviderToJSON,
    TrustedProviderToJSONTyped,
} from './TrustedProvider';

/**
 * Full IP Insights response. Present when `userIp` was supplied.
 * @export
 * @interface AnalyzeFraud200ResponseSourcesIp
 */
export interface AnalyzeFraud200ResponseSourcesIp {
    /**
     * The analyzed IP address.
     * @type {string}
     * @memberof AnalyzeFraud200ResponseSourcesIp
     */
    ipAddress: string;
    /**
     * Numeric representation of the IP address.
     * @type {number}
     * @memberof AnalyzeFraud200ResponseSourcesIp
     */
    ipAddressNumber: number;
    /**
     * Type of the IP address (IPv4 or IPv6).
     * @type {string}
     * @memberof AnalyzeFraud200ResponseSourcesIp
     */
    ipType: string;
    /**
     * CIDR notation of the IP address.
     * @type {string}
     * @memberof AnalyzeFraud200ResponseSourcesIp
     */
    ipCidr: string;
    /**
     * The type of connection associated with the IP address. Allowed values: `wired`, `mobile`, `enterprise`, `satellite`, `vpn`, `cloud-provider`, `open-proxy`, `tor`.
     * @type {string}
     * @memberof AnalyzeFraud200ResponseSourcesIp
     */
    connectionType: string;
    /**
     * Real time reverse DNS lookup result for the IP address.
     * @type {string}
     * @memberof AnalyzeFraud200ResponseSourcesIp
     */
    hostReverse: string;
    /**
     * 
     * @type {Geo}
     * @memberof AnalyzeFraud200ResponseSourcesIp
     */
    geo: Geo;
    /**
     * 
     * @type {Whois}
     * @memberof AnalyzeFraud200ResponseSourcesIp
     */
    whois: Whois;
    /**
     * 
     * @type {TrustedProvider}
     * @memberof AnalyzeFraud200ResponseSourcesIp
     */
    trustedProvider: TrustedProvider;
    /**
     * 
     * @type {BlockListed}
     * @memberof AnalyzeFraud200ResponseSourcesIp
     */
    blocklisted: BlockListed;
    /**
     * Risk report from IP Insights analysis.
     * @type {RiskReportIp}
     * @memberof AnalyzeFraud200ResponseSourcesIp
     */
    riskReport: RiskReportIp;
}

/**
 * Check if a given object implements the AnalyzeFraud200ResponseSourcesIp interface.
 */
export function instanceOfAnalyzeFraud200ResponseSourcesIp(value: object): value is AnalyzeFraud200ResponseSourcesIp {
    if (!('ipAddress' in value) || value['ipAddress'] === undefined) return false;
    if (!('ipAddressNumber' in value) || value['ipAddressNumber'] === undefined) return false;
    if (!('ipType' in value) || value['ipType'] === undefined) return false;
    if (!('ipCidr' in value) || value['ipCidr'] === undefined) return false;
    if (!('connectionType' in value) || value['connectionType'] === undefined) return false;
    if (!('hostReverse' in value) || value['hostReverse'] === undefined) return false;
    if (!('geo' in value) || value['geo'] === undefined) return false;
    if (!('whois' in value) || value['whois'] === undefined) return false;
    if (!('trustedProvider' in value) || value['trustedProvider'] === undefined) return false;
    if (!('blocklisted' in value) || value['blocklisted'] === undefined) return false;
    if (!('riskReport' in value) || value['riskReport'] === undefined) return false;
    return true;
}

export function AnalyzeFraud200ResponseSourcesIpFromJSON(json: any): AnalyzeFraud200ResponseSourcesIp {
    return AnalyzeFraud200ResponseSourcesIpFromJSONTyped(json, false);
}

export function AnalyzeFraud200ResponseSourcesIpFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeFraud200ResponseSourcesIp {
    if (json == null) {
        return json;
    }
    return {
        
        'ipAddress': json['ipAddress'],
        'ipAddressNumber': json['ipAddressNumber'],
        'ipType': json['ipType'],
        'ipCidr': json['ipCidr'],
        'connectionType': json['connectionType'],
        'hostReverse': json['hostReverse'],
        'geo': GeoFromJSON(json['geo']),
        'whois': WhoisFromJSON(json['whois']),
        'trustedProvider': TrustedProviderFromJSON(json['trustedProvider']),
        'blocklisted': BlockListedFromJSON(json['blocklisted']),
        'riskReport': RiskReportIpFromJSON(json['riskReport']),
    };
}

export function AnalyzeFraud200ResponseSourcesIpToJSON(json: any): AnalyzeFraud200ResponseSourcesIp {
    return AnalyzeFraud200ResponseSourcesIpToJSONTyped(json, false);
}

export function AnalyzeFraud200ResponseSourcesIpToJSONTyped(value?: AnalyzeFraud200ResponseSourcesIp | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ipAddress': value['ipAddress'],
        'ipAddressNumber': value['ipAddressNumber'],
        'ipType': value['ipType'],
        'ipCidr': value['ipCidr'],
        'connectionType': value['connectionType'],
        'hostReverse': value['hostReverse'],
        'geo': GeoToJSON(value['geo']),
        'whois': WhoisToJSON(value['whois']),
        'trustedProvider': TrustedProviderToJSON(value['trustedProvider']),
        'blocklisted': BlockListedToJSON(value['blocklisted']),
        'riskReport': RiskReportIpToJSON(value['riskReport']),
    };
}

