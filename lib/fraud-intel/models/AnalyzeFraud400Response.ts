/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AnalyzeFraud400Response
 */
export interface AnalyzeFraud400Response {
    /**
     * 
     * @type {string}
     * @memberof AnalyzeFraud400Response
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof AnalyzeFraud400Response
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the AnalyzeFraud400Response interface.
 */
export function instanceOfAnalyzeFraud400Response(value: object): value is AnalyzeFraud400Response {
    return true;
}

export function AnalyzeFraud400ResponseFromJSON(json: any): AnalyzeFraud400Response {
    return AnalyzeFraud400ResponseFromJSONTyped(json, false);
}

export function AnalyzeFraud400ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeFraud400Response {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function AnalyzeFraud400ResponseToJSON(json: any): AnalyzeFraud400Response {
    return AnalyzeFraud400ResponseToJSONTyped(json, false);
}

export function AnalyzeFraud400ResponseToJSONTyped(value?: AnalyzeFraud400Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}

