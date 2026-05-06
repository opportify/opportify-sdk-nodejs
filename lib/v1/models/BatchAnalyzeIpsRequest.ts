/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BatchAnalyzeIpsRequest
 */
export interface BatchAnalyzeIpsRequest {
    /**
     * Array of IP addresses to analyze.
     * @type {Array<string>}
     * @memberof BatchAnalyzeIpsRequest
     */
    ips: Array<string>;
    /**
     * Optional name for the batch job.
     * @type {string}
     * @memberof BatchAnalyzeIpsRequest
     */
    name?: string;
    /**
     * Enable AI-based analysis for insights.
     * @type {boolean}
     * @memberof BatchAnalyzeIpsRequest
     */
    enableAI?: boolean;
}

/**
 * Check if a given object implements the BatchAnalyzeIpsRequest interface.
 */
export function instanceOfBatchAnalyzeIpsRequest(value: object): value is BatchAnalyzeIpsRequest {
    if (!('ips' in value) || value['ips'] === undefined) return false;
    return true;
}

export function BatchAnalyzeIpsRequestFromJSON(json: any): BatchAnalyzeIpsRequest {
    return BatchAnalyzeIpsRequestFromJSONTyped(json, false);
}

export function BatchAnalyzeIpsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchAnalyzeIpsRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'ips': json['ips'],
        'name': json['name'] == null ? undefined : json['name'],
        'enableAI': json['enableAI'] == null ? undefined : json['enableAI'],
    };
}

export function BatchAnalyzeIpsRequestToJSON(json: any): BatchAnalyzeIpsRequest {
    return BatchAnalyzeIpsRequestToJSONTyped(json, false);
}

export function BatchAnalyzeIpsRequestToJSONTyped(value?: BatchAnalyzeIpsRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ips': value['ips'],
        'name': value['name'],
        'enableAI': value['enableAI'],
    };
}

