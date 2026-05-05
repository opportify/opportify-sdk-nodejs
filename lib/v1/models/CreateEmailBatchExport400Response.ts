/* tslint:disable */
/* eslint-disable */

import type { CreateEmailBatchExport400ResponseOneOf } from './CreateEmailBatchExport400ResponseOneOf';
import {
    instanceOfCreateEmailBatchExport400ResponseOneOf,
    CreateEmailBatchExport400ResponseOneOfFromJSON,
    CreateEmailBatchExport400ResponseOneOfFromJSONTyped,
    CreateEmailBatchExport400ResponseOneOfToJSON,
} from './CreateEmailBatchExport400ResponseOneOf';
import type { CreateEmailBatchExport400ResponseOneOf1 } from './CreateEmailBatchExport400ResponseOneOf1';
import {
    instanceOfCreateEmailBatchExport400ResponseOneOf1,
    CreateEmailBatchExport400ResponseOneOf1FromJSON,
    CreateEmailBatchExport400ResponseOneOf1FromJSONTyped,
    CreateEmailBatchExport400ResponseOneOf1ToJSON,
} from './CreateEmailBatchExport400ResponseOneOf1';

/**
 * @type CreateEmailBatchExport400Response
 * 
 * @export
 */
export type CreateEmailBatchExport400Response = CreateEmailBatchExport400ResponseOneOf | CreateEmailBatchExport400ResponseOneOf1;

export function CreateEmailBatchExport400ResponseFromJSON(json: any): CreateEmailBatchExport400Response {
    return CreateEmailBatchExport400ResponseFromJSONTyped(json, false);
}

export function CreateEmailBatchExport400ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEmailBatchExport400Response {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfCreateEmailBatchExport400ResponseOneOf(json)) {
        return CreateEmailBatchExport400ResponseOneOfFromJSONTyped(json, true);
    }
    if (instanceOfCreateEmailBatchExport400ResponseOneOf1(json)) {
        return CreateEmailBatchExport400ResponseOneOf1FromJSONTyped(json, true);
    }
    return {} as any;
}

export function CreateEmailBatchExport400ResponseToJSON(json: any): any {
    return CreateEmailBatchExport400ResponseToJSONTyped(json, false);
}

export function CreateEmailBatchExport400ResponseToJSONTyped(value?: CreateEmailBatchExport400Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfCreateEmailBatchExport400ResponseOneOf(value)) {
        return CreateEmailBatchExport400ResponseOneOfToJSON(value as CreateEmailBatchExport400ResponseOneOf);
    }
    if (instanceOfCreateEmailBatchExport400ResponseOneOf1(value)) {
        return CreateEmailBatchExport400ResponseOneOf1ToJSON(value as CreateEmailBatchExport400ResponseOneOf1);
    }
    return {};
}

