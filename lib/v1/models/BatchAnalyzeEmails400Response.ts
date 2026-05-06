/* tslint:disable */
/* eslint-disable */

import type { INVALIDDATA } from './INVALIDDATA';
import {
    instanceOfINVALIDDATA,
    INVALIDDATAFromJSON,
    INVALIDDATAFromJSONTyped,
    INVALIDDATAToJSON,
} from './INVALIDDATA';
import type { MALFORMEDREQUEST3 } from './MALFORMEDREQUEST3';
import {
    instanceOfMALFORMEDREQUEST3,
    MALFORMEDREQUEST3FromJSON,
    MALFORMEDREQUEST3FromJSONTyped,
    MALFORMEDREQUEST3ToJSON,
} from './MALFORMEDREQUEST3';

/**
 * @type BatchAnalyzeEmails400Response
 * 
 * @export
 */
export type BatchAnalyzeEmails400Response = INVALIDDATA | MALFORMEDREQUEST3;

export function BatchAnalyzeEmails400ResponseFromJSON(json: any): BatchAnalyzeEmails400Response {
    return BatchAnalyzeEmails400ResponseFromJSONTyped(json, false);
}

export function BatchAnalyzeEmails400ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchAnalyzeEmails400Response {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfINVALIDDATA(json)) {
        return INVALIDDATAFromJSONTyped(json, true);
    }
    if (instanceOfMALFORMEDREQUEST3(json)) {
        return MALFORMEDREQUEST3FromJSONTyped(json, true);
    }
    return {} as any;
}

export function BatchAnalyzeEmails400ResponseToJSON(json: any): any {
    return BatchAnalyzeEmails400ResponseToJSONTyped(json, false);
}

export function BatchAnalyzeEmails400ResponseToJSONTyped(value?: BatchAnalyzeEmails400Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfINVALIDDATA(value)) {
        return INVALIDDATAToJSON(value as INVALIDDATA);
    }
    if (instanceOfMALFORMEDREQUEST3(value)) {
        return MALFORMEDREQUEST3ToJSON(value as MALFORMEDREQUEST3);
    }
    return {};
}

