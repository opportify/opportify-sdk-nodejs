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
import type { QUOTAEXCEEDED } from './QUOTAEXCEEDED';
import {
    instanceOfQUOTAEXCEEDED,
    QUOTAEXCEEDEDFromJSON,
    QUOTAEXCEEDEDFromJSONTyped,
    QUOTAEXCEEDEDToJSON,
} from './QUOTAEXCEEDED';
import type { TOOMANYREQUESTS } from './TOOMANYREQUESTS';
import {
    instanceOfTOOMANYREQUESTS,
    TOOMANYREQUESTSFromJSON,
    TOOMANYREQUESTSFromJSONTyped,
    TOOMANYREQUESTSToJSON,
} from './TOOMANYREQUESTS';

/**
 * @type AnalyzeEmail403Response
 * 
 * @export
 */
export type AnalyzeEmail403Response = FORBIDDEN | INTERNALERROR | INVALIDPLAN | INVALIDTOKEN | MALFORMEDREQUEST1 | QUOTAEXCEEDED | TOOMANYREQUESTS;

export function AnalyzeEmail403ResponseFromJSON(json: any): AnalyzeEmail403Response {
    return AnalyzeEmail403ResponseFromJSONTyped(json, false);
}

export function AnalyzeEmail403ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeEmail403Response {
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
    if (instanceOfQUOTAEXCEEDED(json)) {
        return QUOTAEXCEEDEDFromJSONTyped(json, true);
    }
    if (instanceOfTOOMANYREQUESTS(json)) {
        return TOOMANYREQUESTSFromJSONTyped(json, true);
    }
    return {} as any;
}

export function AnalyzeEmail403ResponseToJSON(json: any): any {
    return AnalyzeEmail403ResponseToJSONTyped(json, false);
}

export function AnalyzeEmail403ResponseToJSONTyped(value?: AnalyzeEmail403Response | null, ignoreDiscriminator: boolean = false): any {
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
    if (instanceOfQUOTAEXCEEDED(value)) {
        return QUOTAEXCEEDEDToJSON(value as QUOTAEXCEEDED);
    }
    if (instanceOfTOOMANYREQUESTS(value)) {
        return TOOMANYREQUESTSToJSON(value as TOOMANYREQUESTS);
    }
    return {};
}

