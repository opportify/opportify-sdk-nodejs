/* tslint:disable */
/* eslint-disable */

import type { FORBIDDEN } from './FORBIDDEN';
import {
    instanceOfFORBIDDEN,
    FORBIDDENFromJSON,
    FORBIDDENFromJSONTyped,
    FORBIDDENToJSON,
} from './FORBIDDEN';
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
 * @type AnalyzeFraud403Response
 * 
 * @export
 */
export type AnalyzeFraud403Response = FORBIDDEN | INVALIDPLAN | INVALIDTOKEN;

export function AnalyzeFraud403ResponseFromJSON(json: any): AnalyzeFraud403Response {
    return AnalyzeFraud403ResponseFromJSONTyped(json, false);
}

export function AnalyzeFraud403ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeFraud403Response {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfFORBIDDEN(json)) {
        return FORBIDDENFromJSONTyped(json, true);
    }
    if (instanceOfINVALIDPLAN(json)) {
        return INVALIDPLANFromJSONTyped(json, true);
    }
    if (instanceOfINVALIDTOKEN(json)) {
        return INVALIDTOKENFromJSONTyped(json, true);
    }
    return {} as any;
}

export function AnalyzeFraud403ResponseToJSON(json: any): any {
    return AnalyzeFraud403ResponseToJSONTyped(json, false);
}

export function AnalyzeFraud403ResponseToJSONTyped(value?: AnalyzeFraud403Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfFORBIDDEN(value)) {
        return FORBIDDENToJSON(value as FORBIDDEN);
    }
    if (instanceOfINVALIDPLAN(value)) {
        return INVALIDPLANToJSON(value as INVALIDPLAN);
    }
    if (instanceOfINVALIDTOKEN(value)) {
        return INVALIDTOKENToJSON(value as INVALIDTOKEN);
    }
    return {};
}

