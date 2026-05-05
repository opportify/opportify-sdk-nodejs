/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BatchAnalyzeEmails403ResponseError
 */
export interface BatchAnalyzeEmails403ResponseError {
    /**
     * 
     * @type {string}
     * @memberof BatchAnalyzeEmails403ResponseError
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof BatchAnalyzeEmails403ResponseError
     */
    code?: string;
}

/**
 * Check if a given object implements the BatchAnalyzeEmails403ResponseError interface.
 */
export function instanceOfBatchAnalyzeEmails403ResponseError(value: object): value is BatchAnalyzeEmails403ResponseError {
    return true;
}

export function BatchAnalyzeEmails403ResponseErrorFromJSON(json: any): BatchAnalyzeEmails403ResponseError {
    return BatchAnalyzeEmails403ResponseErrorFromJSONTyped(json, false);
}

export function BatchAnalyzeEmails403ResponseErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchAnalyzeEmails403ResponseError {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
        'code': json['code'] == null ? undefined : json['code'],
    };
}

export function BatchAnalyzeEmails403ResponseErrorToJSON(json: any): BatchAnalyzeEmails403ResponseError {
    return BatchAnalyzeEmails403ResponseErrorToJSONTyped(json, false);
}

export function BatchAnalyzeEmails403ResponseErrorToJSONTyped(value?: BatchAnalyzeEmails403ResponseError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
        'code': value['code'],
    };
}

