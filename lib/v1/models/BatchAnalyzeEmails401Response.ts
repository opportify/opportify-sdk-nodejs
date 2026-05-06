/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BatchAnalyzeEmails401Response
 */
export interface BatchAnalyzeEmails401Response {
    /**
     * 
     * @type {string}
     * @memberof BatchAnalyzeEmails401Response
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof BatchAnalyzeEmails401Response
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the BatchAnalyzeEmails401Response interface.
 */
export function instanceOfBatchAnalyzeEmails401Response(value: object): value is BatchAnalyzeEmails401Response {
    return true;
}

export function BatchAnalyzeEmails401ResponseFromJSON(json: any): BatchAnalyzeEmails401Response {
    return BatchAnalyzeEmails401ResponseFromJSONTyped(json, false);
}

export function BatchAnalyzeEmails401ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchAnalyzeEmails401Response {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function BatchAnalyzeEmails401ResponseToJSON(json: any): BatchAnalyzeEmails401Response {
    return BatchAnalyzeEmails401ResponseToJSONTyped(json, false);
}

export function BatchAnalyzeEmails401ResponseToJSONTyped(value?: BatchAnalyzeEmails401Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}

