/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GetEmailBatchStatus404Response
 */
export interface GetEmailBatchStatus404Response {
    /**
     * 
     * @type {string}
     * @memberof GetEmailBatchStatus404Response
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof GetEmailBatchStatus404Response
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the GetEmailBatchStatus404Response interface.
 */
export function instanceOfGetEmailBatchStatus404Response(value: object): value is GetEmailBatchStatus404Response {
    return true;
}

export function GetEmailBatchStatus404ResponseFromJSON(json: any): GetEmailBatchStatus404Response {
    return GetEmailBatchStatus404ResponseFromJSONTyped(json, false);
}

export function GetEmailBatchStatus404ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetEmailBatchStatus404Response {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function GetEmailBatchStatus404ResponseToJSON(json: any): GetEmailBatchStatus404Response {
    return GetEmailBatchStatus404ResponseToJSONTyped(json, false);
}

export function GetEmailBatchStatus404ResponseToJSONTyped(value?: GetEmailBatchStatus404Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}

