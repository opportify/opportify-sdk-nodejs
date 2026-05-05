/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AnalyzeEmailRequest
 */
export interface AnalyzeEmailRequest {
    /**
     * The email address to validate.
     * @type {string}
     * @memberof AnalyzeEmailRequest
     */
    email: string;
    /**
     * Enable AI-driven risk analysis. Optional; defaults to `true`.
     * @type {boolean}
     * @memberof AnalyzeEmailRequest
     */
    enableAI?: boolean;
    /**
     * Controls email auto-correction behavior. Default: `false`.
     * @type {boolean}
     * @memberof AnalyzeEmailRequest
     */
    enableAutoCorrection?: boolean;
    /**
     * Include domain-level enrichment details. Optional; defaults to `true`. Set to `false` to omit the `domain` block even when the data exists.
     * @type {boolean}
     * @memberof AnalyzeEmailRequest
     */
    enableDomainEnrichment?: boolean;
}

/**
 * Check if a given object implements the AnalyzeEmailRequest interface.
 */
export function instanceOfAnalyzeEmailRequest(value: object): value is AnalyzeEmailRequest {
    if (!('email' in value) || value['email'] === undefined) return false;
    return true;
}

export function AnalyzeEmailRequestFromJSON(json: any): AnalyzeEmailRequest {
    return AnalyzeEmailRequestFromJSONTyped(json, false);
}

export function AnalyzeEmailRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeEmailRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'],
        'enableAI': json['enableAI'] == null ? undefined : json['enableAI'],
        'enableAutoCorrection': json['enableAutoCorrection'] == null ? undefined : json['enableAutoCorrection'],
        'enableDomainEnrichment': json['enableDomainEnrichment'] == null ? undefined : json['enableDomainEnrichment'],
    };
}

export function AnalyzeEmailRequestToJSON(json: any): AnalyzeEmailRequest {
    return AnalyzeEmailRequestToJSONTyped(json, false);
}

export function AnalyzeEmailRequestToJSONTyped(value?: AnalyzeEmailRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'email': value['email'],
        'enableAI': value['enableAI'],
        'enableAutoCorrection': value['enableAutoCorrection'],
        'enableDomainEnrichment': value['enableDomainEnrichment'],
    };
}

