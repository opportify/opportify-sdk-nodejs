/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * Request body for creating a batch export.
 * @export
 * @interface ExportRequest
 */
export interface ExportRequest {
    /**
     * Output format for the export. If omitted, the server will use `csv` as the default format. Allowed values: `csv`, `json`. Example: `csv`.
     * @type {string}
     * @memberof ExportRequest
     */
    exportType?: string;
    /**
     * Field-level filters to apply to the export. Supports string filters (exact match, comma-separated, or arrays), numeric filters (exact values, arrays, or range objects with min/max), and nested field…
     * @type {{ [key: string]: any; }}
     * @memberof ExportRequest
     */
    filters?: { [key: string]: any; };
    /**
     * Array of field paths to include in the export. If omitted, all fields are included. Maximum 100 columns.
     * @type {Array<string>}
     * @memberof ExportRequest
     */
    columns?: Array<string>;
}

/**
 * Check if a given object implements the ExportRequest interface.
 */
export function instanceOfExportRequest(value: object): value is ExportRequest {
    return true;
}

export function ExportRequestFromJSON(json: any): ExportRequest {
    return ExportRequestFromJSONTyped(json, false);
}

export function ExportRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'exportType': json['exportType'] == null ? undefined : json['exportType'],
        'filters': json['filters'] == null ? undefined : json['filters'],
        'columns': json['columns'] == null ? undefined : json['columns'],
    };
}

export function ExportRequestToJSON(json: any): ExportRequest {
    return ExportRequestToJSONTyped(json, false);
}

export function ExportRequestToJSONTyped(value?: ExportRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'exportType': value['exportType'],
        'filters': value['filters'],
        'columns': value['columns'],
    };
}

