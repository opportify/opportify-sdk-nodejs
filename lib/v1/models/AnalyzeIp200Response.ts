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
 * 
 * @export
 * @interface AnalyzeIp200Response
 */
export interface AnalyzeIp200Response {
    /**
     * The analyzed IP address.
     * @type {string}
     * @memberof AnalyzeIp200Response
     */
    ipAddress: string;
    /**
     * Numeric representation of the IP address.
     * @type {number}
     * @memberof AnalyzeIp200Response
     */
    ipAddressNumber: number;
    /**
     * Type of the IP address (IPv4 or IPv6).
     * @type {string}
     * @memberof AnalyzeIp200Response
     */
    ipType: string;
    /**
     * CIDR notation of the IP address.
     * @type {string}
     * @memberof AnalyzeIp200Response
     */
    ipCidr: string;
    /**
     * The **connectionType** element provides information about the type of connection associated with a given IP address. Our system employs a **dynamic and evolving approach**, leveraging multiple data…
     * @type {string}
     * @memberof AnalyzeIp200Response
     */
    connectionType: string;
    /**
     * Real time reverse DNS lookup result for the IP address.
     * @type {string}
     * @memberof AnalyzeIp200Response
     */
    hostReverse: string;
    /**
     * 
     * @type {Geo}
     * @memberof AnalyzeIp200Response
     */
    geo: Geo;
    /**
     * 
     * @type {Whois}
     * @memberof AnalyzeIp200Response
     */
    whois: Whois;
    /**
     * 
     * @type {TrustedProvider}
     * @memberof AnalyzeIp200Response
     */
    trustedProvider: TrustedProvider;
    /**
     * 
     * @type {BlockListed}
     * @memberof AnalyzeIp200Response
     */
    blocklisted: BlockListed;
    /**
     * 
     * @type {RiskReportIp}
     * @memberof AnalyzeIp200Response
     */
    riskReport: RiskReportIp;
}

/**
 * Check if a given object implements the AnalyzeIp200Response interface.
 */
export function instanceOfAnalyzeIp200Response(value: object): value is AnalyzeIp200Response {
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

export function AnalyzeIp200ResponseFromJSON(json: any): AnalyzeIp200Response {
    return AnalyzeIp200ResponseFromJSONTyped(json, false);
}

export function AnalyzeIp200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeIp200Response {
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

export function AnalyzeIp200ResponseToJSON(json: any): AnalyzeIp200Response {
    return AnalyzeIp200ResponseToJSONTyped(json, false);
}

export function AnalyzeIp200ResponseToJSONTyped(value?: AnalyzeIp200Response | null, ignoreDiscriminator: boolean = false): any {
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

