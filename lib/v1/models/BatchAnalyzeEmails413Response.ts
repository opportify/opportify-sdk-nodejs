/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BatchAnalyzeEmails413Response
 */
export interface BatchAnalyzeEmails413Response {
    /**
     * 
     * @type {string}
     * @memberof BatchAnalyzeEmails413Response
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof BatchAnalyzeEmails413Response
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the BatchAnalyzeEmails413Response interface.
 */
export function instanceOfBatchAnalyzeEmails413Response(value: object): value is BatchAnalyzeEmails413Response {
    return true;
}

export function BatchAnalyzeEmails413ResponseFromJSON(json: any): BatchAnalyzeEmails413Response {
    return BatchAnalyzeEmails413ResponseFromJSONTyped(json, false);
}

export function BatchAnalyzeEmails413ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchAnalyzeEmails413Response {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function BatchAnalyzeEmails413ResponseToJSON(json: any): BatchAnalyzeEmails413Response {
    return BatchAnalyzeEmails413ResponseToJSONTyped(json, false);
}

export function BatchAnalyzeEmails413ResponseToJSONTyped(value?: BatchAnalyzeEmails413Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}

