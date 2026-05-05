/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
import type { INTERNALERROR } from './INTERNALERROR';
import {
    INTERNALERRORFromJSON,
    INTERNALERRORFromJSONTyped,
    INTERNALERRORToJSON,
    INTERNALERRORToJSONTyped,
} from './INTERNALERROR';

/**
 * 
 * @export
 * @interface AnalyzeIp500Response
 */
export interface AnalyzeIp500Response {
    /**
     * 
     * @type {INTERNALERROR}
     * @memberof AnalyzeIp500Response
     */
    error?: INTERNALERROR;
}

/**
 * Check if a given object implements the AnalyzeIp500Response interface.
 */
export function instanceOfAnalyzeIp500Response(value: object): value is AnalyzeIp500Response {
    return true;
}

export function AnalyzeIp500ResponseFromJSON(json: any): AnalyzeIp500Response {
    return AnalyzeIp500ResponseFromJSONTyped(json, false);
}

export function AnalyzeIp500ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeIp500Response {
    if (json == null) {
        return json;
    }
    return {
        
        'error': json['error'] == null ? undefined : INTERNALERRORFromJSON(json['error']),
    };
}

export function AnalyzeIp500ResponseToJSON(json: any): AnalyzeIp500Response {
    return AnalyzeIp500ResponseToJSONTyped(json, false);
}

export function AnalyzeIp500ResponseToJSONTyped(value?: AnalyzeIp500Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'error': INTERNALERRORToJSON(value['error']),
    };
}

