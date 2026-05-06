/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * Response when an export request is accepted.
 * @export
 * @interface ExportCreatedResponse
 */
export interface ExportCreatedResponse {
    /**
     * The batch job identifier. Format: uuid. Example: "84d22c8b-2cb6-4606-bfb1-361244a097e4".
     * @type {string}
     * @memberof ExportCreatedResponse
     */
    jobId: string;
    /**
     * The unique identifier for the export job. Format: uuid. Example: "6f8d88ef-0896-4f69-90cd-7cc6ce5e6ddf".
     * @type {string}
     * @memberof ExportCreatedResponse
     */
    exportId: string;
    /**
     * Initial status of the export job. Allowed value: `QUEUED`. Example: `QUEUED`.
     * @type {string}
     * @memberof ExportCreatedResponse
     */
    status: string;
}

/**
 * Check if a given object implements the ExportCreatedResponse interface.
 */
export function instanceOfExportCreatedResponse(value: object): value is ExportCreatedResponse {
    if (!('jobId' in value) || value['jobId'] === undefined) return false;
    if (!('exportId' in value) || value['exportId'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function ExportCreatedResponseFromJSON(json: any): ExportCreatedResponse {
    return ExportCreatedResponseFromJSONTyped(json, false);
}

export function ExportCreatedResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportCreatedResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'jobId': json['jobId'],
        'exportId': json['exportId'],
        'status': json['status'],
    };
}

export function ExportCreatedResponseToJSON(json: any): ExportCreatedResponse {
    return ExportCreatedResponseToJSONTyped(json, false);
}

export function ExportCreatedResponseToJSONTyped(value?: ExportCreatedResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'jobId': value['jobId'],
        'exportId': value['exportId'],
        'status': value['status'],
    };
}

