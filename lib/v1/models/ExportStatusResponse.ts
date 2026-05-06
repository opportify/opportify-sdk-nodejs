/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
import type { ExportFilter } from './ExportFilter';
import {
    ExportFilterFromJSON,
    ExportFilterFromJSONTyped,
    ExportFilterToJSON,
    ExportFilterToJSONTyped,
} from './ExportFilter';

/**
 * Response containing the status and details of an export job.
 * @export
 * @interface ExportStatusResponse
 */
export interface ExportStatusResponse {
    /**
     * The batch job identifier. Format: uuid. Example: "84d22c8b-2cb6-4606-bfb1-361244a097e4".
     * @type {string}
     * @memberof ExportStatusResponse
     */
    jobId: string;
    /**
     * The unique identifier for the export job. Format: uuid. Example: "6f8d88ef-0896-4f69-90cd-7cc6ce5e6ddf".
     * @type {string}
     * @memberof ExportStatusResponse
     */
    exportId: string;
    /**
     * Current status of the export job. Allowed values: `QUEUED`, `PROCESSING`, `COMPLETED`, `FAILED`. Example: `COMPLETED`.
     * @type {string}
     * @memberof ExportStatusResponse
     */
    status: string;
    /**
     * The output format of the export. Allowed values: `csv`, `json`. Example: `csv`.
     * @type {string}
     * @memberof ExportStatusResponse
     */
    format: string;
    /**
     * List of filters applied to the export.
     * @type {Array<ExportFilter>}
     * @memberof ExportStatusResponse
     */
    filters?: Array<ExportFilter>;
    /**
     * List of columns included in the export.
     * @type {Array<string>}
     * @memberof ExportStatusResponse
     */
    columns?: Array<string>;
    /**
     * Timestamp when the export was requested (ISO 8601 format). Format: date-time. Example: "2025-11-07T10:30:00.000Z".
     * @type {string}
     * @memberof ExportStatusResponse
     */
    requestedAt: string;
    /**
     * Timestamp when the export status was last updated (ISO 8601 format). Format: date-time. Example: "2025-11-07T10:32:15.000Z".
     * @type {string}
     * @memberof ExportStatusResponse
     */
    updatedAt: string;
    /**
     * Pre-signed URL to download the export file. Only present when status is `COMPLETED`. Format: uri. Example: "https://opportify-batch-analysis.s3.amazonaws.com/...".
     * @type {string}
     * @memberof ExportStatusResponse
     */
    downloadUrl?: string;
    /**
     * Expiration timestamp for the download URL (ISO 8601 format). Only present when status is `COMPLETED`. Format: date-time. Example: "2025-11-07T14:32:15.000Z".
     * @type {string}
     * @memberof ExportStatusResponse
     */
    expiresAt?: string;
    /**
     * Size of the export file in bytes. Only present when status is `COMPLETED`.
     * @type {number}
     * @memberof ExportStatusResponse
     */
    resultSizeBytes?: number;
    /**
     * Error code if the export failed. Only present when status is `FAILED`.
     * @type {string}
     * @memberof ExportStatusResponse
     */
    errorCode?: string;
    /**
     * Error message if the export failed. Only present when status is `FAILED`.
     * @type {string}
     * @memberof ExportStatusResponse
     */
    errorMessage?: string;
}

/**
 * Check if a given object implements the ExportStatusResponse interface.
 */
export function instanceOfExportStatusResponse(value: object): value is ExportStatusResponse {
    if (!('jobId' in value) || value['jobId'] === undefined) return false;
    if (!('exportId' in value) || value['exportId'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('format' in value) || value['format'] === undefined) return false;
    if (!('requestedAt' in value) || value['requestedAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function ExportStatusResponseFromJSON(json: any): ExportStatusResponse {
    return ExportStatusResponseFromJSONTyped(json, false);
}

export function ExportStatusResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportStatusResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'jobId': json['jobId'],
        'exportId': json['exportId'],
        'status': json['status'],
        'format': json['format'],
        'filters': json['filters'] == null ? undefined : ((json['filters'] as Array<any>).map(ExportFilterFromJSON)),
        'columns': json['columns'] == null ? undefined : json['columns'],
        'requestedAt': json['requestedAt'],
        'updatedAt': json['updatedAt'],
        'downloadUrl': json['downloadUrl'] == null ? undefined : json['downloadUrl'],
        'expiresAt': json['expiresAt'] == null ? undefined : json['expiresAt'],
        'resultSizeBytes': json['resultSizeBytes'] == null ? undefined : json['resultSizeBytes'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
    };
}

export function ExportStatusResponseToJSON(json: any): ExportStatusResponse {
    return ExportStatusResponseToJSONTyped(json, false);
}

export function ExportStatusResponseToJSONTyped(value?: ExportStatusResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'jobId': value['jobId'],
        'exportId': value['exportId'],
        'status': value['status'],
        'format': value['format'],
        'filters': value['filters'] == null ? undefined : ((value['filters'] as Array<any>).map(ExportFilterToJSON)),
        'columns': value['columns'],
        'requestedAt': value['requestedAt'],
        'updatedAt': value['updatedAt'],
        'downloadUrl': value['downloadUrl'],
        'expiresAt': value['expiresAt'],
        'resultSizeBytes': value['resultSizeBytes'],
        'errorCode': value['errorCode'],
        'errorMessage': value['errorMessage'],
    };
}

