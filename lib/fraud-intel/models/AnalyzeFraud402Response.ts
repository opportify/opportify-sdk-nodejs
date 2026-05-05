/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AnalyzeFraud402Response
 */
export interface AnalyzeFraud402Response {
    /**
     * 
     * @type {string}
     * @memberof AnalyzeFraud402Response
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof AnalyzeFraud402Response
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the AnalyzeFraud402Response interface.
 */
export function instanceOfAnalyzeFraud402Response(value: object): value is AnalyzeFraud402Response {
    return true;
}

export function AnalyzeFraud402ResponseFromJSON(json: any): AnalyzeFraud402Response {
    return AnalyzeFraud402ResponseFromJSONTyped(json, false);
}

export function AnalyzeFraud402ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeFraud402Response {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function AnalyzeFraud402ResponseToJSON(json: any): AnalyzeFraud402Response {
    return AnalyzeFraud402ResponseToJSONTyped(json, false);
}

export function AnalyzeFraud402ResponseToJSONTyped(value?: AnalyzeFraud402Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}

