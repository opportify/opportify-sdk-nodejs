/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GetEmailBatchStatus404ResponseError
 */
export interface GetEmailBatchStatus404ResponseError {
    /**
     * 
     * @type {string}
     * @memberof GetEmailBatchStatus404ResponseError
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof GetEmailBatchStatus404ResponseError
     */
    code?: string;
}

/**
 * Check if a given object implements the GetEmailBatchStatus404ResponseError interface.
 */
export function instanceOfGetEmailBatchStatus404ResponseError(value: object): value is GetEmailBatchStatus404ResponseError {
    return true;
}

export function GetEmailBatchStatus404ResponseErrorFromJSON(json: any): GetEmailBatchStatus404ResponseError {
    return GetEmailBatchStatus404ResponseErrorFromJSONTyped(json, false);
}

export function GetEmailBatchStatus404ResponseErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetEmailBatchStatus404ResponseError {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
        'code': json['code'] == null ? undefined : json['code'],
    };
}

export function GetEmailBatchStatus404ResponseErrorToJSON(json: any): GetEmailBatchStatus404ResponseError {
    return GetEmailBatchStatus404ResponseErrorToJSONTyped(json, false);
}

export function GetEmailBatchStatus404ResponseErrorToJSONTyped(value?: GetEmailBatchStatus404ResponseError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
        'code': value['code'],
    };
}

