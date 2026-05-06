/* tslint:disable */
/* eslint-disable */

import type { FORBIDDEN } from './FORBIDDEN';
import {
    instanceOfFORBIDDEN,
    FORBIDDENFromJSON,
    FORBIDDENFromJSONTyped,
    FORBIDDENToJSON,
} from './FORBIDDEN';
import type { INTERNALERROR } from './INTERNALERROR';
import {
    instanceOfINTERNALERROR,
    INTERNALERRORFromJSON,
    INTERNALERRORFromJSONTyped,
    INTERNALERRORToJSON,
} from './INTERNALERROR';
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
import type { MALFORMEDREQUEST1 } from './MALFORMEDREQUEST1';
import {
    instanceOfMALFORMEDREQUEST1,
    MALFORMEDREQUEST1FromJSON,
    MALFORMEDREQUEST1FromJSONTyped,
    MALFORMEDREQUEST1ToJSON,
} from './MALFORMEDREQUEST1';
import type { TOOMANYREQUESTS } from './TOOMANYREQUESTS';
import {
    instanceOfTOOMANYREQUESTS,
    TOOMANYREQUESTSFromJSON,
    TOOMANYREQUESTSFromJSONTyped,
    TOOMANYREQUESTSToJSON,
} from './TOOMANYREQUESTS';

/**
 * @type BatchAnalyzeEmails403Response
 * 
 * @export
 */
export type BatchAnalyzeEmails403Response = FORBIDDEN | INTERNALERROR | INVALIDPLAN | INVALIDTOKEN | MALFORMEDREQUEST1 | TOOMANYREQUESTS;

export function BatchAnalyzeEmails403ResponseFromJSON(json: any): BatchAnalyzeEmails403Response {
    return BatchAnalyzeEmails403ResponseFromJSONTyped(json, false);
}

export function BatchAnalyzeEmails403ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchAnalyzeEmails403Response {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfFORBIDDEN(json)) {
        return FORBIDDENFromJSONTyped(json, true);
    }
    if (instanceOfINTERNALERROR(json)) {
        return INTERNALERRORFromJSONTyped(json, true);
    }
    if (instanceOfINVALIDPLAN(json)) {
        return INVALIDPLANFromJSONTyped(json, true);
    }
    if (instanceOfINVALIDTOKEN(json)) {
        return INVALIDTOKENFromJSONTyped(json, true);
    }
    if (instanceOfMALFORMEDREQUEST1(json)) {
        return MALFORMEDREQUEST1FromJSONTyped(json, true);
    }
    if (instanceOfTOOMANYREQUESTS(json)) {
        return TOOMANYREQUESTSFromJSONTyped(json, true);
    }
    return {} as any;
}

export function BatchAnalyzeEmails403ResponseToJSON(json: any): any {
    return BatchAnalyzeEmails403ResponseToJSONTyped(json, false);
}

export function BatchAnalyzeEmails403ResponseToJSONTyped(value?: BatchAnalyzeEmails403Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfFORBIDDEN(value)) {
        return FORBIDDENToJSON(value as FORBIDDEN);
    }
    if (instanceOfINTERNALERROR(value)) {
        return INTERNALERRORToJSON(value as INTERNALERROR);
    }
    if (instanceOfINVALIDPLAN(value)) {
        return INVALIDPLANToJSON(value as INVALIDPLAN);
    }
    if (instanceOfINVALIDTOKEN(value)) {
        return INVALIDTOKENToJSON(value as INVALIDTOKEN);
    }
    if (instanceOfMALFORMEDREQUEST1(value)) {
        return MALFORMEDREQUEST1ToJSON(value as MALFORMEDREQUEST1);
    }
    if (instanceOfTOOMANYREQUESTS(value)) {
        return TOOMANYREQUESTSToJSON(value as TOOMANYREQUESTS);
    }
    return {};
}

