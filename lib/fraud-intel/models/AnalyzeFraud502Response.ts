/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AnalyzeFraud502Response
 */
export interface AnalyzeFraud502Response {
    /**
     * 
     * @type {string}
     * @memberof AnalyzeFraud502Response
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof AnalyzeFraud502Response
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the AnalyzeFraud502Response interface.
 */
export function instanceOfAnalyzeFraud502Response(value: object): value is AnalyzeFraud502Response {
    return true;
}

export function AnalyzeFraud502ResponseFromJSON(json: any): AnalyzeFraud502Response {
    return AnalyzeFraud502ResponseFromJSONTyped(json, false);
}

export function AnalyzeFraud502ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeFraud502Response {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function AnalyzeFraud502ResponseToJSON(json: any): AnalyzeFraud502Response {
    return AnalyzeFraud502ResponseToJSONTyped(json, false);
}

export function AnalyzeFraud502ResponseToJSONTyped(value?: AnalyzeFraud502Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}

