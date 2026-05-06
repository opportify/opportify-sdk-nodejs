/* tslint:disable */
/* eslint-disable */

import type { IPVALIDATIONFAILED } from './IPVALIDATIONFAILED';
import {
    instanceOfIPVALIDATIONFAILED,
    IPVALIDATIONFAILEDFromJSON,
    IPVALIDATIONFAILEDFromJSONTyped,
    IPVALIDATIONFAILEDToJSON,
} from './IPVALIDATIONFAILED';
import type { MALFORMEDREQUEST1 } from './MALFORMEDREQUEST1';
import {
    instanceOfMALFORMEDREQUEST1,
    MALFORMEDREQUEST1FromJSON,
    MALFORMEDREQUEST1FromJSONTyped,
    MALFORMEDREQUEST1ToJSON,
} from './MALFORMEDREQUEST1';

/**
 * @type AnalyzeIp400ResponseError
 * 
 * @export
 */
export type AnalyzeIp400ResponseError = IPVALIDATIONFAILED | MALFORMEDREQUEST1;

export function AnalyzeIp400ResponseErrorFromJSON(json: any): AnalyzeIp400ResponseError {
    return AnalyzeIp400ResponseErrorFromJSONTyped(json, false);
}

export function AnalyzeIp400ResponseErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeIp400ResponseError {
    if (json == null) {
        return json;
    }
    if (instanceOfIPVALIDATIONFAILED(json)) {
        return IPVALIDATIONFAILEDFromJSONTyped(json, true);
    }
    if (instanceOfMALFORMEDREQUEST1(json)) {
        return MALFORMEDREQUEST1FromJSONTyped(json, true);
    }

    return {} as any;
}

export function AnalyzeIp400ResponseErrorToJSON(json: any): any {
    return AnalyzeIp400ResponseErrorToJSONTyped(json, false);
}

export function AnalyzeIp400ResponseErrorToJSONTyped(value?: AnalyzeIp400ResponseError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfIPVALIDATIONFAILED(value)) {
        return IPVALIDATIONFAILEDToJSON(value as IPVALIDATIONFAILED);
    }
    if (instanceOfMALFORMEDREQUEST1(value)) {
        return MALFORMEDREQUEST1ToJSON(value as MALFORMEDREQUEST1);
    }

    return {};
}

