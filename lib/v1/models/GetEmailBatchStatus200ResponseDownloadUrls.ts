/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * Available download URLs for the batch job results. Only present when status is "COMPLETED".
 * @export
 * @interface GetEmailBatchStatus200ResponseDownloadUrls
 */
export interface GetEmailBatchStatus200ResponseDownloadUrls {
    /**
     * Pre-signed URL to download results in CSV format.
     * @type {string}
     * @memberof GetEmailBatchStatus200ResponseDownloadUrls
     */
    csv?: string;
    /**
     * Pre-signed URL to download results in JSON format.
     * @type {string}
     * @memberof GetEmailBatchStatus200ResponseDownloadUrls
     */
    json?: string;
    /**
     * Pre-signed URL to download compressed results in CSV format (gzip).
     * @type {string}
     * @memberof GetEmailBatchStatus200ResponseDownloadUrls
     */
    csvCompressed?: string;
    /**
     * Pre-signed URL to download compressed results in JSON format (gzip).
     * @type {string}
     * @memberof GetEmailBatchStatus200ResponseDownloadUrls
     */
    jsonCompressed?: string;
}

/**
 * Check if a given object implements the GetEmailBatchStatus200ResponseDownloadUrls interface.
 */
export function instanceOfGetEmailBatchStatus200ResponseDownloadUrls(value: object): value is GetEmailBatchStatus200ResponseDownloadUrls {
    return true;
}

export function GetEmailBatchStatus200ResponseDownloadUrlsFromJSON(json: any): GetEmailBatchStatus200ResponseDownloadUrls {
    return GetEmailBatchStatus200ResponseDownloadUrlsFromJSONTyped(json, false);
}

export function GetEmailBatchStatus200ResponseDownloadUrlsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetEmailBatchStatus200ResponseDownloadUrls {
    if (json == null) {
        return json;
    }
    return {
        
        'csv': json['csv'] == null ? undefined : json['csv'],
        'json': json['json'] == null ? undefined : json['json'],
        'csvCompressed': json['csvCompressed'] == null ? undefined : json['csvCompressed'],
        'jsonCompressed': json['jsonCompressed'] == null ? undefined : json['jsonCompressed'],
    };
}

export function GetEmailBatchStatus200ResponseDownloadUrlsToJSON(json: any): GetEmailBatchStatus200ResponseDownloadUrls {
    return GetEmailBatchStatus200ResponseDownloadUrlsToJSONTyped(json, false);
}

export function GetEmailBatchStatus200ResponseDownloadUrlsToJSONTyped(value?: GetEmailBatchStatus200ResponseDownloadUrls | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'csv': value['csv'],
        'json': value['json'],
        'csvCompressed': value['csvCompressed'],
        'jsonCompressed': value['jsonCompressed'],
    };
}

