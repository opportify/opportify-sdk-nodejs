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
 * @interface GetEmailBatchStatus200Response
 */
export interface GetEmailBatchStatus200Response {
    /**
     * Unique identifier for the batch job.
     * @type {string}
     * @memberof GetEmailBatchStatus200Response
     */
    jobId?: string;
    /**
     * Name of the batch job, if provided.
     * @type {string}
     * @memberof GetEmailBatchStatus200Response
     */
    name?: string;
    /**
     * Current status of the batch job. Allowed values: `QUEUED`, `PROCESSING`, `COMPLETED`, `ERROR`. Example: `COMPLETED`.
     * @type {string}
     * @memberof GetEmailBatchStatus200Response
     */
    status?: string;
    /**
     * Description of the status, particularly useful when status is ERROR.
     * @type {string}
     * @memberof GetEmailBatchStatus200Response
     */
    statusDescription?: string;
    /**
     * Percentage of completion for the batch job (0-100).
     * @type {number}
     * @memberof GetEmailBatchStatus200Response
     */
    progress?: number;
    /**
     * 
     * @type {GetEmailBatchStatus200ResponseDownloadUrls}
     * @memberof GetEmailBatchStatus200Response
     */
    downloadUrls?: GetEmailBatchStatus200ResponseDownloadUrls;
}

/**
 * Check if a given object implements the GetEmailBatchStatus200Response interface.
 */
export function instanceOfGetEmailBatchStatus200Response(value: object): value is GetEmailBatchStatus200Response {
    return true;
}

export function GetEmailBatchStatus200ResponseFromJSON(json: any): GetEmailBatchStatus200Response {
    return GetEmailBatchStatus200ResponseFromJSONTyped(json, false);
}

export function GetEmailBatchStatus200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetEmailBatchStatus200Response {
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

export function GetEmailBatchStatus200ResponseToJSON(json: any): GetEmailBatchStatus200Response {
    return GetEmailBatchStatus200ResponseToJSONTyped(json, false);
}

export function GetEmailBatchStatus200ResponseToJSONTyped(value?: GetEmailBatchStatus200Response | null, ignoreDiscriminator: boolean = false): any {
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

