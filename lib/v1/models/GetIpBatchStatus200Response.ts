/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
import type { GetEmailBatchStatus200ResponseDownloadUrls } from './GetEmailBatchStatus200ResponseDownloadUrls';
import {
    GetEmailBatchStatus200ResponseDownloadUrlsFromJSON,
    GetEmailBatchStatus200ResponseDownloadUrlsFromJSONTyped,
    GetEmailBatchStatus200ResponseDownloadUrlsToJSON,
    GetEmailBatchStatus200ResponseDownloadUrlsToJSONTyped,
} from './GetEmailBatchStatus200ResponseDownloadUrls';

/**
 * 
 * @export
 * @interface GetIpBatchStatus200Response
 */
export interface GetIpBatchStatus200Response {
    /**
     * Unique identifier for the batch job.
     * @type {string}
     * @memberof GetIpBatchStatus200Response
     */
    jobId?: string;
    /**
     * Name of the batch job, if provided.
     * @type {string}
     * @memberof GetIpBatchStatus200Response
     */
    name?: string;
    /**
     * Current status of the batch job. Allowed values: `QUEUED`, `PROCESSING`, `COMPLETED`, `ERROR`. Example: `COMPLETED`.
     * @type {string}
     * @memberof GetIpBatchStatus200Response
     */
    status?: string;
    /**
     * Description of the status, particularly useful when status is ERROR.
     * @type {string}
     * @memberof GetIpBatchStatus200Response
     */
    statusDescription?: string;
    /**
     * Percentage of completion for the batch job (0-100).
     * @type {number}
     * @memberof GetIpBatchStatus200Response
     */
    progress?: number;
    /**
     * 
     * @type {GetEmailBatchStatus200ResponseDownloadUrls}
     * @memberof GetIpBatchStatus200Response
     */
    downloadUrls?: GetEmailBatchStatus200ResponseDownloadUrls;
}

/**
 * Check if a given object implements the GetIpBatchStatus200Response interface.
 */
export function instanceOfGetIpBatchStatus200Response(value: object): value is GetIpBatchStatus200Response {
    return true;
}

export function GetIpBatchStatus200ResponseFromJSON(json: any): GetIpBatchStatus200Response {
    return GetIpBatchStatus200ResponseFromJSONTyped(json, false);
}

export function GetIpBatchStatus200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetIpBatchStatus200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'jobId': json['jobId'] == null ? undefined : json['jobId'],
        'name': json['name'] == null ? undefined : json['name'],
        'status': json['status'] == null ? undefined : json['status'],
        'statusDescription': json['statusDescription'] == null ? undefined : json['statusDescription'],
        'progress': json['progress'] == null ? undefined : json['progress'],
        'downloadUrls': json['downloadUrls'] == null ? undefined : GetEmailBatchStatus200ResponseDownloadUrlsFromJSON(json['downloadUrls']),
    };
}

export function GetIpBatchStatus200ResponseToJSON(json: any): GetIpBatchStatus200Response {
    return GetIpBatchStatus200ResponseToJSONTyped(json, false);
}

export function GetIpBatchStatus200ResponseToJSONTyped(value?: GetIpBatchStatus200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'jobId': value['jobId'],
        'name': value['name'],
        'status': value['status'],
        'statusDescription': value['statusDescription'],
        'progress': value['progress'],
        'downloadUrls': GetEmailBatchStatus200ResponseDownloadUrlsToJSON(value['downloadUrls']),
    };
}

