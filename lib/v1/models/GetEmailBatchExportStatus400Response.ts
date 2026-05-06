/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GetEmailBatchExportStatus400Response
 */
export interface GetEmailBatchExportStatus400Response {
    /**
     * 
     * @type {string}
     * @memberof GetEmailBatchExportStatus400Response
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof GetEmailBatchExportStatus400Response
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the GetEmailBatchExportStatus400Response interface.
 */
export function instanceOfGetEmailBatchExportStatus400Response(value: object): value is GetEmailBatchExportStatus400Response {
    return true;
}

export function GetEmailBatchExportStatus400ResponseFromJSON(json: any): GetEmailBatchExportStatus400Response {
    return GetEmailBatchExportStatus400ResponseFromJSONTyped(json, false);
}

export function GetEmailBatchExportStatus400ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetEmailBatchExportStatus400Response {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function GetEmailBatchExportStatus400ResponseToJSON(json: any): GetEmailBatchExportStatus400Response {
    return GetEmailBatchExportStatus400ResponseToJSONTyped(json, false);
}

export function GetEmailBatchExportStatus400ResponseToJSONTyped(value?: GetEmailBatchExportStatus400Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}

