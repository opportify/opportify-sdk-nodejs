/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AnalyzeEmail500ResponseError
 */
export interface AnalyzeEmail500ResponseError {
    /**
     * 
     * @type {string}
     * @memberof AnalyzeEmail500ResponseError
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof AnalyzeEmail500ResponseError
     */
    code?: string;
}

/**
 * Check if a given object implements the AnalyzeEmail500ResponseError interface.
 */
export function instanceOfAnalyzeEmail500ResponseError(value: object): value is AnalyzeEmail500ResponseError {
    return true;
}

export function AnalyzeEmail500ResponseErrorFromJSON(json: any): AnalyzeEmail500ResponseError {
    return AnalyzeEmail500ResponseErrorFromJSONTyped(json, false);
}

export function AnalyzeEmail500ResponseErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeEmail500ResponseError {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
        'code': json['code'] == null ? undefined : json['code'],
    };
}

export function AnalyzeEmail500ResponseErrorToJSON(json: any): AnalyzeEmail500ResponseError {
    return AnalyzeEmail500ResponseErrorToJSONTyped(json, false);
}

export function AnalyzeEmail500ResponseErrorToJSONTyped(value?: AnalyzeEmail500ResponseError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
        'code': value['code'],
    };
}

