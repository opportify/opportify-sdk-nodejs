/* tslint:disable */
/* eslint-disable */

import type { IPVALIDATIONFAILED } from './IPVALIDATIONFAILED';
import {
    instanceOfIPVALIDATIONFAILED,
    IPVALIDATIONFAILEDFromJSON,
    IPVALIDATIONFAILEDFromJSONTyped,
    IPVALIDATIONFAILEDToJSON,
} from './IPVALIDATIONFAILED';
import type { MALFORMEDREQUEST2 } from './MALFORMEDREQUEST2';
import {
    instanceOfMALFORMEDREQUEST2,
    MALFORMEDREQUEST2FromJSON,
    MALFORMEDREQUEST2FromJSONTyped,
    MALFORMEDREQUEST2ToJSON,
} from './MALFORMEDREQUEST2';

/**
 * @type AnalyzeIp400Response
 * 
 * @export
 */
export type AnalyzeIp400Response = IPVALIDATIONFAILED | MALFORMEDREQUEST2;

export function AnalyzeIp400ResponseFromJSON(json: any): AnalyzeIp400Response {
    return AnalyzeIp400ResponseFromJSONTyped(json, false);
}

export function AnalyzeIp400ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeIp400Response {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfIPVALIDATIONFAILED(json)) {
        return IPVALIDATIONFAILEDFromJSONTyped(json, true);
    }
    if (instanceOfMALFORMEDREQUEST2(json)) {
        return MALFORMEDREQUEST2FromJSONTyped(json, true);
    }
    return {} as any;
}

export function AnalyzeIp400ResponseToJSON(json: any): any {
    return AnalyzeIp400ResponseToJSONTyped(json, false);
}

export function AnalyzeIp400ResponseToJSONTyped(value?: AnalyzeIp400Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfIPVALIDATIONFAILED(value)) {
        return IPVALIDATIONFAILEDToJSON(value as IPVALIDATIONFAILED);
    }
    if (instanceOfMALFORMEDREQUEST2(value)) {
        return MALFORMEDREQUEST2ToJSON(value as MALFORMEDREQUEST2);
    }
    return {};
}

