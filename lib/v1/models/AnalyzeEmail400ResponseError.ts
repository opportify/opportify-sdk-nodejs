/* tslint:disable */
/* eslint-disable */

import type { INVALIDEMAIL } from './INVALIDEMAIL';
import {
    instanceOfINVALIDEMAIL,
    INVALIDEMAILFromJSON,
    INVALIDEMAILFromJSONTyped,
    INVALIDEMAILToJSON,
} from './INVALIDEMAIL';
import type { MALFORMEDREQUEST } from './MALFORMEDREQUEST';
import {
    instanceOfMALFORMEDREQUEST,
    MALFORMEDREQUESTFromJSON,
    MALFORMEDREQUESTFromJSONTyped,
    MALFORMEDREQUESTToJSON,
} from './MALFORMEDREQUEST';

/**
 * @type AnalyzeEmail400ResponseError
 * 
 * @export
 */
export type AnalyzeEmail400ResponseError = INVALIDEMAIL | MALFORMEDREQUEST;

export function AnalyzeEmail400ResponseErrorFromJSON(json: any): AnalyzeEmail400ResponseError {
    return AnalyzeEmail400ResponseErrorFromJSONTyped(json, false);
}

export function AnalyzeEmail400ResponseErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeEmail400ResponseError {
    if (json == null) {
        return json;
    }
    if (instanceOfINVALIDEMAIL(json)) {
        return INVALIDEMAILFromJSONTyped(json, true);
    }
    if (instanceOfMALFORMEDREQUEST(json)) {
        return MALFORMEDREQUESTFromJSONTyped(json, true);
    }

    return {} as any;
}

export function AnalyzeEmail400ResponseErrorToJSON(json: any): any {
    return AnalyzeEmail400ResponseErrorToJSONTyped(json, false);
}

export function AnalyzeEmail400ResponseErrorToJSONTyped(value?: AnalyzeEmail400ResponseError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfINVALIDEMAIL(value)) {
        return INVALIDEMAILToJSON(value as INVALIDEMAIL);
    }
    if (instanceOfMALFORMEDREQUEST(value)) {
        return MALFORMEDREQUESTToJSON(value as MALFORMEDREQUEST);
    }

    return {};
}

