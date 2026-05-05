/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BatchAnalyzeEmailsRequest
 */
export interface BatchAnalyzeEmailsRequest {
    /**
     * Array of email addresses to analyze.
     * @type {Array<string>}
     * @memberof BatchAnalyzeEmailsRequest
     */
    emails: Array<string>;
    /**
     * Optional name for the batch job.
     * @type {string}
     * @memberof BatchAnalyzeEmailsRequest
     */
    name?: string;
    /**
     * Enable AI-based analysis for insights.
     * @type {boolean}
     * @memberof BatchAnalyzeEmailsRequest
     */
    enableAI?: boolean;
    /**
     * Controls email auto-correction behavior for batch processing. Default: `false`.
     * @type {boolean}
     * @memberof BatchAnalyzeEmailsRequest
     */
    enableAutoCorrection?: boolean;
}

/**
 * Check if a given object implements the BatchAnalyzeEmailsRequest interface.
 */
export function instanceOfBatchAnalyzeEmailsRequest(value: object): value is BatchAnalyzeEmailsRequest {
    if (!('emails' in value) || value['emails'] === undefined) return false;
    return true;
}

export function BatchAnalyzeEmailsRequestFromJSON(json: any): BatchAnalyzeEmailsRequest {
    return BatchAnalyzeEmailsRequestFromJSONTyped(json, false);
}

export function BatchAnalyzeEmailsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchAnalyzeEmailsRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'emails': json['emails'],
        'name': json['name'] == null ? undefined : json['name'],
        'enableAI': json['enableAI'] == null ? undefined : json['enableAI'],
        'enableAutoCorrection': json['enableAutoCorrection'] == null ? undefined : json['enableAutoCorrection'],
    };
}

export function BatchAnalyzeEmailsRequestToJSON(json: any): BatchAnalyzeEmailsRequest {
    return BatchAnalyzeEmailsRequestToJSONTyped(json, false);
}

export function BatchAnalyzeEmailsRequestToJSONTyped(value?: BatchAnalyzeEmailsRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'emails': value['emails'],
        'name': value['name'],
        'enableAI': value['enableAI'],
        'enableAutoCorrection': value['enableAutoCorrection'],
    };
}

