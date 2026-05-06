/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BatchAnalyzeEmails429Response
 */
export interface BatchAnalyzeEmails429Response {
    /**
     * 
     * @type {string}
     * @memberof BatchAnalyzeEmails429Response
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof BatchAnalyzeEmails429Response
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the BatchAnalyzeEmails429Response interface.
 */
export function instanceOfBatchAnalyzeEmails429Response(value: object): value is BatchAnalyzeEmails429Response {
    return true;
}

export function BatchAnalyzeEmails429ResponseFromJSON(json: any): BatchAnalyzeEmails429Response {
    return BatchAnalyzeEmails429ResponseFromJSONTyped(json, false);
}

export function BatchAnalyzeEmails429ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchAnalyzeEmails429Response {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function BatchAnalyzeEmails429ResponseToJSON(json: any): BatchAnalyzeEmails429Response {
    return BatchAnalyzeEmails429ResponseToJSONTyped(json, false);
}

export function BatchAnalyzeEmails429ResponseToJSONTyped(value?: BatchAnalyzeEmails429Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}

