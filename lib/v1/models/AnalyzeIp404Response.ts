/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
import type { NOTFOUND } from './NOTFOUND';
import {
    NOTFOUNDFromJSON,
    NOTFOUNDFromJSONTyped,
    NOTFOUNDToJSON,
    NOTFOUNDToJSONTyped,
} from './NOTFOUND';

/**
 * 
 * @export
 * @interface AnalyzeIp404Response
 */
export interface AnalyzeIp404Response {
    /**
     * 
     * @type {NOTFOUND}
     * @memberof AnalyzeIp404Response
     */
    error?: NOTFOUND;
}

/**
 * Check if a given object implements the AnalyzeIp404Response interface.
 */
export function instanceOfAnalyzeIp404Response(value: object): value is AnalyzeIp404Response {
    return true;
}

export function AnalyzeIp404ResponseFromJSON(json: any): AnalyzeIp404Response {
    return AnalyzeIp404ResponseFromJSONTyped(json, false);
}

export function AnalyzeIp404ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeIp404Response {
    if (json == null) {
        return json;
    }
    return {
        
        'error': json['error'] == null ? undefined : NOTFOUNDFromJSON(json['error']),
    };
}

export function AnalyzeIp404ResponseToJSON(json: any): AnalyzeIp404Response {
    return AnalyzeIp404ResponseToJSONTyped(json, false);
}

export function AnalyzeIp404ResponseToJSONTyped(value?: AnalyzeIp404Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'error': NOTFOUNDToJSON(value['error']),
    };
}

