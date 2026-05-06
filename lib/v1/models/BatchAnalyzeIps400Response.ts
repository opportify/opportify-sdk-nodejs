/* tslint:disable */
/* eslint-disable */

import type { INVALIDDATA1 } from './INVALIDDATA1';
import {
    instanceOfINVALIDDATA1,
    INVALIDDATA1FromJSON,
    INVALIDDATA1FromJSONTyped,
    INVALIDDATA1ToJSON,
} from './INVALIDDATA1';
import type { MALFORMEDREQUEST3 } from './MALFORMEDREQUEST3';
import {
    instanceOfMALFORMEDREQUEST3,
    MALFORMEDREQUEST3FromJSON,
    MALFORMEDREQUEST3FromJSONTyped,
    MALFORMEDREQUEST3ToJSON,
} from './MALFORMEDREQUEST3';

/**
 * @type BatchAnalyzeIps400Response
 * 
 * @export
 */
export type BatchAnalyzeIps400Response = INVALIDDATA1 | MALFORMEDREQUEST3;

export function BatchAnalyzeIps400ResponseFromJSON(json: any): BatchAnalyzeIps400Response {
    return BatchAnalyzeIps400ResponseFromJSONTyped(json, false);
}

export function BatchAnalyzeIps400ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchAnalyzeIps400Response {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfINVALIDDATA1(json)) {
        return INVALIDDATA1FromJSONTyped(json, true);
    }
    if (instanceOfMALFORMEDREQUEST3(json)) {
        return MALFORMEDREQUEST3FromJSONTyped(json, true);
    }
    return {} as any;
}

export function BatchAnalyzeIps400ResponseToJSON(json: any): any {
    return BatchAnalyzeIps400ResponseToJSONTyped(json, false);
}

export function BatchAnalyzeIps400ResponseToJSONTyped(value?: BatchAnalyzeIps400Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfINVALIDDATA1(value)) {
        return INVALIDDATA1ToJSON(value as INVALIDDATA1);
    }
    if (instanceOfMALFORMEDREQUEST3(value)) {
        return MALFORMEDREQUEST3ToJSON(value as MALFORMEDREQUEST3);
    }
    return {};
}

