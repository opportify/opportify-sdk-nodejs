/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AnalyzeEmail500Response
 */
export interface AnalyzeEmail500Response {
    /**
     * 
     * @type {string}
     * @memberof AnalyzeEmail500Response
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof AnalyzeEmail500Response
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the AnalyzeEmail500Response interface.
 */
export function instanceOfAnalyzeEmail500Response(value: object): value is AnalyzeEmail500Response {
    return true;
}

export function AnalyzeEmail500ResponseFromJSON(json: any): AnalyzeEmail500Response {
    return AnalyzeEmail500ResponseFromJSONTyped(json, false);
}

export function AnalyzeEmail500ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeEmail500Response {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function AnalyzeEmail500ResponseToJSON(json: any): AnalyzeEmail500Response {
    return AnalyzeEmail500ResponseToJSONTyped(json, false);
}

export function AnalyzeEmail500ResponseToJSONTyped(value?: AnalyzeEmail500Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}

