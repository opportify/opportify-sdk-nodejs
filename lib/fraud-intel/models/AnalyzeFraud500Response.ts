/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AnalyzeFraud500Response
 */
export interface AnalyzeFraud500Response {
    /**
     * 
     * @type {string}
     * @memberof AnalyzeFraud500Response
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof AnalyzeFraud500Response
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the AnalyzeFraud500Response interface.
 */
export function instanceOfAnalyzeFraud500Response(value: object): value is AnalyzeFraud500Response {
    return true;
}

export function AnalyzeFraud500ResponseFromJSON(json: any): AnalyzeFraud500Response {
    return AnalyzeFraud500ResponseFromJSONTyped(json, false);
}

export function AnalyzeFraud500ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeFraud500Response {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function AnalyzeFraud500ResponseToJSON(json: any): AnalyzeFraud500Response {
    return AnalyzeFraud500ResponseToJSONTyped(json, false);
}

export function AnalyzeFraud500ResponseToJSONTyped(value?: AnalyzeFraud500Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}

