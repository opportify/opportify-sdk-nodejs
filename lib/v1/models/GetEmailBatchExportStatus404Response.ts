/* tslint:disable */
/* eslint-disable */

import type { EXPORTNOTFOUND } from './EXPORTNOTFOUND';
import {
    instanceOfEXPORTNOTFOUND,
    EXPORTNOTFOUNDFromJSON,
    EXPORTNOTFOUNDFromJSONTyped,
    EXPORTNOTFOUNDToJSON,
} from './EXPORTNOTFOUND';
import type { JOBNOTFOUND } from './JOBNOTFOUND';
import {
    instanceOfJOBNOTFOUND,
    JOBNOTFOUNDFromJSON,
    JOBNOTFOUNDFromJSONTyped,
    JOBNOTFOUNDToJSON,
} from './JOBNOTFOUND';

/**
 * @type GetEmailBatchExportStatus404Response
 * 
 * @export
 */
export type GetEmailBatchExportStatus404Response = EXPORTNOTFOUND | JOBNOTFOUND;

export function GetEmailBatchExportStatus404ResponseFromJSON(json: any): GetEmailBatchExportStatus404Response {
    return GetEmailBatchExportStatus404ResponseFromJSONTyped(json, false);
}

export function GetEmailBatchExportStatus404ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetEmailBatchExportStatus404Response {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfEXPORTNOTFOUND(json)) {
        return EXPORTNOTFOUNDFromJSONTyped(json, true);
    }
    if (instanceOfJOBNOTFOUND(json)) {
        return JOBNOTFOUNDFromJSONTyped(json, true);
    }
    return {} as any;
}

export function GetEmailBatchExportStatus404ResponseToJSON(json: any): any {
    return GetEmailBatchExportStatus404ResponseToJSONTyped(json, false);
}

export function GetEmailBatchExportStatus404ResponseToJSONTyped(value?: GetEmailBatchExportStatus404Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfEXPORTNOTFOUND(value)) {
        return EXPORTNOTFOUNDToJSON(value as EXPORTNOTFOUND);
    }
    if (instanceOfJOBNOTFOUND(value)) {
        return JOBNOTFOUNDToJSON(value as JOBNOTFOUND);
    }
    return {};
}

