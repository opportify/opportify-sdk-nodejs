/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AnalyzeIpRequest
 */
export interface AnalyzeIpRequest {
    /**
     * The IPv4 or IPv6 address to analyze.
     * @type {string}
     * @memberof AnalyzeIpRequest
     */
    ip: string;
    /**
     * Enable AI-driven analysis for the IP address. Default is `false`.
     * @type {boolean}
     * @memberof AnalyzeIpRequest
     */
    enableAI?: boolean;
}

/**
 * Check if a given object implements the AnalyzeIpRequest interface.
 */
export function instanceOfAnalyzeIpRequest(value: object): value is AnalyzeIpRequest {
    if (!('ip' in value) || value['ip'] === undefined) return false;
    return true;
}

export function AnalyzeIpRequestFromJSON(json: any): AnalyzeIpRequest {
    return AnalyzeIpRequestFromJSONTyped(json, false);
}

export function AnalyzeIpRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeIpRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'ip': json['ip'],
        'enableAI': json['enableAI'] == null ? undefined : json['enableAI'],
    };
}

export function AnalyzeIpRequestToJSON(json: any): AnalyzeIpRequest {
    return AnalyzeIpRequestToJSONTyped(json, false);
}

export function AnalyzeIpRequestToJSONTyped(value?: AnalyzeIpRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ip': value['ip'],
        'enableAI': value['enableAI'],
    };
}

