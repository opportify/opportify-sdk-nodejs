/* tslint:disable */
/* eslint-disable */

import type { INVALIDPLAN } from './INVALIDPLAN';
import {
    instanceOfINVALIDPLAN,
    INVALIDPLANFromJSON,
    INVALIDPLANFromJSONTyped,
    INVALIDPLANToJSON,
} from './INVALIDPLAN';
import type { INVALIDTOKEN } from './INVALIDTOKEN';
import {
    instanceOfINVALIDTOKEN,
    INVALIDTOKENFromJSON,
    INVALIDTOKENFromJSONTyped,
    INVALIDTOKENToJSON,
} from './INVALIDTOKEN';

/**
 * @type AnalyzeEmail403ResponseError
 * 
 * @export
 */
export type AnalyzeEmail403ResponseError = INVALIDPLAN | INVALIDTOKEN;

export function AnalyzeEmail403ResponseErrorFromJSON(json: any): AnalyzeEmail403ResponseError {
    return AnalyzeEmail403ResponseErrorFromJSONTyped(json, false);
}

export function AnalyzeEmail403ResponseErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeEmail403ResponseError {
    if (json == null) {
        return json;
    }
    if (instanceOfINVALIDPLAN(json)) {
        return INVALIDPLANFromJSONTyped(json, true);
    }
    if (instanceOfINVALIDTOKEN(json)) {
        return INVALIDTOKENFromJSONTyped(json, true);
    }

    return {} as any;
}

export function AnalyzeEmail403ResponseErrorToJSON(json: any): any {
    return AnalyzeEmail403ResponseErrorToJSONTyped(json, false);
}

export function AnalyzeEmail403ResponseErrorToJSONTyped(value?: AnalyzeEmail403ResponseError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfINVALIDPLAN(value)) {
        return INVALIDPLANToJSON(value as INVALIDPLAN);
    }
    if (instanceOfINVALIDTOKEN(value)) {
        return INVALIDTOKENToJSON(value as INVALIDTOKEN);
    }

    return {};
}

