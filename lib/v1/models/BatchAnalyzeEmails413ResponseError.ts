/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BatchAnalyzeEmails413ResponseError
 */
export interface BatchAnalyzeEmails413ResponseError {
    /**
     * 
     * @type {string}
     * @memberof BatchAnalyzeEmails413ResponseError
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof BatchAnalyzeEmails413ResponseError
     */
    code?: string;
}

/**
 * Check if a given object implements the BatchAnalyzeEmails413ResponseError interface.
 */
export function instanceOfBatchAnalyzeEmails413ResponseError(value: object): value is BatchAnalyzeEmails413ResponseError {
    return true;
}

export function BatchAnalyzeEmails413ResponseErrorFromJSON(json: any): BatchAnalyzeEmails413ResponseError {
    return BatchAnalyzeEmails413ResponseErrorFromJSONTyped(json, false);
}

export function BatchAnalyzeEmails413ResponseErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchAnalyzeEmails413ResponseError {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
        'code': json['code'] == null ? undefined : json['code'],
    };
}

export function BatchAnalyzeEmails413ResponseErrorToJSON(json: any): BatchAnalyzeEmails413ResponseError {
    return BatchAnalyzeEmails413ResponseErrorToJSONTyped(json, false);
}

export function BatchAnalyzeEmails413ResponseErrorToJSONTyped(value?: BatchAnalyzeEmails413ResponseError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
        'code': value['code'],
    };
}

