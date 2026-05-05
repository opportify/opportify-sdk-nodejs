/* tslint:disable */
/* eslint-disable */

import type { JOBNOTREADY } from './JOBNOTREADY';
import {
    instanceOfJOBNOTREADY,
    JOBNOTREADYFromJSON,
    JOBNOTREADYFromJSONTyped,
    JOBNOTREADYToJSON,
} from './JOBNOTREADY';
import type { MANIFESTNOTAVAILABLE } from './MANIFESTNOTAVAILABLE';
import {
    instanceOfMANIFESTNOTAVAILABLE,
    MANIFESTNOTAVAILABLEFromJSON,
    MANIFESTNOTAVAILABLEFromJSONTyped,
    MANIFESTNOTAVAILABLEToJSON,
} from './MANIFESTNOTAVAILABLE';

/**
 * @type CreateEmailBatchExport409Response
 * 
 * @export
 */
export type CreateEmailBatchExport409Response = JOBNOTREADY | MANIFESTNOTAVAILABLE;

export function CreateEmailBatchExport409ResponseFromJSON(json: any): CreateEmailBatchExport409Response {
    return CreateEmailBatchExport409ResponseFromJSONTyped(json, false);
}

export function CreateEmailBatchExport409ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEmailBatchExport409Response {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfJOBNOTREADY(json)) {
        return JOBNOTREADYFromJSONTyped(json, true);
    }
    if (instanceOfMANIFESTNOTAVAILABLE(json)) {
        return MANIFESTNOTAVAILABLEFromJSONTyped(json, true);
    }
    return {} as any;
}

export function CreateEmailBatchExport409ResponseToJSON(json: any): any {
    return CreateEmailBatchExport409ResponseToJSONTyped(json, false);
}

export function CreateEmailBatchExport409ResponseToJSONTyped(value?: CreateEmailBatchExport409Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfJOBNOTREADY(value)) {
        return JOBNOTREADYToJSON(value as JOBNOTREADY);
    }
    if (instanceOfMANIFESTNOTAVAILABLE(value)) {
        return MANIFESTNOTAVAILABLEToJSON(value as MANIFESTNOTAVAILABLE);
    }
    return {};
}

