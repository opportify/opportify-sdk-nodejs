/* tslint:disable */
/* eslint-disable */

import type { INVALIDDATA1 } from './INVALIDDATA1';
import {
    instanceOfINVALIDDATA1,
    INVALIDDATA1FromJSON,
    INVALIDDATA1FromJSONTyped,
    INVALIDDATA1ToJSON,
} from './INVALIDDATA1';
import type { MALFORMEDREQUEST2 } from './MALFORMEDREQUEST2';
import {
    instanceOfMALFORMEDREQUEST2,
    MALFORMEDREQUEST2FromJSON,
    MALFORMEDREQUEST2FromJSONTyped,
    MALFORMEDREQUEST2ToJSON,
} from './MALFORMEDREQUEST2';

/**
 * @type BatchAnalyzeIps400ResponseError
 * 
 * @export
 */
export type BatchAnalyzeIps400ResponseError = INVALIDDATA1 | MALFORMEDREQUEST2;

export function BatchAnalyzeIps400ResponseErrorFromJSON(json: any): BatchAnalyzeIps400ResponseError {
    return BatchAnalyzeIps400ResponseErrorFromJSONTyped(json, false);
}

export function BatchAnalyzeIps400ResponseErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchAnalyzeIps400ResponseError {
    if (json == null) {
        return json;
    }
    if (instanceOfINVALIDDATA1(json)) {
        return INVALIDDATA1FromJSONTyped(json, true);
    }
    if (instanceOfMALFORMEDREQUEST2(json)) {
        return MALFORMEDREQUEST2FromJSONTyped(json, true);
    }

    return {} as any;
}

export function BatchAnalyzeIps400ResponseErrorToJSON(json: any): any {
    return BatchAnalyzeIps400ResponseErrorToJSONTyped(json, false);
}

export function BatchAnalyzeIps400ResponseErrorToJSONTyped(value?: BatchAnalyzeIps400ResponseError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfINVALIDDATA1(value)) {
        return INVALIDDATA1ToJSON(value as INVALIDDATA1);
    }
    if (instanceOfMALFORMEDREQUEST2(value)) {
        return MALFORMEDREQUEST2ToJSON(value as MALFORMEDREQUEST2);
    }

    return {};
}

