/* tslint:disable */
/* eslint-disable */

import type { INVALIDPLAN1 } from './INVALIDPLAN1';
import {
    instanceOfINVALIDPLAN1,
    INVALIDPLAN1FromJSON,
    INVALIDPLAN1FromJSONTyped,
    INVALIDPLAN1ToJSON,
} from './INVALIDPLAN1';
import type { QUOTAEXCEEDED } from './QUOTAEXCEEDED';
import {
    instanceOfQUOTAEXCEEDED,
    QUOTAEXCEEDEDFromJSON,
    QUOTAEXCEEDEDFromJSONTyped,
    QUOTAEXCEEDEDToJSON,
} from './QUOTAEXCEEDED';

/**
 * @type BatchAnalyzeEmails402Response
 * 
 * @export
 */
export type BatchAnalyzeEmails402Response = INVALIDPLAN1 | QUOTAEXCEEDED;

export function BatchAnalyzeEmails402ResponseFromJSON(json: any): BatchAnalyzeEmails402Response {
    return BatchAnalyzeEmails402ResponseFromJSONTyped(json, false);
}

export function BatchAnalyzeEmails402ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchAnalyzeEmails402Response {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfINVALIDPLAN1(json)) {
        return INVALIDPLAN1FromJSONTyped(json, true);
    }
    if (instanceOfQUOTAEXCEEDED(json)) {
        return QUOTAEXCEEDEDFromJSONTyped(json, true);
    }
    return {} as any;
}

export function BatchAnalyzeEmails402ResponseToJSON(json: any): any {
    return BatchAnalyzeEmails402ResponseToJSONTyped(json, false);
}

export function BatchAnalyzeEmails402ResponseToJSONTyped(value?: BatchAnalyzeEmails402Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfINVALIDPLAN1(value)) {
        return INVALIDPLAN1ToJSON(value as INVALIDPLAN1);
    }
    if (instanceOfQUOTAEXCEEDED(value)) {
        return QUOTAEXCEEDEDToJSON(value as QUOTAEXCEEDED);
    }
    return {};
}

