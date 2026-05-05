/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * Describes a filter applied to an export.
 * @export
 * @interface ExportFilter
 */
export interface ExportFilter {
    /**
     * The field path that was filtered (supports dot notation for nested fields).
     * @type {string}
     * @memberof ExportFilter
     */
    field: string;
    /**
     * The type of filter applied. Allowed values: `string`, `number-range`, `number`. Example: `number-range`.
     * @type {string}
     * @memberof ExportFilter
     */
    kind: string;
    /**
     * Array of values for string filters.
     * @type {Array<string>}
     * @memberof ExportFilter
     */
    values?: Array<string>;
    /**
     * Minimum value for numeric range filters.
     * @type {number}
     * @memberof ExportFilter
     */
    min?: number;
    /**
     * Maximum value for numeric range filters.
     * @type {number}
     * @memberof ExportFilter
     */
    max?: number;
}

/**
 * Check if a given object implements the ExportFilter interface.
 */
export function instanceOfExportFilter(value: object): value is ExportFilter {
    if (!('field' in value) || value['field'] === undefined) return false;
    if (!('kind' in value) || value['kind'] === undefined) return false;
    return true;
}

export function ExportFilterFromJSON(json: any): ExportFilter {
    return ExportFilterFromJSONTyped(json, false);
}

export function ExportFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportFilter {
    if (json == null) {
        return json;
    }
    return {
        
        'field': json['field'],
        'kind': json['kind'],
        'values': json['values'] == null ? undefined : json['values'],
        'min': json['min'] == null ? undefined : json['min'],
        'max': json['max'] == null ? undefined : json['max'],
    };
}

export function ExportFilterToJSON(json: any): ExportFilter {
    return ExportFilterToJSONTyped(json, false);
}

export function ExportFilterToJSONTyped(value?: ExportFilter | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'field': value['field'],
        'kind': value['kind'],
        'values': value['values'],
        'min': value['min'],
        'max': value['max'],
    };
}

