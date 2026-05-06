/* tslint:disable */
/* eslint-disable */

import type { INVALIDDATA } from './INVALIDDATA';
import {
    instanceOfINVALIDDATA,
    INVALIDDATAFromJSON,
    INVALIDDATAFromJSONTyped,
    INVALIDDATAToJSON,
} from './INVALIDDATA';
import type { MALFORMEDREQUEST2 } from './MALFORMEDREQUEST2';
import {
    instanceOfMALFORMEDREQUEST2,
    MALFORMEDREQUEST2FromJSON,
    MALFORMEDREQUEST2FromJSONTyped,
    MALFORMEDREQUEST2ToJSON,
} from './MALFORMEDREQUEST2';

/**
 * @type BatchAnalyzeEmails400ResponseError
 * 
 * @export
 */
export type BatchAnalyzeEmails400ResponseError = INVALIDDATA | MALFORMEDREQUEST2;

export function BatchAnalyzeEmails400ResponseErrorFromJSON(json: any): BatchAnalyzeEmails400ResponseError {
    return BatchAnalyzeEmails400ResponseErrorFromJSONTyped(json, false);
}

export function BatchAnalyzeEmails400ResponseErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchAnalyzeEmails400ResponseError {
    if (json == null) {
        return json;
    }
    if (instanceOfINVALIDDATA(json)) {
        return INVALIDDATAFromJSONTyped(json, true);
    }
    if (instanceOfMALFORMEDREQUEST2(json)) {
        return MALFORMEDREQUEST2FromJSONTyped(json, true);
    }

    return {} as any;
}

export function BatchAnalyzeEmails400ResponseErrorToJSON(json: any): any {
    return BatchAnalyzeEmails400ResponseErrorToJSONTyped(json, false);
}

export function BatchAnalyzeEmails400ResponseErrorToJSONTyped(value?: BatchAnalyzeEmails400ResponseError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfINVALIDDATA(value)) {
        return INVALIDDATAToJSON(value as INVALIDDATA);
    }
    if (instanceOfMALFORMEDREQUEST2(value)) {
        return MALFORMEDREQUEST2ToJSON(value as MALFORMEDREQUEST2);
    }

    return {};
}

